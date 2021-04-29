#### 权限控制部分 -- 路由权限控制
- 创建管理员：角色暂时留空【因为还没有创建角色】；
- 创建权限：标识和名称自己写一个，与操作的路由具有一定关联意思的就行，便于识别；
```
在laravel-admin 1.5中，权限和路由是绑定在一起的，在编辑权限页面里面设置当前权限能访问的路由，在HTTP方法select框中选择访问路由的方法，在HTTP路径textarea中填写能访问的路径。

比如要添加一个权限，该权限可以以GET方式访问路径/admin/users，那么HTTP方法选择GET，HTTP路径填写/users。

如果要访问前缀是/admin/users的所有路径，那么HTTP路径填写/users*，如果权限包括多个访问路径，换行填写每条路径
```
- 创建角色：可以配置刚刚创建的权限了；
```
必须赋予Dashboard（显示仪表盘）、Login（登入、登出）、User setting（用户信息设置，密码修改等）权限。
否则会出现奇奇怪怪的BUG，比如没有 Login 权限就只能登入，但无法登出。
```
- 给管理员赋予角色：编辑管理员页面将刚创建的角色选上就行

#### 菜单权限控制
```
创建菜单时，可以指定权限，也可以同时指定角色
```

#### since v1.7.16 内置数据导出功能，导出 csv 乱码解决办法：

```
$grid->export(function ($export) {

    print(chr(0xEF).chr(0xBB).chr(0xBF)); // 添加这一行，可以解决导出的csv文件乱码问题

    $export->filename('Filename.csv');

    $export->except(['column1', 'column2' ...]);

    $export->only(['column3', 'column4' ...]);

    $export->originalValue(['column1', 'column2' ...]);

    $export->column('column_5', function ($value, $original) {
        return $value;
    });

});
```

#### 备份和导入管理后台菜单数据
```
# 导出数据，生成文件 database/seeders/AdminTablesSeeder.php 
# 备份5个数据表：admin_menus、admin_permissions、admin_roles、admin_role_menu、admin_role_permissions
php artisan admin:export-seed

# 导入数据
php artisan db:seed --class=AdminTablesSeeder

# 额外：如果管理后台没有超级管理员，则创建一个管理员用户
php artisan admin:create-user
```
