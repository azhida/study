# 基于 VMware Workstation Pro 搭建操作环境

## 安装 VMware Workstation Pro

[VMware 官网](https://www.vmware.com/)

请自行下载安装 VMware Workstation Pro

## 下载银河麒麟镜像

麒麟软件官网：https://www.kylinos.cn/

自行下载对应的版本。

我这里选择：银河麒麟高级服务器操作系统V10/兼容版

下载太久，先用现有的 `Kylin-Server-10-SP2-Release-Build09-20210524-x86_64.iso` 来操作。

## 创建虚拟机 vm-dm

### 配置宿主机和虚拟机的共享文件夹

安装 `vmware tools` ，然后鼠标右键将 `/run/media/root/VMware Tools/VMwareTools-10.3.23-16594550.tar.gz` 加压缩到 `/home` 目录下，解压后得到文件夹 `/home/vmware-tools-distrib` 。

执行安装命令：

```sh
cd /home/vmware-tools-distrib
./vmware-install.pl
# 一路默认即可
```

#### 设置 vm-dm 共享文件夹

- 选中 vm-dm ，鼠标右键，点击 设置
-  点击 选项
-  点击 共享文件夹
- 点击 总是启用
- 点击 添加
- 自行选择 共享的文件夹，我的是 `D:/vm-share` ，名称 `vm-share` , 然后点击 确认

此时 vm-dm 虚拟机里面会多了一个文件夹 `/mnt/hgfs/vm-share` ，共享文件夹配置结束 。

## 在宿主机使用 ssh 连接 vm-dm 虚拟机

vm-dm 的网络适配器 选择 `NAT 模式`。

vm-dm 虚拟机创建成功并启动后，先在 vm-dm 里面选择一个可用的网络。

vm-dm 里面查看网络信息。

```sh
ifconfig

# ens33: flags=4613<...
#         inet 192.168.234.130  ...
#         ...
```

说明 vm-dm 的 ip 地址为 `192.168.234.130` 。

### 做宿主机和虚拟机的网络映射

- 点击 VMware Workstation Pro 软件菜单栏 `编辑` 按钮
- 点击 虚拟网络编辑器
- 弹出框右下角点击 更改设置 (需要具备管理员特权才能修改网络配置。)
- 选中类型为 `NAT 模式` 的网卡，并点击 `NAT 设置`
- 在 NAT 设置 弹出框中操作：
  - 点击 `添加`
  - 主机端口：9022
  - 类型：TCP
  - 虚拟机IP地址：192.168.234.130
  - 虚拟机端口：22
  - 点击确定
- 点击确定
- 点击应用，点击确定

此时，映射已经做好。

### 宿主机 ssh 连接 vm-dm

打开 cmd 命令行，执行

```sh
ssh root@127.0.0.1 -p 9022
```

按要求输入 vm-dm 的 root 密码就可以接上了。

## 下载 DM8 安装包

https://eco.dameng.com/download/

选择合适的版本。

这里我先用 `dm8_20231109_x86_kylin10_64.iso` 来操作。

