import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.aaef0e9b.js";const m=JSON.parse('{"title":"laradock 配置 PHP 多版本","description":"","frontmatter":{},"headers":[],"relativePath":"server/docker/Laradock/Laradock配置PHP多版本.md","lastUpdated":1680584985000}'),e={name:"server/docker/Laradock/Laradock配置PHP多版本.md"},l=p(`<h1 id="laradock-配置-php-多版本" tabindex="-1">laradock 配置 PHP 多版本 <a class="header-anchor" href="#laradock-配置-php-多版本" aria-label="Permalink to &quot;laradock 配置 PHP 多版本&quot;">​</a></h1><p>在 laradock 目录下执行</p><h2 id="复制-php-fpm-目录" tabindex="-1">复制 php-fpm 目录 <a class="header-anchor" href="#复制-php-fpm-目录" aria-label="Permalink to &quot;复制 php-fpm 目录&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">cp -r php-fpm php-fpm-74</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="docker-compose-yml-文件配置" tabindex="-1">docker-compose.yml 文件配置 <a class="header-anchor" href="#docker-compose-yml-文件配置" aria-label="Permalink to &quot;docker-compose.yml 文件配置&quot;">​</a></h2><p>/docker-compose.yml</p><ul><li>添加 php-fpm-74 配置项</li></ul><p>复制 php-fpm 配置项，并修改</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">### PHP-FPM-74 ##############################################</span></span>
<span class="line"><span style="color:#babed8;">    # 容器名称</span></span>
<span class="line"><span style="color:#babed8;">    php-fpm-74:</span></span>
<span class="line"><span style="color:#babed8;">      build:</span></span>
<span class="line"><span style="color:#babed8;">        # 指向构建的文件夹 </span></span>
<span class="line"><span style="color:#babed8;">        context: ./php-fpm-74</span></span>
<span class="line"><span style="color:#babed8;">        args:</span></span>
<span class="line"><span style="color:#babed8;">          # 修改为指定的 PHP 版本</span></span>
<span class="line"><span style="color:#babed8;">          - LARADOCK_PHP_VERSION=7.4</span></span>
<span class="line"><span style="color:#babed8;">          # 其他项...</span></span>
<span class="line"><span style="color:#babed8;">      volumes:</span></span>
<span class="line"><span style="color:#babed8;">        - ./php-fpm-74/php\${PHP_VERSION}.ini:/usr/local/etc/php/php.ini</span></span>
<span class="line"><span style="color:#babed8;">        # 其他项...</span></span>
<span class="line"><span style="color:#babed8;">      ports:</span></span>
<span class="line"><span style="color:#babed8;">        - &quot;9001&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>nginx 添加 php-fpm-74 链接</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">### NGINX Server #########################################</span></span>
<span class="line"><span style="color:#babed8;">    nginx:</span></span>
<span class="line"><span style="color:#babed8;">      links:</span></span>
<span class="line"><span style="color:#babed8;">        # 增加 links，后面在配置 nginx 的站点配置文件中 fastcgi_pass 时用</span></span>
<span class="line"><span style="color:#babed8;">        - php-fpm-74</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="nginx-sites-laravel-test" tabindex="-1">/nginx/sites/laravel.test <a class="header-anchor" href="#nginx-sites-laravel-test" aria-label="Permalink to &quot;/nginx/sites/laravel.test&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">server {</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    # ...</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#babed8;">        try_files $uri /index.php =404;</span></span>
<span class="line"><span style="color:#babed8;">        fastcgi_pass php-fpm-74:9000;    (php-fpm-74:上面新增的php版本)</span></span>
<span class="line"><span style="color:#babed8;">        fastcgi_index index.php;</span></span>
<span class="line"><span style="color:#babed8;">        fastcgi_buffers 16 16k;</span></span>
<span class="line"><span style="color:#babed8;">        fastcgi_buffer_size 32k;</span></span>
<span class="line"><span style="color:#babed8;">        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#babed8;">        #fixes timeouts</span></span>
<span class="line"><span style="color:#babed8;">        fastcgi_read_timeout 600;</span></span>
<span class="line"><span style="color:#babed8;">        include fastcgi_params;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">    # ...</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,13),o=[l];function c(t,i,r,d,b,h){return a(),n("div",null,o)}const _=s(e,[["render",c]]);export{m as __pageData,_ as default};
