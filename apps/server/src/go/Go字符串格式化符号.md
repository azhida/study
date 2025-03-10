# Go 字符串格式化符号

| 格式化符号 |	描述	| 示例 |
| --- |	---	| --- |
| 通用格式 |		|  |
| %v	| 以默认格式输出变量	| fmt.Printf("%v", 42) |
| %+v	| 对结构体加字段名的方式输出	| fmt.Printf("%+v", struct{A int}{A: 42}) |
| %#v	| 以 Go 语法格式化输出  |  fmt.Printf("%#v", map[string]int{"a": 1}) |
| %T  |  输出值的类型  |  fmt.Printf("%T", 42) |
| %%  |  输出百分号  |  fmt.Printf("%%") |
| 布尔值  |    |   |
| %t  |  输出 true 或 false  |  fmt.Printf("%t", true) |
| 整数  |    |  
| %b  |  二进制表示  |  fmt.Printf("%b", 5) |
| %c  |  Unicode 对应字符  |  fmt.Printf("%c", 65) |
| %d  |  十进制表示  |  fmt.Printf("%d", 42) |
| %o  |  八进制表示  |  fmt.Printf("%o", 10) |
| %x  |  十六进制表示（小写字母）  |  fmt.Printf("%x", 15) |
| %X  |  十六进制表示（大写字母）  |  fmt.Printf("%X", 15) |
| %U  |  Unicode 格式输出  |  fmt.Printf("%U", 65) |
| 浮点数  |    |  
| %f  |  十进制浮点数  |  fmt.Printf("%f", 3.14) |
| %e  |  科学计数法（小写 e）  |  fmt.Printf("%e", 3.14) |
| %E  |  科学计数法（大写 E）  |  fmt.Printf("%E", 3.14) |
| %g  |  自动选择 %f 或 %e 的简洁表示  |  fmt.Printf("%g", 3.14) |
| 字符串与字节  |    |  
| %s  |  普通字符串  |  fmt.Printf("%s", "Go") |
| %q  |  带双引号的字符串或字符  |  fmt.Printf("%q", "Go") |
| %x  |  每个字节用两字符十六进制表示  |  fmt.Printf("%x", "abc") |
| %X  |  十六进制（大写）表示  |  fmt.Printf("%X", "abc") |
| 指针  |    |  
| %p  |  指针地址  |  fmt.Printf("%p", &x) |
