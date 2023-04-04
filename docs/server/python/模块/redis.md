## 安装 redis 模块

Python 要使用 redis，需要先安装 redis 模块：

```
sudo pip3 install redis
```

测试是否安装成功：

```
>>> import redis
>>> r = redis.StrictRedis(host='localhost', port=6379, db=0)
>>> r.set('foo', 'bar')
True
>>> r.get('foo')
'bar'
```


