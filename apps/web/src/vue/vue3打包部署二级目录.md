# vue3 打包部署二级目录

二级目录为 `/a/` , 如 `http://demo.test/a`

## vue 项目配置

- `src/router/index.js`

```js
const router = createRouter({
  // 路由 添加 /a/
  history: createWebHistory('/a/'),
  routes: constantRoutes,
});
```

- `vite.config.js`

```js
import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import createVitePlugins from './vite/plugins'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_APP_ENV } = env
  return {
    // 部署生产环境和开发环境下的URL
    // 默认情况下，vite 会假设你的应用是被部署在一个域名的根路径上，例如 http://demo.test/ 。
    // 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。
    // 例如，如果你的应用被部署在 http://demo.test/a/，则设置 baseUrl 为 /a/。
    base: VITE_APP_ENV === 'production' ? '/a/' : '/',
    build: {
      // 打包目录，部署的根目录为 /var/www/gh-pages
      outDir: './gh-pages/a',
    }
  }
})

```

- index.html

```html
<!DOCTYPE html>
<html lang="">

<head>
  <meta charset="UTF-8">
  <link rel="icon" href="/favicon.ico">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PPTX 转视频</title>
</head>

<body>
  <div id="app"></div>
  <!-- <script src="/config.js<%= configVersion %>"></script> -->
  <script src="./config.js<%= configVersion %>"></script>
  <!-- <script type="module" src="/src/main.js"></script> -->
  <!-- 解决资源文件路径问题 -->
  <script type="module" src="./src/main.js"></script>
</body>

</html>
```


## nginx 配置

- `nginx.htaccess`

```
location /a {
  try_files $uri $uri/ /a/index.html;
}
```

- 完整配置

```
server {
  listen 80;
  server_name  demo.test;
  root "/var/www/gh-pages/";

  location /a {
    index index.html;
    try_files $uri $uri/ /a/index.html;
  }
}
```


