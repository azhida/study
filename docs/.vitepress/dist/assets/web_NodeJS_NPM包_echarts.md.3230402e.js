import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.92222dd1.js";const d=JSON.parse('{"title":"Echarts","description":"","frontmatter":{},"headers":[],"relativePath":"web/NodeJS/NPM包/echarts.md","lastUpdated":null}'),p={name:"web/NodeJS/NPM包/echarts.md"},e=l(`<h1 id="echarts" tabindex="-1">Echarts <a class="header-anchor" href="#echarts" aria-label="Permalink to &quot;Echarts&quot;">​</a></h1><p><a href="https://echarts.apache.org/zh/index.html" target="_blank" rel="noreferrer">官网</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install echarts --save</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="vue-中使用" tabindex="-1">vue 中使用 <a class="header-anchor" href="#vue-中使用" aria-label="Permalink to &quot;vue 中使用&quot;">​</a></h2><p>ECharts.vue</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- 面包屑 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-breadcrumb separator-class=&quot;el-icon-arrow-right&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;el-breadcrumb-item :to=&quot;{ path: &#39;/home&#39; }&quot;&gt;首页&lt;/el-breadcrumb-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;el-breadcrumb-item&gt;数据统计&lt;/el-breadcrumb-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;el-breadcrumb-item&gt;数据报表&lt;/el-breadcrumb-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/el-breadcrumb&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-card&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;!-- 1. 为 ECharts 准备一个定义了宽高的 DOM --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">        id=&quot;main&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        style=&quot;width: 600px;height:400px;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/el-card&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 2.导入 echarts , 注意： import echarts from &#39;echarts&#39; 是错误的，一定要写 * as echarts</span></span>
<span class="line"><span style="color:#A6ACCD;">import * as echarts from &#39;echarts&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 此时，页面上的元素，已经被渲染完毕！</span></span>
<span class="line"><span style="color:#A6ACCD;">  mounted() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 3.基于准备好的dom，初始化echarts实例</span></span>
<span class="line"><span style="color:#A6ACCD;">    var myChart = echarts.init(document.getElementById(&#39;main&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 4.指定图表的配置项和数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    var option = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      title: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        text: &#39;ECharts 入门示例&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      tooltip: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">      legend: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        data: [&#39;销量&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      xAxis: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        data: [&#39;衬衫&#39;, &#39;羊毛衫&#39;, &#39;雪纺衫&#39;, &#39;裤子&#39;, &#39;高跟鞋&#39;, &#39;袜子&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      yAxis: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">      series: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          name: &#39;销量&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          type: &#39;bar&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          data: [5, 20, 36, 10, 10, 20]</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 5.使用刚指定的配置项和数据显示图表。</span></span>
<span class="line"><span style="color:#A6ACCD;">    myChart.setOption(option)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),t=[e];function o(c,r,C,A,i,y){return a(),n("div",null,t)}const h=s(p,[["render",o]]);export{d as __pageData,h as default};
