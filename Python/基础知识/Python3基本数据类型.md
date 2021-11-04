###### 返回 [Python基础知识](../Python基础知识.md)

# Python3 基本数据类型

Python 中的变量不需要声明。每个变量在使用前都必须赋值，变量赋值以后该变量才会被创建。
在 Python 中，变量就是变量，它没有类型，我们所说的"类型"是变量所指的内存中对象的类型。
等号（=）用来给变量赋值。
等号（=）运算符左边是一个变量名,等号（=）运算符右边是存储在变量中的值。例如：

```
#!/usr/bin/python3

counter = 100          # 整型变量
miles   = 1000.0       # 浮点型变量
name    = "runoob"     # 字符串

print (counter)
print (miles)
print (name)
```

执行以上程序会输出如下结果：

```
100
1000.0
runoob
```

### 多个变量赋值

Python允许你同时为多个变量赋值。例如：

```
a = b = c = 1
```

以上实例，创建一个整型对象，值为 1，从后向前赋值，三个变量被赋予相同的数值。
您也可以为多个对象指定多个变量。例如：

```
a, b, c = 1, 2, "runoob"
```

以上实例，两个整型对象 1 和 2 的分配给变量 a 和 b，字符串对象 "runoob" 分配给变量 c。

## 标准数据类型

Python3 中有六个标准的数据类型：

* Number（数字）
* String（字符串）
* List（列表）
* Tuple（元组）
* Set（集合）
* Dictionary（字典）

Python3 的六个标准数据类型中：

* **不可变数据（3 个）：** Number（数字）、String（字符串）、Tuple（元组）；
* **可变数据（3 个）：** List（列表）、Dictionary（字典）、Set（集合）。

## Number（数字）

Python3 支持  **int、float、bool、complex（复数）** 。
在Python 3里，只有一种整数类型 int，表示为长整型，没有 python2 中的 Long。
像大多数语言一样，数值类型的赋值和计算都是很直观的。
内置的 type() 函数可以用来查询变量所指的对象类型。

```
>>> a, b, c, d = 20, 5.5, True, 4+3j
>>> print(type(a), type(b), type(c), type(d))
<class 'int'> <class 'float'> <class 'bool'> <class 'complex'>
```

此外还可以用 isinstance 来判断：

```
>>> a = 111
>>> isinstance(a, int)
True
>>>
```

isinstance 和 type 的区别在于：

* type()不会认为子类是一种父类类型。
* isinstance()会认为子类是一种父类类型。

```
>>> class A:
...     pass
... 
>>> class B(A):
...     pass
... 
>>> isinstance(A(), A)
True
>>> type(A()) == A 
True
>>> isinstance(B(), A)
True
>>> type(B()) == A
False
```

**注意：** Python3 中，bool 是 int 的子类，True 和 False 可以和数字相加， `True==1、False==0` 会返回  **True** ，但可以通过 `is` 来判断类型。

```
>>> issubclass(bool, int) 
True
>>> True==1
True
>>> False==0
True
>>> True+1
2
>>> False+1
1
>>> 1 is True
False
>>> 0 is False
False
```

在 Python2 中是没有布尔型的，它用数字 0 表示 False，用 1 表示 True。

当你指定一个值时，Number 对象就会被创建：

```
var1 = 1
var2 = 10
```

您也可以使用del语句删除一些对象引用。
del语句的语法是：

```
del var1[,var2[,var3[....,varN]]]
```

您可以通过使用del语句删除单个或多个对象。例如：

```
del var
del var_a, var_b
```

### 数值运算

```
>>> 5 + 4  # 加法
9
>>> 4.3 - 2 # 减法
2.3
>>> 3 * 7  # 乘法
21
>>> 2 / 4  # 除法，得到一个浮点数
0.5
>>> 2 // 4 # 除法，得到一个整数
0
>>> 17 % 3 # 取余
2
>>> 2 ** 5 # 乘方
32
```

**注意：**

