import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.CFZOmcOm.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"php/LNMP环境安装笔记-Ubuntu.md","filePath":"php/LNMP环境安装笔记-Ubuntu.md","lastUpdated":1722327281000}'),e={name:"php/LNMP环境安装笔记-Ubuntu.md"},l=p(`<h2 id="lnmp-安装教程" tabindex="-1">lnmp 安装教程 <a class="header-anchor" href="#lnmp-安装教程" aria-label="Permalink to &quot;lnmp 安装教程&quot;">​</a></h2><p>安装环境： Ubuntu 18.04 + nginx + PHP7.4.* + mysql5.5</p><h6 id="更新-apt-get" tabindex="-1">更新 apt-get <a class="header-anchor" href="#更新-apt-get" aria-label="Permalink to &quot;更新 apt-get&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo apt-get update</span></span></code></pre></div><h6 id="安装-nginx" tabindex="-1">安装 Nginx <a class="header-anchor" href="#安装-nginx" aria-label="Permalink to &quot;安装 Nginx&quot;">​</a></h6><ul><li>Nginx 安装命令</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo apt-get install nginx</span></span></code></pre></div><ul><li><p>测试NGINX是否安装成功</p><ul><li>浏览器直接访问 ip:80 ，是否出现 nginx 信息，出现说明安装成功，否则未成功</li><li>创建 a.txt 文件 <code>vim /var/www/html/d.txt</code>, 文件内容随意 , 并访问 <code>http://ip:80/d.txt</code> , 看是否正确输出文件内容</li><li>NGINX默认站点配置文件为 <code>/etc/nginx/sites-enabled/default</code></li></ul></li><li><p>Nginx 站点配置</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vim /etc/nginx/conf.d/default.conf</span></span></code></pre></div><ul><li><p>配置文件内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name localhost;</span></span>
<span class="line"><span>    access_log /var/log/nginx/default.access.log;</span></span>
<span class="line"><span>    error_log /var/log/nginx/default.error.log;</span></span>
<span class="line"><span>    root /var/www/html;</span></span>
<span class="line"><span>    index index.php index.html index.htm;</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        try_files $uri $uri/ /index.php?$query_string;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    location ~ \\.php$ {</span></span>
<span class="line"><span>        fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span>        fastcgi_index  index.php;</span></span>
<span class="line"><span>        fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;</span></span>
<span class="line"><span>        include        fastcgi_params;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p>Nginx 命令</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>systemctl start nginx</span></span>
<span class="line"><span>systemctl restart nginx</span></span>
<span class="line"><span>systemctl stop nginx</span></span>
<span class="line"><span>systemctl status nginx</span></span></code></pre></div><h5 id="安装-php7-4-使用-第三方库-software-properties-common" tabindex="-1">安装 PHP7.4 -- 使用 第三方库 software-properties-common <a class="header-anchor" href="#安装-php7-4-使用-第三方库-software-properties-common" aria-label="Permalink to &quot;安装 PHP7.4 -- 使用 第三方库 software-properties-common&quot;">​</a></h5><ul><li>安装 PHP</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 安装 add-apt-repository 命令</span></span>
<span class="line"><span>sudo apt-get install software-properties-common</span></span>
<span class="line"><span># 用add-apt-repository命令添加源</span></span>
<span class="line"><span>sudo add-apt-repository ppa:ondrej/php</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装 php7.4 及其扩展</span></span>
<span class="line"><span>sudo apt-get install php7.4 php7.4-fpm php7.4-mysql php7.4-gd php7.4-mbstring php7.4-bcmath </span></span>
<span class="line"><span>sudo apt-get install php7.4-dom php7.4-zip php7.4-sqlite3 php7.4-cli php7.4-soap</span></span>
<span class="line"><span># 安装 phpize7.4</span></span>
<span class="line"><span>sudo apt-get install php7.4-dev</span></span></code></pre></div><ul><li>配置 PHP</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># php74-fpm 默认的监听方式是sock方式，对此需要修改配置文件</span></span>
<span class="line"><span>sudo vim /etc/php/7.4/fpm/pool.d/www.conf</span></span></code></pre></div><ul><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 修改 用户名和用户组</span></span>
<span class="line"><span>;user = www-data</span></span>
<span class="line"><span>;group = www-data</span></span>
<span class="line"><span>user = www</span></span>
<span class="line"><span>group = www</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#　注释 listen</span></span>
<span class="line"><span>; listen = /run/php/php7.4-fpm.sock</span></span>
<span class="line"><span>#　添加</span></span>
<span class="line"><span>listen = 127.0.0.1:9000</span></span></code></pre></div></li><li>php-fpm 命令</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>systemctl start php7.4-fpm</span></span>
<span class="line"><span>systemctl restart php7.4-fpm</span></span>
<span class="line"><span>systemctl stop php7.4-fpm</span></span>
<span class="line"><span>systemctl status php7.4-fpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看监听状态</span></span>
<span class="line"><span>sudo netstat -nlp | grep 9000</span></span></code></pre></div><ul><li>测试nginx站点是否可以正确解析php文件 <ul><li><p>nginx默认站点配置文件为 <code>/etc/nginx/sites-enabled/default</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 修改 配置文件，以支持 php文件解析</span></span>
<span class="line"><span>vim /etc/nginx/sites-enabled/default</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>  listen 80 default_server;</span></span>
<span class="line"><span>  listen [::]:80 default_server;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  root /var/www/html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # Add index.php to the list if you are using PHP</span></span>
<span class="line"><span>  index index.html index.htm index.nginx-debian.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  server_name _;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  location / {</span></span>
<span class="line"><span>      try_files $uri $uri/ =404;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # pass PHP scripts to FastCGI server</span></span>
<span class="line"><span>  #</span></span>
<span class="line"><span>  location ~ \\.php$ {</span></span>
<span class="line"><span>      # 开启这一行</span></span>
<span class="line"><span>      include snippets/fastcgi-php.conf;</span></span>
<span class="line"><span>  #</span></span>
<span class="line"><span>  #	# With php-fpm (or other unix sockets):</span></span>
<span class="line"><span>  #	fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;</span></span>
<span class="line"><span>  #	# With php-cgi (or other tcp sockets):</span></span>
<span class="line"><span>      # 开启这一行</span></span>
<span class="line"><span>      fastcgi_pass 127.0.0.1:9000;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p>创建 <code>phpinfo.php</code> 文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vim /var/www/html/phpinfo.php</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>phpinfo();</span></span></code></pre></div></li><li><p>重启 nginx 服务</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>systemctl restart nginx</span></span></code></pre></div></li><li><p>浏览器访问地址 <code>http://ip:80/phpinfo.php</code> ，检查是否正常解析【注意浏览器缓存，正常来说，配置到这里，已经可以正常解析php文件了】</p></li></ul></li></ul><h6 id="卸载-php7" tabindex="-1">卸载 php7 <a class="header-anchor" href="#卸载-php7" aria-label="Permalink to &quot;卸载 php7&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo apt-get autoremove php7*</span></span></code></pre></div><h5 id="安装-git-和-composer" tabindex="-1">安装 Git 和 composer <a class="header-anchor" href="#安装-git-和-composer" aria-label="Permalink to &quot;安装 Git 和 composer&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>apt install git</span></span>
<span class="line"><span>apt install composer</span></span></code></pre></div><blockquote><p>执行 <code>composer install</code> 提示安装PHP扩展时，根据提示安装对应扩展，命令为 <code>apt-get install php8.1-gd</code></p></blockquote>`,24),i=[l];function t(c,o,d,h,r,u){return n(),a("div",null,i)}const b=s(e,[["render",t]]);export{m as __pageData,b as default};
