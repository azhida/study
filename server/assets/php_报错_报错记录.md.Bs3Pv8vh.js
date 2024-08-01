import{_ as a,c as s,o as e,a3 as n}from"./chunks/framework.CFZOmcOm.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"php/报错/报错记录.md","filePath":"php/报错/报错记录.md","lastUpdated":1722327281000}'),p={name:"php/报错/报错记录.md"},t=n(`<h6 id="php-error-2-error-while-sending-query-packet-pid" tabindex="-1">PHP Error[2]: Error while sending QUERY packet. PID=* <a class="header-anchor" href="#php-error-2-error-while-sending-query-packet-pid" aria-label="Permalink to &quot;PHP Error[2]: Error while sending QUERY packet. PID=*&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>解决：</span></span>
<span class="line"><span>1、修改MySQL配置文件，编辑my.cnf【windows下my.ini】,在[mysqld]段或者mysql的server配置段进行修改</span></span>
<span class="line"><span>vim /etc/my.cnf</span></span>
<span class="line"><span>max_allowed_packet = 50M</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、命令行修改</span></span>
<span class="line"><span>set global max_allowed_packet = 50*1024*1024</span></span></code></pre></div>`,2),r=[t];function i(l,o,c,d,_,h){return e(),s("div",null,r)}const g=a(p,[["render",i]]);export{u as __pageData,g as default};
