# 联想 IdeaPad S410 安装 macOS 10.14

## 事先准备
- U盘 10G 以上
- 软件：TransMac ，自行百度下载
- 软件：macOS 10.14 镜像
  - 百度网盘：链接：https://pan.baidu.com/s/1hjpG_OZcZUDu3AxHSuUTRw?pwd=0m6j 提取码：0m6j
  - 黑果小兵原版镜像下载：https://blog.daliansky.net/macOS-Mojave-10.14-18A389-Release-with-Clover-4670-original-mirror.html
  - 更多镜像看 [黑果小兵](https://blog.daliansky.net/categories/%E4%B8%8B%E8%BD%BD/)
  
## TransMac 制作 U盘启动盘（可自行百度，很多教程）
- Windows 下以管理员身份运行软件 TransMac （试用版的也可以），或者自行百度破解版
- TransMac 软件内，左侧找到你的 U盘（要小心谨慎，注意别找错了U盘，会清空全部数据的）
- 找到左侧U盘并鼠标右键，选中 `Format Disk For Mac` ，会将 U盘 根式化 匹配 Mac 系统
- 找到左侧U盘并鼠标右键，选中 `Restore with Disk Image` ，然后找到准备好的 Mac系统镜像，写入 U盘
- 成功写入，说明 U盘启动盘制作好了。

## 联想笔记本 IdeaPad S410 安装 macOS 10.14

参考：  

[教程](https://blog.daliansky.net/MacOS-installation-tutorial-XiaoMi-Pro-installation-process-records.html)

[排错](https://blog.daliansky.net/Common-problems-and-solutions-in-macOS-Mojave-10.14-installation.html)



### BIOS 设置
开机按住 F2 进入 BIOS 设置界面，在 boot 选项卡中，将 EFI 中 U盘 调整到第一个位置，按住 `Fn + F10` 保存设置并重启电脑，
重启后 会进入 U盘的引导界面了
### U盘引导界面 (第一阶段) - U盘启动
- 选择 USB 启动，会跑代码，然后进入 macOS 安装的第一个阶段
  - 选择 安装的 硬盘 （假设硬盘名称为： `MacOS 10.14` ）
  - 可能会报错：镜像副本已损坏，解决办法：终端命令行执行 `date 0201010116` ，详见：[排错](https://blog.daliansky.net/Common-problems-and-solutions-in-macOS-Mojave-10.14-installation.html)
  - 然后 执行 macOS 系统安装，结束后会重启

### U盘引导界面 (第二阶段) - 硬盘启动
- 选中 `Boot macOS Install from Mac OS 10.14` ，不要直接回车键启动
- 按 空格键 ，选择第一项  `Boot macOS with selected options` ，然后回车启动，跑完代码 会进入 macos 的设置界面了
- 30分钟左右跑完代码，然后就一路往下设置，直到最后安装应该就成功了
> 注意：这个过程中，网络我是没有设置成功的，百度了网上资料，很多人说是 黑苹果无法识别 网卡设备导致，  
> 我也没有过多折腾，因为后面我直接用数据线连 苹果手机，电脑就可以上网了。

到此，安装算是成功了，但是 每次开机，都还需要u盘作为引导才能正常进入mac系统，所以，继续往下看。

## 实现 macOS 脱离 U盘 实现正常开机
> 注：这时，虽然 已经安装成功，但开机重启，还是需要 U盘，否则无法启动！

解决办法： [参考](https://blog.daliansky.net/Common-problems-and-solutions-in-macOS-Mojave-10.14-installation.html)

### 教你将U盘上的EFI复制到磁盘的EFI分区,脱离USB运行[macOS篇]

> 新的系统安装成功后，EFI还位于U盘里，总不能一直挂着U盘使用系统吧。这个时候如果你想将U盘里的EFI复制到磁盘的EFI分区里，却苦于找不到看不见EFI分区，这个时候是该让 `diskutil` 登场了。

`diskutil` 命令的基本用法：

查看磁盘分区表:
```
diskutil list
```
会看到 磁盘和U盘的信息

挂载磁盘EFI分区(如果你的不是 disk0s1 ，请自行替换为 EFI 对应的 IDENTIFIER)
```
sudo diskutil mount disk0s1
```

挂载U盘EFI分区(如果你的不是 disk1s1 ，请自行替换为 EFI 对应的 IDENTIFIER)
```
sudo diskutil mount disk1s1
```

打开 Finder，注意后面有个.
```
open .
```

左侧会显示挂载了两个EFI分区，将U盘EFI目录全部复制到磁盘的EFI分区即可。

怎么区分 U盘的EFI 和 磁盘的EFI：  
去U盘下找 EFi 文件，看看里边是什么，然后 对比这两个 EFI 。  
一般，u盘下的 EFI 有两个文件夹 `BOOT` 和 `CLOVER` ，磁盘下的 EFI 只有 一个文件夹 `APPLE` 。

复制，合并，然后就可以 拔出 U盘，让电脑自己启动，可以正常开机进入系统了。

## 优化（未完待续）
> 这个时候，重新开机启动，还是会进入磁盘引导页面，然后跑代码，之后才能进入 Mac系统！  
> 我现在还没有研究实操怎样优化，因为现在只要跑完开机代码，技能进入系统，我已经可以做开发了，等以后有空了再继续研究！



