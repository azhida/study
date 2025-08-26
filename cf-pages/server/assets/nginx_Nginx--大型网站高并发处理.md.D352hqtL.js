import{_ as s,c as a,o as n,a5 as p}from"./chunks/framework.CJNr4pYi.js";const e="/server/assets/tomcat%E5%B9%B6%E5%8F%91%E5%9B%BE.DJOf9EZO.png",l="/server/assets/%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%88%86%E5%B8%83%E5%BC%8F%E6%9E%B6%E6%9E%84%E5%9B%BE.DsJJTXbK.png",i="/server/assets/web%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9E%E6%8E%A5memcached%E7%9A%84jar%E5%8C%85.DevuJGNl.png",v=JSON.parse('{"title":"Nginx--大型网站高并发处理","description":"","frontmatter":{},"headers":[],"relativePath":"nginx/Nginx--大型网站高并发处理.md","filePath":"nginx/Nginx--大型网站高并发处理.md","lastUpdated":1722327281000}'),t={name:"nginx/Nginx--大型网站高并发处理.md"},c=p('<h1 id="nginx-大型网站高并发处理" tabindex="-1">Nginx--大型网站高并发处理 <a class="header-anchor" href="#nginx-大型网站高并发处理" aria-label="Permalink to &quot;Nginx--大型网站高并发处理&quot;">​</a></h1><p>原文地址：<a href="https://blog.csdn.net/weixin_43270493/article/details/85134759" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_43270493/article/details/85134759</a></p><h2 id="一、产生背景" tabindex="-1">一、产生背景 <a class="header-anchor" href="#一、产生背景" aria-label="Permalink to &quot;一、产生背景&quot;">​</a></h2><h3 id="生活场景" tabindex="-1">生活场景 <a class="header-anchor" href="#生活场景" aria-label="Permalink to &quot;生活场景&quot;">​</a></h3><ul><li>大学读书时，每到选修课的时候，学校的选课系统，卡顿，或者直接挂掉</li><li>淘宝，京东等商场活动，双11，京东618</li><li>12306网站 购票压力</li></ul><h3 id="分析原因" tabindex="-1">分析原因 <a class="header-anchor" href="#分析原因" aria-label="Permalink to &quot;分析原因&quot;">​</a></h3><ul><li>巨大流量—海量的并发访问</li><li>单台服务器资源和能力有限</li></ul><h2 id="二、负载均衡-load-balance" tabindex="-1">二、负载均衡（Load Balance） <a class="header-anchor" href="#二、负载均衡-load-balance" aria-label="Permalink to &quot;二、负载均衡（Load Balance）&quot;">​</a></h2><h3 id="高并发" tabindex="-1">高并发 <a class="header-anchor" href="#高并发" aria-label="Permalink to &quot;高并发&quot;">​</a></h3><p>见名知意，高（大量的）并发就是可以使用多个线程或者多个进程，同时处理（就是并发）不同的操作。简而言之就是每秒内有多少个请求同时访问。</p><h3 id="负载均衡" tabindex="-1">负载均衡 <a class="header-anchor" href="#负载均衡" aria-label="Permalink to &quot;负载均衡&quot;">​</a></h3><p>将请求/数据【均匀】分摊到多个操作单元上执行，负载均衡的关键在于【均匀】,也是分布式系统架构设计中必须考虑的因素之一。</p><h3 id="tomcat并发图" tabindex="-1">tomcat并发图 <a class="header-anchor" href="#tomcat并发图" aria-label="Permalink to &quot;tomcat并发图&quot;">​</a></h3><p><img src="'+e+'" alt=""></p><p>由tomcat的并发测试图可以发现，当每秒300个请求同时访问tomcat时，tomcat已经开始承受不住，出现波动。那么大型网站是如何处理高并发的呢？以下是高并发场景下，实现负载均衡的一个分布式架构图。</p><p><img src="'+l+`" alt=""></p><p>常见互联网分布式架构，分为客户端层、反向代理nginx层、站点层、服务层、数据层。只需要实现“将请求/数据 均匀分摊到多个操作单元上执行”，就能实现负载均衡。</p><h2 id="三、nginx-简介" tabindex="-1">三、Nginx 简介 <a class="header-anchor" href="#三、nginx-简介" aria-label="Permalink to &quot;三、Nginx 简介&quot;">​</a></h2><h3 id="什么是-nginx" tabindex="-1">什么是 Nginx? <a class="header-anchor" href="#什么是-nginx" aria-label="Permalink to &quot;什么是 Nginx?&quot;">​</a></h3><ul><li>Nginx是一款 轻量级 的Web服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器。</li><li>由俄罗斯的程序设计师Igor Sysoev所开发，其特点是占有内存少，并发能力强，nginx的并发能力确实在同类型的网页服务器中表现非常好。</li><li>2004年10月4日 第一个公开版本0.1.0发布。其将源代码以类BSD许可证的形式发布。</li><li>官方测试nginx能够支撑5万并发链接，并且CPU、内存等资源消耗却非常低，运行非常稳定。</li></ul><h3 id="哪些地方使用了nginx" tabindex="-1">哪些地方使用了Nginx？ <a class="header-anchor" href="#哪些地方使用了nginx" aria-label="Permalink to &quot;哪些地方使用了Nginx？&quot;">​</a></h3><ul><li>阿里云</li><li>阿里巴巴</li><li>网易</li><li>蘑菇街</li><li>土豆</li><li>爱奇艺</li><li>新浪网</li><li>腾讯网</li><li>京东</li><li>唯品会</li><li>优酷</li><li>乐视网</li><li>淘宝网</li><li>360</li><li>天猫</li><li>……</li></ul><h2 id="四、nginx-对比-apache" tabindex="-1">四、Nginx 对比 Apache <a class="header-anchor" href="#四、nginx-对比-apache" aria-label="Permalink to &quot;四、Nginx 对比 Apache&quot;">​</a></h2><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h3><ul><li>轻量级，同样起web 服务，比apache 占用更少的内存及资源</li><li>高并发，nginx 处理请求是异步非阻塞（如前端ajax）的，而 apache 则是阻塞型的，在高并发下nginx能保持低资源低消耗高性能高度模块化的设计，编写模块相对简单</li><li>还有，它社区活跃，各种高性能模块出品迅速（十几年时间发展）</li><li>Nginx 配置简洁, Apache 复杂</li></ul><h3 id="不足" tabindex="-1">不足 <a class="header-anchor" href="#不足" aria-label="Permalink to &quot;不足&quot;">​</a></h3><ul><li>Apache 的 Rewrite重写 ，比nginx 的rewrite 强大模块超多，基本想到的都可以找到。</li><li>Apache 少bug ，nginx 的bug 相对较多。（出身好起步高）</li></ul><h2 id="五、安装nginx" tabindex="-1">五、安装Nginx <a class="header-anchor" href="#五、安装nginx" aria-label="Permalink to &quot;五、安装Nginx&quot;">​</a></h2><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><p>Nginx依赖 gcc openssl-devel pcre-devel zlib-devel</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum -y install gcc openssl-devel pcre-devel zlib-devel</span></span></code></pre></div><h3 id="解压文件" tabindex="-1">解压文件 <a class="header-anchor" href="#解压文件" aria-label="Permalink to &quot;解压文件&quot;">​</a></h3><p>上传压缩包 —&gt;下载连接：<a href="http://nginx.org" target="_blank" rel="noreferrer">http://nginx.org</a> (我用的是1.8.1)</p><p>解压命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>tar -zxvf nginx-1.8.1.tar.gz</span></span></code></pre></div><h3 id="configure配置" tabindex="-1">configure配置 <a class="header-anchor" href="#configure配置" aria-label="Permalink to &quot;configure配置&quot;">​</a></h3><p>进入解压后的源码目录，然后执行configure命令进行配置:</p><p>命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>./configure</span></span></code></pre></div><h3 id="编译并安装" tabindex="-1">编译并安装 <a class="header-anchor" href="#编译并安装" aria-label="Permalink to &quot;编译并安装&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>make &amp;&amp; make install</span></span></code></pre></div><p>安装好后，会在/usr/soft下生成nginx目录(这是我编译前指定的)，</p><p>这个目录 <code>/usr/soft/nginx</code> 就是nginx的软件了。</p><h3 id="配置nginx为系统服务-以方便管理" tabindex="-1">配置Nginx为系统服务，以方便管理 <a class="header-anchor" href="#配置nginx为系统服务-以方便管理" aria-label="Permalink to &quot;配置Nginx为系统服务，以方便管理&quot;">​</a></h3><ul><li>1、在/etc/rc.d/init.d/目录中建立文本文件nginx</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vim /etc/rc.d/init.d/nginx</span></span></code></pre></div><ul><li>2、在文件中粘贴下面的内容：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># nginx - this script starts and stops the nginx daemon</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># chkconfig:   - 85 15 </span></span>
<span class="line"><span># description:  Nginx is an HTTP(S) server, HTTP(S) reverse \\</span></span>
<span class="line"><span>#               proxy and IMAP/POP3 proxy server</span></span>
<span class="line"><span># processname: nginx</span></span>
<span class="line"><span># config:      /etc/nginx/nginx.conf</span></span>
<span class="line"><span># config:      /etc/sysconfig/nginx</span></span>
<span class="line"><span># pidfile:     /var/run/nginx.pid</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># Source function library.</span></span>
<span class="line"><span>. /etc/rc.d/init.d/functions</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># Source networking configuration.</span></span>
<span class="line"><span>. /etc/sysconfig/network</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># Check that networking is up.</span></span>
<span class="line"><span>[ &quot;$NETWORKING&quot; = &quot;no&quot; ] &amp;&amp; exit 0</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>nginx=&quot;/usr/local/nginx/sbin/nginx&quot;</span></span>
<span class="line"><span>prog=$(basename $nginx)</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>NGINX_CONF_FILE=&quot;/usr/local/nginx/conf/nginx.conf&quot;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>[ -f /etc/sysconfig/nginx ] &amp;&amp; . /etc/sysconfig/nginx</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>lockfile=/var/lock/subsys/nginx</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>make_dirs() {</span></span>
<span class="line"><span>   # make required directories</span></span>
<span class="line"><span>   user=\`nginx -V 2&gt;&amp;1 | grep &quot;configure arguments:&quot; | sed &#39;s/[^*]*--user=\\([^ ]*\\).*/\\1/g&#39; -\`</span></span>
<span class="line"><span>   options=\`$nginx -V 2&gt;&amp;1 | grep &#39;configure arguments:&#39;\`</span></span>
<span class="line"><span>   for opt in $options; do</span></span>
<span class="line"><span>       if [ \`echo $opt | grep &#39;.*-temp-path&#39;\` ]; then</span></span>
<span class="line"><span>           value=\`echo $opt | cut -d &quot;=&quot; -f 2\`</span></span>
<span class="line"><span>           if [ ! -d &quot;$value&quot; ]; then</span></span>
<span class="line"><span>               # echo &quot;creating&quot; $value</span></span>
<span class="line"><span>               mkdir -p $value &amp;&amp; chown -R $user $value</span></span>
<span class="line"><span>           fi</span></span>
<span class="line"><span>       fi</span></span>
<span class="line"><span>   done</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>start() {</span></span>
<span class="line"><span>    [ -x $nginx ] || exit 5</span></span>
<span class="line"><span>    [ -f $NGINX_CONF_FILE ] || exit 6</span></span>
<span class="line"><span>    make_dirs</span></span>
<span class="line"><span>    echo -n $&quot;Starting $prog: &quot;</span></span>
<span class="line"><span>    daemon $nginx -c $NGINX_CONF_FILE</span></span>
<span class="line"><span>    retval=$?</span></span>
<span class="line"><span>    echo</span></span>
<span class="line"><span>    [ $retval -eq 0 ] &amp;&amp; touch $lockfile</span></span>
<span class="line"><span>    return $retval</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>stop() {</span></span>
<span class="line"><span>    echo -n $&quot;Stopping $prog: &quot;</span></span>
<span class="line"><span>    killproc $prog -QUIT</span></span>
<span class="line"><span>    retval=$?</span></span>
<span class="line"><span>    echo</span></span>
<span class="line"><span>    [ $retval -eq 0 ] &amp;&amp; rm -f $lockfile</span></span>
<span class="line"><span>    return $retval</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>restart() {</span></span>
<span class="line"><span>    configtest || return $?</span></span>
<span class="line"><span>    stop</span></span>
<span class="line"><span>    sleep 1</span></span>
<span class="line"><span>    start</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>reload() {</span></span>
<span class="line"><span>    configtest || return $?</span></span>
<span class="line"><span>    echo -n $&quot;Reloading $prog: &quot;</span></span>
<span class="line"><span>    killproc $nginx -HUP</span></span>
<span class="line"><span>    RETVAL=$?</span></span>
<span class="line"><span>    echo</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>force_reload() {</span></span>
<span class="line"><span>    restart</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>configtest() {</span></span>
<span class="line"><span>  $nginx -t -c $NGINX_CONF_FILE</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>rh_status() {</span></span>
<span class="line"><span>    status $prog</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>rh_status_q() {</span></span>
<span class="line"><span>    rh_status &gt;/dev/null 2&gt;&amp;1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>case &quot;$1&quot; in</span></span>
<span class="line"><span>    start)</span></span>
<span class="line"><span>        rh_status_q &amp;&amp; exit 0</span></span>
<span class="line"><span>        $1</span></span>
<span class="line"><span>        ;;</span></span>
<span class="line"><span>    stop)</span></span>
<span class="line"><span>        rh_status_q || exit 0</span></span>
<span class="line"><span>        $1</span></span>
<span class="line"><span>        ;;</span></span>
<span class="line"><span>    restart|configtest)</span></span>
<span class="line"><span>        $1</span></span>
<span class="line"><span>        ;;</span></span>
<span class="line"><span>    reload)</span></span>
<span class="line"><span>        rh_status_q || exit 7</span></span>
<span class="line"><span>        $1</span></span>
<span class="line"><span>        ;;</span></span>
<span class="line"><span>    force-reload)</span></span>
<span class="line"><span>        force_reload</span></span>
<span class="line"><span>        ;;</span></span>
<span class="line"><span>    status)</span></span>
<span class="line"><span>        rh_status</span></span>
<span class="line"><span>        ;;</span></span>
<span class="line"><span>    condrestart|try-restart)</span></span>
<span class="line"><span>        rh_status_q || exit 0</span></span>
<span class="line"><span>            ;;</span></span>
<span class="line"><span>    *)</span></span>
<span class="line"><span>        echo $&quot;Usage: $0 {start|stop|status|restart|condrestart|try-restart|reload|force-reload|configtest}&quot;</span></span>
<span class="line"><span>        exit 2</span></span>
<span class="line"><span>esac</span></span></code></pre></div><ul><li>3、修改nginx文件的执行权限</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>chmod +x nginx</span></span></code></pre></div><ul><li>4、添加该文件到系统服务中去</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 添加命令：</span></span>
<span class="line"><span>chkconfig  --add  nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看是否添加成功:</span></span>
<span class="line"><span>chkconfig  --list  nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启动：重启：停止命令:</span></span>
<span class="line"><span>service nginx  start|restart|stop</span></span></code></pre></div><h2 id="六、nginx配置" tabindex="-1">六、Nginx配置 <a class="header-anchor" href="#六、nginx配置" aria-label="Permalink to &quot;六、Nginx配置&quot;">​</a></h2><h3 id="nginx默认配置详解" tabindex="-1">nginx默认配置详解 <a class="header-anchor" href="#nginx默认配置详解" aria-label="Permalink to &quot;nginx默认配置详解&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#进程数，建议设置和CPU个数一样或2倍</span></span>
<span class="line"><span>worker_processes  2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#日志级别</span></span>
<span class="line"><span>error_log  logs/error.log  warning;(默认error级别)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># nginx 启动后的pid 存放位置</span></span>
<span class="line"><span>#pid        logs/nginx.pid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>	#配置每个进程的连接数，总的连接数= worker_processes * worker_connections</span></span>
<span class="line"><span>    #默认1024</span></span>
<span class="line"><span>    worker_connections  10240;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    include       mime.types;</span></span>
<span class="line"><span>    default_type  application/octet-stream;</span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#连接超时时间，单位秒</span></span>
<span class="line"><span>keepalive_timeout  65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       80;</span></span>
<span class="line"><span>        server_name  localhost                 </span></span>
<span class="line"><span>        #默认请求</span></span>
<span class="line"><span>  		location / {</span></span>
<span class="line"><span>    				 root  html;   #定义服务器的默认网站根目录位置</span></span>
<span class="line"><span>   				  index  index.php index.html index.htm;  #定义首页索引文件的名称</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>	    #定义错误提示页面</span></span>
<span class="line"><span>        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>        location = /50x.html {</span></span>
<span class="line"><span>            root   html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="负载均衡配置" tabindex="-1">负载均衡配置 <a class="header-anchor" href="#负载均衡配置" aria-label="Permalink to &quot;负载均衡配置&quot;">​</a></h3><p>nginx支持以下负载均衡机制（或方法）：</p><ul><li>轮询负载均衡 - 对应用程序服务器的请求以循环方式分发，</li><li>加权负载均衡</li><li>最少连接数 - 将下一个请求分配给活动连接数最少的服务器</li><li>ip-hash - 哈希函数用于确定下一个请求（基于客户端的IP地址）应该选择哪个服务器。</li></ul><h4 id="默认负载平衡配置" tabindex="-1">默认负载平衡配置 <a class="header-anchor" href="#默认负载平衡配置" aria-label="Permalink to &quot;默认负载平衡配置&quot;">​</a></h4><p>使用nginx进行负载平衡的最简单配置如下所示：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http { </span></span>
<span class="line"><span>    upstream demo{ </span></span>
<span class="line"><span>        server node01; //内部服务器</span></span>
<span class="line"><span>        server node02; </span></span>
<span class="line"><span>        server node03; </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server { </span></span>
<span class="line"><span>        listen 80; </span></span>
<span class="line"><span>	    server_name  localhost;</span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            proxy_pass http://demo;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在上面的示例中，在srv1-srv3上运行相同应用程序的3个实例。如果没有专门配置负载均衡方法，则默认为循环法。<br> 所有请求都被 代理到服务器组demo，并且nginx应用HTTP负载平衡来分发请求。<br> node01 一次 ， node02 一次， node03 一次 …</p><h4 id="加权负载平衡" tabindex="-1">加权负载平衡 <a class="header-anchor" href="#加权负载平衡" aria-label="Permalink to &quot;加权负载平衡&quot;">​</a></h4><p>通过使用服务器权重，还可以进一步影响nginx负载均衡算法，谁的权重越大，分发到的请求就越多。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>upstream demo {</span></span>
<span class="line"><span>    server srv1.example.com weight=3;  </span></span>
<span class="line"><span>    server srv2.example.com;  //默认是 1  1-10范围</span></span>
<span class="line"><span>    server srv3.example.com;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="最少连接负载平衡" tabindex="-1">最少连接负载平衡 <a class="header-anchor" href="#最少连接负载平衡" aria-label="Permalink to &quot;最少连接负载平衡&quot;">​</a></h4><p>在连接负载最少的情况下，nginx会尽量避免将过多的请求分发给繁忙的应用程序服务器，而是将新请求分发给不太繁忙的服务器，避免服务器过载。<br> 相对来说这种方式有点鸡肋…</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>upstream demo {</span></span>
<span class="line"><span>    least_conn;</span></span>
<span class="line"><span>    server srv1.example.com;</span></span>
<span class="line"><span>    server srv2.example.com;</span></span>
<span class="line"><span>    server srv3.example.com;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="会话持久性" tabindex="-1">会话持久性 <a class="header-anchor" href="#会话持久性" aria-label="Permalink to &quot;会话持久性&quot;">​</a></h4><p>上述的循环或最少连接数的负载平衡方法，每个后续客户端的请求都可能被分发到不同的服务器。不能保证相同的客户端总是定向到相同的服务器。</p><p>如果需要将客户端绑定到特定的应用程序服务器 - 换句话说，就是始终选择相同的服务器而言，就要使客户端的会话“粘滞”或“持久” 。</p><p>ip-hash负载平衡机制就是有这种特性。使用ip-hash，客户端的IP地址将用作散列键，以确定应该为客户端的请求选择服务器组中的哪台服务器。</p><p>此方法可确保来自同一客户端的请求将始终定向到同一台服务器，除非此服务器不可用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>upstream demo{</span></span>
<span class="line"><span>    ip_hash;</span></span>
<span class="line"><span>    server srv1.example.com;</span></span>
<span class="line"><span>    server srv2.example.com;</span></span>
<span class="line"><span>    server srv3.example.com;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="nginx的访问控制" tabindex="-1">Nginx的访问控制 <a class="header-anchor" href="#nginx的访问控制" aria-label="Permalink to &quot;Nginx的访问控制&quot;">​</a></h3><p>Nginx还可以对IP的访问进行控制，allow代表允许，deny代表禁止.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location / {</span></span>
<span class="line"><span>    deny 192.168.2.180;</span></span>
<span class="line"><span>    allow 192.168.78.0/24;</span></span>
<span class="line"><span>    allow 10.1.1.0/16;</span></span>
<span class="line"><span>    allow 192.168.1.0/32;</span></span>
<span class="line"><span>    deny all;</span></span>
<span class="line"><span>    proxy_pass http://shsxt;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>从上到下的顺序，匹配到了便跳出。如上的例子先禁止了1个，接下来允许了3个网段，其中包含了一个ipv6，最后未匹配的IP全部禁止访问.</p><h2 id="七、虚拟主机" tabindex="-1">七、虚拟主机 <a class="header-anchor" href="#七、虚拟主机" aria-label="Permalink to &quot;七、虚拟主机&quot;">​</a></h2><h3 id="什么是虚拟主机" tabindex="-1">什么是虚拟主机？ <a class="header-anchor" href="#什么是虚拟主机" aria-label="Permalink to &quot;什么是虚拟主机？&quot;">​</a></h3><p>虚拟主机是指在网络服务器上分出一定的磁盘空间，用户可以租用此部分空间，供用户放置站点及应用组件，提供必要的数据存放和传输功能。</p><p>说白了虚拟主机就是把一台物理服务器划分成多个“虚拟”的服务器，各个服务器之间完全独立，在外界看来，每一台虚拟主机和一台单独的主机的表现完全相同。</p><p>所以这种被虚拟化的逻辑主机被形象的成为 “虚拟主机”.</p><p><strong>优点</strong><br> 由于多台虚拟主机共享一台真实主机的资源，每个虚拟主机用户承受的硬件费用、网络维护费用、通信线路的费用均大幅度降低。许多企业建立网站都采用这种方法，这样不仅大大节省了购买机器和租用专线的费用，网站服务器管理简单，诸如软件配置、防病毒、防攻击等安全措施都由专业服务商提供，大大简化了服务器管理的复杂性；同时也不必为使用和维护服务器的技术问题担心，更不必聘用专门的管理人员。</p><p><strong>类别：</strong></p><ul><li>基于域名的虚拟主机，通过域名来区分虚拟主机</li><li>基于端口的虚拟主机，通过端口来区分虚拟主机</li><li>基于ip 的虚拟主机，很少用。</li></ul><h3 id="基于域名的虚拟主机" tabindex="-1">基于域名的虚拟主机 <a class="header-anchor" href="#基于域名的虚拟主机" aria-label="Permalink to &quot;基于域名的虚拟主机&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http { </span></span>
<span class="line"><span>    upstream demo{ </span></span>
<span class="line"><span>        server node01; </span></span>
<span class="line"><span>	} </span></span>
<span class="line"><span>    upstream test{ </span></span>
<span class="line"><span>        server node03; </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span> 	server { </span></span>
<span class="line"><span>        listen 80; </span></span>
<span class="line"><span>        //访问demo.com的时候，会把请求导到demo的服务器组里</span></span>
<span class="line"><span>		server_name  demo.com;</span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            proxy_pass http://demo;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>	} </span></span>
<span class="line"><span>    server { </span></span>
<span class="line"><span>        listen 80; </span></span>
<span class="line"><span>	    //访问test.com的时候，会把请求导到test的服务器组里</span></span>
<span class="line"><span>	    server_name  test.com; </span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            proxy_pass http://test;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>	} </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>node01, node03 是在虚拟机中配置的ip别名</p><p>可在 /etc/hosts中配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4</span></span>
<span class="line"><span>::1         localhost localhost.localdomain localhost6 localhost6.localdomain6</span></span>
<span class="line"><span>192.168.150.101  node01</span></span>
<span class="line"><span>192.168.150.102  node02</span></span>
<span class="line"><span>192.168.150.103  node03</span></span></code></pre></div><blockquote><p>注意：基于域名的虚拟机主机 在模拟应用场景时，需要在windows系统的hosts文件里配置域名映射。（C:\\Windows\\System32\\drivers\\etc\\hosts）</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>192.168.150.101  test.com</span></span>
<span class="line"><span>192.168.150.103  demo.com</span></span></code></pre></div><h3 id="基于端口的虚拟主机" tabindex="-1">基于端口的虚拟主机 <a class="header-anchor" href="#基于端口的虚拟主机" aria-label="Permalink to &quot;基于端口的虚拟主机&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>upstream demo{</span></span>
<span class="line"><span>    server node03;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>upstream test{</span></span>
<span class="line"><span>    server node01;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    //当访问nginx的 81端口时，将请求分发到 test组</span></span>
<span class="line"><span>    listen 81;</span></span>
<span class="line"><span>    server_name  localhost;</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://test;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    //当访问nginx的 80端口时，将请求分发到  demo组</span></span>
<span class="line"><span>    listen       80;</span></span>
<span class="line"><span>    server_name  localhost;</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://demo;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="八、正向代理和反向代理" tabindex="-1">八、正向代理和反向代理 <a class="header-anchor" href="#八、正向代理和反向代理" aria-label="Permalink to &quot;八、正向代理和反向代理&quot;">​</a></h2><h3 id="正向代理" tabindex="-1">正向代理 <a class="header-anchor" href="#正向代理" aria-label="Permalink to &quot;正向代理&quot;">​</a></h3><p>举个栗子：我是一个用户，我访问不了某网站，但是我能访问一个代理服务器，这个代理服务器呢,他能访问那个我不能访问的网站，于是我先连上代理服务器,告诉他我需要那个无法访问网站的内容，代理服务器去取回来,然后返回给我。像我们经常通过vpn访问国外的网站，此时就是正向代理。</p><p><strong>客户端必须设置正向代理服务器，当然前提是要知道正向代理服务器的IP地址，还有代理程序的端口。</strong></p><h3 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-label="Permalink to &quot;反向代理&quot;">​</a></h3><p>反向代理方式是指以代理服务器来接收internet上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给Internet上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。</p><p>反向代理隐藏了真实的服务端，当我们请求 www.baidu.com 的时候，就像拨打 10086 一样，背后可能有成千上万台服务器为我们服务，但具体是哪一台，你不知道，也不需要知道，你只需要知道反向代理服务器是谁就好了，www.baidu.com 就是我们的反向代理服务器，反向代理服务器会帮我们把请求转发到真实的服务器那里去。Nginx 就是性能非常好的反向代理服务器，用来做负载均衡。</p><h2 id="九、nginx-session一致性问题" tabindex="-1">九、Nginx session一致性问题 <a class="header-anchor" href="#九、nginx-session一致性问题" aria-label="Permalink to &quot;九、Nginx session一致性问题&quot;">​</a></h2><p><strong>http协议是无状态的，即你连续访问某个网页100次和访问1次对服务器来说是没有区别对待的，因为它记不住你。</strong></p><p>那么，在一些场合，确实需要服务器记住当前用户怎么办？</p><p>比如用户登录邮箱后，接下来要收邮件、写邮件，总不能每次操作都让用户输入用户名和密码吧，为了解决这个问题，session的方案就被提了出来，事实上它并不是什么新技术，而且也不能脱离http协议以及任何现有的web技术.</p><p>session的常见实现形式是会话cookie（session cookie），即未设置过期时间的cookie，这个cookie的默认生命周期为浏览器会话期间，只要关闭浏览器窗口，cookie就消失了。</p><h3 id="session共享" tabindex="-1">Session共享 <a class="header-anchor" href="#session共享" aria-label="Permalink to &quot;Session共享&quot;">​</a></h3><p>首先我们应该明白，为什么要实现共享，如果你的网站是存放在一个机器上，那么是不存在这个问题的，因为会话数据就在这台机器，但是如果你使用了负载均衡把请求分发到不同的机器呢？这个时候会话id在客户端是没有问题的，但是如果用户的两次请求到了两台不同的机器，而它的session数据可能存在其中一台机器，这个时候就会出现取不到session数据的情况，于是session的共享就成了一个问题。</p><h3 id="session一致性解决方案" tabindex="-1">Session一致性解决方案 <a class="header-anchor" href="#session一致性解决方案" aria-label="Permalink to &quot;Session一致性解决方案&quot;">​</a></h3><ul><li>1、session 复制：tomcat 本身带有复制session的功能(这里不做介绍)。</li><li>2、共享 session：需要专门管理session的软件，memcached 缓存服务，可以和tomcat整合，帮助tomcat共享管理session。</li></ul><h3 id="安装-memcached" tabindex="-1">安装 memcached <a class="header-anchor" href="#安装-memcached" aria-label="Permalink to &quot;安装 memcached&quot;">​</a></h3><h4 id="安装memcached内存数据库" tabindex="-1">安装memcached内存数据库 <a class="header-anchor" href="#安装memcached内存数据库" aria-label="Permalink to &quot;安装memcached内存数据库&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum -y install memcached</span></span></code></pre></div><p>启动的命令:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>memcached -d -m 128m -p 11211 -l 你安装memcached的ip -u 用户名 -P 密码/没有为空 /tmp/</span></span>
<span class="line"><span># tmp 是存放路径</span></span>
<span class="line"><span># -p  端口号</span></span>
<span class="line"><span># -d  以daemon方式运行 --守护线程(后台运行)</span></span>
<span class="line"><span># -m  允许最大内存用量，单位是M （默认是64M）</span></span></code></pre></div><p>停止命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@node03 lib]# ps -ef|grep memcached</span></span>
<span class="line"><span>root       1536      1  0 02:34 ?        00:00:00 memcached -d -m 128m -p 11211 -l 192.168.150.103 -u root -P /tmp/</span></span>
<span class="line"><span>root       1684   1168  0 03:08 pts/0    00:00:00 grep memcached</span></span>
<span class="line"><span>[root@node03 lib]# kill -9 1536</span></span></code></pre></div><h4 id="web服务器连接memcached的jar包拷贝到tomcat的lib" tabindex="-1">web服务器连接memcached的jar包拷贝到tomcat的lib <a class="header-anchor" href="#web服务器连接memcached的jar包拷贝到tomcat的lib" aria-label="Permalink to &quot;web服务器连接memcached的jar包拷贝到tomcat的lib&quot;">​</a></h4><p>我这里用的tomcat 只要把相关jar传到tomcat的 lib目录下即可 如图：</p><p><img src="`+i+`" alt=""></p><h4 id="配置tomcat的conf目录下的context-xml" tabindex="-1">配置tomcat的conf目录下的context.xml <a class="header-anchor" href="#配置tomcat的conf目录下的context-xml" aria-label="Permalink to &quot;配置tomcat的conf目录下的context.xml&quot;">​</a></h4><p>注意：每个被nginx代理的tomcat都需要配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;Manager className=&quot;de.javakaffee.web.msm.MemcachedBackupSessionManager&quot;</span></span>
<span class="line"><span>    memcachedNodes=&quot;n1:   ====##你配置memcached的虚拟机ip##===   :11211&quot;</span></span>
<span class="line"><span>    sticky=&quot;true&quot;</span></span>
<span class="line"><span>    lockingMode=&quot;auto&quot;</span></span>
<span class="line"><span>    sessionBackupAsync=&quot;false&quot;</span></span>
<span class="line"><span>   requestUriIgnorePattern=&quot;.*\\.(ico|png|gif|jpg|css|js)$&quot;</span></span>
<span class="line"><span>sessionBackupTimeout=&quot;1000&quot; transcoderFactoryClass=&quot;de.javakaffee.web.msm.serializer.kryo.KryoTranscoderFactory&quot; /&gt;</span></span></code></pre></div><p>配置memcachedNodes属性，配置memcached数据库的ip和端口，默认11211，多个的话用逗号隔开.</p><p>目的是为了让tomcat服务器从memcached缓存里面拿session或者是放session.</p><h4 id="修改tomcat中的index-jsp-取sessionid看一看" tabindex="-1">修改tomcat中的index.jsp，取sessionid看一看 <a class="header-anchor" href="#修改tomcat中的index-jsp-取sessionid看一看" aria-label="Permalink to &quot;修改tomcat中的index.jsp，取sessionid看一看&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;%@ page language=&quot;java&quot; contentType=&quot;text/html; charset=UTF-8&quot;  pageEncoding=&quot;UTF-8&quot;%&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>SessionID:&lt;%=session.getId()%&gt;</span></span>
<span class="line"><span>&lt;/br&gt;</span></span>
<span class="line"><span>SessionIP:&lt;%=request.getServerName()%&gt;</span></span>
<span class="line"><span>&lt;/br&gt;</span></span>
<span class="line"><span>&lt;h1&gt;tomcat1&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>可以看到虽然每次请求 nginx 分发到的服务器不是一个，但是sessionID始终唯一，证明session共享成功实现.</p>`,129),o=[c];function r(d,h,u,g,m,b){return n(),a("div",null,o)}const k=s(t,[["render",r]]);export{v as __pageData,k as default};
