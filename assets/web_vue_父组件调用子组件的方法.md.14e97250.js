import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.aaef0e9b.js";const m=JSON.parse('{"title":"父组件调用子组件方法","description":"","frontmatter":{},"headers":[],"relativePath":"web/vue/父组件调用子组件的方法.md","lastUpdated":1680584985000}'),l={name:"web/vue/父组件调用子组件的方法.md"},p=e(`<h1 id="父组件调用子组件方法" tabindex="-1">父组件调用子组件方法 <a class="header-anchor" href="#父组件调用子组件方法" aria-label="Permalink to &quot;父组件调用子组件方法&quot;">​</a></h1><h2 id="vue2" tabindex="-1">vue2 <a class="header-anchor" href="#vue2" aria-label="Permalink to &quot;vue2&quot;">​</a></h2><h2 id="vue3" tabindex="-1">vue3 <a class="header-anchor" href="#vue3" aria-label="Permalink to &quot;vue3&quot;">​</a></h2><p>Father.vue</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;父组件&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;button @click=&quot;onClick&quot;&gt;点击 {{ num }}&lt;/button&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;Son ref=&quot;sonRef&quot;&gt;&lt;/Son&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#babed8;">import Son from &quot;./Son.vue&quot;;</span></span>
<span class="line"><span style="color:#babed8;">import {ref} from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#babed8;">// 要定义和 ref=&quot;sonRef&quot; 同名的响应变量</span></span>
<span class="line"><span style="color:#babed8;">const sonRef = ref()</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const num = ref&lt;number&gt;(0)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">function onClick() {</span></span>
<span class="line"><span style="color:#babed8;">  console.log(&#39;点击了父组件&#39;)</span></span>
<span class="line"><span style="color:#babed8;">  const res = sonRef.value.onClickSon(num)</span></span>
<span class="line"><span style="color:#babed8;">  console.log(&#39;点击了父组件&#39;, res)</span></span>
<span class="line"><span style="color:#babed8;">  num.value = res</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>Son.vue</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;子组件 {{ sonNum }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#babed8;">import {ref} from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const sonNum = ref&lt;number&gt;(0)</span></span>
<span class="line"><span style="color:#babed8;">function onClickSon(num: any) {</span></span>
<span class="line"><span style="color:#babed8;">  console.log(&#39;触发了子组件的 onClickSon 方法&#39;, num.value)</span></span>
<span class="line"><span style="color:#babed8;">  sonNum.value = num.value + 1</span></span>
<span class="line"><span style="color:#babed8;">  console.log(sonNum.value, &#39;newNum&#39;)</span></span>
<span class="line"><span style="color:#babed8;">  return sonNum.value</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 注意：一定要通过 defineExpose 将子组件的方法 onClickSon 暴露出去，父组件才能调用</span></span>
<span class="line"><span style="color:#babed8;">defineExpose({</span></span>
<span class="line"><span style="color:#babed8;">  onClickSon</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,7),o=[p];function t(c,r,i,b,d,u){return n(),a("div",null,o)}const _=s(l,[["render",t]]);export{m as __pageData,_ as default};
