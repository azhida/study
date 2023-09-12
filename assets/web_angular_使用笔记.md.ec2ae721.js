import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.aaef0e9b.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/angular/使用笔记.md","lastUpdated":1693208015000}'),p={name:"web/angular/使用笔记.md"},o=l(`<h2 id="angular-使用笔记" tabindex="-1">Angular 使用笔记 <a class="header-anchor" href="#angular-使用笔记" aria-label="Permalink to &quot;Angular 使用笔记&quot;">​</a></h2><h3 id="安装启动" tabindex="-1">安装启动 <a class="header-anchor" href="#安装启动" aria-label="Permalink to &quot;安装启动&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装脚手架: </span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">i</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">@angular/cli</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装成功之后 可以通过ng v 查看Angular版本</span></span>
<span class="line"><span style="color:#FFCB6B;">ng</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 生成项目包</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ng new 包名</span></span>
<span class="line"><span style="color:#FFCB6B;">ng</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">new</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">ng-demo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 启动项目: 在项目目录下 , 即 ng-demo 目录下执行</span></span>
<span class="line"><span style="color:#FFCB6B;">ng</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">serve</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--open</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 简化: </span></span>
<span class="line"><span style="color:#FFCB6B;">ng</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">s</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-o</span></span>
<span class="line"></span></code></pre></div><h3 id="制作组件" tabindex="-1">制作组件 <a class="header-anchor" href="#制作组件" aria-label="Permalink to &quot;制作组件&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 生成组件的命令</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ng generate component 组件名 --module=app</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 简化：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ng g c 组件名 --module=app</span></span>
<span class="line"><span style="color:#FFCB6B;">ng</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">generate</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">component</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">myc01</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--module=app</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 简化</span></span>
<span class="line"><span style="color:#FFCB6B;">ng</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">g</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">c</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">myc01</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--module=app</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function t(c,r,i,y,B,E){return a(),n("div",null,e)}const g=s(p,[["render",t]]);export{d as __pageData,g as default};
