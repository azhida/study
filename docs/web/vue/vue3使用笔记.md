# vue3 使用笔记

## setup 中使用 watch

```js
<script lang="ts" setup>
	import { ref, defineProps, watch, defineEmits } from "vue";
	
	const props = defineProps({
		showAll: {
			type: Boolean,
			default: false
		}
	});
	
	watch(() => props.showAll, (val, old) => {
		console.log(val)
	});
		
	onLoad((e) => {
		console.log(e);
	})
</script>
```