# Ubuntu 22.04.4 + php8.3 环境安装


## 更新 apt-get

```
sudo apt-get update
```

## 安装 php8.3

使用 第三方库 software-properties-common

```sh
# 安装 add-apt-repository 命令
sudo apt-get install software-properties-common
# 用add-apt-repository命令添加源
sudo add-apt-repository ppa:ondrej/php

# 安装 php8.3 及其扩展
sudo apt-get install -y php8.3 php8.3-fpm php8.3-mysql php8.3-gd php8.3-mbstring php8.3-bcmath 
sudo apt-get install -y php8.3-dom php8.3-zip php8.3-sqlite3 php8.3-cli php8.3-soap
# 安装 phpize8.3
sudo apt-get install -y php8.3-dev

# 卸载 php8.3
# sudo apt-get autoremove php8.3*
```

## fpm 命令

```sh
systemctl start php8.3-fpm
systemctl restart php8.3-fpm
systemctl stop php8.3-fpm
systemctl status php8.3-fpm

# 查看监听状态
sudo netstat -nlp | grep 9000
```

## 安装 Git 和 composer

```sh
apt install -y git composer
```

## 安装配置 nginx

```sh
apt install nginx
```

```conf
; /etc/nginx/conf.d/demo.test.conf

server {
    listen 80;
    listen [::]:80;
    server_name demo.test;
    root /var/www/demo.test/public;

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
        fastcgi_pass unix:/run/php/php8.3-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }

    error_log /var/log/nginx/demo.test.error.log;
    access_log /var/log/nginx/demo.test.access.log;
}
```

## 注意

> 执行 `composer install` 提示安装PHP扩展时，根据提示安装对应扩展，命令为 `apt-get install php8.3-gd`


