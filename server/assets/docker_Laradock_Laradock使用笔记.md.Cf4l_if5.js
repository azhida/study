import{_ as a,c as s,o as n,a3 as e}from"./chunks/framework.CFZOmcOm.js";const k=JSON.parse('{"title":"Laradock 使用笔记","description":"","frontmatter":{},"headers":[],"relativePath":"docker/Laradock/Laradock使用笔记.md","filePath":"docker/Laradock/Laradock使用笔记.md","lastUpdated":1722327281000}'),p={name:"docker/Laradock/Laradock使用笔记.md"},l=e(`<h1 id="laradock-使用笔记" tabindex="-1">Laradock 使用笔记 <a class="header-anchor" href="#laradock-使用笔记" aria-label="Permalink to &quot;Laradock 使用笔记&quot;">​</a></h1><p><a href="https://laradock.io/" target="_blank" rel="noreferrer">官网: https://laradock.io/</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ul><li>下载</li><li></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git clone https://github.com/Laradock/laradock.git</span></span>
<span class="line"><span>cd laradock</span></span>
<span class="line"><span>cp .env.example .env</span></span>
<span class="line"><span>vim .env</span></span></code></pre></div><ul><li>编辑配置文件</li></ul><p>.env</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 更换为国内镜像源安装</span></span>
<span class="line"><span>CHANGE_SOURCE=true   </span></span>
<span class="line"><span># 安装指定版本的mysql,默认是安装最新的</span></span>
<span class="line"><span>MYSQL_VERSION=5.7   </span></span>
<span class="line"><span># 因为我们本地已经安装node了，所以workspace不需要安装node</span></span>
<span class="line"><span>WORKSPACE_INSTALL_NODE=false  </span></span>
<span class="line"><span># 修改composer镜像</span></span>
<span class="line"><span>WORKSPACE_COMPOSER_REPO_PACKAGIST=https://mirrors.aliyun.com/composer/  </span></span>
<span class="line"><span># 设置</span></span>
<span class="line"><span>WORKSPACE_TIMEZONE=PRC</span></span></code></pre></div><ul><li>构建镜像 &amp; 启动容器</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker-compose up -d nginx mysql redis</span></span></code></pre></div><blockquote><p>注意：<br> 如果在安装的过程中卡在 <code>apt-get update -yqq</code> 的话，<br> 就编辑 <code>workspace/Dockerfile</code> ,<br> 在 <code>RUN set -xe; apt-get update -yqq</code> 前(大概第50行)<br> 写入一下内容</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>RUN find /etc/apt/sources.list.d/ -type f -name &quot;*.list&quot; -exec sed -i.bak -r &#39;s#deb(-src)?\\s*http(s)?://ppa.launchpad.net#deb\\1 https://launchpad.proxy.ustclug.org#ig&#39; {} \\;</span></span></code></pre></div><ul><li>nginx 站点配置</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cp nginx/sites/laravel.conf.example nginx/sites/laravel.conf</span></span></code></pre></div><p>/nginx/sites/laravel.conf</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>    server_name laravel.test;</span></span>
<span class="line"><span>    root /var/www/laravel/public;</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>    error_log /var/log/nginx/laravel_error.log;</span></span>
<span class="line"><span>    access_log /var/log/nginx/laravel_access.log;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,16),t=[l];function i(c,o,d,r,h,u){return n(),s("div",null,t)}const v=a(p,[["render",i]]);export{k as __pageData,v as default};
