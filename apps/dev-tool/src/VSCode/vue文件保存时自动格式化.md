# vue 文件保存时自动格式化

## 安装插件

- eslint
- Vetur
- Prettier - Code formatter

## 修改编辑器配置文件

- 打开编辑器配置文件：文件--首选项--设置--打开设置文件(json)【设置页面的右上角】
- 写入内容（注意：是添加，不要删除你原来的配置，如果有重复就单独处理即可）

```
{
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "explorer.confirmDelete": false,
  "editor.tabSize": 2,
  "files.autoSave": "onFocusChange",
  "editor.fontSize": 14, // 设置字体
  "editor.tabCompletion": "on", // 用来在出现推荐值时，按下Tab键是否自动填入最佳推荐值
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true // 这个属性能够在保存时，自动调整 import 语句相关顺序，能够让你的 import 语句按照字母顺序进行排列
  },
  "editor.formatOnSave": true,
  // #让vue中的js按"prettier"格式进行格式化
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatter.js":"prettier-eslint",
  "vetur.format.defaultFormatterOptions": {
  "js-beautify-html": {
    // #vue组件中html代码格式化样式
    "wrap_attributes": "auto", //也可以设置为“auto”，效果会不一样
    "wrap_line_length": 200,
    "end_with_newline": false,
    "semi": false,
    "singleQuote": true
  },
  "prettier": {
    "semi": false,
    "singleQuote": true,
    "editor.tabSize": 2
  },
  "prettyhtml": {
    "printWidth": 160,
    "singleQuote": false,
    "wrapAttributes": false,
    "sortAttributes": false
  }
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "bracketPairColorizer.depreciation-notice": false,
  "editor.mouseWheelZoom": true
}
```
