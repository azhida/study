## MySQL 管理
#### 返回 [MySQL基础知识](../MySQL基础知识.md) <br><br>

###### 启动及关闭 MySQL 服务器

- Windows 系统下  
在 Windows 系统下，打开命令窗口(cmd)，进入 MySQL 安装目录的 bin 目录。
   - 启动
     ```
     cd c:/mysql/bin
     mysqld --console
     ```
   - 关闭
     ```
     cd c:/mysql/bin
     mysqladmin -uroot shutdown
     ```

- Linux 系统下  

首先，用以下命令来检查MySQL服务器是否启动：
```shell
ps -ef | grep mysqld
```
如果MySql已经启动，以上命令将输出mysql进程列表， 如果mysql未启动，你可以使用以下命令来启动mysql服务器:
```shell
cd /usr/bin
./mysqld_safe &
```
关闭目前运行的 MySQL 服务器, 可以执行以下命令:
```shell
cd /usr/bin
./mysqladmin -u root -p shutdown
Enter password: ******
```


###### MySQL 用户设置
如果你需要添加 MySQL 用户，你只需要在 mysql 数据库中的 user 表添加新用户即可。  
以下为添加用户的的实例，用户名为guest，密码为guest123，并授权用户可进行 SELECT, INSERT 和 UPDATE操作权限：
> root@host# mysql -u root -p  
> Enter password:*******  
> mysql> use mysql;  
> Database changed  
> 
> mysql> INSERT INTO user (host, user, password, select_priv, insert_priv, update_priv) VALUES ('localhost', 'guest', PASSWORD('guest123'), 'Y', 'Y', 'Y');  
> Query OK, 1 row affected (0.20 sec)
> 
> mysql> FLUSH PRIVILEGES;  
> Query OK, 1 row affected (0.01 sec)  
> 
> mysql> SELECT host, user, password FROM user WHERE user = 'guest';  
> +-----------+---------+------------------+  
| host      | user    | password           |  
+-----------+---------+------------------+  
| localhost | guest | 6f8c114b58f2ce9e |  
+-----------+---------+------------------+  
1 row in set (0.00 sec)
>  

在添加用户时，请注意使用MySQL提供的 PASSWORD() 函数来对密码进行加密。 你可以在以上实例看到用户密码加密后为： 6f8c114b58f2ce9e.  
**注意**：在 MySQL5.7 中 user 表的 password 已换成了authentication_string。  
**注意**：password() 加密函数已经在 8.0.11 中移除了，可以使用 MD5() 函数代替。  
**注意**：在注意需要执行 FLUSH PRIVILEGES 语句。 这个命令执行后会重新载入授权表。  
如果你不使用该命令，你就无法使用新创建的用户来连接mysql服务器，除非你重启mysql服务器。  
你可以在创建用户时，为用户指定权限，在对应的权限列中，在插入语句中设置为 'Y' 即可，用户权限列表如下：  
   - Select_priv
   - Insert_priv
   - Update_priv
   - Delete_priv
   - Create_priv
   - Drop_priv
   - Reload_priv
   - Shutdown_priv
   - Process_priv
   - File_priv
   - Grant_priv
   - References_priv
   - Index_priv
   - Alter_priv

另外一种添加用户的方法为通过SQL的 GRANT 命令，以下命令会给指定数据库TUTORIALS添加用户 zara ，密码为 zara123 。
> 
> root@host# mysql -u root -p  
> Enter password:*******  
> mysql> use mysql;  
> Database changed  
> 
> mysql> GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP ON TUTORIALS.* TO 'zara'@'localhost' IDENTIFIED BY 'zara123';
> 
以上命令会在mysql数据库中的user表创建一条用户信息记录。  
**注意**: MySQL 的SQL语句以分号 (;) 作为结束标识。


###### /etc/my.cnf 文件配置
一般情况下，你不需要修改该配置文件，该文件默认配置如下：
```
[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock

[mysql.server]
user=mysql
basedir=/var/lib

[safe_mysqld]
err-log=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid
```
在配置文件中，你可以指定不同的错误日志文件存放的目录，一般你不需要改动这些配置。


###### 管理MySQL的命令

