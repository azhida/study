# PHP EOF(heredoc) 使用说明
###### 返回 [PHP基础知识](../PHP基础知识.md)
***


PHP EOF(heredoc)是一种在命令行shell（如sh、csh、ksh、bash、PowerShell和zsh）和程序语言（像Perl、PHP、Python和Ruby）里定义一个字符串的方法。  
使用概述：
- 必须后接分号，否则编译通不过。
- EOF 可以用任意其它字符代替，只需保证结束标识与开始标识一致。
- 结束标识必须顶格独自占一行(即必须从行首开始，前后不能衔接任何空白和字符)。
- 开始标识可以不带引号或带单双引号，不带引号与带双引号效果一致，解释内嵌的变量和转义符号，带单引号则不解释内嵌的变量和转义符号。
- 当内容需要内嵌引号（单引号或双引号）时，不需要加转义符，本身对单双引号转义，此处相当与q和qq的用法。
```
<?php
echo <<<EOF
        <h1>我的第一个标题</h1>
        <p>我的第一个段落。</p>
EOF;
// 结束需要独立一行且前后不能空格
?>
```
注意：  
1.以 `<<<EOF` 开始标记开始，以 `EOF` 结束标记结束，结束标记必须顶头写，不能有缩进和空格，且在结束标记末尾要有分号 。  
2.开始标记和结束标记相同，比如常用大写的 `EOT、EOD、EOF` 来表示，但是不只限于那几个(也可以用：JSON、HTML等)，只要保证开始标记和结束标记不在正文中出现即可。  
3.位于开始标记和结束标记之间的变量可以被正常解析，但是函数则不可以。在 heredoc 中，变量不需要用连接符 `.` 或 `,` 来拼接，如下：  
```
<?php
$name="runoob";
$a= <<<EOF
        "abc"$name
        "123"
EOF;
// 结束需要独立一行且前后不能空格
echo $a;
?>
```




# 读者笔记
***


1.PHP 定界符 `EOF` 的作用就是按照原样，包括换行格式什么的，输出在其内部的东西；  
2.在 PHP 定界符 `EOF` 中的任何特殊字符都不需要转义；  
3.PHP 定界符 `EOF`


***


补充一下上一个笔记的内容，EOF 中是会解析 html 格式内容的，并且在双引号内的内容也有转义效果。  
具体见下面例子:
```
<?php
$name="变量会被解析";
$a=<<<EOF
$name<br><a>html格式会被解析</a><br/>双引号和Html格式外的其他内容都不会被解析
"双引号外所有被排列好的格式都会被保留"
"但是双引号内会保留转义符的转义效果,比如table:\t和换行：\n下一行"
EOF;
echo $a;
?>  
```
加不加引号转义字符都有效。


***
#
###### 返回 [PHP基础知识](../PHP基础知识.md)