import{_ as a,o as s,c as e,Q as o}from"./chunks/framework.aaef0e9b.js";const B=JSON.parse('{"title":"GPT4Free","description":"","frontmatter":{},"headers":[],"relativePath":"other/GPT/GPT4Free.md","lastUpdated":1707791131000}'),n={name:"other/GPT/GPT4Free.md"},l=o(`<h1 id="gpt4free" tabindex="-1">GPT4Free <a class="header-anchor" href="#gpt4free" aria-label="Permalink to &quot;GPT4Free&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">hlohaus789/g4f</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">8080</span><span style="color:#C3E88D;">:8080</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1337</span><span style="color:#C3E88D;">:1337</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">7900</span><span style="color:#C3E88D;">:7900</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--shm-size=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2g</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">hlohaus789/g4f:latest</span></span>
<span class="line"></span></code></pre></div><h2 id="访问" tabindex="-1">访问 <a class="header-anchor" href="#访问" aria-label="Permalink to &quot;访问&quot;">​</a></h2><p><code>http://localhost:8080</code></p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><p><a href="https://mp.weixin.qq.com/s/lEkjvrTeAsDaBfz-fjXnbg" target="_blank" rel="noreferrer">52.2k star! 自己部署gpt4free, 免费使用各种GPT</a></p>`,7),t=[l];function p(r,c,h,i,d,y){return s(),e("div",null,t)}const _=a(n,[["render",p]]);export{B as __pageData,_ as default};