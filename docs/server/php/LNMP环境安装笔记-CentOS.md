# LNMP 安装教程 CentOS

安装环境： centos7.6 + nginx + PHP7.3.* + mysql5.5

## 安装 nginx

```shell
# yum 安装 nginx
yum update
yum remove nginx
yum install nginx

# 设定防火墙，允许 http与https封包通过
systemctl restart firewalld.service
firewall-cmd --permanent --zone=public --add-service=http
firewall-cmd --permanent --zone=public --add-service=https
firewall-cmd --reload

# 启动nginx并将其设定为开机自启动
systemctl restart nginx
systemctl enable nginx
```

- 测试 nginx安装是否成功：直接访问IP地址，出现 nginx页面，说明安装成功
- 配置nginx
  将 `/etc/nginx/nginx.conf` 配置文件内的 默认server模块 监听 8080端口，后面用 `/etc/nginx/conf.d/default.conf` 监听 80端口

```shell
# 修改nginx的配置文件 
vim /etc/nginx/nginx.conf
```

```shell
server {
    # listen       80 default_server;
    # listen       [::]:80 default_server;
    listen       8080 default_server;
    listen       [::]:8080 default_server;  

    server_name  _;
    root         /usr/share/nginx/html;

    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    location / {
    }

    error_page 404 /404.html;
        location = /40x.html {
    }

    error_page 500 502 503 504 /50x.html;
        location = /50x.html {
    }
}
```

```shell
# 添加段代码
vim /etc/nginx/conf.d/default.conf
```

```shell
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.php index.html index.htm;
    #charset koi8-r;
    #access_log /var/log/nginx/log/host.access.log main;
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }
    #error_page 404 /404.html;
    # redirect server error pages to the static page /50x.html
    #
    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
    }
    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    # proxy_pass http://127.0.0.1;
    #}
    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    location ~ \.php$ {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
        try_files $uri $uri/ /index.php?$query_string;
    }
}
```

```shell
# 重启nginx服务
systemctl restart nginx
```
### 配置 https
```
# 先备份，便于出错恢复
mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf-bak
# 编辑配置信息
vim /etc/nginx/conf.d/default.conf
```
监听 443 端口 , 并 将 80端口 转发 到 443
```
server {
    # 监听443端口
    listen 443;
    #你的域名
    server_name demo.test; 
    ssl on;
    # ssl证书的pem文件路径
    ssl_certificate  /root/card/demo.test.pem;
    # ssl证书的key文件路径
    ssl_certificate_key /root/card/demo.test.key;

    root /usr/share/nginx/html;
    index index.php index.html index.htm;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
        try_files $uri $uri/ /index.php?$query_string;
    }
}

server {
    listen 80;
    server_name demo.test;
    #将请求转成https
    rewrite ^(.*)$ https://$host$1 permanent;
}
```

## yum 安装 php7.3.*

```shell
# 采用 Remi和EPEL仓库 内的7.3.1的安装资源
# 安装EPEL
yum install epel-release
# 安装remi
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm

# 安装php7.3
yum --enablerepo=remi-php73 install php

# 测试是否正确安装
php -v

# 安装php7.3系列的附属组件模块
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt php-mysqlnd php-process php-intl php-redis php-bcmath php-pecl-zip

# 通过下列命令查看还可以安装哪些组件
yum --enablerepo=remi-php73 search php | grep php73
```

- 测试运行php脚本

```shell
vim /usr/share/nginx/html/phpinfo.php
```

- ```shell
  <?php
  phpinfo();
  ```
  
  - 注：在nginx的内容存放目录  /usr/share/nginx/html 内建立 phpinfo.php文件，通过浏览器访问该文件（访问地址：http://服务器ip/phpinfo.php），若能运行说明成功，否则需安装php-fpm
- 安装php-fpm，并对nginx进行配置，使得nginx可以通过php-fpm来处理php的任务

```shell
# 安装php-fpm并设置为开机启动
yum --enablerepo=remi-php73 install php-fpm
systemctl restart php-fpm
systemctl enable php-fpm
```

