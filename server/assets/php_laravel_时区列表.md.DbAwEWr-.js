import{_ as a,c as s,o as n,a3 as p}from"./chunks/framework.CFZOmcOm.js";const T=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"php/laravel/时区列表.md","filePath":"php/laravel/时区列表.md","lastUpdated":1722327281000}'),t={name:"php/laravel/时区列表.md"},o=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$timezones = array(</span></span>
<span class="line"><span>    &#39;Pacific/Midway&#39;       =&gt; &quot;(GMT-11:00) Midway Island&quot;,</span></span>
<span class="line"><span>    &#39;US/Samoa&#39;             =&gt; &quot;(GMT-11:00) Samoa&quot;,</span></span>
<span class="line"><span>    &#39;US/Hawaii&#39;            =&gt; &quot;(GMT-10:00) Hawaii&quot;,</span></span>
<span class="line"><span>    &#39;US/Alaska&#39;            =&gt; &quot;(GMT-09:00) Alaska&quot;,</span></span>
<span class="line"><span>    &#39;US/Pacific&#39;           =&gt; &quot;(GMT-08:00) Pacific Time (US &amp;amp; Canada)&quot;,</span></span>
<span class="line"><span>    &#39;America/Tijuana&#39;      =&gt; &quot;(GMT-08:00) Tijuana&quot;,</span></span>
<span class="line"><span>    &#39;US/Arizona&#39;           =&gt; &quot;(GMT-07:00) Arizona&quot;,</span></span>
<span class="line"><span>    &#39;US/Mountain&#39;          =&gt; &quot;(GMT-07:00) Mountain Time (US &amp;amp; Canada)&quot;,</span></span>
<span class="line"><span>    &#39;America/Chihuahua&#39;    =&gt; &quot;(GMT-07:00) Chihuahua&quot;,</span></span>
<span class="line"><span>    &#39;America/Mazatlan&#39;     =&gt; &quot;(GMT-07:00) Mazatlan&quot;,</span></span>
<span class="line"><span>    &#39;America/Mexico_City&#39;  =&gt; &quot;(GMT-06:00) Mexico City&quot;,</span></span>
<span class="line"><span>    &#39;America/Monterrey&#39;    =&gt; &quot;(GMT-06:00) Monterrey&quot;,</span></span>
<span class="line"><span>    &#39;Canada/Saskatchewan&#39;  =&gt; &quot;(GMT-06:00) Saskatchewan&quot;,</span></span>
<span class="line"><span>    &#39;US/Central&#39;           =&gt; &quot;(GMT-06:00) Central Time (US &amp;amp; Canada)&quot;,</span></span>
<span class="line"><span>    &#39;US/Eastern&#39;           =&gt; &quot;(GMT-05:00) Eastern Time (US &amp;amp; Canada)&quot;,</span></span>
<span class="line"><span>    &#39;US/East-Indiana&#39;      =&gt; &quot;(GMT-05:00) Indiana (East)&quot;,</span></span>
<span class="line"><span>    &#39;America/Bogota&#39;       =&gt; &quot;(GMT-05:00) Bogota&quot;,</span></span>
<span class="line"><span>    &#39;America/Lima&#39;         =&gt; &quot;(GMT-05:00) Lima&quot;,</span></span>
<span class="line"><span>    &#39;America/Caracas&#39;      =&gt; &quot;(GMT-04:30) Caracas&quot;,</span></span>
<span class="line"><span>    &#39;Canada/Atlantic&#39;      =&gt; &quot;(GMT-04:00) Atlantic Time (Canada)&quot;,</span></span>
<span class="line"><span>    &#39;America/La_Paz&#39;       =&gt; &quot;(GMT-04:00) La Paz&quot;,</span></span>
<span class="line"><span>    &#39;America/Santiago&#39;     =&gt; &quot;(GMT-04:00) Santiago&quot;,</span></span>
<span class="line"><span>    &#39;Canada/Newfoundland&#39;  =&gt; &quot;(GMT-03:30) Newfoundland&quot;,</span></span>
<span class="line"><span>    &#39;America/Buenos_Aires&#39; =&gt; &quot;(GMT-03:00) Buenos Aires&quot;,</span></span>
<span class="line"><span>    &#39;Greenland&#39;            =&gt; &quot;(GMT-03:00) Greenland&quot;,</span></span>
<span class="line"><span>    &#39;Atlantic/Stanley&#39;     =&gt; &quot;(GMT-02:00) Stanley&quot;,</span></span>
<span class="line"><span>    &#39;Atlantic/Azores&#39;      =&gt; &quot;(GMT-01:00) Azores&quot;,</span></span>
<span class="line"><span>    &#39;Atlantic/Cape_Verde&#39;  =&gt; &quot;(GMT-01:00) Cape Verde Is.&quot;,</span></span>
<span class="line"><span>    &#39;Africa/Casablanca&#39;    =&gt; &quot;(GMT) Casablanca&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Dublin&#39;        =&gt; &quot;(GMT) Dublin&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Lisbon&#39;        =&gt; &quot;(GMT) Lisbon&quot;,</span></span>
<span class="line"><span>    &#39;Europe/London&#39;        =&gt; &quot;(GMT) London&quot;,</span></span>
<span class="line"><span>    &#39;Africa/Monrovia&#39;      =&gt; &quot;(GMT) Monrovia&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Amsterdam&#39;     =&gt; &quot;(GMT+01:00) Amsterdam&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Belgrade&#39;      =&gt; &quot;(GMT+01:00) Belgrade&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Berlin&#39;        =&gt; &quot;(GMT+01:00) Berlin&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Bratislava&#39;    =&gt; &quot;(GMT+01:00) Bratislava&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Brussels&#39;      =&gt; &quot;(GMT+01:00) Brussels&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Budapest&#39;      =&gt; &quot;(GMT+01:00) Budapest&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Copenhagen&#39;    =&gt; &quot;(GMT+01:00) Copenhagen&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Ljubljana&#39;     =&gt; &quot;(GMT+01:00) Ljubljana&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Madrid&#39;        =&gt; &quot;(GMT+01:00) Madrid&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Paris&#39;         =&gt; &quot;(GMT+01:00) Paris&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Prague&#39;        =&gt; &quot;(GMT+01:00) Prague&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Rome&#39;          =&gt; &quot;(GMT+01:00) Rome&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Sarajevo&#39;      =&gt; &quot;(GMT+01:00) Sarajevo&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Skopje&#39;        =&gt; &quot;(GMT+01:00) Skopje&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Stockholm&#39;     =&gt; &quot;(GMT+01:00) Stockholm&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Vienna&#39;        =&gt; &quot;(GMT+01:00) Vienna&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Warsaw&#39;        =&gt; &quot;(GMT+01:00) Warsaw&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Zagreb&#39;        =&gt; &quot;(GMT+01:00) Zagreb&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Athens&#39;        =&gt; &quot;(GMT+02:00) Athens&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Bucharest&#39;     =&gt; &quot;(GMT+02:00) Bucharest&quot;,</span></span>
<span class="line"><span>    &#39;Africa/Cairo&#39;         =&gt; &quot;(GMT+02:00) Cairo&quot;,</span></span>
<span class="line"><span>    &#39;Africa/Harare&#39;        =&gt; &quot;(GMT+02:00) Harare&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Helsinki&#39;      =&gt; &quot;(GMT+02:00) Helsinki&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Istanbul&#39;      =&gt; &quot;(GMT+02:00) Istanbul&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Jerusalem&#39;       =&gt; &quot;(GMT+02:00) Jerusalem&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Kiev&#39;          =&gt; &quot;(GMT+02:00) Kyiv&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Minsk&#39;         =&gt; &quot;(GMT+02:00) Minsk&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Riga&#39;          =&gt; &quot;(GMT+02:00) Riga&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Sofia&#39;         =&gt; &quot;(GMT+02:00) Sofia&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Tallinn&#39;       =&gt; &quot;(GMT+02:00) Tallinn&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Vilnius&#39;       =&gt; &quot;(GMT+02:00) Vilnius&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Baghdad&#39;         =&gt; &quot;(GMT+03:00) Baghdad&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Kuwait&#39;          =&gt; &quot;(GMT+03:00) Kuwait&quot;,</span></span>
<span class="line"><span>    &#39;Africa/Nairobi&#39;       =&gt; &quot;(GMT+03:00) Nairobi&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Riyadh&#39;          =&gt; &quot;(GMT+03:00) Riyadh&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Moscow&#39;        =&gt; &quot;(GMT+03:00) Moscow&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Tehran&#39;          =&gt; &quot;(GMT+03:30) Tehran&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Baku&#39;            =&gt; &quot;(GMT+04:00) Baku&quot;,</span></span>
<span class="line"><span>    &#39;Europe/Volgograd&#39;     =&gt; &quot;(GMT+04:00) Volgograd&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Muscat&#39;          =&gt; &quot;(GMT+04:00) Muscat&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Tbilisi&#39;         =&gt; &quot;(GMT+04:00) Tbilisi&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Yerevan&#39;         =&gt; &quot;(GMT+04:00) Yerevan&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Kabul&#39;           =&gt; &quot;(GMT+04:30) Kabul&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Karachi&#39;         =&gt; &quot;(GMT+05:00) Karachi&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Tashkent&#39;        =&gt; &quot;(GMT+05:00) Tashkent&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Kolkata&#39;         =&gt; &quot;(GMT+05:30) Kolkata&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Kathmandu&#39;       =&gt; &quot;(GMT+05:45) Kathmandu&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Yekaterinburg&#39;   =&gt; &quot;(GMT+06:00) Ekaterinburg&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Almaty&#39;          =&gt; &quot;(GMT+06:00) Almaty&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Dhaka&#39;           =&gt; &quot;(GMT+06:00) Dhaka&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Novosibirsk&#39;     =&gt; &quot;(GMT+07:00) Novosibirsk&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Bangkok&#39;         =&gt; &quot;(GMT+07:00) Bangkok&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Jakarta&#39;         =&gt; &quot;(GMT+07:00) Jakarta&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Krasnoyarsk&#39;     =&gt; &quot;(GMT+08:00) Krasnoyarsk&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Chongqing&#39;       =&gt; &quot;(GMT+08:00) Chongqing&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Hong_Kong&#39;       =&gt; &quot;(GMT+08:00) Hong Kong&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Kuala_Lumpur&#39;    =&gt; &quot;(GMT+08:00) Kuala Lumpur&quot;,</span></span>
<span class="line"><span>    &#39;Australia/Perth&#39;      =&gt; &quot;(GMT+08:00) Perth&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Singapore&#39;       =&gt; &quot;(GMT+08:00) Singapore&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Taipei&#39;          =&gt; &quot;(GMT+08:00) Taipei&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Ulaanbaatar&#39;     =&gt; &quot;(GMT+08:00) Ulaan Bataar&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Urumqi&#39;          =&gt; &quot;(GMT+08:00) Urumqi&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Irkutsk&#39;         =&gt; &quot;(GMT+09:00) Irkutsk&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Seoul&#39;           =&gt; &quot;(GMT+09:00) Seoul&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Tokyo&#39;           =&gt; &quot;(GMT+09:00) Tokyo&quot;,</span></span>
<span class="line"><span>    &#39;Australia/Adelaide&#39;   =&gt; &quot;(GMT+09:30) Adelaide&quot;,</span></span>
<span class="line"><span>    &#39;Australia/Darwin&#39;     =&gt; &quot;(GMT+09:30) Darwin&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Yakutsk&#39;         =&gt; &quot;(GMT+10:00) Yakutsk&quot;,</span></span>
<span class="line"><span>    &#39;Australia/Brisbane&#39;   =&gt; &quot;(GMT+10:00) Brisbane&quot;,</span></span>
<span class="line"><span>    &#39;Australia/Canberra&#39;   =&gt; &quot;(GMT+10:00) Canberra&quot;,</span></span>
<span class="line"><span>    &#39;Pacific/Guam&#39;         =&gt; &quot;(GMT+10:00) Guam&quot;,</span></span>
<span class="line"><span>    &#39;Australia/Hobart&#39;     =&gt; &quot;(GMT+10:00) Hobart&quot;,</span></span>
<span class="line"><span>    &#39;Australia/Melbourne&#39;  =&gt; &quot;(GMT+10:00) Melbourne&quot;,</span></span>
<span class="line"><span>    &#39;Pacific/Port_Moresby&#39; =&gt; &quot;(GMT+10:00) Port Moresby&quot;,</span></span>
<span class="line"><span>    &#39;Australia/Sydney&#39;     =&gt; &quot;(GMT+10:00) Sydney&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Vladivostok&#39;     =&gt; &quot;(GMT+11:00) Vladivostok&quot;,</span></span>
<span class="line"><span>    &#39;Asia/Magadan&#39;         =&gt; &quot;(GMT+12:00) Magadan&quot;,</span></span>
<span class="line"><span>    &#39;Pacific/Auckland&#39;     =&gt; &quot;(GMT+12:00) Auckland&quot;,</span></span>
<span class="line"><span>    &#39;Pacific/Fiji&#39;         =&gt; &quot;(GMT+12:00) Fiji&quot;,</span></span>
<span class="line"><span>);</span></span></code></pre></div>`,1),u=[o];function l(i,e,q,c,r,g){return n(),s("div",null,u)}const G=a(t,[["render",l]]);export{T as __pageData,G as default};
