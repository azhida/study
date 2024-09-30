<!-- ./流动边框-demo-1.vue -->

<template>
  <div class="demo-box">

    <div class="box">
      <div class="under2"></div>
      <!-- <span></span> -->
    </div>

    <div class="box">
      <div class="under2"></div>
      <span></span>
    </div>

  </div>
</template>

<style scoped lang="scss">
.demo-box {
  display: flex;

  .box {
    position: relative;
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 4px;
    &:last-of-type{
      margin-left: 10px;
    }

    .under2 {
      position: absolute;
      width: 0px;
      height: 0px;
      border-top: 100px solid rgb(0, 255, 13);
      border-right: 100px solid rgb(45, 218, 203);
      border-bottom: 100px solid rgb(255, 106, 156);
      border-left: 100px solid rgb(251, 255, 26);
      left: -50px;
      top: -50px;
      animation: rotate2 2s linear infinite;
    }

    span {
      position: absolute;
      top: 8px;
      bottom: 8px;
      left: 8px;
      right: 8px;
      border-radius: 4px;
      background-size: cover;
      background-image: url(https://img-blog.csdnimg.cn/20201011132854978.jpg);
      background-color: white;
    }
  }
}

@keyframes rotate2 {
  0% {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(-1turn);
  }
}
</style>