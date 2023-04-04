###### 返回 [Python基础知识](../Python基础知识.md)

# Python3 数字(Number)

Python 数字数据类型用于存储数值。
数据类型是不允许改变的,这就意味着如果改变数字数据类型的值，将重新分配内存空间。
以下实例在变量赋值时 Number 对象将被创建：

```
var1 = 1
var2 = 10
```

您也可以使用del语句删除一些数字对象的引用。
del语句的语法是：

```
del var1[,var2[,var3[....,varN]]]
```

您可以通过使用del语句删除单个或多个对象的引用，例如：

```
del var
del var_a, var_b
```

Python 支持三种不同的数值类型：

* **整型(int)** - 通常被称为是整型或整数，是正或负整数，不带小数点。Python3 整型是没有限制大小的，可以当作 Long 类型使用，所以 Python3 没有 Python2 的 Long 类型。布尔(bool)是整型的子类型。
* **浮点型(float)** - 浮点型由整数部分与小数部分组成，浮点型也可以使用科学计数法表示（2.5e2 = 2.5 x 10^2^ = 250）
* **复数( (complex))** - 复数由实数部分和虚数部分构成，可以用a + bj,或者complex(a,b)表示， 复数的实部a和虚部b都是浮点型。

我们可以使用十六进制和八进制来代表整数：

```
>>> number = 0xA0F # 十六进制
>>> number
2575

>>> number=0o37 # 八进制
>>> number
31
```

| int | float | complex |
| ----- | ------- | --------- |
| 10 | 0.0 | 3.14j |
| 100    | 15.20      | 45.j       |
| -786   | -21.9      | 9.322e-36j |
| 080    | 32.3e+18   | .876j      |
| -0490  | -90.       | -.6545+0J  |
| -0x260 | -32.54e100 | 3e+26J     |
| 0x69   | 70.2E-12   | 4.53e-7j   |

## Python 数字类型转换

有时候，我们需要对数据内置的类型进行转换，数据类型的转换，你只需要将数据类型作为函数名即可。

* **int(x)** 将x转换为一个整数。
* **float(x)** 将x转换到一个浮点数。
* **complex(x)** 将x转换到一个复数，实数部分为 x，虚数部分为 0。
* **complex(x, y)** 将 x 和 y 转换到一个复数，实数部分为 x，虚数部分为 y。x 和 y 是数字表达式。

以下实例将浮点数变量 a 转换为整数：

```
>>> a = 1.0
>>> int(a)
1
```

## Python 数字运算

Python 解释器可以作为一个简单的计算器，您可以在解释器里输入一个表达式，它将输出表达式的值。

表达式的语法很直白： `+, -, * 和 /` ， 和其它语言（如Pascal或C）里一样。例如：

```
>>> 2 + 2
4
>>> 50 - 5*6
20
>>> (50 - 5*6) / 4
5.0
>>> 8 / 5  # 总是返回一个浮点数
1.6
```

**注意：** 在不同的机器上浮点运算的结果可能会不一样。

在整数除法中，除法 `/` 总是返回一个浮点数，如果只想得到整数的结果，丢弃可能的分数部分，可以使用运算符 `//` ：

```
>>> 17 / 3  # 整数除法返回浮点型
5.666666666666667
>>>
>>> 17 // 3  # 整数除法返回向下取整后的结果
5
>>> 17 % 3  # ％操作符返回除法的余数
2
>>> 5 * 3 + 2 
17
```

**注意：** `//` 得到的并不一定是整数类型的数，它与分母分子的数据类型有关系。

```
>>> 7//2
3
>>> 7.0//2
3.0
>>> 7//2.0
3.0
>>>
```

等号 `=` 用于给变量赋值。赋值之后，除了下一个提示符，解释器不会显示任何结果。

```
>>> width = 20
>>> height = 5*9
>>> width * height
900
```

Python 可以使用 `**` 操作来进行幂运算：

```
>>> 5 ** 2  # 5 的平方
25
>>> 2 ** 7  # 2的7次方
128
```

