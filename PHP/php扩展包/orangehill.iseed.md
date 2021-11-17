# [orangehill/iseed](https://packagist.org/packages/orangehill/iseed)

## 介绍
将数据表里的数据导出成 Seeder文件

文档：[https://learnku.com/laravel/t/1929/extension-will-be-the-data-inside-and-outside-the-data-into-a-seeder-file](https://learnku.com/laravel/t/1929/extension-will-be-the-data-inside-and-outside-the-data-into-a-seeder-file)

###### 安装
```
composer require orangehill/iseed
```

###### config/app.php 文件中添加 Service Provider
```
'providers' => [
    ...
    Orangehill\Iseed\IseedServiceProvider::class,
],
```

###### 基础用法
```
# 导出指定表 users 的数据，并生成 seeder 文件
php artisan iseed users
# 导出指定的多张表 users,topics 的数据，并生成 对应 seeder 文件
php artisan iseed users,topics
```

###### 强制覆盖导出文件 -- force
```
php artisan iseed users --force
```

###### 导出指定数据库里的表 -- database
```
php artisan iseed users --database=mysql2
```