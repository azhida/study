import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.aaef0e9b.js";const C=JSON.parse('{"title":"pnpm 使用笔记","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/nodejs/pnpm使用笔记.md","lastUpdated":1694053122000}'),l={name:"web/js/nodejs/pnpm使用笔记.md"},o=p(`<h1 id="pnpm-使用笔记" tabindex="-1">pnpm 使用笔记 <a class="header-anchor" href="#pnpm-使用笔记" aria-label="Permalink to &quot;pnpm 使用笔记&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">i</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pnpm</span></span>
<span class="line"></span></code></pre></div><h2 id="pnpm-常用命令" tabindex="-1">pnpm 常用命令 <a class="header-anchor" href="#pnpm-常用命令" aria-label="Permalink to &quot;pnpm 常用命令&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 升级</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看源</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">get</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">registry</span><span style="color:#BABED8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置源</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">set</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">registry</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://registry.npm.taobao.org/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置pnpm全局安装路径</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">set</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">global-dir</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">E:\\Env\\Pnpm\\global</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置pnpm全局bin文件安装路径</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">set</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">global-bin-dir</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">E:\\Env\\Pnpm\\global-bin</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置pnpm cache路径</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">set</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">cache-dir</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">E:\\Env\\Pnpm\\cache</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置pnpm state路径</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">set</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">state-dir</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">E:\\Env\\Pnpm\\state</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置pnpm store路径</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">set</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">state-dir</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">E:\\Env\\Pnpm\\store</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 下载安装依赖包(XXX)</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">XXX</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">i</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">XXX</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># -S  默认写入dependencies</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">XXX</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-S</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># -D devDependencies</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-D</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 全局安装</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 移除包(XXX)</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">remove</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">XXX</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 移除全局包(XXX)</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">remove</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">XXX</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--global</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 更新所有依赖项</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">up</span><span style="color:#BABED8;">                </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 更新包(XXX)</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">upgrade</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">XXX</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 更新全局包(XXX)</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">upgrade</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">XXX</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--global</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function t(c,r,y,B,i,E){return n(),a("div",null,e)}const m=s(l,[["render",t]]);export{C as __pageData,m as default};
