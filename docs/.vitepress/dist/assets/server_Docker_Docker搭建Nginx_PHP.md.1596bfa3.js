import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.92222dd1.js";const g=JSON.parse('{"title":"Docker 构建 Nginx + PHP 服务容器","description":"","frontmatter":{},"headers":[],"relativePath":"server/Docker/Docker搭建Nginx+PHP.md","lastUpdated":null}'),l={name:"server/Docker/Docker搭建Nginx+PHP.md"},e=p(`<h1 id="docker-构建-nginx-php-服务容器" tabindex="-1">Docker 构建 Nginx + PHP 服务容器 <a class="header-anchor" href="#docker-构建-nginx-php-服务容器" aria-label="Permalink to &quot;Docker 构建 Nginx + PHP 服务容器&quot;">​</a></h1><blockquote><p>注：以下操作是在 windows 的子系统 ubuntu20.04 环境中进行</p></blockquote><h2 id="安装-docker" tabindex="-1">安装 docker <a class="header-anchor" href="#安装-docker" aria-label="Permalink to &quot;安装 docker&quot;">​</a></h2><p>安装 <a href="./安装Docker.html">看这里</a> 。</p><h2 id="创建-容器-php" tabindex="-1">创建 容器 php <a class="header-anchor" href="#创建-容器-php" aria-label="Permalink to &quot;创建 容器 php&quot;">​</a></h2><p>先看有没有 php7.4 和 php8 两个容器</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo docker ps -a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>没有则创建，有了就跳过。</p><ul><li>创建 <a href="./Docker安装PHP7.4.html">php7.4</a></li><li>创建 <a href="./Docker安装PHP8.html">php8</a></li></ul><h2 id="创建普通-php-站点-容器名称-nginx-php8-test" tabindex="-1">创建普通 PHP 站点：容器名称 nginx-php8-test <a class="header-anchor" href="#创建普通-php-站点-容器名称-nginx-php8-test" aria-label="Permalink to &quot;创建普通 PHP 站点：容器名称 nginx-php8-test&quot;">​</a></h2><ul><li>拉取官方最新nginx镜像</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo docker pull nginx:latest</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>创建本地站点 nginx-php8-test 的配置管理目录</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo mkdir -p /mydockerdata/nginx-php8-test/{log,conf.d}/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>注： <code>nginx-php8-test</code> 的代码路径 <code>/var/www/test/</code></p></blockquote><p>新建 <code>phpinfo.php</code> 文件，<code>.php</code> 文件要放到 <code>/var/www/</code> 目录下才可以被解析，因为 容器 php8 挂载的目录是 <code>/var/www/</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo mkdir -p /var/www/test/</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo vim /var/www/test/phpinfo.php</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>写入内容</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;?php</span></span>
<span class="line"><span style="color:#A6ACCD;">phpinfo();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>编辑 nginx-php8-test 的站点默认配置文件</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo vim /mydockerdata/nginx-php8-test/conf.d/default.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>内容</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen       80;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name  localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">        root   /var/www/test/;</span></span>
<span class="line"><span style="color:#A6ACCD;">        index  index.html index.htm index.php;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_pass   php:9000;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_param  SCRIPT_FILENAME  /var/www/test$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#A6ACCD;">        include        fastcgi_params;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>查看当前 docker 容器列表</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo docker ps -a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>创建容器 nginx-php8-test 并启动</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># docker run 创建容器</span></span>
<span class="line"><span style="color:#A6ACCD;"># -d # 后台运行</span></span>
<span class="line"><span style="color:#A6ACCD;"># -p 8080:80 # 映射端口本机8080到容器80</span></span>
<span class="line"><span style="color:#A6ACCD;"># --name nginx-php8-test # docker 容器的名字 nginx-php8-test</span></span>
<span class="line"><span style="color:#A6ACCD;"># -v /etc/localtime:/etc/localtime:ro 容器时间与宿主机时间一致</span></span>
<span class="line"><span style="color:#A6ACCD;"># -v /mydockerdata/nginx-php8-test/log/:/var/log/nginx # 映射log文件目录</span></span>
<span class="line"><span style="color:#A6ACCD;"># -v /mydockerdata/nginx-php8-test/conf.d/:/etc/nginx/conf.d # 映射配置文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;"># -v /var/www/:/var/www # 映射网页存放目录【网页代码】</span></span>
<span class="line"><span style="color:#A6ACCD;">// --link php8:php: 把 php8 的网络并入 nginx，并通过修改 nginx 的 /etc/hosts，把域名 php 映射成 127.0.0.1，让 nginx 通过 php:9000 访问 php-fpm。</span></span>
<span class="line"><span style="color:#A6ACCD;"># nginx # 镜像</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sudo docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 8080:80 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name nginx-php8-test \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /etc/localtime:/etc/localtime:ro \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /mydockerdata/nginx-php8-test/log/:/var/log/nginx \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /mydockerdata/nginx-php8-test/conf.d/:/etc/nginx/conf.d:ro \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /var/www/:/var/www \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--link php8:php \\</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>访问 <code>http://ip:8080</code> 站点内容 <ul><li>访问 <a href="http://ip:8080/phpinfo.php" target="_blank" rel="noreferrer">http://ip:8080/phpinfo.php</a> 就可以看到网页内容了</li><li>访问 <a href="http://ip:8080/a.txt" target="_blank" rel="noreferrer">http://ip:8080/a.txtp</a> 就可以看到网页内容了</li></ul></li></ul><blockquote><p>注意：8080 端口号需要开放外部访问权限，否则访问失败</p></blockquote><h2 id="配置-nginx-反向代理支持-域名访问" tabindex="-1">配置 nginx 反向代理支持 域名访问 <a class="header-anchor" href="#配置-nginx-反向代理支持-域名访问" aria-label="Permalink to &quot;配置 nginx 反向代理支持 域名访问&quot;">​</a></h2><p>看这里： <a href="./Docker搭建Nginx反向代理服务器.html">Docker搭建Nginx反向代理服务器</a></p>`,31),o=[e];function t(c,i,r,d,h,C){return n(),a("div",null,o)}const u=s(l,[["render",t]]);export{g as __pageData,u as default};
