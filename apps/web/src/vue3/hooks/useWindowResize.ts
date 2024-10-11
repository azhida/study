import { onUnmounted } from "vue";
import { onMounted } from "vue";
import { ref } from "vue";
import { debounce } from 'lodash-es';

export function useWindowResize() {
  // 浏览器窗口宽度
  const width = ref(window.innerWidth);
  // 高度
  const height = ref(window.innerHeight);

  // 可直接用于刷新组件
  const key = ref(0);

  // 防抖
  const handleResize = debounce(() => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
    key.value++;
  }, 200);

  onMounted(() => {
    window.addEventListener('resize', handleResize);
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  })

  return { width, height, key }
}