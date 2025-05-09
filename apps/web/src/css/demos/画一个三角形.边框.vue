<template>
  <div>
    <div class="triangle"></div>
  </div>
  
</template>
<style scoped>
.triangle {
  width: 0;
  height: 0;
  border-right: 50px solid #00a3af;
  /* 设置宽度为0，所以div的内容为空，才能形成三角形尖角 */
  border-top: 50px solid transparent;
  /* transparent 表示透明 */
  border-bottom: 50px solid transparent;
}
</style>