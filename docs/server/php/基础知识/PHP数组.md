# PHP 数组
###### 返回 [PHP基础知识](../PHP基础知识.md)
***


数组能够在单个变量中存储多个值：
```
<?php
$cars=array("Volvo","BMW","Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
?>
```


## 数组是什么？
数组是一个能在单个变量中存储多个值的特殊变量。  
如果您有一个项目清单（例如：车名字的清单），将其存储到单个变量中，如下所示：  
```
$cars1="Volvo";
$cars2="BMW";
$cars3="Toyota";
```
然而，如果您想要遍历数组并找出特定的一个呢？如果数组的项不只 3 个而是 300 个呢？  
解决办法是创建一个数组！  
数组可以在单个变量中存储多个值，并且您可以根据键访问其中的值。  


## 在 PHP 中创建数组
在 PHP 中，array() 函数用于创建数组：  
```
array();
```
在 PHP 中，有三种类型的数组：
- 数值数组 - 带有数字 ID 键的数组
- 关联数组 - 带有指定的键的数组，每个键关联一个值
- 多维数组 - 包含一个或多个数组的数组


## PHP 数值数组
这里有两种创建数值数组的方法：  
自动分配 ID 键（ID 键总是从 0 开始）：
```
$cars=array("Volvo","BMW","Toyota");
```
人工分配 ID 键：
```
$cars[0]="Volvo";
$cars[1]="BMW";
$cars[2]="Toyota";
```
下面的实例创建一个名为 $cars 的数值数组，并给数组分配三个元素,然后打印一段包含数组值的文本：
```
<?php
$cars=array("Volvo","BMW","Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
?>
```


## 获取数组的长度 - count() 函数
count() 函数用于返回数组的长度（元素的数量）：  
```
<?php
$cars=array("Volvo","BMW","Toyota");
echo count($cars); // 结果 3
?>
```


## 遍历数值数组
遍历并打印数值数组中的所有值，您可以使用 for 循环，如下所示：  
```
<?php
$cars=array("Volvo","BMW","Toyota");
$arrlength=count($cars);
 
for($x=0;$x<$arrlength;$x++)
{
    echo $cars[$x];
    echo "<br>";
}
?>
```


## PHP 关联数组
关联数组是使用您分配给数组的指定的键的数组。  
这里有两种创建关联数组的方法：
```
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
```
or
```
$age['Peter']="35";
$age['Ben']="37";
$age['Joe']="43";
```
随后可以在脚本中使用指定的键：
```
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
echo "Peter is " . $age['Peter'] . " years old.";
?>
```


## 遍历关联数组
遍历并打印关联数组中的所有值，您可以使用 foreach 循环，如下所示：
```
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
 
foreach($age as $x=>$x_value)
{
    echo "Key=" . $x . ", Value=" . $x_value;
    echo "<br>";
}
?>
```


## 多维数组
详见 [多维数组](./PHP多维数组.md)




# 完整的 PHP Array 参考手册
如需查看所有数组函数的完整参考手册，请访问 [PHP Array 参考手册](https://www.runoob.com/php/php-ref-array.html) 。  
该参考手册提供了每个函数的简要描述和应用实例！




# 读者笔记
***


foreach 语法结构提供了遍历数组的简单方式。foreach 仅能够应用于数组和对象，如果尝试应用于其他数据类型的变量，或者未初始化的变量将发出错误信息。有两种语法：  
```
foreach (array_expression as $value)
    statement
foreach (array_expression as $key => $value)
    statement
```
第一种格式遍历给定的 array_expression 数组。每次循环中，当前单元的值被赋给 $value 并且数组内部的指针向前移一步（因此下一次循环中将会得到下一个单元）。  
第二种格式做同样的事，只除了当前单元的键名也会在每次循环中被赋给变量 $key。


***


数组排序时发现 sort 与 rsort 排序完毕以后，var_dump 输出时原有 key 值丢失，变为数字索引。  
```
<?php
$a=array("key1"=>"val1","key6"=>"val6","key3"=>"val1","key5"=>"val6","key4"=>"val8");
echo "sort(\$a)=".PHP_EOL;
sort($a);
var_dump($a);
?>
```
输出如下:
```
sort($a)=
array(5) {
  [0]=>
  string(4) "val1"
  [1]=>
  string(4) "val1"
  [2]=>
  string(4) "val6"
  [3]=>
  string(4) "val6"
  [4]=>
  string(4) "val8"
}
```

```
<?php
$a=array("key1"=>"val1","key6"=>"val6","key3"=>"val1","key5"=>"val6","key4"=>"val8");
echo "rsort(\$a)=".PHP_EOL;
rsort($a);
var_dump($a);
?>
```
输出如下：
```
rsort($a)=
array(5) {
  [0]=>  string(4) "val8"
  [1]=>  string(4) "val6"
  [2]=>  string(4) "val6"
  [3]=>  string(4) "val1"
  [4]=>  string(4) "val1"
}
```


***


关于上面笔记中的回答：  
疑问：“数组排序时发现 sort 与 rsort 排序完毕以后，var_dump 输出时原有 key 值丢失，变为数字索引。”  
正解：对关联数组进行升序和降序排列应使用  
- asort() - 根据关联数组的值，对数组进行升序排列
- ksort() - 根据关联数组的键，对数组进行升序排列
- arsort() - 根据关联数组的值，对数组进行降序排列
- krsort() - 根据关联数组的键，对数组进行降序排列

下面就上面例题用asort()函数，根据关联数组的值，对数组进行升序排列  
```
<?php
$a=array("key1"=>"val1","key6"=>"val6","key3"=>"val1","key5"=>"val6","key4"=>"val8");
echo "asort(\$a)=".PHP_EOL;
asort($a);
var_dump($a);
?>
```
输出如下：
```
asort($a)=
array(5) {
  ["key1"]=>
  string(4) "val1"
  ["key3"]=>
  string(4) "val1"
  ["key6"]=>
  string(4) "val6"
  ["key5"]=>
  string(4) "val6"
  ["key4"]=>
  string(4) "val8"
}
```


***


自 5.4 起可以使用短数组定义语法，用 [] 替代 array() 。  
```
<?php
$arr = array('value1','value2','value3');
$arr = ['value1','value2','value3'] ;
?>
```
键值对数组：
```
<?php
$arr = array('key1'=>'value1','key2'=>'value2','key3'=>'value3');
$arr = ['key1'=>'value1','key2'=>'value2','key3'=>'value3'];
?>
```


***
#
###### 返回 [PHP基础知识](../PHP基础知识.md)