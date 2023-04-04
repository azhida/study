import{_ as e,o as s,c as a,Q as n}from"./chunks/framework.92222dd1.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/VUE/报错记录.md","lastUpdated":null}'),o={name:"web/VUE/报错记录.md"},l=n(`<h2 id="问题-error-rule-can-only-have-one-resource-source-provided-resource-and-test-include-exclude" tabindex="-1">问题：Error: Rule can only have one resource source (provided resource and test + include + exclude) <a class="header-anchor" href="#问题-error-rule-can-only-have-one-resource-source-provided-resource-and-test-include-exclude" aria-label="Permalink to &quot;问题：Error: Rule can only have one resource source (provided resource and test + include + exclude)&quot;">​</a></h2><p>原因分析：<br> package.json中webpack版本冲突问题。</p><p>解决方案：<br> 删除webpack，重新装以前的版本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm uninstall webpack</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install webpack@^4.0.0 --save-dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="syntax-error-typeerror-this-getoptions-is-not-a-function" tabindex="-1">Syntax Error: TypeError: this.getOptions is not a function <a class="header-anchor" href="#syntax-error-typeerror-this-getoptions-is-not-a-function" aria-label="Permalink to &quot;Syntax Error: TypeError: this.getOptions is not a function&quot;">​</a></h2><blockquote><p>说明：scss-loader 版本太高，卸载安装低版本即可</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm uninstall sass-loader</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install sass-loader@7.3.1 --save-dev</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i -D sass</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>也可能报错：<br> Syntax Error: Error: Node Sass version 7.0.1 is incompatible with ^4.0.0</p></blockquote><h2 id="uncaught-typeerror-marked-is-not-a-function" tabindex="-1">Uncaught TypeError: marked is not a function <a class="header-anchor" href="#uncaught-typeerror-marked-is-not-a-function" aria-label="Permalink to &quot;Uncaught TypeError: marked is not a function&quot;">​</a></h2><p>解决：回退到版本3.0.8</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm uninstall marked</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install marked@3.0.8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="vue-无法加载文件-d-compilers-nodejs-node-global-vue-ps1-因为在此系统上禁止运行脚本。" tabindex="-1">vue : 无法加载文件 D:\\compilers\\nodeJS\\node_global\\vue.ps1，因为在此系统上禁止运行脚本。 <a class="header-anchor" href="#vue-无法加载文件-d-compilers-nodejs-node-global-vue-ps1-因为在此系统上禁止运行脚本。" aria-label="Permalink to &quot;vue : 无法加载文件 D:\\compilers\\nodeJS\\node_global\\vue.ps1，因为在此系统上禁止运行脚本。&quot;">​</a></h2><p>原因：是PowerShell的执行政策阻止了该操作。</p><p>解决：</p><ul><li>使用get-ExecutionPolicy查看执行策略为受阻状态 <ul><li><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ get-ExecutionPolicy</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>Restricted</p></blockquote></li></ul></li><li>然后使用set-ExecutionPolicy这个指令来更改执行策略 <ul><li><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Set-ExecutionPolicy -Scope CurrentUser</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>请为以下参数提供值:<br> ExecutionPolicy:</p></blockquote></li></ul></li><li>此时将执行策略的状态改为：<code>RemoteSigned</code><ul><li><blockquote><p>请为以下参数提供值:<br> ExecutionPolicy: RemoteSigned</p></blockquote></li></ul></li><li>执行策略的状态已经改变了，我们可以使用get-ExecutionPolicy指令再次查看 <ul><li><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">get-ExecutionPolicy</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>RemoteSigned</p></blockquote></li></ul></li><li>操作完成，问题解决！</li></ul>`,15),t=[l];function c(p,r,i,u,d,h){return s(),a("div",null,t)}const C=e(o,[["render",c]]);export{b as __pageData,C as default};
