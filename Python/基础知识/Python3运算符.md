###### 返回 [Python基础知识](../Python基础知识.md)

# Python3 **运算符**

## 什么是运算符？

本章节主要说明 Python 的运算符。
举个简单的例子:

```
4 + 5 = 9
```

例子中，**4** 和 **5** 被称为 **操作数** ，`+` 称为 **运算符** 。
Python 语言支持以下类型的运算符:

* [算术运算符](https://www.runoob.com/python3/python3-basic-operators.html#ysf1)
* [比较（关系）运算符](https://www.runoob.com/python3/python3-basic-operators.html#ysf2)
* [赋值运算符](https://www.runoob.com/python3/python3-basic-operators.html#ysf3)
* [逻辑运算符](https://www.runoob.com/python3/python3-basic-operators.html#ysf4)
* [位运算符](https://www.runoob.com/python3/python3-basic-operators.html#ysf5)
* [成员运算符](https://www.runoob.com/python3/python3-basic-operators.html#ysf6)
* [身份运算符](https://www.runoob.com/python3/python3-basic-operators.html#ysf7)
* [运算符优先级](https://www.runoob.com/python3/python3-basic-operators.html#ysf8)

接下来让我们一个个来学习Python的运算符。

## Python算术运算符

以下假设变量 `a=10`，变量 `b=21`：

| 运算符 | 描述                                            | 实例                   |
| -------- | ------------------------------------------------- | ------------------------ |
| +      | 加 - 两个对象相加                               | a + b 输出结果 31      |
| -      | 减 - 得到负数或是一个数减去另一个数             | a - b 输出结果 -11     |
| *      | 乘 - 两个数相乘或是返回一个被重复若干次的字符串 | a * b 输出结果 210     |
| /      | 除 - x 除以 y                                   | b / a 输出结果 2.1     |
| %      | 取模 - 返回除法的余数                           | b % a 输出结果 1       |
| **     | 幂 - 返回x的y次幂                               | a**b 为10的21次方      |
| //     | 取整除 - 向下取接近商的整数                     | 9//2 = 4 ; -9 // 2= -5 |

以下实例演示了Python所有算术运算符的操作：

```
#!/usr/bin/python3
 
a = 21
b = 10
c = 0
 
c = a + b
print ("1 - c 的值为：", c)
 
c = a - b
print ("2 - c 的值为：", c)
 
c = a * b
print ("3 - c 的值为：", c)
 
c = a / b
print ("4 - c 的值为：", c)
 
c = a % b
print ("5 - c 的值为：", c)
 
# 修改变量 a 、b 、c
a = 2
b = 3
c = a**b 
print ("6 - c 的值为：", c)
 
a = 10
b = 5
c = a//b 
print ("7 - c 的值为：", c)
```

以上实例输出结果：

```
1 - c 的值为： 31
2 - c 的值为： 11
3 - c 的值为： 210
4 - c 的值为： 2.1
5 - c 的值为： 1
6 - c 的值为： 8
7 - c 的值为： 2
```

## Python比较运算符

以下假设变量a为10，变量b为20：

| 运算符 | 描述                                                                                                                       | 实例                  |
| -------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| ==     | 等于 - 比较对象是否相等                                                                                                    | (a == b) 返回 False。 |
| !=     | 不等于 - 比较两个对象是否不相等                                                                                            | (a != b) 返回 True。  |
| \>     | 大于 - 返回x是否大于y                                                                                                      | (a > b) 返回 False。  |
| <      | 小于 - 返回x是否小于y。所有比较运算符返回1表示真，返回0表示假。这分别与特殊的变量True和False等价。注意，这些变量名的大写。 | (a < b) 返回 True。   |
| \>=    | 大于等于 - 返回x是否大于等于y。                                                                                            | (a >= b) 返回 False。 |
| <=     | 小于等于 - 返回x是否小于等于y。                                                                                            | (a <= b) 返回 True。  |

以下实例演示了Python所有比较运算符的操作：

```
#!/usr/bin/python3
 
a = 21
b = 10
c = 0
 
if ( a == b ):
   print ("1 - a 等于 b")
else:
   print ("1 - a 不等于 b")
 
if ( a != b ):
   print ("2 - a 不等于 b")
else:
   print ("2 - a 等于 b")
 
if ( a < b ):
   print ("3 - a 小于 b")
else:
   print ("3 - a 大于等于 b")
 
if ( a > b ):
   print ("4 - a 大于 b")
else:
   print ("4 - a 小于等于 b")
 
# 修改变量 a 和 b 的值
a = 5
b = 20
if ( a <= b ):
   print ("5 - a 小于等于 b")
else:
   print ("5 - a 大于  b")
 
if ( b >= a ):
   print ("6 - b 大于等于 a")
else:
   print ("6 - b 小于 a")
```

以上实例输出结果：

```
1 - a 不等于 b
2 - a 不等于 b
3 - a 大于等于 b
4 - a 大于 b
5 - a 小于等于 b
6 - b 大于等于 a
```

## Python赋值运算符

以下假设变量a为10，变量b为20：

| 运算符 | 描述                                                                  | 实例                                             |
| -------- | ----------------------------------------------------------------------- | -------------------------------------------------- |
| =      | 简单的赋值运算符                                                      | c = a + b 将 a + b 的运算结果赋值为 c            |
| +=     | 加法赋值运算符                                                        | c += a 等效于 c = c + a                          |
| -=     | 减法赋值运算符                                                        | c -= a 等效于 c = c - a                          |
| *=     | 乘法赋值运算符                                                        | c *= a 等效于 c = c * a                          |
| /=     | 除法赋值运算符                                                        | c /= a 等效于 c = c / a                          |
| %=     | 取模赋值运算符                                                        | c %= a 等效于 c = c % a                          |
| **=    | 幂赋值运算符                                                          | c **= a 等效于 c = c ** a                        |
| //=    | 取整除赋值运算符                                                      | c //= a 等效于 c = c // a                        |
| :=     | 海象运算符，可在表达式内部为变量赋值。**Python3.8 版本新增运算符** 。 | 在这个示例中，赋值表达式可以避免调用 len() 两次: |

海象运算符的演示：

```
a = '123333333333333333333333333344444433'
if (n := len(a)) > 10:
    print(f"List is too long ({n} elements, expected <= 10)")
```

以下实例演示了Python所有赋值运算符的操作：

```
#!/usr/bin/python3
 
a = 21
b = 10
c = 0
 
c = a + b
print ("1 - c 的值为：", c)
 
c += a
print ("2 - c 的值为：", c)
 
c *= a
print ("3 - c 的值为：", c)
 
c /= a 
print ("4 - c 的值为：", c)
 
c = 2
c %= a
print ("5 - c 的值为：", c)
 
c **= a
print ("6 - c 的值为：", c)
 
c //= a
print ("7 - c 的值为：", c)
```

以上实例输出结果：

```
1 - c 的值为： 31
2 - c 的值为： 52
3 - c 的值为： 1092
4 - c 的值为： 52.0
5 - c 的值为： 2
6 - c 的值为： 2097152
7 - c 的值为： 99864
```

## Python位运算符

按位运算符是把数字看作二进制来进行计算的。Python中的按位运算法则如下：
下表中变量 a 为 60，b 为 13二进制格式如下：

```
a = 0011 1100

b = 0000 1101

-----------------

a&b = 0000 1100

a|b = 0011 1101

a^b = 0011 0001

~a  = 1100 0011
```

| 运算符 | 描述                                                                                            | 实例                                                                           |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| &      | 按位与运算符：参与运算的两个值,如果两个相应位都为1,则该位的结果为1,否则为0                      | (a & b) 输出结果 12 ，二进制解释： 0000 1100                                   |
|        |                                                                                                 | 按位或运算符：只要对应的二个二进位有一个为1时，结果位就为1。                   |
| ^      | 按位异或运算符：当两对应的二进位相异时，结果为1                                                 | (a ^ b) 输出结果 49 ，二进制解释： 0011 0001                                   |
| ~      | 按位取反运算符：对数据的每个二进制位取反,即把1变为0,把0变为1。`~x` 类似于 `-x-1`                | (~a ) 输出结果 -61 ，二进制解释： 1100 0011， 在一个有符号二进制数的补码形式。 |
| <<     | 左移动运算符：运算数的各二进位全部左移若干位，由"<<"右边的数指定移动的位数，高位丢弃，低位补0。 | a << 2 输出结果 240 ，二进制解释： 1111 0000                                   |
| \>>    | 右移动运算符：把">>"左边的运算数的各二进位全部右移若干位，">>"右边的数指定移动的位数            | a >> 2 输出结果 15 ，二进制解释： 0000 1111                                    |

以下实例演示了Python所有位运算符的操作：

```
#!/usr/bin/python3
 
a = 60            # 60 = 0011 1100 
b = 13            # 13 = 0000 1101 
c = 0
 
c = a & b        # 12 = 0000 1100
print ("1 - c 的值为：", c)
 
c = a | b        # 61 = 0011 1101 
print ("2 - c 的值为：", c)
 
c = a ^ b        # 49 = 0011 0001
print ("3 - c 的值为：", c)
 
c = ~a           # -61 = 1100 0011
print ("4 - c 的值为：", c)
 
c = a << 2       # 240 = 1111 0000
print ("5 - c 的值为：", c)
 
c = a >> 2       # 15 = 0000 1111
print ("6 - c 的值为：", c)
```

以上实例输出结果：

```
1 - c 的值为： 12
2 - c 的值为： 61
3 - c 的值为： 49
4 - c 的值为： -61
5 - c 的值为： 240
6 - c 的值为： 15
```

## Python逻辑运算符

Python语言支持逻辑运算符，以下假设变量 a 为 10, b为 20:

| 运算符 | 逻辑表达式 | 描述                                                                   | 实例                    |
| -------- | ------------ | ------------------------------------------------------------------------ | ------------------------- |
| and    | x and y    | 布尔"与" - 如果 x 为 False，x and y 返回 x 的值，否则返回 y 的计算值。 | (a and b) 返回 20。     |
| or     | x or y     | 布尔"或" - 如果 x 是 True，它返回 x 的值，否则它返回 y 的计算值。      | (a or b) 返回 10。      |
| not    | not x      | 布尔"非" - 如果 x 为 True，返回 False 。如果 x 为 False，它返回 True。 | not(a and b) 返回 False |

```
#!/usr/bin/python3
 
a = 10
b = 20
 
if ( a and b ):
   print ("1 - 变量 a 和 b 都为 true")
else:
   print ("1 - 变量 a 和 b 有一个不为 true")
 
if ( a or b ):
   print ("2 - 变量 a 和 b 都为 true，或其中一个变量为 true")
else:
   print ("2 - 变量 a 和 b 都不为 true")
 
# 修改变量 a 的值
a = 0
if ( a and b ):
   print ("3 - 变量 a 和 b 都为 true")
else:
   print ("3 - 变量 a 和 b 有一个不为 true")
 
if ( a or b ):
   print ("4 - 变量 a 和 b 都为 true，或其中一个变量为 true")
else:
   print ("4 - 变量 a 和 b 都不为 true")
 
if not( a and b ):
   print ("5 - 变量 a 和 b 都为 false，或其中一个变量为 false")
else:
   print ("5 - 变量 a 和 b 都为 true")
```

以上实例输出结果：

```
1 - 变量 a 和 b 都为 true
2 - 变量 a 和 b 都为 true，或其中一个变量为 true
3 - 变量 a 和 b 有一个不为 true
4 - 变量 a 和 b 都为 true，或其中一个变量为 true
5 - 变量 a 和 b 都为 false，或其中一个变量为 false
```

## Python成员运算符

除了以上的一些运算符之外，Python还支持成员运算符，测试实例中包含了一系列的成员，包括字符串，列表或元组。

| 运算符 | 描述                                                    | 实例                                              |
| -------- | --------------------------------------------------------- | --------------------------------------------------- |
| in     | 如果在指定的序列中找到值返回 True，否则返回 False。     | x 在 y 序列中 , 如果 x 在 y 序列中返回 True。     |
| not in | 如果在指定的序列中没有找到值返回 True，否则返回 False。 | x 不在 y 序列中 , 如果 x 不在 y 序列中返回 True。 |

以下实例演示了Python所有成员运算符的操作：

```
#!/usr/bin/python3
 
a = 10
b = 20
list = [1, 2, 3, 4, 5 ]
 
if ( a in list ):
   print ("1 - 变量 a 在给定的列表中 list 中")
else:
   print ("1 - 变量 a 不在给定的列表中 list 中")
 
if ( b not in list ):
   print ("2 - 变量 b 不在给定的列表中 list 中")
else:
   print ("2 - 变量 b 在给定的列表中 list 中")
 
# 修改变量 a 的值
a = 2
if ( a in list ):
   print ("3 - 变量 a 在给定的列表中 list 中")
else:
   print ("3 - 变量 a 不在给定的列表中 list 中")
```

以上实例输出结果：

```
1 - 变量 a 不在给定的列表中 list 中
2 - 变量 b 不在给定的列表中 list 中
3 - 变量 a 在给定的列表中 list 中
```

## Python身份运算符

身份运算符用于比较两个对象的存储单元

| 运算符 | 描述                                        | 实例                                                                                                   |
| -------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| is     | is 是判断两个标识符是不是引用自一个对象     | **x is y** , 类似 **id(x) == id(y)** , 如果引用的是同一个对象则返回 True，否则返回 False               |
| is not | is not 是判断两个标识符是不是引用自不同对象 | **x is not y** ， 类似  **id(a) != id(b)** 。如果引用的不是同一个对象则返回结果 True，否则返回 False。 |

**注：** [id()](https://www.runoob.com/python/python-func-id.html) 函数用于获取对象内存地址。
以下实例演示了Python所有身份运算符的操作：

```
#!/usr/bin/python3
 
a = 20
b = 20
 
if ( a is b ):
   print ("1 - a 和 b 有相同的标识")
else:
   print ("1 - a 和 b 没有相同的标识")
 
if ( id(a) == id(b) ):
   print ("2 - a 和 b 有相同的标识")
else:
   print ("2 - a 和 b 没有相同的标识")
 
# 修改变量 b 的值
b = 30
if ( a is b ):
   print ("3 - a 和 b 有相同的标识")
else:
   print ("3 - a 和 b 没有相同的标识")
 
if ( a is not b ):
   print ("4 - a 和 b 没有相同的标识")
else:
   print ("4 - a 和 b 有相同的标识")
```

以上实例输出结果：

```
1 - a 和 b 有相同的标识
2 - a 和 b 有相同的标识
3 - a 和 b 没有相同的标识
4 - a 和 b 没有相同的标识
```

> is 与 == 区别：
> is 用于判断两个变量引用对象是否为同一个， == 用于判断引用变量的值是否相等。
> 
> ```
> >>>a = [1, 2, 3]
> >>> b = a
> >>> b is a 
> True
> >>> b == a
> True
> >>> b = a[:]
> >>> b is a
> False
> >>> b == a
> True
> ```

## Python运算符优先级

以下表格列出了从最高到最低优先级的所有运算符：

| 运算符                   | 描述                                                   |
| -------------------------- | -------------------------------------------------------- |
| **                       | 指数 (最高优先级)                                      |
| ~ + -                    | 按位翻转, 一元加号和减号 (最后两个的方法名为 +@ 和 -@) |
| * / % //                 | 乘，除，求余数和取整除                                 |
| + -                      | 加法减法                                               |
| \>> <<                   | 右移，左移运算符                                       |
| &                        | 位 'AND'                                               |
| ^                        |                                                        |
| <= < > >=                | 比较运算符                                             |
| == !=                    | 等于运算符                                             |
| = %= /= //= -= += *= **= | 赋值运算符                                             |
| is is not                | 身份运算符                                             |
| in not in                | 成员运算符                                             |
| not and or               | 逻辑运算符                                             |

以下实例演示了Python所有运算符优先级的操作：

```
#!/usr/bin/python3
 
a = 20
b = 10
c = 15
d = 5
e = 0
 
e = (a + b) * c / d       #( 30 * 15 ) / 5
print ("(a + b) * c / d 运算结果为：",  e)
 
e = ((a + b) * c) / d     # (30 * 15 ) / 5
print ("((a + b) * c) / d 运算结果为：",  e)
 
e = (a + b) * (c / d)    # (30) * (15/5)
print ("(a + b) * (c / d) 运算结果为：",  e)
 
e = a + (b * c) / d      #  20 + (150/5)
print ("a + (b * c) / d 运算结果为：",  e)
```

以上实例输出结果：

```
(a + b) * c / d 运算结果为： 90.0
((a + b) * c) / d 运算结果为： 90.0
(a + b) * (c / d) 运算结果为： 90.0
a + (b * c) / d 运算结果为： 50.0
```

and 拥有更高优先级:

```
x = True
y = False
z = False
 
if x or y and z:
    print("yes")
else:
    print("no")
```

以上实例输出结果：

```
yes
```

> **注意：** Pyhton3 已不支持 <> 运算符，可以使用 != 代替，如果你一定要使用这种比较运算符，可以使用以下的方式：
> 
> ```
> >>> from __future__ import barry_as_FLUFL  
> >>> 1 <> 2  
> True
> ```

# 读者笔记

开始不理解这段：

> 以下假设变量 a 为 10, b为 20: and x and y 布尔"与" - 如果 x 为 False，x and y 返回 False，否则它返回 y 的计算值。 (a and b) 返回 20。

百度之后得到结论：
python 中的 and 从左到右计算表达式，若所有值均为真，则返回最后一个值，若存在假，返回第一个假值；
or 也是从左到有计算表达式，返回第一个为真的值；
其中数字 0 是假，其他都是真；
字符 "" 是假，其他都是真；

---

一开始输入了

```
a = 00111100
```

这么个赋值语句被提示了错误，于是去搜了下相关的博客得知 python 中数字有以下的表示方式：
**2** 进制是以 `0b` 开头的: 例如: 0b11 则表示十进制的 3
**8** 进制是以 `0o` 开头的: 例如: 0o11 则表示十进制的 9
**16** 进制是以 `0x` 开头的: 例如: 0x11 则表示十进制的 17
但是在测试的时候又遇到了个问题，那就是输出来的被自动转化成了十进制：

```
>>> a=0b111100
>>> a
60
```

于是又去找了怎么输出二进制，得到了以下内容：
分别使用 bin，oct，hex 可输出数字的二进制，八进制，十六进制形式，例如：

```
>>> a=0b111100
>>> a=60
>>> bin(a)
'0b111100'
>>> oct(a)
'0o74'
>>> hex(a)
'0x3c'
```

疑问解决!

---

刚开始学 python，当想要自增运算的时候很自然的 a++，结果发现编译器是不认识 ++ 的，于是去网上搜了一下，结果发现一篇老外的问答很精彩，涉及到了 python 这个语言的设计原理。
问题无外乎就是 python 没有自增运算符，自增操作是如何实现的。
回答中有人介绍了关于自增操作，python 不使用 ++ 的哲学逻辑：编译解析上的简洁与语言本身的简洁，就不具体翻译了。
后面还有老外回答并附带了一个例子非常的精彩，指出了 python 与 c 语言概念上的一些差异，语言描述的可能未必准确，直接上例子：

```
>>> b = 5  
>>> a = 5  
>>> id(a)  
162334512  
>>> id(b)  
162334512  
>>> a is b  
True
```

可以看出， python 中，变量是以内容为基准而不是像 c 中以变量名为基准，所以只要你的数字内容是5，不管你起什么名字，这个变量的 ID 是相同的，同时也就说明了 python 中一个变量可以以多个名称访问。
这样的设计逻辑决定了 python 中数字类型的值是不可变的，因为如果如上例，a 和 b 都是 5，当你改变了 a 时，b 也会跟着变，这当然不是我们希望的。
因此，正确的自增操作应该 a = a + 1 或者 a += 1，当此 a 自增后，通过 id() 观察可知，id 值变化了，即 a 已经是新值的名称。

---

**纠正一下楼上的一些观点**

楼上的同学所说的在脚本式编程环境中没有问题。但是在交互式环境中，编译器会有一个小整数池的概念，会把（-5，256）间的数预先创建好，而当a和b超过这个范围的时候，两个变量就会指向不同的对象了，因此地址也会不一样，比如下例：

```
>>> a=1000
>>> b=1000
>>> id(a);id(b)
2236612366224
2236617350384
>>>
```

---

位运算，是自己平时最不熟悉的一块，相信很多人也是这样，但巧妙的运用位运算可以来解决很多题目，例如，剑指offer上面的一道：
输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

```
# -*- coding:utf-8 -*-

class Solution:
    def NumberOf1(self, n):
        # write code here
        cnt = 0
        if n<0:
            n = n & 0xffffffff
        while n:
            cnt+=1
            n = (n-1) & n
        return cnt
```

通过按位与，巧妙的计算出二进制中"1"的个数。

---

**is 和 ==**

`is`判断两个变量是否是引用同一个内存地址。
`==` 判断两个变量是否相等。
如果不用 a = b 赋值，int 型时，在数值为  **-5~256（64位系统）** 时，两个变量引用的是同一个内存地址，其他的数值就不是同一个内存地址了。
也就是，a b 在 -5~256（64位系统）时：

```
a = 100
b = 100
a is b # 返回 True
```

其他类型如列表、元祖、字典让 a、b 分别赋值一样的时：

```
a is b  # 返回False
```

---

**== 和 is 的区别**
**is** 判断两个对象是否为同一对象, 是通过 id 来判断的; 当两个基本类型数据(或元组)内容相同时, id 会相同, 但并不代表 a 会随 b 的改变而改变。
**==** 判断两个对象的内容是否相同, 是通过调用 `__eq__()` 来判断的。
1、当列表，元组，字典中的值都引用 a,b 时，总是返回 True，不受 a,b 值大小的影响

```
a=1000
b=1000
list1=[a,3,5]
list2=[b,4,5]
print(list1[0] is list2[0])
tuple1=(a,3,5)
tuple2=(b,4,5)
print(tuple1[0] is tuple2[0])
dict1={6:a,2:3,3:5}
dict2={1:b,2:4,3:7}
print(dict1[6] is dict2[1])
```

输出结果为：

```
True
True
True
```

2、当不引用a,b，直接用具体值来测试时，列表，字典，不受值大小影响，返回True，元组则受 256 值范围的影响，超出范围则地址改变，返回 False。

```
list1=[1000,3,5]
list2=[1000,4,5]
print(list1[0] is list2[0])
tuple1=(1000,3,5)
tuple2=(1000,4,5)
print(tuple1[0] is tuple2[0])
dict1={6:1000,2:3,3:5}
dict2={1:1000,2:4,3:7}
print(dict1[6] is dict2[1])
```

输出结果为：

```
True
False
True
```

3、当直接用列表、元组、字典本身来测试时，刚好相反，元组返回 True，列表，字典返回 False。

```
list1=[1000,3,5]
list2=[1000,3,5]
print(list1 is list2)
tuple1=(1000,3,5)
tuple2=(1000,3,5)
print(tuple1 is tuple2)
dict1={1:1000,2:3,3:5}
dict2={1:1000,2:3,3:5}
print(dict1 is dict2)
```

输出结果为：

```
False
True
False
```

---

**关于 is 和 == 的标识问题**

（1）只要是变量的值相同，标识都相同，没有-5~256的限制，看下面的例子：

```
a = 100000
b = 100000
if a is b:
    print('a 和 b 标识相同，标识为：',id(a))
else:
    print('a 和 b 标识不相同,a 标识为：',id(a),'b 标识为：',id(b))
```

输出结果为：

```
a 和 b 标识相同，标识为： 2158477874512
```

（2）同样的如果是负数，仍然没有上述限制：

```
a = -100000
b = -100000
if a is b:
    print('a 和 b 标识相同，标识为：',id(a))
else:
    print('a 和 b 标识不相同,a 标识为：',id(a),'b 标识为：',id(b))
```

输出结果为：

```
a 和 b 标识相同，标识为： 2137845175632
```

（3）列表也是一样的，只要是列表项数值一样，那么标识也是一样的。例子如下：

```
list1 = [10000,20000,30000]
list2 = [10000,12000,15000]
if list1[0] is list2[0]:
    print('list1[0] 和 list2[0] 标识相同，标识为：',id(list1[0]))
else:
    print('list1[0] 和 list2[0] 标识不相同,list1[0]标识为：',id(list1[0]),'list2[0]标识为：',id(list2[0]))
```

输出结果为：

```
list1[0] 和 list2[0] 标识相同，标识为： 1375086286224
```

（4）元组的标识是跟着变量名的，变量名不一样，标识也不一样，上例子：

```
tuple1 = (10000,20000,30000)
tuple2 = (10000,12000,15000)
if tuple1[0] is tuple2[0]:
    print('tuple1[0] 和 tuple2[0] 标识相同，标识为：',id(tuple1[0]))
else:
    print('tuple1[0] 和 tuple2[0] 标识不相同,tuple1[0] 标识为：',id(tuple1[0]),'tuple2[0]标识为：',id(tuple2[0]))
```

输出结果为：

```
tuple1[0] 和 tuple2[0] 标识不相同,tuple1[0] 标识为： 1375086286384 tuple2[0]标识为： 1375086286480
```

（5）字典和列表是一样的，只要是列表项数值一样，那么标识也是一样的。例子如下：

```
dict1 = {1:10000,2:20000,3:30000}
dict2 = {1:10000,2:12000,3:15000}
if dict1[1] is tuple2[1]:
    print('dict1[1] 和 tuple2[1] 标识相同，标识为：',id(dict1[1]))
else:
    print('dict1[1] 和 tuple2[1] 标识不相同,dict1[1] 标识为：',id(dict1[1]),'tuple2[1] 标识为：',id(dict2[1]))
```

输出结果为：

```
dict1[1] 和 tuple2[1] 标识不相同,dict1[1] 标识为： 1375086286224 tuple2[1] 标识为： 1375086286224
```

---

纠正上面 [beihangld](https://www.runoob.com/python3/python3-basic-operators.html#div-comment-20891) 评论关于“ **整数中 1 的数量** ”问题：由源码分析可知，Python3 整数对象存储为无符号数加上符号位标志，所以不存在“负数”补码形式，因此，计算 “1” 的数量需要按去符号后的无符号数：

```
cnt=bin(n).count('1')
```

另外，Python3 无长整，整数长度原则上不限，所以不能以假定的 32 位处理。

---

深刻理解 and、or 逻辑运算符:

```
print(0 and 1)      # =>0,0等同于False
print(False and 1)  # =>False
print(-1 and 1)     # =>1
print(1 or False)   # =>1,非零等同于True
print(True or False)# =>True
print(-1 or 0)      # =>-1
```

- and：前面为假（0 或者 False）则表达式为假，否则表达式为后面的值；
- or：前面为真（非 0 或者非 False）则表达式为前面的值，否则表达式为后面的值；

优先级：**not>and>or**

```
print(1 and 0 or  not False) #=>True
print( not False or 1 and 0) #=>True
print( 1 or not True and 0)  #=>1
```

---

看了 "is" 和 "==" 的区别，我有了进一步的了解。
**is** 是比较对象是否相同(is 表示对象标识符即 object identity)，即用 id() 函数查看的地址是否相同，如果相同则返回 True，如果不同则返回 False。is 不能被重载。
`==` 是比较两个对象的值是否相等，此操作符内部调用的是 `__eq__()` 方法。所以 a==b 等效于a.__eq__(b)，所以 = 可以被重载。

---

**and or not**

优先级：

```
() > not > and > or
```

**1.or**

在 Python 中，逻辑运算符 or，x or y， 如果 x 为 True 则返回 x，如果 x 为 False 返回 y 值。因为如果 x 为 True 那么 or 运算就不需要在运算了，因为一个为真则为真，所以返回 x 的值。如果 x 的值为假，那么 or 运算的结果取决于 y，所以返回 y 的值。

```
print(1 or 2)   # 1
print(3 or 2)   # 3
print(0 or 2)   # 2
print(0 or 100) # 100
print(0 or 0)
```

**2.and**

在 Python 中，逻辑运算符 and，x and y，如果 x 为 True 则返回 y 值。如果 x 为 False 则返回 x 值。如果 x 的值为 True，and 的运算不会结束，会继续看 y 的值，所以此时真与假取决于 y 的值，所以 x 如果为真，则返回 y 的值。如果 x 为假，那么 and 运算就会结束运算过程了，因为有一个为假则 and 为假，所以返回 x 的值。

```
print(1 and 2)  # 2
print(3 and 0)  # 0
print(0 and 2)  # 0
print(3 and 2)  # 2
print(0 and 0)  # 0
```

**3.混合例子与解析**

按照从左向由，优先级高的先执行优先级高的规则，首先因为比较运算符优先级高于逻辑运算符，很简单，如果运算符低于了逻辑运算符优先级那还如何运算呢。and 优先级大于 or，not 优先级大于 and 和 or。

`not 4 > 5` 为 True
`1 > 2` 为 False
`3 < 2` 为 False
`Flase and 3` 为 False，因为False为假所以and不在运算直接返回False
`4 and False` 为 False，因为 4 为真所以 and 运算符会继续运算后面的，以 False 为主，所以返回 False。
`False or False` 为 False
`False or True` 为 True
`False or False` 为 False，因为 False 为假，所以 or 运算符会继续运算后面的，以 False 为主，所以返回后面的 False 值

---

剑指offer上面的一道：

```
# -*- coding:utf-8 -*-
class Solution:
    # bin函数： bin返回一个整数的二进制字符串，以0b开头，
    # bin(10) '0b1010'  bin(-10)  '-0b1010'
    #
    # count函数 返回字符串当中非重叠的字符串的个数，可以传入start，end来表示对字符串切片的结果
    #
    #如果一个数为负数，那么2**32 + n 然后再用bin返回的就是它的补码形式。 补码+源码=2**32
    def NumberOf1(self, n):
        if n >= 0:
            return bin(n).count('1')
        else:
            return bin(2**32 + n).count('1')
 
if __name__ == '__main__':
    solution = Solution()
    print(solution.NumberOf1(10))
    print(solution.NumberOf1(-10))
```

---

剑指offer上面的一道：

除了使用python内置的bin函数和字符串计数方法count求二进制数据的1的个数外，用自己的表达式求解可如下做：

```
a = 60 #其二进制值为0b00111100
n = 0 #用于计数
while a: #用移位方法求解，直到a移位为0为止
    if a & 1 == 1:
        n += 1 #将a与1进行位与操作，即可知道a的最后1位是否为1，若为1，则计数n增1，不然则无需变化n的值
    a >>= 1 #测试了a的最后一位后，将最后一位右移移除，重新赋值给a
print(n) #打印最后的计数数据
```

以上代码显示n=4，计算正确。

---

回复[@一楼](https://www.runoob.com/python3/python3-basic-operators.html#comment-11012)的疑问：

> 以下假设变量 a 为 10, b为 20: and x and y 布尔"与" - 如果 x 为 False，x and y 返回 False，否则它返回 y 的计算值。 (a and b) 返回 20。

**&、&& 的区别**

- 1、最终结果一样。
- 2、& 无论左边是 false 还是 true，右边都执行。
- 3、&& 具有短路效果，左边是 false, 右边不执行。
- 4、&& 效率更高，项目中推荐使用。

**|、||的区别**

- 1、最终的结果一样。
- 2、|无论左边是false还是true，右边都会执行。
- 3、||具有短路效果，左边是true,右边不执行。
- 4、||效果效率更高，项目中推荐使用。

---

###### 返回 [Python基础知识](../Python基础知识.md)

