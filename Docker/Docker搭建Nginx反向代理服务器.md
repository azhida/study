# Docker 搭建 Nginx 反向代理服务器访问多个子域名站点

## 架构

|域名|容器名称|占用端口|
|---|---|---|
| aa.test | nginx-test-aa |8079|
| bb.test | nginx-test-bb |8078|
| cc.test | nginx-test-cc |8077|
| proxy.test | nginx_proxy | 80 |


## 安装 docker
自行百度 docker 安装方法。

- 先看 docker 是否已安装
```
sudo docker info
```
- centos 安装 docker
```
sudo curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

## docker 安装 nginx
```
sudo docker pull nginx
```

## 创建容器 nginx_proxy 来做代理转发
- 创建 nginx_proxy 配置文件目录
```
sudo mkdir -p /mydockerdata/nginx-test-aa/{log,code,conf.d}/
```
- 写站点内容
```
sudo echo 'proxy.test' > /mydockerdata/nginx_proxy/code/index.html
```
- 编辑 nginx_proxy 的站点配置文件
```
sudo vim /mydockerdata/nginx_proxy/conf.d/default.conf
```
写入内容
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
- 创建容器 nginx_proxy
```
# docker run 创建容器
# -d # 后台运行
# -p 80:80 # 映射端口本机80到容器80
# -p 443:443 # 映射端口本机 443到容器443，配置 https 访问需要
# --name nginx_proxy # docker 容器的名字 nginx_proxy
# -v /mydockerdata/nginx_proxy/log/:/var/log/nginx # 映射log文件目录
# -v /mydockerdata/nginx_proxy/code/:/usr/share/nginx/html # 映射网页存放目录【网页代码】
# -v /mydockerdata/nginx_proxy/conf.d/:/etc/nginx/conf.d # 映射配置文件夹
# -v /root/ssl/:/root/ssl # 可以配置 ssl 证书
# nginx # 镜像

sudo docker run -d \
-p 80:80 \
-p 443:443 \
--name nginx_proxy \
-v /mydockerdata/nginx_proxy/log/:/var/log/nginx \
-v /mydockerdata/nginx_proxy/code/:/usr/share/nginx/html \
-v /mydockerdata/nginx_proxy/conf.d/:/etc/nginx/conf.d \
-v /root/ssl/:/root/ssl \
nginx
```
- 查看容器列表状态，确保容器正常运行
```
sudo docker ps -a
```
- 访问 [http://ip](http://ip) 就可以看到内容 `proxy.test` 了。
> 注意：80 端口 和 443 端口需要开放访问权限，否则无法访问

## 创建容器 nginx-test-aa
- 创建 nginx-test-aa 配置文件目录
```
sudo mkdir -p /mydockerdata/nginx-test-aa/{log,code,conf.d}/
```
- 创建容器 nginx-test-aa
```
sudo docker run -d \
-p 8079:80 \
--name nginx-test-aa \
-v /mydockerdata/nginx-test-aa/log/:/var/log/nginx \
-v /mydockerdata/nginx-test-aa/code/:/usr/share/nginx/html \
-v /mydockerdata/nginx-test-aa/conf.d/:/etc/nginx/conf.d \
nginx
```
- 编辑站点配置文件
```
sudo vim /mydockerdata/nginx-test-aa/conf.d/default.conf
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
}
```
- 写 站点内容
```
sudo echo 'aa.test' > /mydockerdata/nginx-test-aa/code/index.html
```
- 重启容器 nginx-test-aa
```
sudo docker restart nginx-test-aa
sudo docker ps -a
```
- 访问 http://ip:8079 就可以看到内容 aa.test 了
> 注意：要开启 8079 端口访问权限

- 获取 容器 nginx-test-aa 的 IP地址
```
sudo docker inspect nginx-test-aa
# "IPAddress": "172.17.0.9",
```
> 这一步特别注意：  
> 如果代理服务器和被代理服务器是同一台服务器，则可以直接用 `sudo docker inspect nginx-test-aa` 获取内部 IP地址  
> 如果代理服务器和被代理服务器不是同一台服务器，但属于同一个服务商，则可以使用服务商分配的 私有IP地址  
> 如果代理服务器和被代理服务器不是同一台服务器，也属于同一个服务商，则只能 公网IP地址  


- 添加 代理站点 配置文件
```
sudo vim /mydockerdata/nginx_proxy/conf.d/aa.test.conf
```
内容
```
server {
    listen       80;         #监听的端口
    server_name  aa.test;    #监听的域名
    location / {
        proxy_redirect off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://[IP地址]:8079;
    }
}
```
> 特别提醒：  
> 如果 `proxy_pass http://[IP地址]:8079;` 中 IP地址 是公网IP，则 服务器必须开启 8079 端口的外部访问权限，否则无法访问无法代理。


- 重启 nginx_proxy 容器
```
sudo docker restart nginx_proxy
# 查看容器列表状态
sudo docker ps -a
```

## 创建容器 nginx-test-bb
方法与 nginx-test-aa 类似，注意修改端口号 和 代理的 内部IP地址即可。

## 创建容器 nginx-test-cc
方法与 nginx-test-aa 类似，注意修改端口号 和 代理的 内部IP地址即可。