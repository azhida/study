# Supervisor 使用笔记

Supervisor是一个Python写的进程管理工具，可以方便用于启动、重启、关闭进程。特别适合需要常驻内存的进程。laravel的队列任务与其时分匹配。

## Ubuntu 安装 Supervisor

- 安装

在 Ubuntu 上安装 Supervisor，参考 https://learnku.com/docs/laravel/6.0/queues/5168#supervisor-configuration（homestead使用）

```sh
sudo apt-get install supervisor
```

- 配置

Supervisor 的配置文件通常位于 `/etc/supervisor/conf.d` 目录下。在该目录中，你可以创建任意数量的配置文件，用来控制 supervisor 将如何监控你的进程。例如，创建一个 `laravel-worker.conf` 文件使之启动和监控一个 `queue:work` 进程：

*********************************** 配置文件 /etc/supervisor/conf.d/laravel-worker.conf 开始 **************************************

/etc/supervisor/conf.d/laravel-worker.conf

```sh
[program:laravel-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /home/forge/app.com/artisan queue:work sqs --sleep=3 --tries=3
autostart=true
autorestart=true
user=forge
numprocs=8
redirect_stderr=true
stdout_logfile=/home/forge/app.com/worker.log
```

> 说明：
> - `numprocs=8` ：指定 Supervisor 运行 8 个 queue:work 进程并对其进行监控，如果它们挂掉就自动重启它们。你应该更改 command 选项中的 queue：work sqs 部分以表示你所需的队列连接。


- 启动


配置文件创建完毕后，你就可以使用如下命令更新 Supervisor 配置并启动进程了：

```sh
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start laravel-worker:*
```


## CentOS7 安装 Supervisor

CentOS7 安装配置 Supervisor，参考 https://blog.csdn.net/weixin_42260789/article/details/89207072（PHP laravel队列 使用Supervisor 进程监控管理系统）

- 安装

```sh
yum install epel-release
yum install -y supervisor
```


- 配置
 
默认配置文件： `/etc/supervisord.conf`

vim /etc/supervisord.conf

```sh
; laravel
; 被管理的进程配置参数，laravel-worker是进程的名称
[program:laravel-worker]								
process_name=%(program_name)s_%(process_num)02d
; 程序启动命令，/var/www/laravel 是你的项目根目录
command=php /var/www/laravel/artisan queue:work --queue=high,low	
; 在supervisord启动的时候也自动启动	
autostart=true		
; 程序退出后自动重启,可选值：[unexpected,true,false]，默认为unexpected，表示进程意外杀死后才重启						 
autorestart=true    
; 用哪个用户启动进程，默认是root						 
user=root	
; 监控进程数								 
numprocs=1		
; 把stderr重定向到stdout，默认false							 
redirect_stderr=true		
; 日志文件，需要注意当指定目录不存在时无法正常启动				 
stdout_logfile=/data/demo/worker.log		 

; HTTP服务器，提供web管理界面
[inet_http_server]		
; Web管理后台运行的IP和端口，如果开放到公网，需要注意安全性	    
port=0.0.0.0:9001    
; 用户名 (default is no username (open server))      		
username=admin    
; 密码 (default is no password (open server))         	 	
password=admin               	
```


- 常用命令

```
## 查看状态
supervisorctl status
## 表示停止、开始、重启 laravel-worker 进程 ，laravel-worker 为 进程的名字
systemctl supervisorctl stop laravel-worker
systemctl supervisorctl start laravel-worker
systemctl supervisorctl restart laravel-worker
## 表示停止所有进程
supervisorctl stop all
## 重载
supervisorctl reread
## 更新
supervisorctl update
```

- 注意：

```sh
## 重启supervisor时，报错:
supervisor “no such file” error.
unix:///tmp/supervisor.sock no such file
## 原因是服务器长期运行系统会清除tmp文件夹下的文件，我们只需要将tmp目录修改一下即可。
## 打开配置好的supervisord.conf，将tmp替换为var/run或者var/log具体看情况修改即可。
## 之后需要杀掉原来的进程。
ps -aux | grep supervisor
kill ***进程号
## 重启服务
supervisord -c /etc/supervisord.conf
```


## CentOS6.4 安装 Supervisor


参考：https://tsov.net/home/view/1593/ （centos 6.4安装supervisor守护golang进程）。感谢！

- 安装

supervisor使用python编写的，可以用easy_install安装。centos上默认有python的运行环境，安装起来就非常简单了。

```sh
sudo yum install python-setuptools
sudo easy_install supervisor
```

- 配置

如果没有看到什么报错，那么就安装成功了，可以使用echo_supervisord_conf查看配置详情，而后生成配置文件。

```sh
sudo echo_supervisord_conf > /etc/supervisord.conf

vim /etc/supervisord.conf
```

`/etc/supervisord.conf` 文件最后面添加如下内容

/etc/supervisord.conf

```sh
[program:horizon]
process_name=%(program_name)s
command=php /var/www/hsyp-laravel/artisan horizon
autostart=true
autorestart=true
user=www
redirect_stderr=true
stdout_logfile=/var/www/hsyp-laravel/horizon.log
stopwaitsecs=3600
```

- 启动

```sh
sudo /usr/bin/supervisord -c /etc/supervisord.conf
```

- 说明：

```sh
## 如果出现什么问题，可以查看日志进行分析，日志文件路径/tmp/supervisord.log
## 如果修改了配置文件，可以用kill -HUP重新加载配置文件
cat /tmp/supervisord.pid | xargs sudo kill -HUP
## 查看supervisor运行状态
supervisorctl
```