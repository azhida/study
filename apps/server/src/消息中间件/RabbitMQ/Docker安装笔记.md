# Docker安装笔记

```
# 拉取镜像： 
docker pull rabbitmq

# 创建目录
mkdir ~/data/rabbitmq/

# 查看镜像
docker images

# 启动
docker run -d \
-v ~/data/rabbitmq:/var/lib/rabbitmq \
-p 5672:5672 \
-p 15672:15672 \
--name rabbitmq \
--restart=always \
--hostname myRabbit \
rabbitmq:management
```

## 管理界面

浏览器访问 http://192.168.124.129:15672

初始账号密码 guest/guest