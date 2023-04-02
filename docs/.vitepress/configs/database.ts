

// 前端路由

const navItems = [
    { text: 'MySQL', link: '/database/mysql/' },
    { text: 'ClickHouse', link: '/database/ClickHouse/'},
];

// 按 text 的首字母排序
navItems.sort(function(a,b){
    return (a.text + '').localeCompare(b.text + '')
})

const sidebarItems = [
    {
        text: 'MySQL',
        collapsed: true,
        items: [
            { text: '简介', link: '/database/mysql/'},
        ]
    },
    {
        text: 'ClickHouse',
        collapsed: true,
        items: [
            { text: '简介', link: '/database/ClickHouse/'},
        ]
    },
];

sidebarItems.sort(function(a,b){
    return (a.text + '').localeCompare(b.text + '')
})

export default {
    navItems,
    sidebarItems
};