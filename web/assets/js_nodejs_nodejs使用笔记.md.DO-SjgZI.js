import{_ as s,c as n,o as a,a5 as e}from"./chunks/framework.x0IMHZ_J.js";const m=JSON.parse('{"title":"NodeJS 使用笔记","description":"","frontmatter":{},"headers":[],"relativePath":"js/nodejs/nodejs使用笔记.md","filePath":"js/nodejs/nodejs使用笔记.md","lastUpdated":1722500431000}'),p={name:"js/nodejs/nodejs使用笔记.md"},t=e(`<h1 id="nodejs-使用笔记" tabindex="-1">NodeJS 使用笔记 <a class="header-anchor" href="#nodejs-使用笔记" aria-label="Permalink to &quot;NodeJS 使用笔记&quot;">​</a></h1><h2 id="安装nodejs-—-linux" tabindex="-1">安装nodejs — linux <a class="header-anchor" href="#安装nodejs-—-linux" aria-label="Permalink to &quot;安装nodejs — linux&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>wget https://nodejs.org/dist/v14.19.2/node-v14.19.2-linux-x64.tar.xz</span></span>
<span class="line"><span>tar xf node-v14.19.2-linux-x64.tar.xz</span></span>
<span class="line"><span># 建立软连接（注意一定要用绝对路径）</span></span>
<span class="line"><span>ln -s /root/node-v14.19.2-linux-x64/bin/node /usr/bin/node</span></span>
<span class="line"><span>ln -s /root/node-v14.19.2-linux-x64/bin/npm /usr/bin/npm</span></span>
<span class="line"><span>ln -s /root/node-v14.19.2-linux-x64/bin/npx /usr/bin/npx</span></span>
<span class="line"><span></span></span>
<span class="line"><span># npm 升级到指定版本</span></span>
<span class="line"><span>npm install npm@8.19.1 -g</span></span></code></pre></div><h2 id="npm-安装-yarn" tabindex="-1">npm 安装 yarn <a class="header-anchor" href="#npm-安装-yarn" aria-label="Permalink to &quot;npm 安装 yarn&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># windows 通过 npm安装yarn</span></span>
<span class="line"><span>npm install -g yarn</span></span>
<span class="line"><span># 查看 yarn 版本</span></span>
<span class="line"><span>yarn --version</span></span></code></pre></div><h2 id="修改全局依赖包下载路径" tabindex="-1">修改全局依赖包下载路径 <a class="header-anchor" href="#修改全局依赖包下载路径" aria-label="Permalink to &quot;修改全局依赖包下载路径&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 默认情况下，我们在执行npm install -g XXXX下载全局包时，这个包的默认存放路径位C:\\Users\\用户名\\AppData\\Roaming\\npm\\node_modules 下，可以通过CMD指令npm root -g查看</span></span>
<span class="line"><span># 修改全局依赖包下载路径</span></span>
<span class="line"><span>npm config set prefix &quot;D:\\nodejs\\node_global&quot; 或 npm config set prefix &quot;D:\\nodejs\\node_modules&quot;</span></span>
<span class="line"><span>npm config set cache &quot;D:\\nodejs\\node_cache&quot;</span></span></code></pre></div><h2 id="npm-镜像" tabindex="-1">npm 镜像 <a class="header-anchor" href="#npm-镜像" aria-label="Permalink to &quot;npm 镜像&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># npm 查询当前配置的镜像</span></span>
<span class="line"><span>npm get registry</span></span>
<span class="line"><span># npm 设置成淘宝镜像</span></span>
<span class="line"><span>npm config set registry http://registry.npm.taobao.org/</span></span>
<span class="line"><span># npm 换成原来镜像</span></span>
<span class="line"><span>npm config set registry https://registry.npmjs.org/</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 安装淘宝 npm 镜像加速</span></span>
<span class="line"><span>npm install -g cnpm --registry=https://registry.npm.taobao.org</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># yarn 查询当前配置镜像</span></span>
<span class="line"><span>yarn config get registry</span></span>
<span class="line"><span># yarn 设置成淘宝镜像</span></span>
<span class="line"><span>yarn config set registry http://registry.npm.taobao.org/</span></span></code></pre></div><h2 id="scss-版本的对应关系" tabindex="-1">Scss--版本的对应关系 <a class="header-anchor" href="#scss-版本的对应关系" aria-label="Permalink to &quot;Scss--版本的对应关系&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Scss--版本的对应关系(sass, sass-loader, dart-sass, node-sass等）</span></span>
<span class="line"><span># 一组可用的组合</span></span>
<span class="line"><span>node: v14.19.0;</span></span>
<span class="line"><span>node-sass: ^4.14.1;</span></span>
<span class="line"><span>sass-loader: ^7.3.1;</span></span></code></pre></div>`,13),i=[t];function l(o,c,d,r,h,g){return a(),n("div",null,i)}const b=s(p,[["render",l]]);export{m as __pageData,b as default};
