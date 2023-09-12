import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const y=JSON.parse('{"title":"laravel9 自定义 request 验证的返回格式","description":"","frontmatter":{},"headers":[],"relativePath":"server/php/laravel/laravel9自定义resquest验证的返回格式.md","lastUpdated":1680584985000}'),l={name:"server/php/laravel/laravel9自定义resquest验证的返回格式.md"},p=e(`<h1 id="laravel9-自定义-request-验证的返回格式" tabindex="-1">laravel9 自定义 request 验证的返回格式 <a class="header-anchor" href="#laravel9-自定义-request-验证的返回格式" aria-label="Permalink to &quot;laravel9 自定义 request 验证的返回格式&quot;">​</a></h1><p>新建 request 基类文件<br> app/Http/Requests/Api/FormRequest.php</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;?php</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">namespace App\\Http\\Requests\\Api;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">use App\\Http\\Controllers\\Controller;</span></span>
<span class="line"><span style="color:#babed8;">use Illuminate\\Foundation\\Http\\FormRequest as BaseFormRequest;</span></span>
<span class="line"><span style="color:#babed8;">use Illuminate\\Contracts\\Validation\\Validator;</span></span>
<span class="line"><span style="color:#babed8;">use Illuminate\\Http\\Exceptions\\HttpResponseException;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">class FormRequest extends BaseFormRequest</span></span>
<span class="line"><span style="color:#babed8;">{</span></span>
<span class="line"><span style="color:#babed8;">    public function authorize()</span></span>
<span class="line"><span style="color:#babed8;">    {</span></span>
<span class="line"><span style="color:#babed8;">        return true;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    # 重写 failedValidation 方法</span></span>
<span class="line"><span style="color:#babed8;">    protected function failedValidation(Validator $validator) {</span></span>
<span class="line"><span style="color:#babed8;">        # 拿到 验证的错误信息</span></span>
<span class="line"><span style="color:#babed8;">        $error= $validator-&gt;errors()-&gt;all();</span></span>
<span class="line"><span style="color:#babed8;">        # 自定义响应结果</span></span>
<span class="line"><span style="color:#babed8;">        $res = response()-&gt;json([&#39;msg&#39;=&gt;&#39;error&#39;,&#39;code&#39;=&gt;&#39;500&#39;,&#39;data&#39;=&gt;$error[0]], 500)</span></span>
<span class="line"><span style="color:#babed8;">        # 抛出异常</span></span>
<span class="line"><span style="color:#babed8;">        throw new HttpResponseException($res);</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,3),t=[p];function o(r,c,i,d,b,u){return a(),n("div",null,t)}const m=s(l,[["render",o]]);export{y as __pageData,m as default};
