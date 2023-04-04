import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.92222dd1.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"other/第三方平台/微信/微信小程序/使用笔记.md","lastUpdated":1680584985000}'),l={name:"other/第三方平台/微信/微信小程序/使用笔记.md"},p=e(`<h6 id="在公共js文件设置当前打开页面数据的方法" tabindex="-1">在公共js文件设置当前打开页面数据的方法 <a class="header-anchor" href="#在公共js文件设置当前打开页面数据的方法" aria-label="Permalink to &quot;在公共js文件设置当前打开页面数据的方法&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 获取加载的页面( 页面栈 )</span></span>
<span class="line"><span style="color:#A6ACCD;">var pages = getCurrentPages();</span></span>
<span class="line"><span style="color:#A6ACCD;"># 获取当前页面</span></span>
<span class="line"><span style="color:#A6ACCD;">var currentPage = pages[pages.length - 1];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(currentPage);</span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置当前打开页面的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">currentPage.setData({a: 2});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 获取上一个页面</span></span>
<span class="line"><span style="color:#A6ACCD;">var prevPage = pages[pages.length - 2];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(prevPage);</span></span>
<span class="line"><span style="color:#A6ACCD;">prevPage.setData({a: 3});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),t=[p];function o(c,r,i,C,A,_){return a(),n("div",null,t)}const D=s(l,[["render",o]]);export{g as __pageData,D as default};