```shell
# 配置PHP运行环境
vim /etc/php.ini
```

- ```
  cgi.fix_pathinfo = 1
  date.timezone = PRC
  ```

```shell
# 修改php-fpm 的配置文件
vim /etc/php-fpm.d/www.conf
```

- ```shell
  user = www        #（默认为apache，以后的PHP项目都用www来运行）
  group = www       #（默认为apache，以后的PHP项目都用www来运行）
  listen = 127.0.0.1:9000  # 监听 9000端口，与 nginx配置文件 /etc/nginx/conf.d/default.conf 的 fastcgi_pass 127.0.0.1:9000; 保持一致
  listen.owner = nobody
  listen.group = nobody
  ```
- 添加 www:www 用户组:用户名（因为我们的 php-fpm 是 用 www:www 来运行的，不添加的话，启动php-fpm会报错）

```shell
groupadd www
useradd -g www www
```

```shell
# 重启php-fpm服务
systemctl restart php-fpm
```

- 注：如果项目运行中报错：Non-static method Redis::hGet() cannot be called statically，说明 我们安装的redis扩展 和 laravel自带的扩展 predis/predis 发生冲突了
- redis扩展冲突的两种解决办法：
  
  - 删除我们安装的 php-redis 扩展
  
  ```shell
  yum --enablerepo=remi-php73 remove php-redis
  ```
  
  - 删除 laravel项目 composer.json 中的 predis/predis
- 再次测试info.php页面是否可以打开，访问地址：http://服务器ip/phpinfo.php

## yum 安装 php7.4.*

```
# 采用 Remi和EPEL仓库内的安装资源
# 安装EPEL
yum install epel-release
# 安装remi (下面 remi-release-7.rpm 或 remi-release-8.rpm 任选一个)
rpm -ivh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-8.rpm

# 安装php7.4
yum --enablerepo=remi install php74-php

# 安装所需要php扩展模块，注：扩展安装格式php74-php-扩展模块名，缺什么扩展只要按照格式安装相应模块即可
yum --enablerepo=remi install php74-php php74-php-fpm php74-php-mbstring php74-php-gd php74-php-xml php74-php-sockets php74-php-session php74-php-snmp php74-php-mysql
# 安装 phpize （php74-php-fpm-devel）
yum --enablerepo=remi install php74-php php74-php-devel
# 安装扩展 bcmath
yum --enablerepo=remi install php74-php-bcmath
yum --enablerepo=remi install php74-php-posix

#运行并查看版本
php74 -v

# 操作 php-fpm 命令
systemctl start php74-php-fpm
systemctl restart php74-php-fpm
systemctl stop php74-php-fpm
# 添加自动启动
systemctl enable php74-php-fpm
# 查看 php-fpm 运行状态
systemctl status php74-php-fpm

#链接php文件
ln -s /usr/bin/php74 /usr/bin/php
# 查看php7.4的安装路径
whereis php74
# 看到 /usr/bin/php74
cd /usr/bin/ && ll
# 查看 /usr/bin/php74 具体指向路径为：php74 -> /opt/remi/php74/root/usr/bin/php，说明 php7.4安装在了 /opt/remi/php74/ 下
# 查看 phpize 是否安装
cd /opt/remi/php74/root/usr/bin && ll
# 链接 phpize 文件
ln -s /opt/remi/php74/root/usr/bin/phpize /usr/bin/phpize
# 链接 php-config 文件
ln -s /opt/remi/php74/root/usr/bin/php-config /usr/bin/php-config
```
如果报错如下，说明扩展包未安装
```
Can't find PHP headers in /opt/remi/php74/root/usr/include/php
The php74-php-devel package is required for use of this command.
```
报错解决办法
```
# 安装 phpize （php74-php-fpm-devel）
yum --enablerepo=remi install php74-php php74-php-devel
```

修改配置文件

```
vim /etc/opt/remi/php74/php-fpm.d/www.conf
```

```
# user = apache
# group = apache
user = www
group = www
listen = 127.0.0.1:9000
```
配置文件 `php.ini` 位置： `/etc/opt/remi/php74/php.ini`

