# Docker 安装 MySQL5.5

> 注意：前提条件是：docker 已经成功安装，可以使用 `sudo docker info` 来检测 docker 是否已安装。

- 拉取 mysql5.5 镜像
```
sudo docker pull mysql:5.5
```
- 创建容器 mysql5.5
```
sudo docker run -itd \
-p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=123456 \
--name mysql5.5
-v /etc/mysql5.5/:/etc/mysql/conf.d \
-v /data/mysql5.5/:/data/mysql5.5 \
mysql:5.5
```
- 查看容器列表
```
sudo docker ps -a
```
- 进入容器 mysql5.5
```
sudo docker exec -it mysql5.5 /bin/bash

# 进入 mysql
mysql -u root -p

# 退出容器
exit
```
