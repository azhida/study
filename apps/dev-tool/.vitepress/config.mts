import { defineConfig } from 'vitepress';
import { getSidebarTree } from '@study/utils/fn';

const {nav, sidebar} = getSidebarTree('./src');

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "开发工具",
  description: "开发工具",
  srcDir: 'src',
  outDir: '../../gh-pages/dev-tool',
  base: '/study/dev-tool/',
  cleanUrls: true,
  ignoreDeadLinks: true,
  metaChunk: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: 'deep',
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
