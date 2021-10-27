# PHP 函数
###### 返回 [PHP基础知识](../PHP基础知识.md)
***


PHP 的真正威力源自于它的函数。  
在 PHP 中，提供了超过 1000 个内建的函数。  


## PHP 内建函数
如需查看所有数组函数的完整参考手册和实例，请访问我们的 [PHP 参考手册](https://www.runoob.com/php/php-ref-array.html) 。


## PHP 函数
在本章中，我们将为您讲解如何创建自己的函数。  
如要在页面加载时执行脚本，您可以把它放到函数里。  
函数是通过调用函数来执行的。  
你可以在页面的任何位置调用函数。  


## 创建 PHP 函数
函数是通过调用函数来执行的。
```
<?php
function functionName()
{
    // 要执行的代码
}
?>
```
PHP 函数准则：
- 函数的名称应该提示出它的功能
- 函数名称以字母或下划线开头（不能以数字开头）

一个简单的函数，在其被调用时能输出我的名称：
```
<?php
function writeName()
{
    echo "Kai Jim Refsnes";
}
 
echo "My name is ";
writeName();
?>
```
输出：
```
My name is Kai Jim Refsnes
```


## PHP 函数 - 添加参数
为了给函数添加更多的功能，我们可以添加参数，参数类似变量。  
参数就在函数名称后面的一个括号内指定。  

**实例 1**  
下面的实例将输出不同的名字，但姓是相同的：
```
<?php
function writeName($fname)
{
    echo $fname . " Refsnes.<br>";
}
 
echo "My name is ";
writeName("Kai Jim");
echo "My sister's name is ";
writeName("Hege");
echo "My brother's name is ";
writeName("Stale");
?>
```
输出：
```
My name is Kai Jim Refsnes.
My sister's name is Hege Refsnes.
My brother's name is Stale Refsnes.
```

**实例 2**  
下面的函数有两个参数：
```
<?php
function writeName($fname,$punctuation)
{
    echo $fname . " Refsnes" . $punctuation . "<br>";
}

echo "My name is ";
writeName("Kai Jim",".");
echo "My sister's name is ";
writeName("Hege","!");
echo "My brother's name is ";
writeName("Ståle","?");
?>
```
输出：
```
My name is Kai Jim Refsnes.
My sister's name is Hege Refsnes!
My brother's name is Ståle Refsnes?
```


## PHP 函数 - 返回值
如需让函数返回一个值，请使用 return 语句。  
```
<?php
function add($x,$y)
{
    $total=$x+$y;
    return $total;
}
 
echo "1 + 16 = " . add(1,16);
?>
```
输出：
```
1 + 16 = 17
```




# 读者笔记
***


关于函数的定义和使用：
```
<?php
//计算两个数的和
function add($a,$b){
    $count = $a + $b;
    return $count;
}

//计算小明的数学成绩和语文成绩的和（这个也可以使用在从数据库中读取数据并且做加运算）
function count_score(){
    $m = 96;//数学成绩
    $y = 99;//语文成绩
    $sum = add($m,$y);
    echo "小明的总成绩是".$sum;
}

count_score();
?>
```


***


php7 对书写函数的要求提供，如果要使用全局变量需要使用 global 声明先。  
conn.php:
```
<?php 
$title="runoob";
?>
```
index.php:
```
<?php
include ('conn.php');
function titleshow () {
    global $title;  //php7 中如果不做声明，可能不能调用这个 titile 函数
    echo $title;
}
titleshow();
?>
```


***


php 也存在可变参数的函数，使用...实现，下面直接上例子：
```
<?php
header("charset=utf-8");
function test(...$args) //定义可变参数函数，使用...实现
{    
    $num=count($args);//统计参数个数
    echo "函数调用参数个数：" . $num . PHP_EOL;
    echo "函数参数详情：" . PHP_EOL;
    foreach($args as $arg)
    {
        echo $arg . "  ";
    };//遍历打印出参数
}

test("a");//一个参数
test("a","b");//两个参数
test("a","b","c");//三个参数
?>
```
运行结果：
```
函数调用参数个数：1
函数参数详情：
a  函数调用参数个数：2
函数参数详情：
a  b  函数调用参数个数：3
函数参数详情：
a  b  c  
```


***


php 的函数可作为参数或返回值传递, 如：
```
function add ($x, $y) {
    return $x + $y;
}

function sub ($x, $y) {
    return $x = $y;
}

function calc ($fun, $x, $y) {
    return $fun($x, $y);
}

function getAdd() {
    return add;
}

$res = calc(add, 1,2);
echo 'Res:: ' . $res;
echo "<br/>";

$add = getAdd();
echo 'Res:: '.$add(3, 9);
```
但注意 ()() 是不支持的, 如：
```
echo getAdd()(3,9);
```


***


php 实现动态规划的菲波那契：
```
<?php
function fibonaci($a)
{
    $x=0;
    $y=1;
    $ret=0;
    $count=0;
    while($count<$a)
    {
        $ret=$x+$y;
        $x=$y;
        $y=$ret;
        $count++;
    }
    return $ret;
}
echo fibonaci(4);
?>
```


***
#
###### 返回 [PHP基础知识](../PHP基础知识.md)