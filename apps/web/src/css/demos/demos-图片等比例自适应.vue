<template>
	<div class="main">

		<div class="img-box-1">
			<img src="https://qiniuyun.study.weilh.vip/imgs/css/demo-0.jpg" alt="">
		</div>

		<div class="img-box-2">
			<img src="https://qiniuyun.study.weilh.vip/imgs/css/demo-0.jpg" alt="">
		</div>

		<h2>等比例</h2>
		<div class="img-box-3">
			<div class="img-box-3-1">

			</div>
		</div>

		<h2>等比例</h2>
		<div class="img-box-4">
			<div class="img-box-4-1">

			</div>
		</div>

	</div>
</template>


<script>
	import * as _ from 'lodash-es'

	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.main {
		width: 100%;
		border: 1px solid red;
		display: flex;
		flex-direction: column;
		gap: 10px;

		.img-box-1 {
			width: 300px;
			height: 200px;
			border: 1px solid gray;

			img {
				max-width: 100%;
				max-height: 100%;
			}
		}

		.img-box-2 {
			width: 200px;
			height: 300px;
			border: 1px solid blue;

			img {
				max-width: 100%;
				max-height: 100%;
			}
		}

		.img-box-3 {
			width: 200px;
			height: 200px;
			border: 1px solid green;

			.img-box-3-1 {
				border: 1px solid red;
				width: 100%;
				padding-top: 50%;
				background-image: url('https://qiniuyun.study.weilh.vip/imgs/css/demo-0.jpg');
				background-size: contain;
				background-repeat: no-repeat;
				background-position: center;
			}

		}

		.img-box-4 {
			width: 200px;
			height: 200px;
			border: 1px solid green;

			.img-box-4-1 {
				border: 1px solid red;
				width: 50%;
				padding-top: 100%;
				background-image: url('https://qiniuyun.study.weilh.vip/imgs/css/demo-0.jpg');
				background-size: contain;
				background-repeat: no-repeat;
				background-position: center;
			}

		}
	}
</style>