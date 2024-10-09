import{_ as n,c as s,o as a,a5 as p}from"./chunks/framework.x0IMHZ_J.js";const u=JSON.parse('{"title":"父子组件通信","description":"","frontmatter":{},"headers":[],"relativePath":"angular/父子组件通信.md","filePath":"angular/父子组件通信.md","lastUpdated":1722500431000}'),l={name:"angular/父子组件通信.md"},e=p(`<h1 id="父子组件通信" tabindex="-1">父子组件通信 <a class="header-anchor" href="#父子组件通信" aria-label="Permalink to &quot;父子组件通信&quot;">​</a></h1><h2 id="子组件" tabindex="-1">子组件 <a class="header-anchor" href="#子组件" aria-label="Permalink to &quot;子组件&quot;">​</a></h2><p>child.html</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>  &lt;span&gt;父组件传递的数据: {{ parentMsg }}&lt;/span&gt;</span></span>
<span class="line"><span>  &lt;span (click)=&quot;click()&quot;&gt;点击向父组件传递数据：{{ childMsg }}&lt;/span&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>child.ts</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {Component, EventEmitter, Input, OnInit, Output} from &#39;@angular/core&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component({</span></span>
<span class="line"><span>  selector: &#39;app-child&#39;,</span></span>
<span class="line"><span>  templateUrl: &#39;./child.component.html&#39;,</span></span>
<span class="line"><span>  styleUrls: [&#39;./child.component.scss&#39;]</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export class ChildComponent implements OnInit {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @Output() change = new EventEmitter&lt;any&gt;();</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  childMsg = &#39;我是子组件 child&#39;;</span></span>
<span class="line"><span>  parentMsg = &#39;&#39;;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ngOnInit() {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  getData(msg){</span></span>
<span class="line"><span>    // 接收父组件传递的值【动态传值】</span></span>
<span class="line"><span>    this.parentMsg = msg;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  click(){</span></span>
<span class="line"><span>    // 向父组件传值</span></span>
<span class="line"><span>    this.change.emit(this.childMsg);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="父组件" tabindex="-1">父组件 <a class="header-anchor" href="#父组件" aria-label="Permalink to &quot;父组件&quot;">​</a></h2><p>parent.html</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;child #child (change)=&quot;change($event)&quot;&gt;&lt;/child&gt;</span></span>
<span class="line"><span>&lt;div (click)=&quot;click()&quot;&gt;点我向子组件传值&lt;/div&gt;</span></span></code></pre></div><p>parent.ts</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { Component, OnInit, ViewChild } from &#39;@angular/core&#39;;</span></span>
<span class="line"><span>import {ChildComponent} from &#39;./child.component&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component({</span></span>
<span class="line"><span>  selector: &#39;app-parent&#39;,</span></span>
<span class="line"><span>  templateUrl: &#39;./parent.component.html&#39;,</span></span>
<span class="line"><span>  styleUrls: [&#39;./parent.component.scss&#39;]</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>export class ParentComponent implements OnInit {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @ViewChild(&#39;child&#39;, { static: true}) child:ChildComponent;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  parentMsg = &#39;我是父组件 parent&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  constructor() {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  async ngOnInit() {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  change(e) {</span></span>
<span class="line"><span>    // 接收父组件传递的值</span></span>
<span class="line"><span>    console.log(e);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  click(){</span></span>
<span class="line"><span>    // 向子组件传值</span></span>
<span class="line"><span>    this.child.getData(this.parentMsg)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,11),t=[e];function i(c,o,d,h,r,g){return a(),s("div",null,t)}const _=n(l,[["render",i]]);export{u as __pageData,_ as default};
