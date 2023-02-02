# VSCode 编辑器

## 优势
- 简单轻便
  > 相比 IDE 来讲，内存占用较少，且没有太多的 Magic。
- 跨平台
  > 对编辑器熟练程度很大程度上决定了你的编码速度，使用跨平台的编辑器是比较明智的选择；
- 易用性
  > 社区强大表现在插件和主题的丰富多样。且 VSCode 插件安装便捷，且网络连接稳定，使其在同类竞争对手中脱颖而出。
- 适用性
  > VSCode 是大部分流行编程语言的最佳编辑器，这很重要。因为在你往后的编程生涯中，肯定会遇到别的语言，VSCode 都能胜任，你就不用再去花费时间熟悉另一个编辑器。
   
## 安装

直接前往 [code.visualstudio.com/download](https://code.visualstudio.com/download) 下载安装包。

## VSCode 插件
### 必装

| 插件名称                 | 说明                 |
| :----------------------- | :------------------- |
| EditorConfig for VS Code | 代码制表符统一       |
| advanced-new-file        | 快速新建文件         |
| Duplicate action         | 右键快速创建文件副本 |
| Laravel Blade Snippets   | Blade 模板语法高亮   |
|                          |

### 选装

| 插件名称                                  | 说明                      |
| :---------------------------------------- | :------------------------ |
| Community Material Theme                  | 编辑器主题                |
| Material Icon Theme                       | 与上面主题搭配使用的 icon |
| Sublime Text Keymap and Settings Importer | Sublime 用户的快捷键同步  |
| Vutur                                     | 开发Vue必备插件           |
| any-rule                                  | 正则表达式插件            |
| Markdown Preview Enhanced                 | md 预览插件               |
| Markdown All in One                       | md 编辑器                 |
| vscode-mindmap                       | mind 脑图编辑器，文件扩展 km                 |
| markmap                       | markdown 脑图编辑器，文件扩展 mm.md                 |
| Draw.io Integration   | 绘图工具，如 流程图等，文件扩展 .drawio  |
|Angular Files| 快速创建 Angular 模板文件 html，css 和 ts |

### 怎样安装插件
1. 进入『安装插件』选项卡里；
2. 复制以上 完成的插件名称 进行搜索，一般排名第一位的就是；
3. 选中插件后，点击安装。

### ESLint 插件：配置保存时自动格式化
- 文件 > 首选项 > 设置 ，在 `设置` 页 右上角 找到 `打开设置(json)` ，加入如下内容  
settings.json

```
{
    // #每次保存的时候将代码按eslint格式进行修复
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
}
```
### Vutur 插件
语法高亮、智能感知、Emmet等  

包含格式化功能， Alt+Shift+F （格式化全文），Ctrl+K Ctrl+F（格式化选中代码，两个Ctrl需要同时按着）

在配置文件 `settings.json` 中配置如下项：
```
  // 更改vue的html格式，根据需求设置
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  // 更改vue的js格式
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  // 保存时自动格式化
  "editor.formatOnSave": true,
  // 取消html标签属性强制换行
  "vetur.format.defaultFormatterOptions": {
      "js-beautify-html": {
          "wrap_attributes": "auto",
      }
  },
```

### any-rule 正则表达式插件

使用方法：在代码处任意地方输入 `@zz` 即可。


## 常用快捷键
- `Ctrl` + `D` ：同时选中多个相同的字符串；
