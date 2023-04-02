import{_ as s,o as a,c as n,N as l}from"./chunks/framework.34eade80.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/angular/使用笔记.md"}'),e={name:"web/angular/使用笔记.md"},p=l(`<h2 id="angular-使用笔记" tabindex="-1">Angular 使用笔记 <a class="header-anchor" href="#angular-使用笔记" aria-label="Permalink to &quot;Angular 使用笔记&quot;">​</a></h2><h3 id="安装启动" tabindex="-1">安装启动 <a class="header-anchor" href="#安装启动" aria-label="Permalink to &quot;安装启动&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 安装脚手架: </span></span>
<span class="line"><span style="color:#A6ACCD;">npm i -g @angular/cli --force</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 安装成功之后 可以通过ng v 查看Angular版本</span></span>
<span class="line"><span style="color:#A6ACCD;">ng v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 生成项目包</span></span>
<span class="line"><span style="color:#A6ACCD;"># ng new 包名</span></span>
<span class="line"><span style="color:#A6ACCD;">ng new ng-demo</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 启动项目: 在项目目录下 , 即 ng-demo 目录下执行</span></span>
<span class="line"><span style="color:#A6ACCD;">ng serve --open</span></span>
<span class="line"><span style="color:#A6ACCD;"># 简化: </span></span>
<span class="line"><span style="color:#A6ACCD;">ng s -o</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="制作组件" tabindex="-1">制作组件 <a class="header-anchor" href="#制作组件" aria-label="Permalink to &quot;制作组件&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 生成组件的命令</span></span>
<span class="line"><span style="color:#A6ACCD;"># ng generate component 组件名 --module=app</span></span>
<span class="line"><span style="color:#A6ACCD;"># 简化：</span></span>
<span class="line"><span style="color:#A6ACCD;"># ng g c 组件名 --module=app</span></span>
<span class="line"><span style="color:#A6ACCD;">ng generate component myc01 --module=app</span></span>
<span class="line"><span style="color:#A6ACCD;"># 简化</span></span>
<span class="line"><span style="color:#A6ACCD;">ng g c myc01 --module=app</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5),o=[p];function c(t,r,i,A,C,d){return a(),n("div",null,o)}const u=s(e,[["render",c]]);export{_ as __pageData,u as default};
