# Vue3 目录结构

#### 返回 [Vue基础知识](../Vue基础知识.md)



## 目录解析

| 目录/文件	| 说明	|
| :--	|:--	|
|build	|	项目构建(webpack)相关代码|
|node_modules	|npm 加载的项目依赖模块	|
|src	|这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：<br> - assets: 放置一些图片，如logo等。 <br> - components: 目录里面放了一个组件文件，可以不用。<br> - App.vue: 项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录。<br> - main.js: 项目的核心文件。 <br> - index.css: 样式文件。	|
|static	|静态资源目录，如图片、字体等。	|
|	public|		公共资源目录。|
|test|	初始测试目录，可删除。	|
|	.xxxx文件|	这些是一些配置文件，包括语法配置，git配置等。|
|	index.html| 首页入口文件，你可以添加一些 meta 信息或统计代码啥的。	|
|package.json|项目配置文件。	|
|README.md|项目的说明文档，markdown 格式。|
|dist|使用 `npm run build` 命令打包后会生成该目录。|


# 读者笔记

---

#### 返回 [Vue基础知识](../Vue基础知识.md)
