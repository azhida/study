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
