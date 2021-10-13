## C 判断
#### 返回 [C基础知识](../C基础知识.md) 

***


判断结构要求程序员指定一个或多个要评估或测试的条件，以及条件为真时要执行的语句（必需的）和条件为假时要执行的语句（可选的）。  
C 语言把任何非零和非空的值假定为 true，把零或 null 假定为 false。


###### 判断语句
C 语言提供了以下类型的判断语句。点击链接查看每个语句的细节。  

| 语句|	描述 |
| ---- |---- |
| [if 语句]( https://www.runoob.com/cprogramming/c-if.html ) | 一个 if 语句 由一个布尔表达式后跟一个或多个语句组成。 |
| [if...else 语句]( https://www.runoob.com/cprogramming/c-if-else.html ) | 一个 if 语句 后可跟一个可选的 else 语句，else 语句在布尔表达式为假时执行。 |
| [嵌套 if 语句]( https://www.runoob.com/cprogramming/c-nested-if.html ) | 您可以在一个 if 或 else if 语句内使用另一个 if 或 else if 语句。 |
| [switch 语句]( https://www.runoob.com/cprogramming/c-switch.html ) | 一个 switch 语句允许测试一个变量等于多个值时的情况。 |
| [嵌套 switch 语句]( https://www.runoob.com/cprogramming/c-nested-switch.html ) | 您可以在一个 switch 语句内使用另一个 switch 语句。 |


###### ? : 运算符(三元运算符)
我们已经在前面的章节中讲解了 条件运算符 ? :，可以用来替代 if...else 语句。它的一般形式如下：
```
Exp1 ? Exp2 : Exp3;
```
其中，Exp1、Exp2 和 Exp3 是表达式。请注意，冒号的使用和位置。  
? 表达式的值是由 Exp1 决定的。如果 Exp1 为真，则计算 Exp2 的值，结果即为整个表达式的值。如果 Exp1 为假，则计算 Exp3 的值，结果即为整个表达式的值。  

以下实例通过输入一个数字来判断它是否为奇数或偶数
```
#include<stdio.h>
 
int main()
{
    int num;
 
    printf("输入一个数字 : ");
    scanf("%d",&num);
 
    (num%2==0)?printf("偶数"):printf("奇数");
}
```




## 读者笔记


***


**举一个三目（元）运算的例子：**  
```
#include <stdio.h>

int A=10;
int B=20;
char buy;
int sum,number;

int main(){
    printf("以下是本店的商品及价格：\n A 商品每个十元；\n B 商品每个二十元；\n\n");
    printf("请输入你所需的产品(A 或 B):");
    scanf("%c",&buy);
    printf("请输入所需的数量：");
    scanf("%d",&number);
    sum=buy=='A'?A*number:B*number;
    printf("\n你所需要的%d个%c商品总共%d元。\n",number,buy,sum);
    return 0;
}
```


***


**switch语句一般形式：**

```
switch(表达式)
{
    case 常量表达式1:语句1;
    case 常量表达式2:语句2;
    ...
    default:语句n+1;
}
```
意思是先计算表达式的值，再逐个和 case 后的常量表达式比较，若不等则继续往下比较，若一直不等，则执行 default 后的语句；若等于某一个常量表达式，则从这个表达式后的语句开始执行，并执行后面所有 case 后的语句。  
与 if 语句的不同：if 语句中若判断为真则只执行这个判断后的语句，执行完就跳出 if 语句，不会执行其他 if 语句；而 switch 语句不会在执行判断为真后的语句之后跳出循环，而是继续执行后面所有 case 语句。在每一 case 语句之后增加 break 语句，使每一次执行之后均可跳出 switch 语句，从而避免输出不应有的结果。  
```
#include <stdio.h>

int main()
{
    int a;
    printf("input integer number: ");
    scanf("%d",&a);
    switch(a)
    {
        case 1:printf("Monday\n");
        break;
        case 2:printf("Tuesday\n");
        break;
        case 3:printf("Wednesday\n");
        break;
        case 4:printf("Thursday\n");
        break;
        case 5:printf("Friday\n");
        break;
        case 6:printf("Saturday\n");
        break;
        case 7:printf("Sunday\n");
        break;
        default:printf("error\n");
    }
}
```


***


#### 返回 [C基础知识](../C基础知识.md)