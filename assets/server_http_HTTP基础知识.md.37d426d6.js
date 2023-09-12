import{_ as a,o as s,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const _=JSON.parse('{"title":"HTTP 基础知识","description":"","frontmatter":{},"headers":[],"relativePath":"server/http/HTTP基础知识.md","lastUpdated":1680584985000}'),p={name:"server/http/HTTP基础知识.md"},l=e(`<h1 id="http-基础知识" tabindex="-1">HTTP 基础知识 <a class="header-anchor" href="#http-基础知识" aria-label="Permalink to &quot;HTTP 基础知识&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># HTTP 提交数据有两种方式：</span></span>
<span class="line"><span style="color:#babed8;"># 1、application/x-www-form-urlencoded (默认值)</span></span>
<span class="line"><span style="color:#babed8;"># 2、multipart/form-data</span></span>
<span class="line"><span style="color:#babed8;"># form 表单提交文件的时候，需要增加 enctype=&quot;multipart/form-data&quot;，才能正确传输文件，因为默认的 enctype 是 enctype=&quot;application/x-www-form-urlencoded&quot;。</span></span>
<span class="line"><span style="color:#babed8;"># 只有当 POST 配合 multipart/form-data 时才能正确传输文件。</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 状态码：HTTP 提供了丰富的状态码供我们使用，正确的使用状态码可以让响应数据更具可读性。</span></span>
<span class="line"><span style="color:#babed8;"># 200 OK - 对成功的 GET、PUT、PATCH 或 DELETE 操作进行响应。也可以被用在不创建新资源的 POST 操作上</span></span>
<span class="line"><span style="color:#babed8;"># 201 Created - 对创建新资源的 POST 操作进行响应。应该带着指向新资源地址的 Location 头</span></span>
<span class="line"><span style="color:#babed8;"># 202 Accepted - 服务器接受了请求，但是还未处理，响应中应该包含相应的指示信息，告诉客户端该去哪里查询关于本次请求的信息</span></span>
<span class="line"><span style="color:#babed8;"># 204 No Content - 对不会返回响应体的成功请求进行响应（比如 DELETE 请求）</span></span>
<span class="line"><span style="color:#babed8;"># 304 Not Modified - HTTP 缓存 header 生效的时候用</span></span>
<span class="line"><span style="color:#babed8;"># 400 Bad Request - 请求异常，比如请求中的 body 无法解析</span></span>
<span class="line"><span style="color:#babed8;"># 401 Unauthorized - 没有进行认证或者认证非法</span></span>
<span class="line"><span style="color:#babed8;"># 403 Forbidden - 服务器已经理解请求，但是拒绝执行它</span></span>
<span class="line"><span style="color:#babed8;"># 404 Not Found - 请求一个不存在的资源</span></span>
<span class="line"><span style="color:#babed8;"># 405 Method Not Allowed - 所请求的 HTTP 方法不允许当前认证用户访问</span></span>
<span class="line"><span style="color:#babed8;"># 410 Gone - 表示当前请求的资源不再可用。当调用老版本 API 的时候很有用</span></span>
<span class="line"><span style="color:#babed8;"># 415 Unsupported Media Type - 如果请求中的内容类型是错误的</span></span>
<span class="line"><span style="color:#babed8;"># 422 Unprocessable Entity - 用来表示校验错误</span></span>
<span class="line"><span style="color:#babed8;"># 429 Too Many Requests - 由于请求频次达到上限而被拒绝访问</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,2),o=[l];function t(c,r,d,i,b,T){return s(),n("div",null,o)}const u=a(p,[["render",t]]);export{_ as __pageData,u as default};
