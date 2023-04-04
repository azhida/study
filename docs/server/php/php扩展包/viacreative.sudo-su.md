# viacreative/sudo-su
## composer地址
[https://packagist.org/packages/viacreative/sudo-su](https://packagist.org/packages/viacreative/sudo-su)

## 介绍
用户切换工具 sudo-su。当需要切换多个用户来测试，频繁地退出和登录用户是一个费时的事情，可以使用 sudo-su 用户切换工具，来提高效率。

## 安装
- 使用 Composer 安装：
```
composer require "viacreative/sudo-su:~1.1"
```
- 添加 Provider

我们只在开发环境中加载此扩展包：  

app/Providers/AppServiceProvider.php
```
<?php
.
.
.
class AppServiceProvider extends ServiceProvider
{
    .
    .
    .
    public function register()
    {
        if (app()->isLocal()) {
            $this->app->register(\VIACreative\SudoSu\ServiceProvider::class);
        }
    }
}
```
- 发布资源文件
```
php artisan vendor:publish --provider="VIACreative\SudoSu\ServiceProvider"
```
会生成：  
`/public/sudo-su` 前端 CSS 资源存放文件夹；  
`config/sudosu.php` 配置信息文件。

- 修改配置文件

config/sudosu.php
```
<?php

return [

    // 允许使用的顶级域名
    'allowed_tlds' => ['dev', 'local', 'test'],

    // 用户模型
    'user_model' => App\Models\User::class
];
```
Sudosu 为了避免开发者在生产环境下误开启此功能，在配置选项 allowed_tlds 里做了域名后缀的限制，tld 为 Top Level Domain 的简写。

- 模板植入

一般我们是在网页里使用 Sudosu，在主要布局模板中的 Scripts 区块上写入模板调用代码：

resources/views/layouts/app.blade.php
```
.
.
.
  @if (app()->isLocal())
    @include('sudosu::user-selector')
  @endif

  <!-- Scripts -->
.
.
.
```