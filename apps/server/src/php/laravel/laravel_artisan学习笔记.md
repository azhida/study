###### 维护模式
```
# 1.开启维护模式：  
php artisan down

# 2.关闭维护模式：
php artisan up

# 3.当应用处于维护模式时，所有的路由都会指向一个自定义的视图。这对于更新应用或执行维护任务时临时"禁用"当前应用是很方便的。App::down方法在app/start/global.php文件里进行了定义，它将在维护模式时将该方法输出的内容展示给用户。

# 4.维护模式 & 队列
# 当应用程序处于维护模式时, 将不接受新的队列任务 。一旦应用程序退出维护模式，队列任务的处理即恢复正常。
```

###### 迁移文件
```
# 生成迁移文件
php artisan make:migration create_users_table --create=users
php artisan make:migration add_votes_to_users_table --table=users
php artisan make:migration users_add_field --table=users

# 运行迁移文件
# 运行全部迁移文件
php artisan migrate
# 运行指迁移文件
php artisan migrate --path=database/migrations/2014_10_12_000000_create_users_table.php
```