## C 函数指针与回调函数
#### 返回 [C基础知识](../C基础知识.md) 

###### 函数指针

函数指针是指向函数的指针变量。  
通常我们说的指针变量是指向一个整型、字符型或数组等变量，而函数指针是指向函数。  
函数指针可以像一般函数一样，用于调用函数、传递参数。  
函数指针变量的声明：
```
typedef int (*fun_ptr)(int,int); // 声明一个指向同样参数、返回值的函数指针类型
```
以下实例声明了函数指针变量 p，指向函数 max：
```
#include <stdio.h>

int max(int x, int y)
{
    return x > y ? x : y;
}

int main(void)
{
    /* p 是函数指针 */
    int (* p)(int, int) = & max; // &可以省略
    int a, b, c, d;
 
    printf("请输入三个数字:");
    scanf("%d %d %d", & a, & b, & c);
 
    /* 与直接调用函数等价，d = max(max(a, b), c) */
    d = p(p(a, b), c); 
 
    printf("最大的数字是: %d\n", d);
 
    return 0;
}
```
编译执行，输出结果如下：
```
请输入三个数字:1 2 3
最大的数字是: 3
```

###### 回调函数
**函数指针作为某个函数的参数**  
函数指针变量可以作为某个函数的参数来使用的，回调函数就是一个通过函数指针调用的函数。  
简单讲：回调函数是由别人的函数执行时调用你实现的函数。  

> 
> 以下是来自知乎作者常溪玲的解说：
> 你到一个商店买东西，刚好你要的东西没有货，于是你在店员那里留下了你的电话，过了几天店里有货了，店员就打了你的电话，然后你接到电话后就到店里去取了货。在这个例子里，你的电话号码就叫回调函数，你把电话留给店员就叫登记回调函数，店里后来有货了叫做触发了回调关联的事件，店员给你打电话叫做调用回调函数，你到店里去取货叫做响应回调事件。
> 

**实例**

实例中 populate_array 函数定义了三个参数，其中第三个参数是函数的指针，通过该函数来设置数组的值。  
实例中我们定义了回调函数 getNextRandomValue，它返回一个随机值，它作为一个函数指针传递给 populate_array 函数。  
populate_array 将调用 10 次回调函数，并将回调函数的返回值赋值给数组。
```
#include <stdlib.h>  
#include <stdio.h>

// 回调函数
void populate_array(int *array, size_t arraySize, int (*getNextValue)(void))
{
    for (size_t i=0; i<arraySize; i++)
        array[i] = getNextValue();
}

// 获取随机值
int getNextRandomValue(void)
{
    return rand();
}

int main(void)
{
    int myarray[10];
    /* getNextRandomValue 不能加括号，否则无法编译，因为加上括号之后相当于传入此参数时传入了 int , 而不是函数指针*/
    populate_array(myarray, 10, getNextRandomValue);
    for(int i = 0; i < 10; i++) {
        printf("%d ", myarray[i]);
    }
    printf("\n");
    return 0;
}
```
编译执行，输出结果如下：
```
16807 282475249 1622650073 984943658 1144108930 470211272 101027544 1457850878 1458777923 2007237709
```





## 读者笔记


***


有关于 `size_t` :  
size_t 是一种数据类型，近似于无符号整型，但容量范围一般大于 int 和 unsigned。这里使用 size_t 是为了保证 arraysize 变量能够有足够大的容量来储存可能大的数组。


***


size_t 类型在C语言标准库函数原型使用的很多，数值范围一般是要大于int和unsigned.  
但凡不涉及负值范围的表示size取值的，都可以用size_t；比如array[size_t]。  
size_t 在stddef.h头文件中定义。  
在其他常见的宏定义以及函数中常用到有：
- sizeof运算符返回的结果是size_t类型；
- void *malloc(size_t size)...


***


更标准写法 GCC 直接能过，指针变量用指针变量的方式处理。
```
#include <stdlib.h>
#include <stdio.h>

// 回调函数
void populate_array(int *array, int arraySize, int (*getNextValue)(void))
{
    int i;
    for(i=0; i<arraySize; i++){
        *(array+i) = getNextValue();
    }
}

// 获取随机值
int getNextRandomValue(void)
{
    return rand();
}

int main(void)
{
    int myarray[10];
    int i;
    populate_array(myarray, 10, getNextRandomValue);
    for(i=0; i<10; i++) {
        printf("%d ", myarray[i]);
    }
    printf("\n");
    return 0;
}
```


***


补充下带参的回调函数：
```
#include <stdio.h>

int sum(int a,int b){
    return a+b;
}

//sum2回调sum函数
int sum2(int num,int (*sum)(int,int),int a,int b){
    return  num * sum(a,b);
}

int main()
{
    printf("SUM=%d\n",sum(1,2));
    printf("SUM2= %d\n",sum2(2,sum,1,2));
    return 0;
}
```


***

**关于回调函数的一点思考**  

在 A 函数中将参数与 C 函数传递给 B 函数，B函数调用 C 函数；B 函数调用的动作称为回调，C 函数称为回调函数。
```
#include <stdio.h>

// 回调函数a
void callback_a(int var_a){    
    printf("Call callback_a, var: %d\n\n", var_a);
}

// 回调函数b
void callback_b(int var_b){    
    printf("Call callback_b, var: %d\n\n", var_b);
}

// 回调动作
void callback_act(int x, void (*callback) (int var)){    
    printf("Call callback_act, var_x: %d\n\n", x);    
    callback(x);
}

void main(){    
    int a = 1, b = 2;    
    callback_act(a, callback_a);    
    callback_act(b, callback_b);    
    printf("Main program has done.");
}
```
执行结果：
```
Call callback_act, var_x: 1
Call callback_a, var: 1
Call callback_act, var_x: 2
Call callback_b, var: 2
Main program has done.
```
仔细想想回调函数的作用完全可以通过普通函数来达到，其实回调函数最大的意义在于解耦，降低了代码之间的耦合度。

> 详见 [C语言回调函数详解]( https://www.runoob.com/w3cnote/c-callback-function.html )


***


关于 size_t，我在：vcruntime.h 看到如下定义：  
```
// Definitions of common types
#ifdef _WIN64
    typedef unsigned __int64 size_t;
    typedef __int64          ptrdiff_t;
    typedef __int64          intptr_t;
#else
    typedef unsigned int     size_t;
    typedef int              ptrdiff_t;
    typedef int              intptr_t;
#endif
```
也就是说会判断你的机器是否 64 位，如果是：
```
typedef unsigned __int64 size_t;
```
如果不是：
```
typedef unsigned int     size_t;
```
所以总结得说，就是根据系统位数来或是对应的 64 位 int 还是 32 位的 int。


***


##
#### 返回 [C基础知识](../C基础知识.md)