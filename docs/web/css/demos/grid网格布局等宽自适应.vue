<template>
	<div class="main">
        <div class="item" v-for="i in 10">item</div>
	</div>
</template>

<style scoped lang="scss">
	.main {
		width: 100%;
		border: 1px solid red;
		display: grid;
		// 每个元素宽度：最小 100px，最大 占满
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

        .item {
            height: 50px;
			border: 1px solid blue;
        }
	}
</style>