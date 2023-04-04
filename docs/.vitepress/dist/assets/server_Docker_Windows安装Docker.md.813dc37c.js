import{_ as e,o,c as a,Q as r}from"./chunks/framework.92222dd1.js";const u=JSON.parse('{"title":"Windows 安装 Docker","description":"","frontmatter":{},"headers":[],"relativePath":"server/Docker/Windows安装Docker.md","lastUpdated":null}'),s={name:"server/Docker/Windows安装Docker.md"},t=r(`<h1 id="windows-安装-docker" tabindex="-1">Windows 安装 Docker <a class="header-anchor" href="#windows-安装-docker" aria-label="Permalink to &quot;Windows 安装 Docker&quot;">​</a></h1><h2 id="官网下载安装包" tabindex="-1">官网下载安装包 <a class="header-anchor" href="#官网下载安装包" aria-label="Permalink to &quot;官网下载安装包&quot;">​</a></h2><p><a href="https://www.docker.com/" target="_blank" rel="noreferrer">官网</a></p><p><a href="https://docs.docker.com/desktop/windows/install/" target="_blank" rel="noreferrer">安装包下载地址</a></p><h2 id="docker-desktop-更改安装目录" tabindex="-1">docker desktop 更改安装目录 <a class="header-anchor" href="#docker-desktop-更改安装目录" aria-label="Permalink to &quot;docker desktop 更改安装目录&quot;">​</a></h2><p>desktop 默认是安装到 <code>C:\\Program Files\\Docker</code> 下的，无法更改，但是可以用创建联接的方式改变。</p><h3 id="_1-docker-未安装" tabindex="-1">1 Docker 未安装 <a class="header-anchor" href="#_1-docker-未安装" aria-label="Permalink to &quot;1 Docker 未安装&quot;">​</a></h3><ul><li>创建目录 <code>D:\\Docker</code></li><li>以管理员身份打开cmd</li><li>执行命令</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mklink /j &quot;C:\\Program Files\\Docker&quot; &quot;D:\\Docker&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-docker-已安装" tabindex="-1">2 Docker 已安装 <a class="header-anchor" href="#_2-docker-已安装" aria-label="Permalink to &quot;2 Docker 已安装&quot;">​</a></h3><ul><li>先停止 docker 服务</li><li>剪切 <code>C:\\Program Files\\Docker</code> 到 <code>D:\\Docker</code></li><li>以管理员身份打开cmd并执行下列操作</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mklink /j &quot;C:\\Program Files\\Docker&quot; &quot;D:\\Docker&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,12),c=[t];function l(n,d,i,p,k,h){return o(),a("div",null,c)}const D=e(s,[["render",l]]);export{u as __pageData,D as default};
