# Docker 安装 NodeJS

> 注意：前提条件是：docker 已经成功安装，可以使用 `sudo docker info` 来检测 docker 是否已安装。

## node:alpine

体积小：162M

> alpine linux 发行版需要 apk 来管理依赖包。

```sh
sudo docker pull node:alpine
docker images

sudo docker run -itd -p 3000:3000 --name node_alpine node:alpine

# 安装 git
# apk --no-cache add git
docker exec -it node_alpine apk --no-cache add git
```

### 更换 apk 镜像源

为了解决 `apk --no-cache add git` 很慢的问题。

```sh
# 容器里面执行
echo "http://mirrors.aliyun.com/alpine/v3.21/main" > /etc/apk/repositories
echo "http://mirrors.aliyun.com/alpine/v3.21/community" >> /etc/apk/repositories

# 执行下面这行，就会快很多了
apk --no-cache add git
git -v
# git version 2.47.2
```

## node:latest

体积大：1.12G

```sh
sudo docker pull node:latest
docker images

sudo docker run -itd -p 3001:3001 --name node_latest node:latest

# 安装 git
# apt install git
docker exec -it node_latest apt install git
# 如果慢，就换 apt 源
```

## docker-compose.yaml

```yaml
version: "3.8"

services:

  node_alpine:
    image: node:alpine # 指定镜像名称
    container_name: node_alpine # 指定容器名称
    working_dir: /var/www/
    ports:
      - "3000:3000"
    restart: unless-stopped
    tty: true
    networks:
      - node-network

  node_latest:
    image: node:latest # 指定镜像名称
    container_name: baby-node # 指定容器名称
    working_dir: /var/www/
    ports:
      - "3001:3000"
    restart: unless-stopped
    tty: true
    networks:
      - node-network
      
networks:
  node-network: # 网络名称
    driver: bridge
    external: false # 外部网络：true 不存在则报错，false 不存在则创建 lnmp-network

```

### 启动服务

```sh
docker-compose up -d
```

