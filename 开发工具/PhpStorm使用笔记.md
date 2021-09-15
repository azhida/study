###### 调整字体大小
```
# File --> Settings --> Keymap --> Editor Actions
# 找到如下选项，并双击
Decrease Font Size
Increase Font Size
# 选择 Add Mouse Shortcut，按住 Ctrl ，鼠标滚轮上下滚动即可
```
###### phpstorm配置git并解决Terminal 中文乱码（Unicode 编码）的方法
```
# 一、先在phpstorm上配置git
# 1、打开 settings 设置界面，选择 Tools 中的 Terminal (File -> settings -> Tools -> Terminal)
# 2、修改 Shell path 为你的Git bash 安装路径，我的在 D:\Git\bin\bash.exe
# 3、重新打开你的 Terminal 就能看到变成了经常看到的 Git bash 窗口
# 二、解决中文 Unicode 编码问题
# 1、修改 Git 的安装目录下的 bash.bashrc 文件，我的目录是：D:\developer\Git\etc，在该文件最后添加以下代码
# 解决IDEA下的terminal中文Unicode编码问题
export LANG="zh_CN.UTF-8"
export LC_ALL="zh_CN.UTF-8"
# 2、添加以后重启 IDEA，重新打开 Terminal 查看中文内容，就成功显示中文啦
```
###### 退出控制台的编辑模式并保存编辑的内容
```
# 退出编辑模式
Ctrl+C
# 保存内容
:wq
```