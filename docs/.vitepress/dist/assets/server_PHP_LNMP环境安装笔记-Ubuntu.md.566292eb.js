import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.92222dd1.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/PHP/LNMP环境安装笔记-Ubuntu.md","lastUpdated":null}'),l={name:"server/PHP/LNMP环境安装笔记-Ubuntu.md"},e=p(`<h2 id="lnmp-安装教程" tabindex="-1">lnmp 安装教程 <a class="header-anchor" href="#lnmp-安装教程" aria-label="Permalink to &quot;lnmp 安装教程&quot;">​</a></h2><p>安装环境： Ubuntu 18.04 + nginx + PHP7.4.* + mysql5.5</p><h6 id="更新-apt-get" tabindex="-1">更新 apt-get <a class="header-anchor" href="#更新-apt-get" aria-label="Permalink to &quot;更新 apt-get&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo apt-get update</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="安装-nginx" tabindex="-1">安装 Nginx <a class="header-anchor" href="#安装-nginx" aria-label="Permalink to &quot;安装 Nginx&quot;">​</a></h6><ul><li>Nginx 安装命令</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo apt-get install nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><p>测试NGINX是否安装成功</p><ul><li>浏览器直接访问 ip:80 ，是否出现 nginx 信息，出现说明安装成功，否则未成功</li><li>创建 a.txt 文件 <code>vim /var/www/html/d.txt</code>, 文件内容随意 , 并访问 <code>http://ip:80/d.txt</code> , 看是否正确输出文件内容</li><li>NGINX默认站点配置文件为 <code>/etc/nginx/sites-enabled/default</code></li></ul></li><li><p>Nginx 站点配置</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">vim /etc/nginx/conf.d/default.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><p>配置文件内容</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 80;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;">    access_log /var/log/nginx/default.access.log;</span></span>
<span class="line"><span style="color:#A6ACCD;">    error_log /var/log/nginx/default.error.log;</span></span>
<span class="line"><span style="color:#A6ACCD;">    root /var/www/html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.php index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try_files $uri $uri/ /index.php?$query_string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#A6ACCD;">        include        fastcgi_params;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>Nginx 命令</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">systemctl start nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="安装-php7-4-使用-第三方库-software-properties-common" tabindex="-1">安装 PHP7.4 -- 使用 第三方库 software-properties-common <a class="header-anchor" href="#安装-php7-4-使用-第三方库-software-properties-common" aria-label="Permalink to &quot;安装 PHP7.4 -- 使用 第三方库 software-properties-common&quot;">​</a></h5><ul><li>安装 PHP</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 安装 add-apt-repository 命令</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get install software-properties-common</span></span>
<span class="line"><span style="color:#A6ACCD;"># 用add-apt-repository命令添加源</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo add-apt-repository ppa:ondrej/php</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 安装 php7.4 及其扩展</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get install php7.4 php7.4-fpm php7.4-mysql php7.4-gd php7.4-mbstring php7.4-bcmath </span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get install php7.4-dom php7.4-zip php7.4-sqlite3 php7.4-cli php7.4-soap</span></span>
<span class="line"><span style="color:#A6ACCD;"># 安装 phpize7.4</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get install php7.4-dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>配置 PHP</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># php74-fpm 默认的监听方式是sock方式，对此需要修改配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo vim /etc/php/7.4/fpm/pool.d/www.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 修改 用户名和用户组</span></span>
<span class="line"><span style="color:#A6ACCD;">;user = www-data</span></span>
<span class="line"><span style="color:#A6ACCD;">;group = www-data</span></span>
<span class="line"><span style="color:#A6ACCD;">user = www</span></span>
<span class="line"><span style="color:#A6ACCD;">group = www</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#　注释 listen</span></span>
<span class="line"><span style="color:#A6ACCD;">; listen = /run/php/php7.4-fpm.sock</span></span>
<span class="line"><span style="color:#A6ACCD;">#　添加</span></span>
<span class="line"><span style="color:#A6ACCD;">listen = 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li>php-fpm 命令</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">systemctl start php7.4-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart php7.4-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop php7.4-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status php7.4-fpm</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看监听状态</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo netstat -nlp | grep 9000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>测试nginx站点是否可以正确解析php文件 <ul><li><p>nginx默认站点配置文件为 <code>/etc/nginx/sites-enabled/default</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 修改 配置文件，以支持 php文件解析</span></span>
<span class="line"><span style="color:#A6ACCD;">vim /etc/nginx/sites-enabled/default</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen 80 default_server;</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen [::]:80 default_server;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  root /var/www/html;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # Add index.php to the list if you are using PHP</span></span>
<span class="line"><span style="color:#A6ACCD;">  index index.html index.htm index.nginx-debian.html;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  server_name _;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">      try_files $uri $uri/ =404;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # pass PHP scripts to FastCGI server</span></span>
<span class="line"><span style="color:#A6ACCD;">  #</span></span>
<span class="line"><span style="color:#A6ACCD;">  location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">      # 开启这一行</span></span>
<span class="line"><span style="color:#A6ACCD;">      include snippets/fastcgi-php.conf;</span></span>
<span class="line"><span style="color:#A6ACCD;">  #</span></span>
<span class="line"><span style="color:#A6ACCD;">  #	# With php-fpm (or other unix sockets):</span></span>
<span class="line"><span style="color:#A6ACCD;">  #	fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;</span></span>
<span class="line"><span style="color:#A6ACCD;">  #	# With php-cgi (or other tcp sockets):</span></span>
<span class="line"><span style="color:#A6ACCD;">      # 开启这一行</span></span>
<span class="line"><span style="color:#A6ACCD;">      fastcgi_pass 127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>创建 <code>phpinfo.php</code> 文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">vim /var/www/html/phpinfo.php</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;?php</span></span>
<span class="line"><span style="color:#A6ACCD;">phpinfo();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>重启 nginx 服务</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">systemctl restart nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>浏览器访问地址 <code>http://ip:80/phpinfo.php</code> ，检查是否正常解析【注意浏览器缓存，正常来说，配置到这里，已经可以正常解析php文件了】</p></li></ul></li></ul><h6 id="卸载-php7" tabindex="-1">卸载 php7 <a class="header-anchor" href="#卸载-php7" aria-label="Permalink to &quot;卸载 php7&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo apt-get autoremove php7*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="安装-git-和-composer" tabindex="-1">安装 Git 和 composer <a class="header-anchor" href="#安装-git-和-composer" aria-label="Permalink to &quot;安装 Git 和 composer&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">apt install git</span></span>
<span class="line"><span style="color:#A6ACCD;">apt install composer</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>执行 <code>composer install</code> 提示安装PHP扩展时，根据提示安装对应扩展，命令为 <code>apt-get install php8.1-gd</code></p></blockquote>`,24),o=[e];function t(c,i,r,C,A,d){return a(),n("div",null,o)}const u=s(l,[["render",t]]);export{h as __pageData,u as default};
