# copy-webpack-plugin

[copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin) ：webpack 的插件，可以将指定文件复制到指定目录。

## 版本对应

| webpack | copy-webpack-plugin |
|---------|---------------------|
| 4.0.0   | 5.0.0               |

## 在 @vue/cli 4.5 中的使用
```
npm install copy-webpack-plugin@5.1.2 --save-dev
```

vue.config.js
```js
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    configureWebpack: config => {
        config.plugins = [
            ...config.plugins,
            new CopyPlugin([
                { from: 'src/CNAME', to: '' }
            ]),
        ]
    },
}
```
> 说明：将文件 `src/CNAME` 复制到目录 `dist` 下