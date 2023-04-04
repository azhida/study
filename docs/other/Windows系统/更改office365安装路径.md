# 更改 office 365 安装路径

原文地址：[更改office 365安装路径，节省宝贵的系统盘空间](http://www.360doc.com/content/19/1017/13/11966982_867421069.shtml)

1. `win + r` 输入 `regedit` 打开注册表。进入 `\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion` 。
1. 进入目录后，分别把目录下这三项注册表进行导出备份。注：暂时更改路径，等待安装好了 office 需要还原的。
```
ProgramFilesDir

ProgramFilesDir (x86)

ProgramW6432Dir
```
1. 然后把上面这三项注册表的值改为 office 的安装路径，如这里的安装路径为 `D:\Microsoft Office` 就把这三项注册表的值改为这个路径。
1. 登录 office365 [官网](https://www.office.com/?omkt=zh-TW) ，点击右上角 `安装 office`，按步骤往下操作即可。
1. 安装完成后打开刚刚自定义的安装目录 `D:\Microsoft Office` 会发现，软件已经安装在指定的目录中了。
1. 还原注册表，把刚刚导出的3个注册表双击重新导入注册表中即可。