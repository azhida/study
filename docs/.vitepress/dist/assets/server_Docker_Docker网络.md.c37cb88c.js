import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.92222dd1.js";const y=JSON.parse('{"title":"Docker 网络","description":"","frontmatter":{},"headers":[],"relativePath":"server/Docker/Docker网络.md","lastUpdated":null}'),l={name:"server/Docker/Docker网络.md"},o=e(`<h1 id="docker-网络" tabindex="-1">Docker 网络 <a class="header-anchor" href="#docker-网络" aria-label="Permalink to &quot;Docker 网络&quot;">​</a></h1><h2 id="创建公共网络" tabindex="-1">创建公共网络 <a class="header-anchor" href="#创建公共网络" aria-label="Permalink to &quot;创建公共网络&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># docker network create 网络名称</span></span>
<span class="line"><span style="color:#A6ACCD;">docker network create network-common</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看网络</span></span>
<span class="line"><span style="color:#A6ACCD;">docker network ls</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看网络 - network-common</span></span>
<span class="line"><span style="color:#A6ACCD;">docker network inspect network-common</span></span>
<span class="line"><span style="color:#A6ACCD;"># 清除无用网络</span></span>
<span class="line"><span style="color:#A6ACCD;">docker network prune</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="在-docker-compose-yml-配置使用" tabindex="-1">在 docker-compose.yml 配置使用 <a class="header-anchor" href="#在-docker-compose-yml-配置使用" aria-label="Permalink to &quot;在 docker-compose.yml 配置使用&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">version: &#39;3&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">services:</span></span>
<span class="line"><span style="color:#A6ACCD;">  nginx:</span></span>
<span class="line"><span style="color:#A6ACCD;">    container_name: &quot;nginx&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    image: &quot;nginx:alpine&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ports:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &quot;80:80&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &quot;443:443&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - ./docker/nginx:/etc/nginx/conf.d</span></span>
<span class="line"><span style="color:#A6ACCD;">      - ./public:/var/www/public</span></span>
<span class="line"><span style="color:#A6ACCD;">    environment:</span></span>
<span class="line"><span style="color:#A6ACCD;">      TZ: &quot;Asia/Shanghai&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    networks:</span></span>
<span class="line"><span style="color:#A6ACCD;">      network-common:</span></span>
<span class="line"><span style="color:#A6ACCD;">    depends_on:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - php</span></span>
<span class="line"><span style="color:#A6ACCD;">    links:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - php</span></span>
<span class="line"><span style="color:#A6ACCD;">    restart: unless-stopped</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">networks:</span></span>
<span class="line"><span style="color:#A6ACCD;">  network-common:</span></span>
<span class="line"><span style="color:#A6ACCD;">    external: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  othernetwork:</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &quot;other-network&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5),p=[o];function c(t,r,i,C,A,d){return n(),a("div",null,p)}const k=s(l,[["render",c]]);export{y as __pageData,k as default};
