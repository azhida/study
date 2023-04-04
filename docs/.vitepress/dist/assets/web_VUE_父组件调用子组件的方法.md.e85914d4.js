import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.92222dd1.js";const D=JSON.parse('{"title":"父组件调用子组件方法","description":"","frontmatter":{},"headers":[],"relativePath":"web/VUE/父组件调用子组件的方法.md","lastUpdated":null}'),e={name:"web/VUE/父组件调用子组件的方法.md"},p=l(`<h1 id="父组件调用子组件方法" tabindex="-1">父组件调用子组件方法 <a class="header-anchor" href="#父组件调用子组件方法" aria-label="Permalink to &quot;父组件调用子组件方法&quot;">​</a></h1><h2 id="vue2" tabindex="-1">vue2 <a class="header-anchor" href="#vue2" aria-label="Permalink to &quot;vue2&quot;">​</a></h2><h2 id="vue3" tabindex="-1">vue3 <a class="header-anchor" href="#vue3" aria-label="Permalink to &quot;vue3&quot;">​</a></h2><p>Father.vue</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;父组件&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;button @click=&quot;onClick&quot;&gt;点击 {{ num }}&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;Son ref=&quot;sonRef&quot;&gt;&lt;/Son&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Son from &quot;./Son.vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import {ref} from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 要定义和 ref=&quot;sonRef&quot; 同名的响应变量</span></span>
<span class="line"><span style="color:#A6ACCD;">const sonRef = ref()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const num = ref&lt;number&gt;(0)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function onClick() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;点击了父组件&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const res = sonRef.value.onClickSon(num)</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;点击了父组件&#39;, res)</span></span>
<span class="line"><span style="color:#A6ACCD;">  num.value = res</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Son.vue</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;子组件 {{ sonNum }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import {ref} from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const sonNum = ref&lt;number&gt;(0)</span></span>
<span class="line"><span style="color:#A6ACCD;">function onClickSon(num: any) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;触发了子组件的 onClickSon 方法&#39;, num.value)</span></span>
<span class="line"><span style="color:#A6ACCD;">  sonNum.value = num.value + 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(sonNum.value, &#39;newNum&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  return sonNum.value</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 注意：一定要通过 defineExpose 将子组件的方法 onClickSon 暴露出去，父组件才能调用</span></span>
<span class="line"><span style="color:#A6ACCD;">defineExpose({</span></span>
<span class="line"><span style="color:#A6ACCD;">  onClickSon</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7),o=[p];function t(c,r,i,C,A,u){return n(),a("div",null,o)}const m=s(e,[["render",t]]);export{D as __pageData,m as default};
