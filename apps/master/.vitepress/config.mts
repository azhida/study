import { defineConfig } from 'vitepress';
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
  vite: {
    build: {
      emptyOutDir: false,
      // outDir: config.outDir, // TODO：这里配置，打包会报错，原因未知
      rollupOptions: {
        plugins: [clearOutdirPlugin(config.outDir)],
      }
    }
  }
})
