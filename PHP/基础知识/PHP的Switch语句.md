# PHP Switch 语句 
###### 返回 [PHP基础知识](../PHP基础知识.md)
***


switch 语句用于根据多个不同条件执行不同动作。


语法：
```
<?php
switch (n)
{
case label1:
    如果 n=label1，此处代码将执行;
    break;
case label2:
    如果 n=label2，此处代码将执行;
    break;
default:
    如果 n 既不等于 label1 也不等于 label2，此处代码将执行;
}
?>
```
工作原理：首先对一个简单的表达式 n（通常是变量）进行一次计算。将表达式的值与结构中每个 case 的值进行比较。如果存在匹配，则执行与 case 关联的代码。代码执行后，使用 break 来阻止代码跳入下一个 case 中继续执行。default 语句用于不存在匹配（即没有 case 为真）时执行。  
```
<?php
$favcolor="red";
switch ($favcolor)
{
case "red":
    echo "你喜欢的颜色是红色!";
    break;
case "blue":
    echo "你喜欢的颜色是蓝色!";
    break;
case "green":
    echo "你喜欢的颜色是绿色!";
    break;
default:
    echo "你喜欢的颜色不是 红, 蓝, 或绿色!";
}
?>
```




# 读者笔记
***


在 switch 语句中漏写 break, 可能会使你的输出在你意料之外，下面我来和你们仔细讲解 break 的作用：  
下面的代码是正确示范，结果将是只会输出：这里是a。
```
<?php
$x='a';
switch ($x){
case 'a':                      //变量$x的值和该种情况匹配，将从此处开始执行。
    echo "这里是a"."<br>";
    break;
case 'b': 
    echo "这里是b"."<br>";
    break;
case 'c':
    echo "这里是c"."<br>";
    break;
default:
    echo "这里是default";
}
?>
```
倘若你忘敲了 case 'a'，case 'b',case 'c' 后的 break，结果将是将代码中的每一条输出语句都输出。  
倘若你只敲了 case 'c' 后的 break, 结果将会是输出包含 case 'c' 之前的所有输出语句。  
讲到这里大家应该明白了：原来 switch 语句不遇到 break 将不会自己"拐弯"，希望这些将会帮助到才接触 php 的菜鸟们！


***
#
###### 返回 [PHP基础知识](../PHP基础知识.md)