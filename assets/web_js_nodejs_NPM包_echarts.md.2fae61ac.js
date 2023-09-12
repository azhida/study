import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const m=JSON.parse('{"title":"Echarts","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/nodejs/NPM包/echarts.md","lastUpdated":1688520804000}'),l={name:"web/js/nodejs/NPM包/echarts.md"},p=e(`<h1 id="echarts" tabindex="-1">Echarts <a class="header-anchor" href="#echarts" aria-label="Permalink to &quot;Echarts&quot;">​</a></h1><p><a href="https://echarts.apache.org/zh/index.html" target="_blank" rel="noreferrer">官网</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">npm install echarts --save</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="vue-中使用" tabindex="-1">vue 中使用 <a class="header-anchor" href="#vue-中使用" aria-label="Permalink to &quot;vue 中使用&quot;">​</a></h2><p>ECharts.vue</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;!-- 面包屑 --&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;el-breadcrumb separator-class=&quot;el-icon-arrow-right&quot;&gt;</span></span>
<span class="line"><span style="color:#babed8;">      &lt;el-breadcrumb-item :to=&quot;{ path: &#39;/home&#39; }&quot;&gt;首页&lt;/el-breadcrumb-item&gt;</span></span>
<span class="line"><span style="color:#babed8;">      &lt;el-breadcrumb-item&gt;数据统计&lt;/el-breadcrumb-item&gt;</span></span>
<span class="line"><span style="color:#babed8;">      &lt;el-breadcrumb-item&gt;数据报表&lt;/el-breadcrumb-item&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;/el-breadcrumb&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    &lt;el-card&gt;</span></span>
<span class="line"><span style="color:#babed8;">      &lt;!-- 1. 为 ECharts 准备一个定义了宽高的 DOM --&gt;</span></span>
<span class="line"><span style="color:#babed8;">      &lt;div</span></span>
<span class="line"><span style="color:#babed8;">        id=&quot;main&quot;</span></span>
<span class="line"><span style="color:#babed8;">        style=&quot;width: 600px;height:400px;&quot;</span></span>
<span class="line"><span style="color:#babed8;">      &gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">    &lt;/el-card&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">// 2.导入 echarts , 注意： import echarts from &#39;echarts&#39; 是错误的，一定要写 * as echarts</span></span>
<span class="line"><span style="color:#babed8;">import * as echarts from &#39;echarts&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export default {</span></span>
<span class="line"><span style="color:#babed8;">  // 此时，页面上的元素，已经被渲染完毕！</span></span>
<span class="line"><span style="color:#babed8;">  mounted() {</span></span>
<span class="line"><span style="color:#babed8;">    // 3.基于准备好的dom，初始化echarts实例</span></span>
<span class="line"><span style="color:#babed8;">    var myChart = echarts.init(document.getElementById(&#39;main&#39;))</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 4.指定图表的配置项和数据</span></span>
<span class="line"><span style="color:#babed8;">    var option = {</span></span>
<span class="line"><span style="color:#babed8;">      title: {</span></span>
<span class="line"><span style="color:#babed8;">        text: &#39;ECharts 入门示例&#39;</span></span>
<span class="line"><span style="color:#babed8;">      },</span></span>
<span class="line"><span style="color:#babed8;">      tooltip: {},</span></span>
<span class="line"><span style="color:#babed8;">      legend: {</span></span>
<span class="line"><span style="color:#babed8;">        data: [&#39;销量&#39;]</span></span>
<span class="line"><span style="color:#babed8;">      },</span></span>
<span class="line"><span style="color:#babed8;">      xAxis: {</span></span>
<span class="line"><span style="color:#babed8;">        data: [&#39;衬衫&#39;, &#39;羊毛衫&#39;, &#39;雪纺衫&#39;, &#39;裤子&#39;, &#39;高跟鞋&#39;, &#39;袜子&#39;]</span></span>
<span class="line"><span style="color:#babed8;">      },</span></span>
<span class="line"><span style="color:#babed8;">      yAxis: {},</span></span>
<span class="line"><span style="color:#babed8;">      series: [</span></span>
<span class="line"><span style="color:#babed8;">        {</span></span>
<span class="line"><span style="color:#babed8;">          name: &#39;销量&#39;,</span></span>
<span class="line"><span style="color:#babed8;">          type: &#39;bar&#39;,</span></span>
<span class="line"><span style="color:#babed8;">          data: [5, 20, 36, 10, 10, 20]</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">      ]</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 5.使用刚指定的配置项和数据显示图表。</span></span>
<span class="line"><span style="color:#babed8;">    myChart.setOption(option)</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,6),t=[p];function o(c,r,b,i,d,y){return a(),n("div",null,t)}const u=s(l,[["render",o]]);export{m as __pageData,u as default};
