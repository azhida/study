# Docker 安装 Gitlab

## 拉取 gitlab 镜像

```sh
# 社区版[免费] gitlab/gitlab-ce
sudo docker pull gitlab/gitlab-ce:latest
docker images
```

## 创建容器 gitlab

```sh
sudo docker run --name gitlab \
--restart always \
-p 9980:9980 \
-p 222:22 \
-v /usr/local/docker/gitlab/config:/etc/gitlab \
-v /usr/local/docker/gitlab/logs:/var/log/gitlab \
-v /usr/local/docker/gitlab/data:/var/opt/gitlab \
# 让容器获取宿主机root权限
–-privileged=true \
-d gitlab/gitlab-ce
```

## 查看容器列表

```sh
sudo docker ps -a
```

## 进入容器 gitlab

```sh
sudo docker exec -it gitlab /bin/bash

# 退出容器
exit
```