import { defineConfig } from 'vitepress'

import WebConfig from './configs/web'
import serverConfig from './configs/server'



// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "学习笔记",
  description: "积硅步至千里，积小流成江海！好记性不如烂笔头！",
  base: '/study/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        items: WebConfig.navItems,
      },
      {
        text: '服务端',
        items: serverConfig.navItems
      },
      {
        text: '数据库',
        items: [
          { text: 'HTML', link: '/item-1' },
          { text: 'CSS', link: '/item-2' },
          { text: 'JavaScript', link: '/item-3' },
          { text: 'VUE', link: '/item-3' },
        ]
      },
      {
        text: '开发工具',
        items: [
          { text: 'HTML', link: '/item-1' },
          { text: 'CSS', link: '/item-2' },
          { text: 'JavaScript', link: '/item-3' },
          { text: 'VUE', link: '/item-3' },
        ]
      },
      { text: '项目案例', link: '/' },
      { text: '其他', link: '/' },
    ],

    sidebar: {
      '/web': WebConfig.sidebarItems,
      '/server': serverConfig.sidebarItems,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/azhida/study' },
      { icon: 'github', link: 'https://gitee.com/wghzhida/study' },
    ]
  }
})
