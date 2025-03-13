# Koa 本地开发开启 https

```js
const https = require('https');
const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

// 中间件示例
app.use(ctx => {
  ctx.body = 'Secure Koa with Custom Certificate!';
});

// 加载自定义证书
const options = {
  key: fs.readFileSync('./path/to/custom.key'),    // 私钥路径
  cert: fs.readFileSync('./path/to/custom.crt'),   // 证书路径
  ca: fs.readFileSync('./path/to/chain.crt')       // 证书链（可选）
};

// 启动 HTTPS 服务器
https.createServer(options, app.callback()).listen(443, () => {
  console.log('HTTPS running on https://localhost:443');
});
```

## 生成证书

- [使用 mkcert](https://azhida.github.io/study/web/vue/vite+vue%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%90%AFhttps.html)