# PHP $_GET 变量

###### 返回 [PHP基础知识](../PHP基础知识.md)

---

在 PHP 中，预定义的 $_GET 变量用于收集来自 method="get" 的表单中的值。

## $_GET 变量

预定义的 $_GET 变量用于收集来自 method="get" 的表单中的值。
从带有 GET 方法的表单发送的信息，对任何人都是可见的（会显示在浏览器的地址栏），并且对发送信息的量也有限制。

form.html 文件代码如下：

```
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<form action="welcome.php" method="get">
名字: <input type="text" name="fname">
年龄: <input type="text" name="age">
<input type="submit" value="提交">
</form>

</body>
</html>
```

当用户点击 "Submit" 按钮时，发送到服务器的 URL 如下所示：

```
http://www.runoob.com/welcome.php?fname=Runoob&age=3
```

"welcome.php" 文件现在可以通过 $_GET 变量来收集表单数据了（请注意，表单域的名称会自动成为 $_GET 数组中的键）：

```
欢迎 <?php echo $_GET["fname"]; ?>!<br>
你的年龄是 <?php echo $_GET["age"]; ?>  岁。
```

## 何时使用 method="get"？

在 HTML 表单中使用 method="get" 时，所有的变量名和值都会显示在 URL 中。
注释：所以在发送密码或其他敏感信息时，不应该使用这个方法！
然而，正因为变量显示在 URL 中，因此可以在收藏夹中收藏该页面。在某些情况下，这是很有用的。
注释：HTTP GET 方法不适合大型的变量值。它的值是不能超过 2000 个字符的。

# 读者笔记

---

---

# 

###### 返回 [PHP基础知识](../PHP基础知识.md)
