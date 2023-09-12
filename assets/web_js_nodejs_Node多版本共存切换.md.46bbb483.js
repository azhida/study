import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const y=JSON.parse('{"title":"Node 多版本共存切换","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/nodejs/Node多版本共存切换.md","lastUpdated":1688520804000}'),l={name:"web/js/nodejs/Node多版本共存切换.md"},p=e(`<h1 id="node-多版本共存切换" tabindex="-1">Node 多版本共存切换 <a class="header-anchor" href="#node-多版本共存切换" aria-label="Permalink to &quot;Node 多版本共存切换&quot;">​</a></h1><h2 id="卸载已经安装的-nodejs" tabindex="-1">卸载已经安装的 NodeJS <a class="header-anchor" href="#卸载已经安装的-nodejs" aria-label="Permalink to &quot;卸载已经安装的 NodeJS&quot;">​</a></h2><blockquote><p>一定要卸载干净，否则很大概率使用不了</p><p>我遇到的问题：<br> 删除不干净，导致 nvm 建立软链接失败</p></blockquote><h2 id="安装-nvm" tabindex="-1">安装 NVM <a class="header-anchor" href="#安装-nvm" aria-label="Permalink to &quot;安装 NVM&quot;">​</a></h2><p>下载地址：<a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">https://github.com/coreybutler/nvm-windows/releases</a></p><ul><li>配置路径和下载源</li></ul><p>nvm 安装目录下<br><code>settings.txt</code> 添加如下内容</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">node_mirror: https://npm.taobao.org/mirrors/node/</span></span>
<span class="line"><span style="color:#babed8;">npm_mirror: https://npm.taobao.org/mirrors/npm/</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>安装完成要打开新的 cmd 窗口，否则看不到 nvm 信息</p><h3 id="nvm-常用命令" tabindex="-1">NVM 常用命令 <a class="header-anchor" href="#nvm-常用命令" aria-label="Permalink to &quot;NVM 常用命令&quot;">​</a></h3><p>注意：在使用NVM安装NodeJS前，需要以管理员身份打开命令行窗口。否则，将无法使用nvm use命令切换NPM版本</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 查看 nvm 版本</span></span>
<span class="line"><span style="color:#babed8;">nvm -v</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 查看可安装的NodeJS版本。建议选择LTS中的版本进行安装（LTS，即Long Term Support，长期支持版本）</span></span>
<span class="line"><span style="color:#babed8;">nvm list available</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 在线安装 16.17.1 版本的 NodeJS</span></span>
<span class="line"><span style="color:#babed8;">nvm install 16.17.1</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># </span></span>
<span class="line"><span style="color:#babed8;">nvm use 16.17.1</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">NVM的常用命令如下：</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">nvm list available：查看可在线安装的NodeJS版本</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">nvm ls：列出所有已经在NVM中安装的NodeJS版本。</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">nvm current：显示当前正在使用的Node版本。</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">nvm install xx.xx.xx：在NVM中在线安装指定版本的NodeJS，xx.xx.xx为指定的版本号。</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">nvm uninstall xx.xx.xx：在NVM中卸载指定版本的NodeJS，xx.xx.xx为指定的版本号。</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">nvm use xx.xx.xx：切换NodeJS版本，xx.xx.xx为指定的版本号。</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">nvm version：显示当前所使用的NVM的版本号。</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">其它命令，如nvm arch、nvm on、nvm off、nvm proxy、nvm node_mirror、nvm npm_mirror、nvm root等</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,12),o=[p];function t(r,c,d,i,b,m){return a(),n("div",null,o)}const h=s(l,[["render",t]]);export{y as __pageData,h as default};
