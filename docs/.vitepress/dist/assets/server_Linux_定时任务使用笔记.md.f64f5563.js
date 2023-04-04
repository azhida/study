import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.92222dd1.js";const u=JSON.parse('{"title":"Linux定时任务","description":"","frontmatter":{},"headers":[],"relativePath":"server/Linux/定时任务使用笔记.md","lastUpdated":null}'),e={name:"server/Linux/定时任务使用笔记.md"},p=l(`<h1 id="linux定时任务" tabindex="-1">Linux定时任务 <a class="header-anchor" href="#linux定时任务" aria-label="Permalink to &quot;Linux定时任务&quot;">​</a></h1><h6 id="方法一-编辑-etc-crontab文件-添加执行命令" tabindex="-1">方法一：编辑 /etc/crontab文件，添加执行命令 <a class="header-anchor" href="#方法一-编辑-etc-crontab文件-添加执行命令" aria-label="Permalink to &quot;方法一：编辑 /etc/crontab文件，添加执行命令&quot;">​</a></h6><p>vim /etc/crontab</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">* * * * * &#39;/usr/lib/php /var/www/laravel/artisan schedule:run &gt;&gt; /var/www/laravel/storage/logs/cron.log 2&gt;&amp;1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="方法二-执行-crontab-e-命令" tabindex="-1">方法二：执行 crontab -e 命令 <a class="header-anchor" href="#方法二-执行-crontab-e-命令" aria-label="Permalink to &quot;方法二：执行 crontab -e 命令&quot;">​</a></h6><p>crontab -e</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">* * * * * &#39;/usr/lib/php /var/www/laravel/artisan schedule:run &gt;&gt; /var/www/laravel/storage/logs/cron.log 2&gt;&amp;1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="两种方法的区别" tabindex="-1">两种方法的区别： <a class="header-anchor" href="#两种方法的区别" aria-label="Permalink to &quot;两种方法的区别：&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># vim /etc/crontab：系统级任务，多用户均可访问执行；</span></span>
<span class="line"><span style="color:#A6ACCD;"># crontab -e：用户自定义的定时任务，不是多用户共享的，推荐使用这种方式；</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="操作命令" tabindex="-1">操作命令 <a class="header-anchor" href="#操作命令" aria-label="Permalink to &quot;操作命令&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 查看状态</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/cron status</span></span>
<span class="line"><span style="color:#A6ACCD;"># 开始</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/cron start</span></span>
<span class="line"><span style="color:#A6ACCD;"># 重启</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/cron restart</span></span>
<span class="line"><span style="color:#A6ACCD;"># 停止</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/cron stop</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="基本操作" tabindex="-1">基本操作 <a class="header-anchor" href="#基本操作" aria-label="Permalink to &quot;基本操作&quot;">​</a></h1><blockquote><p>crontab修改后不需要重启即可生效</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 列出当前登录用户所有定时任务</span></span>
<span class="line"><span style="color:#A6ACCD;">crontab -l  </span></span>
<span class="line"><span style="color:#A6ACCD;"># 列出 www用户 所有定时任务</span></span>
<span class="line"><span style="color:#A6ACCD;">crontab -u www -l  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 列出XXX用户的所有定时任务，如有没有会提示 no crontab for XXX</span></span>
<span class="line"><span style="color:#A6ACCD;">crontab -l -u XXX  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 编辑当前用户的定时任务</span></span>
<span class="line"><span style="color:#A6ACCD;">crontab -e  </span></span>
<span class="line"><span style="color:#A6ACCD;"># 编辑 www用户 的定时任务</span></span>
<span class="line"><span style="color:#A6ACCD;">crontab -e -u www</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除当前用户的定时任务</span></span>
<span class="line"><span style="color:#A6ACCD;">crontab -r  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看crontab的执行情况：  </span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /var/log/cron</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看crontab的执行log：</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f /var/spool/mail/root</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="解决定时任务重复执行的问题-flock" tabindex="-1">解决定时任务重复执行的问题 <code>flock</code> <a class="header-anchor" href="#解决定时任务重复执行的问题-flock" aria-label="Permalink to &quot;解决定时任务重复执行的问题 \`flock\`&quot;">​</a></h2><p><code>flock --help</code> 查看命令使用帮助</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">flock --help</span></span>
<span class="line"><span style="color:#A6ACCD;">flock (util-linux-ng 2.17.2)</span></span>
<span class="line"><span style="color:#A6ACCD;">Usage: flock [-sxun][-w #] fd#</span></span>
<span class="line"><span style="color:#A6ACCD;">flock [-sxon][-w #] file [-c] command...</span></span>
<span class="line"><span style="color:#A6ACCD;">flock [-sxon][-w #] directory [-c] command...</span></span>
<span class="line"><span style="color:#A6ACCD;">-s --shared Get a shared lock #获得一个共享锁</span></span>
<span class="line"><span style="color:#A6ACCD;">-x --exclusive Get an exclusive lock #获得一个独占锁，这是默认的</span></span>
<span class="line"><span style="color:#A6ACCD;">-u --unlock Remove a lock #删除一个锁，通常是不需要的，因为在文件关闭时锁会自动删除</span></span>
<span class="line"><span style="color:#A6ACCD;">-n --nonblock Fail rather than wait #如果没有立即获得锁，直接失败而不是等待</span></span>
<span class="line"><span style="color:#A6ACCD;">-w --timeout Wait for a limited amount of time #如果没有立即获得锁，等待指定时间</span></span>
<span class="line"><span style="color:#A6ACCD;">-o --close Close file descriptor before running command #在执行命令之前关闭保持锁的文件描述符</span></span>
<span class="line"><span style="color:#A6ACCD;">-c --command Run a single command string through the shell #在shell中运行一个单独的命令</span></span>
<span class="line"><span style="color:#A6ACCD;">-h --help Display this text #显示帮助</span></span>
<span class="line"><span style="color:#A6ACCD;">-V --version Display version #显示版本</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如：<br> 执行一个定时脚本任务，每2分钟跑一次，将没有推送到外部系统的命令推送到外部系统，为了防止被多次推送的情况，所以需要控制并发，每次只能一个脚本任务在执行</p><p>具体实现 ：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">*/2 * * * * flock -xn /home/*/odp_ohs/data/BmsInvoicePushSap.lock -c &#39;/home/*/odp_ohs/php/bin/php /home/work/odp_ohs/app/mc/script/invoice/PushInvoice2Sap.php&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>又如</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">*/5 * * * * flock -xn /tmp/stargate.lock -c &#39;/usr/local/qcloud/stargate/admin/start.sh &gt; /dev/null 2&gt;&amp;1 &amp;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,22),o=[p];function c(t,r,i,C,A,d){return a(),n("div",null,o)}const y=s(e,[["render",c]]);export{u as __pageData,y as default};
