# PHP 常量
###### 返回 [PHP基础知识](../PHP基础知识.md)
***


常量是一个简单值的标识符。该值在脚本中不能改变。  
一个常量由英文字母、下划线、和数字组成,但数字不能作为首字母出现。 (常量名不需要加 $ 修饰符)。  
注意： 常量在整个脚本中都可以使用。  


## 设置 PHP 常量
设置常量，使用 define() 函数，函数语法如下：
```
bool define ( string $name , mixed $value [, bool $case_insensitive = false ] )
```
该函数有三个参数:
- name：必选参数，常量名称，即标志符。
- value：必选参数，常量的值。
- case_insensitive ：可选参数，如果设置为 TRUE，该常量则大小写不敏感。默认是大小写敏感的。

以下实例我们创建一个 **区分大小写的常量** , 常量值为 "欢迎访问 Runoob.com"：
```
<?php
// 区分大小写的常量名
define("GREETING", "欢迎访问 Runoob.com");
echo GREETING;    // 输出 "欢迎访问 Runoob.com"
echo '<br>';
echo greeting;   // 输出 "greeting"，但是有警告信息，表示该常量未定义
?>
```
以下实例我们创建一个 **不区分大小写的常量** , 常量值为 "欢迎访问 Runoob.com"：
```
<?php
// 不区分大小写的常量名
define("GREETING", "欢迎访问 Runoob.com", true);
echo greeting;  // 输出 "欢迎访问 Runoob.com"
?>
```


## 常量是全局的
常量在定义后，默认是全局变量，可以在整个运行的脚本的任何地方使用。  
以下实例演示了在函数内使用常量，即便常量定义在函数外也可以正常使用常量。  
```
<?php
define("GREETING", "欢迎访问 Runoob.com");
 
function myTest() {
    echo GREETING;
}
 
myTest();    // 输出 "欢迎访问 Runoob.com"
?>
```




# 读者笔记
***


使用常量时，不能在常量名前添加 `$` 符号，不然会将常量转换成新的未定义变量使用，会导致报错。  
```
<?php
define('LOG','OPEN');//定义常量，常量使用不能添加$
echo $LOG;
?>
```
运行结果：
```
Notice: Undefined variable: LOG in D:\Program Files\apache-tomcat-7.0.75\webapps\myweb\test.php on line 3
```


***
#
###### 返回 [PHP基础知识](../PHP基础知识.md)