import{_ as a,o as e,c as s,Q as n}from"./chunks/framework.aaef0e9b.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/php/报错/报错记录.md","lastUpdated":1680584985000}'),p={name:"server/php/报错/报错记录.md"},r=n(`<h6 id="php-error-2-error-while-sending-query-packet-pid" tabindex="-1">PHP Error[2]: Error while sending QUERY packet. PID=* <a class="header-anchor" href="#php-error-2-error-while-sending-query-packet-pid" aria-label="Permalink to &quot;PHP Error[2]: Error while sending QUERY packet. PID=*&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">解决：</span></span>
<span class="line"><span style="color:#babed8;">1、修改MySQL配置文件，编辑my.cnf【windows下my.ini】,在[mysqld]段或者mysql的server配置段进行修改</span></span>
<span class="line"><span style="color:#babed8;">vim /etc/my.cnf</span></span>
<span class="line"><span style="color:#babed8;">max_allowed_packet = 50M</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">2、命令行修改</span></span>
<span class="line"><span style="color:#babed8;">set global max_allowed_packet = 50*1024*1024</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,2),l=[r];function t(o,c,i,d,_,b){return e(),s("div",null,l)}const y=a(p,[["render",t]]);export{m as __pageData,y as default};
