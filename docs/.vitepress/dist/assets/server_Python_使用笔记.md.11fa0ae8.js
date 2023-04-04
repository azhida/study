import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.92222dd1.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/Python/使用笔记.md","lastUpdated":null}'),l={name:"server/Python/使用笔记.md"},o=e(`<h6 id="不同模块-相同的方法-区分调用-示例" tabindex="-1">不同模块 相同的方法 区分调用 示例 <a class="header-anchor" href="#不同模块-相同的方法-区分调用-示例" aria-label="Permalink to &quot;不同模块 相同的方法 区分调用 示例&quot;">​</a></h6><p>模块A module_A 和 模块B module_B 都存在 方法 fn_1()</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 起别名</span></span>
<span class="line"><span style="color:#A6ACCD;">import module_A as A</span></span>
<span class="line"><span style="color:#A6ACCD;">import module_B as B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 调用 module_A.fn_1()</span></span>
<span class="line"><span style="color:#A6ACCD;">A.fn_1()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 调用 module_B.fn_1()</span></span>
<span class="line"><span style="color:#A6ACCD;">B.fn_1()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),p=[o];function t(c,r,_,i,A,d){return a(),n("div",null,p)}const u=s(l,[["render",t]]);export{m as __pageData,u as default};
