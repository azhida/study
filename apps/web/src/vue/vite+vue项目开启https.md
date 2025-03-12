# vite+vue项目开启https

原文地址：

https://blog.csdn.net/qq_42543548/article/details/128389216

## vue开启https，加载本地证书

### 1. 通过mkcert创建本地证书

#### 1.1 安装mkcert

- 安装方式：npm
- 包地址：https://www.npmjs.com/package/mkcert
- 安装命令：`npm install -g mkcert`
- 判断是否安装成功，输入命令：`mkcert --version` ，如果能看到版本号，说明安装成功，可以进行下一步

#### 1.2 生成证书

- 生成一个 `ca` 证书，`mkcert create-ca` ，生成之后会看到一个 `ca.crt` 和 `ca.key` 文件
- 利用刚刚生成的 `ca` 证书，再生成 `cert` 证书， `mkcert create-cert` ，会在刚刚的路径下生成 `cert.crt` 和 `cert.key` 文件

#### 1.3 关键的时候来了，怎么使用

##### 1.3.1 需要将刚刚生成的 `ca.crt` 安装到电脑受信任的根证书中

###### 1.3.1.1 mac安装方式

...

###### 1.3.1.2 window安装方式

直接双击刚刚生成的 `ca.crt` 文件，弹出的界面中选择安装证书

- 下一步弹窗中，选择“当前用户”或“本地计算机”均可，主要是下一步，选择“将所有的证书都放入下列存储”，并且选择为“受信任的根证书颁发机构”
- 一路点击完成，最后弹出点击“是”即可，到此证书安装成功了。

##### 1.3.2 在vue中使用刚刚的证书

- 将刚刚生成的 `cert.crt` 和 `cert.key` 两个拷贝到项目的 `src/ssl` 文件夹中，没有可以新建一个 `ssl` 目录
- vue2在 `vue.config.js` 中写入以下关键代码
    ```js
    const path = require('path')
    const fs = require('fs')

    module.exports = {
        devServer: {
            open: true,
            https: {
            cert: fs.readFileSync(path.join(__dirname, 'src/ssl/cert.crt')),
            key: fs.readFileSync(path.join(__dirname, 'src/ssl/cert.key'))
            }
        }
    }
    ```

- vue3在 `vite.config.js` 中写入以下关键代码
    ```js
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'

    const fs = require('fs')
    const path = require('path')

    // https://vitejs.dev/config/
    export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
        '@': path.join(__dirname, 'src')
        }
    },
    server: {
        open: true,
        https: {
        // 主要是下面两行的配置文件，不要忘记引入 fs 和 path 两个对象
        cert: fs.readFileSync(path.join(__dirname, 'src/ssl/cert.crt')),
        key: fs.readFileSync(path.join(__dirname, 'src/ssl/cert.key'))
        }
    }
    })
    ```

> 到此，证书生成安装结束了，项目跑起来就ok了，感谢各位看官看到了最后，文章虽然啰嗦，但是“细”啊。


### @vitejs/plugin-basic-ssl

```sh
pnpm i @vitejs/plugin-basic-ssl
```

- vite.config.js

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import basicSsl from '@vitejs/plugin-basic-ssl'
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), basicSsl()],
  server: {
    host: '0.0.0.0',
    https: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
```

## 参考

[vite项目配置本地开发使用https访问，3分钟搞定](https://blog.csdn.net/weixin_44786530/article/details/135893697)