<template>
  <div class="box">
    <div class="circle">
      <div class="fan"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;

  .circle {
    position: absolute;
    right: 0;
    top: 0;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: blue;
    overflow: hidden;
    border: 0px solid blue;
    animation: rotate 10s linear infinite;

    .fan {
      transform: skewX(165deg);
      transform-origin: 0 100%;
      position: absolute;
      right: 0;
      top: 0;
      background: red;
      width: 100px;
      height: 100px;
    }
  }
}

@keyframes rotate {
  to {
    transform: rotate(1turn);
  }
}
</style>