# vitepress 多入口分包独立打包

## 目的

- 提升首页加载速度
- 分模块打包，减少打包时间

## 一、基础架构设计

### 1. ‌目录结构优化

- `docs/.vitepress/config.mjs` : 合并vite-plugin-pages配置
- `docs/projects/projectA/index.md` : 主入口文件
- `docs/projects/projectB/index.md` : 项目B 入口文件
- `docs/projects/projectC/index.md` : 项目C 入口文件
- `docs/package.json`

> 通过projects目录实现子项目隔离

### 2. vite-plugin-pages动态路由

```sh
pnpm i vite-plugin-pages -D
```

- `.vitepress/config.mjs`

```js
import Pages from 'vite-plugin-pages'
export default {
  vite: {
    plugins: [
      Pages({
        dirs: [
          { dir: 'projects/**', baseRoute: '' } // 动态识别子项目目录
        ]
      })
    ]
  }
}
```

> 实现基于文件系统的路由生成

## 二、分包配置实现

### 1. 多入口声明

- `.vitepress/config.mjs` 添加：

```js
import { defineConfig } from 'vitepress'
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        input: {
          projectA: resolve(__dirname, '../projects/projectA/index.md'),
          projectB: resolve(__dirname, '../projects/projectB/index.md')
        },
        output: {
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js'
        }
      }
    }
  }
})

```

> 通过rollupOptions.input指定独立入口

### 2. 依赖分包策略

添加manualChunks优化

- `.vitepress/config.mjs` 添加：

```js
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
            if (id.includes('projects/projectA')) {
              return 'projectA-chunk'
            }
            if (id.includes('projects/projectB')) {
              return 'projectB-chunk' 
            }
          }
        }
      }
    }
  }
})
```

> 实现公共依赖与私有代码分离

## 三、独立打包控制

### 1. 环境变量注入

```sh
pnpm i cross-env -D
```

修改 `package.json` 脚本：

- `package.json`

```json
{
  "scripts": {
    "build:projectA": "cross-env VITE_PROJECT=projectA vitepress build",
    "build:projectB": "cross-env VITE_PROJECT=projectB vitepress build"
  }
}
```

### 2. 动态入口过滤

在配置文件中增加条件判断

- `.vitepress/config.mjs`

```js
const activeProject = process.env.VITE_PROJECT
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        input: activeProject ? 
          { [activeProject]: resolve(__dirname, `../projects/${activeProject}/index.md`) } 
          : multiEntryConfig
      }
    }
  }
})
```

> 实现按需打包指定子项目

## 四、构建产物管理

### 1. 输出路径定制

在vite配置中设置

- `.vitepress/config.mjs`

```js
export default defineConfig({
  vite: {
    build: {
      outDir: `dist/${process.env.VITE_PROJECT || 'full'}`
    }
  }
})
```

> 独立打包时生成隔离目录

### 2. 公共资源处理

通过 `build.assetsDir` 配置

- `.vitepress/config.mjs`

```js
export default defineConfig({
  vite: {
    build: {
      assetsDir: 'static/[name]' // 按子项目分类静态资源
    }
  }
})
```