* 1、Python可以同时为多个变量赋值，如a, b = 1, 2。
* 2、一个变量可以通过赋值指向不同类型的对象。
* 3、数值的除法包含两个运算符：`/` 返回一个浮点数，`//` 返回一个整数。
* 4、在混合计算时，Python会把整型转换成为浮点数。

### 数值类型实例

| int    | float      | complex    |
| :-------- | :------------ | :------------ |
| 10     | 0.0        | 3.14j      |
| 100    | 15.20      | 45.j       |
| -786   | -21.9      | 9.322e-36j |
| 080    | 32.3e+18   | .876j      |
| -0490  | -90.       | -.6545+0J  |
| -0x260 | -32.54e100 | 3e+26J     |
| 0x69   | 70.2E-12   | 4.53e-7j   |

Python还支持复数，复数由实数部分和虚数部分构成，可以用a + bj,或者complex(a,b)表示， 复数的实部a和虚部b都是浮点型

## String（字符串）

Python中的字符串用单引号 `'` 或双引号 `"` 括起来，同时使用反斜杠 `\` 转义特殊字符。
字符串的截取的语法格式如下：

```
变量[头下标:尾下标]
```

索引值以 0 为开始值，-1 为从末尾的开始位置。
加号 `+` 是字符串的连接符， 星号 `*` 表示复制当前字符串，与之结合的数字为复制的次数。实例如下：

```
#!/usr/bin/python3

str = 'Runoob'

print (str)          # 输出字符串
print (str[0:-1])    # 输出第一个到倒数第二个的所有字符
print (str[0])       # 输出字符串第一个字符
print (str[2:5])     # 输出从第三个开始到第五个的字符
print (str[2:])      # 输出从第三个开始的后的所有字符
print (str * 2)      # 输出字符串两次，也可以写成 print (2 * str)
print (str + "TEST") # 连接字符串
```

执行以上程序会输出如下结果：

```
Runoob
Runoo
R
noo
noob
RunoobRunoob
RunoobTEST
```

Python 使用反斜杠 `\` 转义特殊字符，如果你不想让反斜杠发生转义，可以在字符串前面添加一个 `r`，表示原始字符串：

```
>>> print('Ru\noob')
Ru
oob
>>> print(r'Ru\noob')
Ru\noob
>>>
```

另外，反斜杠(\)可以作为续行符，表示下一行是上一行的延续。也可以使用 **"""..."""** 或者 **'''...'''** 跨越多行。
注意，Python 没有单独的字符类型，一个字符就是长度为1的字符串。

```
>>> word = 'Python'
>>> print(word[0], word[5])
P n
>>> print(word[-1], word[-6])
n P
```

与 C 字符串不同的是，Python 字符串不能被改变。向一个索引位置赋值，比如word[0] = 'm'会导致错误。
**注意：**

* 1、反斜杠可以用来转义，使用r可以让反斜杠不发生转义。
* 2、字符串可以用+运算符连接在一起，用*运算符重复。
* 3、Python中的字符串有两种索引方式，从左往右以0开始，从右往左以-1开始。
* 4、Python中的字符串不能改变。

## List（列表）

List（列表） 是 Python 中使用最频繁的数据类型。
列表可以完成大多数集合类的数据结构实现。列表中元素的类型可以不相同，它支持数字，字符串甚至可以包含列表（所谓嵌套）。
列表是写在方括号 `[]` 之间、用逗号分隔开的元素列表。
和字符串一样，列表同样可以被索引和截取，列表被截取后返回一个包含所需元素的新列表。
列表截取的语法格式如下：

```
变量[头下标:尾下标]
```

索引值以 `0` 为开始值，`-1` 为从末尾的开始位置。
加号 `+` 是列表连接运算符，星号 `*` 是重复操作。如下实例：

```
#!/usr/bin/python3

list = [ 'abcd', 786 , 2.23, 'runoob', 70.2 ]
tinylist = [123, 'runoob']

