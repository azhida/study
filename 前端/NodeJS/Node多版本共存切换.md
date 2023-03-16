# Node 多版本共存切换

## 卸载已经安装的 NodeJS

> 一定要卸载干净，否则很大概率使用不了
> 
> 我遇到的问题：  
> 删除不干净，导致 nvm 建立软链接失败

## 安装 NVM

下载地址：https://github.com/coreybutler/nvm-windows/releases

安装完成要打开新的 cmd 窗口，否则看不到 nvm 信息

### NVM 常用命令

注意：在使用NVM安装NodeJS前，需要以管理员身份打开命令行窗口。否则，将无法使用nvm use命令切换NPM版本

```
# 查看 nvm 版本
nvm -v

# 查看可安装的NodeJS版本。建议选择LTS中的版本进行安装（LTS，即Long Term Support，长期支持版本）
nvm list available

# 在线安装 16.17.1 版本的 NodeJS
nvm install 16.17.1

# 
nvm use 16.17.1

NVM的常用命令如下：

nvm list available：查看可在线安装的NodeJS版本

nvm ls：列出所有已经在NVM中安装的NodeJS版本。

nvm current：显示当前正在使用的Node版本。

nvm install xx.xx.xx：在NVM中在线安装指定版本的NodeJS，xx.xx.xx为指定的版本号。

nvm uninstall xx.xx.xx：在NVM中卸载指定版本的NodeJS，xx.xx.xx为指定的版本号。

nvm use xx.xx.xx：切换NodeJS版本，xx.xx.xx为指定的版本号。

nvm version：显示当前所使用的NVM的版本号。

其它命令，如nvm arch、nvm on、nvm off、nvm proxy、nvm node_mirror、nvm npm_mirror、nvm root等
```


