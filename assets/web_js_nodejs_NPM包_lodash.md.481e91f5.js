import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const y=JSON.parse('{"title":"lodash 对象深拷贝","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/nodejs/NPM包/lodash.md","lastUpdated":1688520804000}'),l={name:"web/js/nodejs/NPM包/lodash.md"},p=e(`<h1 id="lodash-对象深拷贝" tabindex="-1">lodash 对象深拷贝 <a class="header-anchor" href="#lodash-对象深拷贝" aria-label="Permalink to &quot;lodash 对象深拷贝&quot;">​</a></h1><p><a href="https://www.lodashjs.com/" target="_blank" rel="noreferrer">官网</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">npm nstall lodash</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>Home.vue</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">import _ from &#39;lodash&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">    data(){</span></span>
<span class="line"><span style="color:#babed8;">        return {</span></span>
<span class="line"><span style="color:#babed8;">            addFormObj: {</span></span>
<span class="line"><span style="color:#babed8;">                a: 1,</span></span>
<span class="line"><span style="color:#babed8;">                b: 2</span></span>
<span class="line"><span style="color:#babed8;">            }</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;">    method: {</span></span>
<span class="line"><span style="color:#babed8;">        fn(){</span></span>
<span class="line"><span style="color:#babed8;">            const form = _.cloneDeep(this.addFormObj)</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,5),o=[p];function t(c,d,r,b,i,h){return a(),n("div",null,o)}const m=s(l,[["render",t]]);export{y as __pageData,m as default};
