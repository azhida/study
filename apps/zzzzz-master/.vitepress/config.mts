import { defineConfig } from 'vitepress';
import { chineseSearchOptimize, pagefindPlugin } from 'vitepress-plugin-pagefind';
import { getEnvConfig } from '../.envs';
import { getNavs } from '@study/components/nav';
import { clearOutdirPlugin } from '../plugins/clearOutdir';

// 拿环境信息 mode ： gh (github) 、 cf (cloudflare)
const VITEPRESS_MODE = process.env.VITEPRESS_MODE || '';
console.log(VITEPRESS_MODE, 'VITEPRESS_MODE');
const config = getEnvConfig(VITEPRESS_MODE);
console.log(config, 'config');

let navs: any = [];
getNavs().map(e => {
  e.component = 'CustomNavItem';
  e.props = { text: e.text, link: e.link };
  const e1 = {
    component: 'CustomNavItem',
    props: { text: e.text, link: e.link },
    text: e.text,
    activeMatch: e.link
  }
  navs.push(e1)
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "学习笔记",
  description: "好记性不如烂笔头！",
  head: [['link', { rel: 'icon', href: '/baby.jpg' }]],
  base: config.base,
  outDir: config.outDir,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 本地搜索
    search: {
      provider: 'local'
    },
    // nav: getNavs(),
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],
    nav: [
      ...navs
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  lang: 'zh-cn',
  vite: {
    plugins: [
      pagefindPlugin({
        customSearchQuery: chineseSearchOptimize,
        // btnPlaceholder: '搜索',
        // placeholder: '搜索文档',
        // emptyText: '空空如也',
        heading: '共: {{searchResult}} 条结果',
        excludeSelector: ['img', 'a.header-anchor'], // 生成文章检索时排除一些元素
        forceLanguage: 'zh-cn', // 设置检索内容的语言
      }), // 只有首页做全局搜索
    ],
    build: {
      emptyOutDir: false,
      // outDir: config.outDir, // TODO：这里配置，打包会报错，原因未知
      rollupOptions: {
        plugins: [clearOutdirPlugin(config.outDir)],
      }
    }
  }
})

// 判断是否开发环境
function isDev() {
  console.log(process.env.NODE_ENV, 'process.env.NODE_ENV');
  if (process.env.NODE_ENV == 'development') {
    console.log('开发环境');
    return true;
  } else {
    console.log('生产环境');
    return false;
  }
}