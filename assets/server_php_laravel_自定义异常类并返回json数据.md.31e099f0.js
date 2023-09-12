import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.aaef0e9b.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/php/laravel/自定义异常类并返回json数据.md","lastUpdated":1680584985000}'),e={name:"server/php/laravel/自定义异常类并返回json数据.md"},l=p(`<h6 id="新建文件-app-exceptions-apiexception-php" tabindex="-1">新建文件 app\\Exceptions\\ApiException.php <a class="header-anchor" href="#新建文件-app-exceptions-apiexception-php" aria-label="Permalink to &quot;新建文件 app\\Exceptions\\ApiException.php&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;?php</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">namespace App\\Exceptions;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">class ApiException extends \\Exception</span></span>
<span class="line"><span style="color:#babed8;">{</span></span>
<span class="line"><span style="color:#babed8;">    const ERROR_CODE = &#39;1&#39;;</span></span>
<span class="line"><span style="color:#babed8;">    const ERROR_MSG  = &#39;Operation failure!&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    private $data = [];</span></span>
<span class="line"><span style="color:#babed8;">    private $meta = [];</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    public function __construct(string $message, $data = [], $meta = [], string $code = &#39;1&#39;)</span></span>
<span class="line"><span style="color:#babed8;">    {</span></span>
<span class="line"><span style="color:#babed8;">        $this-&gt;code = $code;</span></span>
<span class="line"><span style="color:#babed8;">        $this-&gt;message = __($message ?: self::ERROR_MSG); // 支持多语言</span></span>
<span class="line"><span style="color:#babed8;">        $this-&gt;data = $data;</span></span>
<span class="line"><span style="color:#babed8;">        $this-&gt;meta = $meta;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 方便获取 data数据</span></span>
<span class="line"><span style="color:#babed8;">    public function getData()</span></span>
<span class="line"><span style="color:#babed8;">    {</span></span>
<span class="line"><span style="color:#babed8;">        return $this-&gt;data;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 方便获取 meta数据</span></span>
<span class="line"><span style="color:#babed8;">    public function getMeta()</span></span>
<span class="line"><span style="color:#babed8;">    {</span></span>
<span class="line"><span style="color:#babed8;">        return $this-&gt;meta;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    public function render()</span></span>
<span class="line"><span style="color:#babed8;">    {</span></span>
<span class="line"><span style="color:#babed8;">        return response()-&gt;json([</span></span>
<span class="line"><span style="color:#babed8;">            &#39;code&#39; =&gt; $this-&gt;code,</span></span>
<span class="line"><span style="color:#babed8;">            &#39;msg&#39; =&gt; $this-&gt;getMessage(),</span></span>
<span class="line"><span style="color:#babed8;">            &#39;meta&#39; =&gt; $this-&gt;getMeta(),</span></span>
<span class="line"><span style="color:#babed8;">            &#39;data&#39; =&gt; $this-&gt;getData(),</span></span>
<span class="line"><span style="color:#babed8;">        ], 200);</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h6 id="修改文件-app-exceptions-handler-php" tabindex="-1">修改文件 app\\Exceptions\\Handler.php <a class="header-anchor" href="#修改文件-app-exceptions-handler-php" aria-label="Permalink to &quot;修改文件 app\\Exceptions\\Handler.php&quot;">​</a></h6><p>在 $dontReport 数组中，添加刚刚新建的异常类 ApiException::class 即可</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;?php</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">namespace App\\Exceptions;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">use Illuminate\\Foundation\\Exceptions\\Handler as ExceptionHandler;</span></span>
<span class="line"><span style="color:#babed8;">use Throwable;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">class Handler extends ExceptionHandler</span></span>
<span class="line"><span style="color:#babed8;">{</span></span>
<span class="line"><span style="color:#babed8;">    /**</span></span>
<span class="line"><span style="color:#babed8;">     * A list of the exception types that are not reported.</span></span>
<span class="line"><span style="color:#babed8;">     * 不需要抛出异常的列表</span></span>
<span class="line"><span style="color:#babed8;">     * @var array</span></span>
<span class="line"><span style="color:#babed8;">     */</span></span>
<span class="line"><span style="color:#babed8;">    protected $dontReport = [</span></span>
<span class="line"><span style="color:#babed8;">        ApiException::class, // 此处添加新建的异常类即可，其他地方无需修改</span></span>
<span class="line"><span style="color:#babed8;">    ];</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    /**</span></span>
<span class="line"><span style="color:#babed8;">     * A list of the inputs that are never flashed for validation exceptions.</span></span>
<span class="line"><span style="color:#babed8;">     *</span></span>
<span class="line"><span style="color:#babed8;">     * @var array</span></span>
<span class="line"><span style="color:#babed8;">     */</span></span>
<span class="line"><span style="color:#babed8;">    protected $dontFlash = [</span></span>
<span class="line"><span style="color:#babed8;">        &#39;password&#39;,</span></span>
<span class="line"><span style="color:#babed8;">        &#39;password_confirmation&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    ];</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    /**</span></span>
<span class="line"><span style="color:#babed8;">     * Register the exception handling callbacks for the application.</span></span>
<span class="line"><span style="color:#babed8;">     *</span></span>
<span class="line"><span style="color:#babed8;">     * @return void</span></span>
<span class="line"><span style="color:#babed8;">     */</span></span>
<span class="line"><span style="color:#babed8;">    public function register()</span></span>
<span class="line"><span style="color:#babed8;">    {</span></span>
<span class="line"><span style="color:#babed8;">        $this-&gt;reportable(function (Throwable $e) {</span></span>
<span class="line"><span style="color:#babed8;">            //</span></span>
<span class="line"><span style="color:#babed8;">        });</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h6 id="使用方法-1" tabindex="-1">使用方法 1 <a class="header-anchor" href="#使用方法-1" aria-label="Permalink to &quot;使用方法 1&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">$msg = &#39;错误信息&#39;;</span></span>
<span class="line"><span style="color:#babed8;">$data = [</span></span>
<span class="line"><span style="color:#babed8;">    &#39;data_a&#39; =&gt; &#39;data_a&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    &#39;data_b&#39; =&gt; &#39;data_b&#39;,</span></span>
<span class="line"><span style="color:#babed8;">];</span></span>
<span class="line"><span style="color:#babed8;">$meta = [</span></span>
<span class="line"><span style="color:#babed8;">    &#39;meta_a&#39; =&gt; &#39;meta_a&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    &#39;meta_b&#39; =&gt; &#39;meta_b&#39;,</span></span>
<span class="line"><span style="color:#babed8;">];</span></span>
<span class="line"><span style="color:#babed8;">throw new ApiException($msg, $data, $meta);</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h6 id="使用方法-2" tabindex="-1">使用方法 2 <a class="header-anchor" href="#使用方法-2" aria-label="Permalink to &quot;使用方法 2&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">$msg = &#39;错误信息&#39;;</span></span>
<span class="line"><span style="color:#babed8;">$data = [</span></span>
<span class="line"><span style="color:#babed8;">    &#39;data_a&#39; =&gt; &#39;data_a&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    &#39;data_b&#39; =&gt; &#39;data_b&#39;,</span></span>
<span class="line"><span style="color:#babed8;">];</span></span>
<span class="line"><span style="color:#babed8;">$meta = [</span></span>
<span class="line"><span style="color:#babed8;">    &#39;meta_a&#39; =&gt; &#39;meta_a&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    &#39;meta_b&#39; =&gt; &#39;meta_b&#39;,</span></span>
<span class="line"><span style="color:#babed8;">];</span></span>
<span class="line"><span style="color:#babed8;">try {</span></span>
<span class="line"><span style="color:#babed8;">    throw new ApiException($msg, $data, $meta);</span></span>
<span class="line"><span style="color:#babed8;">} catch (ApiException $exception) {</span></span>
<span class="line"><span style="color:#babed8;">    dd($exception-&gt;getMessage(), $exception-&gt;getData(), $exception-&gt;getMeta());</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,9),t=[l];function o(c,b,i,r,d,y){return a(),n("div",null,t)}const _=s(e,[["render",o]]);export{g as __pageData,_ as default};
