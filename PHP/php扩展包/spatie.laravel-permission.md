# [spatie/laravel-permission](https://github.com/spatie/laravel-permission)

## 介绍
权限管理包

## 选择理由
- 作者在积极维护；
-  详尽的文档；
 - 容易理解的数据库结构；
 - 跟着 Laravel 自带的授权风格走，不会产生冲突；
 - 重视性能优化 —— 缓存角色和权限信息，高速读取。
 
 ## 安装
 ```
composer require "spatie/laravel-permission:~5.5"
```
生成数据库迁移文件：
```
php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider" --tag="migrations"
```

数据表各自的作用：
- roles —— 角色的模型表；
- permissions —— 权限的模型表；
- model_has_roles —— 模型与角色的关联表，用户拥有什么角色在此表中定义，一个用户能拥有多个角色；
- role_has_permissions —— 角色拥有的权限关联表，如管理员拥有查看后台的权限都是在此表定义，一个角色能拥有多个权限；
- model_has_permissions —— 模型与权限关联表，一个模型能拥有多个权限。

从最后一张表中可以看出，laravel-permission 允许用户跳过角色，直接拥有权限。

数据迁移：
```
php artisan migrate
```
生成配置信息：
```
php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider" --tag="config"
```
配置信息存放于 config/permission.php

## 使用
在 User 中使用 laravel-permission 提供的 Trait —— HasRoles，此举能让我们获取到扩展包提供的所有权限和角色的操作方法。

app/Models/User.php
```
<?php
.
.
.
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasRoles;
    .
    .
    .
}
```

## 使用示例

### 初始化角色和权限
- 生成迁移文件
```
php artisan make:migration seed_roles_and_permissions_data
```
- 写入角色和权限内容

database/migrations/{timestamp}_seed_roles_and_permissions_data.php
```
.
.
.
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
.
.
.
    public function up()
    {
        // 需清除缓存，否则会报错
        app(Spatie\Permission\PermissionRegistrar::class)->forgetCachedPermissions();

        // 先创建权限
        Permission::create(['name' => 'manage_contents']);
        Permission::create(['name' => 'manage_users']);
        Permission::create(['name' => 'edit_settings']);

        // 创建站长角色，并赋予权限
        $founder = Role::create(['name' => 'Founder']);
        $founder->givePermissionTo('manage_contents');
        $founder->givePermissionTo('manage_users');
        $founder->givePermissionTo('edit_settings');

        // 创建管理员角色，并赋予权限
        $maintainer = Role::create(['name' => 'Maintainer']);
        $maintainer->givePermissionTo('manage_contents');
    }

    public function down()
    {
        // 需清除缓存，否则会报错
        app(Spatie\Permission\PermissionRegistrar::class)->forgetCachedPermissions();

        // 清空所有数据表数据
        $tableNames = config('permission.table_names');

        Model::unguard();
        DB::table($tableNames['role_has_permissions'])->delete();
        DB::table($tableNames['model_has_roles'])->delete();
        DB::table($tableNames['model_has_permissions'])->delete();
        DB::table($tableNames['roles'])->delete();
        DB::table($tableNames['permissions'])->delete();
        Model::reguard();
    }
.
.
.
```

- 为用户指派角色

生成用户填充数据以后，为 1 号和 2 号用户分别指派角色：

database/seeders/UsersTableSeeder.php
```
<?php
.
.
.

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        .
        .
        .

        // 初始化用户角色，将 1 号用户指派为『站长』
        $user->assignRole('Founder');

        // 将 2 号用户指派为『管理员』
        $user = User::find(2);
        $user->assignRole('Maintainer');
    }
}
```

- 刷新测试数据
```
php artisan migrate:refresh --seed
```

## 方法说明
- 新建角色
```
use Spatie\Permission\Models\Role;
$role = Role::create(['name' => 'Founder']);
```
- 为角色添加权限：
```
use Spatie\Permission\Models\Permission;

Permission::create(['name' => 'manage_contents']);
$role->givePermissionTo('manage_contents');
```
- 赋予用户某个角色：
```
// 单个角色
$user->assignRole('Founder');

// 多个角色
$user->assignRole('writer', 'admin');

// 数组形式的多个角色
$user->assignRole(['writer', 'admin']);
```
- 检查用户角色：
```
// 是否是站长
$user->hasRole('Founder');

// 是否拥有至少一个角色
$user->hasAnyRole(Role::all());  

// 是否拥有所有角色
$user->hasAllRoles(Role::all());   
```
- 检查权限：
```
// 检查用户是否有某个权限
$user->can('manage_contents'); 

// 检查角色是否拥有某个权限
$role->hasPermissionTo('manage_contents');  
```
- 直接给用户添加权限：
```
// 为用户添加『直接权限』
$user->givePermissionTo('manage_contents');

// 获取所有直接权限
$user->getDirectPermissions() 
```

