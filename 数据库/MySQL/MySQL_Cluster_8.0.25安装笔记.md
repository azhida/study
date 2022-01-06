#### 下载 软件
- MySQL下载地址 [https://dev.mysql.com/downloads/cluster/](https://dev.mysql.com/downloads/cluster/)
- Microsoft Visual C++ Redistributable for Visual Studio 2019 [下载地址](https://visualstudio.microsoft.com/zh-hans/downloads/#microsoft-visual-c-redistributable-for-visual-studio-2019)
- 步骤
```
# 选 Windows (x86, 64-bit), MSI Installer ， 点 Download
# 选择 No thanks, just start my download.
```
#### 安装
- 安装刚下载的程序 mysql-cluster-8.0.25-winx64.msi ，可以自定义安装目录
- 在根目录下添加 my.ini 配置文件
```
[mysqld]
# 设置3306端口
port=3306
# 设置mysql的安装目录
basedir=D:\\MySQL8
# 设置mysql数据库的数据的存放目录
#datadir=D:\\MySQL8\\Data
# 允许最大连接数
max_connections=200
# 允许连接失败的次数。
max_connect_errors=10
# 服务端使用的字符集默认为utf8mb4
character-set-server=utf8mb4
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
# 默认使用“mysql_native_password”插件认证
#mysql_native_password
default_authentication_plugin=mysql_native_password
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8mb4
[client]
# 设置mysql客户端连接服务端时默认使用的端口
port=3306
default-character-set=utf8mb4
```
- 配置系统变量
```
# 此电脑 -- 右键 -- 属性 -- 高级系统设置 -- 环境变量 -- 系统变量/Path 双击 -- 新建 写入 D:\MySQL8\bin -- 确定 -- 确定 -- ……
```
- 初始化MySQL
```
# 以管理员身份运行cmd
# 开始 右键 -- 搜索 -- cmd -- 选 以管理员身份运行
# cmd 命令
D:
cd MySQL8/bin
# 初始化MySQL【安装成功后并记住初始密码为 root@localhost：后面的内容】
mysqld --initialize --console
# 安装 MySQL
mysqld --install
# 启动MySQL服务
net start mysql
# Navicat连接MySQL并修其密码，安装完成
```

#### 卸载已安装的MySQL
```
# 管理员模式下 CMD命令
# 停止MySQL服务
net stop mysql
# 删除MySQL服务
sc delete mysql
```
#### 安装MySQL并指定服务名称为 MySQL8_NDB
```
# 安装 MySQL8_NDB
mysqld --install mysql8_ndb
# 启动 服务 mysql8_ndb
net start mysql8_ndb
# 停止服务
net stop mysql8_ndb
```

###### Linux参考 [第一篇：mysqlcluster数据库集群的搭建和配置](https://blog.csdn.net/csolo/article/details/87086086)