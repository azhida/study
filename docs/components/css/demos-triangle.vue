<template>
    <div class="triangle"></div>
</template>
<style scoped>
    .triangle{
      width: 0;
      height: 0;
      border-right: 200px solid #00a3af; /* 设置宽度为0，所以div的内容为空，才能形成三角形尖角 */
      border-top: 200px solid transparent; /* transparent 表示透明 */
      border-bottom: 200px solid transparent;
    }
</style>