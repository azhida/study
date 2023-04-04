import{_ as a,o as s,c as n,Q as l}from"./chunks/framework.92222dd1.js";const h=JSON.parse('{"title":"百度网盘 python 客户端","description":"","frontmatter":{},"headers":[],"relativePath":"server/Python/模块/bypy.md","lastUpdated":null}'),e={name:"server/Python/模块/bypy.md"},p=l(`<h1 id="百度网盘-python-客户端" tabindex="-1">百度网盘 python 客户端 <a class="header-anchor" href="#百度网盘-python-客户端" aria-label="Permalink to &quot;百度网盘 python 客户端&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">apt install python-pip</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pip install bypy</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 用该命令获取百度云盘授权码</span></span>
<span class="line"><span style="color:#A6ACCD;">bypy info</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 上传文件或文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;">bypy upload filename</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 上传文件或文件夹到指定目录 ab</span></span>
<span class="line"><span style="color:#A6ACCD;">bypy upload filename ab/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 关闭连接，退出授权</span></span>
<span class="line"><span style="color:#A6ACCD;">bypy -c</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5),o=[p];function t(c,i,r,y,C,d){return s(),n("div",null,o)}const _=a(e,[["render",t]]);export{h as __pageData,_ as default};
