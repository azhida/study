# Docker + Nginx 搭建多个子域名站点

用到 nginx 反向代理

域名：  
- aa.test
- bb.test


## 架构
- docker 创建 3个 nginx 容器：nginx_proxy、nginx_1、nginx_2、nginx_3
- nginx_proxy ： 反向代理，80:80
- nginx_1 ：站点1，输出 nginx_1，8081:80 ，配置域名 `aa.test`
- nginx_2 ：站点1，输出 nginx_2，8082:80 ，配置域名 `bb.test`
- nginx_3 ：站点1，输出 nginx_3，8083:80

## 安装 docker
自行百度 docker 安装方法。

## docker 安装 nginx
```
docker pull nginx
```

## 准备 nginx 容器需要挂载的配置文件
- 根目录下创建文件夹 `/mydockerdata/nginx`
```
# mkdir -p : 一次性创建多级文件目录
mkdir -p /mydockerdata/nginx
```
- 创建 nginx 容器
```
docker run --name nginx -d nginx
```
- 查看容器并获取 nginx 的容器 ID
```
docker ps
# CONTAINER ID 为 162a41ff80f3
```
- 拷贝 nginx 配置文件 到 目录 `/mydockerdata/nginx/` 下
```
docker cp 【CONTAINER ID】:/etc/nginx/nginx.conf /mydockerdata/nginx/
# docker cp 162a41ff80f3:/etc/nginx/nginx.conf /mydockerdata/nginx/
```
- 删除 nginx 容器
```
docker rm nginx -f
```

## 创建容器 nginx_1
```
# 创建 nginx_1 要挂载的目录
mkdir -p /mydockerdata/nginx_1/{log,code,conf.d}/

# 复制 nginx 配置文件
cp /mydockerdata/nginx/nginx.conf /mydockerdata/nginx_1/

# docker run 创建容器
# -p 8081:80 # 映射端口本机8080到容器80
# --name nginx_1 # container 的名字 nginx_1
# -v /mydockerdata/nginx_1/log/:/var/log/nginx # 映射log文件目录
# -v /mydockerdata/nginx_1/code/:/usr/share/nginx/html # 映射网页存放目录【网页代码】
# -v /mydockerdata/nginx_1/conf.d/:/etc/nginx/conf.d # 映射配置文件夹
# -d # 后台运行
# nginx # 镜像
docker run -d \
-p 8081:80 \
--name nginx_1 \
-v /mydockerdata/nginx_1/log/:/var/log/nginx \
-v /mydockerdata/nginx_1/code/:/usr/share/nginx/html \
-v /mydockerdata/nginx_1/conf.d/:/etc/nginx/conf.d \
nginx
```
- 编辑 nginx_1 的站点配置文件
```
vim /mydockerdata/nginx_1/conf.d/default.conf
```
内容
```
server {
    listen       80;
    listen  [::]:80;
    server_name  aa.test;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```
- 写 站点内容
```
echo 'aa.test' > /mydockerdata/nginx_1/code/index.html
```
- 重启 nginx_1 容器
```
docker restart nginx_1
```
- 访问 [127.0.0.1:8081](http://127.0.0.1:8081) 就可以看到内容 `aa.test` 了

## 创建容器 nginx_2
```
mkdir -p /mydockerdata/nginx_2/{log,code,conf.d}/

# 写站点内容
echo 'bb.test' > /mydockerdata/nginx_2/code/index.html
```
- 编辑 nginx_2 的站点配置文件
```
vim /mydockerdata/nginx_2/conf.d/default.conf
```
内容
```
server {
    listen       80;
    listen  [::]:80;
    server_name  bb.test;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```
- 创建 nginx_2 容器
```
docker run -d \
-p 8082:80 \
--name nginx_2 \
-v /mydockerdata/nginx_2/log/:/var/log/nginx \
-v /mydockerdata/nginx_2/code/:/usr/share/nginx/html \
-v /mydockerdata/nginx_2/conf.d/:/etc/nginx/conf.d \
nginx
```
- 访问 [127.0.0.1:8082](http://127.0.0.1:8082) 就可以看到内容 `aa.test` 了


## 创建 nginx_proxy 来代理和二级域名转发
```
mkdir -p /mydockerdata/nginx_proxy/{log,code,conf.d}/

# 写站点内容
echo 'proxy.test' > /mydockerdata/nginx_proxy/code/index.html
```
- 编辑 nginx_proxy 的站点配置文件
```
vim /mydockerdata/nginx_proxy/conf.d/default.conf
```
内容
```
server {
    listen       80;
    listen  [::]:80;
    server_name  proxy.test;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```
- 创建 nginx_proxy 容器
```
docker run -d \
-p 80:80 \
--name nginx_proxy \
-v /mydockerdata/nginx_proxy/log/:/var/log/nginx \
-v /mydockerdata/nginx_proxy/code/:/usr/share/nginx/html \
-v /mydockerdata/nginx_proxy/conf.d/:/etc/nginx/conf.d \
nginx
```
- 访问 [127.0.0.1](http://127.0.0.1) 就可以看到内容 `proxy.test` 了

### 添加 代理站点 配置文件
- aa.test
新建 `aa.test.conf`
```
vim /mydockerdata/nginx_proxy/conf.d/aa.test.conf
```
内容
```
server {
    listen       80;         #监听的端口
    server_name  aa.test;    #监听的URL
    location / {
        proxy_redirect off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        # IP地址：请自行查看要代理的 IP地址，linux 可以用 ifconfig 命令查看
        proxy_pass http://[IP地址]:8081;
    }
}
```
> 注意：记得开启 [IP地址]:8081 端口访问权限，否则无法访问

- bb.test
新建 `bb.test.conf`
```
vim /mydockerdata/nginx_proxy/conf.d/bb.test.conf
```
内容
```
server {
    listen       80;         #监听的端口
    server_name  bb.test;    #监听的URL
    location / {
        proxy_redirect off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        # IP地址：请自行查看要代理的 IP地址，linux 可以用 ifconfig 命令查看
        proxy_pass http://[IP地址]:8082;
    }
}
```
> 注意：记得开启 [IP地址]:8082 端口访问权限，否则无法访问

- 重启 nginx_proxy 容器
```
docker restart nginx_proxy
```