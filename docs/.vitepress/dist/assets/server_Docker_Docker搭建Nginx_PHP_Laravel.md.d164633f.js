import{_ as a,o as s,c as n,Q as l}from"./chunks/framework.92222dd1.js";const y=JSON.parse('{"title":"Docker 构建 Nginx + PHP + Laravel 服务容器","description":"","frontmatter":{},"headers":[],"relativePath":"server/Docker/Docker搭建Nginx+PHP+Laravel.md","lastUpdated":null}'),p={name:"server/Docker/Docker搭建Nginx+PHP+Laravel.md"},e=l(`<h1 id="docker-构建-nginx-php-laravel-服务容器" tabindex="-1">Docker 构建 Nginx + PHP + Laravel 服务容器 <a class="header-anchor" href="#docker-构建-nginx-php-laravel-服务容器" aria-label="Permalink to &quot;Docker 构建 Nginx + PHP + Laravel 服务容器&quot;">​</a></h1><blockquote><p>注：以下操作是在 windows 的子系统 ubuntu20.04 环境中进行</p></blockquote><h2 id="安装-docker" tabindex="-1">安装 docker <a class="header-anchor" href="#安装-docker" aria-label="Permalink to &quot;安装 docker&quot;">​</a></h2><p>安装 <a href="./安装Docker.html">看这里</a> 。</p><h2 id="创建-容器-php" tabindex="-1">创建 容器 php <a class="header-anchor" href="#创建-容器-php" aria-label="Permalink to &quot;创建 容器 php&quot;">​</a></h2><p>先看有没有 php7.4 和 php8 两个容器</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo docker ps -a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>没有则创建，有了就跳过。</p><ul><li>创建 <a href="./Docker安装PHP7.4.html">php7.4</a></li><li>创建 <a href="./Docker安装PHP8.html">php8</a></li></ul><h2 id="创建-laravel9-站点-容器名称-nginx-php8-laravel9" tabindex="-1">创建 Laravel9 站点：容器名称 nginx-php8-laravel9 <a class="header-anchor" href="#创建-laravel9-站点-容器名称-nginx-php8-laravel9" aria-label="Permalink to &quot;创建 Laravel9 站点：容器名称 nginx-php8-laravel9&quot;">​</a></h2><blockquote><p>注： laravel9 的代码路径 <code>/var/www/laravel9/</code></p></blockquote><ul><li>创建本地站点 <code>nginx-php8-laravel9</code> 的配置管理目录</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo mkdir -p /mydockerdata/nginx-php8-laravel9/{log,conf.d}/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>编辑 <code>nginx-php8-laravel9</code> 的站点默认配置文件</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo vim /mydockerdata/nginx-php8-laravel9/conf.d/default.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>内容</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 80;</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen [::]:80;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name  localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;">    root   /var/www/laravel9/public;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header X-Frame-Options &quot;SAMEORIGIN&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header X-Content-Type-Options &quot;nosniff&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.php;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    charset utf-8;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try_files $uri $uri/ /index.php?$query_string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    location = /favicon.ico { access_log off; log_not_found off; }</span></span>
<span class="line"><span style="color:#A6ACCD;">    location = /robots.txt  { access_log off; log_not_found off; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    error_page 404 /index.php;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_pass   php:9000;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_param  SCRIPT_FILENAME  /var/www/laravel9/public$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#A6ACCD;">        include        fastcgi_params;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    location ~ /\\.(?!well-known).* {</span></span>
<span class="line"><span style="color:#A6ACCD;">        deny all;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>创建容器 nginx-php8-laravel9 并启动</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># docker run 创建容器</span></span>
<span class="line"><span style="color:#A6ACCD;"># -d # 后台运行</span></span>
<span class="line"><span style="color:#A6ACCD;"># -p 8081:80 # 映射端口本机8081到容器80</span></span>
<span class="line"><span style="color:#A6ACCD;"># --name nginx-php8-laravel9 # docker 容器名字 nginx-php8-laravel9</span></span>
<span class="line"><span style="color:#A6ACCD;"># -v /etc/localtime:/etc/localtime:ro 容器时间与宿主机时间一致</span></span>
<span class="line"><span style="color:#A6ACCD;"># -v /mydockerdata/nginx-php8-laravel9/log/:/var/log/nginx # 映射log文件目录</span></span>
<span class="line"><span style="color:#A6ACCD;"># -v /mydockerdata/nginx-php8-laravel9/conf.d/:/etc/nginx/conf.d # 映射配置文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;"># -v /var/www/:/var/www # 映射网页存放目录【网页代码】</span></span>
<span class="line"><span style="color:#A6ACCD;"># --link php8:php: 把 php8 的网络并入 nginx，并通过修改 nginx 的 /etc/hosts，把域名 php 映射成 127.0.0.1，让 nginx 通过 php:9000 访问 php-fpm。</span></span>
<span class="line"><span style="color:#A6ACCD;"># nginx # 镜像</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sudo docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 8081:80 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name nginx-php8-laravel9 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /etc/localtime:/etc/localtime:ro \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /mydockerdata/nginx-php8-laravel9/log/:/var/log/nginx \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /mydockerdata/nginx-php8-laravel9/conf.d/:/etc/nginx/conf.d:ro \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /var/www/:/var/www \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--link php8:php \\</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>下载 laravel9 代码</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 要进入容器 php8 ，因为 php8 里面安装了 composer 和 laravel9 所需要的其他环境，否则下载会报错</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo docker exec -it php8 bash</span></span>
<span class="line"><span style="color:#A6ACCD;">cd /var/www</span></span>
<span class="line"><span style="color:#A6ACCD;">composer create-project laravel/laravel laravel9</span></span>
<span class="line"><span style="color:#A6ACCD;">exit</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>访问 <a href="http://ip:8081" target="_blank" rel="noreferrer">http://ip:8081</a> ，就可以看到 laravel 首页了</li></ul><blockquote><p>注意：ip 对应的 8081 端口需要开放外部访问权限，否则访问失败<br> 至于 页面报错，就是 laravel 相关的配置了，具体去看 laravel 的文档</p></blockquote><h2 id="配置-nginx-反向代理支持-域名访问" tabindex="-1">配置 nginx 反向代理支持 域名访问 <a class="header-anchor" href="#配置-nginx-反向代理支持-域名访问" aria-label="Permalink to &quot;配置 nginx 反向代理支持 域名访问&quot;">​</a></h2><p>看这里： <a href="./Docker搭建Nginx反向代理服务器.html">Docker搭建Nginx反向代理服务器</a></p>`,25),o=[e];function c(r,t,i,C,A,d){return s(),n("div",null,o)}const g=a(p,[["render",c]]);export{y as __pageData,g as default};
