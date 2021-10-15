## 利用 strlen 和 sizeof 求取字符串长度注意事项
#### 返回 [C基础知识](../C基础知识.md)


***


首先，strlen 是函数，sizeof 是运算操作符，二者得到的结果类型为 size_t，即 `unsigned int` 类型。大部分编译程序在编译的时候就把 sizeof 计算过了，而 strlen 的结果要在运行的时候才能计算出来。  
对于以下语句：
```
char *str1 = "asdfgh";
char str2[] = "asdfgh";
char str3[8] = {'a', 's', 'd'};
char str4[] = "as\0df";
```
执行结果是：
```
sizeof(str1) = 4;  strlen(str1) = 6;
sizeof(str2) = 7;  strlen(str2) = 6;
sizeof(str3) = 8;  strlen(str3) = 3;
sizeof(str4) = 6;  strlen(str4) = 2;
```
str1是字符指针变量，sizeof 获得的是该指针所占的地址空间，32 位操作系统对应 4 字节，所以结果是 4；strlen 返回的是该字符串的长度，遇到 `\0` 结束， `\0` 本身不计算在内，故结果是 6。  
str2 是字符数组，大小由字符串常量 "asdfgh" 确定，sizeof 获得该数组所占内存空间大小，包括字符串结尾的 `\0` ，所以结果为 7；strlen 同理返回 6。  
str3 也是字符数组，但大小确定为 8，故 sizeof 得到的结果是 8；strlen 统计 `\0` 之前所有字符的个数，即为 3；  
str4 是常量字符数组，sizeof 得到字符总数即 6；strlen 计算至 `\0` 结束，因此返回 2；  
总结一句就是 sizeof 计算的是变量的大小，而 strlen 计算的是字符串的长度，前者不受字符 `\0` 影响，后者以 `\0` 作为长度判定依据。  
> 原文地址：https://blog.csdn.net/shudaxia123/article/details/47753505




##
#### 返回 [C基础知识](../C基础知识.md)