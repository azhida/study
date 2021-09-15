# coding=utf-8

# 30. jpg批量转换成png
# 通过⼀个批ᰁ将 jpg 图⽚的转换为 png 图⽚，可以引申去做⼀些其他的批ᰁ⽂件操作。
import os
def jpg_to_png(work_dir):
 """
 传递当前⽬录，原来后缀名，新的后缀名后，批ᰁ᯿命名后缀
 """
 old_ext, new_ext = '.jpg', '.png'
 for filename in os.listdir(work_dir):
  # 获取得到⽂件后缀
  split_file = os.path.splitext(filename)
  file_ext = split_file[1]
  # 定位后缀名为old_ext 的⽂件
  if old_ext == file_ext:
   # 修改后⽂件的完整名称
   newfile = split_file[0] + new_ext
   # 实现᯿命名操作
   os.rename(
    os.path.join(work_dir, filename),
    os.path.join(work_dir, newfile)
   )
 print("完成᯿命名")
 print(os.listdir(work_dir))
jpg_to_png('./images')
exit('30 -- ok')

# 29. 获取指定后缀名的⽂件
import os
def find_file(work_dir,extension='jpg'):
 lst = []
 for filename in os.listdir(work_dir):
  print(filename)
  splits = os.path.splitext(filename)
  ext = splits[1] # 拿到扩展名
  if ext == '.'+extension:
   lst.append(filename)
 return lst
r = find_file('.', 'md')
print(r) # 返回所有⽬录下的py⽂件
exit('29 -- ok')

# 28. 获取指定⽬录下所有⽂件名
# os.walk(path) 返回指定路径下所有⽂件和⼦⽂件夹中所有⽂件列表。
# 对于os.walk会遍历指定⽬录下的所有⼦⽂件夹和⼦⽂件夹中的所有⽂件。
import os
def file_name_walk(file_dir):
 for root, dirs, files in os.walk(file_dir):
  print("root", root) # 当前⽬录路径
  print("dirs", dirs) # 当前路径下所有⼦⽬录
  print("files", files) # 当前路径下所有⾮⽬录⼦⽂件
file_name_walk('./')
# os.listdir(path) 返回指定路径下所有的⽂件和⽂件夹列表,但是⼦⽬录下⽂件不遍历。
# 注意：使⽤os.listdir函数不仅是⽂件，⽂件夹也会被遍历到。
def file_name_listdir(file_dir):
 for files in os.listdir(file_dir): # 不仅仅是⽂件，当前⽬录下的⽂件夹也会被认为遍历到
  print("files", files)
file_name_listdir('./')
exit('28 -- ok')

# 27. 汉诺塔
# 法国数学家爱德华·卢卡斯曾编写过⼀个印度的古⽼传说：在世界中⼼⻉拿勒斯（在印度北部）的圣庙⾥，⼀块⻩铜板上插着三根宝⽯针。印度教的主神梵天在创造世界的时候，在其中⼀根针上从下到上地穿好了由⼤到⼩的64⽚⾦⽚，这就是所谓的汉诺塔。不论⽩天⿊夜，总有⼀个僧侣在按照下⾯的法则移动这些⾦⽚：⼀次只移动⼀⽚，不管在哪根针上，⼩⽚必须在⼤⽚上⾯。僧侣们预⾔，当所有的⾦⽚都从梵天穿好的那根针上移到另外⼀根针上时，世界就将在⼀声霹雳中消灭，⽽梵塔、庙宇和众⽣也都将同归于尽。
# 不管这个传说的可信度有多⼤，如果考虑⼀下把64⽚⾦⽚，由⼀根针上移到另⼀根针上，并且始终保持上⼩下⼤的顺序。这需要多少次移动呢?这⾥需要递归的⽅法。假设有n⽚，移动次数是f(n).显然
# f(1)=1,f(2)=3,f(3)=7，且f(k+1)=2*f(k)+1。此后不难证明f(n)=2^n-1。
def hanoi(n, A, B, C): # 表示把n个盘⼦从A柱⼦经过B柱⼦移动到C柱⼦
 if n > 0:
  hanoi(n-1, A, C, B)
  print('%s->%s' % (A, C))
  hanoi(n-1, B, A, C)
