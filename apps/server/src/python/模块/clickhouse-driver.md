# clickhouse-driver

- 安装
```
pip install clickhouse-driver
```
- 使用
```
# -*- coding: utf-8 -*-

from clickhouse_driver import Client

client = Client(host='127.0.0.1',port='9000',user=clickhouse_user ,password=clickhouse_pwd)
sql = 'SHOW DATABASES'
res = client.execute(sql)
print(res)
```

## 问题
- 9000 端口拒绝访问，请自行排序