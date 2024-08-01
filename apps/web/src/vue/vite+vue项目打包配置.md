# vite+vue项目打包配置

- `vite.config.js`

```js
import { defineConfig, loadEnv } from 'vite'
import path from 'path'

const { execSync } = require('child_process');
const dayjs = require('dayjs');

const nowTime = dayjs().format('YYYYMMDD_HHmm');
// git 当前版本号前 6 位
const GIT_HASH = execSync('git rev-parse HEAD').toString().trim().slice(0, 6);
const suffix = nowTime + '.' + GIT_HASH;
console.log(suffix, 'suffix');

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
          rewrite: path => path.replace(RegExp(`^${VITE_APP_BASE_API}`), ''),
          // 显示真实请求地址
          bypass(req, res, options) {
            const proxyURL = options.target + options.rewrite(req.url);
            console.log('proxyURL', proxyURL);
            req.headers['x-req-proxyURL'] = proxyURL; // 设置未生效
            res.setHeader('x-req-proxyURL', proxyURL); // 设置响应头可以看到
          },
        },
      }
    },
    build: {
      rollupOptions: {
        output: {
          // 自定义文件名
          chunkFileNames: `js/[name].${suffix}.js`,
          entryFileNames: `js/[name].${suffix}.js`,
          assetFileNamesL: `[ext]/[name].${suffix}.[text]`,
        },
        plugins: [
          myExample()
        ]
      }
    },
    esbuild: {
      // 打包去掉 console.log 控制台打印 和 debugger 内容，更多方式参考 https://juejin.cn/post/7249913673216639034
      drop: ["console", "debugger"],
    },
  }
})

// 自定义插件文档： https://cn.rollupjs.org/plugin-development/#outputoptions
function myExample () {
  return {
    name: 'my-example', // 此名称将出现在警告和错误中
    buildStart() {
      console.log('开始了');
    },
    buildEnd() {
      console.log('结束了');
    },
    outputOptions(outputOptions: OutputOptions) {   
      console.log(outputOptions， 'outputOptions');
    },
  };
}
```

