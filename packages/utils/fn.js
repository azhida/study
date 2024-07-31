import dirTree from 'directory-tree';

export function getSidebarTree(dir) {
    const srcDir = dirTree(dir, {
        exclude: [/src\/index.md/],
        extensions: /\.md$/,
        normalizePath: true,
    });

    const sidebar = makeTree(srcDir);
    const nav = sidebar.map((e) => {
        return {
            text: e.text,
            link: `/${e.text}/`
        }
    })
    return {
        nav,
        sidebar
    }
}


function makeTree(obj) {
    const items = [];
    obj?.children.map((e) => {
      const item = {
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