hanoi(4, 'A', 'B', 'C')

def f(n):
 if n==0:
  return 0
 else:
  return 2*f(n-1)+1
print("需要移动",f(64),"次")
# 假如每秒钟⼀次，共需多⻓时间呢？⼀个平年365天有31536000 秒，闰年366天有31622400秒，平均每年31557600秒，需要移动 18446744073709551615 次，这表明移完这些⾦⽚需要5845.42亿年以上，⽽地球存在⾄今不过45亿年，太阳系的预期寿命据说也就是数百亿年。真的过了5845.42亿年，不说太阳系和银河系，⾄少地球上的⼀切⽣命，连同梵塔、庙宇等，都早已经灰⻜烟灭。
exit('27 -- ok')

# 26. 斐波那契数列
# 斐波那契数列（Fibonacci sequence），⼜称⻩⾦分割数列、因数学家莱昂纳多·斐波那契（Leonardoda Fibonacci）以兔⼦繁殖为例⼦⽽引⼊，故⼜称为“兔⼦数列”，指的是这样⼀个数列：
# 0、1、1、2、3、5、8、13、21、34、……在数学上，斐波那契数列以如下被以递推的⽅法定义：F(1)=1，F(2)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 3，n ∈ N*）
# 在现代物理、准晶体结构、化学等领域，斐波纳契数列都有直接的应⽤，为此，美国数学会从 1963 年起出版了以《斐波纳契数列季刊》为名的⼀份数学杂志，⽤于专⻔刊载这⽅⾯的研究成果。
# 这个数列⾮常的神奇，斐波那契数列中的斐波那契数会经常出现在我们的眼前——⽐如松果、凤梨、树叶的排列、某些花朵的花瓣数（典型的有向⽇葵花瓣），蜂巢，蜻蜓翅膀等等。观察延龄草、ᰀ玫瑰、南美⾎根草、⼤波斯菊、⾦凤花、耧⽃菜、百合花、蝴蝶花的花瓣，可以发现它们花瓣数⽬具有斐波那契数：3、5、8、13、21，其中百合花花瓣数⽬为 3，梅花 5 瓣，⻜燕草 8 瓣，万寿菊 13 瓣，向⽇葵21 或 34 瓣，雏菊有 34、55 和 89 三个数⽬的花瓣。⼜⽐如随着数列项数的增加，前⼀项与后⼀项之⽐越来越逼近⻩⾦分割的数值 0.618033988。
# 那怎么样⽤ python ⽣成斐波那契的第 n 项是什么呢？
def fibnacci_1(n):
 if n == 0 or n == 1:
  return 1
 else:
  return fibnacci_1(n - 1) + fibnacci_1(n - 2)
fibnacci_1(40)  # 165580141
# 这⾥使⽤了递归，事实上当数字超过 40 了函数需要运⾏⾮常久的时间，其时间复杂度很⾼。下边的代码可以明显的对⽐出运算时间⻓短。
def fib(n):
 li = [-1 for _ in range(n + 1)]
 li[0] = 1
 li[1] = 1
 def fibnacci(n):
  if li[n] == -1:
   x = fibnacci(n - 1) + fibnacci(n - 2)
   li[n] = x
  return li[n]
 return fibnacci(n)
print(fib(40)) # 165580141
exit('26 -- ok')

# 25. ⼆分搜索
# ⼆分搜索是⼀种在有序数组中查找某⼀特定元素的搜索算法。搜索过程从数组的中间元素开始，如果中间元素正好是要查找的元素，则搜索过程结束；如果某⼀特定元素⼤于或者⼩于中间元素，则在数组⼤于或⼩于中间元素的那⼀半中查找，⽽且跟开始⼀样从中间元素开始⽐较。如果在某⼀步骤数组为空，则代表找不到。这种搜索算法每⼀次⽐较都使搜索范围缩⼩⼀半。
def binary_search(li, num):
 low = 0
 high = len(li)-1
 while low <= high: # 只要候选区有值
  mid = (low + high) // 2
  if li[mid] == num:
   return mid
  elif li[mid] < num:
   low = mid + 1
  else: # li[mid] > num
   high = mid - 1
 return -1

