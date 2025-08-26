import{_ as a,c as s,o as n,a5 as p}from"./chunks/framework.CJNr4pYi.js";const u=JSON.parse('{"title":"laradock 配置 PHP 多版本","description":"","frontmatter":{},"headers":[],"relativePath":"docker/Laradock/Laradock配置PHP多版本.md","filePath":"docker/Laradock/Laradock配置PHP多版本.md","lastUpdated":1722327281000}'),e={name:"docker/Laradock/Laradock配置PHP多版本.md"},l=p(`<h1 id="laradock-配置-php-多版本" tabindex="-1">laradock 配置 PHP 多版本 <a class="header-anchor" href="#laradock-配置-php-多版本" aria-label="Permalink to &quot;laradock 配置 PHP 多版本&quot;">​</a></h1><p>在 laradock 目录下执行</p><h2 id="复制-php-fpm-目录" tabindex="-1">复制 php-fpm 目录 <a class="header-anchor" href="#复制-php-fpm-目录" aria-label="Permalink to &quot;复制 php-fpm 目录&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cp -r php-fpm php-fpm-74</span></span></code></pre></div><h2 id="docker-compose-yml-文件配置" tabindex="-1">docker-compose.yml 文件配置 <a class="header-anchor" href="#docker-compose-yml-文件配置" aria-label="Permalink to &quot;docker-compose.yml 文件配置&quot;">​</a></h2><p>/docker-compose.yml</p><ul><li>添加 php-fpm-74 配置项</li></ul><p>复制 php-fpm 配置项，并修改</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>### PHP-FPM-74 ##############################################</span></span>
<span class="line"><span>    # 容器名称</span></span>
<span class="line"><span>    php-fpm-74:</span></span>
<span class="line"><span>      build:</span></span>
<span class="line"><span>        # 指向构建的文件夹 </span></span>
<span class="line"><span>        context: ./php-fpm-74</span></span>
<span class="line"><span>        args:</span></span>
<span class="line"><span>          # 修改为指定的 PHP 版本</span></span>
<span class="line"><span>          - LARADOCK_PHP_VERSION=7.4</span></span>
<span class="line"><span>          # 其他项...</span></span>
<span class="line"><span>      volumes:</span></span>
<span class="line"><span>        - ./php-fpm-74/php\${PHP_VERSION}.ini:/usr/local/etc/php/php.ini</span></span>
<span class="line"><span>        # 其他项...</span></span>
<span class="line"><span>      ports:</span></span>
<span class="line"><span>        - &quot;9001&quot;</span></span></code></pre></div><ul><li>nginx 添加 php-fpm-74 链接</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>### NGINX Server #########################################</span></span>
<span class="line"><span>    nginx:</span></span>
<span class="line"><span>      links:</span></span>
<span class="line"><span>        # 增加 links，后面在配置 nginx 的站点配置文件中 fastcgi_pass 时用</span></span>
<span class="line"><span>        - php-fpm-74</span></span></code></pre></div><h2 id="nginx-sites-laravel-test" tabindex="-1">/nginx/sites/laravel.test <a class="header-anchor" href="#nginx-sites-laravel-test" aria-label="Permalink to &quot;/nginx/sites/laravel.test&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location ~ \\.php$ {</span></span>
<span class="line"><span>        try_files $uri /index.php =404;</span></span>
<span class="line"><span>        fastcgi_pass php-fpm-74:9000;    (php-fpm-74:上面新增的php版本)</span></span>
<span class="line"><span>        fastcgi_index index.php;</span></span>
<span class="line"><span>        fastcgi_buffers 16 16k;</span></span>
<span class="line"><span>        fastcgi_buffer_size 32k;</span></span>
<span class="line"><span>        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;</span></span>
<span class="line"><span>        #fixes timeouts</span></span>
<span class="line"><span>        fastcgi_read_timeout 600;</span></span>
<span class="line"><span>        include fastcgi_params;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # ...</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,13),i=[l];function c(t,o,r,d,h,m){return n(),s("div",null,i)}const k=a(e,[["render",c]]);export{u as __pageData,k as default};
