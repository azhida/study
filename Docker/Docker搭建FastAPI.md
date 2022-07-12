# Docker 构建 FastAPI 服务容器

## 安装 docker

安装 [看这里](安装Docker.md) 。

## 创建 容器 fastapi-demo

> 注： laravel9 的代码路径 `/var/www/fastapi-demo/`

- 创建容器 fastapi-demo 并启动
```
# docker run 创建容器
# -d # 后台运行
# -p 8082:80 # 映射端口本机8082到容器80
# --name fastapi-demo # docker 容器名字 fastapi-demo
# -v /etc/localtime:/etc/localtime:ro 容器时间与宿主机时间一致
# -v /var/www/:/var/www # 映射网页存放目录【网页代码】
# tiangolo/uvicorn-gunicorn-fastapi:python3.7 # 镜像

sudo docker run -d \
--name fastapi-demo \
-p 8082:80 \
-v /etc/localtime:/etc/localtime:ro \
-v /var/www/:/var/www \
tiangolo/uvicorn-gunicorn-fastapi:python3.7
```

- 访问 [http://ip:8082](http://ip:80821) ，就可以看到 fastapi demo 首页了
> 注意：ip 对应的 8082 端口需要开放外部访问权限，否则访问失败  


## 配置 nginx 反向代理支持 域名访问
看这里： [Docker搭建Nginx反向代理服务器](Docker搭建Nginx反向代理服务器.md)