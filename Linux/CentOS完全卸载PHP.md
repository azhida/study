###### 先执行
```
yum remove php
```
###### 查看剩余的软件包：
```
rpm -qa|grep php
```
###### 将剩余软件包依次卸载
```
yum remove 软件包名称
```