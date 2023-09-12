import{_ as a,o as s,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"other/第三方平台/微信/微信小程序/使用笔记.md","lastUpdated":1680584985000}'),l={name:"other/第三方平台/微信/微信小程序/使用笔记.md"},p=e(`<h6 id="在公共js文件设置当前打开页面数据的方法" tabindex="-1">在公共js文件设置当前打开页面数据的方法 <a class="header-anchor" href="#在公共js文件设置当前打开页面数据的方法" aria-label="Permalink to &quot;在公共js文件设置当前打开页面数据的方法&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 获取加载的页面( 页面栈 )</span></span>
<span class="line"><span style="color:#babed8;">var pages = getCurrentPages();</span></span>
<span class="line"><span style="color:#babed8;"># 获取当前页面</span></span>
<span class="line"><span style="color:#babed8;">var currentPage = pages[pages.length - 1];</span></span>
<span class="line"><span style="color:#babed8;">console.log(currentPage);</span></span>
<span class="line"><span style="color:#babed8;"># 设置当前打开页面的数据</span></span>
<span class="line"><span style="color:#babed8;">currentPage.setData({a: 2});</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 获取上一个页面</span></span>
<span class="line"><span style="color:#babed8;">var prevPage = pages[pages.length - 2];</span></span>
<span class="line"><span style="color:#babed8;">console.log(prevPage);</span></span>
<span class="line"><span style="color:#babed8;">prevPage.setData({a: 3});</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,2),t=[p];function o(c,r,i,d,b,_){return s(),n("div",null,t)}const y=a(l,[["render",o]]);export{h as __pageData,y as default};
