###### 新建文件 app\Exceptions\ApiException.php
```
<?php

namespace App\Exceptions;

class ApiException extends \Exception
{
    const ERROR_CODE = '1';
    const ERROR_MSG  = 'Operation failure!';

    private $data = [];
    private $meta = [];

    public function __construct(string $message, $data = [], $meta = [], string $code = '1')
    {
        $this->code = $code;
        $this->message  = $message ?: self::ERROR_MSG;
        $this->data = $data;
        $this->meta = $meta;
    }

    public function render()
    {
        return response()->json([
            'code' => $this->code,
            'msg' => __($this->message),
            'meta' => $this->meta,
            'data' => $this->data,
        ], 200);
    }
}

```
###### 修改文件 app\Exceptions\Handler.php
在 $dontReport 数组中，添加刚刚新建的异常类 ApiException::class 即可
```
<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     * 不需要抛出异常的列表
     * @var array
     */
    protected $dontReport = [
        ApiException::class, // 此处添加新建的异常类即可，其他地方无需修改
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }
}
```