以下列出了使用Mysql数据库过程中常用的命令：  
```
# 选择要操作的Mysql数据库，使用该命令后所有Mysql命令都只针对该数据库。
use dbname;

# 列出 MySQL 数据库管理系统的数据库列表。
SHOW DATABASES;

# 显示指定数据库的所有表，使用该命令前需要使用 use 命令来选择要操作的数据库。
SHOW TABLES;

# 显示数据表的属性，属性类型，主键信息 ，是否为 NULL，默认值等其他信息。
SHOW COLUMNS FROM table;

# 显示数据表的详细索引信息，包括PRIMARY KEY（主键）。
SHOW INDEX FROM table;

# 该命令将输出Mysql数据库管理系统的性能及统计信息。
SHOW TABLE STATUS [FROM db_name] [LIKE 'pattern'] \G:

SHOW TABLE STATUS FROM dbname;   # 显示数据库 dbname 中所有表的信息
SHOW TABLE STATUS from dbname LIKE 'test%';     # 表名以 test 开头的表的信息
SHOW TABLE STATUS from dbname LIKE 'test%'\G;   # 加上 \G，查询结果按列打印
```


#### 读者笔记

***

用 insert 添加用户时，可能会报错:  
```
ERROR 1364 (HY000): Field 'ssl_cipher' doesn't have a default value
```
my-default.ini中有一条语句：  
指定了严格模式，为了安全，严格模式禁止通过 insert 这种形式直接修改 mysql 库中的 user 表进行添加新用户  
sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES  
将 STRICT_TRANS_TABLES 删掉之后即可使用 insert 添加

***


**添加新用户建议 GRANT 命令**
1. grant 普通数据用户，查询、插入、更新、删除 数据库中所有表数据的权利。
   ```
   grant select on testdb.* to common_user@'%';
   grant insert on testdb.* to common_user@'%';
   grant update on testdb.* to common_user@'%';
   grant delete on testdb.* to common_user@'%';
   ```
   或者，用一条 MySQL 命令来替代：
   ```
   grant select, insert, update, delete on testdb.* to common_user@'%';
   ```
2. grant 数据库开发人员，创建表、索引、视图、存储过程、函数。。。等权限。
   - grant 创建、修改、删除 MySQL 数据表结构权限。
      ```
      grant create on testdb.* to developer@'192.168.0.%';
      grant alter on testdb.* to developer@'192.168.0.%';
      grant drop on testdb.* to developer@'192.168.0.%';
      ```
   - grant 操作 MySQL 外键权限。
     ```
       grant references on testdb.* to developer@'192.168.0.%';
     ```
   - grant 操作 MySQL 临时表权限。
     ```
     grant create temporary tables on testdb.* to developer@'192.168.0.%';
     ```
   - grant 操作 MySQL 索引权限。
     ```
     grant index on testdb.* to developer@'192.168.0.%';
     ```
   - grant 操作 MySQL 视图、查看视图源代码 权限。
     ```
     grant create view on testdb.* to developer@'192.168.0.%';
     grant show view on testdb.* to developer@'192.168.0.%';
     ```
   - grant 操作 MySQL 存储过程、函数 权限。
     ```
     grant create routine on testdb.* to developer@'192.168.0.%'; -- now, can show procedure status
     grant alter routine on testdb.* to developer@'192.168.0.%'; -- now, you can drop a procedure
     grant execute on testdb.* to developer@'192.168.0.%';
     ```
3. grant 普通 DBA 管理某个 MySQL 数据库的权限。
   ```
   grant all privileges on testdb to dba@'localhost'
   ```
   其中，关键字 privileges 可以省略。
4. grant 高级 DBA 管理 MySQL 中所有数据库的权限。
   ```
   grant all on *.* to dba@'localhost'
   ```
