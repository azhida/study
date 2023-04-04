# Vue3 创建项目

#### 返回 [Vue基础知识](../Vue基础知识.md)

在上一章节 Vue3 安装 我们使用了 vue init 命令创建过一个项目，本章节我们主要介绍 vue create 命令创建项目以及使用 vue ui 命令打开图形化的安装界面。

## vue create 命令

vue create 命令创建项目语法格式如下：
```
vue create [options] <app-name>
```
创建一个由 vue-cli-service 提供支持的新项目：  
options 选项可以是：
- -p, --preset <presetName>： 忽略提示符并使用已保存的或远程的预设选项
- -d, --default： 忽略提示符并使用默认预设选项
- -i, --inlinePreset <json>： 忽略提示符并使用内联的 JSON 字符串预设选项
- -m, --packageManager <command>： 在安装依赖时使用指定的 npm 客户端
- -r, --registry <url>： 在安装依赖时使用指定的 npm registry
- -g, --git [message]： 强制 / 跳过 git 初始化，并可选的指定初始化提交信息
- -n, --no-git： 跳过 git 初始化
- -f, --force： 覆写目标目录可能存在的配置
- -c, --clone： 使用 git clone 获取远程预设选项
- -x, --proxy： 使用指定的代理创建项目
- -b, --bare： 创建项目时省略默认组件中的新手指导信息
- -h, --help： 输出使用帮助信息

接下来我们创建 vue3-app 项目：
```
vue create runoob-vue3-app
```
执行以上命令会出现安装选项界面，根据提示选择并安装即可。

按下回车键后就会进入安装，等候片刻即可完成安装。  
安装完成后，我们进入项目目录：  
```
cd vue3-app2
```
启动应用：
```
npm run serve
```
然后打开 http://localhost:8080/， 就可以看到应用界面了

## vue ui 命令

除了使用 `vue create` 命令创建项目，我们还可以使用可视化创建工具来创建项目。  
运行命令：
```
vue ui
```
执行以上命令，会在浏览器弹出一个项目管理的界面；  
我们可以点击"创建"选项来创建一个项目，选择底部"在此创建项目"，页面上方也可以选择路径；  
然后输入我们的项目名称，选择包管理工具为 npm，然后点击下一步；  
配置选择默认即可；  
接下来就等待完成安装，安装完成就可以看到管理界面了；  


# 读者笔记

---

#### 返回 [Vue基础知识](../Vue基础知识.md)
