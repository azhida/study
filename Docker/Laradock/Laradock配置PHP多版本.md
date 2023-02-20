# laradock 配置 PHP 多版本

在 laradock 目录下执行

## 复制 php-fpm 目录

```
cp -r php-fpm php-fpm-74
```

## docker-compose.yml 文件配置

/docker-compose.yml

- 添加 php-fpm-74 配置项

复制 php-fpm 配置项，并修改

```
### PHP-FPM-74 ##############################################
    # 容器名称
    php-fpm-74:
      build:
        # 指向构建的文件夹 
        context: ./php-fpm-74
        args:
          # 修改为指定的 PHP 版本
          - LARADOCK_PHP_VERSION=7.4
          # 其他项...
```

- nginx 添加 php-fpm-74 链接

```
### NGINX Server #########################################
    nginx:
      links:
        # 增加 links，后面在配置 nginx 的站点配置文件中 fastcgi_pass 时用
        - php-fpm-74
```

## /nginx/sites/laravel.test

```
server {

    # ...

    location ~ \.php$ {
        try_files $uri /index.php =404;
        fastcgi_pass php-fpm-74:9000;    (php-fpm-74:上面新增的php版本)
        fastcgi_index index.php;
        fastcgi_buffers 16 16k;
        fastcgi_buffer_size 32k;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        #fixes timeouts
        fastcgi_read_timeout 600;
        include fastcgi_params;
    }
    
    # ...
}
```