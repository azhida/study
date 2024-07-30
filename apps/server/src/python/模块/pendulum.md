# Pendulum - Python处理时间的神器

pendulum可以用来对于时间进行处理，它的最大的优点是取代了python内置的datetime类，可以更好的对时间进行处理，使用起来更加的轻松。

## 安装

```
pip install pendulum
```

## 使用

```py
import pendulum

today = pendulum.today() # 今天
print(today)
# 2023-05-19T00:00:00+08:00

today_str = pendulum.today().to_datetime_string() # 今天
print(today_str)
# 2023-05-19 00:00:00

now = pendulum.now().to_datetime_string() # 今天
print(now)
# 2023-05-19 14:57:43
```