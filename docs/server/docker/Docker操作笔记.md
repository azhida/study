# Docker 操作笔记

## 将容器打包成镜像

```sh
# 将本地的容器打包成自命名的镜像
docker commit -a "容器作者" -m "容器描述" 容器id new_image_name:version

# 将镜像打包输出到tar文件
docker save -o new_image_name.tar new_image_name:version

# 在其他的机器上指定文件，通过该文件安装镜像
docker load -i new_image_name.tar
```

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

