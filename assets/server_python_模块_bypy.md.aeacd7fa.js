import{_ as a,o as s,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const _=JSON.parse('{"title":"百度网盘 python 客户端","description":"","frontmatter":{},"headers":[],"relativePath":"server/python/模块/bypy.md","lastUpdated":1680584985000}'),p={name:"server/python/模块/bypy.md"},l=e(`<h1 id="百度网盘-python-客户端" tabindex="-1">百度网盘 python 客户端 <a class="header-anchor" href="#百度网盘-python-客户端" aria-label="Permalink to &quot;百度网盘 python 客户端&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">apt install python-pip</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">pip install bypy</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 用该命令获取百度云盘授权码</span></span>
<span class="line"><span style="color:#babed8;">bypy info</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 上传文件或文件夹</span></span>
<span class="line"><span style="color:#babed8;">bypy upload filename</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 上传文件或文件夹到指定目录 ab</span></span>
<span class="line"><span style="color:#babed8;">bypy upload filename ab/</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 关闭连接，退出授权</span></span>
<span class="line"><span style="color:#babed8;">bypy -c</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,5),o=[l];function t(c,i,r,b,d,y){return s(),n("div",null,o)}const u=a(p,[["render",t]]);export{_ as __pageData,u as default};
