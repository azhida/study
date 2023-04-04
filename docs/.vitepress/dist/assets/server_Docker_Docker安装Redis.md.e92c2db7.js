import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.92222dd1.js";const D=JSON.parse('{"title":"Docker 安装 Redis","description":"","frontmatter":{},"headers":[],"relativePath":"server/Docker/Docker安装Redis.md","lastUpdated":null}'),l={name:"server/Docker/Docker安装Redis.md"},o=n(`<h1 id="docker-安装-redis" tabindex="-1">Docker 安装 Redis <a class="header-anchor" href="#docker-安装-redis" aria-label="Permalink to &quot;Docker 安装 Redis&quot;">​</a></h1><blockquote><p>注意：前提条件是：docker 已经成功安装，可以使用 <code>sudo docker info</code> 来检测 docker 是否已安装。</p></blockquote><ul><li>拉取 redis 镜像</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo docker pull redis:latest</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>创建容器 redis</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo docker run -itd \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 6379:6379 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name redis \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /etc/localtime:/etc/localtime:ro \\</span></span>
<span class="line"><span style="color:#A6ACCD;">redis</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>查看容器列表</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo docker ps -a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>进入容器 redis</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo docker exec -it redis /bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 进入 命令行</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 退出容器</span></span>
<span class="line"><span style="color:#A6ACCD;">exit</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,10),p=[o];function c(t,i,r,d,C,A){return a(),e("div",null,p)}const _=s(l,[["render",c]]);export{D as __pageData,_ as default};
