# Python

## 官网

https://www.python.org/


## 多环境切换

### virtualenv

```sh
# 安装virtualenv
pip install virtualenv
 
# 创建新的虚拟环境
virtualenv myenv
# python -m venv 你的项目简称名/你创建的虚拟环境名
python -m venv test-002/test-002-env
# 列出文件
# win
dir
# linux
ls
# 激活 `virtualenv` 虚拟环境
cd test-002/test-002-env/Scripts
.\activate
# 退出 `virtualenv` 虚拟环境
deactivate


 
# 激活虚拟环境
source myenv/bin/activate
 
# 在虚拟环境中安装需要的包
pip install package1 package2
```

### conda

anaconda 的下载连接：https://www.anaconda.com/download

清华大学开源软件镜像站：
https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/

目前最新版下载地址：https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/Anaconda-1.4.0-Windows-x86_64.exe

#### 操作

```sh
# 更新
conda update anaconda

# 查看anaconda版本
conda -v

# 查看所有虚拟环境
conda env list

```