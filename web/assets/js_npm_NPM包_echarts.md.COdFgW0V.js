import{_ as s,c as a,o as n,a5 as p}from"./chunks/framework.x0IMHZ_J.js";const g=JSON.parse('{"title":"Echarts","description":"","frontmatter":{},"headers":[],"relativePath":"js/npm/NPM包/echarts.md","filePath":"js/npm/NPM包/echarts.md","lastUpdated":1728442974000}'),e={name:"js/npm/NPM包/echarts.md"},l=p(`<h1 id="echarts" tabindex="-1">Echarts <a class="header-anchor" href="#echarts" aria-label="Permalink to &quot;Echarts&quot;">​</a></h1><p><a href="https://echarts.apache.org/zh/index.html" target="_blank" rel="noreferrer">官网</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install echarts --save</span></span></code></pre></div><h2 id="vue-中使用" tabindex="-1">vue 中使用 <a class="header-anchor" href="#vue-中使用" aria-label="Permalink to &quot;vue 中使用&quot;">​</a></h2><p>ECharts.vue</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;!-- 面包屑 --&gt;</span></span>
<span class="line"><span>    &lt;el-breadcrumb separator-class=&quot;el-icon-arrow-right&quot;&gt;</span></span>
<span class="line"><span>      &lt;el-breadcrumb-item :to=&quot;{ path: &#39;/home&#39; }&quot;&gt;首页&lt;/el-breadcrumb-item&gt;</span></span>
<span class="line"><span>      &lt;el-breadcrumb-item&gt;数据统计&lt;/el-breadcrumb-item&gt;</span></span>
<span class="line"><span>      &lt;el-breadcrumb-item&gt;数据报表&lt;/el-breadcrumb-item&gt;</span></span>
<span class="line"><span>    &lt;/el-breadcrumb&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;el-card&gt;</span></span>
<span class="line"><span>      &lt;!-- 1. 为 ECharts 准备一个定义了宽高的 DOM --&gt;</span></span>
<span class="line"><span>      &lt;div</span></span>
<span class="line"><span>        id=&quot;main&quot;</span></span>
<span class="line"><span>        style=&quot;width: 600px;height:400px;&quot;</span></span>
<span class="line"><span>      &gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/el-card&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>// 2.导入 echarts , 注意： import echarts from &#39;echarts&#39; 是错误的，一定要写 * as echarts</span></span>
<span class="line"><span>import * as echarts from &#39;echarts&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  // 此时，页面上的元素，已经被渲染完毕！</span></span>
<span class="line"><span>  mounted() {</span></span>
<span class="line"><span>    // 3.基于准备好的dom，初始化echarts实例</span></span>
<span class="line"><span>    var myChart = echarts.init(document.getElementById(&#39;main&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 4.指定图表的配置项和数据</span></span>
<span class="line"><span>    var option = {</span></span>
<span class="line"><span>      title: {</span></span>
<span class="line"><span>        text: &#39;ECharts 入门示例&#39;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      tooltip: {},</span></span>
<span class="line"><span>      legend: {</span></span>
<span class="line"><span>        data: [&#39;销量&#39;]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      xAxis: {</span></span>
<span class="line"><span>        data: [&#39;衬衫&#39;, &#39;羊毛衫&#39;, &#39;雪纺衫&#39;, &#39;裤子&#39;, &#39;高跟鞋&#39;, &#39;袜子&#39;]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      yAxis: {},</span></span>
<span class="line"><span>      series: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          name: &#39;销量&#39;,</span></span>
<span class="line"><span>          type: &#39;bar&#39;,</span></span>
<span class="line"><span>          data: [5, 20, 36, 10, 10, 20]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 5.使用刚指定的配置项和数据显示图表。</span></span>
<span class="line"><span>    myChart.setOption(option)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,6),t=[l];function i(c,r,o,d,h,m){return n(),a("div",null,t)}const b=s(e,[["render",i]]);export{g as __pageData,b as default};
