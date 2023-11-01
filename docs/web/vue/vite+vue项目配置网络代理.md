# vite+vue项目配置网络代理


- `.env.development`

```
# 页面标题
VITE_APP_TITLE = XX系统

# 开发环境配置
VITE_APP_ENV = 'development'

# 接口前缀
VITE_APP_BASE_API = '/api'

# 接口服务地址
VITE_APP_SERVE = 'http://127.0.0.1:8080'
```

- `vite.config.js`

```js
import { defineConfig, loadEnv } from 'vite'
import path from 'path'

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_APP_ENV, VITE_APP_BASE_API, VITE_APP_SERVE } = env
  return {
    server: {
      proxy: {
        // https://cn.vitejs.dev/config/#server-proxy
        [VITE_APP_BASE_API + '/mock-api']: {
          target: 'https://mock.apifox.cn/', // mock 数据请求地址，自行查阅完善
          changeOrigin: true,
          rewrite: path => path.replace(RegExp(`${VITE_APP_BASE_API + '/mock-api'}`), '')
        },
        [VITE_APP_BASE_API]: { 
          target: VITE_APP_SERVE, // 真实接口地址
          changeOrigin: true,
          rewrite: path => path.replace(RegExp(`^${VITE_APP_BASE_API}`), '')
        },
      }
    }
  }
})
```

- `src/api/mock-api/demo.js`

```js
// 请求 mock 数据
export function listDemo1(query) {
  return request({
    url: '/mock-api/demo/list',
    method: 'get',
    params: query
  })
}

// 请求 真实数据
export function listDemo2(query) {
  return request({
    url: '/demo/list',
    method: 'get',
    params: query
  })
}
```
