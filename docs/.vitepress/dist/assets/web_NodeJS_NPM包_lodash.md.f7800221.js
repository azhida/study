import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.92222dd1.js";const _=JSON.parse('{"title":"lodash 对象深拷贝","description":"","frontmatter":{},"headers":[],"relativePath":"web/NodeJS/NPM包/lodash.md","lastUpdated":null}'),p={name:"web/NodeJS/NPM包/lodash.md"},e=l(`<h1 id="lodash-对象深拷贝" tabindex="-1">lodash 对象深拷贝 <a class="header-anchor" href="#lodash-对象深拷贝" aria-label="Permalink to &quot;lodash 对象深拷贝&quot;">​</a></h1><p><a href="https://www.lodashjs.com/" target="_blank" rel="noreferrer">官网</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm nstall lodash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Home.vue</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import _ from &#39;lodash&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    data(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">            addFormObj: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                a: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">                b: 2</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    method: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        fn(){</span></span>
<span class="line"><span style="color:#A6ACCD;">            const form = _.cloneDeep(this.addFormObj)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5),o=[e];function t(c,r,i,C,A,d){return a(),n("div",null,o)}const y=s(p,[["render",t]]);export{_ as __pageData,y as default};
