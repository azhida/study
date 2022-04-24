# Docker 构建 Nginx + PHP8 + Laravel9

> 注：以下操作是在 windows 的子系统 ubuntu20.04 环境中进行

## 安装 docker
自行百度 docker 安装方法。
- centos 安装
```
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```
- 检测是否安装成功
```
docker info
```

- docker 镜像加速
> 注：阿里云的 docker 镜像加速器看 [这里](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)
```
sudo vim /etc/docker/daemon.json
```
内容
```
{
    "registry-mirrors":[
        "https://docker.mirrors.ustc.edu.cn/",
        "https://hub-mirror.c.163.com/",
        "https://reg-mirror.qiniu.com/"
    ],
    "dns": ["8.8.8.8", "114.114.114.114"]
}
```
重启 docker 服务
```
sudo systemctl daemon-reload
sudo systemctl restart docker
```
> 特别注意：重启 docker 会导致已经运行的 容器全部停止，请谨慎操作重启

- 检查加速器是否生效
```
sudo docker info
```
看到如下内容，说明已生效
```
 Registry Mirrors:
  https://docker.mirrors.ustc.edu.cn/
  https://hub-mirror.c.163.com/
  https://reg-mirror.qiniu.com/
```


## 创建 php8 容器

- 拉取官方php8.0镜像
```
sudo docker pull php:8.0-fpm
```

- 创建容器 php8
```
# --name php8 将 php 的容器命名为 php8
# /var/www/:/var/www 本地 /var/www/ 目录映射至容器 /var/www 目录
# -d 后台运行

docker run -d \
--name php8 \
-v /var/www/:/var/www \
php:8.0-fpm
```

> 注意：  
> `/var/www` 这个目录，在 nginx 站点配置 php解析 的时候，路径要与 这个目录一直，否则可能无法解析。  
> `fastcgi_param SCRIPT_FILENAME /var/www$fastcgi_script_name;` 里边的 `/var/www` 就是 php-fpm 挂载的路径。

### 在容器 php8 内 安装 php扩展
> 注意：所有的 PHP扩展 都需要 登录 到 php8 容器内安装操作

- 登录 php8 容器
```
sudo docker exec -it php8 bash
```
- 切换 apt 源，解决 apt update 慢的问题
```
mv /etc/apt/sources.list /etc/apt/sources.list.bak

cat <<EOF >/etc/apt/sources.list
deb http://mirrors.ustc.edu.cn/debian stable main contrib non-free
deb http://mirrors.ustc.edu.cn/debian stable-updates main contrib non-free
EOF
```
- 安装常规扩展
```
# 创建 /usr/src/php/ 并解压
docker-php-source extract

# 安装 php 扩展，注：laravel连接mysql时用到 pdo_mysql 和 mysqli ，pcntl 等
docker-php-ext-install bcmath pdo_mysql pcntl
# 查看 bcmath 扩展是否安装成功，安装成功 会出现 bcmath
php -m | grep bcmath

# 待确认
docker-php-ext-install zip
```
- 安装 redis 扩展
```
# 下载 redis 扩展
curl -L -o /tmp/redis.tar.gz https://pecl.php.net/get/redis-5.3.7.tgz
# 解压
tar -xzf /tmp/redis.tar.gz
rm -r /tmp/redis.tar.gz
mkdir -p /usr/src/php/ext
mv redis-5.3.7 /usr/src/php/ext/redis
# 安装 redis 扩展并启动
docker-php-ext-install redis
php -m | grep redis
```

- 安装 gd 扩展
```
# 更新软件源
apt update
# 安装各种库
apt install -y libwebp-dev libjpeg-dev libpng-dev libfreetype6-dev
# 解压源码
docker-php-source extract
# gd源码文件夹
cd /usr/src/php/ext/gd
# 准备编译
docker-php-ext-configure gd \
--with-webp=/usr/include/webp \
--with-jpeg=/usr/include \
--with-freetype=/usr/include/freetype2
# 编译安装
docker-php-ext-install gd
php -m | grep gd
```

- 安装 composer 和 zip、unzip
```
# 更新软件源
apt update
# 下载安装 composer
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
# 安装 zip、unzip , composer install 时需要用到 zip 和 unzip
apt-get install -y zip unzip
# 退出容器
exit
# 重启 php8 容器
docker restart php8
```
> 参考：[安装 composer](https://gitee.com/link?target=https%3A%2F%2Fpkg.phpcomposer.com%2F%23how-to-install-composer)

- 退出 php8 容器
```
exit
```
- 重启 php8 容器
```
docker restart php8
```

## 创建普通 PHP 站点：容器名称 nginx-php8-test
- 拉取官方最新nginx镜像
```
sudo docker pull nginx:latest
```

- 创建本地站点 nginx-php8-test 的配置管理目录
```
sudo mkdir -p /mydockerdata/nginx-php8-test/{log,code,conf.d}/
```
> 注： `nginx-php8-test` 的代码路径 `/var/www/test-code/`

新建 `phpinfo.php` 文件，`.php` 文件要放到 `/var/www/` 目录下才可以被解析，因为 容器 php8 挂载的目录是 `/var/www/`
```
sudo mkdir -p /var/www/test-code/
sudo vim /var/www/test-code/phpinfo.php
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
        root   /var/www/test-code/;
        index  index.html index.htm index.php;
    }
 
    location ~ \.php$ {
        fastcgi_pass   php:9000;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  /var/www/test-code$fastcgi_script_name;
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
# -v /mydockerdata/nginx-php8/log/:/var/log/nginx # 映射log文件目录
# -v /mydockerdata/nginx-php8/code/:/usr/share/nginx/html # 映射网页存放目录【网页代码】
# -v /mydockerdata/nginx-php8/conf.d/:/etc/nginx/conf.d # 映射配置文件夹
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
- 访问 [http://ip:8080](http://ip:8080) 站点内容
    - 访问 [http://ip:8080/phpinfo.php](http://ip:8080/phpinfo.php) 就可以看到网页内容了
    - 访问 [http://ip:8080/a.txtp](http://ip:8080/a.txt) 就可以看到网页内容了
> 注意：8080 端口号需要开放外部访问权限，否则访问失败

## 创建 Laravel9 站点：容器名称 nginx-php8-laravel9

> 注： laravel9 的代码路径 `/var/www/laravel9/`

- 创建本地站点 `nginx-php8-laravel9` 的配置管理目录
```
sudo mkdir -p /mydockerdata/nginx-php8-laravel9/{log,code,conf.d}/
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
# -v /mydockerdata/nginx-php8-laravel9/log/:/var/log/nginx # 映射log文件目录
# -v /var/www/:/var/www # 映射网页存放目录【网页代码】
# -v /mydockerdata/nginx-php8-laravel9/conf.d/:/etc/nginx/conf.d # 映射配置文件夹
// --link php8:php: 把 php8 的网络并入 nginx，并通过修改 nginx 的 /etc/hosts，把域名 php 映射成 127.0.0.1，让 nginx 通过 php:9000 访问 php-fpm。
# nginx # 镜像

sudo docker run -d \
-p 8081:80 \
--name nginx-php8-laravel9 \
-v /mydockerdata/nginx-php8-laravel9/log/:/var/log/nginx \
-v /mydockerdata/nginx-php8-laravel9/conf.d/:/etc/nginx/conf.d:ro \
-v /var/www/:/var/www \
--link php8:php \
nginx
```

- 访问 [http://ip:8081](http://ip:8081) ，就可以看到 laravel 首页了
> 注意：ip 对应的 8081 端口需要开放外部访问权限，否则访问失败
