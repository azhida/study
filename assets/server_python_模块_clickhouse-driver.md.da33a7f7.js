import{_ as s,o as a,c as e,Q as l}from"./chunks/framework.aaef0e9b.js";const _=JSON.parse('{"title":"clickhouse-driver","description":"","frontmatter":{},"headers":[],"relativePath":"server/python/模块/clickhouse-driver.md","lastUpdated":1680584985000}'),n={name:"server/python/模块/clickhouse-driver.md"},c=l(`<h1 id="clickhouse-driver" tabindex="-1">clickhouse-driver <a class="header-anchor" href="#clickhouse-driver" aria-label="Permalink to &quot;clickhouse-driver&quot;">​</a></h1><ul><li>安装</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">pip install clickhouse-driver</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>使用</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># -*- coding: utf-8 -*-</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">from clickhouse_driver import Client</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">client = Client(host=&#39;127.0.0.1&#39;,port=&#39;9000&#39;,user=clickhouse_user ,password=clickhouse_pwd)</span></span>
<span class="line"><span style="color:#babed8;">sql = &#39;SHOW DATABASES&#39;</span></span>
<span class="line"><span style="color:#babed8;">res = client.execute(sql)</span></span>
<span class="line"><span style="color:#babed8;">print(res)</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><ul><li>9000 端口拒绝访问，请自行排序</li></ul>`,7),o=[c];function t(i,p,r,d,u,h){return a(),e("div",null,o)}const k=s(n,[["render",t]]);export{_ as __pageData,k as default};
