# Windows 安装 Docker

docker 版本 v4.21.1

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

## 更改 docker 镜像存储位置

- 启动 docker
- 打开设置 Resources/Advanced
- 修改 `Disk image location` 的位置
- 保存重启即可

## docker 启动失败解决办法

### 当前计算机配置不支持 WSL2

强制修复 Hyper-V 和 WSL2 配置

重置 Hyper-V 和 WSL2 的步骤：

- 1、禁用 Hyper-V 和虚拟机平台功能：（powerSheel中管理员执行）

```sh
dism.exe /online /disable-feature /featurename:Microsoft-Hyper-V /norestart

dism.exe /online /disable-feature /featurename:VirtualMachinePlatform /norestart
```

- 2、重启计算机。

- 3、重新启用 Hyper-V 和虚拟机平台：

```sh
dism.exe /online /enable-feature /featurename:Microsoft-Hyper-V /all /norestart

dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

- 4、再次重启。

到此，wsl 的功能就正常了，重装 wsl ubuntu 

```sh
wsl --install 
```