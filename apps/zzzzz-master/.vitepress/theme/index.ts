// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import  { useRouter  } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import CustomNavItem from '@study/components/CustomNavItem.vue';
import { isNowBase } from '@study/utils/fn';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('CustomNavItem', CustomNavItem);

    router.onBeforeRouteChange = (to) => {
      isNowBase(to, ()=>{
        return false;
      });
    }
  }
} satisfies Theme
