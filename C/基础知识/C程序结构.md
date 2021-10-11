## C 程序结构
#### 返回 [C基础知识](../C基础知识.md) 

***


###### Hello World 实例
C 程序主要包括以下部分：
- 预处理器指令
- 函数
- 变量
- 语句 & 表达式
- 注释

看一段简单的代码，可以输出单词 "Hello World"：
```
#include <stdio.h>
 
int main()
{
   /* 我的第一个 C 程序 */
   printf("Hello, World! \n");
   
   return 0;
}
```
讲解上面这段程序：
1. 程序的第一行 ` #include <stdio.h> ` 是预处理器指令，告诉 C 编译器在实际编译之前要包含 stdio.h 文件。
2. 下一行 `int main()` 是主函数，程序从这里开始执行。
3. 下一行 `/*...*/` 将会被编译器忽略，这里放置程序的注释内容。它们被称为程序的注释。
4. 下一行 printf(...) 是 C 中另一个可用的函数，会在屏幕上显示消息 "Hello, World!"。
5. 下一行 return 0; 终止 main() 函数，并返回值 0。


###### 编译 & 执行 C 程序
接下来让我们看看如何把源代码保存在一个文件中，以及如何编译并运行它。下面是简单的步骤：  
1. 打开一个文本编辑器，添加上述代码。
2. 保存文件为 hello.c。
3. 打开命令提示符，进入到保存文件所在的目录。
4. 键入 gcc hello.c，输入回车，编译代码。
5. 如果代码中没有错误，命令提示符会跳到下一行，并生成 a.out 可执行文件。
6. 现在，键入 a.out 来执行程序。
7. 您可以看到屏幕上显示 "Hello World"。
```
$ gcc hello.c
$ ./a.out
Hello, World!
```
请确保您的路径中已包含 gcc 编译器，并确保在包含源文件 hello.c 的目录中运行它。  
如果是多个 c 代码的源码文件，编译方法如下：  
```
$ gcc test1.c test2.c -o main.out
$ ./main.out
```
test1.c 与 test2.c 是两个源代码文件。


  
## 读者笔记


***



`gcc` 命令如果不指定目标文件名时默认生成的可执行文件名为 `a.out(linux)` 或 `a.exe(windows)`。    
可用 `gcc [源文件名] -o [目标文件名]` 来指定目标文件路径及文件名。  
例如，windows 系统上，`gcc hello.c -o target/hello` 会在 target 目录下生成 hello.exe 文件(Linux 系统生成 hello 可执行文件)，target 目录必须已存在，`[源文件名] 和 -o [目标文件名]` 的顺序可互换， `gcc -o target/hello hello.c` 依然有效。
```
#include <stdio.h>
#include <stdlib.h> 
int main()
{
   /* 我的第一个 C 程序 */
   printf("Hello, World! \n");
   system("pause");      //暂停函数，请按任意键继续...
   return 0;
}
```
使用 `gcc hello.c -o hello` 命令时，可不添加目标路径，则 gcc 即在当前工作目录自动生成 hello.exe 文件。


***


"引用(引用自楼上@军): 因编译器的原因，生成的 *.exe 文件打开时会一闪而过，从而观察不到其运行的结果，这是因为 main() 函数结束时，DOS 窗口会自动关闭"

如果不想使用 system("pause")函数，可以直接使用cmd运行编译的可执行文件：
1. 在 *.exe 文件目录下建一个 *.bat 文件(建一个文本文档，强制改后缀为 bat)。
2. 用记事本(或其他编辑器)打开，写命令: cmd.exe cd [编译器生成的 *.exe 所在目录]。
3. 运行这个 *.bat 就会自动定位到当前 exe 的目录了，接下来只要敲你自己生成的程序的名称，就可以看到结果而不闪退。
4. 补充: 你也可以直接开 cmd 直接 cd 到当前目录，只要用 cmd 运行 *.exe 都可以看见结果，除非你自己编译的程序本身就无法运行。


***


#### 返回 [C基础知识](../C基础知识.md)