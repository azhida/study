import{_ as a,c as s,o as n,a3 as p}from"./chunks/framework.CFZOmcOm.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"shell/学习笔记.md","filePath":"shell/学习笔记.md","lastUpdated":1722327281000}'),e={name:"shell/学习笔记.md"},l=p(`<h6 id="以当前日期时间命名创建一个文件夹" tabindex="-1">以当前日期时间命名创建一个文件夹 <a class="header-anchor" href="#以当前日期时间命名创建一个文件夹" aria-label="Permalink to &quot;以当前日期时间命名创建一个文件夹&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dirdate=\`date +%Y%m%d\`_\`date +%H%M%S\`</span></span>
<span class="line"><span># 加个 $ 表示变量</span></span>
<span class="line"><span>mkdir $dirdate</span></span></code></pre></div><h6 id="执行-sh文件-的几种方式" tabindex="-1">执行 *.sh文件 的几种方式 <a class="header-anchor" href="#执行-sh文件-的几种方式" aria-label="Permalink to &quot;执行 *.sh文件 的几种方式&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sh test.sh</span></span>
<span class="line"><span>./test.sh</span></span>
<span class="line"><span>/etc/test.sh</span></span>
<span class="line"><span>. test.sh</span></span></code></pre></div><h6 id="备份文件夹及其下所有文件" tabindex="-1">备份文件夹及其下所有文件 <a class="header-anchor" href="#备份文件夹及其下所有文件" aria-label="Permalink to &quot;备份文件夹及其下所有文件&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 命名文件夹 -- 创建日期时间文件夹，注：日期格式化 要严格按照该写法，否则可能不是你想要的结果</span></span>
<span class="line"><span>dirdate=\`date +%Y%m%d\`_\`date +%H%M%S\`</span></span>
<span class="line"><span># $dirdate 为变量</span></span>
<span class="line"><span>bak_dir=Shell_$dirdate</span></span>
<span class="line"><span>mkdir $bak_dir</span></span>
<span class="line"><span>echo &#39;创建了文件夹 &#39; $bak_dir</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 复制 Shell文件夹下所有子文件夹和文件到 新文件夹 $bak_dir 下 </span></span>
<span class="line"><span>cp -r Shell/* $dirdate</span></span>
<span class="line"><span>echo &#39;复制 Shell文件夹下所有文件到 新文件夹 &#39; $bak_dir &#39; 下&#39;</span></span></code></pre></div><h6 id="读取配置文件信息并判断" tabindex="-1">读取配置文件信息并判断 <a class="header-anchor" href="#读取配置文件信息并判断" aria-label="Permalink to &quot;读取配置文件信息并判断&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>eval \`cat ./.env\`</span></span>
<span class="line"><span>echo &quot;$APP_ENV&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ &quot;$APP_ENV&quot; = &#39;local1&#39; ]</span></span>
<span class="line"><span>  then echo &#39;APP_ENV == local1&#39;</span></span>
<span class="line"><span>elif [ &quot;$APP_ENV&quot; = &#39;local&#39; ]</span></span>
<span class="line"><span>  then echo &#39;APP_ENV == local&#39;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>  echo &#39;不相等&#39;</span></span>
<span class="line"><span>fi</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>eval \`cat ./.env\`</span></span>
<span class="line"><span>echo &quot;$APP_ENV&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ &quot;$APP_ENV&quot; = &#39;local1&#39; ];then</span></span>
<span class="line"><span>  echo &#39;APP_ENV == local1&#39;</span></span>
<span class="line"><span>elif [ &quot;$APP_ENV&quot; = &#39;local&#39; ];then</span></span>
<span class="line"><span>  echo &#39;APP_ENV == local&#39;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>  echo &#39;不相等&#39;</span></span>
<span class="line"><span>fi</span></span></code></pre></div>`,9),t=[l];function i(c,o,d,h,r,u){return n(),s("div",null,t)}const g=a(e,[["render",i]]);export{b as __pageData,g as default};
