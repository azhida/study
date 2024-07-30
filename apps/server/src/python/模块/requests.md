# requests 

Python requests 是一个常用的 HTTP 请求库，可以方便地向网站发送 HTTP 请求，并获取响应结果。

```py
import requests
res = requests.request('get', 'https://www.baidu.com/')
# 设置编码，否则可能乱码
res.encoding = res.apparent_encoding
print(res.status_code)
print(res.text)
```