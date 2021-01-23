## lnmp 安装教程

#### 安装环境： Ubuntu 18.04 + nginx + PHP7.4.* + mysql5.5

##### 更新 apt-get
```
sudo apt-get update
```

##### 安装 Nginx

- Nginx 安装命令
```
sudo apt-get install nginx
```

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
```
- 配置 PHP
```
# php74-fpm 默认的监听方式是sock方式，对此需要修改配置文件
sudo vim /etc/php/7.4/fpm/pool.d/www.conf
```
```
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

# 查看监听状态
sudo netstat -nlp | grep 9000
```

##### 安装 Git 和 composer
```
apt install git
apt install composer
```
