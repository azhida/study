# Ubuntu Docker 安装
#### 返回 [Docker基础知识](../Docker基础知识.md) 

---

Docker Engine-Community 支持以下的 Ubuntu 版本：  
- Xenial 16.04 (LTS)
- Bionic 18.04 (LTS)
- Cosmic 18.10
- Disco 19.04
- 其他更新的版本……

Docker Engine - Community 支持上 x86_64（或 amd64）armhf，arm64，s390x （IBM Z），和 ppc64le（IBM的Power）架构。

## 使用官方安装脚本自动安装
安装命令如下：
```
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```
也可以使用国内 daocloud 一键安装命令：
```
curl -sSL https://get.daocloud.io/docker | sh
```

## 手动安装
### 卸载旧版本
Docker 的旧版本被称为 docker，docker.io 或 docker-engine 。如果已安装，请卸载它们：
```
$ sudo apt-get remove docker docker-engine docker.io containerd runc
```
当前称为 Docker Engine-Community 软件包 docker-ce 。  
安装 Docker Engine-Community，以下介绍两种方式。
### 使用 Docker 仓库进行安装
在新主机上首次安装 Docker Engine-Community 之前，需要设置 Docker 仓库。之后，您可以从仓库安装和更新 Docker 。
### 设置仓库
更新 apt 包索引。
```
$ sudo apt-get update
```
安装 apt 依赖包，用于通过HTTPS来获取仓库:
```
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```
添加 Docker 的官方 GPG 密钥：
```
$ curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
```
9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88 通过搜索指纹的后8个字符，验证您现在是否拥有带有指纹的密钥。
```
$ sudo apt-key fingerprint 0EBFCD88
   
pub   rsa4096 2017-02-22 [SCEA]
      9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
sub   rsa4096 2017-02-22 [S]
```
使用以下指令设置稳定版仓库
```
$ sudo add-apt-repository \
   "deb [arch=amd64] https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/ \
  $(lsb_release -cs) \
  stable"
```

