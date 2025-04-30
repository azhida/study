<template>
  <a class="VPNavBarMenuLink" :class="{'active': route.path == link}" :href="link" target="_self">{{ text }}</a>
</template>

<script setup>
import { useRoute } from 'vitepress'

const {text,link} = defineProps(['text','link'])
const route = useRoute()
</script>


<style scoped lang="scss">
  .VPNavBarMenuLink {
    display: flex;
    align-items: center;
    padding: 0 12px;
    line-height: var(--vp-nav-height);
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-1);
    transition: color 0.25s;
    cursor: pointer;

    &.active {
      color: var(--vp-c-brand-1);
    }
  }

</style>
