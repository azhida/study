## lnmp 安装教程

安装环境： Ubuntu 18.04 + nginx + PHP7.4.* + mysql5.5

###### 更新 apt-get

```
sudo apt-get update
```

###### 安装 Nginx

- Nginx 安装命令

```
sudo apt-get install nginx
```

- 测试NGINX是否安装成功
  
  - 浏览器直接访问 ip:80 ，是否出现 nginx 信息，出现说明安装成功，否则未成功
  - 创建 a.txt 文件 `vim /var/www/html/d.txt`, 文件内容随意 , 并访问 `http://ip:80/d.txt` , 看是否正确输出文件内容
  - NGINX默认站点配置文件为 `/etc/nginx/sites-enabled/default`
- Nginx 站点配置

```
vim /etc/nginx/conf.d/default.conf
```

- 配置文件内容
  
  ```
  server {
      listen 80;
      server_name localhost;
      access_log /var/log/nginx/default.access.log;
      error_log /var/log/nginx/default.error.log;
      root /var/www/html;
      index index.php index.html index.htm;
      location / {
          try_files $uri $uri/ /index.php?$query_string;
      }
      location ~ \.php$ {
          fastcgi_pass   127.0.0.1:9000;
          fastcgi_index  index.php;
          fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
          include        fastcgi_params;
      }
  }
  ```
- Nginx 命令

```
systemctl start nginx
systemctl restart nginx
systemctl stop nginx
systemctl status nginx
```

##### 安装 PHP7.4 -- 使用 第三方库 software-properties-common

- 安装 PHP

```
# 安装 add-apt-repository 命令
sudo apt-get install software-properties-common
# 用add-apt-repository命令添加源
sudo add-apt-repository ppa:ondrej/php

# 安装 php7.4 及其扩展
sudo apt-get install php7.4 php7.4-fpm php7.4-mysql php7.4-gd php7.4-mbstring php7.4-bcmath 
sudo apt-get install php7.4-dom php7.4-zip php7.4-sqlite3 php7.4-cli php7.4-soap
# 安装 phpize7.4
sudo apt-get install php7.4-dev
```

- 配置 PHP

```
# php74-fpm 默认的监听方式是sock方式，对此需要修改配置文件
sudo vim /etc/php/7.4/fpm/pool.d/www.conf
```

- ```
  # 修改 用户名和用户组
  ;user = www-data
  ;group = www-data
  user = www
  group = www
  
  #　注释 listen
  ; listen = /run/php/php7.4-fpm.sock
  #　添加
  listen = 127.0.0.1:9000
  ```
- php-fpm 命令

```
systemctl start php7.4-fpm
systemctl restart php7.4-fpm
systemctl stop php7.4-fpm
systemctl status php7.4-fpm

# 查看监听状态
sudo netstat -nlp | grep 9000
```

- 测试nginx站点是否可以正确解析php文件
  - nginx默认站点配置文件为 `/etc/nginx/sites-enabled/default`
    
    ```
    # 修改 配置文件，以支持 php文件解析
    vim /etc/nginx/sites-enabled/default
    ```
    
    ```
    server {
      listen 80 default_server;
      listen [::]:80 default_server;
    
      root /var/www/html;
    
      # Add index.php to the list if you are using PHP
      index index.html index.htm index.nginx-debian.html;
    
      server_name _;
    
      location / {
          try_files $uri $uri/ =404;
      }
    
      # pass PHP scripts to FastCGI server
      #
      location ~ \.php$ {
          # 开启这一行
          include snippets/fastcgi-php.conf;
      #
      #	# With php-fpm (or other unix sockets):
      #	fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
      #	# With php-cgi (or other tcp sockets):
          # 开启这一行
          fastcgi_pass 127.0.0.1:9000;
      }
    }
    ```
  - 创建 `phpinfo.php` 文件
    
    ```
    vim /var/www/html/phpinfo.php
    ```
    
    ```
    <?php
    phpinfo();
    ```
  - 重启 nginx 服务
    
    ```
    systemctl restart nginx
    ```
  - 浏览器访问地址 `http://ip:80/phpinfo.php` ，检查是否正常解析【注意浏览器缓存，正常来说，配置到这里，已经可以正常解析php文件了】
###### 卸载 php7
```
sudo apt-get autoremove php7*
```

##### 安装 Git 和 composer

```
apt install git
apt install composer
```
> 执行 `composer install` 提示安装PHP扩展时，根据提示安装对应扩展，命令为 `apt-get install php8.1-gd`

<br>

#### 返回 [PHP基础知识](./PHP基础知识.md)

