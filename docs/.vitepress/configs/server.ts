

// 前端路由

const navItems = [
    { text: 'Composer', link: '/server/composer/' },
    { text: 'PHP', link: '/server/php/' },
    { text: 'Python', link: '/server/python/' },
    { text: 'Docker', link: '/server/docker/' },
    { text: 'Nginx', link: '/server/nginx/' },
    { text: 'HTTP', link: '/server/http/' },
    { text: 'Linux', link: '/server/linux/' },
    { text: 'Shell', link: '/server/shell/' },
];

// 按 text 的首字母排序
navItems.sort(function(a,b){
    return (a.text + '').localeCompare(b.text + '')
})

const sidebarItems = [
    {
        text: 'Composer',
        collapsed: true,
        items: [
            { text: '简介', link: '/server/composer/'},
        ]
    },
    {
        text: 'PHP',
        collapsed: true,
        items: [
            { text: '简介', link: '/server/php/'},
        ]
    },
    { text: 'Python', link: '/server/python/' },
    { text: 'Docker', link: '/server/docker/' },
    { text: 'Nginx', link: '/server/nginx/' },
    { text: 'HTTP', link: '/server/http/' },
    { text: 'Linux', link: '/server/linux/' },
    { text: 'Shell', link: '/server/shell/' },
];

export default {
    navItems,
    sidebarItems
};