print (list)            # 输出完整列表
print (list[0])         # 输出列表第一个元素
print (list[1:3])       # 从第二个开始输出到第三个元素
print (list[2:])        # 输出从第三个元素开始的所有元素
print (tinylist * 2)    # 输出两次列表
print (list + tinylist) # 连接列表
```

以上实例输出结果：

```
['abcd', 786, 2.23, 'runoob', 70.2]
abcd
[786, 2.23]
[2.23, 'runoob', 70.2]
[123, 'runoob', 123, 'runoob']
['abcd', 786, 2.23, 'runoob', 70.2, 123, 'runoob']
```

与Python字符串不一样的是，列表中的元素是可以改变的：

```
>>> a = [1, 2, 3, 4, 5, 6]
>>> a[0] = 9
>>> a[2:5] = [13, 14, 15]
>>> a
[9, 2, 13, 14, 15, 6]
>>> a[2:5] = []   # 将对应的元素值设置为 []
>>> a
[9, 2, 6]
```

List 内置了有很多方法，例如 append()、pop() 等等，这在后面会讲到。
**注意：**

* 1、List写在方括号之间，元素用逗号隔开。
* 2、和字符串一样，list可以被索引和切片。
* 3、List可以使用+操作符进行拼接。
* 4、List中的元素是可以改变的。

Python 列表截取可以接收第三个参数，参数作用是截取的步长，以下实例在索引 1 到索引 4 的位置并设置为步长为 2（间隔一个位置）来截取字符串：
![](https://www.runoob.com/wp-content/uploads/2014/08/py-dict-1.png)

如果第三个参数为负数表示逆向读取，以下实例用于翻转字符串：

```
def reverseWords(input):
     
    # 通过空格将字符串分隔符，把各个单词分隔为列表
    inputWords = input.split(" ")
 
    # 翻转字符串
    # 假设列表 list = [1,2,3,4],  
    # list[0]=1, list[1]=2 ，而 -1 表示最后一个元素 list[-1]=4 ( 与 list[3]=4 一样)
    # inputWords[-1::-1] 有三个参数
    # 第一个参数 -1 表示最后一个元素
    # 第二个参数为空，表示移动到列表末尾
    # 第三个参数为步长，-1 表示逆向
    inputWords=inputWords[-1::-1]
 
    # 重新组合字符串
    output = ' '.join(inputWords)
     
    return output
 
if __name__ == "__main__":
    input = 'I like runoob'
    rw = reverseWords(input)
    print(rw)
```

输出结果为：

```
runoob like I
```

## Tuple（元组）

元组（tuple）与列表类似，不同之处在于元组的元素不能修改。元组写在小括号 `()` 里，元素之间用逗号隔开。
元组中的元素类型也可以不相同：

```
#!/usr/bin/python3

tuple = ( 'abcd', 786 , 2.23, 'runoob', 70.2  )
tinytuple = (123, 'runoob')

print (tuple)             # 输出完整元组
print (tuple[0])          # 输出元组的第一个元素
print (tuple[1:3])        # 输出从第二个元素开始到第三个元素
print (tuple[2:])         # 输出从第三个元素开始的所有元素
print (tinytuple * 2)     # 输出两次元组
print (tuple + tinytuple) # 连接元组
```

以上实例输出结果：

```
('abcd', 786, 2.23, 'runoob', 70.2)
abcd
(786, 2.23)
(2.23, 'runoob', 70.2)
(123, 'runoob', 123, 'runoob')
('abcd', 786, 2.23, 'runoob', 70.2, 123, 'runoob')
```

元组与字符串类似，可以被索引且下标索引从0开始，-1 为从末尾开始的位置。也可以进行截取（看上面，这里不再赘述）。
其实，可以把字符串看作一种特殊的元组。

```
>>> tup = (1, 2, 3, 4, 5, 6)
>>> print(tup[0])
1
>>> print(tup[1:5])
(2, 3, 4, 5)
>>> tup[0] = 11  # 修改元组元素的操作是非法的
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
>>>
```

虽然tuple的元素不可改变，但它可以包含可变的对象，比如list列表。
构造包含 0 个或 1 个元素的元组比较特殊，所以有一些额外的语法规则：

```
tup1 = ()    # 空元组
tup2 = (20,) # 一个元素，需要在元素后添加逗号
```

string、list 和 tuple 都属于 sequence（序列）。
**注意：**

* 1、与字符串一样，元组的元素不能修改。
* 2、元组也可以被索引和切片，方法一样。
* 3、注意构造包含 0 或 1 个元素的元组的特殊语法规则。
* 4、元组也可以使用+操作符进行拼接。

## Set（集合）

集合（set）是由一个或数个形态各异的大小整体组成的，构成集合的事物或对象称作元素或是成员。
基本功能是进行成员关系测试和删除重复元素。
可以使用大括号 `{ }` 或者 `set()` 函数创建集合，注意：创建一个空集合必须用 `set()` 而不是 `{ }`，因为 `{ }` 是用来创建一个空字典。
创建格式：

```
parame = {value01,value02,...}
或者
set(value)
```

```
#!/usr/bin/python3

