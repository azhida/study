<template>
	<div class="main">
		文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
		文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
		文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
		文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
	</div>

  <div class="main2">
    三层渐变色背景重叠，第一层：0->30%，第二层：30%->80%，第三层：80%->100%

  </div>
</template>

<style scoped>
	.main {
		width: 100%;
		border: 1px solid red;

		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;

		background: linear-gradient(to right, #3B6FFE 0%, #3B6FFE 50%, #F7F8F9 50%, #F7F8F9 100%);
	}

  .main2{
    width: 100%;
    margin-top: 10px;
    border: 1px solid red;

    /* 
    代码说明：
    第一层渐变使用 linear-gradient 从 yellow 过渡到 green，范围是 0 - 30%，30% 之后设置为 transparent 透明，这样就能显示下层的渐变。
    第二层渐变是从 red 过渡到 blue，范围为 0 - 100%。由于 CSS 背景层的渲染顺序是后定义的层在下，所以第二层渐变会在第一层透明部分显示出来。 
    */
    background-image: 
    linear-gradient(to right, #fff 0%, #3B6FFE 30%, transparent 30%, transparent 100%),
    linear-gradient(to right, red 0%, green 80%, transparent 80%, transparent 100%);
  }
</style>