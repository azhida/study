## PHP echo和print语句
#### 返回 [PHP基础知识](../PHP基础知识.md) <br><br>


PHP 中的两个基本的输出方式： echo 和 print。

> echo 和 print 区别:
> - echo - 可以输出一个或多个字符串
> - print - 只允许输出一个字符串，返回值总为 1  
> 
> 提示：echo 输出的速度比 print 快， echo 没有返回值，print有返回值1。
>

###### PHP echo 语句
echo 是一个语言结构，使用的时候可以不用加括号，也可以加上括号： echo 或 echo()。  
- 显示字符串
```
<?php
echo "<h2>PHP 很有趣!</h2>";
echo "Hello world!<br>";
echo "我要学 PHP!<br>";
echo "这是一个", "字符串，", "使用了", "多个", "参数。";
?>
```
- 显示变量
```
<?php
$txt1="学习 PHP";
$txt2="RUNOOB.COM";
$cars=array("Volvo","BMW","Toyota");
 
echo $txt1;
echo "<br>";
echo "在 $txt2 学习 PHP ";
echo "<br>";
echo "我车的品牌是 {$cars[0]}";
?>
```

###### PHP print 语句
print 同样是一个语言结构，可以使用括号，也可以不使用括号： print 或 print()。
- 显示字符串
```
<?php
print "<h2>PHP 很有趣!</h2>";
print "Hello world!<br>";
print "我要学习 PHP!";
?>
```
- 显示变量
```
<?php
$txt1="学习 PHP";
$txt2="RUNOOB.COM";
$cars=array("Volvo","BMW","Toyota");
 
print $txt1;
print "<br>";
print "在 $txt2 学习 PHP ";
print "<br>";
print "我车的品牌是 {$cars[0]}";
?>
```


<br>

#### 返回 [PHP基础知识](../PHP基础知识.md)