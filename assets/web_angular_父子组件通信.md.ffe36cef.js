import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.aaef0e9b.js";const m=JSON.parse('{"title":"父子组件通信","description":"","frontmatter":{},"headers":[],"relativePath":"web/angular/父子组件通信.md","lastUpdated":1680444090000}'),p={name:"web/angular/父子组件通信.md"},e=l(`<h1 id="父子组件通信" tabindex="-1">父子组件通信 <a class="header-anchor" href="#父子组件通信" aria-label="Permalink to &quot;父子组件通信&quot;">​</a></h1><h2 id="子组件" tabindex="-1">子组件 <a class="header-anchor" href="#子组件" aria-label="Permalink to &quot;子组件&quot;">​</a></h2><p>child.html</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;span&gt;父组件传递的数据: {{ parentMsg }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#babed8;">  &lt;span (click)=&quot;click()&quot;&gt;点击向父组件传递数据：{{ childMsg }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>child.ts</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import {Component, EventEmitter, Input, OnInit, Output} from &#39;@angular/core&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">@Component({</span></span>
<span class="line"><span style="color:#babed8;">  selector: &#39;app-child&#39;,</span></span>
<span class="line"><span style="color:#babed8;">  templateUrl: &#39;./child.component.html&#39;,</span></span>
<span class="line"><span style="color:#babed8;">  styleUrls: [&#39;./child.component.scss&#39;]</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">export class ChildComponent implements OnInit {</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  @Output() change = new EventEmitter&lt;any&gt;();</span></span>
<span class="line"><span style="color:#babed8;">  </span></span>
<span class="line"><span style="color:#babed8;">  childMsg = &#39;我是子组件 child&#39;;</span></span>
<span class="line"><span style="color:#babed8;">  parentMsg = &#39;&#39;;</span></span>
<span class="line"><span style="color:#babed8;">  </span></span>
<span class="line"><span style="color:#babed8;">  ngOnInit() {</span></span>
<span class="line"><span style="color:#babed8;">    </span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">  </span></span>
<span class="line"><span style="color:#babed8;">  getData(msg){</span></span>
<span class="line"><span style="color:#babed8;">    // 接收父组件传递的值【动态传值】</span></span>
<span class="line"><span style="color:#babed8;">    this.parentMsg = msg;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">  </span></span>
<span class="line"><span style="color:#babed8;">  click(){</span></span>
<span class="line"><span style="color:#babed8;">    // 向父组件传值</span></span>
<span class="line"><span style="color:#babed8;">    this.change.emit(this.childMsg);</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">  </span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="父组件" tabindex="-1">父组件 <a class="header-anchor" href="#父组件" aria-label="Permalink to &quot;父组件&quot;">​</a></h2><p>parent.html</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;child #child (change)=&quot;change($event)&quot;&gt;&lt;/child&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;div (click)=&quot;click()&quot;&gt;点我向子组件传值&lt;/div&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>parent.ts</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { Component, OnInit, ViewChild } from &#39;@angular/core&#39;;</span></span>
<span class="line"><span style="color:#babed8;">import {ChildComponent} from &#39;./child.component&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">@Component({</span></span>
<span class="line"><span style="color:#babed8;">  selector: &#39;app-parent&#39;,</span></span>
<span class="line"><span style="color:#babed8;">  templateUrl: &#39;./parent.component.html&#39;,</span></span>
<span class="line"><span style="color:#babed8;">  styleUrls: [&#39;./parent.component.scss&#39;]</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;">export class ParentComponent implements OnInit {</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  @ViewChild(&#39;child&#39;, { static: true}) child:ChildComponent;</span></span>
<span class="line"><span style="color:#babed8;">  </span></span>
<span class="line"><span style="color:#babed8;">  parentMsg = &#39;我是父组件 parent&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  constructor() {}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  async ngOnInit() {}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  change(e) {</span></span>
<span class="line"><span style="color:#babed8;">    // 接收父组件传递的值</span></span>
<span class="line"><span style="color:#babed8;">    console.log(e);</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">  </span></span>
<span class="line"><span style="color:#babed8;">  click(){</span></span>
<span class="line"><span style="color:#babed8;">    // 向子组件传值</span></span>
<span class="line"><span style="color:#babed8;">    this.child.getData(this.parentMsg)</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,11),t=[e];function o(c,i,b,r,d,y){return a(),n("div",null,t)}const g=s(p,[["render",o]]);export{m as __pageData,g as default};
