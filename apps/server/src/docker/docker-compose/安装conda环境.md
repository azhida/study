# docker compose 安装 conda 环境

- docker-compose.yaml

```yaml
version: '3.8'

services:

  conda-app:
    image: continuumio/miniconda3  # 指定镜像名称
    container_name: conda-app  # 指定容器名称
    working_dir: /app
    volumes:
      - .:/app  # 挂载当前目录到容器中的 /app 目录
    restart: unless-stopped
    tty: true

```