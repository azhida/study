import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.92222dd1.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/Shell/学习笔记.md","lastUpdated":null}'),e={name:"server/Shell/学习笔记.md"},p=l(`<h6 id="以当前日期时间命名创建一个文件夹" tabindex="-1">以当前日期时间命名创建一个文件夹 <a class="header-anchor" href="#以当前日期时间命名创建一个文件夹" aria-label="Permalink to &quot;以当前日期时间命名创建一个文件夹&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">dirdate=\`date +%Y%m%d\`_\`date +%H%M%S\`</span></span>
<span class="line"><span style="color:#A6ACCD;"># 加个 $ 表示变量</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir $dirdate</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="执行-sh文件-的几种方式" tabindex="-1">执行 *.sh文件 的几种方式 <a class="header-anchor" href="#执行-sh文件-的几种方式" aria-label="Permalink to &quot;执行 *.sh文件 的几种方式&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sh test.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">./test.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/test.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">. test.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="备份文件夹及其下所有文件" tabindex="-1">备份文件夹及其下所有文件 <a class="header-anchor" href="#备份文件夹及其下所有文件" aria-label="Permalink to &quot;备份文件夹及其下所有文件&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 命名文件夹 -- 创建日期时间文件夹，注：日期格式化 要严格按照该写法，否则可能不是你想要的结果</span></span>
<span class="line"><span style="color:#A6ACCD;">dirdate=\`date +%Y%m%d\`_\`date +%H%M%S\`</span></span>
<span class="line"><span style="color:#A6ACCD;"># $dirdate 为变量</span></span>
<span class="line"><span style="color:#A6ACCD;">bak_dir=Shell_$dirdate</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir $bak_dir</span></span>
<span class="line"><span style="color:#A6ACCD;">echo &#39;创建了文件夹 &#39; $bak_dir</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 复制 Shell文件夹下所有子文件夹和文件到 新文件夹 $bak_dir 下 </span></span>
<span class="line"><span style="color:#A6ACCD;">cp -r Shell/* $dirdate</span></span>
<span class="line"><span style="color:#A6ACCD;">echo &#39;复制 Shell文件夹下所有文件到 新文件夹 &#39; $bak_dir &#39; 下&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="读取配置文件信息并判断" tabindex="-1">读取配置文件信息并判断 <a class="header-anchor" href="#读取配置文件信息并判断" aria-label="Permalink to &quot;读取配置文件信息并判断&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#!/bin/sh</span></span>
<span class="line"><span style="color:#A6ACCD;">eval \`cat ./.env\`</span></span>
<span class="line"><span style="color:#A6ACCD;">echo &quot;$APP_ENV&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">if [ &quot;$APP_ENV&quot; = &#39;local1&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  then echo &#39;APP_ENV == local1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">elif [ &quot;$APP_ENV&quot; = &#39;local&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  then echo &#39;APP_ENV == local&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">else</span></span>
<span class="line"><span style="color:#A6ACCD;">  echo &#39;不相等&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">fi</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#!/bin/sh</span></span>
<span class="line"><span style="color:#A6ACCD;">eval \`cat ./.env\`</span></span>
<span class="line"><span style="color:#A6ACCD;">echo &quot;$APP_ENV&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">if [ &quot;$APP_ENV&quot; = &#39;local1&#39; ];then</span></span>
<span class="line"><span style="color:#A6ACCD;">  echo &#39;APP_ENV == local1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">elif [ &quot;$APP_ENV&quot; = &#39;local&#39; ];then</span></span>
<span class="line"><span style="color:#A6ACCD;">  echo &#39;APP_ENV == local&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">else</span></span>
<span class="line"><span style="color:#A6ACCD;">  echo &#39;不相等&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">fi</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,9),o=[p];function t(c,i,r,A,C,d){return a(),n("div",null,o)}const _=s(e,[["render",t]]);export{y as __pageData,_ as default};
