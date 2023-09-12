import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const m=JSON.parse('{"title":"Docker 网络","description":"","frontmatter":{},"headers":[],"relativePath":"server/docker/Docker网络.md","lastUpdated":1680584985000}'),l={name:"server/docker/Docker网络.md"},o=e(`<h1 id="docker-网络" tabindex="-1">Docker 网络 <a class="header-anchor" href="#docker-网络" aria-label="Permalink to &quot;Docker 网络&quot;">​</a></h1><h2 id="创建公共网络" tabindex="-1">创建公共网络 <a class="header-anchor" href="#创建公共网络" aria-label="Permalink to &quot;创建公共网络&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># docker network create 网络名称</span></span>
<span class="line"><span style="color:#babed8;">docker network create network-common</span></span>
<span class="line"><span style="color:#babed8;"># 查看网络</span></span>
<span class="line"><span style="color:#babed8;">docker network ls</span></span>
<span class="line"><span style="color:#babed8;"># 查看网络 - network-common</span></span>
<span class="line"><span style="color:#babed8;">docker network inspect network-common</span></span>
<span class="line"><span style="color:#babed8;"># 清除无用网络</span></span>
<span class="line"><span style="color:#babed8;">docker network prune</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="在-docker-compose-yml-配置使用" tabindex="-1">在 docker-compose.yml 配置使用 <a class="header-anchor" href="#在-docker-compose-yml-配置使用" aria-label="Permalink to &quot;在 docker-compose.yml 配置使用&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">version: &#39;3&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">services:</span></span>
<span class="line"><span style="color:#babed8;">  nginx:</span></span>
<span class="line"><span style="color:#babed8;">    container_name: &quot;nginx&quot;</span></span>
<span class="line"><span style="color:#babed8;">    image: &quot;nginx:alpine&quot;</span></span>
<span class="line"><span style="color:#babed8;">    ports:</span></span>
<span class="line"><span style="color:#babed8;">      - &quot;80:80&quot;</span></span>
<span class="line"><span style="color:#babed8;">      - &quot;443:443&quot;</span></span>
<span class="line"><span style="color:#babed8;">    volumes:</span></span>
<span class="line"><span style="color:#babed8;">      - ./docker/nginx:/etc/nginx/conf.d</span></span>
<span class="line"><span style="color:#babed8;">      - ./public:/var/www/public</span></span>
<span class="line"><span style="color:#babed8;">    environment:</span></span>
<span class="line"><span style="color:#babed8;">      TZ: &quot;Asia/Shanghai&quot;</span></span>
<span class="line"><span style="color:#babed8;">    networks:</span></span>
<span class="line"><span style="color:#babed8;">      network-common:</span></span>
<span class="line"><span style="color:#babed8;">    depends_on:</span></span>
<span class="line"><span style="color:#babed8;">      - php</span></span>
<span class="line"><span style="color:#babed8;">    links:</span></span>
<span class="line"><span style="color:#babed8;">      - php</span></span>
<span class="line"><span style="color:#babed8;">    restart: unless-stopped</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">networks:</span></span>
<span class="line"><span style="color:#babed8;">  network-common:</span></span>
<span class="line"><span style="color:#babed8;">    external: true</span></span>
<span class="line"><span style="color:#babed8;">  othernetwork:</span></span>
<span class="line"><span style="color:#babed8;">    name: &quot;other-network&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,5),p=[o];function c(t,r,i,d,b,y){return a(),n("div",null,p)}const u=s(l,[["render",c]]);export{m as __pageData,u as default};
