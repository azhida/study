import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.92222dd1.js";const d=JSON.parse('{"title":"lodash-es","description":"","frontmatter":{},"headers":[],"relativePath":"web/NodeJS/NPM包/lodash-es.md","lastUpdated":null}'),p={name:"web/NodeJS/NPM包/lodash-es.md"},e=l(`<h1 id="lodash-es" tabindex="-1">lodash-es <a class="header-anchor" href="#lodash-es" aria-label="Permalink to &quot;lodash-es&quot;">​</a></h1><p><a href="https://www.lodashjs.com/" target="_blank" rel="noreferrer">官网</a></p><p>Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。</p><p>lodash-es模块使得我们能按需引入lodash对应的工具方法。</p><p>Lodash 通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单。</p><p>Lodash 的模块化方法 非常适用于：</p><ul><li>遍历 array、object 和 string</li><li>对值进行操作和检测</li><li>创建符合功能的函数</li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i --save lodash lodash-es</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><blockquote><p>注意：如果下面碰到方法不能使用的情况，请检查安装lodash版本是否已经支持该版本了。</p></blockquote><h3 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-label="Permalink to &quot;数组&quot;">​</a></h3><ul><li>concat：创建一个新数组，将array与任何数组 或 值连接在一起。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 可对concat设置别名lodashConcat</span></span>
<span class="line"><span style="color:#A6ACCD;">import { concat as lodashConcat } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 用lodash前：要注意两个都是数组类型才能拼接，返回新数组。concat用于简单的数组中是深拷贝，用于复杂的数组是浅拷贝</span></span>
<span class="line"><span style="color:#A6ACCD;">const arr1 = [1, 2, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">const arr2 = [5, 6, 7]</span></span>
<span class="line"><span style="color:#A6ACCD;">const resArr = arr1.concat(arr2)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(resArr) // [1, 2, 3, 5, 6, 7]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 用lodash后：可将array与任何数组 或 值连接在一起，返回新数组。</span></span>
<span class="line"><span style="color:#A6ACCD;">const resultArr = lodashConcat(arr1, arr2, 11)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(resultArr) // [1, 2, 3, 5, 6, 7, 11]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>findIndex：返回检索的数组第一个匹配元素的 索引值（index），否则返回 -1。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { findIndex as lodashFindIndex } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 用lodash前：用原生的数组方法findIndex，只有一种写法检索方式。</span></span>
<span class="line"><span style="color:#A6ACCD;">const users = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  { user: &#39;barney&#39;, active: false },</span></span>
<span class="line"><span style="color:#A6ACCD;">  { user: &#39;fred&#39;, active: false, name: &#39;winne&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">  { user: &#39;pebbles&#39;, active: true }</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">const resIndex = users.findIndex((item) =&gt; item.user === &#39;barney&#39;) // 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 用lodash后：可以传入多种检索方式。</span></span>
<span class="line"><span style="color:#A6ACCD;">const resultIndex1 = lodashFindIndex(users, (item) =&gt; item.user === &#39;barney&#39;) // 0</span></span>
<span class="line"><span style="color:#A6ACCD;">const resultIndex2 = lodashFindIndex(users, { user: &#39;fred&#39;, active: false }) // 1</span></span>
<span class="line"><span style="color:#A6ACCD;">const resultIndex3 = lodashFindIndex(users, [&#39;active&#39;, false]) // 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>说明：与该方法使用类似的还有find方法。find方法返回检索的数组第一个匹配的元素项，否则返回undefined。</p></blockquote><ul><li>intersection：返回一个包含所有传入数组交集元素的新数组。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { intersection } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const arr1 = [2, 1]</span></span>
<span class="line"><span style="color:#A6ACCD;">const arr2 = [4, 2]</span></span>
<span class="line"><span style="color:#A6ACCD;">const arr3 = [1, 2]</span></span>
<span class="line"><span style="color:#A6ACCD;">const arr4 = []</span></span>
<span class="line"><span style="color:#A6ACCD;">const newArr = intersection(arr1, arr2, arr3) // [2]</span></span>
<span class="line"><span style="color:#A6ACCD;">const newArr2 = intersection(arr1, arr2, arr4) // []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>说明：还有一个高级的返回交集的方法 <code>intersectionBy</code> 他可以自定义每一项的比对来返回交集。</p></blockquote><ul><li>union：返回一个新的联合（并集）数组。数组按顺序返回，返回数组的元素是唯一的。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { union } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const arr1 = [2, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">const arr2 = [1, 2]</span></span>
<span class="line"><span style="color:#A6ACCD;">const resArr = union(arr1, arr2) // [2, 3, 1]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>说明：还有一个高级的返回并集的方法unionBy他可以自定义每一项的比对来返回并集。</p></blockquote><ul><li>uniq：返回新的去重后的数组。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { uniq } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const arr1 = [2, 3, 2, 4, 5]</span></span>
<span class="line"><span style="color:#A6ACCD;">const resArr = uniq(arr1) // [2, 3, 4, 5]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>说明：还有一个高级的返回去重后的方法uniqBy他可以自定义每一项的比对来返回去重后的数组。</p></blockquote><ul><li>head：返回数组 array的第一个元素。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { head, last } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const arr = [1, 2, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">const headItem = head(arr) // 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote></blockquote><ul><li>last：返回array中的最后一个元素。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { head, last } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const arr = [1, 2, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">const lastItem = last(arr) // 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="对象" tabindex="-1">对象 <a class="header-anchor" href="#对象" aria-label="Permalink to &quot;对象&quot;">​</a></h3><ul><li>get： <code>get(object, path, [defaultValue])</code> 根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { get } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const object = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: [{ b: { c: 3 } }],</span></span>
<span class="line"><span style="color:#A6ACCD;">  info: { name: &#39;winne&#39;, age: &#39;18&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 传入属性字符串路径方式</span></span>
<span class="line"><span style="color:#A6ACCD;">const res1 = get(object, &#39;a[0].b.c&#39;) // 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 传入属性数组方式</span></span>
<span class="line"><span style="color:#A6ACCD;">const res2 = get(object, [&#39;a&#39;, &#39;0&#39;, &#39;b&#39;, &#39;c&#39;]) // 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 最后一个参数为设置找不到时的默认值</span></span>
<span class="line"><span style="color:#A6ACCD;">const res3 = get(object, &#39;info.like&#39;, &#39;wa&#39;) // &#39;wa&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const res4 = get(object, &#39;a[0].b.c.d.f&#39;) // undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>说明: 用get方法就算路径上获取不到也不会报错了，会返回undefined，此时按需设置一个默认值即可。<br> 不再需要像以前那样使用很多的判断来防止路径获取不到而报错的情况了。</p></blockquote><ul><li>set: <code>set(object, path, value)</code> 设置 object对象中对应 path 属性路径上的值，如果path不存在，则创建。 缺少的索引属性会创建为数组，而缺少的属性会创建为对象。(这个方法会改变 object)</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: [{ id: 1, name: &#39;winne&#39;, age: 18 }],</span></span>
<span class="line"><span style="color:#A6ACCD;">  b: 11,</span></span>
<span class="line"><span style="color:#A6ACCD;">  c: 33</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">set(obj, &#39;a[0].like&#39;, &#39;hi&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">set(obj, &#39;a[0].say.my&#39;, &#39;hello&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">set(obj, [&#39;d&#39;, &#39;j&#39;], &#39;come&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">/** obj的值：</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    a: [{ id: 1, name: &#39;winne&#39;, like: &#39;hi&#39;, age: 18, say: { my: &#39;hello&#39;} }],</span></span>
<span class="line"><span style="color:#A6ACCD;">    b: 11,</span></span>
<span class="line"><span style="color:#A6ACCD;">    c: 33,</span></span>
<span class="line"><span style="color:#A6ACCD;">    d: { j: &#39;come&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote></blockquote><ul><li>merge： <code>merge(object, [sources])</code> 它递归合并 sources 来源对象自身和继承的可枚举属性到 object 目标对象。如果目标值存在，被解析为undefined的sources 来源对象属性将被跳过。数组和普通对象会递归合并，其他对象和值会被直接分配覆盖。源对象从从左到右分配。后续的来源对象属性会覆盖之前分配的属性。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { merge } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: [{ id: 1, name: &#39;winne&#39;, age: 18 }],</span></span>
<span class="line"><span style="color:#A6ACCD;">  b: 11</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const other = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: [{ name: &#39;xf&#39;, age: 10 }],</span></span>
<span class="line"><span style="color:#A6ACCD;">  b: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  c: 33</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const regMerge = merge(obj, other)</span></span>
<span class="line"><span style="color:#A6ACCD;">/** regMerge的值：</span></span>
<span class="line"><span style="color:#A6ACCD;"> * {</span></span>
<span class="line"><span style="color:#A6ACCD;">    a: [{ id: 1, name: &#39;xf&#39;, age: 10 }],</span></span>
<span class="line"><span style="color:#A6ACCD;">    b: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    c: 33</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote></blockquote><ul><li></li><li>omit：把一个对象的指定属性剔除。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { omit } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: [{ id: 1, name: &#39;winne&#39;, age: 18 }],</span></span>
<span class="line"><span style="color:#A6ACCD;">  b: 11,</span></span>
<span class="line"><span style="color:#A6ACCD;">  c: 33</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const reg = omit(obj, [&#39;a[0].age&#39;, &#39;b&#39;, &#39;c&#39;]) // { a: [{ id: 1, name: &#39;winne&#39; }] }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>说明：用于处理传递参数给接口时去除少量多余的属性字段时非常有用。</p></blockquote><ul><li>pick：从一个对象中挑选指定属性。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { pick } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: [{ id: 1, name: &#39;winne&#39;, age: 18 }],</span></span>
<span class="line"><span style="color:#A6ACCD;">  b: 11,</span></span>
<span class="line"><span style="color:#A6ACCD;">  c: 33</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const reg = pick(obj, [&#39;a[0].age&#39;, &#39;b&#39;]) // { a: [{ age: 18 }], b: 11 }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>说明：用于处理传递参数给接口时挑选少量属性字段时非常有用。</p></blockquote><h3 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-label="Permalink to &quot;字符串&quot;">​</a></h3><ul><li>trim： <code>trim([string=&#39;&#39;], [chars=whitespace])</code> 默认从string字符串中移除前面和后面的 空格 ，也可以配置移除首尾指定的字符。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { trim } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 默认移除首尾空格</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(trim(&#39;  abc  &#39;)) // abc</span></span>
<span class="line"><span style="color:#A6ACCD;">// 移除指定字符</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(trim(&#39;-_*abc_&#39;, &#39;*_-&#39;)) // abc</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>说明: 当指定字符进行移除时，首尾只要是能匹配到的单个指定字符都会被移除（配置的指定字符不需要关注顺序）。</p></blockquote><h3 id="常用函数" tabindex="-1">常用函数 <a class="header-anchor" href="#常用函数" aria-label="Permalink to &quot;常用函数&quot;">​</a></h3><ul><li>uniqueId： <code>uniqueId([prefix=&#39;&#39;])</code> 生成唯一ID。 如果提供了 prefix ，会被添加到ID前缀上。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { uniqueId } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(uniqueId()) // 1</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(uniqueId()) // 2</span></span>
<span class="line"><span style="color:#A6ACCD;">for (let i = 0; i &lt; 100; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(uniqueId(&#39;winne&#39;)) // winne3  ~  winne102</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(uniqueId(&#39;xf&#39;)) // xf103</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>说明：无论是加前缀还是不加前缀，生成的ID都是唯一的。</p></blockquote><ul><li>cloneDeep： <code>cloneDeep(value)</code> 返回深拷贝后的值。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { cloneDeep } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: 111,</span></span>
<span class="line"><span style="color:#A6ACCD;">  b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    arr: [1, { b: 55 }, 33]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const copyObj = cloneDeep(obj) // copyObj为obj深拷贝后的值</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote></blockquote><ul><li>isEqual： <code>isEqual(value, other)</code> 执行深比较来确定两者的值是否相等。如果 两个值完全相同，那么返回 true，否则返回 false。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { cloneDeep } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: 111,</span></span>
<span class="line"><span style="color:#A6ACCD;">  b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    arr: [1, { b: 55 }, 33]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const obj2 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: 111,</span></span>
<span class="line"><span style="color:#A6ACCD;">  b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    arr: [1, { b: 55 }, 33]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const obj3 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    arr: [1, { b: 55 }, 33]</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: 111</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const obj4 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: 111,</span></span>
<span class="line"><span style="color:#A6ACCD;">  b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    arr: [1, { b: 55 }, 33]</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  c: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 两个值完全相同</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(isEqual(obj, obj2)) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">// 两个键值对的值完全相同，对象类型键名顺序不重要</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(isEqual(obj, obj3)) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">// 两个对象键值对不完全相同</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(isEqual(obj, obj4)) // false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>说明：这个方法支持比较 arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, 以及 typed arrays. Object 对象值比较自身的属性，不包括继承的和可枚举的属性。 不支持函数和DOM节点比较。</p></blockquote><ul><li>isMatch： <code>isMatch(object, source)</code></li></ul><p>执行一个深度比较，来确定 object 是否含有和 source 完全相等的属性值。<br> 如果object匹配，那么返回 true，否则返回 false。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { isMatch } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">a: [{ id: 1, app: 2, pc: 3 }],</span></span>
<span class="line"><span style="color:#A6ACCD;">b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  arr: [1, { b: 55 }, 33]</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">c: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">d: 33</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const source2 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">a: [{ id: 1, app: 2, pc: 3 }],</span></span>
<span class="line"><span style="color:#A6ACCD;">b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  arr: [1, { b: 55 }, 33]</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">c: 2</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const source3 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">a: [{ app: 2, pc: 3 }],</span></span>
<span class="line"><span style="color:#A6ACCD;">b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  arr: [1, { b: 55 }, 33]</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">c: 2</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const source4 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">a: [{ id: 1, app: 2 }],</span></span>
<span class="line"><span style="color:#A6ACCD;">b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  arr: [1, { b: 55 }, 33]</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">c: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">d: 33</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const source5 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">a: [{ id: 1, app: 2, pc: 3 }],</span></span>
<span class="line"><span style="color:#A6ACCD;">b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  arr: [1, { b: 55 }, 33]</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">c: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">d: 33,</span></span>
<span class="line"><span style="color:#A6ACCD;">e: 66</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// source2少了d属性，存在包含关系</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(isMatch(obj, source2)) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">// source3少了d属性、a[0].id属性，存在包含关系</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(isMatch(obj, source3)) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">// source4少了a[0].pc属性，存在包含关系</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(isMatch(obj, source4)) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">// source5多了一个e属性，不存在包含关系</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(isMatch(obj, source5)) // false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>说明：一般应用于数据比对，且要比对的两个对象存在包含关系即为数据未发生改变的情况。</p></blockquote><ul><li>toString： <code>toString(value)</code> 转换 value 为字符串。 null 和 undefined 将返回空字符串。-0 将被转换为字符串&quot;-0&quot;。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { toString } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const a = 123</span></span>
<span class="line"><span style="color:#A6ACCD;">const b = null</span></span>
<span class="line"><span style="color:#A6ACCD;">const c = [4, 5, 6]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(toString(a)) // &#39;123&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(toString(b)) // &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(toString(c)) // &#39;4,5,6&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 下面是内置的转字符串方法</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a.toString()) // &#39;123&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(c.toString()) // &#39;4,5,6&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(b.toString()) // 报错</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>说明：从上面可以看出，使用lodash中的toString方法容错性比较强。</p></blockquote><ul><li>throttle： <code>throttle(func, [wait=0], [options=])</code> 创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。 该函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { throttle } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const fn = throttle(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;节流函数执行了&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}, 500)</span></span>
<span class="line"><span style="color:#A6ACCD;">window.addEventListener(&#39;resize&#39;, fn)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>说明：一段时间只做一件事情，时间没到就不做。<br> 实际应用：表单的提交（解决多次频繁点击提交表单的bug）、监听浏览器窗口发生变化做某些事情。</p></blockquote><ul><li>debounce： <code>debounce(func, [wait=0], [options=])</code> 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。 debounced（防抖动）函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { debounce } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const fn = debounce(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;防抖函数执行了&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}, 500)</span></span>
<span class="line"><span style="color:#A6ACCD;">// 这个例子不太合适，仅供看效果</span></span>
<span class="line"><span style="color:#A6ACCD;">window.addEventListener(&#39;resize&#39;, fn)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>说明：当持续触发事件，一定时间内没有再触发事件，事件处理函数就会执行一次。如果设定的定时器延迟到来之前 又触发了事件，那么就会重新开始计时。<br> 实际应用：输入搜索</p></blockquote><ul><li>orderBy： <code>orderBy(collection, [iteratees=[_.identity]], [orders])</code></li></ul><p>collection 为用来迭代的集合。允许指定 iteratee（迭代函数）结果如何排序。 如果没指定 orders（排序），所有值以升序排序。 否则，指定为&quot;desc&quot; 降序，或者指定为 “asc” 升序，排序对应值。返回排序后的新数组。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { orderBy } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const users = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  { user: &#39;fred&#39;, age: 48 },</span></span>
<span class="line"><span style="color:#A6ACCD;">  { user: &#39;barney&#39;, age: 34 },</span></span>
<span class="line"><span style="color:#A6ACCD;">  { user: &#39;fred&#39;, age: 40 },</span></span>
<span class="line"><span style="color:#A6ACCD;">  { user: &#39;barney&#39;, age: 36 }</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 以 \`user\` 升序排序 再  \`age\` 以降序排序。</span></span>
<span class="line"><span style="color:#A6ACCD;">const u1 = orderBy(users, [&#39;user&#39;, &#39;age&#39;], [&#39;asc&#39;, &#39;desc&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;🚀 ~ u1&#39;, u1)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 以 \`age\` 以升序排序。</span></span>
<span class="line"><span style="color:#A6ACCD;">const u2 = orderBy(users, [&#39;age&#39;], [&#39;asc&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;🚀 ~ u2&#39;, u2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>说明：一般用于对数组对象中的某个属性进行排序。</p></blockquote><ul><li>includes： <code>includes(collection, value, [fromIndex=0])</code></li></ul><p>collection 为要检索的集合。检查 value(值) 是否在 collection(集合) 中。如果 collection(集合)是一个字符串，那么检查 value（值，子字符串） 是否在字符串中， 否则使用SameValueZero 做等值比较。 如果指定 fromIndex 是负数，那么从 collection(集合) 的结尾开始检索。</p><p>如果找到 value 返回 true， 否则返回 false。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { includes } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 数组中是否包含1</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(includes([1, 2, 3], 1)) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">// 数组下标2开始，是否包含1</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(includes([1, 2, 3], 1, 2)) // false</span></span>
<span class="line"><span style="color:#A6ACCD;">// 数组下标1开始，是否包含1</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(includes([0, 1, 3], 1, 1)) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">// 对象中是否包含属性的值为&#39;fred&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(includes({ user: &#39;fred&#39;, age: 40 }, &#39;fred&#39;)) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">// 字符串中是否包含&#39;eb&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(includes(&#39;pebbles&#39;, &#39;eb&#39;)) // true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>说明：可用于检索数组、对象、字符串。</p></blockquote><ul><li>forEach： <code>forEach(collection, [iteratee=_.identity]</code></li></ul><p>collection 为一个用来迭代的集合。调用 iteratee 遍历 collection(集合) 中的每个元素， iteratee 调用3个参数： (value, index|key, collection)。 如果迭代函数（iteratee）显式的返回 false ，迭代会提前退出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { forEach } from &#39;lodash-es&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const arr = [1, 2, 3, 4, 5, 6]</span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  b: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  c: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">  d: 4,</span></span>
<span class="line"><span style="color:#A6ACCD;">  e: 5</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">forEach(arr, (value) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;🚀 ~ value&#39;, value)</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (value &gt; 2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 如果迭代函数显式的返回 false ，迭代会提前退出。</span></span>
<span class="line"><span style="color:#A6ACCD;">    return false</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">forEach(obj, (value, key) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;🚀 ~ value, key&#39;, value, key)</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (value &gt; 2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 如果迭代函数显式的返回 false ，迭代会提前退出。</span></span>
<span class="line"><span style="color:#A6ACCD;">    return false</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>说明：使用lodash库中的forEach方法则数组和对象均可遍历，并且使用显示返回false还能提前退出遍历。</p></blockquote>`,87),o=[e];function c(t,r,i,C,A,y){return n(),a("div",null,o)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
