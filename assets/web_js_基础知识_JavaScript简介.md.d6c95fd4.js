import{_ as a,o as s,c as t,Q as n}from"./chunks/framework.aaef0e9b.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/基础知识/JavaScript简介.md","lastUpdated":1680597349000}'),l={name:"web/js/基础知识/JavaScript简介.md"},p=n(`<h2 id="javascript-简介" tabindex="-1">JavaScript 简介 <a class="header-anchor" href="#javascript-简介" aria-label="Permalink to &quot;JavaScript 简介&quot;">​</a></h2><p>JavaScript 是 Web 的编程语言。<br> 所有现代的 HTML 页面都使用 JavaScript。<br> JavaScript 非常容易学。<br> JavaScript 是互联网上最流行的脚本语言，这门语言可用于 HTML 和 web，更可广泛用于服务器、PC、笔记本电脑、平板电脑和智能手机等设备。</p><h6 id="javascript-是脚本语言" tabindex="-1">JavaScript 是脚本语言 <a class="header-anchor" href="#javascript-是脚本语言" aria-label="Permalink to &quot;JavaScript 是脚本语言&quot;">​</a></h6><p>JavaScript 是一种轻量级的编程语言。<br> JavaScript 是可插入 HTML 页面的编程代码。<br> JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行。<br> JavaScript 很容易学习。</p><h6 id="javascript-直接写入-html-输出流" tabindex="-1">JavaScript：直接写入 HTML 输出流 <a class="header-anchor" href="#javascript-直接写入-html-输出流" aria-label="Permalink to &quot;JavaScript：直接写入 HTML 输出流&quot;">​</a></h6><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;h1&gt;这是一个标题&lt;/h1&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;p&gt;这是一个段落。&lt;/p&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 注意：只能在 HTML 输出中使用 document.write。如果您在文档加载后使用该方法，会覆盖整个文档。</span></span>
<span class="line"></span></code></pre></div><h6 id="javascript-对事件的反应" tabindex="-1">JavaScript：对事件的反应 <a class="header-anchor" href="#javascript-对事件的反应" aria-label="Permalink to &quot;JavaScript：对事件的反应&quot;">​</a></h6><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">alert(&#39;欢迎!&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">点我!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// alert() 函数在 JavaScript 中并不常用，但它对于代码测试非常方便。</span></span>
<span class="line"></span></code></pre></div><h6 id="javascript-改变-html-内容" tabindex="-1">JavaScript：改变 HTML 内容 <a class="header-anchor" href="#javascript-改变-html-内容" aria-label="Permalink to &quot;JavaScript：改变 HTML 内容&quot;">​</a></h6><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">x</span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">//查找元素</span></span>
<span class="line"><span style="color:#BABED8;">x</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">innerHTML</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello JavaScript</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">//改变内容</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 使用 JavaScript 来处理 HTML 内容是非常强大的功能。</span></span>
<span class="line"></span></code></pre></div><h6 id="javascript-改变-html-图像" tabindex="-1">JavaScript：改变 HTML 图像 <a class="header-anchor" href="#javascript-改变-html-图像" aria-label="Permalink to &quot;JavaScript：改变 HTML 图像&quot;">​</a></h6><ul><li>demo：【<a href="https://azhida.github.io/study/JavaScript/demos/demo-0.html" target="_blank" rel="noreferrer">点亮灯泡</a>】</li></ul>`,12),o=[p];function e(c,r,i,D,y,F){return s(),t("div",null,o)}const v=a(l,[["render",e]]);export{h as __pageData,v as default};
