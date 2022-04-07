# [barryvdh/laravel-debugbar](https://github.com/barryvdh/laravel-debugbar)

```
composer require "barryvdh/laravel-debugbar:~3.6" --dev
```
版本限定符 `~` 意味着我们希望安装 `>= 3.6` 并且 `< 4.0` 的版本，例如 `3.6.1`、 `3.11.3`、 `3.8`。根据语义化版本的定义，次版本号的变化是新增功能，所以 API 是稳定的，也就是可以安全更新的。

## 什么是语义化版本？
版本格式：主版本号。次版本号。修订号，如 `1.0.1`, `3.2.39`。版本号递增规则如下：
- 主版本号：当你做了不兼容的 API 修改
- 次版本号：当你做了向下兼容的功能性新增
- 修订号：当你做了向下兼容的问题修正。

另外，先行版本号及版本编译信息可以加到 `主版本号.次版本号.修订号` 的后面，作为延伸。

一般我们使用 3 个部分来表示一个版本，例如：1.4.23，1 为主版本号，4 为次版本号，23 为修订号或者补丁版本号。先行版本如 `1.0.0-alpha1` 这样在后面添加修饰符号来表示。

最后 Composer 安装时 --dev 参数是指明只在 开发环境 中使用，这样上线代码到 生产环境 时，我们可使用 composer install --no-dev 命令来排除这些扩展包的安装。

## 生成配置文件，存放位置 `config/debugbar.php`
```
php artisan vendor:publish --provider="Barryvdh\Debugbar\ServiceProvider"
```