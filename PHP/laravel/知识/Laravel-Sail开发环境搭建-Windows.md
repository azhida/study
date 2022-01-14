# 搭建 Laravel Sail 开发环境 - Windows

学习地址：[搭建 Laravel Sail 开发环境 - Windows](https://learnku.com/docs/laravel-development-environment/8.x/setting-up-the-sail-environment-under-windows-10/10352)

## 开启 Windows 系统相关功能
- 快捷键 `win + S` 打开搜索框
- 搜索并打开 `控制面板`
- 打开 `程序`
- 打开 `程序和功能 > 启用或关闭 Windows 功能`
- 查找并勾选如下两项，后确认
  - 适用于 Linux 的 Windows 子系统
  - 虚拟机平台

> 注意：重启电脑，更新生效

## 安装 Windows Terminal

为了更好地访问 Windows 的子系统，推荐使用 Windows Terminal 作为命令行工具。  

打开微软商店，搜索关键字 `Windows Terminal` ，在搜索结果中点击安装即可。

## 下载 VSCode
## 安装 Ubuntu
接下来下载和安装子系统 —— Ubuntu 。

打开微软商店，搜索关键词 Ubuntu，第一和第二个都可以：点击获取，然后打开即可。  
如有报错，则 [下载补丁](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package) 。

补丁下载：  
安装 > 旧版本的手动安装步骤 > 步骤 4 - 下载 Linux 内核更新包 > 适用于 x64 计算机的 WSL2 Linux 内核更新包

## 安装 Docker Desktop

### 1. 下载并安装
前往 Docker 官网下载 [Docker Desktop](https://hub.docker.com/editions/community/docker-ce-desktop-windows) ，下载完成后点击安装包安装，一直下一步即可。
### 2. 开启 WSL2 模式
### 3. Docker Hub 镜像加速

