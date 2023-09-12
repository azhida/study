import{_ as a,o as s,c as e,Q as n}from"./chunks/framework.aaef0e9b.js";const k=JSON.parse('{"title":"处理kdevtmpfsi病毒","description":"","frontmatter":{},"headers":[],"relativePath":"other/疑难杂症/处理kdevtmpfsi病毒.md","lastUpdated":1680584985000}'),l={name:"other/疑难杂症/处理kdevtmpfsi病毒.md"},t=n(`<h1 id="处理kdevtmpfsi病毒" tabindex="-1">处理kdevtmpfsi病毒 <a class="header-anchor" href="#处理kdevtmpfsi病毒" aria-label="Permalink to &quot;处理kdevtmpfsi病毒&quot;">​</a></h1><ul><li><a href="https://www.jianshu.com/p/9699251ad1d7" target="_blank" rel="noreferrer">处理kdevtmpfsi病毒</a></li><li><a href="https://blog.csdn.net/qq_41259576/article/details/107191691" target="_blank" rel="noreferrer">kdevtmpfsi 挖矿病毒清除（亲测）</a></li><li><a href="https://juejin.cn/post/6890524854941843469" target="_blank" rel="noreferrer">记一次docker容器中被植入kdevtmpfsi挖矿程序</a></li><li><a href="https://fleey.cn/archives/76.html" target="_blank" rel="noreferrer">docker镜像中存在kdevtmpfsi挖矿程序</a></li><li><a href="https://www.yoyoask.com/?p=1490" target="_blank" rel="noreferrer">docker镜像中存在kdevtmpfsi挖矿程序</a></li><li><a href="https://segmentfault.com/a/1190000038390745" target="_blank" rel="noreferrer">记一次服务器被 kdevtmpfsi 变矿机</a></li></ul><p>kdevtmpfsi进程解决办法： kdevtmpfsi有守护进程，单独kill掉 kdevtmpfsi 进程会不断恢复占用。守护进程名称为 kinsing，需要kill后才能解决问题。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">ps -aux | grep kinsing</span></span>
<span class="line"><span style="color:#babed8;">kill -9 29978</span></span>
<span class="line"><span style="color:#babed8;">ps -aux | grep kdevtmpfsi</span></span>
<span class="line"><span style="color:#babed8;">kill -9 30688 </span></span>
<span class="line"><span style="color:#babed8;">cd /tmp/</span></span>
<span class="line"><span style="color:#babed8;">ls</span></span>
<span class="line"><span style="color:#babed8;">rm -rf kdevtmpfsi </span></span>
<span class="line"><span style="color:#babed8;">rm -rf /var/tmp/kinsing  </span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>建议：</p><p>1、 重新安装redis（千万不要赋予root权限）服务，根据客户实际需要对特定IP开放端口（利用防火墙设置，尤其是必须对外（公网）提供服务的情况下），如果只是本机使用，绑定127.0.0.1:6379 ，增加认证口令。</p><p>2、 清除定时任务 如：crontab -u redis -r</p><h2 id="删除linux下的异常定时任务" tabindex="-1">删除Linux下的异常定时任务 <a class="header-anchor" href="#删除linux下的异常定时任务" aria-label="Permalink to &quot;删除Linux下的异常定时任务&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">crontab -l //查看定时任务</span></span>
<span class="line"><span style="color:#babed8;">crontab -r //表示删除用户的定时任务，当执行此命令后，所有用户下面的定时任务会被删除</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="删除文件" tabindex="-1">删除文件 <a class="header-anchor" href="#删除文件" aria-label="Permalink to &quot;删除文件&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">rm -rf kdevtmpfsi </span></span>
<span class="line"><span style="color:#babed8;">rm -rf /var/tmp/kinsing  </span></span>
<span class="line"><span style="color:#babed8;">最后自己可以再检查一下是否还有kdevtmpfsi的相关文件，有的话就继续删除</span></span>
<span class="line"><span style="color:#babed8;">find / -name kdevtmpfsi</span></span>
<span class="line"><span style="color:#babed8;">find / -name kinsing</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="这一步很重要-很多博主没写" tabindex="-1">这一步很重要，很多博主没写： <a class="header-anchor" href="#这一步很重要-很多博主没写" aria-label="Permalink to &quot;这一步很重要，很多博主没写：&quot;">​</a></h2><p>这个病毒会在你的主机密钥中加入他们的公钥，这是他们留了后门的钥匙，可以免密登录你的电脑</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">//打开文件后删除不认识的公钥</span></span>
<span class="line"><span style="color:#babed8;">vim ~/.ssh/authorized_keys</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="因为病毒是依赖于容器生存的-于是我便将容器停止掉-通过docker-logs-实时查看容器最后10条日志" tabindex="-1">因为病毒是依赖于容器生存的，于是我便将容器停止掉，通过docker logs 实时查看容器最后10条日志： <a class="header-anchor" href="#因为病毒是依赖于容器生存的-于是我便将容器停止掉-通过docker-logs-实时查看容器最后10条日志" aria-label="Permalink to &quot;因为病毒是依赖于容器生存的，于是我便将容器停止掉，通过docker logs 实时查看容器最后10条日志：&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">docker logs -f -t --tail 10 &lt;容器id/容器名称&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,16),p=[t];function o(r,i,c,d,b,h){return s(),e("div",null,p)}const f=a(l,[["render",o]]);export{k as __pageData,f as default};
