# Laravel 集成 DynamoDB 替换 MySQL

要在 Laravel 项目中集成 DynamoDB 以替换 MySQL，你需要使用 Laravel 的数据库抽象层，并配置 DynamoDB 作为你的数据库连接。以下是步骤和示例代码：

## 安装 AWS SDK for PHP 包：

```sh
composer require aws/aws-sdk-php
```

## 修改 `.env` 文件，设置 DynamoDB 的配置信息：

- `.env`

```env
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_DEFAULT_REGION=us-east-1
AWS_DB_TABLE=your_dynamodb_table
```

## 创建一个新的 DynamoDbServiceProvider 来扩展 Laravel 的服务提供者功能

```sh
php .\artisan make:provider DynamoDbServiceProvider
```

- `app/Providers/DynamoDbServiceProvider.php`

```php
<?php
 
namespace App\Providers;
 
use Illuminate\Support\ServiceProvider;
use Aws\DynamoDb\DynamoDbClient;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Capsule\Manager as Capsule;
 
class DynamoDbServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->setupDynamoDb();
    }
 
    public function setupDynamoDb()
    {
        $dynamoDb = new DynamoDbClient([
            'version' => 'latest',
            'region'  => env('AWS_DEFAULT_REGION', 'us-east-1')
        ]);
 
        $db = env('AWS_DB_TABLE');
 
        $capsule = new Capsule;
 
        $capsule->addConnection([
            'driver'    => 'dynamodb',
            'key'       => $dynamoDb,
            'table'     => $db,
            'region'    => env('AWS_DEFAULT_REGION', 'us-east-1'),
        ]);
 
        $capsule->setAsGlobal();
 
        $capsule->bootEloquent();
    }
}
```

## 在 `config/app.php` 的 providers 数组中添加新的服务提供者：

- `config/app.php`

```php
return [
  // ...
  'providers' => ServiceProvider::defaultProviders()->merge([
    // ...
    App\Providers\DynamoDbServiceProvider::class,
  ])->toArray()
]
```

## 使用 Eloquent 模型与 DynamoDB 表交互，例如创建一个新的 User 模型：

- `app/Models/User.php`

```php
<?php

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'users'; // DynamoDB 表名
    protected $primaryKey = 'id';

    // 其他 Eloquent 方法
}
```

## 使用新的模型进行数据库操作：

```php
$user = User::where('email', 'example@example.com')->first();
$user->name = 'New Name';
$user->save();
```