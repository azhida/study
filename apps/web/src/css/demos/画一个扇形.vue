<template>
  <div class="box"></div>
</template>

<style scoped lang="scss">
.box {
  width: 100px;
  height: 100px;
  background-color: #000;
  border-radius: 50%;
  position: relative;
  background-color: red;
  animation: rotate 20s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50%;
    border: 0px solid red;
    background-color: blue;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    right: 0;
    border: 0px solid blue;
    background-color: blue;
    transform: rotate(200deg);
    transform-origin: 0 50%;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
  }
}

@keyframes rotate {
  to {
    transform: rotate(1turn);
  }
}
</style>