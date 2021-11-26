## 利用Linux自带的logrotate管理日志

#### 按大小切割日志

###### 创建 logrotate 配置文件
vim /etc/logrotate.d/laravel
```
/var/www/laravel/storage/logs/*.log {
    su root list
    size=5M
    rotate=100
    notifempty
}

# 脚本说明：
# /var/www/laravel/storage/logs/*.log ：待切割的日志文件
# su root list ： 让 root 用户去执行
# size=5M ：当日志文件大于等于 5M时，对文件进行切割
# rotate=100 ： 保留的切割日志数量【保留 100 份】
# notifempty  ： 当日志文件为空时，不进行轮转
```
###### laravel日志 循环切割【循环执行logrotate切割命令60次，间隔为1秒】
vim /var/www/laravel/logrotate_laravel_crontab.sh
```
#!/bin/bash
for (( i = 0; i < 60; i++ )); 
do
    /usr/sbin/logrotate /etc/logrotate.d/laravel
    sleep 1
done
exit 0
```
###### 定时任务 每分钟执行一次 循环切割脚本 /var/www/laravel/logrotate_laravel_crontab.sh
sudo crontab -e
```
* * * * * bash /var/www/laravel/logrotate_laravel_crontab.sh
```

## 更多参考
> 更多知识可参考：[Linux日志切割（Logrotate/python/shell脚本实现）超详细](https://blog.csdn.net/qq_31183727/article/details/90236112)