### 安装 Docker Engine-Community
更新 apt 包索引。
```
$ sudo apt-get update
```
安装最新版本的 Docker Engine-Community 和 containerd ，或者转到下一步安装特定版本：
```
$ sudo apt-get install docker-ce docker-ce-cli containerd.io
```
要安装特定版本的 Docker Engine-Community，请在仓库中列出可用版本，然后选择一种安装。列出您的仓库中可用的版本：
```
$ apt-cache madison docker-ce

  docker-ce | 5:18.09.1~3-0~ubuntu-xenial | https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu  xenial/stable amd64 Packages
  docker-ce | 5:18.09.0~3-0~ubuntu-xenial | https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu  xenial/stable amd64 Packages
  docker-ce | 18.06.1~ce~3-0~ubuntu       | https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu  xenial/stable amd64 Packages
  docker-ce | 18.06.0~ce~3-0~ubuntu       | https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu  xenial/stable amd64 Packages
  ...
```
使用第二列中的版本字符串安装特定版本，例如 5:18.09.1~3-0~ubuntu-xenial。
```
$ sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io
```
测试 Docker 是否安装成功，输入以下指令，打印出以下信息则安装成功:
```
$ sudo docker run hello-world

Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
1b930d010525: Pull complete                                                                                                                                  Digest: sha256:c3b4ada4687bbaa170745b3e4dd8ac3f194ca95b2d0518b417fb47e5879d9b5f
Status: Downloaded newer image for hello-world:latest


Hello from Docker!
This message shows that your installation appears to be working correctly.


To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.


To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash


Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/


For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

## 使用 Shell 脚本进行安装
Docker 在 get.docker.com 和 test.docker.com 上提供了方便脚本，用于将快速安装 Docker Engine-Community 的边缘版本和测试版本。脚本的源代码在 docker-install 仓库中。 不建议在生产环境中使用这些脚本，在使用它们之前，您应该了解潜在的风险：
- 脚本需要运行 root 或具有 sudo 特权。因此，在运行脚本之前，应仔细检查和审核脚本。
- 这些脚本尝试检测 Linux 发行版和版本，并为您配置软件包管理系统。此外，脚本不允许您自定义任何安装参数。从 Docker 的角度或您自己组织的准则和标准的角度来看，这可能导致不支持的配置。
- 这些脚本将安装软件包管理器的所有依赖项和建议，而无需进行确认。这可能会安装大量软件包，具体取决于主机的当前配置。
- 该脚本未提供用于指定要安装哪个版本的 Docker 的选项，而是安装了在 edge 通道中发布的最新版本。
- 如果已使用其他机制将 Docker 安装在主机上，请不要使用便捷脚本。

本示例使用 get.docker.com 上的脚本在 Linux 上安装最新版本的Docker Engine-Community。要安装最新的测试版本，请改用 test.docker.com。在下面的每个命令，取代每次出现 get 用 test。
```
$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sudo sh get-docker.sh
```
如果要使用 Docker 作为非 root 用户，则应考虑使用类似以下方式将用户添加到 docker 组：
```
$ sudo usermod -aG docker your-user
```

### 卸载 docker
删除安装包：
```
sudo apt-get purge docker-ce
```
删除镜像、容器、配置文件等内容：
```
sudo rm -rf /var/lib/docker
```

# 读者笔记

**Ubuntu 16.04 安装 Docker**

1.选择国内的云服务商，这里选择阿里云为例
```
curl -sSL http://acs-public-mirror.oss-cn-hangzhou.aliyuncs.com/docker-engine/internet | sh -
```
2.安装所需要的包
```
sudo apt-get install linux-image-extra-$(uname -r) linux-image-extra-virtual
```
3.添加使用 HTTPS 传输的软件包以及 CA 证书
```
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates
```
4.添加GPG密钥
```
sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
```
5.添加软件源
```
echo "deb https://apt.dockerproject.org/repo ubuntu-xenial main" | sudo tee /etc/apt/sources.list.d/docker.list
```
6.添加成功后更新软件包缓存
```
sudo apt-get update
```
7.安装docker
```
sudo apt-get install docker-engine
```
8.启动 docker
```
sudo systemctl enable docker
sudo systemctl start docker
```

---

**Ubuntu 18.04 安装 Docker-ce**

1.更换国内软件源，推荐中国科技大学的源，稳定速度快（可选）
```
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
sudo sed -i 's/archive.ubuntu.com/mirrors.ustc.edu.cn/g' /etc/apt/sources.list
sudo apt update
```
2.安装需要的包
```
sudo apt install apt-transport-https ca-certificates software-properties-common curl
```
3.添加 GPG 密钥，并添加 Docker-ce 软件源，这里还是以中国科技大学的 Docker-ce 源为例
```
curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu \
$(lsb_release -cs) stable"
```
4.添加成功后更新软件包缓存
```
sudo apt update
```
5.安装 Docker-ce
```
sudo apt install docker-ce
```
6.设置开机自启动并启动 Docker-ce（安装成功后默认已设置并启动，可忽略）
```
sudo systemctl enable docker
sudo systemctl start docker
```
7.测试运行
```
sudo docker run hello-world
```
8.添加当前用户到 docker 用户组，可以不用 sudo 运行 docker（可选）
```
sudo groupadd docker
sudo usermod -aG docker $USER
```
9.测试添加用户组（可选）
```
docker run hello-world
```

---

在腾讯云上装了半天没成功，是 ubuntu 环境，最后自己试到一个。

1、安装
```
#  apt-get install -y docker.io
```
启动  
```
#  service docker start
```
查看
```
#  docker -v
Docker version 18.09.5, build e8ff056
```
检查修补
```
# apt update
```
安装修补
```
# apt-get update
```

2、镜像  

查看本地的镜像：
```
# docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
```
搜索镜像：
```
# docker search tomcat
NAME                          DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED
tomcat                        Apache Tomcat is an open source implementati…   2403                [OK]                
tomee                         Apache TomEE is an all-Apache Java EE certif…   66                  [OK]                
dordoka/tomcat                Ubuntu 14.04, Oracle JDK 8 and Tomcat 8 base…   53                                      [OK]
bitnami/tomcat                Bitnami Tomcat Docker Image                     28                                      [OK]
......省略
```
拉取镜像：
```
# docker pull tomcat
Using default tag: latest
latest: Pulling from library/tomcat
...省略代码
Digest: sha256:0e11c388b664df8a27a901dce21eb89f11d8292f7fca1b3e3c4321bf7897bffe
Status: Downloaded newer image for hello-world:latest
```
删除镜像：
```
# docker rmi hello-world
Untagged: hello-world:latest
Untagged: hello-world@sha256:0e11c388b664df8a27a901dce21eb89f11d8292f7fca1b3e3c4321bf7897bffe
Deleted: sha256:fce289e99eb9bca977dae136fbe2a82b6b7d4c372474c9235adc1741675f587e
Deleted: sha256:af0b15c8625bb1938f1d7b17081031f649fd14e6b233688eea3c5483994a66a3
```


---

#### 返回 [Docker基础知识](../Docker基础知识.md) 