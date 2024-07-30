# Flashtext - 文本关键词提取和替换

在自然语言处理或者是文本处理中，经常需要将文本数据中得某些关键词进行替换，或者提取句子中的某些关键词。虽然正则表达式可以达到这样的效果，但是如果文本过于庞大，那么正则表达式的匹配就会非常的麻烦。所以利用 flashtext 可以达到快速搜索的目的。

## 安装

```
pip install flashtext
```

## 使用

```py
import flashtext

# 关键词提取
keywordProcessor = flashtext.KeywordProcessor()
keywordProcessor.add_keyword('python')
kw = keywordProcessor.extract_keywords('我们学习python')
print(kw)
# ['python']


# 替换关键词
keywordProcessor.add_keyword('ABCD', 'DCBA')
# 这里注意：关键词 ABCD 需要两边空格，否则匹配不到
str1 = keywordProcessor.replace_keywords('0099 ABCD 8788')
print(str1)
# 0099 DCBA 8788
```