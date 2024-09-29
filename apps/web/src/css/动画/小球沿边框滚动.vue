<template>
  <div class="main">
    <div class="moving-div"></div>
  </div>
</template>

<style scoped lang="scss">

    .main {
      position: relative;
      width: 400px;
      height: 200px;
      margin: 50px;
      /* 确保有足够空间显示动画 */
      border-radius: 30px;
      /* overflow: hidden; */
      padding: 1px;
      border: 1px solid red;

      .moving-div{
        position: absolute;
        top: 0;
        left: 40px;
        width: 80px;
        height: 80px;
        background-image: radial-gradient(#b0acf9 40%, transparent 80%);
        border-radius: 40px;
        animation: moveAround 8s linear infinite;
        transform: translate(-40px, -40px);
      }
    }
    

    @keyframes moveAround {
      0% {
        left: 40px;
        top: 0px;
      }

      28.93% {
        left: 360px;
        top: 0px;
      }

      33.99% {
        left: 400px;
        top: 40px;
      }

      44.82% {
        left: 400px;
        top: 160px;
      }

      49.88% {
        left: 360px;
        top: 200px;
      }

      78.81% {
        left: 40px;
        top: 200px;
      }

      83.87% {
        left: 0px;
        top: 160px;
      }

      94.70% {
        left: 0px;
        top: 40px;
      }

      100% {
        left: 40px;
        top: 0px;
      }
    }
</style>