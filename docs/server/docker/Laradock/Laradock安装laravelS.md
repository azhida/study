# Laradock 安装 LaravelS

## 安装 Swoole 扩展

laradock/.env

```
WORKSPACE_INSTALL_SWOOLE=true
```

重新创建并启动容器 workspace
```
docker-compose up -d --build --force-recreate workspace
```

## 进入项目根目录安装 laravelS 扩展包

```
docker-compose exec workspace bash

cd /var/www/laravel

composer require "hhxsv5/laravel-s:~3.4.0"

# 发布配置
php artisan laravels publish


```

项目根目录下

.env

```
LARAVELS_LISTEN_IP=workspace
```

启动 laravelS

```
php bin/laravels start -d
```

## 配置 nginx

/laradock/nginx/sites/package.conf

```
#gzip on;
gzip_min_length 1024;
gzip_comp_level 2;
gzip_types text/plain text/css text/javascript application/json application/javascript application/x-javascript application/xml application/x-httpd-php image/jpeg image/gif image/png font/ttf font/otf image/svg+xml;
gzip_vary on;
gzip_disable "msie6";

upstream laravels {
    # 通过 IP:Port 连接
    server workspace:5200 weight=5 max_fails=3 fail_timeout=30s;
    # 通过 UnixSocket Stream 连接，小诀窍：将socket文件放在/dev/shm目录下，可获得更好的性能
    #server unix:/xxxpath/laravel-s-test/storage/laravels.sock weight=5 max_fails=3 fail_timeout=30s;
    #server 192.168.1.1:5200 weight=3 max_fails=3 fail_timeout=30s;
    #server 192.168.1.2:5200 backup;
    keepalive 16;
}
server {

    listen 80;
    listen [::]:80;

    # For https
    # listen 443 ssl;
    # listen [::]:443 ssl ipv6only=on;
    # ssl_certificate /etc/nginx/ssl/default.crt;
    # ssl_certificate_key /etc/nginx/ssl/default.key;

    server_name laravel.test;
    root /var/www/laravel/public;
    index index.php index.html index.htm;

    autoindex off;
    index index.html index.htm;
    # Nginx处理静态资源(建议开启gzip)，LaravelS处理动态资源。
    location / {
        try_files $uri @laravels;
    }

    location @laravels {
        # proxy_connect_timeout 60s;
        # proxy_send_timeout 60s;
        # proxy_read_timeout 120s;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Real-PORT $remote_port;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header Scheme $scheme;
        proxy_set_header Server-Protocol $server_protocol;
        proxy_set_header Server-Name $server_name;
        proxy_set_header Server-Addr $server_addr;
        proxy_set_header Server-Port $server_port;
        proxy_pass http://laravels;
    }

    location /.well-known/acme-challenge/ {
        root /var/www/letsencrypt/;
        log_not_found off;
    }

    error_log /var/log/nginx/package_error.log;
    access_log /var/log/nginx/package_access.log;
}
```

- 重启 nginx 容器

laradock 目录下执行

```
docker-compose restart nginx
```

## 未完待续

...
