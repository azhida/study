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


## Composer 基础使用

### Composer 命令行工具的基础使用

> 注意：`vendor/package` 为包名示例，请替换为具体需要的包名称

#### 安装依赖

```sh
composer require vendor/package
```

或者

```sh
composer install
```

#### 更新依赖

```sh
composer update [vendor/package]
```

包名是可选的，指定时将更新指定的包并更新它所依赖的包，不指定时检查所有包的新版本。

#### 删除依赖

```sh
composer remove vendor/package
```

### 学习资料

- [基于 Composer 的 PHP 模块化开发](https://learnku.com/articles/5333/modular-development-of-php-based-on-composer)
- [Composer 中文文档](https://learnku.com/docs/composer/2018)
- [Composer 官方文档](https://getcomposer.org/doc/)

## 扩展包的基础结构

虽然说扩展包并没有什么强制的规定一定要如何组织代码，但是我们推荐根据业界约定俗成的结构：

```md
weather/
├── .editorconfig      # 编辑器配置文件，比如缩进大小、换行模式等
├── .gitattributes     # git 配置文件，可以设计导出时忽略文件等
├── .gitignore         # git 忽略文件配置列表
├── .php_cs            # PHP-CS-Fixer 配置文件
├── README.md    
├── composer.json
├── phpunit.xml.dist
├── src
│   └── .gitkeep
└── tests
    └── .gitkeep
```

上面这个包结构适用于几乎所有的 PHP 扩展包，如果你的扩展包有其它附加内容，也可以自由地做一些调整，只要满足清晰合理即可。

### 结构说明

- src 目录

    通常我们将源代码放置到此目录下，文件名与类命名遵循驼峰命名法，目录与命名空间一致。

    ::: info 注意
    我们命名空间通常是按包名来的，然后 src 映射到驼峰写法的命名空间（例如：包 `overtrue/weather` 的命名空间为 `Overtrue\Weather`）。

    比如 src\Weather.php 文件的命名空间为 `Overtrue\Weather`，类名为 `Overtrue\Weather\Weather`。
    代码组织结构请符合 [PSR-4 规范](https://learnku.com/docs/psr/psr-4-autoloader/1608)。
    :::


- tests 目录

    用于存放单元测试或者功能测试的测试用例代码，与 src 组织规则基本一致。

- .editorconfig 文件

    [EditorConfig](https://editorconfig.org/) 的配置文件，EditorConfig 是一套用于统一代码格式的解决方案，很多项目都有用到，比如 Laravel、jQuery、Underscore 和 Ruby 等等。

    EditorConfig 可以帮助开发者在不同的编辑器和 IDE 之间定义和维护一致的代码风格。EditorConfig 包含一个用于定义代码格式的文件和一批编辑器插件，这些插件可以让编辑器读取配置文件并依此格式化代码。EditorConfig 的配置文件十分易读，并且可以很好的在 VCS（Version Control System）下工作。

    简单的说就是，这个配置文件定义了一些规则，比如 PHP 缩进是用空格还是用 Tab。它会被现代的编辑器所识别并应用（部分编辑器可能需要安装对应的插件，请参考 [EditorConfig 官网](https://editorconfig.org/) ）使用。

- .gitattributes

    Git 的属性配置文件，你可以对个别文件或目录定义不同的合并策略，让 Git 知道怎样比较非文本文件，在你提交或签出前让 Git 过滤内容。你将在这部分了解到能在自己的项目中使用的属性，以及一些实例。更多请参考：[《自定义 Git - Git 属性》- git-scm.com](https://git-scm.com/book/zh/v1/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git%E5%B1%9E%E6%80%A7)

- .gitignore

    Git 忽略文件列表配置文件，将不需要纳入版本控制的文件或者目录按行配置在该文件即可。

- .php_cs

    代码格式修复工具 [PHP-CS-Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer) 配置文件，它可以按配置的标准自动修复代码格式，以及统一文件头注释等非常多的功能。

- README.md

    项目说明文档，一份项目介绍与使用指引，维护状态授权方式等。

- composer.json

    [Composer](https://getcomposer.org/) 配置文件。

- phpunit.xml.dist

    [PHPUnit](https://phpunit.de/) 配置文件，指定测试目录与测试环境变量等，具体内容请参考官方文档：[《组织测试：用 XML 配置来编排测试套件》- PHPunit](https://phpunit.readthedocs.io/zh_CN/latest/organizing-tests.html#xml)。

- .gitkeep  

    如果一个目录为空，我们是无法纳入到版本控制中的，所以我们创建了一个随意命名（最好还是按业界通用做法命名为 `.gitkeep`）的隐藏文件来保证 **目录不为空**。


### 包构建工具

我们在开发过程中每次都去建立这个目录会比较麻烦，所以我们也做了一个包结构生成工具来完成这些基础工作：

[overtrue/package-builder：](https://github.com/overtrue/package-builder)

用法非常的简单，我推荐大家全局安装：

```sh
composer global require "overtrue/package-builder" --prefer-source
```

#### 基本用法

```sh
package-builder build [目标目录]
```

比如我们打算做一个扩展包叫 `weather` ，目录是当前目录下：

```sh
package-builder build ./weather
```

然后会以交互问答形式要求输入一些基本信息。

其中大部分都是默认值即可。然后我们就会得到这样的目录结构了：

```md
weather/
├── .editorconfig      # 编辑器配置文件，比如缩进大小、换行模式等
├── .gitattributes     # git 配置文件，可以设计导出时忽略文件等
├── .gitignore         # git 忽略文件配置列表
├── .php_cs            # PHP-CS-Fixer 配置文件
├── README.md    
├── composer.json
├── phpunit.xml.dist
├── src
│   └── .gitkeep
└── tests
    └── .gitkeep

2 directories, 9 files
```

接下来就要进入到我们的开发部分了。


## 需求分析与功能设计 - 天气 SDK

我们以一个天气预报 SDK 为例来讲解本门课程，天气接口我们使用 [高德开放平台](https://lbs.amap.com/api/webservice/guide/api/weatherinfo/) 提供的，免费限次使用，开始之前我们需要做一下需求分析与功能设计。

### 需求分析

我们对天气接口的使用需求较为简单，主要为以下两个：

- 按地名查询实时天气；
- 获取最近的天气预报。

::: info
高德开放平台提供的天气接口满足以上需求。
:::

### 功能设计

虽然我们提供的主要功能为上面两个，但是涉及到编码的层面我们需要考虑的将会更细化一些：

- 主要业务：获取天气信息；
- 异常处理：提供统一的异常类，方便调用方定位异常；
- 自定义参数：需要支持自定义参数，比如超时时间等；
- 提供 Laravel Service Provider ：为 Laravel 框架提供专属封装的入口。

接下来让我们一起来实现这些功能吧。


## 准备工作 - 创建高德开放平台应用

[高德开放平台](https://lbs.amap.com/api/webservice/guide/api/weatherinfo/)

- 注册登录
- 创建应用
- 获取 API Key

::: tip
服务平台：选择 `Web服务`
:::

## 创建项目并安装依赖包

### Composer 加速

```sh
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

### 安装 Package Builder 包结构创建工具

```sh
composer global require overtrue/package-builder 
```

::: tip
记得配置全局变量，否则无法使用命令 `package-builder build weather ` 。  
记得重新打开 CMD 工具，否则命令还未生效。

- windows 下 ，用 `Git Bash` 工具执行 `composer global require overtrue/package-builder` 就能看到 安装的路径了，然后把路径复制到 环境变量中。
:::

### 创建目录结构

```sh
package-builder build weather 
```
按提示操作即可

### 声明自动加载

接下来我们需要在 `composer.json` 中声明包自动加载的命名空间。如果已存在，则可跳过。

composer.json

```json
{
    "autoload": {
        "psr-4": {
            "Azhida\\Weather\\": "./src/"
        }
    }
}
```

### 安装依赖

我们的项目需要请求接口，所以我们选择 [guzzle/guzzle](https://github.com/guzzle/guzzle) 来做为 http client， 其它暂时用不到，后面用到的时候再安装即可：

```sh
cd weather/
composer require guzzlehttp/guzzle                      
```

## 从接口获取天气数据

根据之前设计的功能，结合 [天气查询接口文档](https://lbs.amap.com/api/webservice/guide/api/weatherinfo/) 的参数说明，我们添加几个方法：

::: info
注意：方法名通常是 动名词 形式，比如： `getUsers` ， `updateProfile` ， `deleteOrder` ， `revertAction` 等。
:::


### 创建 `Weather` 类

src/Weather.php

```php
<?php

namespace Azhida\Weather;

class Weather
{
    protected $key;
    protected $guzzleOptions = [];

    public function __construct(string $key)
    {
        $this->key = $key;
    }

    // 获取实例
    public function getHttpClient()
    {
        return new Client($this->guzzleOptions);
    }

    // 配置参数
    public function setGuzzleOptions(array $options)
    {
        $this->guzzleOptions = $options;
    }

    /**
     * $city - 城市名 / 高德地址位置 adcode，比如：“深圳” 或者（adcode：440300）；
     * $type - 返回内容类型：base: 返回实况天气 / all: 返回预报天气；
     * $format - 输出的数据格式，默认为 json 格式，当 output 设置为 “xml” 时，输出的为 XML 格式的数据。
     */
    public function getWeather($city, string $type = 'base', string $format = 'json')
    {
        $url = 'https://restapi.amap.com/v3/weather/weatherInfo';

        $query = array_filter([
            'key' => $this->key,
            'city' => $city,
            'output' => $format,
            'extensions' =>  $type,
        ]);

        $response = $this->getHttpClient()->get($url, [
            'query' => $query,
        ])->getBody()->getContents();

        return 'json' === $format ? \json_decode($response, true) : $response;
    }
}
```

## 异常与错误处理

### 什么时候应该抛出异常？

按照单一职责原则，一个类只应该关心自己的逻辑，当出现问题的时候，**如果不是当前类该处理的，我们就应该抛出而不是消化**。怎么理解呢？比如，请求天气接口的时候，网络出现问题，Guzzle 抛出了异常，这时候应该抛出异常。可是为啥不是 catch 异常然后返回 `false` 呢？这就涉及到边界问题了，**业务异常**与**运行时异常** 要区分开，对方接口说你要查询的城市不存在，返回错误，这属于业务异常，这时候是不会抛出异常的。而你请求的 API 不存在，或者对方服务器宕机，或者你的服务器网络出问题，这属于运行时异常，就应该以异常抛出来告知调用方，而不是自主处理该异常并返回 `false` 来结束逻辑。

当然了，可能刚开始你是不太好理解这部分的，当你有更多的应用设计与代码实践经验后你会慢慢感受到这个边界。

### 异常的分类与命名

异常通常分为几个种类，按名称来命名：

- **参数错误**，当传入的参数不合法时，我们通常抛出异常；
- **HTTP 异常**，在请求 API 时异常终止时抛出的异常；
- **其它异常**，模块其它部分异常。

当然还有其它的，你可以命名非常细，比如 `InvalidGatewayNameException` 、 `ErrorResponseException` 等等，你可以自由发挥，只要做到合理命名即可。

当扩展出现问题时，为了方便上层调用方更准确的定位问题，我们通常会为模块设计一个根异常类，在 `src/Exceptions` 创建类 `Azhida\Weather\Exceptions\Exception` 类。

### 异常类定义

#### 根异常类


src/Exceptions/Exception.php

```php
<?php

namespace Azhida\Weather\Exceptions;

class Exception extends \Exception
{

}
```


#### HTTP 网络请求异常类

src/Exceptions/HttpException.php

```php
<?php

namespace Azhida\Weather\Exceptions;

/**
 * HTTP 请求异常类
 */
class HttpException extends Exception
{

}
```

#### 参数异常类

src/Exceptions/InvalidArgumentException.php

```php
<?php

namespace Azhida\Weather\Exceptions;

/**
 * 参数异常类
 */
class InvalidArgumentException extends Exception
{

}
```

### 异常类的使用

src/Weather.php

```php
<?php

namespace Azhida\Weather;
use Azhida\Weather\Exceptions\HttpException;
use Azhida\Weather\Exceptions\InvalidArgumentException;

class Weather
{
    protected $key;
    protected $guzzleOptions = [];

    public function __construct(string $key)
    {
        $this->key = $key;
    }

    // 获取实例
    public function getHttpClient()
    {
        return new Client($this->guzzleOptions);
    }

    // 配置参数
    public function setGuzzleOptions(array $options)
    {
        $this->guzzleOptions = $options;
    }

    /**
     * $city - 城市名 / 高德地址位置 adcode，比如：“深圳” 或者（adcode：440300）；
     * $type - 返回内容类型：base: 返回实况天气 / all: 返回预报天气；
     * $format - 输出的数据格式，默认为 json 格式，当 output 设置为 “xml” 时，输出的为 XML 格式的数据。
     */
    public function getWeather($city, string $type = 'base', string $format = 'json')
    {
        $url = 'https://restapi.amap.com/v3/weather/weatherInfo';

        if (!\in_array(\strtolower($format), ['xml', 'json'])) {
            // 参数异常
            throw new InvalidArgumentException('Invalid response format: '.$format);
        }

        if (!\in_array(\strtolower($type), ['base', 'all'])) {
            // 参数异常
            throw new InvalidArgumentException('Invalid type value(base/all): '.$type);
        }

        $query = array_filter([
            'key' => $this->key,
            'city' => $city,
            'output' => \strtolower($format),
            'extensions' =>  \strtolower($type),
        ]);

        try {
            $response = $this->getHttpClient()->get($url, [
                'query' => $query,
            ])->getBody()->getContents();

            return 'json' === $format ? \json_decode($response, true) : $response;
        } catch (\Exception $e) {
            // HTTP 网络请求异常
            throw new HttpException($e->getMessage(), $e->getCode(), $e);
        }
    }
}
```




