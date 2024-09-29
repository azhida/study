<!-- 流动边框.vue -->
<template>
  <div class="main">
    <demo1></demo1>
    <demo2></demo2>

    <div class="demo3">
      <demo style=""></demo>
    </div>
  </div>
</template>

<script setup>
import demo from './流动边框-组件.vue'
import demo1 from './流动边框-demo-1.vue'
import demo2 from './流动边框-demo-2.vue'

</script>

<style lang="scss" scoped>
.demo3{
  position: relative;
  width: 200px;
  height: 100px;
  border: 1px solid blue;
  background-color: red;
}
</style>
