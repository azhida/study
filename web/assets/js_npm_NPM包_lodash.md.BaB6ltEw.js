import{_ as s,c as a,o as n,a5 as p}from"./chunks/framework.x0IMHZ_J.js";const u=JSON.parse('{"title":"lodash 对象深拷贝","description":"","frontmatter":{},"headers":[],"relativePath":"js/npm/NPM包/lodash.md","filePath":"js/npm/NPM包/lodash.md","lastUpdated":1728442974000}'),e={name:"js/npm/NPM包/lodash.md"},l=p(`<h1 id="lodash-对象深拷贝" tabindex="-1">lodash 对象深拷贝 <a class="header-anchor" href="#lodash-对象深拷贝" aria-label="Permalink to &quot;lodash 对象深拷贝&quot;">​</a></h1><p><a href="https://www.lodashjs.com/" target="_blank" rel="noreferrer">官网</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm nstall lodash</span></span></code></pre></div><p>Home.vue</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import _ from &#39;lodash&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    data(){</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            addFormObj: {</span></span>
<span class="line"><span>                a: 1,</span></span>
<span class="line"><span>                b: 2</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    method: {</span></span>
<span class="line"><span>        fn(){</span></span>
<span class="line"><span>            const form = _.cloneDeep(this.addFormObj)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,5),t=[l];function i(o,c,d,r,h,_){return n(),a("div",null,t)}const b=s(e,[["render",i]]);export{u as __pageData,b as default};
