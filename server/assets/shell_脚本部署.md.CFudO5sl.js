import{_ as s,c as a,o as i,a5 as n}from"./chunks/framework.CJNr4pYi.js";const g=JSON.parse('{"title":"脚本部署","description":"","frontmatter":{},"headers":[],"relativePath":"shell/脚本部署.md","filePath":"shell/脚本部署.md","lastUpdated":1728609427000}'),e={name:"shell/脚本部署.md"},t=n(`<h1 id="脚本部署" tabindex="-1">脚本部署 <a class="header-anchor" href="#脚本部署" aria-label="Permalink to &quot;脚本部署&quot;">​</a></h1><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># echo -n &quot;请输入密码: &quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># read -s password</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># echo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># echo &quot;你输入的密码是: $password&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># scp -r /d/www/xingli/demo/dist/ root@192.168.1.200:/var/www/demo/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./dist/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root@192.168.1.200:/var/www/demo/</span></span></code></pre></div>`,2),l=[t];function p(h,o,r,d,c,k){return i(),a("div",null,l)}const u=s(e,[["render",p]]);export{g as __pageData,u as default};
