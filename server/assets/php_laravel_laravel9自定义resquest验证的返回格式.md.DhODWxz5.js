import{_ as s,c as a,o as n,a3 as e}from"./chunks/framework.CFZOmcOm.js";const m=JSON.parse('{"title":"laravel9 自定义 request 验证的返回格式","description":"","frontmatter":{},"headers":[],"relativePath":"php/laravel/laravel9自定义resquest验证的返回格式.md","filePath":"php/laravel/laravel9自定义resquest验证的返回格式.md","lastUpdated":1722327281000}'),p={name:"php/laravel/laravel9自定义resquest验证的返回格式.md"},l=e(`<h1 id="laravel9-自定义-request-验证的返回格式" tabindex="-1">laravel9 自定义 request 验证的返回格式 <a class="header-anchor" href="#laravel9-自定义-request-验证的返回格式" aria-label="Permalink to &quot;laravel9 自定义 request 验证的返回格式&quot;">​</a></h1><p>新建 request 基类文件<br> app/Http/Requests/Api/FormRequest.php</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace App\\Http\\Requests\\Api;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>use App\\Http\\Controllers\\Controller;</span></span>
<span class="line"><span>use Illuminate\\Foundation\\Http\\FormRequest as BaseFormRequest;</span></span>
<span class="line"><span>use Illuminate\\Contracts\\Validation\\Validator;</span></span>
<span class="line"><span>use Illuminate\\Http\\Exceptions\\HttpResponseException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class FormRequest extends BaseFormRequest</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public function authorize()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 重写 failedValidation 方法</span></span>
<span class="line"><span>    protected function failedValidation(Validator $validator) {</span></span>
<span class="line"><span>        # 拿到 验证的错误信息</span></span>
<span class="line"><span>        $error= $validator-&gt;errors()-&gt;all();</span></span>
<span class="line"><span>        # 自定义响应结果</span></span>
<span class="line"><span>        $res = response()-&gt;json([&#39;msg&#39;=&gt;&#39;error&#39;,&#39;code&#39;=&gt;&#39;500&#39;,&#39;data&#39;=&gt;$error[0]], 500)</span></span>
<span class="line"><span>        # 抛出异常</span></span>
<span class="line"><span>        throw new HttpResponseException($res);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,3),t=[l];function r(i,o,c,u,d,_){return n(),a("div",null,t)}const v=s(p,[["render",r]]);export{m as __pageData,v as default};
