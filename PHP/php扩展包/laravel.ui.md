# laravel/ui

`laravel/ui` ：Laravel 项目中使用 Bootstrap 前端框架，需要安装 `laravel/ui` 。

## 安装
```
composer require laravel/ui:^3.0 --dev
```
`composer require` 是用来安装扩展包使用的命令，参数 `--dev` 是指定此扩展包只在开发环境中使用。

上面的命令安装完成后，使用以下命令来引入 Bootstrap ：
```
php artisan ui bootstrap
```

Bootstrap 是以 NPM 扩展包的形式集成到 Laravel 项目中的，NPM 是 Node.js（一个基于 Google V8 引擎的 JavaScript 运行环境）的包管理和分发工具。Composer 的一些概念也是从 NPM 中借鉴过来的，因此 NPM 也有个类似 `composer.json` 文件的 `package.json` 文件。