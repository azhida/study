## C 函数
#### 返回 [C基础知识](../C基础知识.md) 

***


函数是一组一起执行一个任务的语句。每个 C 程序都至少有一个函数，即主函数 main() ，所有简单的程序都可以定义其他额外的函数。  
您可以把代码划分到不同的函数中。如何划分代码到不同的函数中是由您来决定的，但在逻辑上，划分通常是根据每个函数执行一个特定的任务来进行的。  
函数声明告诉编译器函数的名称、返回类型和参数。函数定义提供了函数的实际主体。  
C 标准库提供了大量的程序可以调用的内置函数。例如，函数 strcat() 用来连接两个字符串，函数 memcpy() 用来复制内存到另一个位置。  
函数还有很多叫法，比如方法、子例程或程序，等等。


###### 定义函数
C 语言中的函数定义的一般形式如下：
```
return_type function_name( parameter list )
{
   body of the function
}
```
在 C 语言中，函数由一个函数头和一个函数主体组成。下面列出一个函数的所有组成部分：
- **返回类型**：一个函数可以返回一个值。**return_type** 是函数返回的值的数据类型。有些函数执行所需的操作而不返回值，在这种情况下，return_type 是关键字 **void**。
- **函数名称**：这是函数的实际名称。函数名和参数列表一起构成了函数签名。
- **参数**：参数就像是占位符。当函数被调用时，您向参数传递一个值，这个值被称为实际参数。参数列表包括函数参数的类型、顺序、数量。参数是可选的，也就是说，函数可能不包含参数。
- **函数主体**：函数主体包含一组定义函数执行任务的语句。


###### 实例
以下是 max() 函数的源代码。该函数有两个参数 num1 和 num2，会返回这两个数中较大的那个数：
```
/* 函数返回两个数中较大的那个数 */
int max(int num1, int num2) 
{
   /* 局部变量声明 */
   int result;
 
   if (num1 > num2)
      result = num1;
   else
      result = num2;
 
   return result; 
}
```


###### 函数声明
函数声明会告诉编译器函数名称及如何调用函数。函数的实际主体可以单独定义。  
函数声明包括以下几个部分：
```
return_type function_name( parameter list );
```
针对上面定义的函数 max()，以下是函数声明：
```
int max(int num1, int num2);
```
在函数声明中，参数的名称并不重要，只有参数的类型是必需的，因此下面也是有效的声明：
```
int max(int, int);
```
当您在一个源文件中定义函数且在另一个文件中调用函数时，函数声明是必需的。在这种情况下，您应该在调用函数的文件顶部声明函数。


###### 调用函数
创建 C 函数时，会定义函数做什么，然后通过调用函数来完成已定义的任务。  
当程序调用函数时，程序控制权会转移给被调用的函数。被调用的函数执行已定义的任务，当函数的返回语句被执行时，或到达函数的结束括号时，会把程序控制权交还给主程序。  
调用函数时，传递所需参数，如果函数返回一个值，则可以存储返回值。例如：  
```
#include <stdio.h>
 
/* 函数声明 */
int max(int num1, int num2);
 
int main ()
{
   /* 局部变量定义 */
   int a = 100;
   int b = 200;
   int ret;
 
   /* 调用函数来获取最大值 */
   ret = max(a, b);
 
   printf( "Max value is : %d\n", ret );
 
   return 0;
}
 
/* 函数返回两个数中较大的那个数 */
int max(int num1, int num2) 
{
   /* 局部变量声明 */
   int result;
 
   if (num1 > num2)
      result = num1;
   else
      result = num2;
 
   return result; 
}
```
把 max() 函数和 main() 函数放一块，编译源代码。当运行最后的可执行文件时，会产生下列结果：
```
Max value is : 200
```


###### 函数参数
如果函数要使用参数，则必须声明接受参数值的变量。这些变量称为函数的**形式参数**。  
形式参数就像函数内的其他局部变量，在进入函数时被创建，退出函数时被销毁。  
当调用函数时，有两种向函数传递参数的方式：