sites = {'Google', 'Taobao', 'Runoob', 'Facebook', 'Zhihu', 'Baidu'}

print(sites)   # 输出集合，重复的元素被自动去掉

# 成员测试
if 'Runoob' in sites :
    print('Runoob 在集合中')
else :
    print('Runoob 不在集合中')


# set可以进行集合运算
a = set('abracadabra')
b = set('alacazam')

print(a)

print(a - b)     # a 和 b 的差集

print(a | b)     # a 和 b 的并集

print(a & b)     # a 和 b 的交集

print(a ^ b)     # a 和 b 中不同时存在的元素
```

以上实例输出结果：

```
{'Zhihu', 'Baidu', 'Taobao', 'Runoob', 'Google', 'Facebook'}
Runoob 在集合中
{'b', 'c', 'a', 'r', 'd'}
{'r', 'b', 'd'}
{'b', 'c', 'a', 'z', 'm', 'r', 'l', 'd'}
{'c', 'a'}
{'z', 'b', 'm', 'r', 'l', 'd'}
```

## Dictionary（字典）

字典（dictionary）是Python中另一个非常有用的内置数据类型。
列表是有序的对象集合，字典是无序的对象集合。两者之间的区别在于：字典当中的元素是通过键来存取的，而不是通过偏移存取。
字典是一种映射类型，字典用 `{ }` 标识，它是一个无序的 **键(key) : 值(value)** 的集合。
键(key)必须使用不可变类型。
在同一个字典中，键(key)必须是唯一的。

```
#!/usr/bin/python3

dict = {}
dict['one'] = "1 - 菜鸟教程"
dict[2]     = "2 - 菜鸟工具"

tinydict = {'name': 'runoob','code':1, 'site': 'www.runoob.com'}


