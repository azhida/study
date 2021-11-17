# [encore/laravel-admin](https://packagist.org/packages/encore/laravel-admin)
## 介绍
一个可以快速构建后台管理的扩展包，它提供了页面组件和表单元素等功能，只需要使用很少的代码就实现功能完善的后台管理功能。

使用手册：[http://laravel-admin.org/docs/zh](http://laravel-admin.org/docs/zh)

## 基本使用
创建 管理后台 UsersController，其中 --model=App\\Models\\User 代表新创建的这个控制器是要对 App\Models\User 这个模型做增删改查。
```
php artisan admin:make UsersController --model=App\\Models\\User
```

新增角色时要注意，权限 要点击选择 Login / User setting / Dashboard / 用户管理，前两个权限是必须的，否则该用户将无法登录后台和修改资料，第三个权限是管理后台的首页，如果没有这个权限，在登录的时候会报错。