变量在使用前必须先"定义"（即赋予变量一个值），否则会出现错误：

```
>>> n   # 尝试访问一个未定义的变量
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'n' is not defined
```

不同类型的数混合运算时会将整数转换为浮点数：

```
>>> 3 * 3.75 / 1.5
7.5
>>> 7.0 / 2
3.5
```

在交互模式中，最后被输出的表达式结果被赋值给变量 `_` 。例如：

```
>>> tax = 12.5 / 100
>>> price = 100.50
>>> price * tax
12.5625
>>> price + _
113.0625
>>> round(_, 2)
113.06
```

此处， `_` 变量应被用户视为只读变量。

## 数学函数

| 函数 | 返回值 ( 描述 ) |
| --- | --- |
| [abs(x)](https://www.runoob.com/python3/python3-func-number-abs.html) | 返回数字的绝对值，如abs(-10) 返回 10 |
| [ceil(x)](https://www.runoob.com/python3/python3-func-number-ceil.html) | 返回数字的上入整数，如math.ceil(4.1) 返回 5 |
| cmp(x,y) | 如果 x < y 返回 -1, 如果 x == y 返回 0, 如果 x > y 返回 1。  Python 3 已废弃，使用 其他公式替换 |
| [exp(x)](https://www.runoob.com/python3/python3-func-number-exp.html) | 返回e的x次幂(e ^x^ ),如math.exp(1) 返回2.718281828459045 |
| [fabs(x)](https://www.runoob.com/python3/python3-func-number-fabs.html) | 返回数字的绝对值，如math.fabs(-10) 返回10.0 |
| [floor(x)](https://www.runoob.com/python3/python3-func-number-floor.html) | 返回数字的下舍整数，如math.floor(4.9)返回 4 |
| [log(x)](https://www.runoob.com/python3/python3-func-number-log.html) | 如math.log(math.e)返回1.0,math.log(100,10)返回2.0 |
| [log10(x)](https://www.runoob.com/python3/python3-func-number-log10.html) | 返回以10为基数的x的对数，如math.log10(100)返回 2.0 |
| [max(x1, x2,...)](https://www.runoob.com/python3/python3-func-number-max.html) | 返回给定参数的最大值，参数可以为序列。 |
| [min(x1, x2,...)](https://www.runoob.com/python3/python3-func-number-min.html) | 返回给定参数的最小值，参数可以为序列。 |
| [modf(x)](https://www.runoob.com/python3/python3-func-number-modf.html) | 返回x的整数部分与小数部分，两部分的数值符号与x相同，整数部分以浮点型表示。 |
| [pow(x, y)](https://www.runoob.com/python3/python3-func-number-pow.html) | x**y 运算后的值。 |
| [round(x [,n])](https://www.runoob.com/python3/python3-func-number-round.html) | 返回浮点数 x 的四舍五入值，如给出 n 值，则代表舍入到小数点后的位数。  **其实准确的说是保留值将保留到离上一位更近的一端。** |
| [sqrt(x)](https://www.runoob.com/python3/python3-func-number-sqrt.html) | 返回数字x的平方根。 |

## 随机数函数

随机数可以用于数学，游戏，安全等领域中，还经常被嵌入到算法中，用以提高算法效率，并提高程序的安全性。
Python包含以下常用随机数函数：

| 函数 | 描述 |
| ------ | ------ |
| [choice(seq)](https://www.runoob.com/python3/python3-func-number-choice.html) |从序列的元素中随机挑选一个元素，比如random.choice(range(10))，从0到9中随机挑选一个整数。 |
| [randrange([start,] stop [,step])](https://www.runoob.com/python3/python3-func-number-randrange.html) | 从指定范围内，按指定基数递增的集合中获取一个随机数，基数默认值为 1 |
| [random()](https://www.runoob.com/python3/python3-func-number-random.html) | 随机生成下一个实数，它在[0,1)范围内。 |
| [seed([x])](https://www.runoob.com/python3/python3-func-number-seed.html) | 改变随机数生成器的种子seed。如果你不了解其原理，你不必特别去设定seed，Python会帮你选择seed。 |
| [shuffle(lst)](https://www.runoob.com/python3/python3-func-number-shuffle.html) | 将序列的所有元素随机排序 |
| [uniform(x, y)](https://www.runoob.com/python3/python3-func-number-uniform.html) | 随机生成下一个实数，它在[x,y]范围内。 |

## 三角函数

Python包括以下三角函数：

| 函数 | 描述 |
| ------ | ------ |
| [acos(x)](https://www.runoob.com/python3/python3-func-number-acos.html) | 返回x的反余弦弧度值。 |
| [asin(x)](https://www.runoob.com/python3/python3-func-number-asin.html) | 返回x的反正弦弧度值。 |
| [atan(x)](https://www.runoob.com/python3/python3-func-number-atan.html) | 返回x的反正切弧度值。 |
| [atan2(y, x)](https://www.runoob.com/python3/python3-func-number-atan2.html) | 返回给定的 X 及 Y 坐标值的反正切值。 |
| [cos(x)](https://www.runoob.com/python3/python3-func-number-cos.html) | 返回x的弧度的余弦值。 |
| [hypot(x, y)](https://www.runoob.com/python3/python3-func-number-hypot.html) | 返回欧几里德范数 sqrt(x*x + y*y)。 |
| [sin(x)](https://www.runoob.com/python3/python3-func-number-sin.html) | 返回的x弧度的正弦值。 |
| [tan(x)](https://www.runoob.com/python3/python3-func-number-tan.html) | 返回x弧度的正切值。 |
| [degrees(x)](https://www.runoob.com/python3/python3-func-number-degrees.html) | 将弧度转换为角度,如degrees(math.pi/2) ， 返回90.0 |
| [radians(x)](https://www.runoob.com/python3/python3-func-number-radians.html) | 将角度转换为弧度 |

## 数学常量

| 常量 | 描述 |
| ------ | ------ |
| pi | 数学常量 pi（圆周率，一般以π来表示） |
| e | 数学常量 e，e即自然常数（自然常数）。 |

# 读者笔记

文中对于 `_` 提到，它代表了上一次的输出结果，**"用户应该将其视为只读变量"**，实际情况是你也可以对于 `_` 赋值，`_=10` 是没有毛病的，但这样的结果会导致你在之后调用 `_` 的时候全部变成了10，除非你 `del _` 。

**对于round:**

```
>>> round(10.5)
10
>>> round(11.5)
12
>>>
```

**Python 所谓的奇进偶弃，因为浮点数的表示在计算机中并不准确，用的时候可能要注意一下。**
**还可以参考这篇文章: [Python 中关于 round 函数的小坑](http://w3cnote/python-round-func-note.html)**

---

python 不支持复数转换为整数或浮点数

```
>>> float(4.5+0j)
Traceback (most recent call last):
  File "<pyshell#5>", line 1, in <module>
    float(4.5+0j)
TypeError: can't convert complex to float

>>> int(4+0j)
Traceback (most recent call last):
  File "<pyshell#6>", line 1, in <module>
    int(4+0j)
TypeError: can't convert complex to int
>>>
```

随机数函数中缺少 **randint,sample**
**random.randint(x,y)**　#随机生一个整数int类型，可以指定这个整数的范围
实例

```
>>> random.randint(1000,9999)
8449
```

`random.sample(sequence,length)` 可以从指定的序列中，随机的截取指定长度的片断，不修改原序列。

实例

```
>>> lst = random.sample('abcd1234',4)
>>> strs = ''.join(lst)
>>> strs
'a432'
>>>
```

---

由于上面大神的提出，我又看了一下

```
print(round(10.4)) #10
print(round(10.5)) #10
print(round(10.6)) #11
print()
print(round(11.4)) #11
print(round(11.5)) #12
print(round(11.6)) #12
```

由运行得出结论：

- 当小数点左边为偶数：小数点右边X<6，舍
- 当小数点左边为偶数：小数点右边X>=6，入
- 当小数点左边为奇数：小数点右边X<5，舍
- 当小数点左边为奇数：小数点右边X>=5，入

所以当小数点左边分别为奇数和偶数的时候，小数点右边的取舍也分别对应两种取舍标准
这是个坑啊！不知道小数点后两位是怎样的，有兴趣的小伙伴可以试一下，记得@我，谢谢！

---

关于round,接力分析，结论如下：
当个位为奇数，小数部分>=0.5入，其余为舍
当个位为偶数，小数部分>0.5入，其余为舍。
交互模式下的 example:

```
>>> round(10.49)
10
>>> round(10.50)
10
>>> round(10.51)
11
>>> round(11.50)
12
>>> round(11.49)
11
```

---

“4舍6入5看齐,奇进偶不进”我觉得并不是因为浮点数在计算机表示的问题。计算机浮点数的表示是 ieee 定义的标准规则，如果 python 中存在，没道理其他语言中不存在。事实上是因为该取舍方法比过去的 "四舍五入" 方法在科学计算中更准确。而国家标准也已经规定使用 “4舍6入5看齐,奇进偶不进” 取代"四舍五入".
从统计学的角度上来讲,如果大量数据无脑的采用四舍五入会造成统计结果偏大。而"奇进偶舍"可以将舍入误差降到最低。
奇进偶舍是一种比较精确比较科学的计数保留法，是一种数字修约规则。
其具体要求如下（以保留两位小数为例）：

- （1）要求保留位数的后一位如果是4或者4以下的数字，则舍去， 例如 5.214保留两位小数为5.21。
- （2）如果保留位数的后一位如果是6或者6以上的数字，则进上去， 例如5.216保留两位小数为5.22。
- （3）如果保留位数是保留整数部分或保留一位小数，则要根据保留位来决定奇进偶舍：

```
>>> round(5.215,2)#实际并没有进位
5.21
>>> round(5.225,2)
5.22
>>>
>>> round(1.5)#此处进位
2
>>> round(1.5)==round(2.5)#偶数舍去
True
>>> round(1.15,1)
1.1
>>> round(1.25,1)
1.2
>>> round(1.151,1)
1.2
>>> round(1.251,1)
1.3
```

- (4) 如果保留位数的后一位如果是5，且该位数后有数字。则进上去，例如5.2152保留两位小数为5.22，5.2252保留两位小数为5.23，5.22500001保留两位小数为5.23。

从统计学的角度，“奇进偶舍”比“四舍五入”要科学，在大量运算时，它使舍入后的结果误差的均值趋于零，而不是像四舍五入那样逢五就入，导致结果偏向大数，使得误差产生积累进而产生系统误差，“奇进偶舍”使测量结果受到舍入误差的影响降到最低。

---

针对前面有人提到复数不能强转为int或者float的问题：
其实在Python中，复数提供了2个函数，一个函数是real，返回复数的实数部分，另一个函数是imag，返回复数的虚数部分。因为实数跟复数是差异很大的类型，所以不支持强制转换是可以理解的。因为在强制转换过程中，虚数部分到底该怎么转换，是没有定义的，而int和float只有实数部分，虚数部分该如何取舍？

```
>>> a = 4.1+0.3j
>>> a
(4.1+0.3j)
>>> a.real
4.1
>>> a.imag
0.3
```

---

Python3中已经不能使用cmp()函数了，被如下五个函数替代:

```
import operator       #首先要导入运算符模块

operator.gt(1,2)      #意思是greater than（大于）
operator.ge(1,2)      #意思是greater and equal（大于等于）
operator.eq(1,2)      #意思是equal（等于）
operator.le(1,2)      #意思是less and equal（小于等于）
operator.lt(1,2)      #意思是less than（小于）
```

---

fractions 模块提供了分数类型的支持。
构造函数：

```
class fractions.Fraction(numerator=0, denominator=1) 
class fractions.Fraction(int|float|str|Decimal|Fraction)
```

可以同时提供分子（numerator）和分母（denominator）给构造函数用于实例化Fraction类，但两者必须同时是int类型或者numbers.Rational类型，否则会抛出类型错误。当分母为0，初始化的时候会导致抛出异常ZeroDivisionError。
**分数类型：**

```
from fractions import Fraction

>>> x=Fraction(1,3)
>>> y=Fraction(4,6)
>>> x+y
Fraction(1, 1)

>>> Fraction('.25') 
Fraction(1, 4)
```

**浮点数与分数的转换：**

```
>>> f=2.5
>>> z=Fraction(*f.as_integer_ratio())
>>> z
Fraction(5, 2)
>>> x=Fraction(1,3)
>>> float(x)
0.3333333333333333
>>>
```

---

小数对象:
decimal 模块提供了一个 Decimal 数据类型用于浮点数计算，拥有更高的精度。

```
>>> import decimal
>>> decimal.getcontext().prec=4              # 指定精度（4位小数）
>>> decimal.Decimal(1) / decimal.Decimal(7)
Decimal('0.1429')
>>> with decimal.localcontext() as ctx:      # 小数上下文管理器
...     ctx.prec=2
...     decimal.Decimal('1.00') / decimal.Decimal('3.00')
... 
Decimal('0.33')
>>>
```

---

**关于Python整数比较的一些坑：**

Python中一切都是对象，对象比较可以用 `==` 或者 `is` 。
`==` 比较的是两个对象的内容是否相等，默认会调用对象的 `__eq__()` 方法。
`is` 比较的是两个对象的 id 是否相等，也就是是否是同一个对象，是否指向同一个内存地址。

```
>>> a = 4
>>> b = 4
>>> a == b
True
>>> a is b
True
>>> a = 256
>>> b = 256
>>> a == b
True
>>> a is b
True
>>> a = 257
>>> b = 257
>>> a == b
True
>>> a is b
False
```

我们看到，前几组比较我们都可以理解显示的结果，但是最后当 a/b 都指向 257 这个整数对象的时候，用 is 比较以后的结果是 False。
这是因为 Python 处于对性能的考虑，内部作了优化，对于整数对象，把一些频繁使用的整数对象缓存起来，保存到一个叫 **small_ints** 的链表中。
在 Python 整个生命周期中，任何需要引用这些整数对象的地方，都不再重新创建新的整数对象，范围是 `[-5,256]`。
再看下面这个例子 ：

```
>>> a = 259
>>> def foo () :
...     b = 259
...     c = 259
...     print(a is b)
...     print(b is c)
...
>>> foo()
False
True
```

这是因为 Python 程序都是由代码块构成，代码块作为程序的一个最小基本单位来执行。一个模块文件/一个函数体/一个类/交互式命令中的单行代码都叫做一个代码块。
上面的程序中有两部分代码块，一个是名称 a 所在的代码块，一个是名称 b/c 所在的代码块。Python 的另一个优化的地方就是，如果在同一个代码块中创建的两个整数对象中，它们的值相等的话，那么这两个对象引用同一个整数对象。
所以Python出于对性能的考虑，但凡是不可变的对象，在同一代码块中，只有值相等的对象就不会重复创建，而是直接引用已经存在的对象。不仅整数对象，字符串对象也遵循同样的原则。

---

有时候在编写程序的时候会用到进制转换，通常学校里面教的都是取余的方法其实有更加简便的方法，这里给大家分享一下。
二进制&十六进制转换表：

```
十六进制   0     1     2     3     4     5     6     7 
二进制   0000  0001  0010  0011  0100  0101  0110  0111
十进制     0     1     2     3     4     5     6     7
```

```
十六进制   8     9     A     B     C     D     E     F 
二进制   1000  1001  1010  1011  1100  1101  1110  1111
十进制     8     9     10    11    12    13    14    15
```

把这个表牢牢记住！然后用下面的方法转换，会有很高的效率。
转换方法：
取四合一法：从二进制小数点为分隔符，向左或向右每四位二进制合为一位十六进制。例子：

```
1011| 1001 |1011.1001
  B     9     B .  9
```

那最后的结果就是: **b9b.9**

```
注意：换算时不足四位的情况，可以向左或向右补0。
```

---

关于小数的四舍五入问题与电脑的二进制和十进制之间转换问题，这不仅是出现在小数上，也出现在一些除法上，例如：
**10/3=3.3333333333333335** 而不是约等于  **3.3333……** :

```
>>> 10/3
3.3333333333333335
```

还有就是 `0.1+0.1+0.1-0.3` 不会等于  **0** ，而是等于  **5.551115123125783e-17** :

```
>>> 0.1+0.1+0.1-0.3
5.551115123125783e-17
```

---

补充上面关于 `cmp()` 函数的问题，官方文档中有如下描述： ( **If you really need the cmp() functionality, you could use the expression (a > b) - (a < b) as the equivalent for cmp(a,b).** )
补充上面关于round()函数的问题，注意下面例子：

```
>>> round(1.05,1)
1.1
>>> round(1.15,1)
1.1
>>> round(1.55,1)
1.6
>>> round(2.05,1)
2.0
>>> round(2.15,1)
2.1
>>> round(2.55,1)
2.5
```

官方的解释是：这不是bug，而事关浮点数存储：

```
>>> from decimal import Decimal
>>> Decimal.from_float(1.05)
Decimal('1.0500000000000000444089209850062616169452667236328125')
>>> Decimal.from_float(1.15)
Decimal('1.149999999999999911182158029987476766109466552734375')
>>> Decimal.from_float(1.55)
Decimal('1.5500000000000000444089209850062616169452667236328125')
>>> Decimal.from_float(2.05)
Decimal('2.04999999999999982236431605997495353221893310546875')
>>> Decimal.from_float(2.15)
Decimal('2.149999999999999911182158029987476766109466552734375')
>>> Decimal.from_float(2.55)
Decimal('2.54999999999999982236431605997495353221893310546875')
```

尽量避免使用round()。

---

**数字与字符，列表之间的转换**
1、字符转为数字

```
var='1234'
num=int(var) # 如果是小数可用 float
```

2、字符转为列表

```
num_list=list(var)
```

3、列表转为数组
可以用 numpy 模块：

```
import numpy as np

num_array=np.array(num_list)
```

也可以是 `num_array=[int(i) for i in num_list]` 。

---

一定要注意 **+=** 和 **=+** 的不同。
实例 1：

```
>>> a = 5
>>> a += 6
>>> a
11
```

以上实例与下面实例的效果一样：

```
>>> a = 5
>>> a = a + 6
>>> a
11
```

实例2：

```
>>> b = 5
>>> b =+ 6
>>> b
6
```

为什么会是 6 而不是 11 呢? 因为实例2与下面代码一样：

```
>>> b = 5
>>> b = +6  # 其实就是正数，只是一个赋值操作，+ 6 即为 +6，+6 为 6
>>> b
6
```

一定要分清 += 和 =+ 哦！另外要注意 Python 可是没有 a++ 指令的！

---

其实准确的进位规则是二进制浮点数的:

```
>>> round(1.5,0) # 1.5d -> 0x3FF8000000000000 -> 1.5, 按照5后为0处理，奇进偶不进
2.0
>>> round(2.5,0) # 2.5 -> 0x4004000000000000 -> 2.5,  按照5后为0处理，奇进偶不进
2.0
>>> round(1.15,1) #1.15 ->0x3FF2666666666666 -> 1.14999999999999991118215802999 按照4处理，退位
1.1
>>> round(1.25,1) # 1.25 ->0x3FF4000000000000 ->1.25 同2.5退位
1.2
>>>
```

可以认为进位首先计算的是与整数间的差距，如果差距相等，才会出现奇进偶不进。注意其中1.15由于进制问题到1.1和1.2距离不同，所以不是十进制的round结果。

```
>>> abs(1.25-1.2)==abs(1.25-1.2)
True
>>> abs(1.15-1.2)==abs(1.15-1.1)
False
```

---

###### 返回 [Python基础知识](../Python基础知识.md)