5. MySQL grant 权限，分别可以作用在多个层次上。
   - grant 作用在整个 MySQL 服务器上：
     ```
     grant select on *.* to dba@localhost; -- dba 可以查询 MySQL 中所有数据库中的表。
     grant all on *.* to dba@localhost; -- dba 可以管理 MySQL 中的所有数据库
     ```
   - grant 作用在单个数据库上：
     ```
     grant select on testdb.* to dba@localhost; -- dba 可以查询 testdb 中的表。
     ```
   - grant 作用在单个数据表上：
     ```
     grant select, insert, update, delete on testdb.orders to dba@localhost;
     ```
     这里在给一个用户授权多张表时，可以多次执行以上语句。例如：
     ```
     grant select(user_id,username) on smp.users to mo_user@'%' identified by '123345';
     grant select on smp.mo_sms to mo_user@'%' identified by '123345';
     ```
   - grant 作用在表中的列上：
     ```
     grant select(id, se, rank) on testdb.apache_log to dba@localhost;
     ```
   - grant 作用在存储过程、函数上：
     ```
     grant execute on procedure testdb.pr_add to 'dba'@'localhost';
     grant execute on function testdb.fn_add to 'dba'@'localhost';
     ```
6. 查看 MySQL 用户权限
   1. 查看当前用户（自己）权限：
      ```
      show grants;
      ```
   2. 查看其他 MySQL 用户权限：
      ```
      show grants for dba@localhost;
      ```
7. 撤销已经赋予给 MySQL 用户权限的权限。  
   revoke 跟 grant 的语法差不多，只需要把关键字 to 换成 from 即可：
   ```
   grant all on *.* to dba@localhost;
   revoke all on *.* from dba@localhost;
   ```
8. MySQL grant、revoke 用户权限注意事项
   1. grant, revoke 用户权限后，该用户只有重新连接 MySQL 数据库，权限才能生效。
   2. 如果想让授权的用户，也可以将这些权限 grant 给其他用户，需要选项 grant option
      ```
      grant select on testdb.* to dba@localhost with grant option;
      ```
      这个特性一般用不到。实际中，数据库权限最好由 DBA 来统一管理。  
      
**注意**：创建完成后需要执行 FLUSH PRIVILEGES 语句。


***

###### 存储引擎

**InnoDB 存储引擎**  
> InnoDB 是事务型数据库的首选引擎，支持事务安全表 (ACID)，支持行锁定和外键。MySQL5.5.5 之后，InnoDB 作为默认存储引擎，InnoDB 主要特性有：
- InnoDB 给 MySQL 提供了具有提交、回滚和崩溃恢复能力的事务安全(ACID 兼容)存储引擎。InnoDB 锁定在行级并且也在 SELECT 语句中提供一个类似 Oracle 的非锁定读。这些功能增加了多用户部署和性能。在 SQL 查询中，可以自由地将 InnoDB 类型的表与其他 MySQL 的表的类型混合起来，甚至在同一个查询中也可以混合。
- InnoDB 是为处理巨大数据量的最大性能设计。它的 CPU 的效率可能是任何其它基于磁盘的关系数据库引擎所不能匹敌的。
- InnoDB 存储引擎完全与 MySQL 服务器整合，InnoDB 存储引擎为在主内存中缓存数据和索引而维持它自己的缓冲池。InnoDB 将它的表和索引存在一个逻辑表空间中，表空间可以包含数个文件（或原始磁盘分区）。这与 MyISAM 表不同，比如在 MyISAM 表中每个表被存在分离的文件中。InnoDB 表可以是任何尺寸，即使在文件尺寸被艰制为 2GB 的操作系统上。
- InnoDB 支持外键完整性约束（FOREIGN KEY)。 存储表中的数据时，每张表的存储都按主键顺序存放，如果没有显示在表定义时指定主键，InnoDB 会被每一行生成一个 6B 的 ROWID，并以此作为主健。
- InnoDB 被用在众多需要高性能的大型数据库站点上。 InnoDB 不创建目录，使用 InnoDB 时，MySQL 将在 MYSQL 数据目录下创建一个名为 ibdata1 的 10MB 大小的自动扩展数据文件，以及两个名为ib_logfile() 和 ib_logfile1 的 5MB 大小的日志文件。

