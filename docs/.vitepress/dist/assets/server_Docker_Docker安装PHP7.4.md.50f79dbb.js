import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.92222dd1.js";const u=JSON.parse('{"title":"Docker 构建 PHP7.4","description":"","frontmatter":{},"headers":[],"relativePath":"server/Docker/Docker安装PHP7.4.md","lastUpdated":null}'),l={name:"server/Docker/Docker安装PHP7.4.md"},e=p(`<h1 id="docker-构建-php7-4" tabindex="-1">Docker 构建 PHP7.4 <a class="header-anchor" href="#docker-构建-php7-4" aria-label="Permalink to &quot;Docker 构建 PHP7.4&quot;">​</a></h1><h2 id="创建-php7-4-容器" tabindex="-1">创建 php7.4 容器 <a class="header-anchor" href="#创建-php7-4-容器" aria-label="Permalink to &quot;创建 php7.4 容器&quot;">​</a></h2><ul><li>拉取官方php7.4镜像</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo docker pull php:7.4-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>创建容器 php7.4</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># --name php7.4 将 php 的容器命名为 php7.4</span></span>
<span class="line"><span style="color:#A6ACCD;"># -v /etc/localtime:/etc/localtime:ro 容器时间与宿主机时间一致</span></span>
<span class="line"><span style="color:#A6ACCD;"># /var/www/:/var/www 本地 /var/www/ 目录映射至容器 /var/www 目录</span></span>
<span class="line"><span style="color:#A6ACCD;"># -d 后台运行</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sudo docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 9001:9000 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name php7.4 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /etc/localtime:/etc/localtime:ro \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /var/www/:/var/www \\</span></span>
<span class="line"><span style="color:#A6ACCD;">php:7.4-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>注意：<br><code>/var/www</code> 这个目录，在 nginx 站点配置 php解析 的时候，路径要与 这个目录一直，否则可能无法解析。<br><code>fastcgi_param SCRIPT_FILENAME /var/www$fastcgi_script_name;</code> 里边的 <code>/var/www</code> 就是 php-fpm 挂载的路径。</p></blockquote><h3 id="在容器-php7-4-内-安装-php扩展" tabindex="-1">在容器 php7.4 内 安装 php扩展 <a class="header-anchor" href="#在容器-php7-4-内-安装-php扩展" aria-label="Permalink to &quot;在容器 php7.4 内 安装 php扩展&quot;">​</a></h3><blockquote><p>注意：所有的 PHP扩展 都需要 登录 到 php7.4 容器内安装操作</p></blockquote><ul><li>登录 php7.4 容器</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo docker exec -it php7.4 bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看 php 版本</span></span>
<span class="line"><span style="color:#A6ACCD;">php -v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>切换 apt 源，解决 apt update 慢的问题</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mv /etc/apt/sources.list /etc/apt/sources.list.bak</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">cat &lt;&lt;EOF &gt;/etc/apt/sources.list</span></span>
<span class="line"><span style="color:#A6ACCD;">deb http://mirrors.ustc.edu.cn/debian stable main contrib non-free</span></span>
<span class="line"><span style="color:#A6ACCD;">deb http://mirrors.ustc.edu.cn/debian stable-updates main contrib non-free</span></span>
<span class="line"><span style="color:#A6ACCD;">EOF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果提示 GPG 公钥错误，则执行以下命令</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">GPG error: http://mirrors.ustc.edu.cn/debian stable-updates InRelease: </span></span>
<span class="line"><span style="color:#A6ACCD;">The following signatures couldn&#39;t be verified because the public key is not available: NO_PUBKEY 648ACFD622F3D138 NO_PUBKEY 0E98404D386FA1D9</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 公钥直接从错误提示中取</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-key adv --recv-keys --keyserver keyserver.ubuntu.com 648ACFD622F3D138 </span></span>
<span class="line"><span style="color:#A6ACCD;">apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 648ACFD622F3D138 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>安装常规扩展</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 创建 /usr/src/php/ 并解压</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-php-source extract</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 安装 php 扩展，注：laravel连接mysql时用到 pdo_mysql 和 mysqli ，pcntl 等</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-php-ext-install bcmath pdo_mysql pcntl sockets</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看 bcmath 扩展是否安装成功，安装成功 会出现 bcmath</span></span>
<span class="line"><span style="color:#A6ACCD;">php -m | grep bcmath</span></span>
<span class="line"><span style="color:#A6ACCD;">php -m</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>安装 redis 扩展</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 下载 redis 扩展</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -L -o /tmp/redis.tar.gz https://pecl.php.net/get/redis-5.3.7.tgz</span></span>
<span class="line"><span style="color:#A6ACCD;"># 解压</span></span>
<span class="line"><span style="color:#A6ACCD;">tar -xzf /tmp/redis.tar.gz</span></span>
<span class="line"><span style="color:#A6ACCD;">rm -r /tmp/redis.tar.gz</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir -p /usr/src/php/ext</span></span>
<span class="line"><span style="color:#A6ACCD;">mv redis-5.3.7 /usr/src/php/ext/redis</span></span>
<span class="line"><span style="color:#A6ACCD;"># 安装 redis 扩展并启动</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-php-ext-install redis</span></span>
<span class="line"><span style="color:#A6ACCD;">php -m | grep redis</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>安装 gd 扩展</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 更新软件源</span></span>
<span class="line"><span style="color:#A6ACCD;">apt update</span></span>
<span class="line"><span style="color:#A6ACCD;"># 安装各种库</span></span>
<span class="line"><span style="color:#A6ACCD;">apt install -y libwebp-dev libjpeg-dev libpng-dev libfreetype6-dev</span></span>
<span class="line"><span style="color:#A6ACCD;"># 解压源码</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-php-source extract</span></span>
<span class="line"><span style="color:#A6ACCD;"># gd源码文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;">cd /usr/src/php/ext/gd</span></span>
<span class="line"><span style="color:#A6ACCD;"># 准备编译</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-php-ext-configure gd \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--with-webp=/usr/include/webp \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--with-jpeg=/usr/include \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--with-freetype=/usr/include/freetype2</span></span>
<span class="line"><span style="color:#A6ACCD;"># 编译安装</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-php-ext-install gd</span></span>
<span class="line"><span style="color:#A6ACCD;">php -m | grep gd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>安装 git、composer 和 zip、unzip</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 更新软件源</span></span>
<span class="line"><span style="color:#A6ACCD;">apt update</span></span>
<span class="line"><span style="color:#A6ACCD;">apt install -y git</span></span>
<span class="line"><span style="color:#A6ACCD;"># 下载安装 composer</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -sS https://getcomposer.org/installer | php</span></span>
<span class="line"><span style="color:#A6ACCD;">mv composer.phar /usr/local/bin/composer</span></span>
<span class="line"><span style="color:#A6ACCD;"># 配置 全局镜像地址【可选操作】</span></span>
<span class="line"><span style="color:#A6ACCD;">composer config -g repo.packagist composer https://packagist.phpcomposer.com</span></span>
<span class="line"><span style="color:#A6ACCD;">composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 安装 zip、unzip , composer install 时需要用到 zip 和 unzip</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get install -y zip unzip</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># php7.4 必须要执行，否则 composer install 会报错，php8 可以不执行</span></span>
<span class="line"><span style="color:#A6ACCD;"># 不安装好像也可以</span></span>
<span class="line"><span style="color:#A6ACCD;"># docker-php-ext-install zip</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>参考：<a href="https://gitee.com/link?target=https%3A%2F%2Fpkg.phpcomposer.com%2F%23how-to-install-composer" target="_blank" rel="noreferrer">安装 composer</a></p></blockquote><ul><li>安装 swoole 扩展</li></ul><p><a href="https://wiki.swoole.com/#/environment" target="_blank" rel="noreferrer">官方文档</a><br><a href="https://wiki.swoole.com/#/question/install" target="_blank" rel="noreferrer">常见问题</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># fatal error: &#39;openssl/ssl.h&#39; file not found</span></span>
<span class="line"><span style="color:#A6ACCD;"># 安装 openssl 库</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get install openssl</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get install libssl-dev</span></span>
<span class="line"><span style="color:#A6ACCD;">whereis openssl</span></span>
<span class="line"><span style="color:#A6ACCD;"># 拿到 openssl 库的安装位置： /usr/include/openssl</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># fatal error: curl/curl.h: No such file or directory</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get install libcurl4-openssl-dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 解决了问题，然后 安装 swoole 扩展</span></span>
<span class="line"><span style="color:#A6ACCD;">pecl install -D &#39;enable-sockets=&quot;no&quot; enable-openssl=&quot;yes --with-openssl-dir=/usr/include/openssl/&quot; enable-http2=&quot;yes&quot; enable-mysqlnd=&quot;yes&quot; enable-swoole-json=&quot;no&quot; enable-swoole-curl=&quot;yes&quot; enable-cares=&quot;yes&quot;&#39; swoole</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>php.ini 开启 swoole 扩展</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cp /usr/local/etc/php/php.ini-production /usr/local/etc/php/php.ini</span></span>
<span class="line"><span style="color:#A6ACCD;">vim /usr/local/etc/php/php.ini</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>内容</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 大概在 line：950</span></span>
<span class="line"><span style="color:#A6ACCD;">extension=swoole.so</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>退出 php7.4 容器</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">exit</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>重启 php7.4 容器</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker restart php7.4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,36),o=[e];function c(t,i,r,C,A,d){return a(),n("div",null,o)}const h=s(l,[["render",c]]);export{u as __pageData,h as default};
