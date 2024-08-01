# Splitpanes 分栏尺寸可变

## 官网

[文档](https://antoniandre.github.io/splitpanes/)

## vue2

```sh
pnpm i splitpanes@legacy
```

```vue
<!-- demo.vue -->

<template>
  <splitpanes class="default-theme">
    <pane v-for="i in 3" :key="i">
      <div>{{ i }}</div>
    </pane>
  </splitpanes>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

export default {
  components: { Splitpanes, Pane },
}
</script>
```

## vue3

```sh
pnpm i splitpanes
```

```vue
<!-- demo.vue -->

<template>
  <splitpanes class="default-theme">
    <pane v-for="i in 3" :key="i">
      <div>{{ i }}</div>
    </pane>
  </splitpanes>
</template>

<script lang="ts" setup>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
</script>
```