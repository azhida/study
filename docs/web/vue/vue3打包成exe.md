# vue3 打包成 exe

使用 electron 打包成 exe

## 创建目录 vue3-exe

```sh
mkdir vue3-exe
```

## 创建 vue3 项目

```sh
cd vue3-exe
pnpm create vite vue3 --template vue-ts
cd vue3
pnpm install
pnpm run dev
pnpm run build
```

> 得到包 `/vue3/dist`

### 配置

- `/vue3/vite.config.ts`

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 指定 base 属性，否则打包后访问不到页面
  base: './',
  plugins: [vue()],
})
```

- `/vue3/src/router/index.ts`

> 注意：如果启用了 vue-router ，则需要配置 路由模式 `history: createWebHashHistory(import.meta.env.BASE_URL),`

```ts
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // 注意：为兼容 electron 打包，路由模式 history 需要设为 hash 模式，否则 electron 打包 exe 后可能白屏
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
```


## 创建目录 exe

> 注意：在 exe 目录下，需要用 npm 执行，否则会失败

```sh
mkdir exe
cd exe
npm init
npm i -D electron
npm i -D @electron-forge/cli
npx electron-forge import
```

- `/exe/package.json`

```json
{
  "name": "exe",
  "version": "0.0.1",
  "description": "描述",
  "main": "main.js",
  "scripts": {
    "start": "electron-forge start",
    "package": "electron-forge package",
    "make": "electron-forge make"
  },
  "author": "azhida",
  "license": "ISC",
  "devDependencies": {
    "@electron-forge/cli": "^7.1.0",
    "@electron-forge/maker-deb": "^7.1.0",
    "@electron-forge/maker-rpm": "^7.1.0",
    "@electron-forge/maker-squirrel": "^7.1.0",
    "@electron-forge/maker-zip": "^7.1.0",
    "@electron-forge/plugin-auto-unpack-natives": "^7.1.0",
    "electron": "^27.1.2"
  },
  "dependencies": {
    "electron-squirrel-startup": "^1.0.0"
  }
}
```

- `/exe/main.js`

```js
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('dist/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
```

### 把 vue3 编译好的 dist 包复制到 exe 目录下

```sh
cp -r ../vue3/dist ./dist
```

### 执行打包命令

```sh
# 直接本地启动 
npm run start
# 打包 - 绿色版
npm run package
# 打包 - exe 文件
npm run make
```