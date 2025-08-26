import{_ as a,c as s,o as n,a5 as p}from"./chunks/framework.CJNr4pYi.js";const g=JSON.parse('{"title":"Laradock 安装 LaravelS","description":"","frontmatter":{},"headers":[],"relativePath":"docker/Laradock/Laradock安装laravelS.md","filePath":"docker/Laradock/Laradock安装laravelS.md","lastUpdated":1722327281000}'),e={name:"docker/Laradock/Laradock安装laravelS.md"},l=p(`<h1 id="laradock-安装-laravels" tabindex="-1">Laradock 安装 LaravelS <a class="header-anchor" href="#laradock-安装-laravels" aria-label="Permalink to &quot;Laradock 安装 LaravelS&quot;">​</a></h1><h2 id="安装-swoole-扩展" tabindex="-1">安装 Swoole 扩展 <a class="header-anchor" href="#安装-swoole-扩展" aria-label="Permalink to &quot;安装 Swoole 扩展&quot;">​</a></h2><p>laradock/.env</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>WORKSPACE_INSTALL_SWOOLE=true</span></span></code></pre></div><p>重新创建并启动容器 workspace</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker-compose up -d --build --force-recreate workspace</span></span></code></pre></div><h2 id="进入项目根目录安装-laravels-扩展包" tabindex="-1">进入项目根目录安装 laravelS 扩展包 <a class="header-anchor" href="#进入项目根目录安装-laravels-扩展包" aria-label="Permalink to &quot;进入项目根目录安装 laravelS 扩展包&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker-compose exec workspace bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd /var/www/laravel</span></span>
<span class="line"><span></span></span>
<span class="line"><span>composer require &quot;hhxsv5/laravel-s:~3.4.0&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 发布配置</span></span>
<span class="line"><span>php artisan laravels publish</span></span></code></pre></div><p>项目根目录下</p><p>.env</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>LARAVELS_LISTEN_IP=workspace</span></span></code></pre></div><p>启动 laravelS</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>php bin/laravels start -d</span></span></code></pre></div><h2 id="配置-nginx" tabindex="-1">配置 nginx <a class="header-anchor" href="#配置-nginx" aria-label="Permalink to &quot;配置 nginx&quot;">​</a></h2><p>/laradock/nginx/sites/package.conf</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#gzip on;</span></span>
<span class="line"><span>gzip_min_length 1024;</span></span>
<span class="line"><span>gzip_comp_level 2;</span></span>
<span class="line"><span>gzip_types text/plain text/css text/javascript application/json application/javascript application/x-javascript application/xml application/x-httpd-php image/jpeg image/gif image/png font/ttf font/otf image/svg+xml;</span></span>
<span class="line"><span>gzip_vary on;</span></span>
<span class="line"><span>gzip_disable &quot;msie6&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>upstream laravels {</span></span>
<span class="line"><span>    # 通过 IP:Port 连接</span></span>
<span class="line"><span>    server workspace:5200 weight=5 max_fails=3 fail_timeout=30s;</span></span>
<span class="line"><span>    # 通过 UnixSocket Stream 连接，小诀窍：将socket文件放在/dev/shm目录下，可获得更好的性能</span></span>
<span class="line"><span>    #server unix:/xxxpath/laravel-s-test/storage/laravels.sock weight=5 max_fails=3 fail_timeout=30s;</span></span>
<span class="line"><span>    #server 192.168.1.1:5200 weight=3 max_fails=3 fail_timeout=30s;</span></span>
<span class="line"><span>    #server 192.168.1.2:5200 backup;</span></span>
<span class="line"><span>    keepalive 16;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    listen [::]:80;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # For https</span></span>
<span class="line"><span>    # listen 443 ssl;</span></span>
<span class="line"><span>    # listen [::]:443 ssl ipv6only=on;</span></span>
<span class="line"><span>    # ssl_certificate /etc/nginx/ssl/default.crt;</span></span>
<span class="line"><span>    # ssl_certificate_key /etc/nginx/ssl/default.key;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server_name laravel.test;</span></span>
<span class="line"><span>    root /var/www/laravel/public;</span></span>
<span class="line"><span>    index index.php index.html index.htm;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    autoindex off;</span></span>
<span class="line"><span>    index index.html index.htm;</span></span>
<span class="line"><span>    # Nginx处理静态资源(建议开启gzip)，LaravelS处理动态资源。</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        try_files $uri @laravels;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location @laravels {</span></span>
<span class="line"><span>        # proxy_connect_timeout 60s;</span></span>
<span class="line"><span>        # proxy_send_timeout 60s;</span></span>
<span class="line"><span>        # proxy_read_timeout 120s;</span></span>
<span class="line"><span>        proxy_http_version 1.1;</span></span>
<span class="line"><span>        proxy_set_header Connection &quot;&quot;;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Real-PORT $remote_port;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header Host $http_host;</span></span>
<span class="line"><span>        proxy_set_header Scheme $scheme;</span></span>
<span class="line"><span>        proxy_set_header Server-Protocol $server_protocol;</span></span>
<span class="line"><span>        proxy_set_header Server-Name $server_name;</span></span>
<span class="line"><span>        proxy_set_header Server-Addr $server_addr;</span></span>
<span class="line"><span>        proxy_set_header Server-Port $server_port;</span></span>
<span class="line"><span>        proxy_pass http://laravels;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /.well-known/acme-challenge/ {</span></span>
<span class="line"><span>        root /var/www/letsencrypt/;</span></span>
<span class="line"><span>        log_not_found off;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    error_log /var/log/nginx/package_error.log;</span></span>
<span class="line"><span>    access_log /var/log/nginx/package_access.log;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>重启 nginx 容器</li></ul><p>laradock 目录下执行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker-compose restart nginx</span></span></code></pre></div><h2 id="未完待续" tabindex="-1">未完待续 <a class="header-anchor" href="#未完待续" aria-label="Permalink to &quot;未完待续&quot;">​</a></h2><p>...</p>`,21),i=[l];function t(c,o,r,d,h,_){return n(),s("div",null,i)}const u=a(e,[["render",t]]);export{g as __pageData,u as default};