| 调用类型 | 描述 |
| --- | --- |
| [传值调用]( https://www.runoob.com/cprogramming/c-function-call-by-value.html ) | 	该方法把参数的实际值复制给函数的形式参数。在这种情况下，修改函数内的形式参数不会影响实际参数。 |
| [引用调用]( https://www.runoob.com/cprogramming/c-function-call-by-pointer.html ) | 通过指针传递方式，形参为指向实参地址的指针，当对形参的指向操作时，就相当于对实参本身进行的操作。 |

默认情况下，C 使用传值调用来传递参数。一般来说，这意味着函数内的代码不能改变用于调用函数的实际参数。




## 读者笔记


***


根据函数能否被其他源文件调用，将函数区分为内部函数和外部函数。  
**内部函数**  
如果一个函数只能被本文件中其他函数所调用，它称为内部函数。在定义内部函数时，在函数名和函数类型的前面加 static，即  
```
static 类型名 函数名 （形参表）
```
例如，函数的首行：
```
static int max(int a,int b)
```
内部函数又称静态函数。使用内部函数，可以使函数的作用域只局限于所在文件。即使在不同的文件中有同名的内部函数，也互不干扰。提高了程序的可靠性。  
**外部函数**  
如果在定义函数时，在函数的首部的最左端加关键字 extern，则此函数是外部函数，可供其它文件调用。  
如函数首部可以为  
```
extern int max (int a,int b)
```
C 语言规定，如果在定义函数时省略 extern，则默认为外部函数。  
在需要调用此函数的其他文件中，需要对此函数作声明（不要忘记，即使在本文件中调用一个函数，也要用函数原型来声明）。在对此函数作声明时，要加关键字 extern，表示该函数是在其他文件中定义的外部函数。  

**实例**

以下实例通过多个文件的函数实现输入一串字符串，然后删除指定的字符：  
file1.c(文件1)  
```
#include <stdio.h>

static void delete_string(char str[],char ch);
int main()
{
    extern void enter(char str[]); // 对函数的声明
    extern void print(char str[]); // 对函数的声明
    char c,str[100];
    enter(str);
    scanf("%c",&c);
    delete_string(str,c);
    print(str);
    return 0;
}

static void delete_string(char str[],char ch)//内部函数
{
    int i,j;
    for(i=j=0;str[i]!='\0';i++)
    if(str[i]!=ch)
    str[j++]=str[i];
    str[j]='\0';
}
```
file2.c(文件2)
```
#include <stdio.h>

void enter(char str[100]) // 定义外部函数 enter
{
    fgets(str, 100, stdin); // 向字符数组输入字符串
}
```
file3.c(文件3)
```
#include <stdio.h>

void print(char str[]) // 定义外部函数 print
{
    printf("%s\n",str);
}
```
输入字符串"abcdef"，给字符数组 str，在输入要删去的字符'd'。 运行结果:
```
$ gcc file1.c file2.c file3.c 
$ ./a.out
abcdef                   # 输入的字符串
d                        # 要删除的字符
abcef                    # 删除后的字符串
```


***


**内联函数**  

内联函数是指用inline关键字修饰的函数。在类内定义的函数被默认成内联函数。内联函数从源代码层看，有函数的结构，而在编译后，却不具备函数的性质。  
内联扩展是用来**消除函数调用时的时间开销**。它通常用于频繁执行的函数，对于小内存空间的函数非常受益。  
使用内联函数的时候要注意：
- 递归函数不能定义为内联函数
- 内联函数一般适合于不存在while和switch等复杂的结构且只有1~5条语句的小函数上，否则编译系统将该函数视为普通函数。
- 内联函数只能先定义后使用，否则编译系统也会把它认为是普通函数。
- 对内联函数不能进行异常的接口声明。

示例：一个简单的交换函数
```
inline void swap(int *a, int *b)
{
    int t = *a;
    *a = *b;
    *b = t;
}
```


***


**关于 main 函数的参数**

在有些很专业的书会看到如下代码  
```
int main( int argc, char *argv[] )
```
上面的代码中 main 函数带了参数。  
但是有时又会看见main函数没有参数，如下：
```
int main()
```
**那么 main 函数到底有没有参数，有没有参数会不会有什么影响？**  
main 函数其实与我们写的函数没有什么区别，它也会有自己的参数。  
argc 和 argv 是 main 函数的形式参数。  
这两个形式参数的类型是系统规定的。如果 main 函数要带参数，就是这两个类型的参数；否则main函数就没有参数。  
变量名称argc和argv是常规的名称，当然也可以换成其他名称。在传入参数后main函数收到参数后就会做自己的事。  
那么，实际参数是如何传递给main函数的argc和argv的呢？我们知道，C程序在编译和链接后，都生成一个exe文件，执行该exe文件时，可以直接执行；也可以在命令行下带参数执行，命令行执行的形式为：可执行文件名称 参数1 参数2 ... ... 参数n。可执行文件名称和参数、参数之间均使用空格隔开。  
如果按照这种方法执行，命令行字符串将作为实际参数传递给main函数。具体为：
- (1) 可执行文件名称和所有参数的个数之和传递给 argc；
- (2) 可执行文件名称（包括路径名称）作为一个字符串，首地址被赋给 argv[0]，参数1也作为一个字符串，首地址被赋给 argv[1]，... ...依次类推。


***


上面的是求两个数的最大值，我的是求三个数的最大值：
```
#include <stdio.h> 

int DoMax(int a, int b, int c){
    int max=a;
    if(b>max){
        max=b;
        if(c>max){
            max=c;
        }
    } else {
        if(c>max){
            max=c;
        }
    }
    return max;
}

int main(){
    int x, y, z, maxOne;
    printf("请输入三个数字（空格分隔）:");
    scanf("%d%d%d",&x,&y,&z);
    maxOne=DoMax(x, y, z);
    printf("\n");
    printf("最大数为:%d; \n",maxOne);
    return 0;
}
```


***


**函数参数传递常用的三种方式**  

示例程序均以交换两个整数为例。  

**1. 值传递**  

```
#include <stdio.h>

void swap(int x, int y);
void swap(int x, int y)
{
    int temp;
    temp = x;
    x = y;
    y = temp;
}

int main( int argc, char *argv[] )
{
    int a = 5;
    int b = 10;
    swap(a, b); //调用交换函数
    printf("交换结果为 a = %d, b = %d\n",a,b);
    return 0;
}
```
由于值传递是单向传递，传递过程中只是改变了形参的数值，并未改变实参的数值，因此并不会改变a和b原有的值。

**2. 指针传递**
```
#include <stdio.h>

void swap(int *x, int *y);
void swap(int *x, int *y)
{
    int temp;
    temp = *x;
    *x = *y;
    *y = temp;
}

int main( int argc, char *argv[] )
{
    int a = 5;
    int b = 10;
    swap(&a, &b); //调用交换函数
    printf("交换结果为 a = %d, b = %d\n",a,b);
    return 0;
}
```
指针传递过程中，将a和b的地址分别传递给了x和y，在函数体内部改变了a、b所在地址的值，即交换了a、b的数值。

**3. 引用传递**  
```
#include <stdio.h>

void swap(int &x, int &y);
void swap(int &x, int &y)
{
    int temp;
    temp = x;
    x = y;
    y = temp;
}

int main( int argc, char *argv[] )
{
    int a = 5;
    int b = 10;
    swap(a, b); //调用交换函数
    printf("交换结果为 a = %d, b = %d\n",a,b);
    return 0;
}
```
引用传递中，在调用swap(a, b);时函数会用a、b分别代替x、y，即x、y分别引用了a、b变量，这样函数体中实际参与运算的其实就是实参a、b本身，因此也能达到交换数值的目的。  

**注**：严格来说，C语言中是没有引用传递，这是C++中语言特性，因此在.c文件中使用引用传递会导致程序编译出错。


***


函数声明和函数原型的参数名可以不一样，编译器他想知道的是函数参数的类型，与函数参数的名字没有关系

```
#include<stdio.h>

int sum(int c,int d); // 函数声明

int main(int argc ,char*argv[])
{
   int a=2,b=3;
   printf("输出结果为: %d \n",sum(a,b));
   return 0;
}

int sum(int a,int b)
{
    return a+b ;
}
```
甚至函数声明可以写成:
```
int sum(int ,int );
```
编译器只要检查到函数返回类型，名称和参数类型正确即可。


***


函数实现了代码的重用，大大简化缩短了程序员的工作量，更使得程序的可读性大大提高，函数的递归调用更是一种简化程序代码的方法；递归调用其实机是函数自己调用自己。  
下面的实例是一个求1+2+3.....+n的递归实例：
```
#include <stdio.h>  //导如输入输出头文件

int sum(int n);//声明函数 
int main(){
    //主函数 
    int a=sum(4);
    printf("%d",a);
  return 0;
}
int sum(int n){
    //求和函数实现 
    //如果n为1，无需求和，直接返回1 
    if(n==1){
        return 1;
    }
    //如果n大于1，就返回n加上1+2+3.....+n-1的和 
    return n+sum(n-1);
}
```
可以发现，递归的代码很少，但是，递归也有缺点，递归占用的内存要比递推大，而且时间也要比递推长。


***


占位符就是先占住一个固定的位置，等着你再往里面添加内容的符号，广泛用于计算机中各类文档的编辑。  
格式占位符(%)是在C/C++语言中格式输入函数，如 scanf、printf 等函数中使用。其意义就是起到格式占位的意思，表示在该位置有输入或者输出。  
- %d, %i 代表整数
- %f 浮点
- %s 字符串
- %c char
- %p 指针
- %fL 长log
- %e 科学计数
- %g 小数或科学计数。
- %a,%A 读入一个浮点值(仅C99有效)。
- %c 读入一个字符。
- %d 读入十进制整数。
- %i 读入十进制，八进制，十六进制整数。
- %o 读入八进制整数。
- %x,%X 读入十六进制整数。
- %s 读入一个字符串，遇空格、制表符或换行符结束。
- %f,%F,%e,%E,%g,%G 用来输入实数，可以用小数形式或指数形式输入。
- %p 读入一个指针。
- %u 读入一个无符号十进制整数。
- %n 至此已读入值的等价字符数。
- %[] 扫描字符集合。
- %% 读 % 符号

实例：
```
scanf("%d,%d,%d",&a,&b,&c); // 从键盘输入三个整数，用逗号分隔 　
scanf("%c", &s);   // 从键盘输入一个字符 　
scanf("%f", &f);   // 从键盘输入一个浮点型数据 　
printf("%d\n",a);  // 输出一个整数 　
printf("%f\n",b);  // 输出一个浮点数 　
printf("%s\n",c);  // 输出一个字符, 其中\n表示换行
```


***


**函数的调用**  

由于程序是从上向下执行，所以函数要先声明，后调用。这种先后是文档中所处位置的先后，不是时间的先后。以下写法为正确的：
```
#include<stdio.h>

void f(void)  /*定义函数*/
{
    printf("我是一个函数，我将在主函数中输出\n");
}

int main(void)
{
    f();  /*调用函数*/
}
```
在上面这个实例中，在主函数中调用了函数 f(), 而函数的声明是在调用以前。


以下写法是错误
```
#include<stdio.h>

int main(void)
{
    f();/*调用函数*/
}

void f(void)  /*定义函数*/
{
    printf("我是一个函数，我将在主函数中输出\n");
}
```
在上面这个实例中，在主函数中调用了函数 f(), 而函数的声明却在调用之后。由于函数执行时是从上往下执行的所以，这写法是错误的。  
如果函数非要写在主函数之后可以在主函数之前加入一个函数的前置声明。  
前置声明如下：
```
#include<stdio.h>

void f(void); /*前置声明*/
int main(void)  
{
    f();  /*调用函数*/
}

void f(void)  /*定义函数*/
{
    printf("我是一个函数，我一定要先声明后调用\n");
}
```


***


可以用预处理命令 define 来定义简单函数：
```
#define  MAX_3(a, b, c) ( ((a > b ? a : b) > c) ? (a > b ? a : b) : c )
#define  MIN_3(a, b, c) ( ((a < b ? a : b) < c) ? (a < b ? a : b) : c )
#define  MAX_2(x, y)  ( x> y ? x : y )
#define  MIN_2(x, y)  ( x< y ? x : y )
#define  ARR_SIZE(a)  ( sizeof( (a) ) / sizeof( (a[0]) ) )
#define  MULTIPLE(m, n) ( (m%n == 0)?0:1 )
#define  AVE_3(a, b, c) (a+b+c)/3
#define  SUM_3(a, b, c) a+b+c
#define  SWAP(a, b){int t= a;a=b;b=t;}
```


***


#### 返回 [C基础知识](../C基础知识.md)