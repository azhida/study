import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const y=JSON.parse('{"title":"Docker 安装 PHP8","description":"","frontmatter":{},"headers":[],"relativePath":"server/docker/Docker安装PHP8.md","lastUpdated":1680584985000}'),p={name:"server/docker/Docker安装PHP8.md"},l=e(`<h1 id="docker-安装-php8" tabindex="-1">Docker 安装 PHP8 <a class="header-anchor" href="#docker-安装-php8" aria-label="Permalink to &quot;Docker 安装 PHP8&quot;">​</a></h1><blockquote><p>注：以下操作是在 windows 的子系统 ubuntu20.04 环境中进行</p></blockquote><h2 id="安装-docker" tabindex="-1">安装 docker <a class="header-anchor" href="#安装-docker" aria-label="Permalink to &quot;安装 docker&quot;">​</a></h2><p>安装 <a href="./安装Docker.html">看这里</a> 。</p><h2 id="创建-php8-容器" tabindex="-1">创建 php8 容器 <a class="header-anchor" href="#创建-php8-容器" aria-label="Permalink to &quot;创建 php8 容器&quot;">​</a></h2><ul><li>拉取官方php8.0镜像</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo docker pull php:8.0-fpm</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>创建容器 php8</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># --name php8 将 php 的容器命名为 php8</span></span>
<span class="line"><span style="color:#babed8;"># -v /etc/localtime:/etc/localtime:ro 容器时间与宿主机时间保持一致</span></span>
<span class="line"><span style="color:#babed8;"># /var/www/:/var/www 本地 /var/www/ 目录映射至容器 /var/www 目录</span></span>
<span class="line"><span style="color:#babed8;"># -d 后台运行</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker run -d \\</span></span>
<span class="line"><span style="color:#babed8;">--name php8 \\</span></span>
<span class="line"><span style="color:#babed8;">-v /etc/localtime:/etc/localtime:ro \\</span></span>
<span class="line"><span style="color:#babed8;">-v /var/www/:/var/www \\</span></span>
<span class="line"><span style="color:#babed8;">php:8.0-fpm</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><blockquote><p>注意：<br><code>/var/www</code> 这个目录，在 nginx 站点配置 php解析 的时候，路径要与 这个目录一直，否则可能无法解析。<br><code>fastcgi_param SCRIPT_FILENAME /var/www$fastcgi_script_name;</code> 里边的 <code>/var/www</code> 就是 php-fpm 挂载的路径。</p></blockquote><h3 id="在容器-php8-内-安装-php扩展" tabindex="-1">在容器 php8 内 安装 php扩展 <a class="header-anchor" href="#在容器-php8-内-安装-php扩展" aria-label="Permalink to &quot;在容器 php8 内 安装 php扩展&quot;">​</a></h3><blockquote><p>注意：所有的 PHP扩展 都需要 登录 到 php8 容器内安装操作</p></blockquote><ul><li>登录 php8 容器</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo docker exec -it php8 bash</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>切换 apt 源，解决 apt update 慢的问题</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">mv /etc/apt/sources.list /etc/apt/sources.list.bak</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cat &lt;&lt;EOF &gt;/etc/apt/sources.list</span></span>
<span class="line"><span style="color:#babed8;">deb http://mirrors.ustc.edu.cn/debian stable main contrib non-free</span></span>
<span class="line"><span style="color:#babed8;">deb http://mirrors.ustc.edu.cn/debian stable-updates main contrib non-free</span></span>
<span class="line"><span style="color:#babed8;">EOF</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 或者</span></span>
<span class="line"><span style="color:#babed8;">echo &#39;deb http://mirrors.ustc.edu.cn/debian stable main contrib non-free&#39; &gt; /etc/apt/sources.list</span></span>
<span class="line"><span style="color:#babed8;">echo &#39;deb http://mirrors.ustc.edu.cn/debian stable-updates main contrib non-free&#39; &gt;&gt; /etc/apt/sources.list</span></span>
<span class="line"><span style="color:#babed8;"># &gt; 覆盖写入，会覆盖之前的内容</span></span>
<span class="line"><span style="color:#babed8;"># &gt;&gt; 追加写入，不会覆盖之前的内容</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>安装常规扩展</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 创建 /usr/src/php/ 并解压</span></span>
<span class="line"><span style="color:#babed8;">docker-php-source extract</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 安装 php 扩展，注：laravel连接mysql时用到 pdo_mysql 和 mysqli ，pcntl 等</span></span>
<span class="line"><span style="color:#babed8;">docker-php-ext-install bcmath pdo_mysql pcntl sockets</span></span>
<span class="line"><span style="color:#babed8;"># 查看 bcmath 扩展是否安装成功，安装成功 会出现 bcmath</span></span>
<span class="line"><span style="color:#babed8;">php -m | grep bcmath</span></span>
<span class="line"><span style="color:#babed8;">php -m</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>安装 redis 扩展</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 下载 redis 扩展</span></span>
<span class="line"><span style="color:#babed8;">curl -L -o /tmp/redis.tar.gz https://pecl.php.net/get/redis-5.3.7.tgz</span></span>
<span class="line"><span style="color:#babed8;"># 解压</span></span>
<span class="line"><span style="color:#babed8;">tar -xzf /tmp/redis.tar.gz</span></span>
<span class="line"><span style="color:#babed8;">rm -r /tmp/redis.tar.gz</span></span>
<span class="line"><span style="color:#babed8;">mkdir -p /usr/src/php/ext</span></span>
<span class="line"><span style="color:#babed8;">mv redis-5.3.7 /usr/src/php/ext/redis</span></span>
<span class="line"><span style="color:#babed8;"># 安装 redis 扩展并启动</span></span>
<span class="line"><span style="color:#babed8;">docker-php-ext-install redis</span></span>
<span class="line"><span style="color:#babed8;">php -m | grep redis</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>安装 gd 扩展</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 更新软件源</span></span>
<span class="line"><span style="color:#babed8;">apt update</span></span>
<span class="line"><span style="color:#babed8;"># 安装各种库</span></span>
<span class="line"><span style="color:#babed8;">apt install -y libwebp-dev libjpeg-dev libpng-dev libfreetype6-dev</span></span>
<span class="line"><span style="color:#babed8;"># 解压源码</span></span>
<span class="line"><span style="color:#babed8;">docker-php-source extract</span></span>
<span class="line"><span style="color:#babed8;"># gd源码文件夹</span></span>
<span class="line"><span style="color:#babed8;">cd /usr/src/php/ext/gd</span></span>
<span class="line"><span style="color:#babed8;"># 准备编译</span></span>
<span class="line"><span style="color:#babed8;">docker-php-ext-configure gd \\</span></span>
<span class="line"><span style="color:#babed8;">--with-webp=/usr/include/webp \\</span></span>
<span class="line"><span style="color:#babed8;">--with-jpeg=/usr/include \\</span></span>
<span class="line"><span style="color:#babed8;">--with-freetype=/usr/include/freetype2</span></span>
<span class="line"><span style="color:#babed8;"># 编译安装</span></span>
<span class="line"><span style="color:#babed8;">docker-php-ext-install gd</span></span>
<span class="line"><span style="color:#babed8;">php -m | grep gd</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>安装 composer 和 zip、unzip</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 更新软件源</span></span>
<span class="line"><span style="color:#babed8;">cd</span></span>
<span class="line"><span style="color:#babed8;">apt update</span></span>
<span class="line"><span style="color:#babed8;"># 下载安装 composer</span></span>
<span class="line"><span style="color:#babed8;">curl -sS https://getcomposer.org/installer | php</span></span>
<span class="line"><span style="color:#babed8;">mv composer.phar /usr/local/bin/composer</span></span>
<span class="line"><span style="color:#babed8;"># 配置 全局镜像地址【可选操作】</span></span>
<span class="line"><span style="color:#babed8;">composer config -g repo.packagist composer https://packagist.phpcomposer.com</span></span>
<span class="line"><span style="color:#babed8;">composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 安装 zip、unzip , composer install 时需要用到 zip 和 unzip</span></span>
<span class="line"><span style="color:#babed8;">apt-get install -y zip unzip</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><blockquote><p>参考：<a href="https://gitee.com/link?target=https%3A%2F%2Fpkg.phpcomposer.com%2F%23how-to-install-composer" target="_blank" rel="noreferrer">安装 composer</a></p></blockquote><ul><li>安装 swoole 扩展</li></ul><p><a href="https://wiki.swoole.com/#/environment" target="_blank" rel="noreferrer">官方文档</a><br><a href="https://wiki.swoole.com/#/question/install" target="_blank" rel="noreferrer">常见问题</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># fatal error: &#39;openssl/ssl.h&#39; file not found</span></span>
<span class="line"><span style="color:#babed8;"># 安装 openssl 库</span></span>
<span class="line"><span style="color:#babed8;">apt-get install openssl</span></span>
<span class="line"><span style="color:#babed8;">apt-get install libssl-dev</span></span>
<span class="line"><span style="color:#babed8;">whereis openssl</span></span>
<span class="line"><span style="color:#babed8;"># 拿到 openssl 库的安装位置： /usr/include/openssl</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># fatal error: curl/curl.h: No such file or directory</span></span>
<span class="line"><span style="color:#babed8;">apt-get install libcurl4-openssl-dev</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 解决了问题，然后 安装 swoole 扩展</span></span>
<span class="line"><span style="color:#babed8;">pecl install -D &#39;enable-sockets=&quot;no&quot; enable-openssl=&quot;yes --with-openssl-dir=/usr/include/openssl/&quot; enable-http2=&quot;yes&quot; enable-mysqlnd=&quot;yes&quot; enable-swoole-json=&quot;no&quot; enable-swoole-curl=&quot;yes&quot; enable-cares=&quot;yes&quot;&#39; swoole</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>php.ini 开启 swoole 扩展</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">cp /usr/local/etc/php/php.ini-production /usr/local/etc/php/php.ini</span></span>
<span class="line"><span style="color:#babed8;">vim /usr/local/etc/php/php.ini</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>内容</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 大概在 line：950</span></span>
<span class="line"><span style="color:#babed8;">extension=swoole.so</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>退出 php8 容器</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">exit</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>重启 php8 容器</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo docker restart php8</span></span>
<span class="line"><span style="color:#babed8;">sudo docker ps -a</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,36),o=[l];function c(t,r,i,b,d,u){return a(),n("div",null,o)}const m=s(p,[["render",c]]);export{y as __pageData,m as default};
