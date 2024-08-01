import{_ as a,c as s,o as n,a3 as p}from"./chunks/framework.CFZOmcOm.js";const _=JSON.parse('{"title":"百度网盘 python 客户端","description":"","frontmatter":{},"headers":[],"relativePath":"python/模块/bypy.md","filePath":"python/模块/bypy.md","lastUpdated":1722327281000}'),e={name:"python/模块/bypy.md"},t=p(`<h1 id="百度网盘-python-客户端" tabindex="-1">百度网盘 python 客户端 <a class="header-anchor" href="#百度网盘-python-客户端" aria-label="Permalink to &quot;百度网盘 python 客户端&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>apt install python-pip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pip install bypy</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 用该命令获取百度云盘授权码</span></span>
<span class="line"><span>bypy info</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 上传文件或文件夹</span></span>
<span class="line"><span>bypy upload filename</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 上传文件或文件夹到指定目录 ab</span></span>
<span class="line"><span>bypy upload filename ab/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 关闭连接，退出授权</span></span>
<span class="line"><span>bypy -c</span></span></code></pre></div>`,5),l=[t];function i(o,c,d,h,r,y){return n(),s("div",null,l)}const u=a(e,[["render",i]]);export{_ as __pageData,u as default};
