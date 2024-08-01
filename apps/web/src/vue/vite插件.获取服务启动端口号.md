# VITE 插件 - 获取服务实际端口号

利用 vite 钩子获取服务启动后的实际端口号！

## `/src/plugins/real-server-port.ts`

```ts
// /src/plugins/real-server-port.ts

export function realServerPortPlugin() {
  let server;
  return {
    name: 'vite-plugin-real-server-port',
    apply: 'serve',
    configureServer(serverInstance) {
      server = serverInstance;
      // 监听服务器启动事件
      server.httpServer.on('listening', () => {
        const { port } = server.config.server;
        console.log(`服务启动于端口: ${port}`);
      });
    },
  };
}
```

## `vite.config.ts`

```ts
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // ...
    myPlugin()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

## 注意

如果报错 `TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" ` , 就把 ts 文件改为 js 文件：

`/src/plugins/real-server-port.ts` =》 `/src/plugins/real-server-port.js`