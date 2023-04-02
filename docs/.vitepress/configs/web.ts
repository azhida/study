

// 前端路由

const navItems = [
    { text: 'Angular', link: '/web/angular/' },
    { text: 'APICloud', link: '/web/apicloud/' },
    { text: 'CSS', link: '/web/css' },
    { text: 'HTML', link: '/web/html' },
    { text: 'JavaScript', link: '/web/js' },
    { text: 'NodeJS', link: '/web/nodejs' },
    { text: 'VUE', link: '/web/vue' },
    { text: 'UniApp', link: '/web/uniapp' },
];

// 按 text 的首字母排序
navItems.sort(function(a,b){
    return (a.text + '').localeCompare(b.text + '')
})

const sidebarItems = [
    {
        text: 'Angular',
        collapsed: true,
        items: [
            { text: '简介', link: '/web/angular/'},
            { text: '使用笔记', link: '/web/angular/使用笔记'},
            { text: '父子组建通信', link: '/web/angular/父子组件通信'},
        ]
    },
    {
        text: 'APICloud',
        collapsed: true,
        items: [
            { text: '简介', link: '/web/apicloud/'},
            { text: 'ios上架AppStore笔记', link: '/web/apicloud/ios上架AppStore笔记'},
            { text: '使用笔记', link: '/web/apicloud/使用笔记'},
            { text: '常见错误', link: '/web/apicloud/常见错误'},
        ]
    },
    { text: 'CSS', link: '/web/css' },
    { text: 'HTML', link: '/web/html' },
    { text: 'JavaScript', link: '/web/js' },
    { text: 'NodeJS', link: '/web/nodejs' },
    { text: 'VUE', link: '/web/vue' },
    { text: 'UniApp', link: '/web/uniapp' },
];

sidebarItems.sort(function(a,b){
    return (a.text + '').localeCompare(b.text + '')
})

export default {
    navItems,
    sidebarItems
};