print (dict['one'])       # 输出键为 'one' 的值
print (dict[2])           # 输出键为 2 的值
print (tinydict)          # 输出完整的字典
print (tinydict.keys())   # 输出所有键
print (tinydict.values()) # 输出所有值
```

以上实例输出结果：

```
1 - 菜鸟教程
2 - 菜鸟工具
{'name': 'runoob', 'code': 1, 'site': 'www.runoob.com'}
dict_keys(['name', 'code', 'site'])
dict_values(['runoob', 1, 'www.runoob.com'])
```

构造函数 dict() 可以直接从键值对序列中构建字典如下：

```
>>> dict([('Runoob', 1), ('Google', 2), ('Taobao', 3)])
{'Runoob': 1, 'Google': 2, 'Taobao': 3}
>>> {x: x**2 for x in (2, 4, 6)}
{2: 4, 4: 16, 6: 36}
>>> dict(Runoob=1, Google=2, Taobao=3)
{'Runoob': 1, 'Google': 2, 'Taobao': 3}
>>>
```

另外，字典类型也有一些内置的函数，例如clear()、keys()、values()等。
**注意：**

* 1、字典是一种映射类型，它的元素是键值对。
* 2、字典的关键字必须为不可变类型，且不能重复。
* 3、创建空字典使用  `{ }` 。

## Python数据类型转换

有时候，我们需要对数据内置的类型进行转换，数据类型的转换，你只需要将数据类型作为函数名即可。
以下几个内置的函数可以执行数据类型之间的转换。这些函数返回一个新的对象，表示转换的值。

| 函数                                                                          | 描述                                                |
| :--- | :--- |
| [int(x [,base])](https://www.runoob.com/python3/python-func-int.html)            | 将x转换为一个整数                                   |
| [float(x)](https://www.runoob.com/python3/python-func-float.html)                | 将x转换到一个浮点数                                 |
| [complex(real [,imag])](https://www.runoob.com/python3/python-func-complex.html) | 创建一个复数                                        |
| [str(x)](https://www.runoob.com/python3/python-func-str.html)                    | 将对象 x 转换为字符串                               |
| [repr(x)](https://www.runoob.com/python3/python-func-repr.html)                  | 将对象 x 转换为表达式字符串                         |
| [eval(str)](https://www.runoob.com/python3/python-func-eval.html)                | 用来计算在字符串中的有效Python表达式,并返回一个对象 |
| [tuple(s)](https://www.runoob.com/python3/python3-func-tuple.html)               | 将序列 s 转换为一个元组                             |
| [list(s)](https://www.runoob.com/python3/python3-att-list-list.html)             | 将序列 s 转换为一个列表                             |
| [set(s)](https://www.runoob.com/python3/python-func-set.html)                    | 转换为可变集合                                      |
| [dict(d)](https://www.runoob.com/python3/python-func-dict.html)                  | 创建一个字典。d 必须是一个 (key, value)元组序列。   |
| [frozenset(s)](https://www.runoob.com/python3/python-func-frozenset.html)        | 转换为不可变集合                                    |
| [chr(x)](https://www.runoob.com/python3/python-func-chr.html)                    | 将一个整数转换为一个字符                            |
| [ord(x)](https://www.runoob.com/python3/python-func-ord.html)                    | 将一个字符转换为它的整数值                          |
| [hex(x)](https://www.runoob.com/python3/python-func-hex.html)                    | 将一个整数转换为一个十六进制字符串                  |
| [oct(x)](https://www.runoob.com/python3/python-func-oct.html)                    | 将一个整数转换为一个八进制字符串                    |


# 读者笔记

###### 元组（小拓展）

一般来说，函数的返回值一般为一个。
而函数返回多个值的时候，是以元组的方式返回的。
示例（命令行下）：

```
>>>def example(a,b):
...     return (a,b)
...
>>>type(example(3,4))
<class 'tuple'>
>>>
```

python中的函数还可以接收可变长参数，比如以 "*" 开头的的参数名，会将所有的参数收集到一个元组上。
例如：

```
def test(*args):
    print(args)
    return args

print(type(test(1,2,3,4)))    #可以看见其函数的返回值是一个元组
```

###### 字典（小拓展）

python中的字典是使用了一个称为散列表（hashtable）的算法（不具体展开），
其特点就是：不管字典中有多少项，in操作符花费的时间都差不多。
如果把一个字典对象作为for的迭代对象，那么这个操作将会遍历字典的键：

```
def example(d):
    # d 是一个字典对象
    for c in d:
        print(c)
        #如果调用函数试试的话，会发现函数会将d的所有键打印出来;
        #也就是遍历的是d的键，而不是值.
```

---

针对楼上的 字典 拓展，做测试的时候，想要输出 kye:value的组合发现可以这样：

```
for c in dict:
    print(c,':',dict[c])
```

或者

```
for c in dict:
    print(c,end=':');
    print(dict[c])
```

于是发现 print()函数 其实可以 添加多个参数，用逗号 隔开。
本来想要用

```
for c in dict:
    print(c+':');
    print(dict[c])
