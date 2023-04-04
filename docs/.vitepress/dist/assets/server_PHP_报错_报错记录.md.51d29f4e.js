import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.92222dd1.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/PHP/报错/报错记录.md","lastUpdated":null}'),l={name:"server/PHP/报错/报错记录.md"},r=n(`<h6 id="php-error-2-error-while-sending-query-packet-pid" tabindex="-1">PHP Error[2]: Error while sending QUERY packet. PID=* <a class="header-anchor" href="#php-error-2-error-while-sending-query-packet-pid" aria-label="Permalink to &quot;PHP Error[2]: Error while sending QUERY packet. PID=*&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">解决：</span></span>
<span class="line"><span style="color:#A6ACCD;">1、修改MySQL配置文件，编辑my.cnf【windows下my.ini】,在[mysqld]段或者mysql的server配置段进行修改</span></span>
<span class="line"><span style="color:#A6ACCD;">vim /etc/my.cnf</span></span>
<span class="line"><span style="color:#A6ACCD;">max_allowed_packet = 50M</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2、命令行修改</span></span>
<span class="line"><span style="color:#A6ACCD;">set global max_allowed_packet = 50*1024*1024</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),p=[r];function t(o,c,i,_,d,C){return a(),e("div",null,p)}const A=s(l,[["render",t]]);export{m as __pageData,A as default};