li = [1, 3, 4, 6, 7, 8, 10, 13, 14]
index = binary_search(li, 4)
print(f'4 在列表中的索引值为：{index}')
exit('25 -- ok')

# 24. 快速排序
# 快速排序使⽤分治法（Divide and conquer）策略来把⼀个序列（list）分为较⼩和较⼤的2个⼦序列，然后递归地排序两个⼦序列。
# 步骤为：
#    挑选基准值：从数列中挑出⼀个元素，称为"基准"（pivot）;
#    分割：᯿新排序数列，所有⽐基准值⼩的元素摆放在基准前⾯，所有⽐基准值⼤的元素摆在基准后⾯（与基准值相等的数可以到任何⼀边）。在这个分割结束之后，对基准值的排序就已经完成;
#    递归排序⼦序列：递归地将⼩于基准值元素的⼦序列和⼤于基准值元素的⼦序列排序。
# 递归到最底部的判断条件是数列的⼤⼩是零或⼀，此时该数列显然已经有序。
# 选取基准值有数种具体⽅法，此选取⽅法对排序的时间性能有决定性影响。
def partition(arr, low, high):
 i = (low - 1)  # 最⼩元素索引
 pivot = arr[high]
 for j in range(low, high):
  # 当前元素⼩于或等于 pivot
  if arr[j] <= pivot:
   i = i + 1
   arr[i], arr[j] = arr[j], arr[i]
 arr[i + 1], arr[high] = arr[high], arr[i + 1]
 return (i + 1)

# arr[] --> 排序数组
# low --> 起始索引
# high --> 结束索引

# 快速排序函数
def quickSort(arr, low, high):
 if low < high:
  pi = partition(arr, low, high)
  quickSort(arr, low, pi - 1)
  quickSort(arr, pi + 1, high)

li = [5, 7, 8, 4, 1, 9, 6, 2, 0, 3]
quickSort(li, 0, 9)
# 排序后的列表
print(li)
exit('24 -- ok')

# 23. 冒泡排序
# 冒泡排序（Bubble Sort）也是⼀种简单直观的排序算法。它᯿复地⾛访过要排序的数列，⼀次⽐较两个元素，如果他们的顺序错误就把他们交换过来。⾛访数列的⼯作是᯿复地进⾏直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越⼩的元素会经由交换慢慢"浮"到数列的顶端。是最简单的排序算法之⼀。
# 算法步骤：
# ⽐较相邻的元素。如果第⼀个⽐第⼆个⼤，就交换他们两个。
# 对每⼀对相邻元素作同样的⼯作，从开始第⼀对到结尾的最后⼀对。这步做完后，最后的元素会是最⼤的数。
# 针对所有的元素᯿复以上的步骤，除了最后⼀个。
# 持续每次对越来越少的元素᯿复上⾯的步骤，直到没有任何⼀对数字需要⽐较。
def bubble_sort(li):
 for i in range(len(li) - 1):  # i表示第i趟 i=0,1,2,...,n-2
  swapped = False
  for j in range(len(li) - i - 1):
   if li[j] > li[j + 1]:
    li[j], li[j + 1] = li[j + 1], li[j]
    swapped = True
  if swapped == False:
   return

li = [5, 7, 8, 4, 1, 9, 6, 2, 0, 3]
bubble_sort(li)
# 排序后的列表
print(li)
exit('23 -- ok')

# 22. 约瑟夫环问题
# 《幸运的基督徒》 有15个教徒和15个⾮教徒在海上遇险，为了能让⼀部分⼈活下来不得不将其中15个⼈扔到海⾥⾯去，有个⼈想了个办法就是⼤家围成⼀个圈，由某个⼈开始从1报数，报到9的⼈就扔到海⾥⾯，他后⾯的⼈接着从1开始报数，报到9的⼈继续扔到海⾥⾯，直到扔掉15个⼈。由于上帝的保佑，15个教徒都幸免于难，问这些⼈最开始是怎么站的，哪些位置是教徒哪些位置是⾮教徒。
def josephus():
 persons = [True] * 30
 counter, index, number = 0, 0, 0
 while counter < 15:
  if persons[index]:
   number += 1
   if number == 9:
    persons[index] = False
    counter += 1
    number = 0
  index += 1
  index %= 30
 for person in persons:
  print('教' if person else '⾮', end='')

