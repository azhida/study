<template>
	<div class="main">

		<div class="tab">
			<div class="item" :class="{'active': i == tabIndex }" v-for="(e,i) in tabList" @click="onClick(i)">{{e}}</div>
		</div>

		<div class="list">
			<div class="item" v-for="i in 10" @click="onClick(i)">{{ i }} : {{ tabList[tabIndex] }}</div>
		</div>

	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const tabList = ref([
		'Tab0',
		'Tab1',
		'Tab2',
		'Tab3',
		'Tab4',
	]);

	const tabIndex = ref(0);

	function onClick(i) {
		tabIndex.value = i
	}
</script>



<style scoped lang="scss">
	.main {
		width: 100%;
		height: 500px;
		border: 0px solid red;

		.tab {
			display: flex;
			justify-content: space-between;
			margin-bottom: 20px;

			.item {
				border: 0px solid blue;
				width: 20%;
				text-align: center;
				padding: 20px 0;
				cursor: pointer;

				&.active {
					position: relative;
					color: red;
					font-weight: bold;

					&::after {
						position: absolute;
						content: '0';
						color: gray;
						height: 3px;
						left: 20px;
						right: 20px;
						bottom: 10px;
						background-color: blue;
					}
				}
			}
		}

	}
</style>