# Vite + Vue 实现一个端口号监听多个子项目

类开发时微服务

## 基本思路

- 多个子项目，使用不同的端口号同时运行，最好同时配置二级目录；
- 使用其中一个项目（一般是主项目）配置代理，根据二级目录转发到对应子系统上；

## 操作

### 创建项目

```sh
mkdir -p my-space/apps
cd my-space
pnpm init
touch pnpm-workspace.yaml
cd apps
pnpm create vite master --template vue-ts
pnpm create vite app1 --template vue-ts
pnpm create vite app2 --template vue-ts
pnpm create vite zzzzz-proxy --template vue-ts
```

### 编辑配置

#### package.json

```json
// package.json

{
  "name": "my-space",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev:all": " pnpm recursive run dev",
    "build:all": "pnpm recursive run build",
    "preview:all": "pnpm recursive run preview"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

#### pnpm-workspace.yaml

```yaml
# pnpm-workspace.yaml

packages:
  - 'apps/**'
```

#### app1/vite.config.ts

```ts
// app1/vite.config.ts

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],  
  base: '/app1',
  build: {
    outDir: '../../dist/app1'
  },
  server: {
    port: 8081
  },
  preview: {
    port: 18081
  }
})
```

#### app2/vite.config.ts

```ts
// app2/vite.config.ts

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/app2',
  build: {
    outDir: '../../dist/app2'
  },
  server: {
    port: 8082
  },
  preview: {
    port: 18082
  }
})
```

#### master/vite.config.ts

```ts
// master/vite.config.ts

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: '../../dist/master'
  },
  server: {
    port: 8080
  },
  preview: {
    port: 18080
  }
})
```


#### apps/zzzzz-proxy/vite.config.ts

注意：之所以取名 `zzzzz-proxy` ，是为了让 `zzzzz-proxy` 排在最后面启动！

注意：在 `server.proxy` 中，二级目录要写在前面，否则无法匹配到！

```ts
// apps/zzzzz-proxy/vite.config.ts

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/app1': 'http://localhost:8081',
      '/app2': 'http://localhost:8082',
      '': 'http://localhost:8080',
    },
    // 注意：这样就永远不会匹配到子系统路由了
    // proxy: {
    //   '/': 'http://localhost:8080',
    //   '/app1': 'http://localhost:8081',
    //   '/app2': 'http://localhost:8082',
    // }    
  },
  preview: {
    proxy: {
      '/app1': 'http://localhost:18081',
      '/app2': 'http://localhost:18082',
      '': 'http://localhost:18080',
    }
  }
})
```

### 运行项目

```sh
pnpm i
pnpm dev:all
pnpm build:all
pnpm preview:all
# 如果报错，根据提示加个文件夹
mkdir -p apps/zzzzz-proxy/dist
```

## 生产环境部署

使用 nginx 反向代理


- nginx 配置

```
server {
  listen        80;
  server_name  192.168.1.100;
  root   "/var/www/my-space";

  location /app1 {
    try_files $uri $uri/ /app1/index.html;
  }

  location /app2 {
    try_files $uri $uri/ /app2/index.html;
  }

  location / {
    try_files $uri $uri/ /master/index.html;
  }
}
```