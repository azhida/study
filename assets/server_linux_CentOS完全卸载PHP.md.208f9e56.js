import{_ as a,o as e,c as s,Q as n}from"./chunks/framework.aaef0e9b.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/linux/CentOS完全卸载PHP.md","lastUpdated":1680584985000}'),t={name:"server/linux/CentOS完全卸载PHP.md"},l=n(`<h6 id="先执行" tabindex="-1">先执行 <a class="header-anchor" href="#先执行" aria-label="Permalink to &quot;先执行&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">yum remove php</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h6 id="查看剩余的软件包" tabindex="-1">查看剩余的软件包： <a class="header-anchor" href="#查看剩余的软件包" aria-label="Permalink to &quot;查看剩余的软件包：&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">rpm -qa|grep php</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h6 id="将剩余软件包依次卸载" tabindex="-1">将剩余软件包依次卸载 <a class="header-anchor" href="#将剩余软件包依次卸载" aria-label="Permalink to &quot;将剩余软件包依次卸载&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">yum remove 软件包名称</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,6),o=[l];function p(c,r,i,d,h,_){return e(),s("div",null,o)}const m=a(t,[["render",p]]);export{u as __pageData,m as default};
