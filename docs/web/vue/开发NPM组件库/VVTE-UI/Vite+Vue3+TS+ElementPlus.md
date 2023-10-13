# 基于 Vite + Vue3 + TS + ElementPlus 开发组件库

## 创建项目

- 下载并安装依赖

```sh
pnpm create vite@latest
# 项目名称：vvte-ui

cd vvte-ui
pnpm i
pnpm run dev
pnpm i -D sass
pnpm install element-plus
```

- vite.config.ts

```ts

```



## 开发组件

### 挂载方法

- src/packages/withInstall.ts

```ts
import { App, Plugin } from 'vue'

type SFCWithInstall<T> = T & Plugin

export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
  ;(main as SFCWithInstall<T>).install = (app: App) => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp)
    }
  }
  if (extra) {
    for (const [compName, comp] of Object.entries(extra)) {
      ;(main as Record<string, any>)[compName] = comp
    }
  }
  // 将 T 断言为具体的类型 T & plugin & Record<string, any>
  return main as SFCWithInstall<T> & E
}

```

### 编写 button 组件

- src/packages/button/src/index.vue

```vue
<template>
  <button v-bind="$attrs" @click="handleClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  time: {
    type: Number,
    default: 1000,
  },
})

const emits = defineEmits(['click'])
const record = ref(0)
const handleClick = () => {
  let newTime = new Date()
  if (newTime.getTime() - record.value > props.time) {
    emits('click')
  }
  record.value = new Date().getTime()
}
</script>
```

- src/packages/button/index.ts

```ts
import Button from './src/index.vue'
import { withInstall } from '../withInstall'

const XButton = withInstall(Button)
export default XButton
```

### 编写 table 组件

- src/packages/table/src/index.vue

```vue
<template>
  <div v-bind="$attrs">
    <el-table :data="config.data" @selection-change="handleSelectionChange">
      <el-table-column :label="e.title" :width="e.width" :prop="e.key" v-for="(e,i) in config.columns" :key="i">
        <template #default="{row}">
          <div>
            <slot :name="e.key" :row="{row}" v-if="e.key != 'operator'">{{ e.title }}</slot>
            <slot :name="e.key" :row="{row}" v-else>
              <el-button link type="primary" icon="Edit" @click="handleUpdate(row)">修改</el-button>
              <el-button link type="primary" icon="Delete" @click="handleDelete(row)" style="margin-left: 10px;">删除</el-button>
            </slot>
          </div>
        </template>
      </el-table-column>
     </el-table>
  </div>
</template>

<script setup lang="ts">
import { ElTable, ElTableColumn, ElButton } from 'element-plus';

interface Props {
  config: any;
}

defineProps<Props>()

const handleSelectionChange = (e: any) => {
  console.log(e, 'e');
}

const handleUpdate = (e: any) => {
  console.log(e, 'e');
}

const handleDelete = (e: any) => {
  console.log(e, 'e');
}
</script>
```

- src/packages/table/index.ts

```ts
import Table from './src/index.vue'
import { withInstall } from '../withInstall'

const XTable = withInstall(Table)
export default XTable
```

### 导出组件

- src/packages/index.ts

```ts
import type { Component, App } from 'vue'

import XButton from './button'
import XTable from './table'

// 按需引入
export {
  XButton,
  XTable,
}

// 存储组件列表
const components: {
  [propName: string]: Component
} = {
  XButton,
  XTable,
}

// 插件声明：声明所有插件
// 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册
const installComponents: any = (app: App) => {
  for (const key in components) {
    app.component(key, components[key])
  }
}

// vue插件
// - install：每个插件都有一个 install 方法
// - 参数：是通过 Vue.createApp() 创建的 app 实例
const install: any = (app: any, router?: any) => {
  // !router && installRouter(app);
  installComponents(app)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
}
```

