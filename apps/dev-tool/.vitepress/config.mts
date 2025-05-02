import { defineConfig } from 'vitepress';
import { getSidebarTree } from '@study/utils/fn';
import { getEnvConfig } from '../.envs';
import { getNavs } from '@study/components/nav';

const {nav, sidebar} = getSidebarTree('./src');

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
  title: "开发工具",
  description: "开发工具",
  srcDir: 'src',
  outDir: config.outDir,
  base: config.base,
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
      // { text: 'Home', link: '/' },
      ...navs
    ],

    sidebar: [
      ...sidebar,
    ],

    socialLinks: [
      { icon: "github", link: 'https://azhida.github.io/study/' }
    ]
  }
})
