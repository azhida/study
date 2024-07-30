# datetime 

## 主要类

datetime模块中包含的主要类为：

- date：日期对象，常用的属性有year, month, day等
- time：时间对象，主要的属性有hour, minute, second, microsecond
- datetime：日期时间对象，属性date和属性datetime的组合
- datetime_CAPI：日期对象的C语言接口
- timedelta：两个时间之间的时间间隔
- tzinfo：时区信息对象的抽象基类


## 使用

```py
from datetime import *   # *表示模块下面的所有类

r = datetime.today().date()
print(r)
# 2023-05-19
```

```py
from datetime import date

r = date.today()
print(r)
# 2023-05-19
```
