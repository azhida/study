import{_ as a,c as s,o as n,a5 as e}from"./chunks/framework.CJNr4pYi.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"python/使用笔记.md","filePath":"python/使用笔记.md","lastUpdated":1722327281000}'),p={name:"python/使用笔记.md"},t=e(`<h6 id="不同模块-相同的方法-区分调用-示例" tabindex="-1">不同模块 相同的方法 区分调用 示例 <a class="header-anchor" href="#不同模块-相同的方法-区分调用-示例" aria-label="Permalink to &quot;不同模块 相同的方法 区分调用 示例&quot;">​</a></h6><p>模块A module_A 和 模块B module_B 都存在 方法 fn_1()</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 起别名</span></span>
<span class="line"><span>import module_A as A</span></span>
<span class="line"><span>import module_B as B</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 调用 module_A.fn_1()</span></span>
<span class="line"><span>A.fn_1()</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 调用 module_B.fn_1()</span></span>
<span class="line"><span>B.fn_1()</span></span></code></pre></div>`,3),l=[t];function o(_,i,c,d,r,h){return n(),s("div",null,l)}const f=a(p,[["render",o]]);export{u as __pageData,f as default};
