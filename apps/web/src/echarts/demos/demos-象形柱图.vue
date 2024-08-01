<template>
  <div>
    {{  title }}
    <div id="main"></div>
  </div>
  
</template>

<script setup>
const title = 'aaa'
</script>

<style scoped>
#main{
  border: 1px solid red;
  min-width: 500px;
  min-height: 500px;
}

</style>