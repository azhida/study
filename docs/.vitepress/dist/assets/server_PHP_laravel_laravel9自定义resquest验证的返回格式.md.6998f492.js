import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.92222dd1.js";const d=JSON.parse('{"title":"laravel9 自定义 request 验证的返回格式","description":"","frontmatter":{},"headers":[],"relativePath":"server/PHP/laravel/laravel9自定义resquest验证的返回格式.md","lastUpdated":null}'),l={name:"server/PHP/laravel/laravel9自定义resquest验证的返回格式.md"},p=e(`<h1 id="laravel9-自定义-request-验证的返回格式" tabindex="-1">laravel9 自定义 request 验证的返回格式 <a class="header-anchor" href="#laravel9-自定义-request-验证的返回格式" aria-label="Permalink to &quot;laravel9 自定义 request 验证的返回格式&quot;">​</a></h1><p>新建 request 基类文件<br> app/Http/Requests/Api/FormRequest.php</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;?php</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">namespace App\\Http\\Requests\\Api;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">use App\\Http\\Controllers\\Controller;</span></span>
<span class="line"><span style="color:#A6ACCD;">use Illuminate\\Foundation\\Http\\FormRequest as BaseFormRequest;</span></span>
<span class="line"><span style="color:#A6ACCD;">use Illuminate\\Contracts\\Validation\\Validator;</span></span>
<span class="line"><span style="color:#A6ACCD;">use Illuminate\\Http\\Exceptions\\HttpResponseException;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class FormRequest extends BaseFormRequest</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    public function authorize()</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # 重写 failedValidation 方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    protected function failedValidation(Validator $validator) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 拿到 验证的错误信息</span></span>
<span class="line"><span style="color:#A6ACCD;">        $error= $validator-&gt;errors()-&gt;all();</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 自定义响应结果</span></span>
<span class="line"><span style="color:#A6ACCD;">        $res = response()-&gt;json([&#39;msg&#39;=&gt;&#39;error&#39;,&#39;code&#39;=&gt;&#39;500&#39;,&#39;data&#39;=&gt;$error[0]], 500)</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 抛出异常</span></span>
<span class="line"><span style="color:#A6ACCD;">        throw new HttpResponseException($res);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),t=[p];function o(r,c,i,A,C,u){return a(),n("div",null,t)}const y=s(l,[["render",o]]);export{d as __pageData,y as default};
