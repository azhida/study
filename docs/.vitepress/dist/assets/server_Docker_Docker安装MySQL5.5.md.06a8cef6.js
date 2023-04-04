import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.92222dd1.js";const u=JSON.parse('{"title":"Docker 安装 MySQL5.5","description":"","frontmatter":{},"headers":[],"relativePath":"server/Docker/Docker安装MySQL5.5.md","lastUpdated":null}'),e={name:"server/Docker/Docker安装MySQL5.5.md"},o=n(`<h1 id="docker-安装-mysql5-5" tabindex="-1">Docker 安装 MySQL5.5 <a class="header-anchor" href="#docker-安装-mysql5-5" aria-label="Permalink to &quot;Docker 安装 MySQL5.5&quot;">​</a></h1><blockquote><p>注意：前提条件是：docker 已经成功安装，可以使用 <code>sudo docker info</code> 来检测 docker 是否已安装。</p></blockquote><ul><li>拉取 mysql5.5 镜像</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo docker pull mysql:5.5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>创建容器 mysql5.5</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo docker run -itd \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 3306:3306 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e MYSQL_ROOT_PASSWORD=123456 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name mysql5.5 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /etc/localtime:/etc/localtime:ro \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /data/mysql5.5/:/data/mysql5.5 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql:5.5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>查看容器列表</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo docker ps -a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>进入容器 mysql5.5</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo docker exec -it mysql5.5 /bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 进入 mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql -u root -p</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 退出容器</span></span>
<span class="line"><span style="color:#A6ACCD;">exit</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="其他命令" tabindex="-1">其他命令 <a class="header-anchor" href="#其他命令" aria-label="Permalink to &quot;其他命令&quot;">​</a></h2><ul><li>Linux 下解压 .tar.gz</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">tar -zxvf filename.tar.gz</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,13),p=[o];function c(t,i,r,d,C,y){return a(),l("div",null,p)}const m=s(e,[["render",c]]);export{u as __pageData,m as default};
