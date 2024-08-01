<template>
	<div class="main">
		<input type="text" placeholder="去掉默认边框">
	</div>

</template>

<style scoped>
	.main {
		border: 1px solid red;
		padding: 20px;
	}

	input {
		border: 1px solid blue;
		padding: 10px;

		/*去掉点击边框*/
		outline: none;
	}
</style>