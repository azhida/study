import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"other/加密/各种语言HMAC_SHA256实现.md","lastUpdated":1680584985000}'),l={name:"other/加密/各种语言HMAC_SHA256实现.md"},p=e(`<p>注：本文是网上转载，仅用于学习，在此感谢大神指导！</p><h2 id="各种语言hmac-sha256实现" tabindex="-1">各种语言HMAC SHA256实现 <a class="header-anchor" href="#各种语言hmac-sha256实现" aria-label="Permalink to &quot;各种语言HMAC SHA256实现&quot;">​</a></h2><h5 id="语言包含" tabindex="-1">语言包含 <a class="header-anchor" href="#语言包含" aria-label="Permalink to &quot;语言包含&quot;">​</a></h5><pre><code>Javascript ，PHP，Java，Groovy，C#，Objective C，Go，Ruby，Python，Perl，Dart，Swift，Rust，Powershell
</code></pre><h6 id="javascript-hmac-sha256" tabindex="-1">Javascript HMAC SHA256 <a class="header-anchor" href="#javascript-hmac-sha256" aria-label="Permalink to &quot;Javascript HMAC SHA256&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">Run the code online with this jsfiddle. Dependent upon an open source js library calledhttp://code.google.com/p/crypto-js/.</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script src=&quot;http://crypto-js.googlecode.com/svn/tags/3.0.2/build/rollups/hmac-sha256.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;script src=&quot;http://crypto-js.googlecode.com/svn/tags/3.0.2/build/components/enc-base64-min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#babed8;">  var hash = CryptoJS.HmacSHA256(&quot;Message&quot;, &quot;secret&quot;);</span></span>
<span class="line"><span style="color:#babed8;">  var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);</span></span>
<span class="line"><span style="color:#babed8;">  document.write(hashInBase64);</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h6 id="php-hmac-sha256" tabindex="-1">PHP HMAC SHA256 <a class="header-anchor" href="#php-hmac-sha256" aria-label="Permalink to &quot;PHP HMAC SHA256&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">PHP has built in methods for hash_hmac (PHP 5) and base64_encode (PHP 4, PHP 5) resulting in no outside dependencies. Say what you want about PHP but they have the cleanest code for this example.</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">$s = hash_hmac(&#39;sha256&#39;, &#39;Message&#39;, &#39;secret&#39;, true);</span></span>
<span class="line"><span style="color:#babed8;">echo base64_encode($s);</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h6 id="java-hmac-sha256" tabindex="-1">Java HMAC SHA256 <a class="header-anchor" href="#java-hmac-sha256" aria-label="Permalink to &quot;Java HMAC SHA256&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">Dependent on Apache Commons Codec to encode in base64.</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">import javax.crypto.Mac;</span></span>
<span class="line"><span style="color:#babed8;">import javax.crypto.spec.SecretKeySpec;</span></span>
<span class="line"><span style="color:#babed8;">import org.apache.commons.codec.binary.Base64;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">public class ApiSecurityExample {</span></span>
<span class="line"><span style="color:#babed8;">  public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#babed8;">    try {</span></span>
<span class="line"><span style="color:#babed8;">     String secret = &quot;secret&quot;;</span></span>
<span class="line"><span style="color:#babed8;">     String message = &quot;Message&quot;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">     Mac sha256_HMAC = Mac.getInstance(&quot;HmacSHA256&quot;);</span></span>
<span class="line"><span style="color:#babed8;">     SecretKeySpec secret_key = new SecretKeySpec(secret.getBytes(), &quot;HmacSHA256&quot;);</span></span>
<span class="line"><span style="color:#babed8;">     sha256_HMAC.init(secret_key);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">     String hash = Base64.encodeBase64String(sha256_HMAC.doFinal(message.getBytes()));</span></span>
<span class="line"><span style="color:#babed8;">     System.out.println(hash);</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">    catch (Exception e){</span></span>
<span class="line"><span style="color:#babed8;">     System.out.println(&quot;Error&quot;);</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">   }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h6 id="groovy-hmac-sha256" tabindex="-1">Groovy HMAC SHA256 <a class="header-anchor" href="#groovy-hmac-sha256" aria-label="Permalink to &quot;Groovy HMAC SHA256&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#babed8;">It is mostly Java code but there are some slight differences. Adapted from Dev Takeout - Groovy HMAC/SHA256 representation.</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">import javax.crypto.Mac;</span></span>
<span class="line"><span style="color:#babed8;">import javax.crypto.spec.SecretKeySpec;</span></span>
<span class="line"><span style="color:#babed8;">import java.security.InvalidKeyException;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">def hmac_sha256(String secretKey, String data) {</span></span>
<span class="line"><span style="color:#babed8;"> try {</span></span>
<span class="line"><span style="color:#babed8;">    Mac mac = Mac.getInstance(&quot;HmacSHA256&quot;)</span></span>
<span class="line"><span style="color:#babed8;">    SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(), &quot;HmacSHA256&quot;)</span></span>
<span class="line"><span style="color:#babed8;">    mac.init(secretKeySpec)</span></span>
<span class="line"><span style="color:#babed8;">    byte[] digest = mac.doFinal(data.getBytes())</span></span>
<span class="line"><span style="color:#babed8;">    return digest</span></span>
<span class="line"><span style="color:#babed8;">   } catch (InvalidKeyException e) {</span></span>
<span class="line"><span style="color:#babed8;">    throw new RuntimeException(&quot;Invalid key exception while converting to HMac SHA256&quot;)</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">def hash = hmac_sha256(&quot;secret&quot;, &quot;Message&quot;)</span></span>
<span class="line"><span style="color:#babed8;">encodedData = hash.encodeBase64().toString()</span></span>
<span class="line"><span style="color:#babed8;">log.info(encodedData)</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h6 id="c-hmac-sha256" tabindex="-1">C# HMAC SHA256 <a class="header-anchor" href="#c-hmac-sha256" aria-label="Permalink to &quot;C# HMAC SHA256&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">using System.Security.Cryptography;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">namespace Test</span></span>
<span class="line"><span style="color:#babed8;">{</span></span>
<span class="line"><span style="color:#babed8;">  public class MyHmac</span></span>
<span class="line"><span style="color:#babed8;">  {</span></span>
<span class="line"><span style="color:#babed8;">    private string CreateToken(string message, string secret)</span></span>
<span class="line"><span style="color:#babed8;">    {</span></span>
<span class="line"><span style="color:#babed8;">      secret = secret ?? &quot;&quot;;</span></span>
<span class="line"><span style="color:#babed8;">      var encoding = new System.Text.ASCIIEncoding();</span></span>
<span class="line"><span style="color:#babed8;">      byte[] keyByte = encoding.GetBytes(secret);</span></span>
<span class="line"><span style="color:#babed8;">      byte[] messageBytes = encoding.GetBytes(message);</span></span>
<span class="line"><span style="color:#babed8;">      using (var hmacsha256 = new HMACSHA256(keyByte))</span></span>
<span class="line"><span style="color:#babed8;">      {</span></span>
<span class="line"><span style="color:#babed8;">        byte[] hashmessage = hmacsha256.ComputeHash(messageBytes);</span></span>
<span class="line"><span style="color:#babed8;">        return Convert.ToBase64String(hashmessage);</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h6 id="objective-c-and-cocoa-hmac-sha256" tabindex="-1">Objective C and Cocoa HMAC SHA256 <a class="header-anchor" href="#objective-c-and-cocoa-hmac-sha256" aria-label="Permalink to &quot;Objective C and Cocoa HMAC SHA256&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">Most of the code required was for converting to bae64 and working the NSString and NSData data types.</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">#import &quot;AppDelegate.h&quot;</span></span>
<span class="line"><span style="color:#babed8;">#import &lt;CommonCrypto/CommonHMAC.h&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">@implementation AppDelegate</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">- (void)applicationDidFinishLaunching:(NSNotification *)aNotification {</span></span>
<span class="line"><span style="color:#babed8;"> NSString* key = @&quot;secret&quot;;</span></span>
<span class="line"><span style="color:#babed8;"> NSString* data = @&quot;Message&quot;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> const char *cKey = [key cStringUsingEncoding:NSASCIIStringEncoding];</span></span>
<span class="line"><span style="color:#babed8;"> const char *cData = [data cStringUsingEncoding:NSASCIIStringEncoding];</span></span>
<span class="line"><span style="color:#babed8;"> unsigned char cHMAC[CC_SHA256_DIGEST_LENGTH];</span></span>
<span class="line"><span style="color:#babed8;"> CCHmac(kCCHmacAlgSHA256, cKey, strlen(cKey), cData, strlen(cData), cHMAC);</span></span>
<span class="line"><span style="color:#babed8;"> NSData *hash = [[NSData alloc] initWithBytes:cHMAC length:sizeof(cHMAC)];</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> NSLog(@&quot;%@&quot;, hash);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> NSString* s = [AppDelegate base64forData:hash];</span></span>
<span class="line"><span style="color:#babed8;"> NSLog(s);</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">+ (NSString*)base64forData:(NSData*)theData {</span></span>
<span class="line"><span style="color:#babed8;"> const uint8_t* input = (const uint8_t*)[theData bytes];</span></span>
<span class="line"><span style="color:#babed8;"> NSInteger length = [theData length];</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> static char table[] = &quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=&quot;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> NSMutableData* data = [NSMutableData dataWithLength:((length + 2) / 3) * 4];</span></span>
<span class="line"><span style="color:#babed8;"> uint8_t* output = (uint8_t*)data.mutableBytes;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> NSInteger i;</span></span>
<span class="line"><span style="color:#babed8;"> for (i=0; i &lt; length; i += 3) {</span></span>
<span class="line"><span style="color:#babed8;"> NSInteger value = 0;</span></span>
<span class="line"><span style="color:#babed8;"> NSInteger j;</span></span>
<span class="line"><span style="color:#babed8;"> for (j = i; j &lt; (i + 3); j++) {</span></span>
<span class="line"><span style="color:#babed8;"> value &lt;&lt;= 8;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> if (j &lt; length) {  value |= (0xFF &amp; input[j]);  }  }  NSInteger theIndex = (i / 3) * 4;  output[theIndex + 0] = table[(value &gt;&gt; 18) &amp; 0x3F];</span></span>
<span class="line"><span style="color:#babed8;"> output[theIndex + 1] = table[(value &gt;&gt; 12) &amp; 0x3F];</span></span>
<span class="line"><span style="color:#babed8;"> output[theIndex + 2] = (i + 1) &lt; length ? table[(value &gt;&gt; 6) &amp; 0x3F] : &#39;=&#39;;</span></span>
<span class="line"><span style="color:#babed8;"> output[theIndex + 3] = (i + 2) &lt; length ? table[(value &gt;&gt; 0) &amp; 0x3F] : &#39;=&#39;;</span></span>
<span class="line"><span style="color:#babed8;"> }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> return [[NSString alloc] initWithData:data encoding:NSASCIIStringEncoding]; }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">@end</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h6 id="go-programming-language-golang-hmac-sha256" tabindex="-1">Go programming language - Golang HMAC SHA256 <a class="header-anchor" href="#go-programming-language-golang-hmac-sha256" aria-label="Permalink to &quot;Go programming language - Golang HMAC SHA256&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">Try it online in your browser with Play GoLang</span></span>
<span class="line"><span style="color:#babed8;">crypto/hmac package</span></span>
<span class="line"><span style="color:#babed8;">package main</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">import (</span></span>
<span class="line"><span style="color:#babed8;">    &quot;crypto/hmac&quot;</span></span>
<span class="line"><span style="color:#babed8;">    &quot;crypto/sha256&quot;</span></span>
<span class="line"><span style="color:#babed8;">    &quot;encoding/base64&quot;</span></span>
<span class="line"><span style="color:#babed8;">    &quot;fmt&quot;</span></span>
<span class="line"><span style="color:#babed8;">)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">func ComputeHmac256(message string, secret string) string {</span></span>
<span class="line"><span style="color:#babed8;">    key := []byte(secret)</span></span>
<span class="line"><span style="color:#babed8;">    h := hmac.New(sha256.New, key)</span></span>
<span class="line"><span style="color:#babed8;">    h.Write([]byte(message))</span></span>
<span class="line"><span style="color:#babed8;">    return base64.StdEncoding.EncodeToString(h.Sum(nil))</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">func main() {</span></span>
<span class="line"><span style="color:#babed8;">    fmt.Println(ComputeHmac256(&quot;Message&quot;, &quot;secret&quot;))</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">Ruby HMAC SHA256</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">Requires openssl and base64.</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">require &#39;openssl&#39;</span></span>
<span class="line"><span style="color:#babed8;">require &quot;base64&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">hash  = OpenSSL::HMAC.digest(&#39;sha256&#39;, &quot;secret&quot;, &quot;Message&quot;)</span></span>
<span class="line"><span style="color:#babed8;">puts Base64.encode64(hash)</span></span>
<span class="line"><span style="color:#babed8;">Python (2.7) HMAC SHA256</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">import hashlib</span></span>
<span class="line"><span style="color:#babed8;">import hmac</span></span>
<span class="line"><span style="color:#babed8;">import base64</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">message = bytes(&quot;Message&quot;).encode(&#39;utf-8&#39;)</span></span>
<span class="line"><span style="color:#babed8;">secret = bytes(&quot;secret&quot;).encode(&#39;utf-8&#39;)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">signature = base64.b64encode(hmac.new(secret, message, digestmod=hashlib.sha256).digest())</span></span>
<span class="line"><span style="color:#babed8;">print(signature)</span></span>
<span class="line"><span style="color:#babed8;">Tested with Python 2.7.6. Also, be sure not to name your python demo script the same as one of the imported libraries.</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h6 id="perl-hmac-sha256" tabindex="-1">Perl HMAC SHA256 <a class="header-anchor" href="#perl-hmac-sha256" aria-label="Permalink to &quot;Perl HMAC SHA256&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">See Digest::SHA documentation. By convention, the Digest modules do not pad their Base64 output. To fix this you can test the length of the hash and append equal signs &quot;=&quot; until it is the length is a multiple of 4. We will use a modulus function below.</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">use Digest::SHA qw(hmac_sha256_base64);</span></span>
<span class="line"><span style="color:#babed8;">$digest = hmac_sha256_base64(&quot;Message&quot;, &quot;secret&quot;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># digest is currently: qnR8UCqJggD55PohusaBNviGoOJ67HC6Btry4qXLVZc</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># Fix padding of Base64 digests</span></span>
<span class="line"><span style="color:#babed8;">while (length($digest) % 4) {</span></span>
<span class="line"><span style="color:#babed8;">    $digest .= &#39;=&#39;;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">print $digest;</span></span>
<span class="line"><span style="color:#babed8;"># digest is now: qnR8UCqJggD55PohusaBNviGoOJ67HC6Btry4qXLVZc=</span></span>
<span class="line"><span style="color:#babed8;">Dart HMAC SHA256</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">Dependent upon the Dart crypto package.</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">import &#39;dart:html&#39;;</span></span>
<span class="line"><span style="color:#babed8;">import &#39;dart:convert&#39;;</span></span>
<span class="line"><span style="color:#babed8;">import &#39;package:crypto/crypto.dart&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">void main() {</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  String secret = &#39;secret&#39;;</span></span>
<span class="line"><span style="color:#babed8;">  String message = &#39;Message&#39;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  List&lt;int&gt; secretBytes = UTF8.encode(&#39;secret&#39;);</span></span>
<span class="line"><span style="color:#babed8;">  List&lt;int&gt; messageBytes = UTF8.encode(&#39;Message&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  var hmac = new HMAC(new SHA256(), secretBytes);</span></span>
<span class="line"><span style="color:#babed8;">  hmac.add(messageBytes);</span></span>
<span class="line"><span style="color:#babed8;">  var digest = hmac.close();</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  var hash = CryptoUtils.bytesToBase64(digest);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // output to html page</span></span>
<span class="line"><span style="color:#babed8;">  querySelector(&#39;#hash&#39;).text = hash;</span></span>
<span class="line"><span style="color:#babed8;">  // hash =&gt; qnR8UCqJggD55PohusaBNviGoOJ67HC6Btry4qXLVZc=</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h6 id="swift-hmac-sha256" tabindex="-1">Swift HMAC SHA256 <a class="header-anchor" href="#swift-hmac-sha256" aria-label="Permalink to &quot;Swift HMAC SHA256&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">I have not verified but see this stackOverflow post</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">Rust</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">Take a look at the alco/rust-digest repository for Rust (lang) guidance. I have not verified yet.</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">Powershell (Windows) HMAC SHA256</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">Mostly wrapping of .NET libraries but useful to see it in powershell&#39;s befuddling syntax. See code as gist</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">$message = &#39;Message&#39;</span></span>
<span class="line"><span style="color:#babed8;">$secret = &#39;secret&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">$hmacsha = New-Object System.Security.Cryptography.HMACSHA256</span></span>
<span class="line"><span style="color:#babed8;">$hmacsha.key = [Text.Encoding]::ASCII.GetBytes($secret)</span></span>
<span class="line"><span style="color:#babed8;">$signature = $hmacsha.ComputeHash([Text.Encoding]::ASCII.GetBytes($message))</span></span>
<span class="line"><span style="color:#babed8;">$signature = [Convert]::ToBase64String($signature)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">echo $signature</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># Do we get the expected signature?</span></span>
<span class="line"><span style="color:#babed8;">echo ($signature -eq &#39;qnR8UCqJggD55PohusaBNviGoOJ67HC6Btry4qXLVZc=&#39;)</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,22),t=[p];function o(c,i,r,b,d,y){return a(),n("div",null,t)}const u=s(l,[["render",o]]);export{g as __pageData,u as default};
