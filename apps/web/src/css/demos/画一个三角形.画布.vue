<template>
  <canvas ref="canvas" width="200" height="200"></canvas>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const canvas = ref(null);

onMounted(() => {
  drawTriangle();
});

function drawTriangle() {
  const ctx = canvas.value.getContext('2d');

  // 设置起始点
  ctx.beginPath();
  ctx.moveTo(50, 150); // 第一个点
  ctx.lineTo(150, 50); // 第二个点
  ctx.lineTo(50, 50); // 第三个点
  ctx.closePath(); // 闭合路径，形成三角形

  // 设置填充颜色
  ctx.fillStyle = 'blue';
  ctx.fill(); // 填充三角形

  // 设置描边颜色和宽度
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.stroke(); // 描边三角形
}
</script>