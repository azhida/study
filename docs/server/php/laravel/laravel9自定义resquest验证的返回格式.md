# laravel9 自定义 request 验证的返回格式

新建 request 基类文件  
app/Http/Requests/Api/FormRequest.php
```
<?php

namespace App\Http\Requests\Api;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Http\FormRequest as BaseFormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class FormRequest extends BaseFormRequest
{
    public function authorize()
    {
        return true;
    }

    # 重写 failedValidation 方法
    protected function failedValidation(Validator $validator) {
        # 拿到 验证的错误信息
        $error= $validator->errors()->all();
        # 自定义响应结果
        $res = response()->json(['msg'=>'error','code'=>'500','data'=>$error[0]], 500)
        # 抛出异常
        throw new HttpResponseException($res);
    }
}
```