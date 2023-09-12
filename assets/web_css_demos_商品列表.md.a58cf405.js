import{_ as c,o as n,c as a,x as s,F as r,M as D,t as F,C as y,a as p,Q as i}from"./chunks/framework.aaef0e9b.js";const B={data(){return{}},mounted(){},methods:{}},E={class:"main"},A={class:"list"},d={class:"item"},C={class:"img"},_=["alt"],u={class:"name"};function m(o,e,t,v,b,w){return n(),a("div",E,[s("div",A,[(n(),a(r,null,D(10,l=>s("div",d,[s("p",C,[s("img",{src:"",alt:"商品图片"+l},null,8,_)]),s("p",u,"商品名称"+F(l),1)])),64))])])}const h=c(B,[["render",m],["__scopeId","data-v-41093792"]]),g=s("h1",{id:"商品列表",tabindex:"-1"},[p("商品列表 "),s("a",{class:"header-anchor",href:"#商品列表","aria-label":'Permalink to "商品列表"'},"​")],-1),f=s("h2",{id:"效果展示",tabindex:"-1"},[p("效果展示 "),s("a",{class:"header-anchor",href:"#效果展示","aria-label":'Permalink to "效果展示"'},"​")],-1),x=i(`<h2 id="示例代码" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">i in 10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">img</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:alt</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;商品图片&#39;+i</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">商品名称{{ i }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#BABED8;"> _ </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lodash-es</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">data</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">mounted</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">methods</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#F07178;">          </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">main</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">350px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">500px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> auto</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;">        </span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#BABED8;"> solid red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;">            </span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#B2CCD6;">flex-wrap</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> wrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#B2CCD6;">gap</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">                </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">calc</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">50%</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">                </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#BABED8;"> solid blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">                </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">img</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">                    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">                    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">                </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">        </span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,2),T=JSON.parse('{"title":"商品列表","description":"","frontmatter":{},"headers":[],"relativePath":"web/css/demos/商品列表.md","lastUpdated":1684746950000}'),q={name:"web/css/demos/商品列表.md"},k=Object.assign(q,{setup(o){return(e,t)=>(n(),a("div",null,[g,f,y(h),x]))}});export{T as __pageData,k as default};
