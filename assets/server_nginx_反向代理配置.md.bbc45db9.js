import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const x=JSON.parse('{"title":"Nginx 反向代理配置","description":"","frontmatter":{},"headers":[],"relativePath":"server/nginx/反向代理配置.md","lastUpdated":1710756561000}'),p={name:"server/nginx/反向代理配置.md"},l=e(`<h1 id="nginx-反向代理配置" tabindex="-1">Nginx 反向代理配置 <a class="header-anchor" href="#nginx-反向代理配置" aria-label="Permalink to &quot;Nginx 反向代理配置&quot;">​</a></h1><ul><li>nginx.conf</li></ul><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">server {</span></span>
<span class="line"><span style="color:#babed8;">  listen       80;</span></span>
<span class="line"><span style="color:#babed8;">  server_name  demo.test;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  location /mock/api/ {</span></span>
<span class="line"><span style="color:#babed8;">    proxy_redirect off;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_pass http://127.0.0.1:9997/mock/api/;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  location /api/ {</span></span>
<span class="line"><span style="color:#babed8;">    proxy_redirect off;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#babed8;">    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#babed8;">    # proxy_pass http://[IP地址]:9996;</span></span>
<span class="line"><span style="color:#babed8;">    # 实际请求不会带上 /api/</span></span>
<span class="line"><span style="color:#babed8;">    proxy_pass http://127.0.0.1:9996/;</span></span>
<span class="line"><span style="color:#babed8;">    # 主动带上 /api/</span></span>
<span class="line"><span style="color:#babed8;">    ; proxy_pass http://127.0.0.1:9996/api/;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  location / {</span></span>
<span class="line"><span style="color:#babed8;">    root   &quot;D:/Code/demo/dist&quot;;</span></span>
<span class="line"><span style="color:#babed8;">    try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,3),o=[l];function t(r,c,d,i,b,_){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{x as __pageData,h as default};
