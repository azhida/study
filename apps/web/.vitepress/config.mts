import { defineConfig } from 'vitepress';
import { getSidebarTree } from '@study/utils/fn';

const {nav, sidebar} = getSidebarTree('./src');

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端",
  description: "前端",
  srcDir: 'src',
  outDir: '../../gh-pages/web',
  base: '/study/web/',
  cleanUrls: true,
  ignoreDeadLinks: true,
  metaChunk: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 本地搜索
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      ...nav
    ],

    sidebar: [
      ...sidebar,
    ],

    socialLinks: [
      { icon: "github", link: 'https://azhida.github.io/study/' }
    ]
  }
})
