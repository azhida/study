## C 循环
#### 返回 [C基础知识](../C基础知识.md) 

***


有的时候，我们可能需要多次执行同一块代码。一般情况下，语句是按顺序执行的：函数中的第一个语句先执行，接着是第二个语句，依此类推。  
编程语言提供了更为复杂执行路径的多种控制结构。  
循环语句允许我们多次执行一个语句或语句组，下面是大多数编程语言中循环语句的流程图：  
![alt]( https://www.runoob.com/wp-content/uploads/2015/12/loop.png )


###### 循环类型
C 语言提供了以下几种循环类型。点击链接查看每个类型的细节。  

| 循环类型 | 描述 |
| --- | --- |
| [while 循环]( https://www.runoob.com/cprogramming/c-while-loop.html ) | 当给定条件为真时，重复语句或语句组。它会在执行循环主体之前测试条件。 |
| [for 循环]( https://www.runoob.com/cprogramming/c-for-loop.html ) | 多次执行一个语句序列，简化管理循环变量的代码。 |
| [do...while 循环]( https://www.runoob.com/cprogramming/c-do-while-loop.html ) | 除了它是在循环主体结尾测试条件外，其他与 while 语句类似。 |
| [嵌套循环]( https://www.runoob.com/cprogramming/c-nested-loops.html ) | 您可以在 while、for 或 do..while 循环内使用一个或多个循环。 |


###### 循环控制语句
循环控制语句改变你代码的执行顺序。通过它你可以实现代码的跳转。  
C 提供了下列的循环控制语句。点击链接查看每个语句的细节。  

| 控制语句 |	描述 |
| --- |	--- |
| [break 语句]( https://www.runoob.com/cprogramming/c-break-statement.html ) |	终止循环或 switch 语句，程序流将继续执行紧接着循环或 switch 的下一条语句。 |
| [continue 语句]( https://www.runoob.com/cprogramming/c-continue-statement.html ) |	告诉一个循环体立刻停止本次循环迭代，重新开始下次循环迭代。 |
| [goto 语句]( https://www.runoob.com/cprogramming/c-goto-statement.html ) |	将控制转移到被标记的语句。但是不建议在程序中使用 goto 语句。 |


###### 无限循环
如果条件永远不为假，则循环将变成无限循环。for 循环在传统意义上可用于实现无限循环。由于构成循环的三个表达式中任何一个都不是必需的，您可以将某些条件表达式留空来构成一个无限循环。  
```
#include <stdio.h>
 
int main ()
{
   for( ; ; )
   {
      printf("该循环会永远执行下去！\n");
   }
   return 0;
}
```
当条件表达式不存在时，它被假设为真。您也可以设置一个初始值和增量表达式，但是一般情况下，C 程序员偏向于使用 for(;;) 结构来表示一个无限循环。  
**注意**：您可以按 `Ctrl + C` 键终止一个无限循环。


## 读者笔记


***


使用 while, for 分别输 1~100 以内的所有的奇数和偶数的和：  
**使用 while：**  
```
#include  <stdio.h>

int main(){
    int  sum=0;
    int  num=1;
    int  sum2=0;
    int  num2=2;
    while(num<100){
        sum=sum+num;
        num=num+2;
    }
    printf("奇数和为:%d\n",sum);

    while(num2<=100){
        sum2=sum2+num2;
        num2=num2+2;
    }
    printf("偶数和为：%d\n",sum2);
}
```

**使用 for:**  
```
#include  <stdio.h>

int main(){

    int  sum=0;
    int sum2=0;
    int num,num2;
    for(num=1;num<100;num=num+2){
        sum=sum+num;
    }

    printf("奇数和%d\n",sum);
    for(num2=2;num2<=100;num2=num2+2){
        sum2=sum2+num2;
    }
    printf("偶数和%d\n",sum2);
}
```


***


用 do while 求算术平方根：  
```
#include <stdio.h>

double DoSqrt(double z){
    double a=1;
    double b=0;
    double c=0;
    do{
        if(b*b<z){
            b+=a;
        }
        else{
            c=b;
            b-=a;
            a/=10;
        }
    }while(a>0.000001);

    return (b+c)/2;
}

int main(){
    double x, y;
    printf("请输入一个数字:");
    scanf("%lf", &x);
    if(x<0){
        printf("输入错误。");
    } else {
        y=DoSqrt(x);
        printf("%g 的平方根为: %g.\n", x, y);
    }

    int z=1;
    do{
        main();
        z++;
    }while(z>10);

    return 0;
}
```


***


我们看一个简单的列子，求100以内的素数。  
```
#include<stdio.h>
#include<math.h>
int main(){
    int i,j;
    printf("100以内的素数有：\n");
    for(i=2;i<100;i++){
        for(j=2;j<sqrt(i);j++){
            if(i%j==0){
            break;
            }
        }
            if(j>sqrt(i)){
            printf("%d,\t",i);
            }
    }
}
```
第一个循环里面。i遍历从2到100以内的所有数字，第二个循环是在2到sqrt（n）之间看看是不是可以整除i。可以整除则不是素数，相反不可以整除，则是素数。  
```
int fun(int n){
    for(i=2;i<=sqrt(p);i++){  
            if(x%i==0){
            return 0;  //不为素数
          }
            else{
            return 1; //为素数 
          }
        }
}
```
这个是求素数的关键代码。希望初学者要牢记于心，烂熟于心


***


求 100 以内偶数和奇数的和：
```
#include<stdio.h>

int main()
{
    int num=0,odd=0,even=0;
    for(;num<=100;num++)
    {
        if(num%2==0)
            even+=num;
        else
            odd+=num;
    }

    printf("Odd number sum is %d\n",odd);
    printf("Even number sum is %d\n",even);
    return 0;
}
```


***


用 continue 语句求输出 100~200 之间的不能被3整除的数。  
```
#include<stdio.h>
int main()
{
    int n;
    for(n=100;n<=200;n++)
    {
        if(n%3==0)
            continue;
        printf("%d",n);
    }
    printf("\n");
    return 0;
}
```
一定要注意 break 语句与 continue 语句的区别，前者是结束整个循环过程，后者这是结束本次循环。应根据题目要求灵活使用。


***


#### 返回 [C基础知识](../C基础知识.md)