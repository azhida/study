# Redis 配置

#### 返回 [Redis基础知识](../Redis基础知识.md)

---

Redis 的配置文件位于 Redis 安装目录下，文件名为 `redis.conf` (Windows 名为 redis.windows.conf)。
你可以通过 **CONFIG** 命令查看或设置配置项。

### 语法

Redis CONFIG 命令格式如下：

```
redis 127.0.0.1:6379> CONFIG GET CONFIG_SETTING_NAME
```

### 实例

```
redis 127.0.0.1:6379> CONFIG GET loglevel

1) "loglevel"
2) "notice"
```

使用 `*` 号获取所有配置项：

```
redis 127.0.0.1:6379> CONFIG GET *
```

## 编辑配置

你可以通过修改 redis.conf 文件或使用 **CONFIG set** 命令来修改配置。

### 语法

**CONFIG SET** 命令基本语法：

```
redis 127.0.0.1:6379> CONFIG SET CONFIG_SETTING_NAME NEW_CONFIG_VALUE
```

### 实例

```
redis 127.0.0.1:6379> CONFIG SET loglevel "notice"
OK
redis 127.0.0.1:6379> CONFIG GET loglevel

1) "loglevel"
2) "notice"
```

## 参数说明

redis.conf 配置项说明如下：

| 序号 | 配置项 | 说明 |
| ------ | -------- | ------ |
| 1 | `daemonize no` | Redis 默认不是以守护进程的方式运行，可以通过该配置项修改，使用 yes 启用守护进程（Windows 不支持守护线程的配置为 no ） |
| 2 | `pidfile /var/run/redis.pid` | 当 Redis 以守护进程方式运行时，Redis 默认会把 pid 写入 /var/run/redis.pid 文件，可以通过 pidfile 指定 |
| 3 | `port 6379` | 指定 Redis 监听端口，默认端口为 6379，作者在自己的一篇博文中解释了为什么选用 6379 作为默认端口，因为 6379 在手机按键上 MERZ 对应的号码，而 MERZ 取自意大利歌女 Alessia Merz 的名字 |
| 4 | `bind 127.0.0.1` | 绑定的主机地址 |
| 5 | `timeout 300` | 当客户端闲置多长秒后关闭连接，如果指定为 0 ，表示关闭该功能 |
| 6 | `loglevel notice` | 指定日志记录级别，Redis 总共支持四个级别：debug、verbose、notice、warning，默认为 notice |
| 7 | `logfile stdout` | 日志记录方式，默认为标准输出，如果配置 Redis 为守护进程方式运行，而这里又配置为日志记录方式为标准输出，则日志将会发送给 /dev/null |
| 8 | `databases 16` | 设置数据库的数量，默认数据库为0，可以使用SELECT 命令在连接上指定数据库id |
| 9 | `save  `  Redis 默认配置文件中提供了三个条件： save 900 1  save 300 10  save 60 10000  分别表示 900 秒（15 分钟）内有 1 个更改，300 秒（5 分钟）内有 10 个更改以及 60 秒内有 10000 个更改。  | 指定在多长时间内，有多少次更新操作，就将数据同步到数据文件，可以多个条件配合。|
| 10 | `rdbcompression yes` | 指定存储至本地数据库时是否压缩数据，默认为 yes，Redis 采用 LZF 压缩，如果为了节省 CPU 时间，可以关闭该选项，但会导致数据库文件变的巨大 |
| 11 | `dbfilename dump.rdb` | 指定本地数据库文件名，默认值为 dump.rdb |
| 12 | `dir ./` | 指定本地数据库存放目录 |
| 13 | `slaveof  ` | 设置当本机为 slave 服务时，设置 master 服务的 IP 地址及端口，在 Redis 启动时，它会自动从 master 进行数据同步 |
| 14 | `masterauth ` | 当 master 服务设置了密码保护时，slav 服务连接 master 的密码 |
| 15 | `requirepass foobared` | 设置 Redis 连接密码，如果配置了连接密码，客户端在连接 Redis 时需要通过 AUTH  命令提供密码，默认关闭 |
| 16 | `maxclients 128` | 设置同一时间最大客户端连接数，默认无限制，Redis 可以同时打开的客户端连接数为 Redis 进程可以打开的最大文件描述符数，如果设置 maxclients 0，表示不作限制。当客户端连接数到达限制时，Redis 会关闭新的连接并向客户端返回 max number of clients reached 错误信息 |
| 17 | `maxmemory ` | 指定 Redis 最大内存限制，Redis 在启动时会把数据加载到内存中，达到最大内存后，Redis 会先尝试清除已到期或即将到期的 Key，当此方法处理 后，仍然到达最大内存设置，将无法再进行写入操作，但仍然可以进行读取操作。Redis 新的 vm 机制，会把 Key 存放内存，Value 会存放在 swap 区 |
| 18 | `appendonly no` | 指定是否在每次更新操作后进行日志记录，Redis 在默认情况下是异步的把数据写入磁盘，如果不开启，可能会在断电时导致一段时间内的数据丢失。因为 redis 本身同步数据文件是按上面 save 条件来同步的，所以有的数据会在一段时间内只存在于内存中。默认为 no |
| 19 | `appendfilename appendonly.aof` | 指定更新日志文件名，默认为 appendonly.aof |
| 20 | `appendfsync everysec` | 指定更新日志条件，共有 3 个可选值：  no：表示等操作系统进行数据缓存同步到磁盘（快）  always：表示每次更新操作后手动调用 fsync() 将数据写到磁盘（慢，安全） everysec：表示每秒同步一次（折中，默认值） |
| 21 | `vm-enabled no` | 指定是否启用虚拟内存机制，默认值为 no，简单的介绍一下，VM 机制将数据分页存放，由 Redis 将访问量较少的页即冷数据 swap 到磁盘上，访问多的页面由磁盘自动换出到内存中（在后面的文章我会仔细分析 Redis 的 VM 机制） |
| 22 | `vm-swap-file /tmp/redis.swap` | 虚拟内存文件路径，默认值为 /tmp/redis.swap，不可多个 Redis 实例共享 |
| 23 | `vm-max-memory 0` | 将所有大于 vm-max-memory 的数据存入虚拟内存，无论 vm-max-memory 设置多小，所有索引数据都是内存存储的(Redis 的索引数据 就是 keys)，也就是说，当 vm-max-memory 设置为 0 的时候，其实是所有 value 都存在于磁盘。默认值为 0 |
| 24 | `vm-page-size 32` | Redis swap 文件分成了很多的 page，一个对象可以保存在多个 page 上面，但一个 page 上不能被多个对象共享，vm-page-size 是要根据存储的 数据大小来设定的，作者建议如果存储很多小对象，page 大小最好设置为 32 或者 64bytes；如果存储很大大对象，则可以使用更大的 page，如果不确定，就使用默认值 |
| 25 | `vm-pages 134217728` | 设置 swap 文件中的 page 数量，由于页表（一种表示页面空闲或使用的 bitmap）是在放在内存中的，在磁盘上每 8 个 pages 将消耗 1byte 的内存。 |
| 26 | `vm-max-threads 4` | 设置访问swap文件的线程数,最好不要超过机器的核数,如果设置为0,那么所有对swap文件的操作都是串行的，可能会造成比较长时间的延迟。默认值为4 |
| 27 | `glueoutputbuf yes` | 设置在向客户端应答时，是否把较小的包合并为一个包发送，默认为开启 |
| 28 | `hash-max-zipmap-entries 64`  `hash-max-zipmap-value 512` | 指定在超过一定的数量或者最大的元素超过某一临界值时，采用一种特殊的哈希算法 |
| 29 | `activerehashing yes` | 指定是否激活重置哈希，默认为开启（后面在介绍 Redis 的哈希算法时具体介绍） |
| 30 | `include /path/to/local.conf` | 指定包含其它的配置文件，可以在同一主机上多个Redis实例之间使用同一份配置文件，而同时各个实例又拥有自己的特定配置文件 |

