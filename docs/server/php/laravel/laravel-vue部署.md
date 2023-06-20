# Laravel + Vue 部署

后端 Laravel 提供数据接口服务，前端使用 vue3 + ts 单开项目。

前端和后端使用同一个域名，以二级目录区分子项目。

## Nginx 方式转发

### laravel项目，public目录下，部署两个vue子项目，并去掉vue路由中的#号

- app 端目录：  /var/www/laravel/public/app/
- pc 端目录：  /var/www/laravel/public/pc/
- admin 端目录： /var/www/laravel/public/admin/

### nginx部署方法：在 server 里配置

```
location ^~ /app/ {
	alias /var/www/laravel/public/app/;
	index index.html index.htm;
	try_files $uri $uri/ /app/index.html;
}

location ^~ /pc/ {
	alias /var/www/laravel/public/pc/;
	index index.html index.htm;
	try_files $uri $uri/ /pc/index.html;
}

location ^~ /admin/ {
	alias /var/www/laravel/public/admin/;
	index index.html index.htm;
	try_files $uri $uri/ /admin/index.html;
}
```

## Laravel 路由文件转发

### 后端路由设置

/routes/web.php
```
Route::get('/app/{any}', function () {
    $path = public_path('app/index.html');
    abort_unless(file_exists($path), 400, 'Page is not Found!');
    return file_get_contents($path);
})->name('app');

Route::get('/pc/{any}', function () {
    $path = public_path('pc/index.html');
    abort_unless(file_exists($path), 400, 'Page is not Found!');
    return file_get_contents($path);
})->name('pc');

Route::get('/admin/{any}', function () {
    $path = public_path('admin/index.html');
    abort_unless(file_exists($path), 400, 'Page is not Found!');
    return file_get_contents($path);
})->name('admin');
```