```

这样的方式打印 key：value结果发现其实 key不一定是 string类型，所以 用+ 号会出问题。

---

在list的使用中，开始时很容易忽视的一点是：

```
list = [ 'abcd', 786 , 2.23, 'runoob', 70.2 ]
print (list[1:3])       # 从第二个开始输出到第三个元素
```

list[1:3] 其实输出的只有两个变量，即list中第二个元素到第三个元素，并不是第1 第2 第3三个元素，而且要注意的是

```
print (list[2])
print (list[2:3])
```

这两句话打印的内容其实是一样的，

```
2.23
[2.23]
```

但是第二句话有中括号

但注意是不同的类型，用变量接收一下：

```
a = list[2]
b = list[2:3]
type(a) -> <class 'float'>
type(b) -> <class 'list'>
```


\----------
以下是网友 [temmple_wang@qq.com](mailto:temmple_wang@qq.com) 的补充：

```
list = [ 'abcd', 786 , 2.23, 'runoob', 70.2 ]
print (list[1:3])       # 从第二个开始输出到第三个元素
# 获得结果 [786, 2.23]
```

其实我觉得可以这样理解：

```
print (list[1:3])       # 从数组下标为1的数开始获取直到数组下标为3（但不包含3）的数为止，输出这段
# 获得结果 [786, 2.23]
```

其实我们可以试验一下：

```
print (list[1:0])       # 没有输出的值
# 获得结果 []

print (list[1:1])       # 没有输出的值
# 获得结果 []

print (list[0:1])       # 有输出的值
# 获得结果 ['abcd']
```

其实中括号里的值还可以为负数：

```
>>> print(arrtest[1:-1])    # 从下标为1的数开始，输出到下标为4但不包含4的所有值
[786, 2.23, 'runoob']
>>> print(arrtest[-3:-2])   # 从下标为2的数开始，输出到下标为3但不包含3的所有值
[2.23]
```

---

python 与 C 语言和 Java 语言的一点不同，表现在它的变量不需要声明变量类型，这是因为像 C 语言和 Java 语言来说，它们是静态的，而 python 是动态的，变量的类型由赋予它的值来决定，例如：

```
>>> a = 1
>>> a = 1.001
>>> a = "python"
>>> print(a)
python
>>>
```

第一次为变量 a 赋值为整型，第二次赋值是浮点数，第三次是一个字符串，最后输出时只保留了最后一次的赋值。

---

type 是用于求一个未知数据类型对象，而 isinstance 是用于判断一个对象是否是已知类型。
type 不认为子类是父类的一种类型，而isinstance会认为子类是父类的一种类型。
可以用 isinstance 判断子类对象是否继承于父类，type 不行。
综合以上几点，type 与 isinstance 虽然都与数据类型相关，但两者其实用法不同，type 主要用于判断未知数据类型，isinstance 主要用于判断 A 类是否继承于 B 类：

```
# 判断子类对象是否继承于父类
class father(object):
    pass
class son(father):
    pass
if __name__ == '__main__':
    print (type(son())==father)
    print (isinstance(son(),father))
    print (type(son()))
    print (type(son))
```

运行结果：

```
False
True
<class '__main__.son'>
<type 'type'>
```

---

**字典（小拓展）**
输入 dict 的键值对，可直接用 **items()** 函数：

```
dict1 = {'abc':1,"cde":2,"d":4,"c":567,"d":"key1"}
for k,v in dict1.items():
    print(k,":",v)
