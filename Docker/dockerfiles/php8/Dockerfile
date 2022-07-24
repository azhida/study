FROM php:8.0-fpm
RUN mv /etc/apt/sources.list /etc/apt/sources.list.bak \
    && cat <<EOF >/etc/apt/sources.list \
    deb http://mirrors.ustc.edu.cn/debian stable main contrib non-free \
    deb http://mirrors.ustc.edu.cn/debian stable-updates main contrib non-free \
    EOF \
    && apt update \
    # 安装常规扩展
    && docker-php-source extract \
    && docker-php-ext-install bcmath pdo_mysql pcntl sockets \
    # 安装 redis
    && curl -L -o /tmp/redis.tar.gz https://pecl.php.net/get/redis-5.3.7.tgz \
    && tar -xzf /tmp/redis.tar.gz \
    && rm -r /tmp/redis.tar.gz \
    && mkdir -p /usr/src/php/ext \
    && mv redis-5.3.7 /usr/src/php/ext/redis \
    && docker-php-ext-install redis \
    # 安装 gd 扩展
    # 安装各种库
    && apt install -y libwebp-dev libjpeg-dev libpng-dev libfreetype6-dev \
    # 解压源码
    && docker-php-source extract \
    # gd源码文件夹
    && cd /usr/src/php/ext/gd \
    # 准备编译
    && docker-php-ext-configure gd \
    --with-webp=/usr/include/webp \
    --with-jpeg=/usr/include \
    --with-freetype=/usr/include/freetype2 \
    # 编译安装
    && docker-php-ext-install gd \
    # 安装 composer 和 zip、unzip
    && cd \
    # 下载安装 composer
    && curl -sS https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer \
    # 配置 全局镜像地址【可选操作】
    && composer config -g repo.packagist composer https://packagist.phpcomposer.com \
    && composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/ \
    # 安装 zip、unzip , composer install 时需要用到 zip 和 unzip
    && apt-get install -y zip unzip


# 创建镜像
# sudo docker build -t php8 .
# 创建容器 php8
# docker run -d --name php8 -v /etc/localtime:/etc/localtime:ro -v /var/www/:/var/www php:8.0-fpm