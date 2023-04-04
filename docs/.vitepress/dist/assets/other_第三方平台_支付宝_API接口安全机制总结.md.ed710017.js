import{_ as a,o as e,c as l,Q as t}from"./chunks/framework.92222dd1.js";const m=JSON.parse('{"title":"API 数据安全机制实现总结","description":"","frontmatter":{},"headers":[],"relativePath":"other/第三方平台/支付宝/API接口安全机制总结.md","lastUpdated":1680584985000}'),i={name:"other/第三方平台/支付宝/API接口安全机制总结.md"},r=t('<h1 id="api-数据安全机制实现总结" tabindex="-1">API 数据安全机制实现总结 <a class="header-anchor" href="#api-数据安全机制实现总结" aria-label="Permalink to &quot;API 数据安全机制实现总结&quot;">​</a></h1><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><ul><li>平台 <ul><li>平台公钥：商户使用平台公钥 对 平台向商户发送的数据 进行解密/验签</li><li>平台私钥：平台使用平台私钥 对 平台向商户发送的数据 进行加密/签名</li></ul></li><li>商户 <ul><li>商户公钥：平台使用商户公钥 对 商户向平台发送的数据 进行解密/验签</li><li>商户私钥：商户使用商户私钥 对 商户向平台发送的数据 进行加密/签名</li></ul></li></ul><h2 id="公钥私钥生成" tabindex="-1">公钥私钥生成 <a class="header-anchor" href="#公钥私钥生成" aria-label="Permalink to &quot;公钥私钥生成&quot;">​</a></h2><ul><li>商户生成 商户公钥和商户私钥</li><li>平台生成 平台公钥和平台私钥</li><li>商户下载平台公钥并保存</li><li>商户向平台提交商户公钥</li></ul><h2 id="数据请求流程" tabindex="-1">数据请求流程 <a class="header-anchor" href="#数据请求流程" aria-label="Permalink to &quot;数据请求流程&quot;">​</a></h2><h3 id="商户向平台发送数据" tabindex="-1">商户向平台发送数据 <a class="header-anchor" href="#商户向平台发送数据" aria-label="Permalink to &quot;商户向平台发送数据&quot;">​</a></h3><h3 id="平台向商户发送数据" tabindex="-1">平台向商户发送数据 <a class="header-anchor" href="#平台向商户发送数据" aria-label="Permalink to &quot;平台向商户发送数据&quot;">​</a></h3>',8),o=[r];function h(n,_,s,d,c,u){return e(),l("div",null,o)}const p=a(i,[["render",h]]);export{m as __pageData,p as default};
