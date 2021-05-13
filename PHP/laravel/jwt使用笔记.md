###### 参考文章：[JWT 完整使用详解](https://learnku.com/articles/10885/full-use-of-jwt)

###### 自定义字段
```
$customClaims = ['foo' => 'bar', 'baz' => 'bob'];
// 辅助函数
$token = auth()->claims($customClaims)->attempt($credentials);
// Facade - 1
$token = JWTAuth::claims($customClaims)->attempt($credentials);
$token = \Auth::guard('api')->claims($customClaims)->fromUser($user);

// 获取自定义字段的值
$foo = JWTAuth::parseToken()->getClaim('is_kefu');
```