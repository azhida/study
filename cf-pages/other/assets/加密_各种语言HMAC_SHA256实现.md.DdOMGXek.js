import{_ as a,c as n,o as p,a3 as e}from"./chunks/framework.Bf7f-acG.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"加密/各种语言HMAC_SHA256实现.md","filePath":"加密/各种语言HMAC_SHA256实现.md","lastUpdated":1746496452000}'),t={name:"加密/各种语言HMAC_SHA256实现.md"};function l(i,s,c,o,r,h){return p(),n("div",null,s[0]||(s[0]=[e(`<p>注：本文是网上转载，仅用于学习，在此感谢大神指导！</p><h2 id="各种语言hmac-sha256实现" tabindex="-1">各种语言HMAC SHA256实现 <a class="header-anchor" href="#各种语言hmac-sha256实现" aria-label="Permalink to &quot;各种语言HMAC SHA256实现&quot;">​</a></h2><h5 id="语言包含" tabindex="-1">语言包含 <a class="header-anchor" href="#语言包含" aria-label="Permalink to &quot;语言包含&quot;">​</a></h5><pre><code>Javascript ，PHP，Java，Groovy，C#，Objective C，Go，Ruby，Python，Perl，Dart，Swift，Rust，Powershell
</code></pre><h6 id="javascript-hmac-sha256" tabindex="-1">Javascript HMAC SHA256 <a class="header-anchor" href="#javascript-hmac-sha256" aria-label="Permalink to &quot;Javascript HMAC SHA256&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Run the code online with this jsfiddle. Dependent upon an open source js library calledhttp://code.google.com/p/crypto-js/.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script src=&quot;http://crypto-js.googlecode.com/svn/tags/3.0.2/build/rollups/hmac-sha256.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;http://crypto-js.googlecode.com/svn/tags/3.0.2/build/components/enc-base64-min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  var hash = CryptoJS.HmacSHA256(&quot;Message&quot;, &quot;secret&quot;);</span></span>
<span class="line"><span>  var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);</span></span>
<span class="line"><span>  document.write(hashInBase64);</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h6 id="php-hmac-sha256" tabindex="-1">PHP HMAC SHA256 <a class="header-anchor" href="#php-hmac-sha256" aria-label="Permalink to &quot;PHP HMAC SHA256&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PHP has built in methods for hash_hmac (PHP 5) and base64_encode (PHP 4, PHP 5) resulting in no outside dependencies. Say what you want about PHP but they have the cleanest code for this example.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$s = hash_hmac(&#39;sha256&#39;, &#39;Message&#39;, &#39;secret&#39;, true);</span></span>
<span class="line"><span>echo base64_encode($s);</span></span></code></pre></div><h6 id="java-hmac-sha256" tabindex="-1">Java HMAC SHA256 <a class="header-anchor" href="#java-hmac-sha256" aria-label="Permalink to &quot;Java HMAC SHA256&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Dependent on Apache Commons Codec to encode in base64.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import javax.crypto.Mac;</span></span>
<span class="line"><span>import javax.crypto.spec.SecretKeySpec;</span></span>
<span class="line"><span>import org.apache.commons.codec.binary.Base64;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class ApiSecurityExample {</span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>     String secret = &quot;secret&quot;;</span></span>
<span class="line"><span>     String message = &quot;Message&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     Mac sha256_HMAC = Mac.getInstance(&quot;HmacSHA256&quot;);</span></span>
<span class="line"><span>     SecretKeySpec secret_key = new SecretKeySpec(secret.getBytes(), &quot;HmacSHA256&quot;);</span></span>
<span class="line"><span>     sha256_HMAC.init(secret_key);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     String hash = Base64.encodeBase64String(sha256_HMAC.doFinal(message.getBytes()));</span></span>
<span class="line"><span>     System.out.println(hash);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    catch (Exception e){</span></span>
<span class="line"><span>     System.out.println(&quot;Error&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h6 id="groovy-hmac-sha256" tabindex="-1">Groovy HMAC SHA256 <a class="header-anchor" href="#groovy-hmac-sha256" aria-label="Permalink to &quot;Groovy HMAC SHA256&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>It is mostly Java code but there are some slight differences. Adapted from Dev Takeout - Groovy HMAC/SHA256 representation.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import javax.crypto.Mac;</span></span>
<span class="line"><span>import javax.crypto.spec.SecretKeySpec;</span></span>
<span class="line"><span>import java.security.InvalidKeyException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def hmac_sha256(String secretKey, String data) {</span></span>
<span class="line"><span> try {</span></span>
<span class="line"><span>    Mac mac = Mac.getInstance(&quot;HmacSHA256&quot;)</span></span>
<span class="line"><span>    SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(), &quot;HmacSHA256&quot;)</span></span>
<span class="line"><span>    mac.init(secretKeySpec)</span></span>
<span class="line"><span>    byte[] digest = mac.doFinal(data.getBytes())</span></span>
<span class="line"><span>    return digest</span></span>
<span class="line"><span>   } catch (InvalidKeyException e) {</span></span>
<span class="line"><span>    throw new RuntimeException(&quot;Invalid key exception while converting to HMac SHA256&quot;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def hash = hmac_sha256(&quot;secret&quot;, &quot;Message&quot;)</span></span>
<span class="line"><span>encodedData = hash.encodeBase64().toString()</span></span>
<span class="line"><span>log.info(encodedData)</span></span></code></pre></div><h6 id="c-hmac-sha256" tabindex="-1">C# HMAC SHA256 <a class="header-anchor" href="#c-hmac-sha256" aria-label="Permalink to &quot;C# HMAC SHA256&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>using System.Security.Cryptography;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace Test</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  public class MyHmac</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    private string CreateToken(string message, string secret)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      secret = secret ?? &quot;&quot;;</span></span>
<span class="line"><span>      var encoding = new System.Text.ASCIIEncoding();</span></span>
<span class="line"><span>      byte[] keyByte = encoding.GetBytes(secret);</span></span>
<span class="line"><span>      byte[] messageBytes = encoding.GetBytes(message);</span></span>
<span class="line"><span>      using (var hmacsha256 = new HMACSHA256(keyByte))</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        byte[] hashmessage = hmacsha256.ComputeHash(messageBytes);</span></span>
<span class="line"><span>        return Convert.ToBase64String(hashmessage);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h6 id="objective-c-and-cocoa-hmac-sha256" tabindex="-1">Objective C and Cocoa HMAC SHA256 <a class="header-anchor" href="#objective-c-and-cocoa-hmac-sha256" aria-label="Permalink to &quot;Objective C and Cocoa HMAC SHA256&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Most of the code required was for converting to bae64 and working the NSString and NSData data types.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#import &quot;AppDelegate.h&quot;</span></span>
<span class="line"><span>#import &lt;CommonCrypto/CommonHMAC.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@implementation AppDelegate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- (void)applicationDidFinishLaunching:(NSNotification *)aNotification {</span></span>
<span class="line"><span> NSString* key = @&quot;secret&quot;;</span></span>
<span class="line"><span> NSString* data = @&quot;Message&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> const char *cKey = [key cStringUsingEncoding:NSASCIIStringEncoding];</span></span>
<span class="line"><span> const char *cData = [data cStringUsingEncoding:NSASCIIStringEncoding];</span></span>
<span class="line"><span> unsigned char cHMAC[CC_SHA256_DIGEST_LENGTH];</span></span>
<span class="line"><span> CCHmac(kCCHmacAlgSHA256, cKey, strlen(cKey), cData, strlen(cData), cHMAC);</span></span>
<span class="line"><span> NSData *hash = [[NSData alloc] initWithBytes:cHMAC length:sizeof(cHMAC)];</span></span>
<span class="line"><span></span></span>
<span class="line"><span> NSLog(@&quot;%@&quot;, hash);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> NSString* s = [AppDelegate base64forData:hash];</span></span>
<span class="line"><span> NSLog(s);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+ (NSString*)base64forData:(NSData*)theData {</span></span>
<span class="line"><span> const uint8_t* input = (const uint8_t*)[theData bytes];</span></span>
<span class="line"><span> NSInteger length = [theData length];</span></span>
<span class="line"><span></span></span>
<span class="line"><span> static char table[] = &quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> NSMutableData* data = [NSMutableData dataWithLength:((length + 2) / 3) * 4];</span></span>
<span class="line"><span> uint8_t* output = (uint8_t*)data.mutableBytes;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> NSInteger i;</span></span>
<span class="line"><span> for (i=0; i &lt; length; i += 3) {</span></span>
<span class="line"><span> NSInteger value = 0;</span></span>
<span class="line"><span> NSInteger j;</span></span>
<span class="line"><span> for (j = i; j &lt; (i + 3); j++) {</span></span>
<span class="line"><span> value &lt;&lt;= 8;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> if (j &lt; length) {  value |= (0xFF &amp; input[j]);  }  }  NSInteger theIndex = (i / 3) * 4;  output[theIndex + 0] = table[(value &gt;&gt; 18) &amp; 0x3F];</span></span>
<span class="line"><span> output[theIndex + 1] = table[(value &gt;&gt; 12) &amp; 0x3F];</span></span>
<span class="line"><span> output[theIndex + 2] = (i + 1) &lt; length ? table[(value &gt;&gt; 6) &amp; 0x3F] : &#39;=&#39;;</span></span>
<span class="line"><span> output[theIndex + 3] = (i + 2) &lt; length ? table[(value &gt;&gt; 0) &amp; 0x3F] : &#39;=&#39;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> return [[NSString alloc] initWithData:data encoding:NSASCIIStringEncoding]; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@end</span></span></code></pre></div><h6 id="go-programming-language-golang-hmac-sha256" tabindex="-1">Go programming language - Golang HMAC SHA256 <a class="header-anchor" href="#go-programming-language-golang-hmac-sha256" aria-label="Permalink to &quot;Go programming language - Golang HMAC SHA256&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Try it online in your browser with Play GoLang</span></span>
<span class="line"><span>crypto/hmac package</span></span>
<span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>    &quot;crypto/hmac&quot;</span></span>
<span class="line"><span>    &quot;crypto/sha256&quot;</span></span>
<span class="line"><span>    &quot;encoding/base64&quot;</span></span>
<span class="line"><span>    &quot;fmt&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func ComputeHmac256(message string, secret string) string {</span></span>
<span class="line"><span>    key := []byte(secret)</span></span>
<span class="line"><span>    h := hmac.New(sha256.New, key)</span></span>
<span class="line"><span>    h.Write([]byte(message))</span></span>
<span class="line"><span>    return base64.StdEncoding.EncodeToString(h.Sum(nil))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    fmt.Println(ComputeHmac256(&quot;Message&quot;, &quot;secret&quot;))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Ruby HMAC SHA256</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Requires openssl and base64.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>require &#39;openssl&#39;</span></span>
<span class="line"><span>require &quot;base64&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>hash  = OpenSSL::HMAC.digest(&#39;sha256&#39;, &quot;secret&quot;, &quot;Message&quot;)</span></span>
<span class="line"><span>puts Base64.encode64(hash)</span></span>
<span class="line"><span>Python (2.7) HMAC SHA256</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import hashlib</span></span>
<span class="line"><span>import hmac</span></span>
<span class="line"><span>import base64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message = bytes(&quot;Message&quot;).encode(&#39;utf-8&#39;)</span></span>
<span class="line"><span>secret = bytes(&quot;secret&quot;).encode(&#39;utf-8&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>signature = base64.b64encode(hmac.new(secret, message, digestmod=hashlib.sha256).digest())</span></span>
<span class="line"><span>print(signature)</span></span>
<span class="line"><span>Tested with Python 2.7.6. Also, be sure not to name your python demo script the same as one of the imported libraries.</span></span></code></pre></div><h6 id="perl-hmac-sha256" tabindex="-1">Perl HMAC SHA256 <a class="header-anchor" href="#perl-hmac-sha256" aria-label="Permalink to &quot;Perl HMAC SHA256&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>See Digest::SHA documentation. By convention, the Digest modules do not pad their Base64 output. To fix this you can test the length of the hash and append equal signs &quot;=&quot; until it is the length is a multiple of 4. We will use a modulus function below.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>use Digest::SHA qw(hmac_sha256_base64);</span></span>
<span class="line"><span>$digest = hmac_sha256_base64(&quot;Message&quot;, &quot;secret&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span># digest is currently: qnR8UCqJggD55PohusaBNviGoOJ67HC6Btry4qXLVZc</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Fix padding of Base64 digests</span></span>
<span class="line"><span>while (length($digest) % 4) {</span></span>
<span class="line"><span>    $digest .= &#39;=&#39;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print $digest;</span></span>
<span class="line"><span># digest is now: qnR8UCqJggD55PohusaBNviGoOJ67HC6Btry4qXLVZc=</span></span>
<span class="line"><span>Dart HMAC SHA256</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Dependent upon the Dart crypto package.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;dart:html&#39;;</span></span>
<span class="line"><span>import &#39;dart:convert&#39;;</span></span>
<span class="line"><span>import &#39;package:crypto/crypto.dart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void main() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  String secret = &#39;secret&#39;;</span></span>
<span class="line"><span>  String message = &#39;Message&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  List&lt;int&gt; secretBytes = UTF8.encode(&#39;secret&#39;);</span></span>
<span class="line"><span>  List&lt;int&gt; messageBytes = UTF8.encode(&#39;Message&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  var hmac = new HMAC(new SHA256(), secretBytes);</span></span>
<span class="line"><span>  hmac.add(messageBytes);</span></span>
<span class="line"><span>  var digest = hmac.close();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  var hash = CryptoUtils.bytesToBase64(digest);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // output to html page</span></span>
<span class="line"><span>  querySelector(&#39;#hash&#39;).text = hash;</span></span>
<span class="line"><span>  // hash =&gt; qnR8UCqJggD55PohusaBNviGoOJ67HC6Btry4qXLVZc=</span></span>
<span class="line"><span>}</span></span></code></pre></div><h6 id="swift-hmac-sha256" tabindex="-1">Swift HMAC SHA256 <a class="header-anchor" href="#swift-hmac-sha256" aria-label="Permalink to &quot;Swift HMAC SHA256&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>I have not verified but see this stackOverflow post</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Rust</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Take a look at the alco/rust-digest repository for Rust (lang) guidance. I have not verified yet.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Powershell (Windows) HMAC SHA256</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Mostly wrapping of .NET libraries but useful to see it in powershell&#39;s befuddling syntax. See code as gist</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$message = &#39;Message&#39;</span></span>
<span class="line"><span>$secret = &#39;secret&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$hmacsha = New-Object System.Security.Cryptography.HMACSHA256</span></span>
<span class="line"><span>$hmacsha.key = [Text.Encoding]::ASCII.GetBytes($secret)</span></span>
<span class="line"><span>$signature = $hmacsha.ComputeHash([Text.Encoding]::ASCII.GetBytes($message))</span></span>
<span class="line"><span>$signature = [Convert]::ToBase64String($signature)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo $signature</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Do we get the expected signature?</span></span>
<span class="line"><span>echo ($signature -eq &#39;qnR8UCqJggD55PohusaBNviGoOJ67HC6Btry4qXLVZc=&#39;)</span></span></code></pre></div>`,22)]))}const d=a(t,[["render",l]]);export{u as __pageData,d as default};
