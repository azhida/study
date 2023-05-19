# colorama - 彩色打印库，为Terminal添加色彩

除了好看，没别的作用。

可以让 Terminal 呈现出丰富多彩的颜色。

## 安装

```
pip install colorama
```

## 使用

```py
from colorama import Fore

str = 'abcd'
print(Fore.GREEN + str) # 绿色
print(Fore.BLUE + str) # 蓝色
print(Fore.RED + str) # 红色
```