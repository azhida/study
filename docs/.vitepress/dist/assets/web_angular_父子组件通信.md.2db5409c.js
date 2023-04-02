import{_ as s,o as n,c as a,N as l}from"./chunks/framework.34eade80.js";const h=JSON.parse('{"title":"父子组件通信","description":"","frontmatter":{},"headers":[],"relativePath":"web/angular/父子组件通信.md"}'),p={name:"web/angular/父子组件通信.md"},e=l(`<h1 id="父子组件通信" tabindex="-1">父子组件通信 <a class="header-anchor" href="#父子组件通信" aria-label="Permalink to &quot;父子组件通信&quot;">​</a></h1><h2 id="子组件" tabindex="-1">子组件 <a class="header-anchor" href="#子组件" aria-label="Permalink to &quot;子组件&quot;">​</a></h2><p>child.html</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;span&gt;父组件传递的数据: {{ parentMsg }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;span (click)=&quot;click()&quot;&gt;点击向父组件传递数据：{{ childMsg }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>child.ts</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import {Component, EventEmitter, Input, OnInit, Output} from &#39;@angular/core&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Component({</span></span>
<span class="line"><span style="color:#A6ACCD;">  selector: &#39;app-child&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  templateUrl: &#39;./child.component.html&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  styleUrls: [&#39;./child.component.scss&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export class ChildComponent implements OnInit {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  @Output() change = new EventEmitter&lt;any&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  childMsg = &#39;我是子组件 child&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  parentMsg = &#39;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  ngOnInit() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  getData(msg){</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 接收父组件传递的值【动态传值】</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.parentMsg = msg;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  click(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 向父组件传值</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.change.emit(this.childMsg);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="父组件" tabindex="-1">父组件 <a class="header-anchor" href="#父组件" aria-label="Permalink to &quot;父组件&quot;">​</a></h2><p>parent.html</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;child #child (change)=&quot;change($event)&quot;&gt;&lt;/child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div (click)=&quot;click()&quot;&gt;点我向子组件传值&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>parent.ts</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { Component, OnInit, ViewChild } from &#39;@angular/core&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import {ChildComponent} from &#39;./child.component&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Component({</span></span>
<span class="line"><span style="color:#A6ACCD;">  selector: &#39;app-parent&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  templateUrl: &#39;./parent.component.html&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  styleUrls: [&#39;./parent.component.scss&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">export class ParentComponent implements OnInit {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  @ViewChild(&#39;child&#39;, { static: true}) child:ChildComponent;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  parentMsg = &#39;我是父组件 parent&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor() {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  async ngOnInit() {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  change(e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 接收父组件传递的值</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(e);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  click(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 向子组件传值</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.child.getData(this.parentMsg)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,11),t=[e];function o(c,i,C,r,A,y){return n(),a("div",null,t)}const d=s(p,[["render",o]]);export{h as __pageData,d as default};
