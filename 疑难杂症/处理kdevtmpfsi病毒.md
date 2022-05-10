# 处理kdevtmpfsi病毒

原文：[处理kdevtmpfsi病毒](https://www.jianshu.com/p/9699251ad1d7)

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