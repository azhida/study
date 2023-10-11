# RuoYi-Vue3

## 官网

- 源码： https://github.com/yangzongzhuan/RuoYi-Vue3
- 源码镜像： https://gitee.com/wghzhida/RuoYi-Vue3.git
- 演示地址：http://vue.ruoyi.vip
- 文档地址：http://doc.ruoyi.vip


## 集成 TS

- 基于版本： RuoYi v3.8.6
- 说明：官方未支持 ts，但自己开发时希望能使用 ts

### 新增必要文件

- env.d.ts

```ts
/// <reference types="vite/client" />
```

- tsconfig.json

```json
{
  "compilerOptions": {
    "allowJs": true,
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "lib": ["ESNext", "DOM"],
    "skipLibCheck": true, // 不对第三方依赖类型检查 ，element-plus 生产打包报错
    "allowSyntheticDefaultImports": true, // 默认导入
    "suppressImplicitAnyIndexErrors": true,
    "ignoreDeprecations": "5.0",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "types": ["vite/client", "element-plus/global"]
  },

  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "exclude": ["node_modules", "dist", "script"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

```

- tsconfig.node.json

```json
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

### 修改必要的文件

- index.html

```html
<!-- <script type="module" src="/src/main.js"></script> -->
<script type="module" src="/src/main.ts"></script>
```

- package.json

```json
{
  "scripts": {
    "build": "vue-tsc --noEmit && vite build",
  }
}
```

`vue-tsc`: 编译前检测 TS

- src/main.js -> src/main.ts
- vite.config.js -> vite.config.ts
- 其他 js 文件是否重命名为 ts 文件，则根据报错信息酌情操作
- 也可以将项目中所有 js 文件重命名为 ts 文件（不过需要留意可能产生的其他异常问题）

### 安装 TS

```sh
yarn add -D typescript vue-tsc
```

### 检测

- 执行命令，如报错，则详细排查排查
```sh
yarn dev
yarn build
yarn build:prod
```

- 浏览器访问对应的地址，如报错，则详细排查排查

### 说明

如果 `yarn dev` 、`yarn build` 和 `yarn build:prod` 编译无问题，并且 浏览器访问项目也无报错，说明改造基本完成；

如果有报错，则根据具体报错信息具体处理；