**MyISAM 存储引擎**
> MyISAM 基于 ISAM 的存储引擎，并对其进行扩展。它是在 Web、数据存储和其他应用环境下最常用的存储引擎之一。  
> MyISAM 拥有较高的插入、查询速度，但不支持事务。在 MySQL5.5.5 之前的版本中，MyISAM 是默认存储引擎。  
> MyISAM 主要特性有：
- 大文件（达 63 位文件长度）在支持大文件 系统和操作系统上被支持。
- 当把删除、更新及插入操作混合使用的时候，动态尺寸的行产生更少的碎片。这要通过合并相邻被删除的块，以及若下一个块被删除，就扩展到下一块来自动完成。
- 每个 MyISAM 表最大索引数是 64，这也可以通过编译来改变。对于键长度超过 250B 的情况，一个超过 1024B 的键将被用上。
- BLOB 和 TEXT 列可以被索引。
- NULL 值被允许在索引的列中。这个值占每个键的 0~1 个字节。
- 所有数字键值以高字节优先被存储以允许一个更高的索引压缩。
- 每表一个 AUTO_INCREMENT 列的内部处理。MyISAM 为 INSERT 和 UPDATE 操作自动更新这一列。使得 AUTO_INCREMENT 列更快（至少 10%）。在序列顶的值被删除除之后就不能再利用。
- 可以把数据文件和索引文件放在不同目录。
- 每个字符列可以有不同的字符集。
- 有 VARCHAR 的表可以固定或动态记录长度。
- VARCHAR 和 CHAR 列可以多达 64KB
> 使用 MyISAM 引擎创建数据库，将生产 3 个文件。文件的名字以表的名字开始，扩展名指出文件类型：  
> frm 文件存储表定义，  
> 数据文件的扩展名为 .MYD(MYData)，  
> 索引文件的扩展名是 .MYI（MYIndex)。


**MEMORY 存储引擎**
> MEMORY 存储引擎将表中的数据存储到内存中，为查询和引用其他表数据提供快速访问。MEMORY 主要特性有：
- MEMORY 表的每个表可以多达 32 个索引，每个索引 16 列，以及 500B 的最大键长度。
- MEMORY 存储引擎执行 HASH 和 BTREE 索引。
- 可以在一个 MEMORY 表中有非唯一键。
- MEMORY 不支持 BLOB 或 TEXT 列。
- MEMORY 表使用一个固定的记录长度格式。
- MEMORY 支持 AUTO_INCREMENT 列和对包含 NULL 值的列索引。
- MEMORY 表内容被存在内存中，内存是 MEMORY 表和服务器在查询处理时的空闲中创建的内部表共享。
- MEMORY 表在所有客户端之间共享（就像其他任何非 TEMPORARY 表）。
- 当不再需要 MEMORY 表的内容时，要释放被 MEMORY 表使用的内存，应该执行 DELETE FROM 或 TRUNCATE TABLE，或者删除整个表（使用 DROP TABLE)。


**存储引擎的选择**  

|功能|MyISAM|Memory|InnoDB|Archive|
|:---:|:---:|:---:|:---:|:---:|
|存储限制|265TB|RAM|65TB|Node|
|支持事务	|No|	No|	Yes|	No|
|支持全文索引|	Yes|	No|	No	|No|
|支持数索引|	Yes|	Yes|	Yes	|No|
|支持哈希索引|	No|	Yes|	No|	No|
|支持数据缓存|	No|	N/A|	Yes|	No|
|支持外键|	No|	No|	Yes|	No|


***


**添加用户：**
```
insert into mysql.user(Host,User,Password) values("localhost","test",password("1234"));
```
报以下的错误 ERROR 1364 (HY000): Field 'ssl_cipher' doesn't have a default value 错误  
**错语原因：**  
mysql 用户表的中某些字段不能为空，没有默认值，其实是操作错误，mysql 添加用户是不能这样直接 insert user 表的。  
**解决方法：**  
正确的添加用户方法：  
```
GRANT USAGE ON *.* TO 'user01'@'localhost' IDENTIFIED BY '123456' WITH GRANT OPTION;
```
用户：user01，密码：123456，这样就添加了一个新的用户，不会出以上的错误了。


***


MySQL 8.0.11 版本之后创建用户方法如下：  
```
CREATE USER 'laowang'@'localhost' IDENTIFIED BY '123456';
```
授予账户权限的方法如下
```
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER ON *.* TO 'laowang'@'localhost';
```
授予所有权限：
```
GRANT ALL PRIVILEGES ON *.* TO 'laowang'@'localhost'；
```
查看用户权限：
```
show grants for 'laowang'@'localhost';
```


***

#### 返回 [MySQL基础知识](../MySQL基础知识.md)