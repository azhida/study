import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.92222dd1.js";const u=JSON.parse('{"title":"Laradock 使用笔记","description":"","frontmatter":{},"headers":[],"relativePath":"server/Docker/Laradock/Laradock使用笔记.md","lastUpdated":null}'),e={name:"server/Docker/Laradock/Laradock使用笔记.md"},p=l(`<h1 id="laradock-使用笔记" tabindex="-1">Laradock 使用笔记 <a class="header-anchor" href="#laradock-使用笔记" aria-label="Permalink to &quot;Laradock 使用笔记&quot;">​</a></h1><p><a href="https://laradock.io/" target="_blank" rel="noreferrer">官网: https://laradock.io/</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ul><li>下载</li><li></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git clone https://github.com/Laradock/laradock.git</span></span>
<span class="line"><span style="color:#A6ACCD;">cd laradock</span></span>
<span class="line"><span style="color:#A6ACCD;">cp .env.example .env</span></span>
<span class="line"><span style="color:#A6ACCD;">vim .env</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>编辑配置文件</li></ul><p>.env</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 更换为国内镜像源安装</span></span>
<span class="line"><span style="color:#A6ACCD;">CHANGE_SOURCE=true   </span></span>
<span class="line"><span style="color:#A6ACCD;"># 安装指定版本的mysql,默认是安装最新的</span></span>
<span class="line"><span style="color:#A6ACCD;">MYSQL_VERSION=5.7   </span></span>
<span class="line"><span style="color:#A6ACCD;"># 因为我们本地已经安装node了，所以workspace不需要安装node</span></span>
<span class="line"><span style="color:#A6ACCD;">WORKSPACE_INSTALL_NODE=false  </span></span>
<span class="line"><span style="color:#A6ACCD;"># 修改composer镜像</span></span>
<span class="line"><span style="color:#A6ACCD;">WORKSPACE_COMPOSER_REPO_PACKAGIST=https://mirrors.aliyun.com/composer/  </span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置</span></span>
<span class="line"><span style="color:#A6ACCD;">WORKSPACE_TIMEZONE=PRC </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>构建镜像 &amp; 启动容器</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker-compose up -d nginx mysql redis</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>注意：<br> 如果在安装的过程中卡在 <code>apt-get update -yqq</code> 的话，<br> 就编辑 <code>workspace/Dockerfile</code> ,<br> 在 <code>RUN set -xe; apt-get update -yqq</code> 前(大概第50行)<br> 写入一下内容</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">RUN find /etc/apt/sources.list.d/ -type f -name &quot;*.list&quot; -exec sed -i.bak -r &#39;s#deb(-src)?\\s*http(s)?://ppa.launchpad.net#deb\\1 https://launchpad.proxy.ustclug.org#ig&#39; {} \\;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>nginx 站点配置</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cp nginx/sites/laravel.conf.example nginx/sites/laravel.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>/nginx/sites/laravel.conf</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name laravel.test;</span></span>
<span class="line"><span style="color:#A6ACCD;">    root /var/www/laravel/public;</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">    error_log /var/log/nginx/laravel_error.log;</span></span>
<span class="line"><span style="color:#A6ACCD;">    access_log /var/log/nginx/laravel_access.log;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,16),o=[p];function c(t,r,i,C,d,A){return a(),n("div",null,o)}const g=s(e,[["render",c]]);export{u as __pageData,g as default};
