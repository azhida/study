import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.aaef0e9b.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/nodejs/nodejs使用笔记.md","lastUpdated":1688520804000}'),p={name:"web/js/nodejs/nodejs使用笔记.md"},l=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 安装nodejs — linux</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">wget https://nodejs.org/dist/v14.19.2/node-v14.19.2-linux-x64.tar.xz</span></span>
<span class="line"><span style="color:#babed8;">tar xf node-v14.19.2-linux-x64.tar.xz</span></span>
<span class="line"><span style="color:#babed8;"># 建立软连接（注意一定要用绝对路径）</span></span>
<span class="line"><span style="color:#babed8;">ln -s /root/node-v14.19.2-linux-x64/bin/node /usr/bin/node</span></span>
<span class="line"><span style="color:#babed8;">ln -s /root/node-v14.19.2-linux-x64/bin/npm /usr/bin/npm</span></span>
<span class="line"><span style="color:#babed8;">ln -s /root/node-v14.19.2-linux-x64/bin/npx /usr/bin/npx</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># npm 升级到指定版本</span></span>
<span class="line"><span style="color:#babed8;">npm install npm@8.19.1 -g</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># windows 通过 npm安装yarn</span></span>
<span class="line"><span style="color:#babed8;">npm install -g yarn</span></span>
<span class="line"><span style="color:#babed8;"># 查看 yarn 版本</span></span>
<span class="line"><span style="color:#babed8;">yarn --version</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 默认情况下，我们在执行npm install -g XXXX下载全局包时，这个包的默认存放路径位C:\\Users\\用户名\\AppData\\Roaming\\npm\\node_modules 下，可以通过CMD指令npm root -g查看</span></span>
<span class="line"><span style="color:#babed8;"># 修改全局依赖包下载路径</span></span>
<span class="line"><span style="color:#babed8;">npm config set prefix &quot;D:\\nodejs\\node_global&quot; 或 npm config set prefix &quot;D:\\nodejs\\node_modules&quot;</span></span>
<span class="line"><span style="color:#babed8;">npm config set cache &quot;D:\\nodejs\\node_cache&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># npm 查询当前配置的镜像</span></span>
<span class="line"><span style="color:#babed8;">npm get registry</span></span>
<span class="line"><span style="color:#babed8;"># npm 设置成淘宝镜像</span></span>
<span class="line"><span style="color:#babed8;">npm config set registry http://registry.npm.taobao.org/</span></span>
<span class="line"><span style="color:#babed8;"># npm 换成原来镜像</span></span>
<span class="line"><span style="color:#babed8;">npm config set registry https://registry.npmjs.org/</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 安装淘宝 npm 镜像加速</span></span>
<span class="line"><span style="color:#babed8;">npm install -g cnpm --registry=https://registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># yarn 查询当前配置镜像</span></span>
<span class="line"><span style="color:#babed8;">yarn config get registry</span></span>
<span class="line"><span style="color:#babed8;"># yarn 设置成淘宝镜像</span></span>
<span class="line"><span style="color:#babed8;">yarn config set registry http://registry.npm.taobao.org/</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># Scss--版本的对应关系(sass, sass-loader, dart-sass, node-sass等）</span></span>
<span class="line"><span style="color:#babed8;"># 一组可用的组合</span></span>
<span class="line"><span style="color:#babed8;">node: v14.19.0;</span></span>
<span class="line"><span style="color:#babed8;">node-sass: ^4.14.1;</span></span>
<span class="line"><span style="color:#babed8;">sass-loader: ^7.3.1;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,7),o=[l];function t(c,i,r,d,b,y){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{m as __pageData,u as default};
