# 设置 VMware 中的 Mac OS 虚拟机进入 Recovery 模式

参考：  
[设置 VMware 中的 Mac OS 虚拟机进入 Recovery 模式](https://www.shuzhiduo.com/A/D854PZRY5E/)  
[解决MAC下修改系统文件没权限的问题](http://t.zoukankan.com/qyf404-p-modify_permitted_in_mac.html)  


VMware 中的 Mac OS 虚拟机进入 Recovery 模式：
- 1.   选择 Mac OS 虚拟机，点击“打开电源是进入固件”
- 2.   选择"Enter setup"
- 3.   选择"Boot from a file"
- 4.   选择"Recovery"
- 5.   选择 boot, 如图： 
- 6.   选择"boot.efi"
- 7.   运行效果 - 到这里就可以看见界面：`macOS 实用工具` 了

然后在顶部菜单栏找到 终端工具，执行：
```
# 这个命令执行后，才可以修改 macos 的系统文件 ，修改 macos 的版本号需要用
# 执行命令csrutil disable, 关闭这个Rootless策略
csrutil disable

# reboot 重启电脑
reboot

# 正常开机后执行命令 sudo chown -R $(whoami) /usr/local 赋权.
sudo chown -R $(whoami) /usr/local

# 修改相关的 系统文件 后， 按照第一步进入恢复模式, 执行命令csrutil enable来开启Rootless策略
csrutil enable
```

