github 地址
```
https://github.com/z-song/demo.laravel-admin.org.git
```

安装
```
git clone https://github.com/z-song/demo.laravel-admin.org
cd demo.laravel-admin.org
composer install -vvv
```

导入数据
```
$ mysql -h 127.0.0.1 -u root -p


mysql> create database `laravel_admin_demo`;

mysql> use `laravel_admin_demo`;

mysql> source storage/mysql_dump/laravel_admin_demo.sql
```

生成网站地址并访问
```
$ php artisan serve
```