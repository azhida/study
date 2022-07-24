# Docker 安装 PHP8

> 注：以下操作是在 windows 的子系统 ubuntu20.04 环境中进行

## 安装 docker

安装 [看这里](安装Docker.md) 。

## 创建 php8 容器

- 拉取官方php8.0镜像
```
sudo docker pull php:8.0-fpm
```

- 创建容器 php8
```
# --name php8 将 php 的容器命名为 php8
# -v /etc/localtime:/etc/localtime:ro 容器时间与宿主机时间保持一致
# /var/www/:/var/www 本地 /var/www/ 目录映射至容器 /var/www 目录
# -d 后台运行

docker run -d \
--name php8 \
-v /etc/localtime:/etc/localtime:ro \
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

# 或者
echo 'deb http://mirrors.ustc.edu.cn/debian stable main contrib non-free' > /etc/apt/sources.list
echo 'deb http://mirrors.ustc.edu.cn/debian stable-updates main contrib non-free' >> /etc/apt/sources.list
# > 覆盖写入，会覆盖之前的内容
# >> 追加写入，不会覆盖之前的内容
```
- 安装常规扩展
```
# 创建 /usr/src/php/ 并解压
docker-php-source extract

# 安装 php 扩展，注：laravel连接mysql时用到 pdo_mysql 和 mysqli ，pcntl 等
docker-php-ext-install bcmath pdo_mysql pcntl sockets
# 查看 bcmath 扩展是否安装成功，安装成功 会出现 bcmath
php -m | grep bcmath
php -m
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
cd
apt update
# 下载安装 composer
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
# 配置 全局镜像地址【可选操作】
composer config -g repo.packagist composer https://packagist.phpcomposer.com
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/

# 安装 zip、unzip , composer install 时需要用到 zip 和 unzip
apt-get install -y zip unzip
```
> 参考：[安装 composer](https://gitee.com/link?target=https%3A%2F%2Fpkg.phpcomposer.com%2F%23how-to-install-composer)


- 安装 swoole 扩展

[官方文档](https://wiki.swoole.com/#/environment)  
[常见问题](https://wiki.swoole.com/#/question/install)


```
# fatal error: 'openssl/ssl.h' file not found
# 安装 openssl 库
apt-get install openssl
apt-get install libssl-dev
whereis openssl
# 拿到 openssl 库的安装位置： /usr/include/openssl

# fatal error: curl/curl.h: No such file or directory
apt-get install libcurl4-openssl-dev

# 解决了问题，然后 安装 swoole 扩展
pecl install -D 'enable-sockets="no" enable-openssl="yes --with-openssl-dir=/usr/include/openssl/" enable-http2="yes" enable-mysqlnd="yes" enable-swoole-json="no" enable-swoole-curl="yes" enable-cares="yes"' swoole
```
php.ini 开启 swoole 扩展
```
cp /usr/local/etc/php/php.ini-production /usr/local/etc/php/php.ini
vim /usr/local/etc/php/php.ini
```
内容
```
# 大概在 line：950
extension=swoole.so
```

- 退出 php8 容器
```
exit
```
- 重启 php8 容器
```
sudo docker restart php8
sudo docker ps -a
```