# Docker 安装 Redis

> 注意：前提条件是：docker 已经成功安装，可以使用 `sudo docker info` 来检测 docker 是否已安装。

- 拉取 redis 镜像
```
sudo docker pull redis:latest
docker images
```
- 创建容器 redis
```
sudo docker run -itd \
-p 6379:6379 \
--name redis \
-v /etc/localtime:/etc/localtime:ro \
redis
```
- 查看容器列表
```
sudo docker ps -a
```
- 进入容器 redis
```
sudo docker exec -it redis /bin/bash

# 进入 命令行
redis-cli

# 退出容器
exit
```