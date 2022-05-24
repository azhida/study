## 安装
```
composer require binarytorch/larecipe

php artisan larecipe:install
```
访问： http://your-domain/docs

## 编辑文档
- 文档路径：resources/docs 目录中
- index 是索引文件
```
- ## Get Started
    - [Overview](/docs/{{version}}/overview)
- ## Example
    - [demo](/docs/{{version}}/demo)
```
- 创建新文档 demo.md
```
touch resources/docs/1.0/demo.md
```
- 编辑 resources/docs/1.0/demo.md
```
# Demo

---

- [右侧锚点1](#section-1)
- [右侧锚点2](#section-2)

<a name="section-1"></a>
## 右侧锚点1

- 列表1
- 列表2
- 列表3

警告
> {danger} 警告

成功
> {success} 成功

<a name="section-2"></a>
## 右侧锚点2

<larecipe-card shadow>
    Example card
</larecipe-card>

<larecipe-progress type="success" :value="60"></larecipe-progress>
```

## 配置：文件 config/larecipe.php
###### 配置多版本
```
    'versions'      => [
        'default'   => '2.0',
        'published' => [
            '1.0',
            '2.0'
        ]
    ],
```
```
cp -R resources/docs/1.0/ resources/docs/2.0
```
resources/docs/2.0/overview.md
```
.
.
.
this is version 2.0
```
###### 配置 github跳转
```
.
.
.
    'repository'   => [
        'provider' => 'github',
        'url'      => 'https://github.com/liyu001989/laravel-package'
    ],
.
.
.
```

[教程](https://learnku.com/courses/laravel-package/2019/add-beautiful-markdown-documents-to-your-project-binarytorchlarecipe/2324)