## yum 安装 php8.0
- 添加remi源（可能需要提前安装epel-release）
```
yum install -y https://rpms.remirepo.net/enterprise/remi-release-7.rpm
```
- 单独启用php80的源（没有yum-config-manager命令的话需要安装yum-utils）
```
yum-config-manager --disable 'remi-php*'
yum-config-manager --enable remi-php80
```
- 安装php及其拓展
```
yum install -y php php-bcmath php-cli php-common php-devel \
php-fpm php-gd php-intl php-ldap php-mbstring php-mysqlnd \
php-odbc php-pdo php-pear php-pecl-xmlrpc php-pecl-zip php-process \
php-snmp php-soap php-sodium php-xml
```
- 版本验证
```
php -v
# 看到 php 8.0 了
```
> 注意：如果提示缺少什么依赖没安装，就随手先安装了再安装 php 就好了

## 卸载 PHP

```
# 先查看 PHP安装包列表
rpm -qa | grep php
```

安装包列表

> php-common-7.3.25-1.el7.remi.x86_64

```
# 卸载对应安装包：yum remove 安装包
yum remove php-common-7.3.25-1.el7.remi.x86_64
```

## 卸载 php7.4

```
yum remove php74-php*
```

## 安装 MySQL - Centos7 快速安装 MariaDB5.5

```shell
# 安装
yum install mariadb mariadb-server

# 启动和开机启动
systemctl start mariadb
systemctl enable mariadb
```

- 设置root密码

```shell
mysql_secure_installation
# Remove anonymous users? [Y/n] Y 删除匿名用户：是
# Disallow root login remotely? [Y/n] n 是否禁止远程访问：否
# Remove test database and access to it? [Y/n] n # 这里不删除测试数据库
# Reload privilege tables now? [Y/n] Y # 这里必须Y确认才能使修改生效
```

```shell
# 登录 MySQL
mysql -u root -p
```

- 注：解决 mysql 1130 远程连接失败的问题（要在 阿里云 控制台 开启 3306访问权限，否则也是无法访问）

```shell
# 赋予并刷新MySQL权限
grant all privileges on *.* to root@"%" identified by 'mysql root用户的登录密码' with grant option;
flush privileges;
```

- 注：如果 阿里云/腾讯云 控制台 已经开启了 3306权限，root用户远程访问权限也给了，还是无法连接，可以尝试重启服务器

```shell
# 重启 MySQL 服务器 - mariadb
systemctl start mariadb
```

### 连接报错的解决办法
错误：
```
ERROR 1698 (28000): Access denied for user 'root'@'localhost'
```
解决：
```
use mysql;
update user set password = password('123456) where user = 'root';
flush privileges;
```

## 安装git

```shell
yum install git
```

## 全局安装composer（需要PHP执行，所以要先安装php）

```shell
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

## 安装 npm

```shell
yum install npm
```

## 安装 yarn （注意要先安装 npm）

```shell
curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
sudo yum install yarn
```

## 安装 Redis

```shell
# 由于CentOS官方yum源里面没有Redis,这里需要安装一个第三方的yum源,这里用了Fedora的epel仓库
yum install epel-release
# yum 安装 redis
yum install redis
# 启动redis
systemctl start redis
# 开机启动redis
systemctl enable redis
```

```shell
# 修改端口号/密码等配置
vim /etc/redis.conf
```

- - 注释掉ip绑定，大概在 line:61（bind 127.0.0.1 只允许本地调试，不注释掉的话，远程连接redis的时候会提示：redis.clients.jedis.exceptions.JedisConnectionException: java.net.ConnectException: Connection refused: connect）
    <br>/etc/redis.conf
    ```
    # bind 127.0.0.1
    ```
  - 关闭保护模式，大概在 line:80（不关闭的话远程这个redis会提示：redis.clients.jedis.exceptions.JedisDataException: DENIED Redis is running in protected mode ）
    <br>/etc/redis.conf
    ```
    protected-mode no
    ```

```shell
# 重启redis
systemctl restart redis
```

