import{_ as s,c as a,o as n,a5 as i}from"./chunks/framework.CJNr4pYi.js";const g=JSON.parse('{"title":"Docker Compose 部署 Vue3 包","description":"","frontmatter":{},"headers":[],"relativePath":"docker/docker-compose/docker-compose+nginx部署vue3.md","filePath":"docker/docker-compose/docker-compose+nginx部署vue3.md","lastUpdated":1746523105000}'),e={name:"docker/docker-compose/docker-compose+nginx部署vue3.md"},p=i(`<h1 id="docker-compose-部署-vue3-包" tabindex="-1">Docker Compose 部署 Vue3 包 <a class="header-anchor" href="#docker-compose-部署-vue3-包" aria-label="Permalink to &quot;Docker Compose 部署 Vue3 包&quot;">​</a></h1><h2 id="vue3-打包" tabindex="-1">vue3 打包 <a class="header-anchor" href="#vue3-打包" aria-label="Permalink to &quot;vue3 打包&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出 ./docker/dist</span></span></code></pre></div><h2 id="docker-docker-compose-yaml" tabindex="-1">./docker/docker-compose.yaml <a class="header-anchor" href="#docker-docker-compose-yaml" aria-label="Permalink to &quot;./docker/docker-compose.yaml&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  nginx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vue3-demo-nginx&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nginx:alpine&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;8080:80&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./nginx/conf.d:/etc/nginx/conf.d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./nginx/log:/var/log/nginx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./dist:/var/www/html</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      TZ</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Asia/Shanghai&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">vue3-demo-network</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">unless-stopped</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  vue3-demo-network</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 网络名称</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    external</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 外部网络：true 不存在则报错，false 不存在则创建 vue3-demo-network</span></span></code></pre></div><h2 id="docker-nginx-conf-d-default-conf" tabindex="-1">./docker/nginx/conf.d/default.conf <a class="header-anchor" href="#docker-nginx-conf-d-default-conf" aria-label="Permalink to &quot;./docker/nginx/conf.d/default.conf&quot;">​</a></h2><div class="language-conf vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>  listen       80;</span></span>
<span class="line"><span>  server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ; 如果是二级目录 /a/</span></span>
<span class="line"><span>  ; location /a {</span></span>
<span class="line"><span>  ;   index index.html;</span></span>
<span class="line"><span>  ;   try_files $uri $uri/ /a/index.html;</span></span>
<span class="line"><span>  ; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  location / {</span></span>
<span class="line"><span>    root   /var/www/html;</span></span>
<span class="line"><span>    index  index.html index.htm;</span></span>
<span class="line"><span>    try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,7),l=[p];function t(h,k,o,d,r,c){return n(),a("div",null,l)}const u=s(e,[["render",t]]);export{g as __pageData,u as default};
