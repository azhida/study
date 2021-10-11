## C 环境设置
#### 返回 [C基础知识](../C基础知识.md) 

***


###### 本地环境设置
如果您想要设置 C 语言环境，您需要确保电脑上有以下两款可用的软件，文本编辑器和 C 编译器。

###### 文本编辑器
这将用于输入您的程序。文本编辑器包括 Windows Notepad、OS Edit command、Brief、Epsilon、EMACS 和 vim/vi。  
文本编辑器的名称和版本在不同的操作系统上可能会有所不同。例如，Notepad 通常用于 Windows 操作系统上，vim/vi 可用于 Linux/UNIX 操作系统上。  
通过编辑器创建的文件通常称为源文件，源文件包含程序源代码。C 程序的源文件通常使用扩展名 `.c`。  
在开始编程之前，请确保您有一个文本编辑器，且有足够的经验来编写一个计算机程序，然后把它保存在一个文件中，编译并执行它。

###### C 编译器
写在源文件中的源代码是人类可读的源。它需要"编译"，转为机器语言，这样 CPU 可以按给定指令执行程序。  
C 语言编译器用于把源代码编译成最终的可执行程序。这里假设您已经对编程语言编译器有基本的了解了。  
最常用的免费可用的编译器是 GNU 的 C/C++ 编译器，如果您使用的是 HP 或 Solaris，则可以使用各自操作系统上的编译器。  
以下部分将指导您如何在不同的操作系统上安装 GNU 的 C/C++ 编译器。这里同时提到 C/C++，主要是因为 GNU 的 gcc 编译器适合于 C 和 C++ 编程语言。  

- UNIX/Linux 上的安装
  - 如果您使用的是 Linux 或 UNIX，请在命令行使用下面的命令来检查您的系统上是否安装了 GCC：
  - ```
    gcc -v
    ```
  - 如果您的计算机上已经安装了 GNU 编译器，则会显示如下消息：
  - ```
    Using built-in specs.
    Target: i386-redhat-linux
    Configured with: ../configure --prefix=/usr .......
    Thread model: posix
    gcc version 4.1.2 20080704 (Red Hat 4.1.2-46)
    ```
  - 如果未安装 GCC，那么请按照 http://gcc.gnu.org/install/ 上的详细说明安装 GCC。

- Mac OS 上的安装
  - 如果您使用的是 Mac OS X，最快捷的获取 GCC 的方法是从苹果的网站上下载 Xcode 开发环境，并按照安装说明进行安装。一旦安装上 Xcode，您就能使用 GNU 编译器。
  - Xcode 目前可从 developer.apple.com/technologies/tools/ 上下载。
- Windows 上的安装
  - 为了在 Windows 上安装 GCC，您需要安装 MinGW。为了安装 MinGW，请访问 MinGW 的主页 mingw-w64.org，进入 MinGW 下载页面，下载最新版本的 MinGW 安装程序，命名格式为 MinGW-<version>.exe。
  - 当安装 MinGW 时，您至少要安装 gcc-core、gcc-g++、binutils 和 MinGW runtime，但是一般情况下都会安装更多其他的项。
  - 添加您安装的 MinGW 的 bin 子目录到您的 PATH 环境变量中，这样您就可以在命令行中通过简单的名称来指定这些工具。
  - 当完成安装时，您可以从 Windows 命令行上运行 gcc、g++、ar、ranlib、dlltool 和其他一些 GNU 工具。

  
## 读者笔记

***

**Windows 环境下使用 GCC**  

MinGw 是 Minimal GNU on Windows 的缩写，允许在 GNU/Linux 和 Windows 平台生成本地的 Windows 程序而不需要第三方运行时库。本文主要介绍 MinGw 的安装和使用。  
1. 安装
     1. 下载 min-gw 安装程序，链接为：http://sourceforge.net/projects/mingw/files/，下载 mingw-get-setup.exe (86.5 kB)
     2. 运行 mingw-get-setup.exe (86.5 kB) ,点击“运行”，continue等，注意记住安装的目录，如 `C:\MinGw`,下面修改环境变量时还会用到。
     3. 修改环境变量: 选择计算机—属性---高级系统设置---环境变量，在系统变量中找到 Path 变量，在后面加入 min-gw的安装目录，如 `C:\MinGw\bin`
     4. 在开始菜单中，点击“运行”，输入 `cmd`,打开命令行:输入 `mingw-get.exe`,如果弹出 MinGw installation manager 窗口，说明安装正常。此时，关闭 MinGw installation manager 窗口，否则接下来的步骤会报错
     5. 在cmd中输入命令 `mingw-get install gcc`,等待一会，gcc 就安装成功了。  

如果想安装 g++,gdb,只要输入命令 `mingw-get install g++` 和 `mingw-get install gdb`
2. 使用
 
