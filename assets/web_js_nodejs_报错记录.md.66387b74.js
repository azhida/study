import{_ as a,o as s,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const m=JSON.parse('{"title":"报错记录","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/nodejs/报错记录.md","lastUpdated":1688520804000}'),l={name:"web/js/nodejs/报错记录.md"},t=e(`<h1 id="报错记录" tabindex="-1">报错记录 <a class="header-anchor" href="#报错记录" aria-label="Permalink to &quot;报错记录&quot;">​</a></h1><h2 id="sass" tabindex="-1">sass <a class="header-anchor" href="#sass" aria-label="Permalink to &quot;sass&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">Module build failed: Error: Node Sass does not yet support your current environment: Windows 64-bit with Unsupported runtime (93)</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>sass不支持当前的环境，那么在当前环境重新安装一下就好了</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 先卸载：（如果卸载不成功，直接找到node-sass文件夹，删除）</span></span>
<span class="line"><span style="color:#babed8;">npm uninstall --save node-sass </span></span>
<span class="line"><span style="color:#babed8;"># 再安装</span></span>
<span class="line"><span style="color:#babed8;">npm install --save node-sass</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="phantomjs-prebuilt" tabindex="-1">phantomjs-prebuilt <a class="header-anchor" href="#phantomjs-prebuilt" aria-label="Permalink to &quot;phantomjs-prebuilt&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">npm install 报错 phantomjs-prebuilt@2.1.14 install: \`node install.js\`</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>初步诊断为包phantomjs-prebuilt@2.1.14 install: <code>node install.js</code>下载失败<br> 先运行 npm install phantomjs-prebuilt@2.1.14 --ignore-script 可成功</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">npm install phantomjs-prebuilt@2.1.14 --ignore-script</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="nom-install-时报错" tabindex="-1">nom install 时报错 <a class="header-anchor" href="#nom-install-时报错" aria-label="Permalink to &quot;nom install 时报错&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">npm ERR! path D:\\nodejs\\node_cache\\_cacache\\content-v2\\sha1\\0c\\3d\\0beaed8a01c966d9787</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>清除缓存</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">npm cache clean --force’</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,13),p=[t];function o(i,c,r,d,b,h){return s(),n("div",null,p)}const _=a(l,[["render",o]]);export{m as __pageData,_ as default};
