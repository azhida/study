import{_ as s,c as n,o as e,a3 as p}from"./chunks/framework.Bf7f-acG.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"第三方平台/微信/微信小程序/使用笔记.md","filePath":"第三方平台/微信/微信小程序/使用笔记.md","lastUpdated":1746496452000}'),t={name:"第三方平台/微信/微信小程序/使用笔记.md"};function l(r,a,c,i,o,d){return e(),n("div",null,a[0]||(a[0]=[p(`<h6 id="在公共js文件设置当前打开页面数据的方法" tabindex="-1">在公共js文件设置当前打开页面数据的方法 <a class="header-anchor" href="#在公共js文件设置当前打开页面数据的方法" aria-label="Permalink to &quot;在公共js文件设置当前打开页面数据的方法&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 获取加载的页面( 页面栈 )</span></span>
<span class="line"><span>var pages = getCurrentPages();</span></span>
<span class="line"><span># 获取当前页面</span></span>
<span class="line"><span>var currentPage = pages[pages.length - 1];</span></span>
<span class="line"><span>console.log(currentPage);</span></span>
<span class="line"><span># 设置当前打开页面的数据</span></span>
<span class="line"><span>currentPage.setData({a: 2});</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 获取上一个页面</span></span>
<span class="line"><span>var prevPage = pages[pages.length - 2];</span></span>
<span class="line"><span>console.log(prevPage);</span></span>
<span class="line"><span>prevPage.setData({a: 3});</span></span></code></pre></div>`,2)]))}const u=s(t,[["render",l]]);export{h as __pageData,u as default};
