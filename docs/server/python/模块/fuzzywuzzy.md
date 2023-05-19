# Fuzzywuzzy - 字符串处理库

## 安装

```
pip install fuzzywuzzy
```

## 使用

```py
from fuzzywuzzy import fuzz
from fuzzywuzzy import process

print(fuzz.ratio('abcd', 'ac')) # 返回匹配程度，67 表示 67% 的匹配程度
# 67

arr = ['abcdefg', '1234567890ac']
process.extract('dfg', arr) # 按匹配度返回
# [('abcdefg', 60), ('1234567890ac', 0)]
process.extract('ac', arr) # 按匹配度返回
# [('1234567890ac', 90), ('abcdefg', 45)]
process.extract('ac', arr, limit=1) # 按匹配度返回，取前两名
# [('1234567890ac', 90)]
```