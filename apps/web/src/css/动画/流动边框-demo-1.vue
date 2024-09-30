<!-- ./流动边框-demo-1.vue -->

<template>
  <div class="demo-box">

    <div class="box">
      <div class="under"></div>
      <!-- <span></span> -->
    </div>

    <div class="box">
      <div class="under"></div>
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

    .under {
      position: relative;
      width: 0px;
      height: 0px;
      border-top: 100px solid yellow;
      border-right: 100px solid green;
      border-bottom: 100px solid red;
      border-left: 100px solid blueviolet;
      left: -50px;
      top: -50px;
      animation: rotate 10s linear infinite;
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
      border: 1px solid blue;
    }
  }
}

@keyframes rotate {
  to {
    transform: rotate(1turn);
  }
}
</style>