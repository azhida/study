# HBuilderX 使用笔记

## 安装 安卓模拟器 - MUMU 模拟器
- MUMU 设置
	- 系统应用 》 设置 》 开发者选项 》 开启 ，同时开启 `USB调试`
- HBuilderX 设置
	- 运行 》 运行到浏览器 》 配置web服务器
	- adb路径：D:/MuMu/emulator/nemu/vmonitor/bin/adb_server.exe ，这里根据你mumu模拟器的安装目录来找
	- 安卓模拟器端口：7555
- 然后先重启 mumu模拟器，再重启 编辑器 HBuilderX ，就可以 运行到手机或者模拟器 了