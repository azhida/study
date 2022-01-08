## 打开 [github.com.ipaddress.com](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com.ipaddress.com%2F) 获取 github 域名地址
查看 `IP Address 140.82.114.3`, 记录
```
140.82.114.3 github.com
```

## 打开 [github.global.ssl.fastly.net](https://links.jianshu.com/go?to=https%3A%2F%2Ffastly.net.ipaddress.com%2Fgithub.global.ssl.fastly.net) 获取 fastly 地址
## 查看 `IP Address	199.232.69.194`，记录
```
199.232.69.194 github.global.ssl.fastly.net
```

## 打开 `hosts` 文件，添加如下两行代码
```
140.82.114.3 github.com
199.232.69.194 github.global.ssl.fastly.net
```

## 刷新系统dns缓存
windows：  
Windows + X 打开系统命令行（管理员身份）或者 powershell
运行 ipconfig /flushdns 手动刷新系统dns缓存 注意config后面有空格
```
ipconfig /flushdns
```

再次访问 github 就成功了
