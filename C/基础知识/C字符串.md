## 字符串
#### 返回 [C基础知识](../C基础知识.md)


***


在 C 语言中，字符串实际上是使用 **null** 字符 `\0` 终止的一维字符数组。因此，一个以 **null** 结尾的字符串，包含了组成字符串的字符。  
下面的声明和初始化创建了一个 **RUNOOB** 字符串。由于在数组的末尾存储了空字符，所以字符数组的大小比单词 **RUNOOB** 的字符数多一个。
```
char site[7] = {'R', 'U', 'N', 'O', 'O', 'B', '\0'};
```
依据数组初始化规则，您可以把上面的语句写成以下语句：
```
char site[] = "RUNOOB";
```
以下是 C/C++ 中定义的字符串的内存表示：  
![](https://www.runoob.com/wp-content/uploads/2014/09/c-strings-2020-12-21.png)  
其实，您不需要把 null 字符放在字符串常量的末尾。C 编译器会在初始化数组时，自动把 \0 放在字符串的末尾。让我们尝试输出上面的字符串：  
```
#include <stdio.h>
 
int main ()
{
   char site[7] = {'R', 'U', 'N', 'O', 'O', 'B', '\0'};
 
   printf("菜鸟教程: %s\n", site );
 
   return 0;
}
```
当上面的代码被编译和执行时，它会产生下列结果：
```
菜鸟教程: RUNOOB
```

C 中有大量操作字符串的函数：
- `strcpy(s1, s2);` -- 复制字符串 s2 到字符串 s1。
- `strcat(s1, s2);` -- 连接字符串 s2 到字符串 s1 的末尾。
- `strlen(s1);` -- 返回字符串 s1 的长度。
- `strcmp(s1, s2);` -- 如果 s1 和 s2 是相同的，则返回 0；如果 s1<s2 则返回小于 0；如果 s1>s2 则返回大于 0。
- `strchr(s1, ch);` -- 返回一个指针，指向字符串 s1 中字符 ch 的第一次出现的位置。
- `strstr(s1, s2);` -- 返回一个指针，指向字符串 s1 中字符串 s2 的第一次出现的位置。

下面的实例使用了上述的一些函数：
```
#include <stdio.h>
#include <string.h>
 
int main ()
{
   char str1[14] = "runoob";
   char str2[14] = "google";
   char str3[14];
   int  len ;
 
   /* 复制 str1 到 str3 */
   strcpy(str3, str1);
   printf("strcpy( str3, str1) :  %s\n", str3 );
 
   /* 连接 str1 和 str2 */
   strcat( str1, str2);
   printf("strcat( str1, str2):   %s\n", str1 );
 
   /* 连接后，str1 的总长度 */
   len = strlen(str1);
   printf("strlen(str1) :  %d\n", len );
 
   return 0;
}
```
当上面的代码被编译和执行时，它会产生下列结果：
```
strcpy( str3, str1) :  runoob
strcat( str1, str2):   runoobgoogle
strlen(str1) :  12
```
您可以在 C 标准库中找到更多字符串相关的函数。




## 读者笔记


***


本节涉及函数英文全称  
```
strcmp: string compare 
strcat: string catenate 
strcpy: string copy 
strlen: string length 
strlwr: string lowercase 
strupr: string upercase
```


***


字符串在以如下输入进行初始化的时候需要对 `\0` 特别注意：
```
char greeting[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
```
如果没有在字符数组最后增加 `\0` 的话输出结果有误：
```
// 初始化字符串
char greeting[5] = { 'H', 'e', 'l', 'l', 'o' };
printf("Greeting message: %s\n", greeting);
```
输出结果:
```
Greeting message: Hello烫烫烫?侵7(?╔?╚╔╔
```
在使用不定长数组初始化字符串时默认结尾为 `\0`
```
char greeting[] = "Hello";
printf("Greeting message: %s, greeting[] Length: %d\n", greeting, sizeof(greeting));
```
输出结果:
```
Greeting message: Hello, greeting[] Length: 6
```
**结论**：需在给定字符数组的大小时在原有的字符串的字符数上加 1。


***


strlen 与 sizeof的区别：

strlen 是函数，sizeof 是运算操作符，二者得到的结果类型为 size_t，即 unsigned int 类型。  
sizeof 计算的是变量的大小，不受字符 `\0` 影响；  
而 strlen 计算的是字符串的长度，以 `\0` 作为长度判定依据。  

> 
> 更多参考内容：
> - [利用 strlen 和 sizeof 求取字符串长度注意事项](https://www.runoob.com/w3cnote/strlen-and-sizeof.html)
> - [C++ sizeof 与 strlen的区别](https://www.runoob.com/note/27755)


***


'a' 表示是一个字符，"a" 表示一个字符串相当于 `'a'+'\0'` ;  
`''` 里面只能放一个字符;  
`""` 里面表示是字符串系统自动会在串末尾补一个 `\0` 。  


***


1. 字符串的本质是以 `\0` 结束的字符数组。
2. 字符串的字面量是常量，比如"hello world"。
3. 字符串的定义与初始化。

**字符数组：**

1）数组形式  
```
char hi[] = {'h','e','l','l','o','\0'};
```
2）直接赋首地址：
```
char hi[50] ="hello" ;
```
3）省略长度
```
char hi[] = "hello";
char hi[] = { "hello" };
```
字符指针：(注意指针不能直接赋给数组)
```
char *hi = "hello";
```

4. 字符串遍历：
```
char hi[] = "hello";
```
for 遍历：
```
for(i==0, i<6,i++)
{
    printf("%c",hi[i]);
}
```
直接输出：
```
printf(hi);
```
字符串格式（%s）输出：
```
printf("%s",hi);
```


***


##
#### 返回 [C基础知识](../C基础知识.md)