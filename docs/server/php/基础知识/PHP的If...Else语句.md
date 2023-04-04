# PHP If...Else 语句
###### 返回 [PHP基础知识](../PHP基础知识.md)
***


条件语句用于根据不同条件执行不同动作。


## PHP 条件语句
当您编写代码时，您常常需要为不同的判断执行不同的动作。您可以在代码中使用条件语句来完成此任务。  
在 PHP 中，提供了下列条件语句：
- if 语句 - 在条件成立时执行代码
- if...else 语句 - 在条件成立时执行一块代码，条件不成立时执行另一块代码
- if...elseif....else 语句 - 在若干条件之一成立时执行一个代码块
- switch 语句 - 在若干条件之一成立时执行一个代码块


## PHP - if 语句
if 语句用于仅当指定条件成立时执行代码。  
语法
```
if (条件)
{
    条件成立时要执行的代码;
}
```
如果当前时间小于 20，下面的实例将输出 "Have a good day!"：
```
<?php
$t=date("H");
if ($t<"20")
{
    echo "Have a good day!";
}
?>
```


## PHP - if...else 语句
在条件成立时执行一块代码，条件不成立时执行另一块代码，请使用 if....else 语句。  
语法：
```
if (条件)
{
    条件成立时执行的代码;
}
else
{
    条件不成立时执行的代码;
}
```
如果当前时间小于 20，下面的实例将输出 "Have a good day!"，否则输出 "Have a good night!"：
```
<?php
$t=date("H");
if ($t<"20")
{
    echo "Have a good day!";
}
else
{
    echo "Have a good night!";
}
?>
```


## PHP - if...elseif....else 语句
在若干条件之一成立时执行一个代码块，请使用 if....elseif...else 语句。.  
语法：
```
if (条件)
{
    if 条件成立时执行的代码;
}
elseif (条件)
{
    elseif 条件成立时执行的代码;
}
else
{
    条件不成立时执行的代码;
}
```
如果当前时间小于 10，下面的实例将输出 "Have a good morning!"，如果当前时间不小于 10 且小于 20，则输出 "Have a good day!"，否则输出 "Have a good night!"：
```
<?php
$t=date("H");
if ($t<"10")
{
    echo "Have a good morning!";
}
elseif ($t<"20")
{
    echo "Have a good day!";
}
else
{
    echo "Have a good night!";
}
?>
```


## PHP - switch 语句
switch 语句将在下一章进行讲解。




# 读者笔记
***


`elseif` 和 `else if` 完全同效果，elseif 是 PHP 为 else if 专门做到容错版。更准确更严格的写法为后者: else if  
```
<?php
$t=date("H");
if ($t<"10")
{
    echo "Have a good morning!";
}
elseif ($t<"20")
{
    echo "Have a good day!";
}
else
{
    echo "Have a good night!";
}
?>
```
等同于：
```
<?php
$t=date("H");
if ($t<"10")
{
    echo "Have a good morning!";
}
else if ($t<"20") //此处有空格
{
    echo "Have a good day!";
}
else
{
    echo "Have a good night!";
}
?>
```


***


如果你觉得最后这两个实例的运行结果不对，那是因为自 PHP5.0 开始，用PHP获取系统时间时，时间比当前时间少 8 个小时。原因是 PHP.ini 中没有设置 timezone 时，PHP 是使用的 UTC 时间，所以在中国时间要少 8 小时。因此你的时间都要 -8，所以代码是没问题的。  

解决办法：

1.在PHP.ini文件中修改设置。
```
[Date]
; Defines the default timezone used by the date functions
date.timezone = Asia/Shanghai
```
这里真是。。。可以设置 Shanghai,Chongqin,Hong_Kong,TaiBei... 等等，可就是没有找到 Beijing，不知道是什么原因。

2.在PHP程序中运行时设置。
```
<?php
if(date_default_timezone_get() != "1Asia/Shanghai") date_default_timezone_set("Asia/Shanghai");
?>
```
> 注意：用 date_default_timezone_get 获得的时间设置中有一个 1，也不太清楚是杂回事呢。

3.在使用时间时自己多加 8*3600 秒也是行滴。
```
<?php
echo date("Y-m-d H:i:s",time()+8*3600);
?>
```


***
#
###### 返回 [PHP基础知识](../PHP基础知识.md)