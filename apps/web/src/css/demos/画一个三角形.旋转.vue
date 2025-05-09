<template>
  <div>
    <div class="triangle"></div>
  </div>
</template>
<style scoped lang="scss">
.triangle {
  width: 100px;
  height: 100px;
  border: 0px solid gray;
  position: relative;
  overflow: hidden;

  &::before {
    content: ' ';
    width: 50px;
    height: 50px;
    border: 0px solid red;
    position: absolute;
    background-color: blue;
    transform-origin: top left; // 左上角为原点进行旋转
    transform: rotate(45deg);
  }
}
</style>