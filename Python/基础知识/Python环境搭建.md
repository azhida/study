# Python3 **环境搭建**

#### 返回 [Python基础知识](../Python基础知识.md)

Python3 可应用于多平台包括 Windows、Linux 和 Mac OS X。

- Unix (Solaris, Linux, FreeBSD, AIX, HP/UX, SunOS, IRIX, 等等。)
- Win 9x/NT/2000
- Macintosh (Intel, PPC, 68K)
- OS/2
- DOS (多个DOS版本)
- PalmOS
- Nokia 移动手机
- Windows CE
- Acorn/RISC OS
- BeOS
- Amiga
- VMS/OpenVMS
- QNX
- VxWorks
- Psion
- Python 同样可以移植到 Java 和 .NET 虚拟机上。

## Python3 下载

Python3 最新源码，二进制文档，新闻资讯等可以在 Python 的官网查看到：
Python 官网：https://www.python.org/
可以在以下链接中下载 Python 的文档，可以下载 HTML、PDF 和 PostScript 等格式的文档。
Python文档下载地址：https://www.python.org/doc/

## Python 安装

Python 已经被移植在许多平台上（经过改动使它能够工作在不同平台上）。
您需要下载适用于您使用平台的二进制代码，然后安装 Python。
如果您平台的二进制代码是不可用的，你需要使用C编译器手动编译源代码。
编译的源代码，功能上有更多的选择性， 为 Python 安装提供了更多的灵活性。
Source Code 可用于 Linux 上的安装。
以下为不同平台上安装 Python3 的方法。

### Unix & Linux 平台安装 Python3:

以下为在 Unix & Linux 平台上安装 Python 的简单步骤：

