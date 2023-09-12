import { defineConfig } from 'vitepress';
import mathjax3 from 'markdown-it-mathjax3';
import { getNavAndSidebarByDir, getSidebarItemsByDir } from '../fn';

const customElements = [
	'math',
	'maction',
	'maligngroup',
	'malignmark',
	'menclose',
	'merror',
	'mfenced',
	'mfrac',
	'mi',
	'mlongdiv',
	'mmultiscripts',
	'mn',
	'mo',
	'mover',
	'mpadded',
	'mphantom',
	'mroot',
	'mrow',
	'ms',
	'mscarries',
	'mscarry',
	'mscarries',
	'msgroup',
	'mstack',
	'mlongdiv',
	'msline',
	'mstack',
	'mspace',
	'msqrt',
	'msrow',
	'mstack',
	'mstack',
	'mstyle',
	'msub',
	'msup',
	'msubsup',
	'mtable',
	'mtd',
	'mtext',
	'mtr',
	'munder',
	'munderover',
	'semantics',
	'math',
	'mi',
	'mn',
	'mo',
	'ms',
	'mspace',
	'mtext',
	'menclose',
	'merror',
	'mfenced',
	'mfrac',
	'mpadded',
	'mphantom',
	'mroot',
	'mrow',
	'msqrt',
	'mstyle',
	'mmultiscripts',
	'mover',
	'mprescripts',
	'msub',
	'msubsup',
	'msup',
	'munder',
	'munderover',
	'none',
	'maligngroup',
	'malignmark',
	'mtable',
	'mtd',
	'mtr',
	'mlongdiv',
	'mscarries',
	'mscarry',
	'msgroup',
	'msline',
	'msrow',
	'mstack',
	'maction',
	'semantics',
	'annotation',
	'annotation-xml',
	'mjx-container',
	'mjx-assistive-mml',
];

const interviewConfig = getNavAndSidebarByDir('./docs/问答', '问答'); // 面试
const webConfig = getNavAndSidebarByDir('./docs/web', '前端'); // 前端
const serverConfig = getNavAndSidebarByDir('./docs/server', '服务端'); // 服务端
const databaseConfig = getNavAndSidebarByDir('./docs/database', '数据库'); // 数据库
const devToolConfig = getNavAndSidebarByDir('./docs/dev-tool', '开发工具'); // 开发工具
const demosSidebarItems = getSidebarItemsByDir('./docs/demos', '项目案例'); // 案例
const otherSidebarItems = getSidebarItemsByDir('./docs/other', '其他'); // 其他

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "学习笔记",
	description: "积硅步至千里，积小流成江海！好记性不如烂笔头！",
	base: '/study/',
  outDir:'../gh-pages',
	lastUpdated: true,
	head: [
		// 设置 favor.ico，.vuepress/public 下
		['link', { rel: 'icon', href: '/favicon.ico' }],
	],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config

		// 右侧导航栏显示多级目录
		outline: 'deep',
		lastUpdatedText: '最后更新',

		nav: [
			{ text: '首页', link: '/' },
			// {
			//   text: '问答',
			//   items: interviewConfig.navItems,
			// },
			{
				text: '前端',
				items: webConfig.navItems,
			},
			{
				text: '服务端',
				items: serverConfig.navItems
			},
			{
				text: '数据库',
				items: databaseConfig.navItems
			},
			{
				text: '开发工具',
				items: devToolConfig.navItems
			},
			{ text: '项目案例', link: demosSidebarItems.items[0].link },
			{ text: '其他', link: otherSidebarItems.items[0].link },
		],

		sidebar: {
			'/问答': interviewConfig.sidebarItems,
			'/web': webConfig.sidebarItems,
			'/server': serverConfig.sidebarItems,
			'/database': databaseConfig.sidebarItems,
			'/dev-tool': devToolConfig.sidebarItems,
			'/demos': [demosSidebarItems],
			'/other': [otherSidebarItems]
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/azhida/study' },
			{ icon: 'github', link: 'https://gitee.com/wghzhida/study' },
		],
		// 全站搜索
		algolia: {
			appId: 'T06JYMHQKY',
			apiKey: '0bb53f5e8f4b553a889e621029704e00',
			indexName: 'study'
		}
	},
	markdown: {
		lineNumbers: false, // 代码块显示行号：true|false
		config: (md) => {
			md.use(mathjax3);
		}
	},
	// 由于vitepress编译生成静态html文件时，无法识别插件生成的特殊标签，故需在编译时进行处理，将特殊标签定位自定义标签，防止编译报错
	vue: {
		template: {
			compilerOptions: {
				isCustomElement: (tag) => customElements.includes(tag),
			},
		}
	}
})