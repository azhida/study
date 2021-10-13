## C enum(枚举)
#### 返回 [C基础知识](../C基础知识.md) 

***


枚举是 C 语言中的一种基本数据类型，它可以让数据更简洁，更易读。  
枚举语法定义格式为：  
```
enum　枚举名　{枚举元素1,枚举元素2,……};
```
接下来我们举个例子，比如：一星期有 7 天，如果不用枚举，我们需要使用 #define 来为每个整数定义一个别名：
```
#define MON  1
#define TUE  2
#define WED  3
#define THU  4
#define FRI  5
#define SAT  6
#define SUN  7
```
这个看起来代码量就比较多，接下来我们看看使用枚举的方式：
```
enum DAY
{
      MON=1, TUE, WED, THU, FRI, SAT, SUN
};
```
这样看起来是不是更简洁了。  
**注意**：第一个枚举成员的默认值为整型的 0，后续枚举成员的值在前一个成员上加 1。我们在这个实例中把第一个枚举成员的值定义为 1，第二个就为 2，以此类推。  
> 可以在定义枚举类型时改变枚举元素的值：  
> ```
> enum season {spring, summer=3, autumn, winter};
> ```
> 没有指定值的枚举元素，其值为前一元素加 1。也就说 spring 的值为 0，summer 的值为 3，autumn 的值为 4，winter 的值为 5


###### 枚举变量的定义
前面我们只是声明了枚举类型，接下来我们看看如何定义枚举变量。  
我们可以通过以下三种方式来定义枚举变量  

1. 先定义枚举类型，再定义枚举变量
```
enum DAY
{
      MON=1, TUE, WED, THU, FRI, SAT, SUN
};
enum DAY day;
```
2. 定义枚举类型的同时定义枚举变量
```
enum DAY
{
      MON=1, TUE, WED, THU, FRI, SAT, SUN
} day;
```
3. 省略枚举名称，直接定义枚举变量
```
enum
{
      MON=1, TUE, WED, THU, FRI, SAT, SUN
} day;
```

实例：
```
#include <stdio.h>
 
enum DAY
{
      MON=1, TUE, WED, THU, FRI, SAT, SUN
};
 
int main()
{
    enum DAY day;
    day = WED;
    printf("%d",day);
    return 0;
}
```
以上实例输出结果为：
```
3
```
在C 语言中，枚举类型是被当做 int 或者 unsigned int 类型来处理的，所以按照 C 语言规范是没有办法遍历枚举类型的。  
不过在一些特殊的情况下，枚举类型必须连续是可以实现有条件的遍历。  
以下实例使用 for 来遍历枚举的元素：  
```
#include <stdio.h>

enum DAY
{
      MON=1, TUE, WED, THU, FRI, SAT, SUN
} day;
int main()
{
    // 遍历枚举元素
    for (day = MON; day <= SUN; day++) {
        printf("枚举元素: %d \n", day);
    }
}
```
以上实例输出结果为：
```
枚举元素：1 
枚举元素：2 
枚举元素：3 
枚举元素：4 
枚举元素：5 
枚举元素：6 
枚举元素：7
```
以下枚举类型不连续，这种枚举无法遍历。
```
enum
{
    ENUM_0,
    ENUM_10 = 10,
    ENUM_11
};
```
枚举在 switch 中的使用：
```
#include <stdio.h>
#include <stdlib.h>
int main()
{

    enum color { red=1, green, blue };

    enum  color favorite_color;

    /* 用户输入数字来选择颜色 */
    printf("请输入你喜欢的颜色: (1. red, 2. green, 3. blue): ");
    scanf("%u", &favorite_color);

    /* 输出结果 */
    switch (favorite_color)
    {
    case red:
        printf("你喜欢的颜色是红色: red");
        break;
    case green:
        printf("你喜欢的颜色是绿色: green");
        break;
    case blue:
        printf("你喜欢的颜色是蓝色: blue");
        break;
    default:
        printf("你没有选择你喜欢的颜色: default");
    }

    return 0;
}
```
以上实例输出结果为：
```
请输入你喜欢的颜色: (1. red, 2. green, 3. blue): 1
你喜欢的颜色是红色
```


###### 将整数转换为枚举
以下实例将整数转换为枚举：
```
#include <stdio.h>
#include <stdlib.h>
 
int main()
{
 
    enum day
    {
        saturday,
        sunday,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday
    } workday;
 
    int a = 1;
    enum day weekend;
    weekend = ( enum day ) a;  //类型转换
    //weekend = a; //错误
    printf("weekend:%d",weekend);
    return 0;
}
```
以上实例输出结果为：
```
weekend:1
```




## 读者笔记


***


用 for 用来遍历枚举元素根本是不可行的，直接上代码：
```
#include<stdio.h>
enum DAY{MON=1, TUE, WED, THU=7, FRI, SAT, SUN};

int main()
{
        enum DAY day;
        for(day=MON;day<=SUN;day++)
        {
                printf("day=%d\n",day);
        }
        return 0;
}
```
得到的结果：
```
day=1
day=2
day=3
day=4
day=5
day=6
day=7
day=8
day=9
day=10
```
所以用来遍历是不可行的，它只是给 day 赋值了一个整数类型的值。


