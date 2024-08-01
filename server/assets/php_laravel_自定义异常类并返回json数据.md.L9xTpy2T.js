import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.CFZOmcOm.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"php/laravel/自定义异常类并返回json数据.md","filePath":"php/laravel/自定义异常类并返回json数据.md","lastUpdated":1722327281000}'),e={name:"php/laravel/自定义异常类并返回json数据.md"},l=p(`<h6 id="新建文件-app-exceptions-apiexception-php" tabindex="-1">新建文件 app\\Exceptions\\ApiException.php <a class="header-anchor" href="#新建文件-app-exceptions-apiexception-php" aria-label="Permalink to &quot;新建文件 app\\Exceptions\\ApiException.php&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace App\\Exceptions;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ApiException extends \\Exception</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    const ERROR_CODE = &#39;1&#39;;</span></span>
<span class="line"><span>    const ERROR_MSG  = &#39;Operation failure!&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private $data = [];</span></span>
<span class="line"><span>    private $meta = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public function __construct(string $message, $data = [], $meta = [], string $code = &#39;1&#39;)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $this-&gt;code = $code;</span></span>
<span class="line"><span>        $this-&gt;message = __($message ?: self::ERROR_MSG); // 支持多语言</span></span>
<span class="line"><span>        $this-&gt;data = $data;</span></span>
<span class="line"><span>        $this-&gt;meta = $meta;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 方便获取 data数据</span></span>
<span class="line"><span>    public function getData()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return $this-&gt;data;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 方便获取 meta数据</span></span>
<span class="line"><span>    public function getMeta()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return $this-&gt;meta;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public function render()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return response()-&gt;json([</span></span>
<span class="line"><span>            &#39;code&#39; =&gt; $this-&gt;code,</span></span>
<span class="line"><span>            &#39;msg&#39; =&gt; $this-&gt;getMessage(),</span></span>
<span class="line"><span>            &#39;meta&#39; =&gt; $this-&gt;getMeta(),</span></span>
<span class="line"><span>            &#39;data&#39; =&gt; $this-&gt;getData(),</span></span>
<span class="line"><span>        ], 200);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h6 id="修改文件-app-exceptions-handler-php" tabindex="-1">修改文件 app\\Exceptions\\Handler.php <a class="header-anchor" href="#修改文件-app-exceptions-handler-php" aria-label="Permalink to &quot;修改文件 app\\Exceptions\\Handler.php&quot;">​</a></h6><p>在 $dontReport 数组中，添加刚刚新建的异常类 ApiException::class 即可</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace App\\Exceptions;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>use Illuminate\\Foundation\\Exceptions\\Handler as ExceptionHandler;</span></span>
<span class="line"><span>use Throwable;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Handler extends ExceptionHandler</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * A list of the exception types that are not reported.</span></span>
<span class="line"><span>     * 不需要抛出异常的列表</span></span>
<span class="line"><span>     * @var array</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    protected $dontReport = [</span></span>
<span class="line"><span>        ApiException::class, // 此处添加新建的异常类即可，其他地方无需修改</span></span>
<span class="line"><span>    ];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * A list of the inputs that are never flashed for validation exceptions.</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @var array</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    protected $dontFlash = [</span></span>
<span class="line"><span>        &#39;password&#39;,</span></span>
<span class="line"><span>        &#39;password_confirmation&#39;,</span></span>
<span class="line"><span>    ];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * Register the exception handling callbacks for the application.</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @return void</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public function register()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        $this-&gt;reportable(function (Throwable $e) {</span></span>
<span class="line"><span>            //</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h6 id="使用方法-1" tabindex="-1">使用方法 1 <a class="header-anchor" href="#使用方法-1" aria-label="Permalink to &quot;使用方法 1&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$msg = &#39;错误信息&#39;;</span></span>
<span class="line"><span>$data = [</span></span>
<span class="line"><span>    &#39;data_a&#39; =&gt; &#39;data_a&#39;,</span></span>
<span class="line"><span>    &#39;data_b&#39; =&gt; &#39;data_b&#39;,</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>$meta = [</span></span>
<span class="line"><span>    &#39;meta_a&#39; =&gt; &#39;meta_a&#39;,</span></span>
<span class="line"><span>    &#39;meta_b&#39; =&gt; &#39;meta_b&#39;,</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>throw new ApiException($msg, $data, $meta);</span></span></code></pre></div><h6 id="使用方法-2" tabindex="-1">使用方法 2 <a class="header-anchor" href="#使用方法-2" aria-label="Permalink to &quot;使用方法 2&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$msg = &#39;错误信息&#39;;</span></span>
<span class="line"><span>$data = [</span></span>
<span class="line"><span>    &#39;data_a&#39; =&gt; &#39;data_a&#39;,</span></span>
<span class="line"><span>    &#39;data_b&#39; =&gt; &#39;data_b&#39;,</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>$meta = [</span></span>
<span class="line"><span>    &#39;meta_a&#39; =&gt; &#39;meta_a&#39;,</span></span>
<span class="line"><span>    &#39;meta_b&#39; =&gt; &#39;meta_b&#39;,</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>    throw new ApiException($msg, $data, $meta);</span></span>
<span class="line"><span>} catch (ApiException $exception) {</span></span>
<span class="line"><span>    dd($exception-&gt;getMessage(), $exception-&gt;getData(), $exception-&gt;getMeta());</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,9),t=[l];function i(c,o,d,r,h,g){return n(),a("div",null,t)}const m=s(e,[["render",i]]);export{u as __pageData,m as default};
