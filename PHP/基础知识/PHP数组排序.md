# PHP数组排序
###### 返回 [PHP基础知识](../PHP基础知识.md)
***


数组中的元素可以按字母或数字顺序进行降序或升序排列。  


## PHP - 数组排序函数
在本章中，我们将一一介绍下列 PHP 数组排序函数：
- sort() - 对数组进行升序排列
- rsort() - 对数组进行降序排列
- asort() - 根据关联数组的值，对数组进行升序排列
- ksort() - 根据关联数组的键，对数组进行升序排列
- arsort() - 根据关联数组的值，对数组进行降序排列
- krsort() - 根据关联数组的键，对数组进行降序排列


## sort() - 对数组进行升序排列
下面的实例将 $cars 数组中的元素按照字母升序排列：
```
<?php
$cars=array("Volvo","BMW","Toyota");
sort($cars);
?>
```
下面的实例将 $numbers 数组中的元素按照数字升序排列：
```
<?php
$numbers=array(4,6,2,22,11);
sort($numbers);
?>
```


## rsort() - 对数组进行降序排列
```
<?php
// 将 $cars 数组中的元素按照字母降序排列
$cars=array("Volvo","BMW","Toyota");
rsort($cars);
?>
```
```
<?php
// 将 $numbers 数组中的元素按照数字降序排列
$numbers=array(4,6,2,22,11);
rsort($numbers);
?>
```


## asort() - 根据数组的值，对数组进行升序排列
```
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
asort($age);
?>
```


## ksort() - 根据数组的键，对数组进行升序排列
```
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
ksort($age);
?>
```


## arsort() - 根据数组的值，对数组进行降序排列
```
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
arsort($age);
?>
```


## krsort() - 根据数组的键，对数组进行降序排列
```
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
krsort($age);
?>
```



# 完整的 PHP Array 参考手册
如需查看所有数组函数的完整参考手册，请访问我们的 [PHP Array 参考手册](https://www.runoob.com/php/php-ref-array.html) 。  
该参考手册提供了每个函数的简要描述和应用实例！




# 读者笔记
***


使用 PHP 写一个冒泡排序算法:
```
<?php
// 从大到小排序
$numArray =array(3,2,6,5,8,10);
$numCount = count($numArray);
for($i=$numCount-1;$i>=0;$i--){
    for($j=0;$j<$i;$j++){
        if($numArray[$j]< $numArray[$j+1]){
            $aa = $numArray[$j+1];
            $numArray[$j+1]=$numArray[$j];
            $numArray[$j]=$aa;
        }
    }
}

print_r($numArray);
?>
```


***


写两个冒泡排序:
```
<?php
//升序
$myArray=array(10,11,9,12,8);
for ($i=0;$i<count($myArray)-1;$i++){
    for ($j=0;$j<count($myArray)-$i-1;$j++){
            if($myArray[$j]>$myArray[$j+1]){
            //把大的往后移
            $temp=$myArray[$j];
            $myArray[$j]=$myArray[$j+1];
            $myArray[$j+1]=$temp;
        }
    }
}
print_r($myArray);
echo "<br>";
//降序
$myArray2=array(11,12,13,9,14,15);
for ($i=0;$i<count($myArray2)-1;$i++){
    for ($j=0;$j<count($myArray2)-$i-1;$j++){
        if ($myArray2[$j]<$myArray2[$j+1]){
            //把小的数往后移
            $temp=$myArray2[$j];
            $myArray2[$j]=$myArray2[$j+1];
            $myArray2[$j+1]=$temp;
        }
    }
}
print_r($myArray2);
?>
```


***


插入排序：
```
<?php
$x = array(5,3,4,9,10,22,1,-2,4); 
echo "排序前数组：" . PHP_EOL;
print_r($x);
function SortInsert(array $arr)
{
    for($i=0;$i<count($arr)-1;$i++)
        for($j=$i+1;$j<count($arr);$j++)
        {
            if($arr[$j]<$arr[$i])
            {
                $temp=$arr[$j];
                $arr[$j]=$arr[$i];
                $arr[$i]=$temp;
            }
        }
    return $arr;
}

echo "排序后数组：" . PHP_EOL;
$x=SortInsert($x);
print_r($x);
?>
```


***
#
###### 返回 [PHP基础知识](../PHP基础知识.md)