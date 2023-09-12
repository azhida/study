import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.aaef0e9b.js";const f=JSON.parse('{"title":"Vue3 公众号jssdk引用方法","description":"","frontmatter":{},"headers":[],"relativePath":"web/vue/vue3公众号jssdk引用方法.md","lastUpdated":1692258583000}'),p={name:"web/vue/vue3公众号jssdk引用方法.md"},o=l(`<h1 id="vue3-公众号jssdk引用方法" tabindex="-1">Vue3 公众号jssdk引用方法 <a class="header-anchor" href="#vue3-公众号jssdk引用方法" aria-label="Permalink to &quot;Vue3 公众号jssdk引用方法&quot;">​</a></h1><h2 id="实操" tabindex="-1">实操 <a class="header-anchor" href="#实操" aria-label="Permalink to &quot;实操&quot;">​</a></h2><ul><li>安装 weixin-js-sdk</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">weixin-js-sdk</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-S</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">weixin-js-sdk</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--save</span></span>
<span class="line"></span></code></pre></div><ul><li>在代码中引入</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">import</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">jweixin</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">weixin-js-sdk</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><ul><li>新增一个对应的.d.ts</li></ul><p>/src/weixin-js-sdk.d.ts</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">WeixinJsSdk</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/** **************************************************************************</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * Type definations</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ****************************************************************************/</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">type</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">JSApis</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">onMenuShareTimeline</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">onMenuShareAppMessage</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">onMenuShareQQ</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">onMenuShareWeibo</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">onMenuShareQZone</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">startRecord</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">stopRecord</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">onVoiceRecordEnd</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">playVoice</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pauseVoice</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">stopVoice</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">onVoicePlayEnd</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">uploadVoice</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">downloadVoice</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chooseImage</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">previewImage</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">uploadImage</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">downloadImage</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">translateVoice</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">getNetworkType</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">openLocation</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">getLocation</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hideOptionMenu</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">showOptionMenu</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hideMenuItems</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">showMenuItems</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hideAllNonBaseMenuItem</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">showAllNonBaseMenuItem</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">closeWindow</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scanQRCode</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chooseWXPay</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">openProductSpecificView</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">addCard</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chooseCard</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">openCard</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">checkJsApi</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">onRecordEnd</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">openWXDeviceLib</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">closeWXDeviceLib</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">configWXDeviceWiFi</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">getWXDeviceInfos</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sendDataToWXDevice</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">startScanWXDevice</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">stopScanWXDevice</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">connectWXDevice</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">disconnectWXDevice</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">getWXDeviceTicket</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">WeixinJSBridgeReady</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">onWXDeviceBindStateChange</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">onWXDeviceStateChange</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">onScanWXDeviceResult</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">onReceiveDataFromWXDevice</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">onWXDeviceBluetoothStateChange</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">type</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Menus</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:exposeArticle</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 举报</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:setFont</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 调整字体</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:dayMode</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 日间模式</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:nightMode</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 夜间模式</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:refresh</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 刷新</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:profile</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 查看公众号（已添加）</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:addContact</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 查看公众号（未添加）</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:share:appMessage</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 发送给朋友</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:share:timeline</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 分享到朋友圈</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:share:qq</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 分享到 QQ</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:share:weiboApp</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 分享到 Weibo</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:favorite</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 收藏</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:share:facebook</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 分享到 Facebook</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:share:QZone</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 分享到 QQ 空间</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:editTag</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 编辑标签</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:delete</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 删除</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:copyUrl</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 复制链接</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:originPage</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 原网页</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:readMode</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 阅读模式</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:openWithQQBrowser</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 在QQ浏览器中打开</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:openWithSafari</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 在Safari中打开</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:share:email</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 邮件</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">menuItem:share:brand</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 一些特殊公众号</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">type</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">scanTypes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">qrCode</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 二维码</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">barCode</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 一维码</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">type</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">ImageSize</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">original</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">compressed</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">type</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">SourceType</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">album</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">camera</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/** **************************************************************************</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * Interface definations</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ****************************************************************************/</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">ConfigOptions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    debug</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 公众号的唯一标识</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    appId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 生成签名的时间戳</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    timestamp</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 生成签名的随机串</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    nonceStr</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 签名</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    signature</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 需要使用的JS接口列表</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    jsApiList</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">JSApis</span><span style="color:#F07178;">[]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/* beta */</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// beta: boolean</span></span>
<span class="line"><span style="color:#F07178;">    [</span><span style="color:#BABED8;font-style:italic;">x</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">any</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 所有接口通过wx对象(也可使用jWeixin对象)来调用，参数是一个对象，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 除了每个接口本身需要传的参数之外，还有以下通用参数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 接口调用成功时执行的回调函数。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    success</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">res</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 接口调用失败时执行的回调函数。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    fail</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">res</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 接口调用完成时执行的回调函数，无论成功或失败都会执行。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    complete</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">res</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 用户点击取消时的回调函数，仅部分有用户取消操作的api才会用到。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    cancel</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">res</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">MenuCallbacks</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    trigger</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">res</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">CheckJsApiOptions</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 需要检测的JS接口列表</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    jsApiList</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">JSApis</span><span style="color:#F07178;">[]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OnMenuShareTimelineOptions</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">MenuCallbacks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 分享标题</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    link</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 分享图标</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    imgUrl</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OnMenuShareAppMessageOptions</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OnMenuShareTimelineOptions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 分享描述</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    desc</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 分享类型,music、video或link，不填默认为link</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    type</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">music</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">video</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">link</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 如果type是music或video，则要提供数据链接，默认为空</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    dataUrl</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OnMenuShareQQ</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OnMenuShareTimelineOptions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 分享描述</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    desc</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OnMenuShareWeibo</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OnMenuShareTimelineOptions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 分享描述</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    desc</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OnMenuShareQZone</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OnMenuShareTimelineOptions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 分享描述</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    desc</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">ChooseImageOptions</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 一次可选择图片数量</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 默认为 9</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    count</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 可以指定是原图还是压缩图，默认二者都有</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    sizeType</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">ImageSize</span><span style="color:#F07178;">[]</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 可以指定来源是相册还是相机，默认二者都有</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    sourceType</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">SourceType</span><span style="color:#F07178;">[]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">PreviewImageOptions</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 当前显示图片的 http 链接</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    current</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 需要预览的图片 http 链接列表</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    urls</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#F07178;">[]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">UploadImageOptions</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 需要上传的图片的本地ID，由chooseImage接口获得</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    localId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 显示进度提示</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    isShowProgressTips</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">DownloadImageOptions</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 需要下载的图片的服务器端ID，由uploadImage接口获得</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    serverId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 显示进度提示</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    isShowProgressTips</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">GetLocalImgDataOptions</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 图片的localID</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    localId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">LocalVoiceOptions</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 本地ID，由 stopRecord 接口获得</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    localId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">UploadVoiceOptions</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">LocalVoiceOptions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 显示进度提示</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    isShowProgressTips</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">DownloadVoiceOptions</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 需要下载的音频的服务器端ID，由uploadVoice接口获得</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    serverId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 显示进度提示</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    isShowProgressTips</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OpenLocationOptions</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 纬度，浮点数，范围为90 ~ -90</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    latitude</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 经度，浮点数，范围为180 ~ -180。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    longitude</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 位置名</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 地址详情说明</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    address</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 地图缩放级别,整形值,范围从1~28。默认为最大</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    scale</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 在查看位置界面底部显示的超链接,可点击跳转</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    infoUrl</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">GetLocationOptions</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入&#39;gcj02&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">wgs84</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gcj02</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">StartSearchBeacons</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 摇周边的业务ticket, 系统自动添加在摇出来的页面链接后面</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    ticket</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">MenuOptions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    menuList</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Menus</span><span style="color:#F07178;">[]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">ScanQRCodeOptions</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 默认为0，扫描结果由微信处理，1则直接返回扫描结果</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    needResult</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 可以指定扫二维码还是一维码，默认二者都有</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    scanType</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">scanTypes</span><span style="color:#F07178;">[]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OpenProductSpecificViewOptions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 商品id</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    productId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     *  0.默认值，普通商品详情页</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     *  1.扫一扫商品详情页</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     *  2.小店商品详情页</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    viewType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">ChooseCardOptions</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 门店Id</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    shopId</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 卡券类型</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    cardType</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 卡券Id</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    cardId</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 卡券签名时间戳</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    timestamp</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 卡券签名随机串</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    nonceStr</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 签名方式，默认&#39;SHA1&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    signType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SHA1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 卡券签名</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    cardSign</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">AddCard</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    cardId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;">    cardExt</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">AddCardOptions</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    cardList</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">AddCard</span><span style="color:#F07178;">[]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OpenCard</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    cardId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;">    code</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OpenCardOptions</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    cardList</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OpenCard</span><span style="color:#F07178;">[]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">ChooseWXPayOptions</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    timestamp</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 支付签名随机串，不长于 32 位</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    nonceStr</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    package</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 签名方式，默认为&#39;SHA1&#39;，使用新版支付需传入&#39;MD5&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    signType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SHA1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MD5</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 支付签名</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    paySign</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/** **************************************************************************</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 配置方法</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ****************************************************************************/</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 注入权限验证配置</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 所有需要使用 JS-SDK 的页面必须先注入配置信息，否则将无法调用。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * （同一个 url 仅需调用一次，对于变化 url 的 SPA 的 web app 可在每次url变化时进行调用,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 目前 Android 微信客户端不支持 pushState 的 H5 新特性，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 所以使用 pushState 来实现 web app 的页面会导致签名失败，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 此问题会在 Android6.2中修复。）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">config</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">ConfigOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 处理成功验证</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 则可以直接调用，不需要放在ready函数中。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ready</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">callback</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 处理失败验证</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * config信息验证失败会执行error函数，如签名过期导致验证失败，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 对于SPA可以在这里更新签名。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">error</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">callback</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">res</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 判断当前客户端版本是否支持指定JS接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 备注：checkJsApi接口是客户端6.0.2新引入的一个预留接口，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 第一期开放的接口均可不使用checkJsApi来检测。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">checkJsApi</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">CheckJsApiOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/** **************************************************************************</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 分享接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ****************************************************************************/</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">onMenuShareTimeline</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OnMenuShareTimelineOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 获取“分享给朋友”按钮点击状态及自定义分享内容接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">onMenuShareAppMessage</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OnMenuShareAppMessageOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 获取“分享到QQ”按钮点击状态及自定义分享内容接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">onMenuShareQQ</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OnMenuShareQQ</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">onMenuShareWeibo</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OnMenuShareWeibo</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">onMenuShareQZone</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OnMenuShareQZone</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/** **************************************************************************</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 图像接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ****************************************************************************/</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 拍照或从手机相册中选图接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">chooseImage</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">ChooseImageOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 预览图片接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">previewImage</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">PreviewImageOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 上传图片接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 备注：上传图片有效期3天，可用微信多媒体接口下载图片到自己的服务器，此处获得的 serverId 即 media_id。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">uploadImage</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">UploadImageOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 下载图片接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">downloadImage</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">DownloadImageOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 获取本地图片接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getLocalImgData</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">GetLocalImgDataOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/** **************************************************************************</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 音频接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ****************************************************************************/</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 开始录音接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">startRecord</span><span style="color:#89DDFF;">():</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 停止录音接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">stopRecord</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 监听录音自动停止接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">onVoiceRecordEnd</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 播放语音接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">playVoice</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">LocalVoiceOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 暂停播放接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">pauseVoice</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">LocalVoiceOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 停止播放接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">stopVoice</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">LocalVoiceOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 监听语音播放完毕接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">onVoicePlayEnd</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 上传语音接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">uploadVoice</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">UploadVoiceOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 下载语音接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">downloadVoice</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">DownloadVoiceOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/** **************************************************************************</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 智能接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ****************************************************************************/</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 识别音频并返回识别结果接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">translateVoice</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">UploadVoiceOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/** **************************************************************************</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 设备信息</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ****************************************************************************/</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 获取网络状态接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getNetworkType</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/** **************************************************************************</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 地理信息</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ****************************************************************************/</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 使用微信内置地图查看位置接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">openLocation</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OpenLocationOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 获取地理位置接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getLocation</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">GetLocationOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/** **************************************************************************</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 摇一摇周边</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ****************************************************************************/</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 开启查找周边ibeacon设备接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">startSearchBeacons</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">StartSearchBeacons</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 关闭查找周边ibeacon设备接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">stopSearchBeacons</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 监听周边ibeacon设备接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 备注：上述摇一摇周边接口使用注意事项及更多返回结果说明，请参考：摇一摇周边获取设备信息</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">onSearchBeacons</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Callbacks</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/** **************************************************************************</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 界面操作</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ****************************************************************************/</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 关闭当前网页窗口接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">closeWindow</span><span style="color:#89DDFF;">():</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 批量隐藏功能按钮接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">hideMenuItems</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">MenuOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 批量显示功能按钮接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">showMenuItems</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">MenuOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 隐藏所有非基础按钮接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">hideAllNonBaseMenuItem</span><span style="color:#89DDFF;">():</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 显示所有功能按钮接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">showAllNonBaseMenuItem</span><span style="color:#89DDFF;">():</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/** **************************************************************************</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 微信扫一扫</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ****************************************************************************/</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 调起微信扫一扫接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">scanQRCode</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">ScanQRCodeOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/** **************************************************************************</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 微信小店</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ****************************************************************************/</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 跳转微信商品页接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">openProductSpecificView</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OpenProductSpecificViewOptions</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/** **************************************************************************</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 微信卡券</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ****************************************************************************/</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 拉取适用卡券列表并获取用户选择信息</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">chooseCard</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">ChooseCardOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 批量添加卡券接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">addCard</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">AddCardOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 查看微信卡包中的卡券接口</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">openCard</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OpenCardOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/** **************************************************************************</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 微信支付</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ****************************************************************************/</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 发起一个微信支付请求</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">chooseWXPay</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">ChooseWXPayOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#F07178;">}</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">module</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">weixin-js-sdk</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">WeixinJsSdk</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><p><a href="https://blog.csdn.net/qq_46113578/article/details/129258469" target="_blank" rel="noreferrer">【Vite+ts+Vue3】公众号jssdk引用方法</a></p>`,11),e=[o];function t(c,y,r,F,i,D){return n(),a("div",null,e)}const B=s(p,[["render",t]]);export{f as __pageData,B as default};
