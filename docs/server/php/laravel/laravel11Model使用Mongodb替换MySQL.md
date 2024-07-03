# Laravel 11 使用 Mongodb 替换 MySQL

## 安装依赖包 `mongodb/laravel-mongodb`

```sh
composer require mongodb/laravel-mongodb
```

## 添加服务

```php
// bootstrap/providers.php

<?php

return [
    App\Providers\AppServiceProvider::class,
    # add
    MongoDB\Laravel\MongoDBServiceProvider::class,
    MongoDB\Laravel\Auth\PasswordResetServiceProvider::class,
];

```

## 添加数据库连接配置

```php
// config/database.php

<?php

use Illuminate\Support\Str;

return [
    // ...

    'connections' => [

        'mongodb' => [
            'driver' => 'mongodb',
            'dsn' => env('MongoDB_URI', 'mongodb://127.0.0.1:27017'),
            'host' => env('MongoDB_HOST', '127.0.0.1'),
            'port' => env('MongoDB_PORT', 27017),
            'database' => env('MongoDB_DATABASE', 'db-name'),
            'username' => env('MongoDB_USERNAME', null),
            'password' => env('MongoDB_PASSWORD', null)
        ],

        // ...
        
    ],
    
    // ...
];

```

## 数据模型

```php
// app/Models/MongoBaseModel.php

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class MongoBaseModel extends Model
{
    use HasFactory;

    protected $connection = 'mongodb';

    protected $appends = ['id'];

    protected $hidden = ['_id'];

    protected $guarded = ['_id', 'id'];
}

```

```php
// app/Models/Role.php

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Role extends MongoBaseModel
{
    use HasFactory;

    // protected $fillable = [
    //     'name',
    //     'key',
    //     'remark',
    //     'sort',
    // ];

}

```