在 cmd 的当前工作目录写 C 程序 test.c：
```
# include <stdio.h>
int main()
{
    printf("%s\n","hello world");
    return 0;
}
```
在 cmd 中输入命令 `gcc test.c`  
在当前目录下会生成 a.exe 的可执行文件，在 cmd 中输入 a.exe 就可以执行程序了。  
如果想调试程序，可以输入 gdb a.exe  
进入 gdb 的功能，使用 gdb 常用的命令就可以调试程序了。  


***


Windows 环境变量的设置：  
（1）将刚刚下载好的文件，解压到C盘根目录下，文件夹名称 MinGw；  
（2）计算机——>(右键)属性——>高级系统设置——>环境变量——>系统变量，选中Path点击编辑，将MicGw文件下的bin目录路径复制出来，我这里是 ``C:\MinGW\bin，`` ,将路径复制到 Path 中，点击确定；注意点目录前后的分号，一定要有并且必须是英文半角。  
（3）同上，新建一个系统变量 lib，对应 MicGw 下的lib 文件夹；新建一个系统变量 include，对应 MicGw 下的 include 文件夹；  
到此为止，我们就算是搭建好C语言开发的基本环境了；


***


**gcc 进行 c 语言编译分为四个步骤：**  
- 预处理，生成预编译文件（.i 文件）：
  ```
  gcc –E hello.c –o hello.i
  ```
- 编译，生成汇编代码（.s 文件）：
  ```
  gcc –S hello.i –o hello.s
  ```
- 汇编，生成目标文件（.o 文件）：
  ```
  gcc –c hello.s –o hello.o
  ```
- 链接，生成可执行文件：
  ```
  gcc hello.o –o hello
  ```
有时候，进行调试，可能会用到某个步骤哦


***


Win10下使用 vscode 编译 c 语言，安装好 MinGW 后，在里面找到 mingw32-gcc.bin, mingw32-gcc-g++.bin, 以及 mingw32-gdb.bin 第一个是 c 语言文件的编译器，第二个是 c++ 的，第三个是用来调试编译后文件的。然后设置好环境变量，编写好 .c 文件，在 vscode 中打开 .c 文件所在的文件夹（注意是文件夹），然后配置 launch.json 文件如下所示：  
```
{

    "version": "0.2.0",
    "configurations": [
        {
            "name": "(gdb) Launch",
            "type": "cppdbg",
            "request": "launch",
            "program": "${workspaceRoot}/${fileBasenameNoExtension}.exe",
            "args": [],
            "stopAtEntry": false,
            "cwd": "${workspaceRoot}",
            "environment": [],
            "externalConsole": true,
            "MIMode": "gdb",
            "miDebuggerPath": "E:\\MinGW\\bin\\gdb.exe",
            "preLaunchTask": "gcc",//tasks.json里面的名字
            "setupCommands": [
                {
                    "description": "Enable pretty-printing for gdb",
                    "text": "-enable-pretty-printing",
                    "ignoreFailures": true
                }
            ]
            
        }
    ]
}
```
tasks.json文件如下所示：
```
{

    "version": "2.0.0",
    "tasks": [
        {
            "label": "gcc",
            "type": "shell",
            "command": "gcc",
            "args": [
                "-g", "${file}","-o","${fileBasenameNoExtension}.exe"
            ],
            "group":{
                "kind": "build",
                "isDefault": true
            }
        }

    ]
}
```


***


**Win10下使用eclipse创建C/C++编程环境的方法（64位系统）：**  

- 安装eclipse IDE for C/C++：进入https://www.eclipse.org/downloads/packages/release/oxygen/r/eclipse-ide-cc-developers，根据自己电脑系统选择64位下载，下载后推荐解压至任意盘的根目录。
- 安装tdm-gcc：进入jmeubank.github.io，点击页面左侧的 download ，选择tdm64-gcc下载下来exe文件，双击打开，点击 Create ，接下来选择下面的64位，next，选择安装位置，这个随意选，还是推荐根目录下创建一个自己能记起来的文件夹进行安装，之后等待安装过程完成。
- 设置环境变量，这个就很简单了，打开刚才安装tdm-gcc的安装路径，双击mingwvars.bat，环境变量就设置好了！
- 之后就可以使用eclipse进行C/C++进行编程了！打开第一步下载解压的eclipse文件夹，打开eclipse，file --> new --> Other --> C/C++ --> C Project，Project type选executable --> Empty Project，右边 Toolchains 选 MinGW GCC ，输入Project name ，Finish。左边Project Explorer 在你刚输入的Project name上 右键 --> new --> File，File name 输入名称，名称后边一定加上“.c”的后缀名，例如：NewFile.c。之后双击这个.c文件就可以进行编码编写，要运行的时候一定要先点击上放锤子图标右边的下拉菜单，选择Release，然后点击左上角的开始按钮，就能运行输出了！


***


#### 返回 [C基础知识](../C基础知识.md)