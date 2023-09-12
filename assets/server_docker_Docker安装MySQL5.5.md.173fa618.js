import{_ as s,o as a,c as e,Q as l}from"./chunks/framework.aaef0e9b.js";const m=JSON.parse('{"title":"Docker 安装 MySQL5.5","description":"","frontmatter":{},"headers":[],"relativePath":"server/docker/Docker安装MySQL5.5.md","lastUpdated":1680584985000}'),n={name:"server/docker/Docker安装MySQL5.5.md"},o=l(`<h1 id="docker-安装-mysql5-5" tabindex="-1">Docker 安装 MySQL5.5 <a class="header-anchor" href="#docker-安装-mysql5-5" aria-label="Permalink to &quot;Docker 安装 MySQL5.5&quot;">​</a></h1><blockquote><p>注意：前提条件是：docker 已经成功安装，可以使用 <code>sudo docker info</code> 来检测 docker 是否已安装。</p></blockquote><ul><li>拉取 mysql5.5 镜像</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo docker pull mysql:5.5</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>创建容器 mysql5.5</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo docker run -itd \\</span></span>
<span class="line"><span style="color:#babed8;">-p 3306:3306 \\</span></span>
<span class="line"><span style="color:#babed8;">-e MYSQL_ROOT_PASSWORD=123456 \\</span></span>
<span class="line"><span style="color:#babed8;">--name mysql5.5 \\</span></span>
<span class="line"><span style="color:#babed8;">-v /etc/localtime:/etc/localtime:ro \\</span></span>
<span class="line"><span style="color:#babed8;">-v /data/mysql5.5/:/data/mysql5.5 \\</span></span>
<span class="line"><span style="color:#babed8;">mysql:5.5</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>查看容器列表</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo docker ps -a</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>进入容器 mysql5.5</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo docker exec -it mysql5.5 /bin/bash</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 进入 mysql</span></span>
<span class="line"><span style="color:#babed8;">mysql -u root -p</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 退出容器</span></span>
<span class="line"><span style="color:#babed8;">exit</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="其他命令" tabindex="-1">其他命令 <a class="header-anchor" href="#其他命令" aria-label="Permalink to &quot;其他命令&quot;">​</a></h2><ul><li>Linux 下解压 .tar.gz</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">tar -zxvf filename.tar.gz</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,13),p=[o];function c(t,i,r,d,b,y){return a(),e("div",null,p)}const _=s(n,[["render",c]]);export{m as __pageData,_ as default};
