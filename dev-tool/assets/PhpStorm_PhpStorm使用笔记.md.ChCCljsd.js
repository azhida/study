import{_ as a,c as s,o as n,a5 as e}from"./chunks/framework.DPGmCwCP.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"PhpStorm/PhpStorm使用笔记.md","filePath":"PhpStorm/PhpStorm使用笔记.md","lastUpdated":1722566592000}'),p={name:"PhpStorm/PhpStorm使用笔记.md"},t=e(`<h6 id="调整字体大小" tabindex="-1">调整字体大小 <a class="header-anchor" href="#调整字体大小" aria-label="Permalink to &quot;调整字体大小&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># File --&gt; Settings --&gt; Keymap --&gt; Editor Actions</span></span>
<span class="line"><span># 找到如下选项，并双击</span></span>
<span class="line"><span>Decrease Font Size</span></span>
<span class="line"><span>Increase Font Size</span></span>
<span class="line"><span># 选择 Add Mouse Shortcut，按住 Ctrl ，鼠标滚轮上下滚动即可</span></span></code></pre></div><h6 id="phpstorm配置git并解决terminal-中文乱码-unicode-编码-的方法" tabindex="-1">phpstorm配置git并解决Terminal 中文乱码（Unicode 编码）的方法 <a class="header-anchor" href="#phpstorm配置git并解决terminal-中文乱码-unicode-编码-的方法" aria-label="Permalink to &quot;phpstorm配置git并解决Terminal 中文乱码（Unicode 编码）的方法&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 一、先在phpstorm上配置git</span></span>
<span class="line"><span># 1、打开 settings 设置界面，选择 Tools 中的 Terminal (File -&gt; settings -&gt; Tools -&gt; Terminal)</span></span>
<span class="line"><span># 2、修改 Shell path 为你的Git bash 安装路径，我的在 D:\\Git\\bin\\bash.exe</span></span>
<span class="line"><span># 3、重新打开你的 Terminal 就能看到变成了经常看到的 Git bash 窗口</span></span>
<span class="line"><span># 二、解决中文 Unicode 编码问题</span></span>
<span class="line"><span># 1、修改 Git 的安装目录下的 bash.bashrc 文件，我的目录是：D:\\developer\\Git\\etc，在该文件最后添加以下代码</span></span>
<span class="line"><span># 解决IDEA下的terminal中文Unicode编码问题</span></span>
<span class="line"><span>export LANG=&quot;zh_CN.UTF-8&quot;</span></span>
<span class="line"><span>export LC_ALL=&quot;zh_CN.UTF-8&quot;</span></span>
<span class="line"><span># 2、添加以后重启 IDEA，重新打开 Terminal 查看中文内容，就成功显示中文啦</span></span></code></pre></div><h6 id="退出控制台的编辑模式并保存编辑的内容" tabindex="-1">退出控制台的编辑模式并保存编辑的内容 <a class="header-anchor" href="#退出控制台的编辑模式并保存编辑的内容" aria-label="Permalink to &quot;退出控制台的编辑模式并保存编辑的内容&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 退出编辑模式</span></span>
<span class="line"><span>Ctrl+C</span></span>
<span class="line"><span># 保存内容</span></span>
<span class="line"><span>:wq</span></span></code></pre></div><h2 id="c常用快捷键" tabindex="-1">c常用快捷键 <a class="header-anchor" href="#c常用快捷键" aria-label="Permalink to &quot;c常用快捷键&quot;">​</a></h2><ul><li><code>win + L</code> ：跳转 指定行【max 下】</li><li><code>Ctrl + G</code> ：跳转 指定行【windows 下】</li></ul><h2 id="phpstorm设置编码格式-默认-utf-8" tabindex="-1">phpstorm设置编码格式，默认 utf-8 <a class="header-anchor" href="#phpstorm设置编码格式-默认-utf-8" aria-label="Permalink to &quot;phpstorm设置编码格式，默认 utf-8&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>file </span></span>
<span class="line"><span>-&gt; settings </span></span>
<span class="line"><span>-&gt; Editor </span></span>
<span class="line"><span>-&gt; file encodng </span></span>
<span class="line"><span>-&gt; project encding(选择编码格式) </span></span>
<span class="line"><span>-&gt; apply </span></span>
<span class="line"><span>-&gt;OK</span></span></code></pre></div>`,10),i=[t];function l(o,c,r,h,d,m){return n(),s("div",null,i)}const b=a(p,[["render",l]]);export{g as __pageData,b as default};
