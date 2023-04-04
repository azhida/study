import{_ as a,o as e,c as t,Q as l}from"./chunks/framework.92222dd1.js";const m=JSON.parse('{"title":"支付宝数据接口安全机制","description":"","frontmatter":{},"headers":[],"relativePath":"other/第三方平台/支付宝/支付宝数据接口安全机制.md","lastUpdated":1680584985000}'),r={name:"other/第三方平台/支付宝/支付宝数据接口安全机制.md"},i=l('<h1 id="支付宝数据接口安全机制" tabindex="-1">支付宝数据接口安全机制 <a class="header-anchor" href="#支付宝数据接口安全机制" aria-label="Permalink to &quot;支付宝数据接口安全机制&quot;">​</a></h1><p>参考：<a href="https://opendocs.alipay.com/common/02kf5p" target="_blank" rel="noreferrer">签名与验签介绍</a></p><h2 id="制作-公私钥" tabindex="-1">制作 公私钥 <a class="header-anchor" href="#制作-公私钥" aria-label="Permalink to &quot;制作 公私钥&quot;">​</a></h2><ul><li>生成 支付宝的 公钥和私钥</li><li>生成 商户的 公钥和私钥</li><li>商户和支付宝各自保存自己的私钥不外泄</li></ul><h2 id="商户和支付宝-交换公钥" tabindex="-1">商户和支付宝 交换公钥 <a class="header-anchor" href="#商户和支付宝-交换公钥" aria-label="Permalink to &quot;商户和支付宝 交换公钥&quot;">​</a></h2><ul><li>商户将自己的公钥上传到支付宝平台</li><li>商户从支付宝平台下载支付宝提供的公钥</li></ul><h2 id="公钥和私钥的使用" tabindex="-1">公钥和私钥的使用 <a class="header-anchor" href="#公钥和私钥的使用" aria-label="Permalink to &quot;公钥和私钥的使用&quot;">​</a></h2><ul><li>商户使用 支付宝公钥 验证来自支付宝的同步、异步信息签名</li><li>商户使用 商户私钥 对数据进行签名后 发送给支付宝平台</li><li>支付宝平台使用 商户公钥 验证商户消息的真实合法性</li><li>支付宝平台使用 支付宝私钥 对数据进行签名后 发送给商户</li></ul>',8),o=[i];function _(n,s,c,h,d,u){return e(),t("div",null,o)}const f=a(r,[["render",_]]);export{m as __pageData,f as default};
