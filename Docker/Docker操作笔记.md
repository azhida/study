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
> 

- 文件复制
```
# 宿主机到容器
docker cp /opt/test/file.txt mycontainer:/opt/testnew/
# 容器到宿主机
docker cp mycontainer:/opt/testnew/file.txt /opt/test/
```
> 需要注意的是，不管容器有没有启动，拷贝命令都会生效。


## 容器操作

- 批量删除容器

```
docker rm `docker ps -aq`
```

## 镜像操作

- 批量删除镜像

```
docker rmi `docker images -aq`
```