```

---

**字典（小拓展）**
原文说 dict(d)创建一个字典。d 必须是一个序列 (key,value)元组。
其实d不一定必须为一个序列元组，如下：

```
>>> dict_1 = dict([('a',1),('b',2),('c',3)]) #元素为元组的列表
>>> dict_1
{'a': 1, 'b': 2, 'c': 3}
>>> dict_2 = dict({('a',1),('b',2),('c',3)})#元素为元组的集合
>>> dict_2
{'b': 2, 'c': 3, 'a': 1}
>>> dict_3 = dict([['a',1],['b',2],['c',3]])#元素为列表的列表
>>> dict_3
{'a': 1, 'b': 2, 'c': 3}
>>> dict_4 = dict((('a',1),('b',2),('c',3)))#元素为元组的元组
>>> dict_4
{'a': 1, 'b': 2, 'c': 3}
```

---

**集合与字典**
**无序：** 集合是无序的，所以不支持索引；字典同样也是无序的，但由于其元素是由键（key）和值（value）两个属性组成的键值对，可以通过键（key）来进行索引
**元素唯一性：** 集合是无重复元素的序列，会自动去除重复元素；字典因为其key唯一性，所以也不会出现相同元素

---

```
#coding=utf8  
''''' 
复数是由一个实数和一个虚数组合构成，表示为：x+yj 
一个负数时一对有序浮点数(x,y)，其中x是实数部分，y是虚数部分。 
Python语言中有关负数的概念： 
1、虚数不能单独存在，它们总是和一个值为0.0的实数部分一起构成一个复数 
2、复数由实数部分和虚数部分构成 
3、表示虚数的语法：real+imagej 
4、实数部分和虚数部分都是浮点数 
5、虚数部分必须有后缀j或J 
 
复数的内建属性： 
复数对象拥有数据属性，分别为该复数的实部和虚部。 
复数还拥有conjugate方法，调用它可以返回该复数的共轭复数对象。 
复数属性：real(复数的实部)、imag(复数的虚部)、conjugate()（返回复数的共轭复数） 
'''  
class Complex(object):  
    '''''创建一个静态属性用来记录类版本号'''  
    version=1.0  
    '''''创建个复数类，用于操作和初始化复数'''  
    def __init__(self,rel=15,img=15j):  
        self.realPart=rel  
        self.imagPart=img  
         
    #创建复数  
    def creatComplex(self):  
        return self.realPart+self.imagPart  
    #获取输入数字部分的虚部  
    def getImg(self):  
        #把虚部转换成字符串  
        img=str(self.imagPart)  
        #对字符串进行切片操作获取数字部分  
        img=img[:-1]   
        return float(img)    
                         
def test():  
    print "run test..........."  
    com=Complex()  
    Cplex= com.creatComplex()  
    if Cplex.imag==com.getImg():  
        print com.getImg()  
    else:  
        pass  
    if Cplex.real==com.realPart:  
        print com.realPart  
    else:  
        pass  
    #原复数  
    print "the religion complex is :",Cplex  
    #求取共轭复数  
    print "the conjugate complex is :",Cplex.conjugate()  
      
if __name__=="__main__":  
    test()
```

---

切片还可以设置步长

```
demo = [1,2,3,4,5,6]

new_demo = demo[1::2]  # 2 就是步长 意思是从索引为 1 的元素开始 每隔2个元素取一次元素
new_demo = [2,4,6] 