***


枚举其实可以直接使用，上代码：
```
#include <stdio.h>
#include <stdlib.h>

enum {
 Q,W,E=4,R
};

int main()
{

   printf("枚举值QWER分别是: %d , %d , %d , %d",Q,W,E,R);
   
   return 0;
}
```
输出:
```
枚举值QWER分别是: 0 , 1 , 4 , 5
```


***


在 C 语言中，枚举类型是被当做 int 或者 unsigned int 类型来处理的，所以按照 C 语言规范是没有办法遍历枚举类型的。  
不过在一些特殊的情况下，枚举类型必须连续是可以实现有条件的遍历。  
以下枚举类型不连续，这种枚举无法遍历。
```
enum
{
    ENUM_0,
    ENUM_10 = 10,
    ENUM_11
};
```


***


```
#include<stdio.h>
enum DAY{MON=1, TUE, WED, THU=7, FRI, SAT, SUN};

int main()
{
        enum DAY day;
        for(day=MON;day<=SUN;day++)
        {
                printf("day=%d\n",day);
        }
        return 0;
}
```
```
#include<stdio.h>
enum DAY{MON=1, TUE=2, WED=3, THU=7, FRI=8, SAT=9, SUN=10};

int main()
{
        enum DAY day;
        for(day=MON;day<=SUN;day++)
        {
                printf("day=%d\n",day);
        }
        return 0;
}
```
```
#include<stdio.h>
enum DAY{MON=1, TUE, WED, THU=7, FRI, SAT, SUN};

int main()
{
        enum DAY day;
        for(day=1;day<=10;day++)
        {
                printf("day=%d\n",day);
        }
        return 0;
}
```
这 3 个是等价的。


***


**关于遍历问题的讨论：**

首先大家要清楚在 c 语言中枚举元素的数据类型是被当成了 int 或者 unsigned int 型，不会是其他数据类型，如浮点型。简单而言，每个枚举元素可以看作为一个整形变量的宏定义。所以无论是哪种形式的遍历，大家都可以看成是对整形变量的操作。至于作者说的条件的遍历情况无非是恰好满足了遍历时 枚举变量的值 恰好是和定义好的枚举类型中的值一样罢了。可能说得有点抽象，一个栗子帮助大家理解：  
一：
```
#include <stdio.h>

int main(void)
{
    enum MONTH{A=1,B,C,D,F=10};    //注意B的值是在A加1，C是B加1....所以D你知道吧
    enum MONTH month=A;
    for(month=A;month<F;month++)
    printf("the value of month is :%d  ",month);
    return 0;
}
```
二：
```
#include <stdio.h>

int main(void)
{
    int month=1;
    int F=10;
    for(month=1;month<F;month++)
    printf("the value of month is :%d  ",month);
    return 0;
}
```
上面两种情况是一样的，希望帮到大家。


***


枚举类型连续，遍历时要加类型转换:
```
#include<stdio.h>

enum DAY
{
    MON=1, TUE, WED, THU, FRI, SAT, SUN
} weekend;

int main()
{
    weekend=MON;
    printf("day is %d\n",weekend);
    // 遍历枚举元素
    while(weekend<=SUN)
    {
        printf("枚举元素：%d \n",weekend);  //类型扎UN哈UN
        weekend=(enum DAY)(weekend+1);
    }
}
```


***


关于枚举在switch中的使用，输入使用 `scanf()` ，是不安全的，因为他在读取字符串的时候不会检查边界，可能会造成内存泄露，在 Visual Studio 中编译会报错，推荐使用 `scanf_s()` 。  
```
#include <stdio.h>
#include <stdlib.h>
int main()
{
    enum color { red = 1, green, blue };

    enum  color favorite_color;

    // 用户输入数字来选择颜色
    printf("Please enter the color you like: (1. red, 2. green, 3. blue): \n");

    scanf_s("%u", &favorite_color);

    // 输出结果
    switch (favorite_color)
    {
      case red:
        printf("You like red!");
        break;
      case green:
        printf("You like green!");
        break;
      case blue:
        printf("You like blue!");
        break;
      default:
        printf("No color you like!");
    }

    return 0;
}
```


***


```
void main()
{
    enum DAY
    {
        MON = 1, TUE, WED=7, THU, FRI=-9, SAT, SUN
    } day;

    // 遍历枚举元素
    for (day = MON; day <= SUN; day++) {
        printf("枚举元素：%d \n", day);
    }
    printf("枚举元素：%d \n", WED);
    day=17;                              //TUE=1;不可更改
    printf("枚举元素：%d \n", THU);
    printf("枚举元素：%d \n", SUN);

    enum DAY weekend=MON;                //定义后必须赋初值才能使用
    printf("枚举元素：%d \n", weekend);
    printf("枚举元素：%d \n", day);
}
```
枚举值只要是整就行，枚举中的名和值都不可修改，可以重复，可以无大小顺序，但唯一可变的是枚举变量的值，在使用前还必须先赋值，可以同时存在多个不同值的枚举变量。  
作用是简化了多行#define代码，其他作用还想象不出。


***

##
#### 返回 [C基础知识](../C基础知识.md)