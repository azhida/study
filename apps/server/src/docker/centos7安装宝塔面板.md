# centos7 安装宝塔面板

```
docker pull centos:centos7

# 在运行容器的时候，给容器加特权，及加上 --privileged=true 参数， 否则 挂载目录时会提示无权限
docker run -itd \
--name centos-test \
-p 888:888 \
-p 8888:8888 \
-p 8085:80 \
-p 444:443 \
-p 3308:3306 \
-v ~/www:/www \
--privileged=true \
centos:centos7
```

- 进入容器操作

```
docker exec -it centos-test bash
```

- yum之镜像加速
```
# 备份源文件
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
# 下载对应文件到/etc/yum.repos.d下
wget -O /etc/yum.repos.d/CentOS-Base.repo  http://mirrors.163.com/.help/CentOS7-Base-163.repo
# 安装epel.repo源
wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo
# 生成缓存
yum clean all
yum makecache
```


- centos7 安装宝塔面板
```
yum update -y
yum install -y wget 
yum install -y sudo
wget -O install.sh http://download.bt.cn/install/install_6.0.sh 
sudo sh install.sh ed8484bec
```