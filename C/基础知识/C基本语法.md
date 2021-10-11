## C 程序结构
#### 返回 [C基础知识](../C基础知识.md) 

***


###### C 的令牌（Token）
C 程序由各种令牌组成，令牌可以是关键字、标识符、常量、字符串值，或者是一个符号。例如，下面的 C 语句包括五个令牌：
```
printf("Hello, World! \n");
```
这五个令牌分别是：
```
printf
(
"Hello, World! \n"
)
;
```

###### 分号 ;
在 C 程序中，分号是语句结束符。也就是说，每个语句必须以分号结束。它表明一个逻辑实体的结束。  
例如，下面是两个不同的语句：
```
printf("Hello, World! \n");
return 0;
```

###### 注释
**C 语言有两种注释方式：**
```
// 单行注释
```
以 `//` 开始的单行注释，这种注释可以单独占一行。
```
/* 单行注释 */
/* 
 多行注释
 多行注释
 多行注释
 */
```
`/* */` 这种格式的注释可以单行或多行。  
您不能在注释内嵌套注释，注释也不能出现在字符串或字符值中。

###### 标识符
C 标识符是用来标识变量、函数，或任何其他用户自定义项目的名称。一个标识符以字母 A-Z 或 a-z 或下划线 _ 开始，后跟零个或多个字母、下划线和数字（0-9）。  
C 标识符内不允许出现标点字符，比如 @、$ 和 %。C 是**区分大小写**的编程语言。因此，在 C 中，Manpower 和 manpower 是两个不同的标识符。下面列出几个有效的标识符：
```
mohd       zara    abc   move_name  a_123
myname50   _temp   j     a23b9      retVal
```

###### 关键字
下表列出了 C 中的保留字。这些保留字不能作为常量名、变量名或其他标识符名称。

|关键字|说明|
|:---:|:---|
|auto|声明自动变量|
|break|	跳出当前循环|
|case|	开关语句分支|
|char|	声明字符型变量或函数返回值类型|
|const|	定义常量，如果一个变量被 const 修饰，那么它的值就不能再被改变|
|continue| 结束当前循环，开始下一轮循环 |
|default| 开关语句中的"其它"分支 |
|do| 	循环语句的循环体 |
| double | 	声明双精度浮点型变量或函数返回值类型 |
| else | 	条件语句否定分支（与 if 连用） |
| enum | 		声明枚举类型 |
| extern | 		声明变量或函数是在其它文件或本文件的其他位置定义 |
| float | 声明浮点型变量或函数返回值类型 |
| for | 一种循环语句 |
| goto | 无条件跳转语句 |
| if | 条件语句 |
| int | 声明整型变量或函数 |
| long | 声明长整型变量或函数返回值类型 |
| register | 声明寄存器变量 |
| return | 子程序返回语句（可以带参数，也可不带参数） |
| short | 声明短整型变量或函数 |
| signed | 声明有符号类型变量或函数 |
| sizeof | 计算数据类型或变量长度（即所占字节数） |
| static | 	声明静态变量 |
| struct | 	声明结构体类型 |
| switch | 	用于开关语句 |
| typedef | 用以给数据类型取别名 |
| unsigned | 声明无符号类型变量或函数 |
| union | 	声明共用体类型 |
| void | 	声明函数无返回值或无参数，声明无类型指针 |
| volatile | 说明变量在程序执行中可被隐含地改变 |
| while | 循环语句的循环条件 |

###### C99 新增关键字
- _Bool
- _Complex
- _Imaginary
- inline
- restrict

###### C11 新增关键字
- _Alignas
- _Alignof
- _Atomic
- _Generic
- _Noreturn
- _Static_assert
- _Thread_local

###### C 中的空格
只包含空格的行，被称为空白行，可能带有注释，C 编译器会完全忽略它。  
在 C 中，空格用于描述空白符、制表符、换行符和注释。空格分隔语句的各个部分，让编译器能识别语句中的某个元素（比如 int）在哪里结束，下一个元素在哪里开始。因此，在下面的语句中：  
```
int age;
```
在这里，int 和 age 之间必须至少有一个空格字符（通常是一个空白符），这样编译器才能够区分它们。另一方面，在下面的语句中：
```
fruit = apples + oranges;   // 获取水果的总数
```
fruit 和 =，或者 = 和 apples 之间的空格字符不是必需的，但是为了增强可读性，您可以根据需要适当增加一些空格。




## 读者笔记


***


**C关键字：**

按年份起始：
- auto      break     case       char      const         continue  default     do 
- double  else       enum      extern   float           for             goto         if 
- int long register return short signed sizeof static 
- struct   switch    typedef  union    unsigned  void            volatile   while

1999年12月16日，ISO推出了C99标准，该标准新增了5个C语言关键字：
- inline    restrict    _Bool   _Complex    _Imaginary

2011年12月8日，ISO发布C语言的新标准C11，该标准新增了7个C语言关键字：
- _Alignas  _Alignof  _Atomic  _Static_assert  _Noreturn  _Thread_local  _Generic  


***


- C语言的程序构成方式
  1. c语言程序由函数构成，每个函数可以实现一个或多个功能。
  2. 一个正规程序可以有多个函数，但是有且只有一个主函数。
  3. 函数只有在被调用的时候才执行，主函数由系统调用执行。
  4. 函数的格式必须按照规范书写。
  5. C 语言程序文件的后缀为 .c
- 一个简单的C程序  
  在 Mac OS 系统上可以使用Xcode中创建 c 语言程序，打开 Xcode -- 点击 create a new xcode project -- 点击 os X-- 右边选择 commad line tool -- next -- product name 填项目名称，organization name 填公司名称，organization identifier 填公司网址的倒序。language选择 C。  
  简单打印一句话。
  ```
  #include <stdio.h>
  
  int main(int argc, const char * argv[]) {
    printf("Hello, World!\n");
    return 0;
  }
  ```


***


标识符

标识符：在编程语言中，标识符是用户编程时使用的名字，变量、常量、函数、语句块都有名字。是用来标识某个实体的一个符号，是对变量名、函数名、标号和其他各种用户定义的对象命名。  
C语言中标识符的命名规范：
1. 标识符由字母、数字、下划线组成，并且首字母不能是数字。
2. 不能把C的关键字作为用户的标识符，例如：if、for、while等。（注：标识符不能和C语言的关键字相同，也不能和用户自定义的函数或C语言库函数同名）
3. 标识符长度是由机器上的编译系统决定的，一般的限制为8字符，(注：8字符长度限制是C89标准，C99标准已经扩充长度，其实大部分工业标准都更长)。
4. 标识符对大小写敏感，即严格区分大小写。一般对变量名用小写，符号常量命名用大写。（注：C语言中字母是区分大小写的，因此score、Score、SCORE分别代表三个不同的标识符）
5. 标识符命名应做到"见名知意"，例如，长度（外语：length），求和、总计（外语：sum），圆周率（外语：pi）

***


#### 返回 [C基础知识](../C基础知识.md)