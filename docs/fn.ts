const path = require("path");
const dirTree = require("directory-tree");

interface NavItem {
    text: string
    link: string
}

interface SidebarItem {
    text: string,
    collapsed?: boolean,
    items: object[]
}

function toSidebarOption(tree = []) {
    if (!Array.isArray(tree)) return [];
    return tree.map((v:any) => {
        if (v.children !== undefined) {
            return {
                text: v.name,
                collapsible: true,
                collapsed: true,
                items: toSidebarOption(v.children),
            };
        } else {
            let item = {
                text: v.name.replace(".md", ""),
                link: v.path.split("docs")[1].replace(".md", ""),
            };
            if (item.text == 'index') {
                item.text = '简介';
                item.link = item.link.replace('/index', '/')
            }
            return item;
        }
    });
}

// 获取顶部导航 - 根据 dir 获取一级子目录
function getNavItemsByDir(dir, prefix){
    // 获取指定目录 /docs/web 下所有一级子目录，拿来做顶部导航
    const srcDir = dirTree(dir, {
        extensions: /\.md$/,
        normalizePath: true,
    });
    let navItems:NavItem[] = [];
    srcDir.children.forEach(i => {
        navItems.push({
            text: i.name,
            link: prefix + i.name + '/'
        })
    });
    return navItems;
}

// 获取左侧文章目录 - 根据 dir 获取所有子目录
function getSidebarItemsByDir(dir, title:string|null = null){
    // 获取指定目录 /docs/web 下所有一级子目录，拿来做顶部导航
    const srcDir = dirTree(dir, {
        extensions: /\.md$/,
        normalizePath: true,
    });
    return {
        text: title ? title : srcDir.name,
        collapsible: true,
        collapsed: true,
        items: toSidebarOption(srcDir.children),
    };
}

// 获取 顶部导航 和 左侧文章目录
function getNavAndSidebarByDir(dir) {
    const srcDir = dirTree(dir, {
        extensions: /\.md$/,
        normalizePath: true,
    });
    
    const navItems:NavItem[] = getNavItemsByDir(dir, '/' + srcDir.name + '/');
    // 按 text 的首字母排序
    navItems.sort(function(a,b){
        return (a.text + '').localeCompare(b.text + '')
    })

    let sidebarItems:SidebarItem[] = [];
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