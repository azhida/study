export function getNavs() {
  const navs = [
    { text: '首页', link: '/' },
    { text: 'AI', link: '/ai/' },
    { text: '前端', link: '/web/' },
    { text: '服务端', link: '/server/' },
    { text: '数据库', link: '/database/' },
    { text: '开发工具', link: '/dev-tool/' },
    { text: '项目案例', link: '/demo/' },
    { text: '其他', link: '/other/' },
  ]
  return navs;
}

export function getNavsObj() {
  let navsObj = {}
  getNavs().map(e=>{
    navsObj[e.link.replaceAll('/','')] = e;
  })
  return navsObj;
}