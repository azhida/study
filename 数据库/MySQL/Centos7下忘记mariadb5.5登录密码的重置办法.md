# CentOS7 下 忘记 MariaDB5.5 登录密码的重置办法

- 添加登录跳过权限检查配置
```
vim /etc/my.cnf
```
在 `[mysqld]` 配置节点下面添加 `skip-grant-tables`
```
[mysqld]
# 添加这行，跳过权限检查
skip-grant-tables
```
- 重新启动mariadb服务
```
systemctl restart mariadb
```
- 修改 MySQL登录密码
```
mysql
use mysql;
update user set password = password('123456) where user = 'root';
flush privileges;
```
- 移除登录跳过权限检查配置
```
[mysqld]
# 添加这行，跳过权限检查
# skip-grant-tables # 删除这一行
```
- 重启启动mariadb服务
```
systemctl restart mariadb
```
- 登录
```
mysql -u root -p
# 输入 刚设置的登录密码 123456 回车就可以登录mysql了
```
