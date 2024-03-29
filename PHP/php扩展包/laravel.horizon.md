# laravel/horizon
## 介绍
队列监控 Horizon。  
Horizon 是 Laravel 生态圈里的一员，为 Laravel Redis 队列提供了一个漂亮的仪表板，允许我们很方便地查看和管理 Redis 队列任务执行的情况。  
## composer地址
[https://packagist.org/packages/laravel/horizon](https://packagist.org/packages/laravel/horizon)

## 操作方法

安装完成后通过浏览器URL访问控制台：env('APP_URL')/horizon。  
安装了 Horizon 以后，我们将使用 horizon 命令来启动队列系统和任务监控，无需使用 queue:listen。  
需要注意的是，artisan horizon 队列工作的守护进程是一个常驻进程，它不会在你的代码改变时进行重启，当我们修改代码以后，需要在命令行中对其进行重启操作。  

## 启动
Horizon 是一个监控程序，需要常驻运行，我们可以通过以下命令启动：
```
php artisan horizon
```

## 队列监控 Horizon 线上部署须知
在开发环境中，我们为了测试方便，直接在命令行里调用 artisan horizon 进行队列监控。然而在生产环境中，我们需要配置一个进程管理工具来监控 artisan horizon 命令的执行，以便在其意外退出时自动重启。当服务器部署新代码时，需要终止当前 Horizon 主进程，然后通过进程管理工具来重启，从而使用最新的代码。  

简而言之，生产环境下使用队列需要注意以下问题：
- 使用 Supervisor 进程工具进行管理，配置和使用请参照 文档 进行配置；参考地址：https://learnku.com/docs/laravel/5.8/horizon/3945；
- 每一次部署代码时，需 artisan horizon:terminate 然后再 artisan horizon 重新加载代码；
- 线上部署的话，还要注意一个权限控制的问题；

