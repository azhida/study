## Redis 安装
#### 返回 [Redis基础知识](../Redis基础知识.md) <br><br>

###### Windows 下安装
下载地址：https://github.com/tporadowski/redis/releases。  
Redis 支持 32 位和 64 位。这个需要根据你系统平台的实际情况选择，这里我们下载 Redis-x64-xxx.zip压缩包到 C 盘，解压后，将文件夹重新命名为 redis。  
打开一个 cmd 窗口 使用 cd 命令切换目录到 C:\redis 运行：
```
redis-server.exe redis.windows.conf
```
> 如果想方便的话，可以把 redis 的路径加到系统的环境变量里，这样就省得再输路径了，后面的那个 redis.windows.conf 可以省略，如果省略，会启用默认的。  
>
服务启动成功，会显示信息 ` Server started, ... `  
这时候另启一个 cmd 窗口，原来的不要关闭，不然就无法访问服务端了。  
切换到 redis 目录下运行:  
```shell
redis-cli.exe -h 127.0.0.1 -p 6379
```
```shell
# 设置键值对
set myKey abc

# 取出键值对
get myKey
```


###### Linux 源码安装
下载地址：http://redis.io/download，下载最新稳定版本。  
```shell
wget http://download.redis.io/releases/redis-6.0.8.tar.gz
tar xzf redis-6.0.8.tar.gz
cd redis-6.0.8
make
```
执行完 make 命令后，redis-6.0.8 的 src 目录下会出现编译后的 redis 服务程序 redis-server，还有用于测试的客户端程序 redis-cli：  
下面启动 redis 服务：
```shell
cd src
./redis-server
```
注意这种方式启动 redis 使用的是默认配置。也可以通过启动参数告诉 redis 使用指定配置文件，如：
```shell
cd src
./redis-server ../redis.conf
```
redis.conf 是一个默认的配置文件。我们可以根据需要使用自己的配置文件。  
启动 redis 服务进程后，就可以使用测试客户端程序 redis-cli 和 redis 服务交互了。 比如：
> `cd src`  
> `./redis-cli`  
> redis> set foo bar  
> OK  
> redis> get foo  
> "bar"  
>


###### Ubuntu apt 命令安装

```shell
# 安装Redis
sudo apt update
sudo apt install redis-server

# 启动Redis
redis-server

# 查看Redis是否启动
redis-cli
# 出现 redis 127.0.0.1:6379> 说明 启动成功
```


## 读者笔记

###### Mac 下安装
1. 官网http://redis.io/ 下载最新的稳定版本,这里是3.2.0
2. sudo mv 到 /usr/local/
3. sudo tar -zxf redis-3.2.0.tar 解压文件
4. 进入解压后的目录 cd redis-3.2.0
5. sudo make test 测试编译
6. sudo make install


###### mac 下安装也可以使用 homebrew，homebrew 是 mac 的包管理器。
1. 执行 `brew install redis`
2. 启动 redis，可以使用后台服务启动 `brew services start redis`。或者直接启动：`redis-server /usr/local/etc/redis.conf`


### 注意事项
安装Redis时，会有一个 Set the Max Memory limit 选项：  
> 如果 redis 的应用场景是作为数据库使用，那不要设置这个选项，因为数据库是不能容忍丢失数据的。  
> 如果作为临时缓存那就得看自己的需要（我这里设置了 1024M 的最大内存限制）。  
> 指定 Redis 最大内存限制，Redis 在启动时会把数据加载到内存中，达到最大内存后，Redis 会先尝试清除已到期或即将到期的 Key，当此方法处理 后，仍然到达最大内存设置，将无法再进行写入操作，但仍然可以进行读取操作。Redis 新的 vm 机制，会把 Key 存放内存，Value 会存放在 swap区。


<br>

#### 返回 [Redis基础知识](../Redis基础知识.md)