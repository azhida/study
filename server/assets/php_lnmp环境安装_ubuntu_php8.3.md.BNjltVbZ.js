import{_ as s,c as a,o as n,a5 as i}from"./chunks/framework.CJNr4pYi.js";const g=JSON.parse('{"title":"Ubuntu 22.04.4 + php8.3 环境安装","description":"","frontmatter":{},"headers":[],"relativePath":"php/lnmp环境安装/ubuntu/php8.3.md","filePath":"php/lnmp环境安装/ubuntu/php8.3.md","lastUpdated":1722810404000}'),p={name:"php/lnmp环境安装/ubuntu/php8.3.md"},t=i(`<h1 id="ubuntu-22-04-4-php8-3-环境安装" tabindex="-1">Ubuntu 22.04.4 + php8.3 环境安装 <a class="header-anchor" href="#ubuntu-22-04-4-php8-3-环境安装" aria-label="Permalink to &quot;Ubuntu 22.04.4 + php8.3 环境安装&quot;">​</a></h1><h2 id="更新-apt-get" tabindex="-1">更新 apt-get <a class="header-anchor" href="#更新-apt-get" aria-label="Permalink to &quot;更新 apt-get&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo apt-get update</span></span></code></pre></div><h2 id="安装-php8-3" tabindex="-1">安装 php8.3 <a class="header-anchor" href="#安装-php8-3" aria-label="Permalink to &quot;安装 php8.3&quot;">​</a></h2><p>使用 第三方库 software-properties-common</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装 add-apt-repository 命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> software-properties-common</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 用add-apt-repository命令添加源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add-apt-repository</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ppa:ondrej/php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装 php8.3 及其扩展</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.3-fpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.3-mysql</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.3-gd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.3-mbstring</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.3-bcmath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.3-dom</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.3-zip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.3-sqlite3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.3-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.3-soap</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装 phpize8.3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.3-dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 卸载 php8.3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># sudo apt-get autoremove php8.3*</span></span></code></pre></div><h2 id="fpm-命令" tabindex="-1">fpm 命令 <a class="header-anchor" href="#fpm-命令" aria-label="Permalink to &quot;fpm 命令&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.3-fpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.3-fpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.3-fpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.3-fpm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看监听状态</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> netstat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -nlp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9000</span></span></code></pre></div><h2 id="安装-git-和-composer" tabindex="-1">安装 Git 和 composer <a class="header-anchor" href="#安装-git-和-composer" aria-label="Permalink to &quot;安装 Git 和 composer&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> composer</span></span></code></pre></div><h2 id="安装配置-nginx" tabindex="-1">安装配置 nginx <a class="header-anchor" href="#安装配置-nginx" aria-label="Permalink to &quot;安装配置 nginx&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><div class="language-conf vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>; /etc/nginx/conf.d/demo.test.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    listen [::]:80;</span></span>
<span class="line"><span>    server_name demo.test;</span></span>
<span class="line"><span>    root /var/www/demo.test/public;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    add_header X-Frame-Options &quot;SAMEORIGIN&quot;;</span></span>
<span class="line"><span>    add_header X-Content-Type-Options &quot;nosniff&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    index index.php;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    charset utf-8;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        try_files $uri $uri/ /index.php?$query_string;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location = /favicon.ico { access_log off; log_not_found off; }</span></span>
<span class="line"><span>    location = /robots.txt  { access_log off; log_not_found off; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    error_page 404 /index.php;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location ~ \\.php$ {</span></span>
<span class="line"><span>        fastcgi_pass unix:/run/php/php8.3-fpm.sock;</span></span>
<span class="line"><span>        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;</span></span>
<span class="line"><span>        include fastcgi_params;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location ~ /\\.(?!well-known).* {</span></span>
<span class="line"><span>        deny all;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    error_log /var/log/nginx/demo.test.error.log;</span></span>
<span class="line"><span>    access_log /var/log/nginx/demo.test.access.log;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h2><blockquote><p>执行 <code>composer install</code> 提示安装PHP扩展时，根据提示安装对应扩展，命令为 <code>apt-get install php8.3-gd</code></p></blockquote>`,15),l=[t];function e(h,k,o,d,r,c){return n(),a("div",null,l)}const u=s(p,[["render",e]]);export{g as __pageData,u as default};
