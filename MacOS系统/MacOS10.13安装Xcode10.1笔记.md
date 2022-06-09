# MacOS10.13 安装 Xcode10.1 笔记

## 安装 macOS 虚拟机

macOS10.13 镜像：百度网盘下载地址

链接：https://pan.baidu.com/s/1DUAE85VlF4jd7vnXs4O3Kg?pwd=3ov8 
提取码：3ov8 
--来自百度网盘超级会员V3的分享

虚拟机的安装方法，自行百度。

## 安装 Xcode

### xcode_10_1.xip 包下载地址

百度网盘

链接：https://pan.baidu.com/s/14PsfnY4MThieCtj-FkcJ-w?pwd=1dak 
提取码：1dak 
--来自百度网盘超级会员V3的分享

mac 官网：
[https://download.developer.apple.com/Developer_Tools/Xcode_10/Xcode_10.xip](https://download.developer.apple.com/Developer_Tools/Xcode_10/Xcode_10.xip)

也可以在 [https://developer.apple.com/download/all/](https://developer.apple.com/download/all/) 自己搜索下载

### 注意事项

macOS10.13 不支持 xcode10.1，安装时 xcode10.1 会报错：要在 macos10.13.6 安装。

- 解决办法为：

修改 系统版本号 ： 10.13 修改为 10.13.6 。

文件位置：
```
/System/Library/CoreServices/SystemVersion.plist
```

将  10.13 修改为 10.13.6 （总共两处）。

#### 直接修改会提示无权限 的解决办法

[设置 VMware 中的 Mac OS 虚拟机进入 Recovery 模式](./%E8%AE%BE%E7%BD%AE%20VMware%20%E4%B8%AD%E7%9A%84%20Mac%20OS%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E8%BF%9B%E5%85%A5%20Recovery%20%E6%A8%A1%E5%BC%8F.md)

将文件 `/System/Library/CoreServices/SystemVersion.plist` 复制到桌面修改后进行替换。

