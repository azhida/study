import{_ as n,c as s,o as a,a3 as p}from"./chunks/framework.CDwh3-Fg.js";const _=JSON.parse('{"title":"父组件调用子组件方法","description":"","frontmatter":{},"headers":[],"relativePath":"vue/父组件调用子组件的方法.md","filePath":"vue/父组件调用子组件的方法.md","lastUpdated":1722500431000}'),e={name:"vue/父组件调用子组件的方法.md"},l=p(`<h1 id="父组件调用子组件方法" tabindex="-1">父组件调用子组件方法 <a class="header-anchor" href="#父组件调用子组件方法" aria-label="Permalink to &quot;父组件调用子组件方法&quot;">​</a></h1><h2 id="vue2" tabindex="-1">vue2 <a class="header-anchor" href="#vue2" aria-label="Permalink to &quot;vue2&quot;">​</a></h2><h2 id="vue3" tabindex="-1">vue3 <a class="header-anchor" href="#vue3" aria-label="Permalink to &quot;vue3&quot;">​</a></h2><p>Father.vue</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;父组件&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;onClick&quot;&gt;点击 {{ num }}&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;Son ref=&quot;sonRef&quot;&gt;&lt;/Son&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import Son from &quot;./Son.vue&quot;;</span></span>
<span class="line"><span>import {ref} from &quot;vue&quot;;</span></span>
<span class="line"><span>// 要定义和 ref=&quot;sonRef&quot; 同名的响应变量</span></span>
<span class="line"><span>const sonRef = ref()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const num = ref&lt;number&gt;(0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function onClick() {</span></span>
<span class="line"><span>  console.log(&#39;点击了父组件&#39;)</span></span>
<span class="line"><span>  const res = sonRef.value.onClickSon(num)</span></span>
<span class="line"><span>  console.log(&#39;点击了父组件&#39;, res)</span></span>
<span class="line"><span>  num.value = res</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>Son.vue</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;子组件 {{ sonNum }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import {ref} from &quot;vue&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const sonNum = ref&lt;number&gt;(0)</span></span>
<span class="line"><span>function onClickSon(num: any) {</span></span>
<span class="line"><span>  console.log(&#39;触发了子组件的 onClickSon 方法&#39;, num.value)</span></span>
<span class="line"><span>  sonNum.value = num.value + 1</span></span>
<span class="line"><span>  console.log(sonNum.value, &#39;newNum&#39;)</span></span>
<span class="line"><span>  return sonNum.value</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 注意：一定要通过 defineExpose 将子组件的方法 onClickSon 暴露出去，父组件才能调用</span></span>
<span class="line"><span>defineExpose({</span></span>
<span class="line"><span>  onClickSon</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,7),t=[l];function o(i,c,u,r,d,m){return a(),s("div",null,t)}const g=n(e,[["render",o]]);export{_ as __pageData,g as default};
