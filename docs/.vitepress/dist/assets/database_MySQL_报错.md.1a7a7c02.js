import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.92222dd1.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"database/MySQL/报错.md","lastUpdated":null}'),t={name:"database/MySQL/报错.md"},l=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># MySQL8 NDB集群 执行SQL</span></span>
<span class="line"><span style="color:#A6ACCD;">ALTER TABLE \`calerie\`.\`orders\` DROP COLUMN \`aaa\`;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 报错信息</span></span>
<span class="line"><span style="color:#A6ACCD;">Can&#39;t create destination table for copying alter table</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 解决办法：将 MySQL配置参数 MaxNoOfAttributes 调大，具体原因说明，待后需完善。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,1),p=[l];function o(c,r,i,_,d,A){return a(),n("div",null,p)}const D=s(t,[["render",o]]);export{y as __pageData,D as default};