josephus()
print()
exit('22 -- ok')

# 21. 计算指定的年⽉⽇是这⼀年的第⼏天
# 需要⽤到上⾯的判断闰年的函数。
def is_leap_year(year):
 """
 判断指定的年份是不是闰年
 """
 return year % 4 == 0 and year % 100 != 0 or year % 400 == 0

def which_day(year:int, month:int, date:int) -> int:
 """
 计算传⼊的⽇期是这⼀年的第⼏天
 :param year: 年
 :param month: ⽉
 :param date: ⽇
 :return: 第⼏天
 """
 days_of_month = [
  [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
 ][is_leap_year(year)]
 total = 0
 for index in range(month - 1):
  total += days_of_month[index]
 return total + date

print(which_day(2020, 11, 30))  # 206
exit('21 -- ok')

# 20. 当⽉有⼏天
# 查看当⽉的第⼀天是所在周的第⼏天以及查看当⽉共有多少天。
import calendar
from datetime import date
mydate = date.today()
weekday, days = calendar.monthrange(mydate.year, mydate.month)
print(f'{mydate.year}年-{mydate.month}⽉的第⼀天是那⼀周的第{weekday}天\n')
print(f'{mydate.year}年-{mydate.month}⽉共有{days}天\n')
exit('20 -- ok')

# 19. 判断闰年
# 公历年份是4的倍数的，且不是100的倍数，为普通闰年。如2004、2020年就是闰年。
# 公历年份是整百数的，必须是400的倍数才是世纪闰年。如1900年不是世纪闰年，2000年是世纪闰年。
def is_leap_year(year):
 """
 判断指定的年份是不是闰年
 :param year: 年份
 :return: 闰年返回True平年返回False
 """
 return year % 4 == 0 and year % 100 != 0 or year % 400 == 0
res_1 = is_leap_year(2020)  # True
print('方法一')
print(res_1)

print('方法二')
# 判断当前年份是否是闰年
import calendar
from datetime import date
mydate = date.today()
is_leap = calendar.isleap(mydate.year)
print_leap_str = "%s年是闰年" if is_leap else "%s年不是闰年\n"
print(print_leap_str % mydate.year) # 2020年是闰年
exit('19 -- ok')

# 18. ⽣成⽇历
# 使⽤ calendar 模块操作⽇期，不仅可以打印出指定⽉份，还可以设置⼀周的第⼀天为星期⽇还是其他。
# 导⼊⽇历模块
import calendar
# 输⼊年份和⽉份
year = int(input('请输⼊年份：'))
month = int(input('请输⼊⽉份：'))
# 设置⼀周的第⼀天为星期⽇或者其他⼯作⽇，指定的⽇期以整数形式给出
calendar.setfirstweekday(firstweekday=6)
print(calendar.month(year, month))
exit('18 -- ok')

# 17. 设计⼀个函数产⽣指定⻓度的随机验证码
# 验证码对于现在的我们⽇常⽣活⽽⾔随处可⻅，我们怎样⾃⼰写⼀个函数⽤来随机产⽣验证码呢？
import string
import random
def generate_code_1(code_len=4):
 """
 ⽣成指定⻓度的验证码
 :param code_len: 验证码的⻓度(默认4个字符)
 :return: 由⼤⼩写英⽂字⺟和数字构成的随机验证码
 """
 all_chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
 last_pos = len(all_chars) - 1
 code = ''
 for _ in range(code_len):
  index = random.randint(0, last_pos)
  code += all_chars[index]
 return code
print('方法一')
print(generate_code_1())
def generate_code_2(code_len=4):
 # 根据 ASCII 码⽣成 0~9 的数字列表
 code_list = [chr(i) for i in range(48, 58)]
 # 根据 ASCII 码⽣成⼤写字⺟和⼩写字⺟
 for upper, lower in zip(range(65, 90), range(97, 122)):
 # 添加到列表中
  code_list.append(chr(upper))
  code_list.append(chr(lower))
 result = random.sample(code_list, code_len)
 code = ''.join(result)
 return code
print('方法二')
print(generate_code_2())
def generate_code_3(code_len=4):
 code_list = string.digits + string.ascii_letters
 result_list = random.sample(code_list, code_len)
 code = ''.join(result_list)
 return code
print('方法三')
print(generate_code_3())
exit('17 -- ok')

# 16. 找出 100~999 之间的⽔仙花数
# 所谓的⽔仙花数是指：⼀个n 位数(n >= 3)，它的每个位上的数字的n 次幂之和等于它本身。
# 例如153，370，371，407等都是⽔仙花数。就拿153来说，153 = 1*1*1 + 5*5*5 + 3*3*3
for num in range(100, 10000):
 low = num % 10
 mid = num // 10 % 10
 high = num // 100
 if num == low ** 3 + mid ** 3 + high ** 3:
  print(num)
exit('16 -- ok')

# 15. 实现判断⼀个数是不是回⽂数的函数。
# 回⽂数或迴⽂数是指⼀个像 14641 这样“对称”的数，即：将这个数的数字按相反的顺序᯿新排列后，所得到的数和原来的数⼀样。
print('方法一')
def is_palindrome(num):
 temp = num
 total = 0
 while temp > 0:
  total = total * 10 + temp % 10
  temp //= 10
 return total == num
print(is_palindrome(123321))
print(is_palindrome(123231))
print('方法二')
def is_palindrome(num):
 return str(num) == str(num)[::-1]
print(is_palindrome(123321))
print(is_palindrome(123231))
exit('15 -- ok')

# 14. 打印 99 乘法表
# 99 乘法表是我们⼩学甚⾄可能幼⼉园就已经开始背的公式了，还记得第⼀个⽂具盒上⾯的就会有⼀个99 乘法表，那么怎么⽤ Python 打印出呢？
####### 方法一 ########
print('方法一')
for i in range(1, 10):
 for j in range(1, i+1):
  print(f'{j}*{i}={i*j}', end=' ')
 print()
####### 方法二 ########
print('方法二')
for i in range(1, 10):
 print('\t'.join(f'{j}*{i}={i*j}' for j in range(1, i+1)))
####### 方法三 ########
print('方法三')
print("\n".join("\t".join("{j}*{i}={m}".format(i=i,j=j,m=i*j) for j in range(1,i+1)) for i in range(1,10)))
print('方法三')
print('\n'.join([' '.join ('%dx%d=%2d' % (x,y,x*y) for x in range(1,y+1)) for y in range(1,10)]))
####### 方法四 ########
print('方法四')
print('\n'.join(['\t'.join ('%dx%d=%2d' % (x,y,x*y) for x in range(1,y+1)) for y in range(1,10)]))
exit('14 -- ok')

# 13. 百钱百鸡
# 我国古代数学家张丘建在《算经》⼀书中提出的数学问题：鸡翁⼀值钱五，鸡⺟⼀值钱三，鸡雏三值钱⼀。百钱买百鸡，问鸡翁、鸡⺟、鸡雏各⼏何？
# 公鸡 5 元⼀个 ⺟鸡 3 元⼀个 ⼩鸡 1 元 3 个。 有 100 元 想要买 100 只鸡，怎么买？
# x -> 公鸡 y -> ⺟鸡 z -> ⼩鸡
#################⽅法⼀##################
# x + y + z = 100 ①
# 5x + 3y + z/3 = 100 ②
# ② => 5x < 100 => x < 20
# 同理可得 y < 33
# z = 100 -x -y
for x in range(20):
 for y in range(33):
  z = 100 - x - y
  if 5 * x + 3 * y + z / 3 == 100:
   print(f'公鸡:{x}，⺟鸡:{y}，⼩鸡:{z}')
#################⽅法⼆##################
# x + y + z = 100 ①
# 5x + 3y + z/3 = 100 ②
# ② * 3 - ① ==> 7x + 4y = 100 ③
# y = 25 - (7/4)x ④
# 0 < y < 100 ⾃然数 ⑤
# 由④和⑤ x = 4k
# y = 25 - 7k
# z = 75 + 3k
# ④ => 0< k < 4
for k in range(4):
 x = 4 * k
 y = 25 - 7 * k
 z = 75 + 3 * k
 print(f'公鸡:{x}，⺟鸡:{y}，⼩鸡:{z}')
exit('13 -- ok')

# 12. 打印三⻆形图案
# 打印下⾯所有形状的星星
"""
*
**
***
****
*****
    *
   **
  ***
 ****
*****
    *
   ***
  *****
 *******
*********
"""
row = int(input('请输⼊⾏数: '))
# 形状 1
for i in range(row):
 for _ in range(i + 1):
  print('*', end='')
 print()
# 形状 2
for i in range(row):
 for j in range(row):
  if j < row - i - 1:
   print(' ', end='')
  else:
   print('*', end='')
 print()
# 形状 3，类似于杨辉三⻆
for i in range(row):
 for _ in range(row - i - 1):
  print(' ', end='')
 for _ in range(2 * i + 1):
  print('*', end='')
 print()
exit('ok -- 12')

# 11. 计算最⼤公约数和最⼩公倍数
# 输⼊为两个正整数。最⼤公约数：（Greatest Common Divisor），也称最⼤公因数、最⼤公因⼦，指两个或多个整数共有约数中最⼤的⼀个，简称gcd。最⼩公倍数；两个整数公有的倍数称为它们的公倍数，其中最⼩的⼀个正整数称为它们两个的最⼩公倍数（Least Common Multiple），简称lcm。
# 最⼩公倍数=两数的乘积/最⼤公约（因）数。最⼤公约数可以使⽤欧⼏⾥得算法即辗转相除法求得，gcd(a,b) = gcd(b,a mod b)。mod == % 。
x = int(input('x = '))
y = int(input('y = '))
# 最⼤公约数
def gcd(x, y):
 (x, y) = (y, x) if x > y else (x, y)
 for factor in range(x, 0, -1):
  if x % factor == 0 and y % factor == 0:
   return factor
# 最⼩公倍数
def lcm(x, y):
 return x * y // gcd(x, y)

res_1 = gcd(x, y)
res_2 = lcm(x, y)
print(res_1)
print(res_2)
exit('ok -- 11')

# 10. 输⼊三⻆形三个边⻓其计算周⻓和⾯积
# 判断输⼊的边⻓能否构成三⻆形，如果能则计算出三⻆形的周⻓和⾯积。代码使⽤了 math 模块的 sqrt 函数来计算平⽅根。⽤边⻓计算三⻆形⾯积的公式叫做海伦公式。三⻆形⾯积 A公式如下：
# A = math.sqrt( 8 * (8 - a) * (8 - b) * (8 - c) ) , 其中 8 = (a + b + c) / 2
# 中国南宋末年数学家秦九韶发现或知道等价的公式，其著作《数书九章》卷五第⼆题即三斜求积。“问沙⽥⼀段，有三斜，其⼩斜⼀⼗三⾥，中斜⼀⼗四⾥，⼤斜⼀⼗五⾥，⾥法三百步，欲知为⽥⼏何？”答⽈：“三百⼗五顷．”其术⽂是：“以⼩斜幂并⼤斜幂，减中斜幂，余半之，⾃乘于上；以⼩斜幂乘⼤斜幂，减上，余四约之为实，……开平⽅得积。”若以⼤斜记为，中斜记为，⼩斜记为，秦九韶的⽅法相当于下⾯的⼀般公式：
# A = math.sqrt( 1/4 * (a²c² - (a² + c² - b²)/2 )² ) ，其中 a >= b >= c
import math
a = float(input('a = '))
b = float(input('b = '))
c = float(input('c = '))
if a + b > c and a + c > b and b + c > a:
 print('周⻓: %.2f' % (a + b + c))
 p = (a + b + c) / 2
 area = math.sqrt(p * (p - a) * (p - b) * (p - c))
 print('⾯积: %.2f' % (area))
else:
 print('不能构成三⻆形')
exit('ok - 10')

# 9. 不⽤else和if实现计算器
# operator 模块提供了⼀套与Python的内置运算符对应的⾼效率函数。例如， operator.add(x, y) 与表达式 x+y 相同。
from operator import *
def calculator(a, b, k):
 return {
  '+': add,
  '-': sub,
  '*': mul,
  '/': truediv,
  '**': pow
 }.get(k, add)(a, b)
# 如果输⼊的不是加减乘除和取幂则默认为加
res_1 = calculator(2, 3,'s') # 7
res_2 = calculator(3, 4, '+') # 7
res_3 = calculator(3, 4, '**') # 81
print(res_1)
print(res_2)
print(res_3)
exit('ok -- 9')

# 8. 筛选出值最大的字典
# 如果一个字典中的 value 都是不同的整数，怎么样筛选出这些值中的最大值呢？
def max_pairs(dic):
 if len(dic) == 0:
  return dic
 max_val = max(map(lambda v: v[1], dic.items()))
 return [{k:v} for k,v in dic.items() if v == max_val]
res = max_pairs({'a': 6, 'b': -3, 'c': 6, 'd': 5.1})
exit(res) # [{'a': 6}, {'c': 6}]

# 7. 合并字典
# 合并几个字典成为一个新的大字典。
def merge_dict(dic1, dic2):
 return {**dic1, **dic2} # python3.5后⽀持的⼀⾏代码实现合并字典
res = merge_dict({'a': 1, 'b': 2}, {'c': 3}) # {'a': 1, 'b': 2, 'c': 3}
exit(res)
exit('ok - 7')

# 6. 字典的键值对颠倒并⽣产新的字典
# 将字典的 key，value 颠倒调换位置。
dic = {'a': 1, 'b': 2, 'c': 3}
new_dict = {v:k for k, v in dic.items()}
print(new_dict) # {1: 'a', 2: 'b', 3: 'c'}
exit('ok - 6')

# 5. 两个列表转为字典
# 根据两个列表，将其组合成为⼀个字典。
li1 = ['a', 'b']
li2 = [1, 2]
print(dict(zip(li1, li2))) # {'a':1, 'b':2}
exit('ok')

# 4 . 列表等分
# 将⼀个列表等分为多个列表
from math import ceil
def divide(lst: list, size: int) -> list:
 """
 :param lst: 要拆分的列表
 :param size: 拆分的⼤⼩
 :return: ⼆维数组
 """
 if size <= 0:
  return [lst]
 return [lst[i * size:(i + 1) * size] for i in range(0, ceil(len(lst) / size))]

res = divide([1, 2, 3, 4, 5, 7, 8, 9], 2)
print(res) # [[1, 2], [3, 4], [5, 7], [8, 9]]
res = divide([1, 2, 3, 4, 5, 7, 8, 9], 3)
print(res) # [[1, 2, 3], [4, 5, 7], [8, 9]]
res = divide([1, 2, 3, 4, 5, 7, 8, 9], 0)
print(res) # [[1, 2, 3, 4, 5, 7, 8, 9]]
res= divide([1, 2, 3, 4, 5, 7, 8, 9], -2)
print(res) # [[1, 2, 3, 4, 5, 7, 8, 9]]

# 在得到了⼀个多个列表之后，可能会遇到要查找这⼏个列表中最⼤那个值是多少？
def max_lists(*lst):
 return max(max(*lst, key=lambda v: max(v)))
res = max_lists([[1, 2, 3], [4, 9, 7], [8, 5]])
print(res) # 9
exit('ok')

# 3. 列表压缩
# 去除列表中所有布尔值为 false 的元素。
def filter_false(lst):
 return list(filter(bool, lst))
res = filter_false([None, 0, False, '', [], 'martin', [1, 2]])
print(res) # ['martin', [1, 2]]

# 1. 身份验证
# 输⼊密码时，终端中没有回显，可以使⽤getpass模块的getpass函数。
# 身份验证
import getpass
username = input('请输⼊⽤户名: ')
password = getpass.getpass('请输⼊密码: ')
if username == 'admin' and password == '123456':
 print('登录成功!')
else:
 print('登录失败!')

# 2. 列表去重
# 使⽤ python 的内置函数 set 可以实现去重。
x = [1, 1, 2, 2, 3, 2, 3, 4, 5, 6]
print(list(set(x))) # [1, 2, 3, 4, 5, 6]

# 3. 列表压缩
# 去除列表中所有布尔值为 false 的元素。
def filter_false(lst):
 return list(filter(bool, lst))
res = filter_false([None, 0, False, '', [], 'martin', [1, 2]])
print(res) # ['martin', [1, 2]]