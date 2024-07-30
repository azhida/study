# pm2 部署 koa 项目


```sh
mkdir test-koa
cd test-koa
pnpm init
pnpm i pm2 koa nodemon -D
touch app.js
```
## 文件

- `.gitignore`

```
node_modules/
pnpm-lock.yaml
```

- `app.js`

```js
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

console.log('启动成功！ 访问 http://127.0.0.1:3000');
```

- `package.json`

```json
{
  "name": "demo-koa",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon app.js",
    "dev1": "node app.js",
    "server": "pm2 restart app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "koa": "^2.15.2",
    "nodemon": "^3.1.0",
    "pm2": "^5.3.1"
  }
}
```

## 启动应用

```sh
pm2 start app.js
pm2 restart app.js
pm2 ls
pm2 log
```
