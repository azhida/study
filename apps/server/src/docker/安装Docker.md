# 安装 Docker

- 官方安装脚本
```
sudo curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```
- 检测是否安装成功
```
sudo docker info
```
- docker 镜像加速
> 注：阿里云的 docker 镜像加速器看 [这里](https://gitee.com/link?target=https%3A%2F%2Fcr.console.aliyun.com%2Fcn-hangzhou%2Finstances%2Fmirrors)

```
sudo vim /etc/docker/daemon.json
```
内容
```
{
    "registry-mirrors":[
        "https://docker.mirrors.ustc.edu.cn/",
        "https://hub-mirror.c.163.com/",
        "https://reg-mirror.qiniu.com/",

        "https://docker.m.daocloud.io",
        "https://noohub.ru",
        "https://huecker.io",
        "https://dockerhub.timeweb.cloud",
        "https://alzgoonw.mirror.aliyuncs.com",
        "https://hub-mirror.c.163.com", 
        "https://registry.aliyuncs.com", 
        "https://docker.mirrors.ustc.edu.cn"
    ],
    "dns": ["8.8.8.8", "114.114.114.114"]
}


```
- 重启 docker 服务
```
sudo systemctl daemon-reload
sudo systemctl restart docker
sudo systemctl status docker
```
> 特别注意：重启 docker 会导致已经运行的 容器全部停止，请谨慎操作重启

- 检查加速器是否生效
```
sudo docker info
```
看到如下内容，说明已生效
```
 Registry Mirrors:
  https://docker.mirrors.ustc.edu.cn/
  https://hub-mirror.c.163.com/
  https://reg-mirror.qiniu.com/
```