# [rap2hpoutre/laravel-log-viewer](https://packagist.org/packages/rap2hpoutre/laravel-log-viewer)
## 介绍
日志查看工具

日常的开发工作中，查看日志应该是我们最常干的事情了，日志对于我们调试程序，修复 Bug，优化代码来说必不可少也非常关键。使用 Linux 的 `tail -f` 命令持续监控日志文件是我们比较常用的方法：`tail -f storage/logs/laravel.log` 。

但是有时候我们需要去测试环境或者正式环境检查错误日志，有些非开发人员在进行测试的时候也想查看日志，最好能有一个 Web 的方式显示日志内容，方便所有人自行查看日志内容。而这个包刚好可以解决这一需求。


[教程](https://learnku.com/courses/laravel-package/2019/log-view-tool-rap2hpoutrelaravel-log-viewer/1971)

## 安装
```
composer require rap2hpoutre/laravel-log-viewer
```
## 使用
`rap2hpoutre/laravel-log-viewer` 使用起来非常简单，只需要定义一个路由，指向扩展包提供的控制器方法即可。

routes/web.php
```
.
.
.
Route::get('logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index');
```
添加路由 logs，访问 larabbs.test/logs 。


## 展示并访问 非 `.log` 结尾的日志文件
- 发布配置文件
```
php artisan vendor:publish --provider="Rap2hpoutre\LaravelLogViewer\LaravelLogViewerServiceProvider"
```
- 修改 `config/logviewer.php` 文件 `pattern` 参数为你想要的 文件格式即可
> 默认匹配格式 为 `.log` ，当 想匹配  `laravel.log.1` 时，将 参数`pattern` 设置为 `*.log*`即可


