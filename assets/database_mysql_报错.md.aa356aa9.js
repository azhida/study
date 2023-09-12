import{_ as a,o as s,c as e,Q as n}from"./chunks/framework.aaef0e9b.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"database/mysql/报错.md","lastUpdated":1680584985000}'),t={name:"database/mysql/报错.md"},l=n(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># MySQL8 NDB集群 执行SQL</span></span>
<span class="line"><span style="color:#babed8;">ALTER TABLE \`calerie\`.\`orders\` DROP COLUMN \`aaa\`;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 报错信息</span></span>
<span class="line"><span style="color:#babed8;">Can&#39;t create destination table for copying alter table</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 解决办法：将 MySQL配置参数 MaxNoOfAttributes 调大，具体原因说明，待后需完善。</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,1),p=[l];function o(c,r,i,d,_,b){return s(),e("div",null,p)}const f=a(t,[["render",o]]);export{m as __pageData,f as default};
