<!-- ./流动边框-demo-1.vue -->

<template>
  <div class="box">
    <div class="transform-box">
      <div class="animation-box"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;

  .transform-box {
    height: 100%;
    width: 100%;
    transform-origin: 50% 50%;
    transform: scale(10);

    .animation-box {
      position: absolute;
      border: 1px solid red;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      transform-origin: 50% 50%;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        // display: block;
        border-radius: 50%;
        background: orange;
        clip-path: polygon(50% 50%, 100% 50%, 100% 23%, 100% 0, 74% 0, 53% 0, 15% 0);
        animation: rotate 5s linear infinite;
      }

    }

  }
}

@keyframes rotate {
  to {
    transform: rotate(1turn);
  }
}
</style>