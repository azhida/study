# 如何在 Ubuntu 20.04 上安装 IonCube Loader

## 目录

1. 什么是 IonCube？
2. 先决条件
3. PHP 安装
4. 下载 IonCube
5. PHP 配置文件
6. 将 ionCube 扩展添加到 PHP
7. 确认 IonCube 配置

## 什么是 IonCube？

IonCube 是一个代码加密工具，创建于2003 年。引入它是为了保护用 PHP 语言编写的代码，使未经许可的用户无法查看、更改或运行文件。它通过加密/解密方法保护文件。


## 先决条件

首先，我们需要准备一些东西来开始安装 ionCube loader。我们将需要以下内容：
- Ubuntu 20.4 操作系统
- 已安装 PHP

> 注意： PHP 未预装在 Ubuntu 20.4 中，但截至目前它确实有一个php7.4存储库。

## PHP 安装

要安装PHP，请在终端上键入以下命令：

```
# 记得更新存储库到最新
apt update
apt install php
php -versions
```

## 下载 IonCube

要下载 ionCube 加载程序，请在终端上键入以下命令：
```
wget http://downloads3.ioncube.com/loader_downloads/ioncube_loaders_lin_x86-64.tar.gz
```
解压 tar 文件
```
tar xzf ioncube_loaders_lin_x86-64.tar.gz -C /usr/local
# 查看是否已解压
ls /usr/local/ioncube
```

## PHP 配置文件

需要注意的是，您只需为特定的PHP 配置文件添加一个 ionCube loader 。但是，如果需要，您可以在所有配置文件中添加 ionCube loader 。

如果您想具体一点，可以通过键入以下命令来检查哪个 PHP 配置有效：
```
php -i | grep php.ini
```
输出如下：
```
Configuration File (php.ini) Path => /etc/php/7.4/cli
Loaded Configuration File => /etc/php/7.4/cli/php.ini
```

## 将 ionCube 扩展添加到 PHP

我们必须在 PHP 配置文件 ( PHP.ini ) 中添加 ionCube。您所要做的就是在文件末尾添加一个命令。

要将扩展添加到 PHP，请键入以下命令：

```
vim /etc/php/7.4/cli/php.ini
```
转到底部并添加以下命令：
```
zend_extension = /usr/local/ioncube/ioncube_loader_lin_7.4.so
```
确保文件路径正确。根据您的 PHP 版本，它可能会有所不同。但是，如果您使用的是默认的 Ubuntu 20.4 存储库，则无需担心这一点。

此外，请确保选择与您的 PHP 版本匹配的 ioncube_loader 版本。


## 确认 IonCube 配置

要检查 IonCube 加载程序是否安装成功，请在终端上键入以下命令：
```
php -v
```
现在您的输出将如下所示
```
PHP 7.4.3 (cli) (built: Mar  2 2022 15:36:52) ( NTS )
Copyright (c) The PHP Group
Zend Engine v3.4.0, Copyright (c) Zend Technologies
    with the ionCube PHP Loader + ionCube24 v11.0.1, Copyright (c) 2002-2022, by ionCube Ltd.
    with Zend OPcache v7.4.3, Copyright (c), by Zend Technologies
```

