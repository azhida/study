import{_ as a,o as s,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const g=JSON.parse('{"title":"Laradock 使用笔记","description":"","frontmatter":{},"headers":[],"relativePath":"server/docker/Laradock/Laradock使用笔记.md","lastUpdated":1680584985000}'),l={name:"server/docker/Laradock/Laradock使用笔记.md"},p=e(`<h1 id="laradock-使用笔记" tabindex="-1">Laradock 使用笔记 <a class="header-anchor" href="#laradock-使用笔记" aria-label="Permalink to &quot;Laradock 使用笔记&quot;">​</a></h1><p><a href="https://laradock.io/" target="_blank" rel="noreferrer">官网: https://laradock.io/</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ul><li>下载</li><li></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">git clone https://github.com/Laradock/laradock.git</span></span>
<span class="line"><span style="color:#babed8;">cd laradock</span></span>
<span class="line"><span style="color:#babed8;">cp .env.example .env</span></span>
<span class="line"><span style="color:#babed8;">vim .env</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>编辑配置文件</li></ul><p>.env</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 更换为国内镜像源安装</span></span>
<span class="line"><span style="color:#babed8;">CHANGE_SOURCE=true   </span></span>
<span class="line"><span style="color:#babed8;"># 安装指定版本的mysql,默认是安装最新的</span></span>
<span class="line"><span style="color:#babed8;">MYSQL_VERSION=5.7   </span></span>
<span class="line"><span style="color:#babed8;"># 因为我们本地已经安装node了，所以workspace不需要安装node</span></span>
<span class="line"><span style="color:#babed8;">WORKSPACE_INSTALL_NODE=false  </span></span>
<span class="line"><span style="color:#babed8;"># 修改composer镜像</span></span>
<span class="line"><span style="color:#babed8;">WORKSPACE_COMPOSER_REPO_PACKAGIST=https://mirrors.aliyun.com/composer/  </span></span>
<span class="line"><span style="color:#babed8;"># 设置</span></span>
<span class="line"><span style="color:#babed8;">WORKSPACE_TIMEZONE=PRC </span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>构建镜像 &amp; 启动容器</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">docker-compose up -d nginx mysql redis</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><blockquote><p>注意：<br> 如果在安装的过程中卡在 <code>apt-get update -yqq</code> 的话，<br> 就编辑 <code>workspace/Dockerfile</code> ,<br> 在 <code>RUN set -xe; apt-get update -yqq</code> 前(大概第50行)<br> 写入一下内容</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">RUN find /etc/apt/sources.list.d/ -type f -name &quot;*.list&quot; -exec sed -i.bak -r &#39;s#deb(-src)?\\s*http(s)?://ppa.launchpad.net#deb\\1 https://launchpad.proxy.ustclug.org#ig&#39; {} \\;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>nginx 站点配置</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">cp nginx/sites/laravel.conf.example nginx/sites/laravel.conf</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>/nginx/sites/laravel.conf</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">server {</span></span>
<span class="line"><span style="color:#babed8;">.</span></span>
<span class="line"><span style="color:#babed8;">.</span></span>
<span class="line"><span style="color:#babed8;">.</span></span>
<span class="line"><span style="color:#babed8;">    server_name laravel.test;</span></span>
<span class="line"><span style="color:#babed8;">    root /var/www/laravel/public;</span></span>
<span class="line"><span style="color:#babed8;">.</span></span>
<span class="line"><span style="color:#babed8;">.</span></span>
<span class="line"><span style="color:#babed8;">.</span></span>
<span class="line"><span style="color:#babed8;">    error_log /var/log/nginx/laravel_error.log;</span></span>
<span class="line"><span style="color:#babed8;">    access_log /var/log/nginx/laravel_access.log;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,16),o=[p];function c(t,r,i,d,b,y){return s(),n("div",null,o)}const _=a(l,[["render",c]]);export{g as __pageData,_ as default};
