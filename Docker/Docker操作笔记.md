# Docker 操作笔记
- 容器重命名
```
sudo docker rename old_name new_name
```
- 查看容器列表
```
sudo docker ps -a
```
- 容器 php7.4 内执行 定时任务
```
* * * * * docker exec php7.4 php /var/test.php
```
> 注意：以上命令要在 宿主机内 执行；  
> `php7.4` : 容器名称；  
> `php /var/test.php` : 要执行的命令；