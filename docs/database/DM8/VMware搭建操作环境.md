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