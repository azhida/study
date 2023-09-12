import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.aaef0e9b.js";const d=JSON.parse('{"title":"Ant Design Pro","description":"","frontmatter":{},"headers":[],"relativePath":"web/css/UI库/Ant Design Pro.md","lastUpdated":1685956830000}'),p={name:"web/css/UI库/Ant Design Pro.md"},o=l(`<h1 id="ant-design-pro" tabindex="-1">Ant Design Pro <a class="header-anchor" href="#ant-design-pro" aria-label="Permalink to &quot;Ant Design Pro&quot;">​</a></h1><p>开箱即用的中台前端/设计解决方案</p><h2 id="官网" tabindex="-1">官网 <a class="header-anchor" href="#官网" aria-label="Permalink to &quot;官网&quot;">​</a></h2><p><a href="https://pro.ant.design/zh-CN/" target="_blank" rel="noreferrer">Ant Design Pro</a></p><h2 id="修改默认语言为中文" tabindex="-1">修改默认语言为中文 <a class="header-anchor" href="#修改默认语言为中文" aria-label="Permalink to &quot;修改默认语言为中文&quot;">​</a></h2><p>/src/locales/index.js</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// default lang</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> enUS </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./lang/en-US</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 新增</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> zhCN </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./lang/zh-CN</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 更新 en-US 为 zh-CN</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// export const defaultLang = &#39;en-US&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> defaultLang </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zh-CN</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> messages </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">en-US</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">...</span><span style="color:#BABED8;">enUS</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// 新增</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">zh-CN</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">...</span><span style="color:#BABED8;">zhCN</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function t(c,r,i,D,y,F){return n(),a("div",null,e)}const E=s(p,[["render",t]]);export{d as __pageData,E as default};
