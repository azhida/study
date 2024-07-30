import { defineConfig } from 'vitepress';
import dirTree from 'directory-tree';

function makeTree(obj: any) {
  const items: any = [];
  obj?.children.map((e: any) => {
    const item: any = {
      text: e.name.replace('.md', ''),
      link: '/' + e.path.replace('src/', '')
    };
    if (e?.children?.length > 0) {
      delete item.link;
      item.collapsed = true;
      item.items = makeTree(e)
    }

    if (e.name.endsWith('index.md')) {
      item.text = '简介'
      items.unshift(item)
    } else {
      items.push(item)
    }
  })

  return items;
}

const srcDir: any = dirTree('./src', {
  exclude: [/src\/index.md/],
  extensions: /\.md$/,
  normalizePath: true,
});

const sidebarTree = makeTree(srcDir);
const navs = sidebarTree.map((e: any) => {
  return {
    text: e.text,
    link: `/${e.text}/`
  }
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "服务端",
  description: "服务端笔记",
  srcDir: 'src',
  base: '/server/',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 本地搜索
    // search: {
    //   provider: 'local'
    // },
    nav: [
      { text: 'Home', link: '/' },
      ...navs
    ],

    sidebar: [
      ...sidebarTree,
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
