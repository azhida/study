import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.92222dd1.js";const y=JSON.parse('{"title":"laradock 配置 PHP 多版本","description":"","frontmatter":{},"headers":[],"relativePath":"server/Docker/Laradock/Laradock配置PHP多版本.md","lastUpdated":null}'),l={name:"server/Docker/Laradock/Laradock配置PHP多版本.md"},e=p(`<h1 id="laradock-配置-php-多版本" tabindex="-1">laradock 配置 PHP 多版本 <a class="header-anchor" href="#laradock-配置-php-多版本" aria-label="Permalink to &quot;laradock 配置 PHP 多版本&quot;">​</a></h1><p>在 laradock 目录下执行</p><h2 id="复制-php-fpm-目录" tabindex="-1">复制 php-fpm 目录 <a class="header-anchor" href="#复制-php-fpm-目录" aria-label="Permalink to &quot;复制 php-fpm 目录&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cp -r php-fpm php-fpm-74</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="docker-compose-yml-文件配置" tabindex="-1">docker-compose.yml 文件配置 <a class="header-anchor" href="#docker-compose-yml-文件配置" aria-label="Permalink to &quot;docker-compose.yml 文件配置&quot;">​</a></h2><p>/docker-compose.yml</p><ul><li>添加 php-fpm-74 配置项</li></ul><p>复制 php-fpm 配置项，并修改</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">### PHP-FPM-74 ##############################################</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 容器名称</span></span>
<span class="line"><span style="color:#A6ACCD;">    php-fpm-74:</span></span>
<span class="line"><span style="color:#A6ACCD;">      build:</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 指向构建的文件夹 </span></span>
<span class="line"><span style="color:#A6ACCD;">        context: ./php-fpm-74</span></span>
<span class="line"><span style="color:#A6ACCD;">        args:</span></span>
<span class="line"><span style="color:#A6ACCD;">          # 修改为指定的 PHP 版本</span></span>
<span class="line"><span style="color:#A6ACCD;">          - LARADOCK_PHP_VERSION=7.4</span></span>
<span class="line"><span style="color:#A6ACCD;">          # 其他项...</span></span>
<span class="line"><span style="color:#A6ACCD;">      volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;">        - ./php-fpm-74/php\${PHP_VERSION}.ini:/usr/local/etc/php/php.ini</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 其他项...</span></span>
<span class="line"><span style="color:#A6ACCD;">      ports:</span></span>
<span class="line"><span style="color:#A6ACCD;">        - &quot;9001&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>nginx 添加 php-fpm-74 链接</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">### NGINX Server #########################################</span></span>
<span class="line"><span style="color:#A6ACCD;">    nginx:</span></span>
<span class="line"><span style="color:#A6ACCD;">      links:</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 增加 links，后面在配置 nginx 的站点配置文件中 fastcgi_pass 时用</span></span>
<span class="line"><span style="color:#A6ACCD;">        - php-fpm-74</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="nginx-sites-laravel-test" tabindex="-1">/nginx/sites/laravel.test <a class="header-anchor" href="#nginx-sites-laravel-test" aria-label="Permalink to &quot;/nginx/sites/laravel.test&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try_files $uri /index.php =404;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_pass php-fpm-74:9000;    (php-fpm-74:上面新增的php版本)</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_index index.php;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_buffers 16 16k;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_buffer_size 32k;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#A6ACCD;">        #fixes timeouts</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_read_timeout 600;</span></span>
<span class="line"><span style="color:#A6ACCD;">        include fastcgi_params;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    # ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,13),o=[e];function c(t,i,r,C,A,d){return a(),n("div",null,o)}const m=s(l,[["render",c]]);export{y as __pageData,m as default};
