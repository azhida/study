<!-- 流动边框.vue -->
<template>
  <div class="main">
    <demo1></demo1>
    <demo2></demo2>

    <div class="demo3">
      <demo style=""></demo>
    </div>

    <div class="border-image-clip-path"></div>

  </div>
</template>

<script setup>
import demo from './流动边框-组件.vue'
import demo1 from './流动边框-demo-1.vue'
import demo2 from './流动边框-demo-2.vue'

</script>

<style lang="scss" scoped>
.main{
  display: flex;
  gap: 10px;
}

.demo3{
  position: relative;
  width: 200px;
  height: 100px;
  border: 1px solid blue;
  background-color: red;
}


.border-image-clip-path {
    width: 200px;
    height: 100px;
    margin: auto;
    border: 10px solid;
    border-image: linear-gradient(45deg, gold, deeppink) 1;
    clip-path: inset(0px round 10px);
    animation: huerotate 6s infinite linear;
    filter: hue-rotate(360deg);
}

@keyframes huerotate {
    0% {
        filter: hue-rotate(0deg);
    }
    100% {
        filter: hue-rorate(360deg);
    }
}

</style>
