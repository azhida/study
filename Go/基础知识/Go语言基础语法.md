# Go 语言基础语法

上一章节我们已经了解了 Go 语言的基本组成结构，本章节我们将学习 Go 语言的基础语法。

## Go 标记

Go 程序可以由多个标记组成，可以是关键字，标识符，常量，字符串，符号。如以下 GO 语句由 6 个标记组成：

```
fmt.Println("Hello, World!")
```

6 个标记是(每行一个)：

```
1. fmt
2. .
3. Println
4. (
5. "Hello, World!"
6. )
```

## 行分隔符

在 Go 程序中，一行代表一个语句结束。每个语句不需要像 C 家族中的其它语言一样以分号 ; 结尾，因为这些工作都将由 Go 编译器自动完成。

如果你打算将多个语句写在同一行，它们则必须使用 ; 人为区分，但在实际开发中我们并不鼓励这种做法。
以下为两个语句：

```
fmt.Println("Hello, World!")
fmt.Println("菜鸟教程：runoob.com")
```

## 注释

注释不会被编译，每一个包应该有相关注释。
单行注释是最常见的注释形式，你可以在任何地方使用以 // 开头的单行注释。多行注释也叫块注释，均已以 /* 开头，并以 */ 结尾。如：

```
// 单行注释
/*
 Author by 菜鸟教程
 我是多行注释
 */
```

## 标识符

标识符用来命名变量、类型等程序实体。一个标识符实际上就是一个或是多个字母(A~Z和a~z)数字(0~9)、下划线_组成的序列，但是第一个字符必须是字母或下划线而不能是数字。

以下是有效的标识符：

```
mahesh   kumar   abc   move_name   a_123
myname50   _temp   j   a23b9   retVal
```

以下是无效的标识符：

* 1ab（以数字开头）
* case（Go 语言的关键字）
* a+b（运算符是不允许的）

## 字符串连接

Go 语言的字符串连接可以通过 `+` 实现：

```
package main
import "fmt"
func main() {
    fmt.Println("Google" + "Runoob")
}
```

以上实例输出结果为：

```
GoogleRunoob
```

## 关键字

下面列举了 Go 代码中会使用到的 25 个关键字或保留字：

| break    | default     | func   | interface | select |
| ---------- | ------------- | -------- | ----------- | -------- |
| case     | defer       | go     | map       | struct |
| chan     | else        | goto   | package   | switch |
| const    | fallthrough | if     | range     | type   |
| continue | for         | import | return    | var    |

除了以上介绍的这些关键字，Go 语言还有 36 个预定义标识符：

| append | bool    | byte    | cap     | close  | complex | complex64 | complex128 | uint16  |
| -------- | --------- | --------- | --------- | -------- | --------- | ----------- | ------------ | --------- |
| copy   | false   | float32 | float64 | imag   | int     | int8      | int16      | uint32  |
| int32  | int64   | iota    | len     | make   | new     | nil       | panic      | uint64  |
| print  | println | real    | recover | string | true    | uint      | uint8      | uintptr |

程序一般由关键字、常量、变量、运算符、类型和函数组成。
程序中可能会使用到这些分隔符：括号 ()，中括号 [] 和大括号 {}。
程序中可能会使用到这些标点符号：.、,、;、: 和 …。

## Go 语言的空格

Go 语言中变量的声明必须使用空格隔开，如：

```
var age int;
```

语句中适当使用空格能让程序更易阅读。

无空格：

```
fruit=apples+oranges;
```

在变量与运算符间加入空格，程序看起来更加美观，如：

```
fruit = apples + oranges;
```

## 格式化字符串

Go 语言中使用 `fmt.Sprintf` 格式化字符串并赋值给新串：

```
package main

import (
    "fmt"
)

func main() {
   // %d 表示整型数字，%s 表示字符串
    var stockcode=123
    var enddate="2020-12-31"
    var url="Code=%d&endDate=%s"
    var target_url=fmt.Sprintf(url,stockcode,enddate)
    fmt.Println(target_url)
}
```

输出结果为：

```
Code=123&endDate=2020-12-31
```

> 更多内容参见：[Go fmt.Sprintf 格式化字符串](https://www.runoob.com/go/go-fmt-sprintf.html)

# 读者笔记

**Go 程序的一般结构: basic_structure.go**

```
// 当前程序的包名
package main

// 导入其他包
import . "fmt"

// 常量定义
const PI = 3.14

// 全局变量的声明和赋值
var name = "gopher"

// 一般类型声明
type newType int

// 结构的声明
type gopher struct{}

// 接口的声明
type golang interface{}

// 由main函数作为程序入口点启动
func main() {
    Println("Hello World!")
}
```

Go 程序是通过 **package** 来组织的。
只有 package 名称为 main 的源码文件可以包含 main 函数。
一个可执行程序有且仅有一个 **main** 包。
通过 **import** 关键字来导入其他非 **main** 包。
可以通过 **import** 关键字单个导入:

```
import "fmt"
import "io"
```

也可以同时导入多个:

```
import (
    "fmt"
    "math"
)
```

例如：

```
package main
import (
    "fmt"
    "math"
)
func main() {
    fmt.Println(math.Exp2(10))  // 1024
}
```

使用 <PackageName>.<FunctionName> 调用:

```
package 别名：
// 为fmt起别名为fmt2
import fmt2 "fmt"
```

省略调用(不建议使用):

```
// 调用的时候只需要Println()，而不需要fmt.Println()
import . "fmt"
```

前面加个点表示省略调用，那么调用该模块里面的函数，可以不用写模块名称了:

```
import . "fmt"
func main (){
    Println("hello,world")
}
```

通过 **const** 关键字来进行常量的定义。

通过在函数体外部使用 **var** 关键字来进行全局变量的声明和赋值。

通过 **type** 关键字来进行结构(struct)和接口(interface)的声明。

通过 **func** 关键字来进行函数的声明。

**可见性规则**

Go语言中，使用大小写来决定该常量、变量、类型、接口、结构或函数是否可以被外部包所调用。

函数名首字母小写即为 **private** :

```
func getId() {}
```

函数名首字母大写即为 **public** :

```
func Printf() {}
```

---

Go 语言的包引入一般为: **项目名/包名**

```
import "test/controllers"
```

方法的调用为: **包名.方法名()**

```
controllers.Test()
```

本包内方法名可为小写，包外调用方法名首字母必须为大写。



