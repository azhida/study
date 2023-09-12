import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/python/使用笔记.md","lastUpdated":1680584985000}'),l={name:"server/python/使用笔记.md"},p=e(`<h6 id="不同模块-相同的方法-区分调用-示例" tabindex="-1">不同模块 相同的方法 区分调用 示例 <a class="header-anchor" href="#不同模块-相同的方法-区分调用-示例" aria-label="Permalink to &quot;不同模块 相同的方法 区分调用 示例&quot;">​</a></h6><p>模块A module_A 和 模块B module_B 都存在 方法 fn_1()</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 起别名</span></span>
<span class="line"><span style="color:#babed8;">import module_A as A</span></span>
<span class="line"><span style="color:#babed8;">import module_B as B</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 调用 module_A.fn_1()</span></span>
<span class="line"><span style="color:#babed8;">A.fn_1()</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 调用 module_B.fn_1()</span></span>
<span class="line"><span style="color:#babed8;">B.fn_1()</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,3),o=[p];function t(c,r,_,d,i,b){return a(),n("div",null,o)}const h=s(l,[["render",t]]);export{u as __pageData,h as default};
