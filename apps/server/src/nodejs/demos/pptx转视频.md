# pptx 转视频

## 基本思路

1. 将 pptx 转为图片
2. 将图片转为视频

## 环境搭建

起一个 docker 容器来玩。

```sh
touch docker-compose.yml

docker-compose up -d node_latest
```

::: details docker-compose.yml

<<< demo-dir/pptx转视频/docker-compose.yml

:::

后面的操作都是在 docker 容器内！

### apt 换源

```sh
docker exec -it node_latest bash

# 换上 阿里云源
sed -i "s@http://deb.debian.org@http://mirrors.aliyun.com@g" /etc/apt/sources.list.d/debian.sources

apt update
```

## pptx 转图片


::: details pptx_to_images.js

<<< demo-dir/pptx转视频/pptx_to_images.js

:::


## 图片转视频

::: details images_to_video.js

<<< demo-dir/pptx转视频/images_to_video.js

:::
