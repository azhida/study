#### 参考 [Laravel-admin之修改操作日志](https://blog.csdn.net/qq_35816459/article/details/78632802)

###### 本文内容为转载，感谢大神指点！

#### Laravel-admin之修改操作日志

以前的后台都是使用自己手写的日志，但是最近公司工作较多，修改其他项目的任务就搭在了我的身上，今天用户要修改后台的操作日志界面，让登陆者可以更多地知道登录后端者的所有相关操作：包括谁修改了，谁删除了，谁审核了，谁添加了，这样才能根据相应的操作者进行相应的处罚。

我现在要修改的则是Laravel-admin后台，要想修改操作日志，需要如下操作：

1.找到原始操作日志控制器文件LogController.php：
```
\vendor\encore\laravel-admin\src\Controllers
```

2.找到原始中间件文件OperationLog.php：
```
\vendor\encore\laravel-admin\src\Middleware
```

3.更改配置文件的操作日志文件自动加载：
```
'operation_log' = false,
```

4.在\app\Http\Middleware目录下新建OperationLog.php文件，与原始文件内容一致，命名空间需要修改为：
```
namespace App\Http\Middleware;
```

5.在\app\Admin\Controllers目录下新建LogController.php文件，命名空间需要修改为：
```
namespace app\Admin\Controllers;
```

6.在\app\Admin目录下的routes.php文件中添加路由：
```
$router->resource('logs', LogController::class);
```

7.在\app\Http目录下的Kernel.php中添加相应的中间件信息：
```
'OperationLog' => \App\Http\Middleware\OperationLog::class,
```

以上步骤即可成功，然后根据需求进行对应信息的提取即可，但是添加数据时需要注意的是不要使用系统常量，否则系统常量字段无法插入成功！！！

以上问题全部解决了，但是新增的数据无法正常插入到数据库内，经过不断的测试，最终找到解决方案：

在\vendor\encore\laravel-admin\src\Auth\Database目录下的OperationLog.php中，将protected $fillable = ['user_id', 'path', 'method', 'ip', 'input'];中添加相对应的字段，则添加相应的显示数据正常！问题将被解决！


我们不要害怕问题，只要用心去解决，去寻找问题的真相，那么我们将会抵达真相的彼岸！！！