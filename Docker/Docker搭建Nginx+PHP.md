# Docker 构建 Nginx + PHP 服务容器

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


## 创建普通 PHP 站点：容器名称 nginx-php8-test

- 拉取官方最新nginx镜像
```
sudo docker pull nginx:latest
```

- 创建本地站点 nginx-php8-test 的配置管理目录
```
sudo mkdir -p /mydockerdata/nginx-php8-test/{log,conf.d}/
```
> 注： `nginx-php8-test` 的代码路径 `/var/www/test/`

新建 `phpinfo.php` 文件，`.php` 文件要放到 `/var/www/` 目录下才可以被解析，因为 容器 php8 挂载的目录是 `/var/www/`
```
sudo mkdir -p /var/www/test/
sudo vim /var/www/test/phpinfo.php
```
写入内容
```
<?php
phpinfo();
```
- 编辑 nginx-php8-test 的站点默认配置文件
```
sudo vim /mydockerdata/nginx-php8-test/conf.d/default.conf
```
内容
```
server {
    listen       80;
    server_name  localhost;
 
    location / {
        root   /var/www/test/;
        index  index.html index.htm index.php;
    }
 
    location ~ \.php$ {
        fastcgi_pass   php:9000;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  /var/www/test$fastcgi_script_name;
        include        fastcgi_params;
    }
}
```
- 查看当前 docker 容器列表
```
sudo docker ps -a
```
- 创建容器 nginx-php8-test 并启动
```
# docker run 创建容器
# -d # 后台运行
# -p 8080:80 # 映射端口本机8080到容器80
# --name nginx-php8-test # docker 容器的名字 nginx-php8-test
# -v /mydockerdata/nginx-php8-test/log/:/var/log/nginx # 映射log文件目录
# -v /mydockerdata/nginx-php8-test/conf.d/:/etc/nginx/conf.d # 映射配置文件夹
# -v /var/www/:/var/www # 映射网页存放目录【网页代码】
// --link php8:php: 把 php8 的网络并入 nginx，并通过修改 nginx 的 /etc/hosts，把域名 php 映射成 127.0.0.1，让 nginx 通过 php:9000 访问 php-fpm。
# nginx # 镜像

sudo docker run -d \
-p 8080:80 \
--name nginx-php8-test \
-v /mydockerdata/nginx-php8-test/log/:/var/log/nginx \
-v /mydockerdata/nginx-php8-test/conf.d/:/etc/nginx/conf.d:ro \
-v /var/www/:/var/www \
--link php8:php \
nginx
```
- 访问 `http://ip:8080` 站点内容
    - 访问 [http://ip:8080/phpinfo.php](http://ip:8080/phpinfo.php) 就可以看到网页内容了
    - 访问 [http://ip:8080/a.txtp](http://ip:8080/a.txt) 就可以看到网页内容了
> 注意：8080 端口号需要开放外部访问权限，否则访问失败

## 配置 nginx 反向代理支持 域名访问
看这里： [Docker搭建Nginx反向代理服务器](Docker搭建Nginx反向代理服务器.md)