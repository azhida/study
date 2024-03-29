# 处理kdevtmpfsi病毒

- [处理kdevtmpfsi病毒](https://www.jianshu.com/p/9699251ad1d7)  
- [kdevtmpfsi 挖矿病毒清除（亲测）](https://blog.csdn.net/qq_41259576/article/details/107191691)  
- [记一次docker容器中被植入kdevtmpfsi挖矿程序](https://juejin.cn/post/6890524854941843469)
- [docker镜像中存在kdevtmpfsi挖矿程序](https://fleey.cn/archives/76.html)
- [docker镜像中存在kdevtmpfsi挖矿程序](https://www.yoyoask.com/?p=1490)
- [记一次服务器被 kdevtmpfsi 变矿机](https://segmentfault.com/a/1190000038390745)

kdevtmpfsi进程解决办法：
kdevtmpfsi有守护进程，单独kill掉 kdevtmpfsi 进程会不断恢复占用。守护进程名称为 kinsing，需要kill后才能解决问题。

```
ps -aux | grep kinsing
kill -9 29978
ps -aux | grep kdevtmpfsi
kill -9 30688 
cd /tmp/
ls
rm -rf kdevtmpfsi 
rm -rf /var/tmp/kinsing  
```

建议：  

1、 重新安装redis（千万不要赋予root权限）服务，根据客户实际需要对特定IP开放端口（利用防火墙设置，尤其是必须对外（公网）提供服务的情况下），如果只是本机使用，绑定127.0.0.1:6379 ，增加认证口令。

2、 清除定时任务 如：crontab -u redis -r

## 删除Linux下的异常定时任务
```
crontab -l //查看定时任务
crontab -r //表示删除用户的定时任务，当执行此命令后，所有用户下面的定时任务会被删除
```

## 删除文件
```
rm -rf kdevtmpfsi 
rm -rf /var/tmp/kinsing  
最后自己可以再检查一下是否还有kdevtmpfsi的相关文件，有的话就继续删除
find / -name kdevtmpfsi
find / -name kinsing
```

## 这一步很重要，很多博主没写：
这个病毒会在你的主机密钥中加入他们的公钥，这是他们留了后门的钥匙，可以免密登录你的电脑
```
//打开文件后删除不认识的公钥
vim ~/.ssh/authorized_keys
```

## 因为病毒是依赖于容器生存的，于是我便将容器停止掉，通过docker logs 实时查看容器最后10条日志：
```
docker logs -f -t --tail 10 <容器id/容器名称>
```