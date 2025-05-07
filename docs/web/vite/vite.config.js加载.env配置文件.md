# vite.config.js 加载 .env 配置文件

## 配置文件
### .env

```
VITE_BASE_API=http://127.0.0.1:80
```

### .env.local

```
VITE_BASE_API=http://127.0.0.1:80
```

## vite.config.js

### 方式一

```js
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config(); // 默认加载 .env 文件
dotenv.config({ path: './.env.local', override: true }); // 加载 .env.local 文件，覆盖 .env
console.log(process.env.VITE_BASE_API);

// https://vitejs.dev/config/
export default defineConfig({})
```

### 方式二

```js
import { defineConfig, loadEnv } from 'vite';
import path from 'path';

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  console.log(env, 'env');
  const { VITE_BASE_API } = env
  return {
    base: '/a/'
  }
})
```