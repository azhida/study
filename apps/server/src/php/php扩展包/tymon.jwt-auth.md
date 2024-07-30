# [tymon/jwt-auth](https://packagist.org/packages/tymon/jwt-auth)
## 介绍
jwt-auth 是 Laravel 和 lumen 的 JWT 组件。JWT 是 JSON Web Token 的缩写，是一个非常轻巧的规范，这个规范允许我们使用 JWT 在用户和服务器之间传递安全可靠的信息。  

安装完成后，需要设置 JWT 的 secret，这个 secret 很重要，用于最后的签名，更换这个 secret 会导致之前生成的所有 token 无效。
## 使用
```
# 生成 jwt:secret
php artisan jwt:secret
```

## 报错

```
Could not create token: Using integers for registered date claims is deprecated, please use DateTime
```
将"lcobucci/jwt"这个包降级到"3.3.3"版本  
```
composer require lcobucci/jwt:3.3.3
```

## 根据 token 获取用户信息
```
use Tymon\JWTAuth\Facades\JWTAuth;

$token = 'aaaaaaaaa';
$user = JWTAuth::setToken($token)->authenticate();
```
