import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.92222dd1.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/PHP/laravel/自定义异常类并返回json数据.md","lastUpdated":null}'),l={name:"server/PHP/laravel/自定义异常类并返回json数据.md"},e=p(`<h6 id="新建文件-app-exceptions-apiexception-php" tabindex="-1">新建文件 app\\Exceptions\\ApiException.php <a class="header-anchor" href="#新建文件-app-exceptions-apiexception-php" aria-label="Permalink to &quot;新建文件 app\\Exceptions\\ApiException.php&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;?php</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">namespace App\\Exceptions;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class ApiException extends \\Exception</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    const ERROR_CODE = &#39;1&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    const ERROR_MSG  = &#39;Operation failure!&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    private $data = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">    private $meta = [];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public function __construct(string $message, $data = [], $meta = [], string $code = &#39;1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        $this-&gt;code = $code;</span></span>
<span class="line"><span style="color:#A6ACCD;">        $this-&gt;message = __($message ?: self::ERROR_MSG); // 支持多语言</span></span>
<span class="line"><span style="color:#A6ACCD;">        $this-&gt;data = $data;</span></span>
<span class="line"><span style="color:#A6ACCD;">        $this-&gt;meta = $meta;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 方便获取 data数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    public function getData()</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return $this-&gt;data;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 方便获取 meta数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    public function getMeta()</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return $this-&gt;meta;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public function render()</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return response()-&gt;json([</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;code&#39; =&gt; $this-&gt;code,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;msg&#39; =&gt; $this-&gt;getMessage(),</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;meta&#39; =&gt; $this-&gt;getMeta(),</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;data&#39; =&gt; $this-&gt;getData(),</span></span>
<span class="line"><span style="color:#A6ACCD;">        ], 200);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="修改文件-app-exceptions-handler-php" tabindex="-1">修改文件 app\\Exceptions\\Handler.php <a class="header-anchor" href="#修改文件-app-exceptions-handler-php" aria-label="Permalink to &quot;修改文件 app\\Exceptions\\Handler.php&quot;">​</a></h6><p>在 $dontReport 数组中，添加刚刚新建的异常类 ApiException::class 即可</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;?php</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">namespace App\\Exceptions;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">use Illuminate\\Foundation\\Exceptions\\Handler as ExceptionHandler;</span></span>
<span class="line"><span style="color:#A6ACCD;">use Throwable;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Handler extends ExceptionHandler</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * A list of the exception types that are not reported.</span></span>
<span class="line"><span style="color:#A6ACCD;">     * 不需要抛出异常的列表</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @var array</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    protected $dontReport = [</span></span>
<span class="line"><span style="color:#A6ACCD;">        ApiException::class, // 此处添加新建的异常类即可，其他地方无需修改</span></span>
<span class="line"><span style="color:#A6ACCD;">    ];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * A list of the inputs that are never flashed for validation exceptions.</span></span>
<span class="line"><span style="color:#A6ACCD;">     *</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @var array</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    protected $dontFlash = [</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;password&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;password_confirmation&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * Register the exception handling callbacks for the application.</span></span>
<span class="line"><span style="color:#A6ACCD;">     *</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @return void</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    public function register()</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        $this-&gt;reportable(function (Throwable $e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            //</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="使用方法-1" tabindex="-1">使用方法 1 <a class="header-anchor" href="#使用方法-1" aria-label="Permalink to &quot;使用方法 1&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$msg = &#39;错误信息&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">$data = [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;data_a&#39; =&gt; &#39;data_a&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;data_b&#39; =&gt; &#39;data_b&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">$meta = [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;meta_a&#39; =&gt; &#39;meta_a&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;meta_b&#39; =&gt; &#39;meta_b&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">throw new ApiException($msg, $data, $meta);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="使用方法-2" tabindex="-1">使用方法 2 <a class="header-anchor" href="#使用方法-2" aria-label="Permalink to &quot;使用方法 2&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$msg = &#39;错误信息&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">$data = [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;data_a&#39; =&gt; &#39;data_a&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;data_b&#39; =&gt; &#39;data_b&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">$meta = [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;meta_a&#39; =&gt; &#39;meta_a&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;meta_b&#39; =&gt; &#39;meta_b&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">try {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new ApiException($msg, $data, $meta);</span></span>
<span class="line"><span style="color:#A6ACCD;">} catch (ApiException $exception) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    dd($exception-&gt;getMessage(), $exception-&gt;getData(), $exception-&gt;getMeta());</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,9),t=[e];function o(c,i,A,C,r,y){return a(),n("div",null,t)}const h=s(l,[["render",o]]);export{d as __pageData,h as default};
