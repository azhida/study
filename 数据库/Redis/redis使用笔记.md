###### 进入本机redis
```
redis-cli
redis-cli -h 127.0.0.1 -p 6379 -a password
```

###### 进入远程redis
```
# windows
redis-cli.exe –h [远程ip] –p [端口号] –a [密码]

# linux
redis-cli –h [远程ip] –p [端口号] –a [密码]
```

# 列出所有key
keys *