## 读者笔记

###### 什么是守护进程？

守护进程（Daemon Process），也就是通常说的 Daemon 进程（精灵进程），是 Linux 中的后台服务进程。它是一个生存期较长的进程，通常独立于控制终端并且周期性地执行某种任务或等待处理某些发生的事件。
守护进程是个特殊的孤儿进程，这种进程脱离终端，为什么要脱离终端呢？之所以脱离于终端是为了避免进程被任何终端所产生的信息所打断，其在执行过程中的信息也不在任何终端上显示。由于在 linux 中，每一个系统与用户进行交流的界面称为终端，每一个从此终端开始运行的进程都会依附于这个终端，这个终端就称为这些进程的控制终端，当控制终端被关闭时，相应的进程都会自动关闭。

---

###### **配置 redis 外网可访问**

由于 redis 采用的安全策略，默认会只准许本地访问。需要通过简单配置，完成允许外网访问。
修改 redis 的配置文件，将所有 bind 信息全部屏蔽。

```
# bind 192.168.1.100 10.0.0.1 
# bind 192.168.1.8 
# bind 127.0.0.1
```

修改完成后，需要重新启动 redis 服务。
修改 Linux 的防火墙(iptables)，开启你的 redis 服务端口，默认是 6379。

```
-A INPUT -m state –state NEW -m tcp -p tcp –dport 6379 -j ACCEPT 
…… 
-A INPUT -j REJECT –reject-with icmp-host-prohibited
```

请注意，一定要将 redis 的防火墙配置放在 REJECT 的前面。然后执行 **service iptables restart**。
至此，就能够链接到 redis 服务，并且能够正确显示了。

> 详情请见: [配置 redis 外网可访问](https://www.runoob.com/w3cnote/redis-external-network.html)

---

强烈建议不要在公网访问 redis,因为 redis 的处理速度非常快，所以如果你的密码比较简单，很容易就会通过暴力破解破解出密码：

```
# Warning: since Redis is pretty fast an outside user can try up to
# 150k passwords per second against a good box. This means that you should
# use a very strong password otherwise it will be very easy to break.
```

---

#### 返回 [Redis基础知识](../Redis基础知识.md)

