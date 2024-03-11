# MongoDB

## 简介

MongoDB是一个跨平台的，面向文档的数据库，可提供高性能，高可用性和易扩展性。MongoDB致力于收集和文档的概念。

- 官网

https://www.mongodb.com

## 安装

- 下载地址

https://www.mongodb.com/try/download/community

### windows 环境

- 下载地址 windows

https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-7.0.6-signed.msi

- 安装目录

`D:\MongoDB\Server\7.0`

#### 命令

```sh
# 管理员身份运行 CMD

# 启动 MongoDB 服务
net start MongoDB

# 停止 MongoDB 服务
net stop MongoDB
```

### docker 环境

- 文档：https://www.mongodb.com/docs/manual/tutorial/install-mongodb-community-with-docker/

```sh
docker pull mongodb/mongodb-community-server
# –auth：访问mongo需要鉴权(账号密码访问),这个参数要放在最后面，否则会报错
docker run -d --name mongo -p 27017:27017 mongodb/mongodb-community-server:latest --auth
docker run -d --name mongo -p 27017:27017 mongodb/mongodb-community-server:latest
```

## 创建MongoDB用户

#### 创建用户

```sh
# 进入容器内部的命令行
docker exec -it mongo mongosh
```

```sh
# 以下命令是在 mongosh 命令行执行

# 创建用户
db.createUser({ user:'admin',pwd:'123456',roles:[ { role:'userAdminAnyDatabase', db: 'admin'}]});
# { ok: 1 }

# 验证用户
db.auth({user: 'admin', pwd: '123456'})
# { ok: 1 }
```

## mongo 用户权限

```
read：允许用户读取指定数据库
readWrite：允许用户读写指定数据库
dbAdmin：允许用户在指定数据库中执行管理函数，如索引创建、删除、查看统计或访问system.profile
dbOwner：允许用户在指定数据库中执行任意操作，增、删、改、查等
clusterAdmin：只在admin数据库中可用，赋予用户所有分片和复制集相关函数的管理权限
readAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读权限
readWriteAnyDatabase：只在admin库中可用，赋予用户所有数据库的读权限
userAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库userAdmin权限
dbAdminAnyDatabase: 只在admin数据库中可用，赋予用户所有数据库dbAdmin权限
root：只在admin数据库中可用。超级管理员用户，超级权限
```

## laravel 中集成 mongodb

- 文档：https://www.mongodb.com/docs/drivers/php-drivers/
- mongodb 扩展：https://www.php.net/manual/en/mongodb.installation.pecl.php
- mongodb 扩展：https://github.com/mongodb/mongo-php-driver/releases
- mongodb 扩展(windows php8.2)：https://github.com/mongodb/mongo-php-driver/releases/download/1.17.2/php_mongodb-1.17.2-8.2-ts-x64.zip