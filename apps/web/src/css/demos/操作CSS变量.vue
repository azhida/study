<template>
  <div :style="{'--bg-color': 'red', '--border-color': 'blue'}">
    <div class="demo-box">
      123
    </div>
  </div>
  
</template>
<style scoped>
.demo-box {  
  width: 200px;
  height: 200px;
  background-color: var(--bg-color);
  border: 2px solid var(--border-color);
}
</style>