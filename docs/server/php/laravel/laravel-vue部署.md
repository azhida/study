#### laravel项目，public目录下，部署两个vue子项目，并去掉vue路由中的#号
- pc端目录：  /var/www/laravel/public/pc/
- web端目录： /var/www/laravel/public/web/
###### nginx部署方法：在 server 里配置
```
    location ^~ /pc/ {
        alias /var/www/laravel/public/pc/;
        index index.html index.htm;
        try_files $uri $uri/ /pc/index.html;
    }

    location ^~ /web/ {
        alias /var/www/laravel/public/web/;
        index index.html index.htm;
        try_files $uri $uri/ /web/index.html;
    }
```