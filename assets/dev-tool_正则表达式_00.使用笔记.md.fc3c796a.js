import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.aaef0e9b.js";const _=JSON.parse('{"title":"正则使用笔记","description":"","frontmatter":{},"headers":[],"relativePath":"dev-tool/正则表达式/00.使用笔记.md","lastUpdated":1680749898000}'),o={name:"dev-tool/正则表达式/00.使用笔记.md"},p=l(`<h1 id="正则使用笔记" tabindex="-1">正则使用笔记 <a class="header-anchor" href="#正则使用笔记" aria-label="Permalink to &quot;正则使用笔记&quot;">​</a></h1><ul><li>匹配 数据和小数点 开头</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">/^\\d*\\./</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123.456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 替换 数据和小数点 开头</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> newStr </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;">\\.</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我是新的</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(newStr)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 我是新的456</span></span>
<span class="line"></span></code></pre></div>`,4),e=[p];function t(c,r,D,i,y,F){return a(),n("div",null,e)}const B=s(o,[["render",t]]);export{_ as __pageData,B as default};
