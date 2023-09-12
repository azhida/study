import { defineConfig } from 'vitepress'
import { getSidebarItemsByDir } from '../fn';

const wordsSidebarItems:any = getSidebarItemsByDir('./words', '单词'); // 单词
const beautifulArticleSidebarItems:any = getSidebarItemsByDir('./美文', '美文'); // 美文

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "English",
  description: "English study",
  base: '/study/English/',
  outDir:'../gh-pages/English',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '单词', link: '/words/index.md' },
      { text: '美文', link: '/美文/index.md' },
    ],

    sidebar: {
      'words': wordsSidebarItems,
      '美文': beautifulArticleSidebarItems,
    },

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/wghzhida/study/tree/master/English' }
    ]
  }
})
