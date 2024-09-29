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
    width: 150px;
    height: 150px;
    margin: 100px auto;
    overflow: hidden;
    border-radius: 4px;

    .under2 {
      position: relative;
      width: 0px;
      height: 0px;
      border-top: 200px solid rgb(0, 255, 13);
      border-right: 200px solid rgb(45, 218, 203);
      border-bottom: 200px solid rgb(255, 106, 156);
      border-left: 200px solid rgb(251, 255, 26);
      left: -125px;
      top: -125px;
      animation: rotate2 2s linear infinite;
    }

    span {
      position: absolute;
      top: 0px;
      margin: 8px;
      width: 134px;
      height: 134px;
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