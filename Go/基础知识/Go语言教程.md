# Go 语言教程

Go 是一个开源的编程语言，它能让构造简单、可靠且高效的软件变得容易。

Go 是从 2007 年末由 Robert Griesemer, Rob Pike, Ken Thompson 主持开发，后来还加入了 Ian Lance Taylor, Russ Cox 等人，并最终于 2009 年 11 月开源，在 2012 年早些时候发布了 Go 1 稳定版本。现在 Go 的开发已经是完全开放的，并且拥有一个活跃的社区。

## Go 语言特色

- 简洁、快速、安全
- 并行、有趣、开源
- 内存管理、数组安全、编译迅速

## Go 语言用途

Go 语言被设计成一门应用于搭载 Web 服务器，存储集群或类似用途的巨型中央服务器的系统编程语言。

对于高性能分布式系统领域而言，Go 语言无疑比大多数其它语言有着更高的开发效率。它提供了海量并行的支持，这对于游戏服务端的开发而言是再好不过了。

## 第一个 Go 程序

接下来我们来编写第一个 Go 程序 hello.go（Go 语言源文件的扩展是 .go），代码如下：

hello.go 文件

```
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

要执行 Go 语言代码可以使用 `go run` 命令。  
执行以上代码输出:

```
$ go run hello.go
Hello, World!
```

此外我们还可以使用 `go build` 命令来生成二进制文件：

```
$ go build hello.go
$ ls
hello    hello.go
$ ./hello
Hello, World!
```

# 读者笔记

## 1

Go 语言最主要的特性：

- 自动垃圾回收
- 更丰富的内置类型
- 函数多返回值
- 错误处理
- 匿名函数和闭包
- 类型和接口
- 并发编程
- 反射
- 语言交互性
