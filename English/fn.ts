import dirTree from 'directory-tree';

interface NavItem {
    text: string
    link: string
}

interface SidebarItem {
    text: string,
    collapsed?: boolean,
    items?: object[]
}

function toSidebarOption(tree = [], father_name = '') {
  if (!Array.isArray(tree)) return [];
  let newArr: any = [];
  let item: any = {};
  const newTree = tree.map((v: any) => {
    let isIndex = false;
    if (v.children) {
      // 有子集，是目录
        item = {
            text: v.name,
            collapsible: true,
            collapsed: true,
            items: toSidebarOption(v.children, v.name),
        };
    } else {
      item = {
        text: v.name.replace('.md', ''),
        link: '/' + v.path
      }
      if (item.text == 'index') {
        isIndex = true;
        item.text = father_name + ' 简介';
        item.link = item.link.replace('/index', '/');
      }
    }
    if (isIndex) {
        newArr.unshift(item);
    } else {
        newArr.push(item);
    }
    return item;
  });
  return newArr;
}

// 获取顶部导航 - 根据 dir 获取一级子目录
function getNavItemsByDir(dir, prefix) {
    // 获取指定目录 /docs/web 下所有一级子目录，拿来做顶部导航
    const srcDir: any = dirTree(dir, {
        extensions: /\.md$/,
        normalizePath: true,
    });
    let navItems: NavItem[] = [];
    srcDir.children.forEach(i => {
        navItems.push({
            text: i.name,
            link: prefix + i.name + '/'
            // link: prefix + i.name + '/' + i.children[0].name
        })
    });
    return navItems;
}

// 获取左侧文章目录 - 根据 dir 获取所有子目录
function getSidebarItemsByDir(dir, title: string | null = null) {
    const srcDir: any = dirTree(dir, {
        exclude: /\/images$/, // 忽略 images 文件夹
        extensions: /\.md$/,
        normalizePath: true,
    });
    return {
        text: title ? title : srcDir.name,
        collapsible: true,
        collapsed: true,
        items: toSidebarOption(srcDir.children, srcDir.name),
    };
}

// 获取 顶部导航 和 左侧文章目录
function getNavAndSidebarByDir(dir, title?: string | null) {
    const srcDir = dirTree(dir, {
        extensions: /\.md$/,
        normalizePath: true,
    });

    const navItems: NavItem[] = getNavItemsByDir(dir, '/' + srcDir.name + '/');
    // 按 text 的首字母排序
    navItems.sort(function (a, b) {
        return (a.text + '').localeCompare(b.text + '')
    })

    let sidebarItems: SidebarItem[] = [{
        text: title ? title : srcDir.name
    }];
    navItems.forEach((i) => {
        sidebarItems.push(getSidebarItemsByDir('./docs' + i.link))
    });

    return {
        navItems,
        sidebarItems
    }
}

export {
    getNavItemsByDir,
    getSidebarItemsByDir,
    getNavAndSidebarByDir,
}