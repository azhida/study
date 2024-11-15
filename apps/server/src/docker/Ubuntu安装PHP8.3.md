# Ubuntu 安装 PHP8.3

## 安装镜像 ubuntu:24.04

```sh
docker pull ubuntu:24.04
```

## 运行容器

```sh
# 在运行容器的时候，给容器加特权，及加上 --privileged=true 参数， 否则 挂载目录时会提示无权限

docker run -itd \
--name ubuntu-php8.3 \
-p 80:80 \
-p 8000:8000 \
-v ~/www:/www \
--privileged=true \
ubuntu:24.04
```

## 进入容器操作

```
docker exec -it ubuntu-php8.3 bash
```

## ubuntu-php8.3 容器内操作

### 先换 apt 源

```sh
# 备份
sudo cp /etc/apt/sources.list.d/ubuntu.sources  /etc/apt/sources.list.d/ubuntu.sources.bak


# 写入新源：
echo '
# 阿里云
Types: deb
URIs: http://mirrors.aliyun.com/ubuntu/
Suites: noble noble-updates noble-security
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg
' > /etc/apt/sources.list.d/ubuntu.sources

```

### 更新 apt

```sh
apt update
apt install wget
# 地区选 亚洲 5.Asia ，时区选 上海 69.Shanghai
```

### 安装 PHP8.3

```sh
apt install php8.3 php8.3-cli php8.3-{bz2,curl,mbstring,intl}
# php8.3-fpm 根据需要酌情安装
# apt install php8.3-fpm 

php -v
```

### 安装 composer

```sh
apt install -y composer

composer -v
```