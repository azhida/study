# Windows 安装 Docker

## 官网下载安装包

[官网](https://www.docker.com/)

[安装包下载地址](https://docs.docker.com/desktop/windows/install/)

## docker desktop 更改安装目录

desktop 默认是安装到 `C:\Program Files\Docker` 下的，无法更改，但是可以用创建联接的方式改变。

### 1 Docker 未安装

- 创建目录 `D:\Docker`
- 以管理员身份打开cmd
- 执行命令
```
mklink /j "C:\Program Files\Docker" "D:\Docker"
```

### 2 Docker 已安装
- 先停止 docker 服务
- 剪切 `C:\Program Files\Docker` 到 `D:\Docker`
- 以管理员身份打开cmd并执行下列操作
```
mklink /j "C:\Program Files\Docker" "D:\Docker"
```

## docker镜像从c盘转移到E盘

以下所命令行操作都要注意：  
搜索 cmd 并以管理员身份运行，注意：不要用 `Windows PowerShell` ，可能有坑

- 停止运行 docker desktop

- 查看 wsl 发行版

```
# 查看发行版，会看到 docker-desktop 和 docker-desktop-data ，安装了 ubuntu 则还会有 Ubuntu-22.04
# docker-desktop-data 用于存储镜像，用的越多越占空间
wsl -l -v
```

- 停止 wsl

```
wsl --shutdown
```

- 导出 wsl

```
mkdir E:\docker-desktop
wsl --export docker-desktop-data E:\docker-desktop\docker-desktop-data.tar
```

- 注销 wsl

```
wsl --unregister docker-desktop-data
```

- 导入 wsl

```
wsl --import docker-desktop-data E:\docker-desktop\data E:\docker-desktop\docker-desktop-data.tar --version 2
```

- 重新启动Docker

- 确认一切没有问题，则可删除 `E:\docker-desktop\docker-desktop-data.tar` 文件




