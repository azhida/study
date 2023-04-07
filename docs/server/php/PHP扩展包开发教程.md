# PHP 扩展包开发教程

::: tip
学习地址：https://learnku.com/courses/creating-package/preface/2063
:::



## 常见的扩展包类型

### API SDK

为特定的服务商 API 提供 SDK，提供更方便的调用，隐藏不必要的开发细节，比如 [EasyWeChat](https://github.com/overtrue/wechat) 是对微信一系列 API 的封装，[overtrue/flysystem-qiniu](https://github.com/overtrue/flysystem-qiniu) 是对七牛 CDN API 的封装以及 [EasySMS](https://github.com/overtrue/easy-sms) 是封装了各大国内短信平台的 SDK 等。

### 业务模块

封装一些通用的业务模块，比如购物车、登录注册、权限控制等。比如：

- [Laravel Permission](https://github.com/spatie/laravel-permission) —— 角色权限管理方案
- [Socialite](https://github.com/laravel/socialite) —— 第三方登录工具
- [Laravel Markdown](https://github.com/GrahamCampbell/Laravel-Markdown) —— Markdown 解析工具

### 管理工具

对一些业务工具或者项目内容提供 UI 或者命令行管理入口。比如：

- [laravel-admin](https://github.com/z-song/laravel-admin) —— 管理员后台解决方案
- [Laravel Debugbar](https://github.com/barryvdh/laravel-debugbar) —— 应用调试工具
- [Laravel Tail](https://github.com/spatie/laravel-tail) —— 查看应用 Log 信息

### 生成器

针对重复的内容提供基于模板或者项目脚手架的生成工具。比如：

- [laravel-generator](https://github.com/InfyOmLabs/laravel-generator) —— InfyOmLabs 出品的代码生成工具
- [Laravel API Documentation Generator](https://github.com/mpociot/laravel-apidoc-generator) —— API 文档生成工具

### 系统模块封装

时间、图像处理、PDF 生成、文字提取等。比如：

- [PHPOffice](https://github.com/PHPOffice) —— Word、Excel 等 Office 产品的 PHP 阅读和编辑工具
- [Snappy](https://github.com/KnpLabs/snappy) —— HTML 页面生成 PDF，基于 Webkit 渲染引擎
- [DOMPdf](https://github.com/dompdf/dompdf) —— HTML 页面生成 PDF，基于一些常见 PHP 原生扩展实现
- [Glide](https://github.com/thephpleague/glide) —— 高品质的图像处理扩展包

### 设计模式实践

通过一些巧妙的封装，实现设计模式在应用中的实践。比如 Laravel 中的

- [Laravel Repository](https://github.com/andersao/l5-repository) —— Repository 设计模式的实现
- [hyn/multi-tenant](https://github.com/hyn/multi-tenant) —— 多租户程序结构的解决方案


当然还有 [一些其它的扩展包](https://learnku.com/laravel/projects)，不过我们常见的主要归类为以上几种，熟读一下这些优秀扩展的代码，你将获益匪浅。