import{_ as n,c as s,o as a,a5 as p}from"./chunks/framework.CJNr4pYi.js";const u=JSON.parse('{"title":"Docker 网络","description":"","frontmatter":{},"headers":[],"relativePath":"docker/Docker网络.md","filePath":"docker/Docker网络.md","lastUpdated":1722327281000}'),e={name:"docker/Docker网络.md"},o=p(`<h1 id="docker-网络" tabindex="-1">Docker 网络 <a class="header-anchor" href="#docker-网络" aria-label="Permalink to &quot;Docker 网络&quot;">​</a></h1><h2 id="创建公共网络" tabindex="-1">创建公共网络 <a class="header-anchor" href="#创建公共网络" aria-label="Permalink to &quot;创建公共网络&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># docker network create 网络名称</span></span>
<span class="line"><span>docker network create network-common</span></span>
<span class="line"><span># 查看网络</span></span>
<span class="line"><span>docker network ls</span></span>
<span class="line"><span># 查看网络 - network-common</span></span>
<span class="line"><span>docker network inspect network-common</span></span>
<span class="line"><span># 清除无用网络</span></span>
<span class="line"><span>docker network prune</span></span></code></pre></div><h2 id="在-docker-compose-yml-配置使用" tabindex="-1">在 docker-compose.yml 配置使用 <a class="header-anchor" href="#在-docker-compose-yml-配置使用" aria-label="Permalink to &quot;在 docker-compose.yml 配置使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>version: &#39;3&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  nginx:</span></span>
<span class="line"><span>    container_name: &quot;nginx&quot;</span></span>
<span class="line"><span>    image: &quot;nginx:alpine&quot;</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;80:80&quot;</span></span>
<span class="line"><span>      - &quot;443:443&quot;</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - ./docker/nginx:/etc/nginx/conf.d</span></span>
<span class="line"><span>      - ./public:/var/www/public</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      TZ: &quot;Asia/Shanghai&quot;</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      network-common:</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>      - php</span></span>
<span class="line"><span>    links:</span></span>
<span class="line"><span>      - php</span></span>
<span class="line"><span>    restart: unless-stopped</span></span>
<span class="line"><span></span></span>
<span class="line"><span>networks:</span></span>
<span class="line"><span>  network-common:</span></span>
<span class="line"><span>    external: true</span></span>
<span class="line"><span>  othernetwork:</span></span>
<span class="line"><span>    name: &quot;other-network&quot;</span></span></code></pre></div>`,5),l=[o];function c(t,i,r,d,k,h){return a(),s("div",null,l)}const _=n(e,[["render",c]]);export{u as __pageData,_ as default};
