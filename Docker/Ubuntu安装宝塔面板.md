# Ubuntu 安装宝塔面板

```
docker pull ubuntu:latest

# 在运行容器的时候，给容器加特权，及加上 --privileged=true 参数， 否则 挂载目录时会提示无权限
docker run -itd \
--name ubuntu-test \
-p 888:888 \
-p 8888:8888 \
-p 8085:80 \
-p 444:443 \
-p 3308:3306 \
-v ~/www:/www \
--privileged=true \
ubuntu:latest
```

- 进入容器操作

```
docker exec -it ubuntu-test bash
```


- ubuntu 安装宝塔面板
```
apt update
apt install wget
apt install sudo
wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh
sudo bash install.sh ed8484bec
# 地区选 亚洲 6.Asia ，时区选 上海 70.Shanghai
```