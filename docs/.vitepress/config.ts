import { defineConfig } from 'vitepress'
import { getNavAndSidebarByDir, getSidebarItemsByDir } from '../fn';

const webConfig = getNavAndSidebarByDir('./docs/web'); // 前端
const serverConfig = getNavAndSidebarByDir('./docs/server'); // 服务端
const databaseConfig = getNavAndSidebarByDir('./docs/database'); // 数据库
const devToolConfig = getNavAndSidebarByDir('./docs/dev-tool'); // 开发工具
const demosSidebarItems = getSidebarItemsByDir('./docs/demos', '项目案例'); // 案例
const otherSidebarItems = getSidebarItemsByDir('./docs/other', '其他'); // 其他

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "学习笔记",
  description: "积硅步至千里，积小流成江海！好记性不如烂笔头！",
  base: '/study/',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // 右侧导航栏显示多级目录
    outline: 'deep',
    lastUpdatedText: '最后更新',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        items: webConfig.navItems,
      },
      {
        text: '服务端',
        items: serverConfig.navItems
      },
      {
        text: '数据库',
        items: databaseConfig.navItems
      },
      {
        text: '开发工具',
        items: devToolConfig.navItems
      },
      { text: '项目案例', link: demosSidebarItems.items[0].link },
      { text: '其他', link: otherSidebarItems.items[0].link },
    ],

    sidebar: {
      '/web': webConfig.sidebarItems,
      '/server': serverConfig.sidebarItems,
      '/database': databaseConfig.sidebarItems,
      '/dev-tool': devToolConfig.sidebarItems,
      '/demos': [demosSidebarItems],
      '/other': [otherSidebarItems]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/azhida/study' },
      { icon: 'github', link: 'https://gitee.com/wghzhida/study' },
    ],
    // 全站搜索
    algolia: {
      appId: 'T06JYMHQKY',
      apiKey: '0bb53f5e8f4b553a889e621029704e00',
      indexName: 'study'
    }
  }
})
