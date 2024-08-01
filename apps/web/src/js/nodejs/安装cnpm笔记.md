# 安装 CNPM - windows

## 一、安装node.js

### 下载nodejs

[node.js官网](http://nodejs.cn/download/)
指定安装路径 `D:\nodejs`

### 将nodejs添加到系统环境变量中

将 nodejs 添加到系统变量中： `D:\nodejs` 和 `D:\nodejs\node_global`

检测安装是否成功，正确会出现版本号

```
npm -v
```

### 改变 npm 原有的环境变量

- 配置 npm 的全局模块的存放路径以及 cache 的路径，例如两个文件夹放在 NodeJS 的主目录下，便在 NodeJs 下建立 `D:\nodejs\node_cache` 及 `D:\nodejs\node_global` 两个文件夹，输入以下命令改变 npm 配置：

```
npm config set prefix "D:\nodejs\node_global"
npm config set cache "D:\nodejs\node_cache"
```

- 将 `D:\nodejs\node_global\node_modules` 添加到系统环境变量中，此后所安装的模块都会安装到该路径下
- 在命令行输入以下命令试着安装 express（注：`-g` 这个参数意思是装到 global 目录下，也就是上面说设置的 `D:\nodejs\node_global` 里面。）

```
npm install express -g
```

安装完毕后可以看到 `D:\nodejs\node_global\node_modules\express` 已经有内容

- 在命令行输入node进入编辑模式，输入以下代码测试是否能正常加载模块：

```
require('express')
```

假设成功，可以看到有输出。假设出错，检查NODE_PATH的路径。

## 二、安装淘宝npm（cnpm）

- 1.输入以下命令安装cnpm

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

- 2.将 cnpm 添加到系统变量path中：`D:\nodejs\node_global\node_modules\cnpm\bin`
- 2.输入 `cnpm -v` 输入是否正常

```
cnpm -v
```

> 学习：[安装npm及cnpm(Windows)](https://www.cnblogs.com/liaojie970/p/9296177.html)