* 打开 WEB 浏览器访问 [https://www.python.org/downloads/source/](https://www.python.org/downloads/source/)
* 选择适用于 Unix/Linux 的源码压缩包。
* 下载及解压压缩包  **Python-3.x.x.tgz** ，**3.x.x** 为你下载的对应版本号。
* 如果你需要自定义一些选项修改 *Modules/Setup*

以** Python3.6.1** 版本为例：

```
# tar -zxvf Python-3.6.1.tgz
# cd Python-3.6.1
# ./configure
# make && make install
```

检查 Python3 是否正常可用：

```
# python3 -V
Python 3.6.1
```

### Window 平台安装 Python:

以下为在 Window 平台上安装 Python 的简单步骤。
打开 WEB 浏览器访问 [https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/) ，一般就下载 executable installer，x86 表示是 32 位机子的，x86-64 表示 64 位机子的。
记得勾选  **Add Python 3.6 to PATH** 。
按 **Win+R** 键，输入 cmd 调出命令提示符，输入 python:
也可以在开始菜单中搜索  **IDLE** ：

### MAC 平台安装 Python:

MAC 系统都自带有 Python2.7 环境，你可以在链接 [https://www.python.org/downloads/mac-osx/](https://www.python.org/downloads/mac-osx/) 上下载最新版安装 Python 3.x。
你也可以参考源码安装的方式来安装。

## 环境变量配置

程序和可执行文件可以在许多目录，而这些路径很可能不在操作系统提供可执行文件的搜索路径中。
path(路径)存储在环境变量中，这是由操作系统维护的一个命名的字符串。这些变量包含可用的命令行解释器和其他程序的信息。
Unix 或 Windows 中路径变量为 PATH（UNIX 区分大小写，Windows 不区分大小写）。
在 Mac OS 中，安装程序过程中改变了 Python 的安装路径。如果你需要在其他目录引用 Python，你必须在 path 中添加 Python 目录。

### 在 Unix/Linux 设置环境变量

- **在 csh shell:** 输入
  
  ```
  setenv PATH "$PATH:/usr/local/bin/python"
  ```
  
  , 按下 Enter。
- **在 bash shell (Linux) 输入 :**
  
  ```
  export PATH="$PATH:/usr/local/bin/python"
  ```
  
  按下 Enter 。
- **在 sh 或者 ksh shell 输入:**
  
  ```
  PATH="$PATH:/usr/local/bin/python"
  ```
  
  按下 Enter。

**注意: ** /usr/local/bin/python 是 Python 的安装目录。

### 在 Windows 设置环境变量

在环境变量中添加Python目录：
**在命令提示框中(cmd) :** 输入

```
path=%path%;C:\Python
```

按下"Enter"。
**注意: **C:\Python 是Python的安装目录。
也可以通过以下方式设置：

* 右键点击"计算机"，然后点击"属性"
* 然后点击"高级系统设置"
* 选择"系统变量"窗口下面的"Path",双击即可！
* 然后在"Path"行，添加python安装路径即可(我的D:\Python32)，所以在后面，添加该路径即可。 **ps：记住，路径直接用分号"；"隔开！**
* 最后设置成功以后，在cmd命令行，输入命令"python"，就可以有相关显示。

## Python 环境变量

下面几个重要的环境变量，它应用于Python：

- PYTHONPATH：PYTHONPATH是Python搜索路径，默认我们import的模块都会从PYTHONPATH里面寻找。
- PYTHONSTARTUP：Python启动后，先寻找PYTHONSTARTUP环境变量，然后执行此变量指定的文件中的代码。
- PYTHONCASEOK：加入PYTHONCASEOK的环境变量, 就会使python导入模块的时候不区分大小写。
- PYTHONHOME：另一种模块搜索路径。它通常内嵌于的PYTHONSTARTUP或PYTHONPATH目录中，使得两个模块库更容易切换。

## 运行 Python

有三种方式可以运行 Python：

### 1、交互式解释器：

你可以通过命令行窗口进入 Python 并开在交互式解释器中开始编写 Python 代码。
你可以在 Unix、DOS 或任何其他提供了命令行或者 shell 的系统进行 Python 编码工作。

```
$ python             # Unix/Linux
或者  
C:>python           # Windows/DOS
```

以下为 Python 命令行参数：

| 选项 | 描述 |
| :-----| :---- |
| -d | 在解析时显示调试信息 |
| -O | 生成优化代码 ( .pyo 文件 ) |
| -S | 启动时不引入查找Python路径的位置 |
| -V | 输出Python版本号 |
| -X | 从 1.6版本之后基于内建的异常（仅仅用于字符串）已过时。 |
| -c cmd | 执行 Python 脚本，并将运行结果作为 cmd 字符串。 |
| file | 在给定的python文件执行python脚本。 |

### 2、命令行脚本

在你的应用程序中通过引入解释器可以在命令行中执行Python脚本，如下所示：

```
$ python  script.py          # Unix/Linux
或者
C:>python script.py         # Windows/DOS
```

**注意：** 在执行脚本时，请检查脚本是否有可执行权限。

### 3、集成开发环境（IDE：Integrated Development Environment）: PyCharm

PyCharm 是由 JetBrains 打造的一款 Python IDE，支持 macOS、 Windows、 Linux 系统。
PyCharm 功能 : 调试、语法高亮、Project管理、代码跳转、智能提示、自动完成、单元测试、版本控制……
PyCharm 下载地址 : https://www.jetbrains.com/pycharm/download/
PyCharm 安装地址：http://www.runoob.com/w3cnote/pycharm-windows-install.html
Professional（专业版，收费）：完整的功能，可试用 30 天。
Community（社区版，免费）：阉割版的专业版。
安装 PyCharm 中文插件，打开菜单栏 File，选择 Settings，然后选 Pulgins，点 Marketplace，搜索 chinese，然后点击 install 安装：

# 读者笔记

**使用交互式 ipython 运行 Python**
ipython 是一个 python 的交互式 shell，比默认的 python shell 好用得多，支持变量自动补全，自动缩进，支持 bash shell 命令，内置了许多很有用的功能和函数。
此 ipython 中的 i 代表 “交互(interaction)”。
官方地址：[https://ipython.org/install.html](https://ipython.org/install.html)
安装:

```
pip install ipython
```

Linux 环境还可以使用以下命令安装：

```
# Ubuntu
sudo apt-get install ipython

# Centos
yum  install ipython
```

使用:

```
ipython
```

---

**如何在 cygwin 模拟器中安装 python3**
Cygwin 是一个在 windows 平台上运行的类 UNIX 模拟环境，是 cygnus solutions 公司开发的自由软件（该公司开发的著名工具还有 eCos，不过现已被 Redhat 收购）。它对于学习 UNIX/Linux 操作环境，或者从 UNIX 到 Windows 的应用程序移植，或者进行某些特殊的开发工作，尤其是使用 GNU 工具集在 Windows 上进行嵌入式系统开发，非常有用。
安装 cygwin：
**1.下载可执行文件 [http://www.cygwin.com/setup-x86.exe](http://www.cygwin.com/setup-x86.exe)**
2. 选择 "Install from internet", 点击 Next。
3. 根目录 C:\cygwin (不建议其他目录，特别带有空格的目录名）。
4. 选择下载网站，http://sourceware.mirror.tds.net 下载比较稳定。 5. 在 "Select Packages" 菜单中选择 "Category",添加以下包:

```
under Archive select zip and unzip
under Database, select postgresql
optional: under Editors select vim (if you want to be able to edit files with vi)
under Graphics, select gnuplot
under Libs, select libglib2.0_0
under Net select curl, inetutils, openssh, openssl
under Perl select perl, perl-XML-Simple, and perl-IO-Tty
under Python select python2
under Tcl select expect
```

6.点击 Next, 开始安装。
7. 复制文件 moshell/examples/cygwin_install/cygwin_install.txt 到 C:/Cygwin (也可以在这个地址下载：http://newtran01.au.ao.ericsson.se/moshell/cygwin_install.txt)。
8. Windows 下点击 开始 –> 运行。
在 "运行" 窗口, 输入 cmd , 然后按下回车键。
打开 DOS 窗口，在 DOS 窗口执行以下命令：

```
c:
cd cygwin
bin\perl.exe cygwin_install.txt
```

安装 python3

```
wget rawgit.com/transcode-open/apt-cyg/master/apt-cyg
install apt-cyg /bin
apt-cyg install python3
```

验证：

```
[~]$ python3
Python 3.6.8 (default, Feb 15 2019, 01:54:23)
[GCC 7.4.0] on cygwin
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

---

mac安装py3 (身为一个优秀的程序员必须要配个mac)
1、安装/更新 brew [不知道brew的点进去了解一下]([https://brew.sh/index_zh-cn](https://brew.sh/index_zh-cn))

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

2、安装py3

```
brew install python3
```

3、由于mac在安装xcode时候会默认安装python2 所以需要改一下配置
(为啥不删除python2因为我胆小,为啥不用python2应为我喜欢新版本)
打开 配置文件

```
vim ~/.zshrc
```

增加配置信息(下面是我配置信息 路径自己改改)

```
alias python2='/System/Library/Frameworks/Python.framework/Versions/2.7/bin/python2.7' 
alias python3='/usr/local/Cellar/python/3.7.3/bin/python3.7' 
alias python=python3
```

刷新一下文件信息(不刷新的话 不会立即生效)

```
source ~/.zshrc
```

查看py版本

```
python --version       # Python 3.7.5
python2 --version      # Python 2.7.10
```

再推荐一个开发工具vscode [官方下载地址]([https://code.visualstudio.com/](https://code.visualstudio.com/)) )
优点: **强大、开源、免费(狠重要)、插件多**

---

#### 返回 [Python基础知识](../Python基础知识.md)

