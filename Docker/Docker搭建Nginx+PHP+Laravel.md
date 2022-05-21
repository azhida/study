# Docker 构建 Nginx + PHP + Laravel 服务容器

> 注：以下操作是在 windows 的子系统 ubuntu20.04 环境中进行

## 安装 docker

安装 [看这里](安装Docker.md) 。

## 创建 容器 php

先看有没有 php7.4 和 php8 两个容器
```
sudo docker ps -a
```
没有则创建，有了就跳过。

- 创建 [php7.4](Docker安装PHP7.4.md)
- 创建 [php8](Docker安装PHP8.md)

## 创建 Laravel9 站点：容器名称 nginx-php8-laravel9

> 注： laravel9 的代码路径 `/var/www/laravel9/`

- 创建本地站点 `nginx-php8-laravel9` 的配置管理目录
```
sudo mkdir -p /mydockerdata/nginx-php8-laravel9/{log,conf.d}/
```

- 编辑 `nginx-php8-laravel9` 的站点默认配置文件
```
sudo vim /mydockerdata/nginx-php8-laravel9/conf.d/default.conf
```
内容

```
server {
    listen 80;
    listen [::]:80;
    server_name  localhost;
    root   /var/www/laravel9/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;
 
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;
 
    location ~ \.php$ {
        fastcgi_pass   php:9000;
        fastcgi_param  SCRIPT_FILENAME  /var/www/laravel9/public$fastcgi_script_name;
        include        fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```
- 创建容器 nginx-php8-laravel9 并启动
```
# docker run 创建容器
# -d # 后台运行
# -p 8081:80 # 映射端口本机8081到容器80
# --name nginx-php8-laravel9 # docker 容器名字 nginx-php8-laravel9
# -v /etc/localtime:/etc/localtime:ro 容器时间与宿主机时间一致
# -v /mydockerdata/nginx-php8-laravel9/log/:/var/log/nginx # 映射log文件目录
# -v /mydockerdata/nginx-php8-laravel9/conf.d/:/etc/nginx/conf.d # 映射配置文件夹
# -v /var/www/:/var/www # 映射网页存放目录【网页代码】
# --link php8:php: 把 php8 的网络并入 nginx，并通过修改 nginx 的 /etc/hosts，把域名 php 映射成 127.0.0.1，让 nginx 通过 php:9000 访问 php-fpm。
# nginx # 镜像

sudo docker run -d \
-p 8081:80 \
--name nginx-php8-laravel9 \
-v /etc/localtime:/etc/localtime:ro \
-v /mydockerdata/nginx-php8-laravel9/log/:/var/log/nginx \
-v /mydockerdata/nginx-php8-laravel9/conf.d/:/etc/nginx/conf.d:ro \
-v /var/www/:/var/www \
--link php8:php \
nginx
```

- 下载 laravel9 代码
```
# 要进入容器 php8 ，因为 php8 里面安装了 composer 和 laravel9 所需要的其他环境，否则下载会报错
sudo docker exec -it php8 bash
cd /var/www
composer create-project laravel/laravel laravel9
exit
```

- 访问 [http://ip:8081](http://ip:8081) ，就可以看到 laravel 首页了
> 注意：ip 对应的 8081 端口需要开放外部访问权限，否则访问失败  
> 至于 页面报错，就是 laravel 相关的配置了，具体去看 laravel 的文档


## 配置 nginx 反向代理支持 域名访问
看这里： [Docker搭建Nginx反向代理服务器](Docker搭建Nginx反向代理服务器.md)