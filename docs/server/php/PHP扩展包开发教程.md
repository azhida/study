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

## 编写单元测试

### 准备工作

首先需要安装两个包：单元测试框架 [PHPUnit](https://github.com/sebastianbergmann/phpunit) 、依赖模拟 [Mockery](https://github.com/mockery/mockery) ：

项目根目录下执行

```sh
composer require phpunit/phpunit mockery/mockery --dev
```

在开始写测试之前我们先大致了解一下 PHPUnit 的使用：

- 测试用例与类名对应，以 Test.php 结尾，比如 WeatherTest.php，类名与文件名一致；
- 测试用例需要继承 `PHPUnit\Framework\TestCase` 基类；
- 测试用例的目录结构与源码一致；
- 测试用例的方法名格式为 `test源方法名`，比如：`testGetWeather`。

以上这些规约虽然有一些不是强制的，但是也建议你按照这样子来写，以保证代码清晰与可读性。


### 未完待续

todo ...


## 本地测试扩展包

### 创建测试项目

::: tip
在开发好的扩展包同级目录下创建空项目
:::

```sh
mkdir weather-test
cd weather-test
```

根目录使用 composer 引入开发好的扩展包 `azhida/weather` ：

```sh
# 需要先初始化 composer.json, 一路回车即可
composer init

# 配置包路径，注意，这里 `../weather` 为相对路径，不要弄错了
composer config repositories.weather path ../weather

# 安装扩展包  这里  `dev-master`  中的 dev 指该分支下最新的提交，master 是指定的包中的分支名
composer require azhida/weather:dev-master
# 或者
composer require azhida/weather:dev-main
# 或者
composer require azhida/weather @dev
# 如果提示版本号找不到，就在扩展包的 composer.json 文件加上版本号
# "version": "dev-master",
```

`weather-test` 根目录新建文件 `index.php`

index.php

```php
<?php

require __DIR__ .'/vendor/autoload.php';

use Azhida\Weather\Weather;

// 高德开放平台应用 API Key
$key = '7d54670aa0f9395bf6c82bc5359b3bef';
$w = new Weather($key);

echo "获取实时天气：\n";

$response = $w->getWeather('南宁');
echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

echo "\n\n获取天气预报：\n";

$response = $w->getWeather('南宁', 'all');
echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);


echo "\n\n获取实时天气(XML)：\n";

echo $w->getWeather('南宁', 'base', 'xml');
```

运行 `index.php` 文件就有数据了
```sh
php index.php
```

### 原理说明

```sh
composer config repositories.weather path ../weather 
```

它在 `composer.json` 中添加了如下部分：

composer.json

```json
    .
    .
    .
     "repositories": {
        "weather": {
            "type": "path",
            "url": "../weather"
        }
      }
    .
    .
    .
```

这样我们在安装的时候 composer 会创建一个软链接 `vendor/azhida/weather` 到包所在目录 `../weather`，这样一来，你可以直接在测试项目的 `vendor/azhida/weather` 下修改文件，包里的文件也会跟着变了，是不是对于开发过程中来讲非常的方便？

::: tip
🚨注意：如果在包的原目录创建了新文件，你可能需要刷新一下目录树才能看到新的文件哦。
:::


## 为 Laravel 集成优化

为了方便 Laravel 应用集成我们的扩展包，我们需要做一个 Laravel Service Provider，这里由于需要考虑到一个配置问题，因为调用接口需要用到高德开放平台应用 API Key，所以我们设计将它放置到 Laravel 应用的 `config/services.php` 中：

在扩展包 `weather` 目录下

config/services.php

```php
<?php

return [
    'weather' => [
        'key' => env('WEATHER_API_KEY'),
    ],
];
```

src/ServiceProvider.php

```php
<?php

namespace Azhida\Weather;

class ServiceProvider extends \Illuminate\Support\ServiceProvider
{
    protected $defer = true;

    public function register()
    {
        $this->app->singleton(Weather::class, function(){
            return new Weather(config('services.weather.key'));
        });

        $this->app->alias(Weather::class, 'weather');
    }

    public function provides()
    {
        return [Weather::class, 'weather'];
    }
}
```

其中我们设置了 `$defer` 属性为 `true` ，并且添加了方法 `provides` ，这是 [Laravel 扩展包的延迟注册方式](https://learnku.com/docs/laravel/5.6/providers/1360#deferred-providers)，它不会在框架启动就注册，而是当你调用到它的时候才会注册。


### 配置 Laravel Auto Discovery

我们需要在 `composer.json` 中添加如下部分：

composer.json

```json
.
.
.
"extra": {
    "laravel": {
        "providers": [
            "Azhida\\Weather\\ServiceProvider"
        ]
    }
}
```

这样一来我们 Laravel 应用安装后无需手动注册服务提供器即可使用。

### 在 Laravel 项目中测试

在扩展包的同级目录下，先创建一个 Laravel 项目：

```sh
composer create-project laravel/laravel laravel-weather-test
cd laravel-weather-test

# 配置包路径，注意，这里 `../weather` 为相对路径，不要弄错了
composer config repositories.weather path ../weather 

# 安装扩展包
composer require azhida/weather @dev
```

在 `laravel-weather-test` 项目下添加配置项：

laravel-weather-test/config/services.php

```php
    .
    .
    .
    'weather' => [
        'key' => env('WEATHER_API_KEY'),
    ],
```

另外还需要配置一个 `.env` 变量：

::: tip
WEATHER_API_KEY 为我们前面准备工作时申请的应用 API Key , 即 高德开放平台应用的 API_KEY
:::

```
WEATHER_API_KEY=7d54670aa0f9395bf6c82bc5359b3bef
```

创建 控制器

app/Http/Controllers/WeatherController.php

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Azhida\Weather\Weather;

class WeatherController extends Controller
{
    public function show(Request $request, Weather $weather, $city)
    {
        return $weather->getWeather($city);
    }
}
```

laravel 根目录生成命令控制文件

```sh
php artisan make:command Test
```
会生成文件 `laravel-weather-test\app\Console\Commands\Test.php`

laravel-weather-test\app\Console\Commands\Test.php

```php
<?php

namespace App\Console\Commands;

use Azhida\Weather\Weather;
use Illuminate\Console\Command;

class Test extends Command
{
    protected $signature = 'test';

    protected $description = '测试';

    public function handle(Weather $weather)
    {
        $res = $weather->getWeather('深圳');
        dd($res);
    }
}
```

laravel 根目录执行该方法就能看到结果了
```sh
php artisan test
```
::: details 结果
```
[
  "status" => "1"
  "count" => "1"
  "info" => "OK"
  "infocode" => "10000"
  "lives" => array:1 [
    0 => array:11 [
      "province" => "广东"
      "city" => "深圳市"
      "adcode" => "440300"
      "weather" => "晴"
      "temperature" => "24"
      "winddirection" => "东南"
      "windpower" => "≤3"
      "humidity" => "54"
      "reporttime" => "2023-04-07 15:47:17"
      "temperature_float" => "24.0"
      "humidity_float" => "54.0"
    ]
  ]
]
```
:::

测试通过

## 编写友好的说明文档

一个优秀的扩展包应该包含友好的说明文档，所以发布前我们先来完善说明文档，开源项目一般是在项目根目录创建 `README.md` 作为使用文档，当然，如果你的项目过于复杂，那么你可能需要将文档放到项目 `docs` 文件夹下，我们这里主要介绍普通复杂度的扩展包文档的编写。

一份友好的文档应该包含下面这些信息：

- 项目简介及创作动机
- 项目维护、CI、依赖更新状态（如果有）
- features & 适用人群
- 运行的平台或硬件要求
- 重要依赖
- 如何安装与测试
- 使用示例及文档地址
- 贡献指南
- License
- 鸣谢
- 其它特有的信息

如果 使用 docs 目录存放项目文档，可以选择 前端框架 [VitePress](/web/VitePress/) , 也可以选择其他自己熟悉的方式，不限编程语言。


## 发布上线

### 创建 GitHub 代码仓库

- 填写名称与描述
  
  名称： `weather`  
  描述：天气 SDK

- 提交扩展包代码

  ```
  git init                                                    # 初始化 git 项目
  git add -A                                                  # 添加全部文件到 git 
  git commit -am "first commit"                               # 提交添加的文件
  git remote add origin git@github.com:azhida/weather.git     # 设置远程地址
  git push -u origin master                                   # 将提交推送到远程仓库
  ```

### 提交到 Packagist

Composer 安装包都是从 Packagist 源读取信息的，所以我们需要去注册我们的扩展包，别人才能安装，如果你还没有 Packagist 账号，先注册一个，建议使用 GitHub 登录：

地址：https://packagist.org/


登录以后，点击顶部菜单栏 “Submit” 开始提交项目，填入我们 **代码所在的 GitHub 的仓库 URL**，然后点 "Check"，然后提交即可：

我的代码仓库地址： https://github.com/azhida/weather.git

接着会到达项目主页，你会看到一条提示：

::: info
“This package is not auto-updated. Please set up the GitHub Service Hook for Packagist so that it gets updated whenever you push!”：

**更新**  
新版 GitHub 已经不需要手动像下面这样注册 webhook 了，当然前提是你在 packgist.org 登录时授权即可。
:::

这条提示的意思是说你的项目不会自动抓取更新，怎么理解呢？下面是原理说明：
::: info 💡原理说明：
当我们在 Packagist 提交项目的时候，它会抓取一遍项目信息，但是后续我们在修改代码的时候（包括推送代码、发布版本等操作），Packagist 不会知道这个变更，所以我们需要使用 GitHub 提供的通知服务，在我们对代码库做修改的时候，向 Packagist 发出一条通知，通知 Packagist 这个项目发生了更新，这时候 Packagist 才会触发更新任务，抓取新的版本信息，我们才能在最短时间内安装到刚发的版本。
:::

### 启用项目的 Packagist 通知服务

#### 获取 Packagist 的 API Token

访问你在 Packagist 的个人主页：[packagist.org/profile/](https://packagist.org/profile/) ，点击 "**Show API Token**"，复制 token 备用。

#### 给项目代码库启用 Packagist 通知服务

回到我们的 GitHub 项目，点击项目的 **Settings** 菜单：

进到设置页以后选择左边的 “**Webhooks**” 菜单，点击 “**Add webhook**”，如图：

填写对应的内容：

- Payload URL: `https://packagist.org/api/github?username=Packagist 的用户名`
- Content type 选择为 `application/json`
- Secret 填写为您刚刚复制的 token

然后提交即可。

我们再次有代码提交动作后，刷新 Packagist 的包页面就已经没有那条提示了。

那包已经上线成功了，如果你的网络没问题，过几分钟，应该就可以安装开发版了。

::: tip 
没有发布正式版之前，只能安装开发版，像下面这样在包名后面加上 dev-master。
:::

```sh
composer require azhida/weather::dev-master -vvv
```

正式包安装
```sh
composer require azhida/weather -vvv
```

## 发布第一个版本

我们刚才安装了开发版，开发版意味着不稳定与不安全，线上项目肯定是要用稳定版的，所以，在我们测试完整后，我们将会发布一个正式版本，测试期间你可以发布 `0.0.x` 版本，小于 1 的版本在 Composer 中是有特殊处理的哦，这个要弄清楚，具体我就不介绍了，自己去看 [Composer 文档](https://learnku.com/docs/composer/2018)。

### 什么是版本号

我们的版本号通常建议遵循 [语言化版本](https://semver.org/lang/zh-CN/) ，语义化版本的规范在前面链接里有详细说明，主要为：

::: info 版本说明
版本格式：主版本号。次版本号。修订号，版本号递增规则如下：  
主版本号：当你做了不兼容的 API 修改，  
次版本号：当你做了向下兼容的功能性新增，  
修订号：当你做了向下兼容的问题修正。  
先行版本号及版本编译信息可以加到 “主版本号。次版本号。修订号” 的后面，作为延伸。
:::

简单介绍就是，如果你现在的最新版本是 `1.0.0` ，下面的动作的区别是：

- 打补丁，修了一些小 bug，没做 API 修改，那么你应该发布 1.0.1，同理以后也是递增第三位。
- 有一天网友在你的基础上提交了新功能，原来的 API 调用方式也没改变，这时候你应该发布 1.1.0 。
- 一段时间以后，你心血来潮重构了你的扩展包，调用方式也发生了变化，也就是说安装了以前版本的是无法直接升级的，这时候你需要发布 2.0.0 了。


### 发布第一个版本

在 [GitHub](https://github.com/) 项目主页点击 "releases" 进入到版本管理页面；

然后点击 "Create new release" 创建一个新的版本：

填写版本号、这次发版的标题、以及这次版本变化的内容描述，点击提交。

我们的第一个版本就发布完成了，过几分钟你就可以安装刚刚发布的 0.0.1 版本了：

```sh
composer require azhida/weather -vvv
```