# 设置Docker容器时间与宿主机同步
## 方法一：初始化容器时，容器时间与宿主机同步
使用docker run运行容器时，添加如下参数
```
-v /etc/localtime:/etc/localtime:ro
```
例如设置mysql容器时间与宿主机同步
```
docker run --restart=unless-stopped -d \
--name mysql_ys_ywzx \
-v /mysoft/mysql/ywzx/3306/conf/my.cnf:/etc/mysql/my.cnf \
-v /mysoft/mysql/ywzx/3306/data:/var/lib/mysql \
-v /mysoft/mysql/ywzx/3306/mysql-files:/var/lib/mysql-files/ \
-v /etc/localtime:/etc/localtime:ro \
-p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=自定义密码 \
mysql:8.0.27
```
## 方法二：正在运行的容器，容器时间与宿主机同步
```
docker cp -L /usr/share/zoneinfo/Asia/Shanghai  【容器名称】:/etc/localtime
# 例如mysql的容器名称为mysql_ys_ywzx
docker cp -L /usr/share/zoneinfo/Asia/Shanghai mysql_ys_ywzx:/etc/localtime
```