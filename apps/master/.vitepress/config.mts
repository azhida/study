import { defineConfig } from 'vitepress'
import { getEnvConfig } from '../.envs';

// 拿环境信息 mode ： gh (github) 、 cf (cloudflare)
const VITEPRESS_MODE = process.env.VITEPRESS_MODE || '';
console.log(VITEPRESS_MODE, 'VITEPRESS_MODE');
const config = getEnvConfig(VITEPRESS_MODE);
console.log(config, 'config');

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "学习笔记",
  description: "好记性不如烂笔头！",
  head: [['link', { rel: 'icon', href: '/baby.jpg' }]],
  base: config.base,
  outDir: config.outDir,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