# 以索引为列  [索引] 和 [索引:索引:步长] 的区别
# demo[索引] 取出的原列表中索引对应的元素
# demo[索引:索引:步长] 切片得到的是一个新列表
```

---

**bool 型**
Python 中布尔值使用常量 **True** 和 **False** 来表示。
1、在数值上下文环境中，**True** 被当作  **1** ，**False** 被当作  **0** ，例如：

```
>>> True+3
4
>>> False+2
2
```

2、其他类型值转换 **bool** 值时除了 `''、""、''''''、""""""、0、()、[]、{}、None、0.0、0L、0.0+0.0j、False` 为 **False** 外，其他都为 **True** 例如：

```
>>> bool(-2)
True
>>> bool('')
False
```

---

对应[一楼]，函数的参数为多个时，不一定是以元组的形式返回的，还是要看自己定义的返回形式是什么:

```
>>> def example(a,b):
...     return (a,b)
... 
>>> type(example(3,4))
<type 'tuple'>
>>> def example(a,b):
...     return a,b
... 
>>> type(example(3,4))
<type 'tuple'>
>>> def example(a,b):
...     return [a,b]
... 
>>> type(example(3,4))
<type 'list'>
```

---

针对楼上对一楼的观点提出的不同意见，但是一楼实际说的是返回值有多个时，而非楼上说的参数为多个。

```
>>> type(example(3,4))
<type 'tuple'>
>>> def example(a,b):
...     return [a,b]
... 
>>> type(example(3,4))
<type 'list'>
```

以上实际返回值也只有一个，一个 List 类型的参数。
一楼所说的返回值为多个是：

```
>>> type(example(3,4))
<type 'tuple'>
>>> def example(a,b):
...     return a,b
... 
>>> type(example(3,4))
<type 'tuple'>
```

---

**Bool 型小知识 :**

* Python2 支持：int、float、long、complex（复数）
* Python3 支持：int、float、bool、complex（复数）

Python3 废除了 long 类型，将 0 和 1 独立出来组成判断对错的 Bool 型，即 0 和 1 可以用来判断 flase 和 true。但是根本上并没有修改原则。这里的 Bool 型依然是 int 型的一部分，所以依然能当做数字参与运算，所以 Python3 里的 Bool 型是 int 型的一个特例而不是一个独立的类型。

---

注意：列表、元组、集合有所区别(新人特别容易入坑)。
列表和元组不会把相同的值合并，但是集合会把相同的合并。

```
>>> clist = ['tom','tom','jerry']                #测试列表功能
>>> print (clist）
['tom','tom','jerry']

>>>ctuple = ('tom','tom','jerry')           #测试元组功能
>>>print(ctuple)
('tom','tom','jerry') 

>>>cset = {'tom','tom','jerry'}                #测试集合功能
>>>print(cset)
{'tom','jerry'}
```

---

关于列表的创建细节补充：

```
>>> o = {1, 2, 3}
>>> type(o)
<class 'set'>
>>> o = {}
>>> type(o)
<class 'dict'>
```

---

关于字典推导式的一些案例：

```
# 字典推导式
p = {i:str(i) for i in range(1,5)}
print("p:",p)
'''
p: {1: '1', 2: '2', 3: '3', 4: '4'}
'''

x = ['A','B','C','D']
y = ['a','b','c','d']
n = {i:j for i,j in zip(x,y)}
print("n:",n)
'''
n: {'A': 'a', 'B': 'b', 'C': 'c', 'D': 'd'}
'''

s = {x:x.strip() for x in ('he','she','I')}
print("s:",s)
'''
s: {'he': 'he', 'she': 'she', 'I': 'I'}
'''
```

---

**所有数据类型都是类。**
也就是说，int、str等数据类型不是函数，只是一个类罢了。
用int()、str()、list()等都是初始化相应的类，那么123456、"Runoob“、[1,2,3] 等都是相应数据类型的初始化结果。
有很多人和教学网站都认为int、str、list等数据类型都是函数，但这是错误的。type(int)的输出结果表明int是一个类。

---

此处延伸下变量和对象之间的关系：

* 赋值操作，本质是创建引用
* 变量是变量，对象是对象，当将某个对象赋值给某个变量时，可以认为是创建了变量对该对象的引用
* 变量没有数据类型之说，只有对象有，即变量不是直接代表对象或对象占用的内存空间
* Python中，变量无需提前声明，无需指定其数据类型，其表现完全是动态的，其所为的数据类型决定于当前该变量所引用的对象的数据类型
* 所谓变量对对象的引用，本质是创建了变量指向对象内存空间的指针
* 对象内存空间，一般最起码有类型和当前被引用次数这两个信息，类型记录了该对象的数据类型，被引用次数记录了该对象内存空间被变量引用的次数
* 当某对象的被引用次数为0时，Python便会自动回收该对象内存空间

比如下面的

```
a=10
a='122'
a=[1,2,3]
del a
```

此时，a在不同的赋值代码行中，引用的对象类型不同，相当于在不断改变a引用的对象，最后当把a变量删除时，其实本质只是删除了a变量名，但由于a引用的[1,2,3]对象，因为a被删除，其被引用次数变为0，也就自动被Python回收，最终表现就是del a时，[1,2,3]也被删除了。
另外一个小知识是，Python为提升代码执行和内存分配效率，会对一些常用的对象提前创建好，并常驻内存，比如下面：

```
id(4) #不管运行多少次该代码，其返回的值均不变，因为python会保持一些常用的数字常驻内存，不会每次都重新分配内存空间
id('hello world') #每次运行，返回的值均会发生变化，因为每次运行，相当于都在重新分配内存空间
```

---

###### 返回 [Python基础知识](../Python基础知识.md)

