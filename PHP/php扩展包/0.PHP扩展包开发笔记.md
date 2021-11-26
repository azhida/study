# PHP扩展包开发笔记
##全局安装 包构建工具
```
composer global require "overtrue/package-builder" --prefer-source
```
## 包构建工具 基本用法
```
# package-builder build [目标目录]
# 在当前目录 ~/www/ 下 创建 tools 扩展包
cd ~/www
package-builder build ./tools
# 然后按提示操作即可
# 包名：azhida/tools
# 命名空间：Azhida\Tools 
# 描述：A tools SDK
```


## 声明自动加载
composer.json 中声明包自动加载的命名空间
```
{
    .
    .
    .
    "autoload": {
        "psr-4": {
            "Azhida\\Tools\\": "./src/"
        }
    },
    .
    .
    .
}
```
执行命令：`composer dump-autoload` 或者 `composer du` 

## 安装依赖
要用到 `overtrue/laravel-wechat`
```
composer require overtrue/laravel-wechat
```
> 不需要则不安装

## 编码
将主要业务逻辑放到 `Azhida\Tools\Tool` 类中

创建类 `Azhida\Tools\Tool`
```
vim src/Tool.php
```
```
<?php

namespace Azhida\Tools;

class Tool
{

}
```
创建包的基础异常类 `src/Exceptions/Exception.php` ，类中不需要其他代码，如下即可
```
<?php

namespace Azhida\Tools\Exceptions;

class Exception extends \Exception
{

}
```

写单元测试 【 todo 以后继续完善 】 
```
composer require phpunit/phpunit mockery/mockery --dev
```

## 创建测试项目 【非框架】
```
$ cd ~/www
$ mkdir tools-test
$ cd tools-test
```
然后在这个测试项目根目录使用 composer 引入刚写的包 `azhida/tools` ：
```
# 需要先初始化 composer.json, 一路回车即可
$ composer init  

# 配置包路径，注意，这里 `../tools` 为相对路径，不要弄错了
$ composer config repositories.tools path ../tools    

# 安装扩展包  这里  `dev-master`  中的 dev 指该分支下最新的提交，master 是指定的包中的分支名
$ composer require azhida/tools:dev-master
```

安装完成后，在 `tools-test` 根目录创建一个 `index.php` 来测试：
```
<?php

require __DIR__ .'/vendor/autoload.php';

use Azhida\Tools\Tool;

// 方法调用，自行测试


```
然后执行 `index.php` 文件，并查看结果是否符合预期
```
php index.php
```

## 为 Laravel 集成优化
配置信息写到文件 `config/services.php` 中，当然，也可以写道其他地方，根据自己开发的具体情况安排
```
    .
    .
    .
    'tools' => [
        'key' => env('Tools_API_KEY'),
    ],
```
配置定下来了，接着就是准备编写 service provider ， 文件 `src/ServiceProvider.php` ：
```
cd ~/www/tools
vim src/ServiceProvider.php
```
```
<?php

namespace Azhida\Tools;

class ServiceProvider extends \Illuminate\Support\ServiceProvider
{
    protected $defer = true;

    public function register()
    {
        $this->app->singleton(Tool::class, function(){
            return new Tool(config('services.tools.key'));
        });

        $this->app->alias(Tool::class, 'tool');
    }

    public function provides()
    {
        return [Tool::class, 'tool'];
    }
}
```
其中我们设置了 `$defer` 属性为 `true`，并且添加了方法 `provides` ，这是 Laravel 扩展包的延迟注册方式，它不会在框架启动就注册，而是当你调用到它的时候才会注册。

### 配置 Laravel Auto Discovery

我们需要在 `composer.json` 中添加如下部分：
```
.
.
.
"extra": {
    "laravel": {
        "providers": [
            "Azhida\\Tools\\ServiceProvider"
        ]
    }
}
```

### 在 Laravel 项目中测试
```
cd ~/www
composer create-project laravel/laravel laravel-tools-test
cd laravel-tools-test

# 配置包路径，注意，这里 `../tools` 为相对路径，不要弄错了
composer config repositories.tools path ../tools 

# 安装扩展包
composer require azhida/tools:dev-master
```

## 编写友好的说明文档
todo 后续完善

## 发布上线
- GitHub上建仓库 ，地址：[https://github.com](https://github.com/pangdahua/php7-wxwork-finance-sdk)

### 提交代码到 github仓库
```
cd ~/www/tools
git init
git add -A
git commit -m 'first commit'
# 设置远程地址
git remote add origin https://github.com/azhida/tools.git
# 将提交推送到远程仓库
git push -u origin master
```
### 提交到 Packagist
使用 GitHub账号登录 [composer](https://packagist.org/) 

登录composer以后，点击顶部菜单栏 “Submit” 开始提交项目，填入我们 代码所在的 GitHub 的仓库 URL，然后点 "Check"，然后提交即可：

### 启用项目的 Packagist 通知服务
- 获取 Packagist 的 API Token
> 访问你在 Packagist 的个人主页：packagist.org/profile/ ，点击 "Show API Token"，复制 token 备用。

- 给项目代码库启用 Packagist 通知服务
  - 回到我们的 GitHub 项目，点击项目的 Settings 菜单：
  - 进到设置页以后选择左边的 “Webhooks” 菜单，点击 “Add webhook”，如图：
  - 填写对应的内容：
    - Payload URL: `https://packagist.org/api/github?username=Packagist 的用户名`，即 `https://packagist.org/api/github?username=azhida`
    - Content type 选择为 `application/json`
    - Secret 填写为您刚刚复制的 token
    - 然后提交即可。

那包已经上线成功了，如果你的网络没问题，过几分钟，应该就可以安装开发版了：
> 没有发布正式版之前，只能安装开发版，像下面这样在包名后面加上 dev-master。
```
composer require azhida/tools:dev-master -vvv
```

## 发布第一个版本
- 在 github 项目主页点击 "0 releases" 进入到版本管理页面 【也可能在右侧 releases 那里】
- 然后点击 "Create new release" 创建一个新的版本： 0.0.1
- 填写版本号、这次发版的标题、以及这次版本变化的内容描述，点击提交。

我们的第一个版本就发布完成了，过几分钟你就可以安装刚刚发布的 0.0.1 版本了：
```
composer require azhida/tools -vvv
```

- 发布第二个版本
  - GitHub项目主页 点击 `Releases`
  - Releases 下 点击 `Draft a new releas`
  - 填写版本号、这次发版的标题、以及这次版本变化的内容描述，点击提交。

第二个版本发布成功了。

## 使用 Travis-CI 做自动化测试
todo 后续完善

