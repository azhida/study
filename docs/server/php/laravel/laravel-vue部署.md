# Laravel + Vue 部署

- 开发环境下，前端后端都是独立的目录
- 后端 `Laravel` 提供数据接口服务，前端使用 `vue3 + vite + ts` 单开项目
- 部署到生产环境时，将编译好的前端项目文件包和后端代码部署到同一个域名下
- 前端和后端使用同一个域名，以二级目录区分子项目

## Nginx 方式转发

### 项目目录

laravel项目，public目录下，部署两个vue子项目，并去掉vue路由中的#号

- Laravel 后端目录：  `/var/www/laravel/`
- app 端目录：  `/var/www/laravel/public/app/`
- pc 端目录：  `/var/www/laravel/public/pc/`
- admin 端目录： `/var/www/laravel/public/admin/`

### Nginx 配置

nginx 配置文件，在 server 里配置。

laravel.test.conf
```conf
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

开发环境下，前后端两个项目目录为同级目录。

```md
/var/www/laravel
/var/www/vite-project
```

### 后端

- 项目名称： laravel

- 路由设置

/routes/web.php
```php
Route::get('/app/{any}', function () {
    $path = public_path('appDir/index.html');
    abort_unless(file_exists($path), 400, 'Page is not Found!');
    return file_get_contents($path);
})->name('app');

Route::get('/pc/{any}', function () {
    $path = public_path('pcDir/index.html');
    abort_unless(file_exists($path), 400, 'Page is not Found!');
    return file_get_contents($path);
})->name('pc');

Route::get('/admin/{any}', function () {
    $path = public_path('adminDir/index.html');
    abort_unless(file_exists($path), 400, 'Page is not Found!');
    return file_get_contents($path);
})->name('admin');
```

::: danger 注意
目录名称不能和路由名称相同。

如下报 403 错误： 

```
Route::get('/app/{any}', function () {
    $path = public_path('app/index.html');
    abort_unless(file_exists($path), 400, 'Page is not Found!');
    return file_get_contents($path);
})->name('app');
```
:::


::: tip 正确写法
目录名称不能和路由名称相同，正确写法如下： 

```
Route::get('/app/{any}', function () {
    $path = public_path('appDir/index.html');
    abort_unless(file_exists($path), 400, 'Page is not Found!');
    return file_get_contents($path);
})->name('app');
```
:::


### 前端

前端编译打包，需要配置二级目录。

- 安装 vue3 项目

```sh
yarn create vite
# 项目名称： vite-project
# 选 Vue
# 选 TS

cd vite-project
yarn
yarn dev
```

- 配置 Vite

vite.config.ts

```ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default ({ mode }) => {
    // 检查是否开发
    const isDevelopment = mode === "development";

    return defineConfig({
        server: {
            port: 3000,
        },
        build: {
            // 生成的文件将添加到 `laravel/public/appDir` 下
            outDir: "../laravel/public/appDir",
        },
        // 也将更改基于模式的基础， appDir 要一致，否则编译后找不到静态资源
        base: isDevelopment ? "/" : "/appDir/",
        plugins: [vue()],
    });
};
```

### 注意

- Laravel 路由名称与 `/public/` 文件夹下的 文件同名时，访问会报 403 错误；
- 解决办法：路由名称与文件名称不一致即可；


### 参考

[Laravel + Vue 3（Vite、TypeScript）SPA 设置](https://blog.csdn.net/qq_44273429/article/details/128628428)