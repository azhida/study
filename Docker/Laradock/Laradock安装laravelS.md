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