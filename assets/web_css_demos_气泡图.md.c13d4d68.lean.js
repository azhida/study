import{_ as C,o as e,c as t,x as s,F,M as E,Y as A,t as D,C as d,a as i,Q as u}from"./chunks/framework.aaef0e9b.js";import{s as y}from"./chunks/shuffle.166bba34.js";import"./chunks/shuffleSelf.551cae05.js";import"./chunks/baseRandom.5a8199cf.js";const m={data(){return{maxValue:61,bubbleItems:[{name:"A",value:1,startColor:"#251571",endColor:"#5a41dd"},{name:"A+",value:2,startColor:"#251571",endColor:"#24ac82"},{name:"B",value:3,startColor:"#251571",endColor:"#0173e4"},{name:"B+",value:4,startColor:"#251571",endColor:"#926710"},{name:"C",value:60,startColor:"#251571",endColor:"#5a41dd"},{name:"C+",value:61,startColor:"#251571",endColor:"#5a41dd"}]}},mounted(){this.bubbleItems=y(this.bubbleItems)},methods:{refresh(){this.bubbleItems=y(this.bubbleItems)},itemStyle(n,a){var l=(n.value*20).toString()+"px",c="";if(n.value!=this.maxValue){var p=(this.maxValue-n.value)/2;c=a%2==0?"translateY("+p+"px)":"translateY(-"+p+"px)"}return{width:l,height:l,transform:c,"background-image":"radial-gradient(circle, "+n.startColor+", "+n.endColor+")"}}}},b={class:"main"},h={class:"box"},f={class:"name"},_={class:"value"};function v(n,a,l,c,p,r){return e(),t(F,null,[s("button",{class:"button",onClick:a[0]||(a[0]=o=>r.refresh())},"刷新"),s("div",b,[(e(!0),t(F,null,E(p.bubbleItems,(o,B)=>(e(),t("div",h,[s("div",{class:"item",style:A(r.itemStyle(o,B)),title:"aaa"},[s("div",f,D(o.name),1),s("div",_,D(o.value),1)],4)]))),256))])],64)}const g=C(m,[["render",v],["__scopeId","data-v-0bc4fb60"]]),x=s("h1",{id:"画一个三角形",tabindex:"-1"},[i("画一个三角形 "),s("a",{class:"header-anchor",href:"#画一个三角形","aria-label":'Permalink to "画一个三角形"'},"​")],-1),q=s("h2",{id:"效果展示",tabindex:"-1"},[i("效果展示 "),s("a",{class:"header-anchor",href:"#效果展示","aria-label":'Permalink to "效果展示"'},"​")],-1),I=u("",2),N=JSON.parse('{"title":"画一个三角形","description":"","frontmatter":{},"headers":[],"relativePath":"web/css/demos/气泡图.md","lastUpdated":1683880303000}'),V={name:"web/css/demos/气泡图.md"},P=Object.assign(V,{setup(n){return(a,l)=>(e(),t("div",null,[x,q,d(g),I]))}});export{N as __pageData,P as default};
