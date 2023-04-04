# Docker 网络

## 创建公共网络
```
# docker network create 网络名称
docker network create network-common
# 查看网络
docker network ls
# 查看网络 - network-common
docker network inspect network-common
# 清除无用网络
docker network prune
```

## 在 docker-compose.yml 配置使用
```
version: '3'

services:
  nginx:
    container_name: "nginx"
    image: "nginx:alpine"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./docker/nginx:/etc/nginx/conf.d
      - ./public:/var/www/public
    environment:
      TZ: "Asia/Shanghai"
    networks:
      network-common:
    depends_on:
      - php
    links:
      - php
    restart: unless-stopped

networks:
  network-common:
    external: true
  othernetwork:
    name: "other-network"
```
