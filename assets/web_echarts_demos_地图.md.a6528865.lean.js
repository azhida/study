import{i as ps,r as rs}from"./chunks/index.5fb2bdd5.js";import{_ as Hs,o as j,c as k,x as S,F as zs,N as Js,O as $s,C as Vs,a as hs,Q as Ks}from"./chunks/framework.aaef0e9b.js";import{s as cs}from"./chunks/sample.eca6610e.js";import"./chunks/baseRandom.5a8199cf.js";function ms(s,n){return function(){return s.apply(n,arguments)}}const{toString:Ws}=Object.prototype,{getPrototypeOf:ns}=Object,H=(s=>n=>{const a=Ws.call(n);return s[a]||(s[a]=a.slice(8,-1).toLowerCase())})(Object.create(null)),C=s=>(s=s.toLowerCase(),n=>H(n)===s),z=s=>n=>typeof n===s,{isArray:R}=Array,T=z("undefined");function Gs(s){return s!==null&&!T(s)&&s.constructor!==null&&!T(s.constructor)&&E(s.constructor.isBuffer)&&s.constructor.isBuffer(s)}const Cs=C("ArrayBuffer");function Xs(s){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(s):n=s&&s.buffer&&Cs(s.buffer),n}const Qs=z("string"),E=z("function"),bs=z("number"),J=s=>s!==null&&typeof s=="object",Ys=s=>s===!0||s===!1,U=s=>{if(H(s)!=="object")return!1;const n=ns(s);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in s)&&!(Symbol.iterator in s)},Zs=C("Date"),sn=C("File"),nn=C("Blob"),an=C("FileList"),tn=s=>J(s)&&E(s.pipe),on=s=>{let n;return s&&(typeof FormData=="function"&&s instanceof FormData||E(s.append)&&((n=H(s))==="formdata"||n==="object"&&E(s.toString)&&s.toString()==="[object FormData]"))},ln=C("URLSearchParams"),en=s=>s.trim?s.trim():s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function N(s,n,{allOwnKeys:a=!1}={}){if(s===null||typeof s>"u")return;let t,o;if(typeof s!="object"&&(s=[s]),R(s))for(t=0,o=s.length;t<o;t++)n.call(null,s[t],t,s);else{const l=a?Object.getOwnPropertyNames(s):Object.keys(s),e=l.length;let c;for(t=0;t<e;t++)c=l[t],n.call(null,s[c],c,s)}}function ws(s,n){n=n.toLowerCase();const a=Object.keys(s);let t=a.length,o;for(;t-- >0;)if(o=a[t],n===o.toLowerCase())return o;return null}const gs=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ss=s=>!T(s)&&s!==gs;function Q(){const{caseless:s}=Ss(this)&&this||{},n={},a=(t,o)=>{const l=s&&ws(n,o)||o;U(n[l])&&U(t)?n[l]=Q(n[l],t):U(t)?n[l]=Q({},t):R(t)?n[l]=t.slice():n[l]=t};for(let t=0,o=arguments.length;t<o;t++)arguments[t]&&N(arguments[t],a);return n}const pn=(s,n,a,{allOwnKeys:t}={})=>(N(n,(o,l)=>{a&&E(o)?s[l]=ms(o,a):s[l]=o},{allOwnKeys:t}),s),rn=s=>(s.charCodeAt(0)===65279&&(s=s.slice(1)),s),cn=(s,n,a,t)=>{s.prototype=Object.create(n.prototype,t),s.prototype.constructor=s,Object.defineProperty(s,"super",{value:n.prototype}),a&&Object.assign(s.prototype,a)},Fn=(s,n,a,t)=>{let o,l,e;const c={};if(n=n||{},s==null)return n;do{for(o=Object.getOwnPropertyNames(s),l=o.length;l-- >0;)e=o[l],(!t||t(e,s,n))&&!c[e]&&(n[e]=s[e],c[e]=!0);s=a!==!1&&ns(s)}while(s&&(!a||a(s,n))&&s!==Object.prototype);return n},yn=(s,n,a)=>{s=String(s),(a===void 0||a>s.length)&&(a=s.length),a-=n.length;const t=s.indexOf(n,a);return t!==-1&&t===a},Dn=s=>{if(!s)return null;if(R(s))return s;let n=s.length;if(!bs(n))return null;const a=new Array(n);for(;n-- >0;)a[n]=s[n];return a},un=(s=>n=>s&&n instanceof s)(typeof Uint8Array<"u"&&ns(Uint8Array)),fn=(s,n)=>{const t=(s&&s[Symbol.iterator]).call(s);let o;for(;(o=t.next())&&!o.done;){const l=o.value;n.call(s,l[0],l[1])}},dn=(s,n)=>{let a;const t=[];for(;(a=s.exec(n))!==null;)t.push(a);return t},An=C("HTMLFormElement"),Bn=s=>s.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(a,t,o){return t.toUpperCase()+o}),Fs=(({hasOwnProperty:s})=>(n,a)=>s.call(n,a))(Object.prototype),En=C("RegExp"),_s=(s,n)=>{const a=Object.getOwnPropertyDescriptors(s),t={};N(a,(o,l)=>{let e;(e=n(o,l,s))!==!1&&(t[l]=e||o)}),Object.defineProperties(s,t)},hn=s=>{_s(s,(n,a)=>{if(E(s)&&["arguments","caller","callee"].indexOf(a)!==-1)return!1;const t=s[a];if(E(t)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+a+"'")})}})},mn=(s,n)=>{const a={},t=o=>{o.forEach(l=>{a[l]=!0})};return R(s)?t(s):t(String(s).split(n)),a},Cn=()=>{},bn=(s,n)=>(s=+s,Number.isFinite(s)?s:n),K="abcdefghijklmnopqrstuvwxyz",ys="0123456789",Os={DIGIT:ys,ALPHA:K,ALPHA_DIGIT:K+K.toUpperCase()+ys},wn=(s=16,n=Os.ALPHA_DIGIT)=>{let a="";const{length:t}=n;for(;s--;)a+=n[Math.random()*t|0];return a};function gn(s){return!!(s&&E(s.append)&&s[Symbol.toStringTag]==="FormData"&&s[Symbol.iterator])}const Sn=s=>{const n=new Array(10),a=(t,o)=>{if(J(t)){if(n.indexOf(t)>=0)return;if(!("toJSON"in t)){n[o]=t;const l=R(t)?[]:{};return N(t,(e,c)=>{const D=a(e,o+1);!T(D)&&(l[c]=D)}),n[o]=void 0,l}}return t};return a(s,0)},_n=C("AsyncFunction"),On=s=>s&&(J(s)||E(s))&&E(s.then)&&E(s.catch),p={isArray:R,isArrayBuffer:Cs,isBuffer:Gs,isFormData:on,isArrayBufferView:Xs,isString:Qs,isNumber:bs,isBoolean:Ys,isObject:J,isPlainObject:U,isUndefined:T,isDate:Zs,isFile:sn,isBlob:nn,isRegExp:En,isFunction:E,isStream:tn,isURLSearchParams:ln,isTypedArray:un,isFileList:an,forEach:N,merge:Q,extend:pn,trim:en,stripBOM:rn,inherits:cn,toFlatObject:Fn,kindOf:H,kindOfTest:C,endsWith:yn,toArray:Dn,forEachEntry:fn,matchAll:dn,isHTMLForm:An,hasOwnProperty:Fs,hasOwnProp:Fs,reduceDescriptors:_s,freezeMethods:hn,toObjectSet:mn,toCamelCase:Bn,noop:Cn,toFiniteNumber:bn,findKey:ws,global:gs,isContextDefined:Ss,ALPHABET:Os,generateString:wn,isSpecCompliantForm:gn,toJSONObject:Sn,isAsyncFn:_n,isThenable:On};function f(s,n,a,t,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=s,this.name="AxiosError",n&&(this.code=n),a&&(this.config=a),t&&(this.request=t),o&&(this.response=o)}p.inherits(f,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:p.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Rs=f.prototype,xs={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(s=>{xs[s]={value:s}});Object.defineProperties(f,xs);Object.defineProperty(Rs,"isAxiosError",{value:!0});f.from=(s,n,a,t,o,l)=>{const e=Object.create(Rs);return p.toFlatObject(s,e,function(D){return D!==Error.prototype},c=>c!=="isAxiosError"),f.call(e,s.message,n,a,t,o),e.cause=s,e.name=s.name,l&&Object.assign(e,l),e};const Rn=null;function Y(s){return p.isPlainObject(s)||p.isArray(s)}function Ts(s){return p.endsWith(s,"[]")?s.slice(0,-2):s}function Ds(s,n,a){return s?s.concat(n).map(function(o,l){return o=Ts(o),!a&&l?"["+o+"]":o}).join(a?".":""):n}function xn(s){return p.isArray(s)&&!s.some(Y)}const Tn=p.toFlatObject(p,{},null,function(n){return/^is[A-Z]/.test(n)});function $(s,n,a){if(!p.isObject(s))throw new TypeError("target must be an object");n=n||new FormData,a=p.toFlatObject(a,{metaTokens:!0,dots:!1,indexes:!1},!1,function(u,b){return!p.isUndefined(b[u])});const t=a.metaTokens,o=a.visitor||F,l=a.dots,e=a.indexes,D=(a.Blob||typeof Blob<"u"&&Blob)&&p.isSpecCompliantForm(n);if(!p.isFunction(o))throw new TypeError("visitor must be a function");function r(y){if(y===null)return"";if(p.isDate(y))return y.toISOString();if(!D&&p.isBlob(y))throw new f("Blob is not supported. Use a Buffer instead.");return p.isArrayBuffer(y)||p.isTypedArray(y)?D&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function F(y,u,b){let h=y;if(y&&!b&&typeof y=="object"){if(p.endsWith(u,"{}"))u=t?u:u.slice(0,-2),y=JSON.stringify(y);else if(p.isArray(y)&&xn(y)||(p.isFileList(y)||p.endsWith(u,"[]"))&&(h=p.toArray(y)))return u=Ts(u),h.forEach(function(q,Ms){!(p.isUndefined(q)||q===null)&&n.append(e===!0?Ds([u],Ms,l):e===null?u:u+"[]",r(q))}),!1}return Y(y)?!0:(n.append(Ds(b,u,l),r(y)),!1)}const i=[],B=Object.assign(Tn,{defaultVisitor:F,convertValue:r,isVisitable:Y});function d(y,u){if(!p.isUndefined(y)){if(i.indexOf(y)!==-1)throw Error("Circular reference detected in "+u.join("."));i.push(y),p.forEach(y,function(h,_){(!(p.isUndefined(h)||h===null)&&o.call(n,h,p.isString(_)?_.trim():_,u,B))===!0&&d(h,u?u.concat(_):[_])}),i.pop()}}if(!p.isObject(s))throw new TypeError("data must be an object");return d(s),n}function is(s){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g,function(t){return n[t]})}function as(s,n){this._pairs=[],s&&$(s,this,n)}const Ns=as.prototype;Ns.append=function(n,a){this._pairs.push([n,a])};Ns.toString=function(n){const a=n?function(t){return n.call(this,t,is)}:is;return this._pairs.map(function(o){return a(o[0])+"="+a(o[1])},"").join("&")};function Nn(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ps(s,n,a){if(!n)return s;const t=a&&a.encode||Nn,o=a&&a.serialize;let l;if(o?l=o(n,a):l=p.isURLSearchParams(n)?n.toString():new as(n,a).toString(t),l){const e=s.indexOf("#");e!==-1&&(s=s.slice(0,e)),s+=(s.indexOf("?")===-1?"?":"&")+l}return s}class Pn{constructor(){this.handlers=[]}use(n,a,t){return this.handlers.push({fulfilled:n,rejected:a,synchronous:t?t.synchronous:!1,runWhen:t?t.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){p.forEach(this.handlers,function(t){t!==null&&n(t)})}}const us=Pn,qs={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qn=typeof URLSearchParams<"u"?URLSearchParams:as,jn=typeof FormData<"u"?FormData:null,kn=typeof Blob<"u"?Blob:null,Un=(()=>{let s;return typeof navigator<"u"&&((s=navigator.product)==="ReactNative"||s==="NativeScript"||s==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ln=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),m={isBrowser:!0,classes:{URLSearchParams:qn,FormData:jn,Blob:kn},isStandardBrowserEnv:Un,isStandardBrowserWebWorkerEnv:Ln,protocols:["http","https","file","blob","url","data"]};function vn(s,n){return $(s,new m.classes.URLSearchParams,Object.assign({visitor:function(a,t,o,l){return m.isNode&&p.isBuffer(a)?(this.append(t,a.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)}},n))}function In(s){return p.matchAll(/\w+|\[(\w*)]/g,s).map(n=>n[0]==="[]"?"":n[1]||n[0])}function Mn(s){const n={},a=Object.keys(s);let t;const o=a.length;let l;for(t=0;t<o;t++)l=a[t],n[l]=s[l];return n}function js(s){function n(a,t,o,l){let e=a[l++];const c=Number.isFinite(+e),D=l>=a.length;return e=!e&&p.isArray(o)?o.length:e,D?(p.hasOwnProp(o,e)?o[e]=[o[e],t]:o[e]=t,!c):((!o[e]||!p.isObject(o[e]))&&(o[e]=[]),n(a,t,o[e],l)&&p.isArray(o[e])&&(o[e]=Mn(o[e])),!c)}if(p.isFormData(s)&&p.isFunction(s.entries)){const a={};return p.forEachEntry(s,(t,o)=>{n(In(t),o,a,0)}),a}return null}function Hn(s,n,a){if(p.isString(s))try{return(n||JSON.parse)(s),p.trim(s)}catch(t){if(t.name!=="SyntaxError")throw t}return(a||JSON.stringify)(s)}const ts={transitional:qs,adapter:m.isNode?"http":"xhr",transformRequest:[function(n,a){const t=a.getContentType()||"",o=t.indexOf("application/json")>-1,l=p.isObject(n);if(l&&p.isHTMLForm(n)&&(n=new FormData(n)),p.isFormData(n))return o&&o?JSON.stringify(js(n)):n;if(p.isArrayBuffer(n)||p.isBuffer(n)||p.isStream(n)||p.isFile(n)||p.isBlob(n))return n;if(p.isArrayBufferView(n))return n.buffer;if(p.isURLSearchParams(n))return a.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let c;if(l){if(t.indexOf("application/x-www-form-urlencoded")>-1)return vn(n,this.formSerializer).toString();if((c=p.isFileList(n))||t.indexOf("multipart/form-data")>-1){const D=this.env&&this.env.FormData;return $(c?{"files[]":n}:n,D&&new D,this.formSerializer)}}return l||o?(a.setContentType("application/json",!1),Hn(n)):n}],transformResponse:[function(n){const a=this.transitional||ts.transitional,t=a&&a.forcedJSONParsing,o=this.responseType==="json";if(n&&p.isString(n)&&(t&&!this.responseType||o)){const e=!(a&&a.silentJSONParsing)&&o;try{return JSON.parse(n)}catch(c){if(e)throw c.name==="SyntaxError"?f.from(c,f.ERR_BAD_RESPONSE,this,null,this.response):c}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:m.classes.FormData,Blob:m.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};p.forEach(["delete","get","head","post","put","patch"],s=>{ts.headers[s]={}});const os=ts,zn=p.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Jn=s=>{const n={};let a,t,o;return s&&s.split(`
`).forEach(function(e){o=e.indexOf(":"),a=e.substring(0,o).trim().toLowerCase(),t=e.substring(o+1).trim(),!(!a||n[a]&&zn[a])&&(a==="set-cookie"?n[a]?n[a].push(t):n[a]=[t]:n[a]=n[a]?n[a]+", "+t:t)}),n},fs=Symbol("internals");function x(s){return s&&String(s).trim().toLowerCase()}function L(s){return s===!1||s==null?s:p.isArray(s)?s.map(L):String(s)}function $n(s){const n=Object.create(null),a=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let t;for(;t=a.exec(s);)n[t[1]]=t[2];return n}const Vn=s=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());function W(s,n,a,t,o){if(p.isFunction(t))return t.call(this,n,a);if(o&&(n=a),!!p.isString(n)){if(p.isString(t))return n.indexOf(t)!==-1;if(p.isRegExp(t))return t.test(n)}}function Kn(s){return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,a,t)=>a.toUpperCase()+t)}function Wn(s,n){const a=p.toCamelCase(" "+n);["get","set","has"].forEach(t=>{Object.defineProperty(s,t+a,{value:function(o,l,e){return this[t].call(this,n,o,l,e)},configurable:!0})})}class V{constructor(n){n&&this.set(n)}set(n,a,t){const o=this;function l(c,D,r){const F=x(D);if(!F)throw new Error("header name must be a non-empty string");const i=p.findKey(o,F);(!i||o[i]===void 0||r===!0||r===void 0&&o[i]!==!1)&&(o[i||D]=L(c))}const e=(c,D)=>p.forEach(c,(r,F)=>l(r,F,D));return p.isPlainObject(n)||n instanceof this.constructor?e(n,a):p.isString(n)&&(n=n.trim())&&!Vn(n)?e(Jn(n),a):n!=null&&l(a,n,t),this}get(n,a){if(n=x(n),n){const t=p.findKey(this,n);if(t){const o=this[t];if(!a)return o;if(a===!0)return $n(o);if(p.isFunction(a))return a.call(this,o,t);if(p.isRegExp(a))return a.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,a){if(n=x(n),n){const t=p.findKey(this,n);return!!(t&&this[t]!==void 0&&(!a||W(this,this[t],t,a)))}return!1}delete(n,a){const t=this;let o=!1;function l(e){if(e=x(e),e){const c=p.findKey(t,e);c&&(!a||W(t,t[c],c,a))&&(delete t[c],o=!0)}}return p.isArray(n)?n.forEach(l):l(n),o}clear(n){const a=Object.keys(this);let t=a.length,o=!1;for(;t--;){const l=a[t];(!n||W(this,this[l],l,n,!0))&&(delete this[l],o=!0)}return o}normalize(n){const a=this,t={};return p.forEach(this,(o,l)=>{const e=p.findKey(t,l);if(e){a[e]=L(o),delete a[l];return}const c=n?Kn(l):String(l).trim();c!==l&&delete a[l],a[c]=L(o),t[c]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const a=Object.create(null);return p.forEach(this,(t,o)=>{t!=null&&t!==!1&&(a[o]=n&&p.isArray(t)?t.join(", "):t)}),a}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,a])=>n+": "+a).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...a){const t=new this(n);return a.forEach(o=>t.set(o)),t}static accessor(n){const t=(this[fs]=this[fs]={accessors:{}}).accessors,o=this.prototype;function l(e){const c=x(e);t[c]||(Wn(o,e),t[c]=!0)}return p.isArray(n)?n.forEach(l):l(n),this}}V.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);p.reduceDescriptors(V.prototype,({value:s},n)=>{let a=n[0].toUpperCase()+n.slice(1);return{get:()=>s,set(t){this[a]=t}}});p.freezeMethods(V);const w=V;function G(s,n){const a=this||os,t=n||a,o=w.from(t.headers);let l=t.data;return p.forEach(s,function(c){l=c.call(a,l,o.normalize(),n?n.status:void 0)}),o.normalize(),l}function ks(s){return!!(s&&s.__CANCEL__)}function P(s,n,a){f.call(this,s??"canceled",f.ERR_CANCELED,n,a),this.name="CanceledError"}p.inherits(P,f,{__CANCEL__:!0});function Gn(s,n,a){const t=a.config.validateStatus;!a.status||!t||t(a.status)?s(a):n(new f("Request failed with status code "+a.status,[f.ERR_BAD_REQUEST,f.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a))}const Xn=m.isStandardBrowserEnv?function(){return{write:function(a,t,o,l,e,c){const D=[];D.push(a+"="+encodeURIComponent(t)),p.isNumber(o)&&D.push("expires="+new Date(o).toGMTString()),p.isString(l)&&D.push("path="+l),p.isString(e)&&D.push("domain="+e),c===!0&&D.push("secure"),document.cookie=D.join("; ")},read:function(a){const t=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Qn(s){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)}function Yn(s,n){return n?s.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):s}function Us(s,n){return s&&!Qn(n)?Yn(s,n):n}const Zn=m.isStandardBrowserEnv?function(){const n=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");let t;function o(l){let e=l;return n&&(a.setAttribute("href",e),e=a.href),a.setAttribute("href",e),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname}}return t=o(window.location.href),function(e){const c=p.isString(e)?o(e):e;return c.protocol===t.protocol&&c.host===t.host}}():function(){return function(){return!0}}();function sa(s){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(s);return n&&n[1]||""}function na(s,n){s=s||10;const a=new Array(s),t=new Array(s);let o=0,l=0,e;return n=n!==void 0?n:1e3,function(D){const r=Date.now(),F=t[l];e||(e=r),a[o]=D,t[o]=r;let i=l,B=0;for(;i!==o;)B+=a[i++],i=i%s;if(o=(o+1)%s,o===l&&(l=(l+1)%s),r-e<n)return;const d=F&&r-F;return d?Math.round(B*1e3/d):void 0}}function ds(s,n){let a=0;const t=na(50,250);return o=>{const l=o.loaded,e=o.lengthComputable?o.total:void 0,c=l-a,D=t(c),r=l<=e;a=l;const F={loaded:l,total:e,progress:e?l/e:void 0,bytes:c,rate:D||void 0,estimated:D&&e&&r?(e-l)/D:void 0,event:o};F[n?"download":"upload"]=!0,s(F)}}const aa=typeof XMLHttpRequest<"u",ta=aa&&function(s){return new Promise(function(a,t){let o=s.data;const l=w.from(s.headers).normalize(),e=s.responseType;let c;function D(){s.cancelToken&&s.cancelToken.unsubscribe(c),s.signal&&s.signal.removeEventListener("abort",c)}p.isFormData(o)&&(m.isStandardBrowserEnv||m.isStandardBrowserWebWorkerEnv?l.setContentType(!1):l.setContentType("multipart/form-data;",!1));let r=new XMLHttpRequest;if(s.auth){const d=s.auth.username||"",y=s.auth.password?unescape(encodeURIComponent(s.auth.password)):"";l.set("Authorization","Basic "+btoa(d+":"+y))}const F=Us(s.baseURL,s.url);r.open(s.method.toUpperCase(),Ps(F,s.params,s.paramsSerializer),!0),r.timeout=s.timeout;function i(){if(!r)return;const d=w.from("getAllResponseHeaders"in r&&r.getAllResponseHeaders()),u={data:!e||e==="text"||e==="json"?r.responseText:r.response,status:r.status,statusText:r.statusText,headers:d,config:s,request:r};Gn(function(h){a(h),D()},function(h){t(h),D()},u),r=null}if("onloadend"in r?r.onloadend=i:r.onreadystatechange=function(){!r||r.readyState!==4||r.status===0&&!(r.responseURL&&r.responseURL.indexOf("file:")===0)||setTimeout(i)},r.onabort=function(){r&&(t(new f("Request aborted",f.ECONNABORTED,s,r)),r=null)},r.onerror=function(){t(new f("Network Error",f.ERR_NETWORK,s,r)),r=null},r.ontimeout=function(){let y=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const u=s.transitional||qs;s.timeoutErrorMessage&&(y=s.timeoutErrorMessage),t(new f(y,u.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,s,r)),r=null},m.isStandardBrowserEnv){const d=(s.withCredentials||Zn(F))&&s.xsrfCookieName&&Xn.read(s.xsrfCookieName);d&&l.set(s.xsrfHeaderName,d)}o===void 0&&l.setContentType(null),"setRequestHeader"in r&&p.forEach(l.toJSON(),function(y,u){r.setRequestHeader(u,y)}),p.isUndefined(s.withCredentials)||(r.withCredentials=!!s.withCredentials),e&&e!=="json"&&(r.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&r.addEventListener("progress",ds(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&r.upload&&r.upload.addEventListener("progress",ds(s.onUploadProgress)),(s.cancelToken||s.signal)&&(c=d=>{r&&(t(!d||d.type?new P(null,s,r):d),r.abort(),r=null)},s.cancelToken&&s.cancelToken.subscribe(c),s.signal&&(s.signal.aborted?c():s.signal.addEventListener("abort",c)));const B=sa(F);if(B&&m.protocols.indexOf(B)===-1){t(new f("Unsupported protocol "+B+":",f.ERR_BAD_REQUEST,s));return}r.send(o||null)})},v={http:Rn,xhr:ta};p.forEach(v,(s,n)=>{if(s){try{Object.defineProperty(s,"name",{value:n})}catch{}Object.defineProperty(s,"adapterName",{value:n})}});const Ls={getAdapter:s=>{s=p.isArray(s)?s:[s];const{length:n}=s;let a,t;for(let o=0;o<n&&(a=s[o],!(t=p.isString(a)?v[a.toLowerCase()]:a));o++);if(!t)throw t===!1?new f(`Adapter ${a} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(p.hasOwnProp(v,a)?`Adapter '${a}' is not available in the build`:`Unknown adapter '${a}'`);if(!p.isFunction(t))throw new TypeError("adapter is not a function");return t},adapters:v};function X(s){if(s.cancelToken&&s.cancelToken.throwIfRequested(),s.signal&&s.signal.aborted)throw new P(null,s)}function As(s){return X(s),s.headers=w.from(s.headers),s.data=G.call(s,s.transformRequest),["post","put","patch"].indexOf(s.method)!==-1&&s.headers.setContentType("application/x-www-form-urlencoded",!1),Ls.getAdapter(s.adapter||os.adapter)(s).then(function(t){return X(s),t.data=G.call(s,s.transformResponse,t),t.headers=w.from(t.headers),t},function(t){return ks(t)||(X(s),t&&t.response&&(t.response.data=G.call(s,s.transformResponse,t.response),t.response.headers=w.from(t.response.headers))),Promise.reject(t)})}const Bs=s=>s instanceof w?s.toJSON():s;function O(s,n){n=n||{};const a={};function t(r,F,i){return p.isPlainObject(r)&&p.isPlainObject(F)?p.merge.call({caseless:i},r,F):p.isPlainObject(F)?p.merge({},F):p.isArray(F)?F.slice():F}function o(r,F,i){if(p.isUndefined(F)){if(!p.isUndefined(r))return t(void 0,r,i)}else return t(r,F,i)}function l(r,F){if(!p.isUndefined(F))return t(void 0,F)}function e(r,F){if(p.isUndefined(F)){if(!p.isUndefined(r))return t(void 0,r)}else return t(void 0,F)}function c(r,F,i){if(i in n)return t(r,F);if(i in s)return t(void 0,r)}const D={url:l,method:l,data:l,baseURL:e,transformRequest:e,transformResponse:e,paramsSerializer:e,timeout:e,timeoutMessage:e,withCredentials:e,adapter:e,responseType:e,xsrfCookieName:e,xsrfHeaderName:e,onUploadProgress:e,onDownloadProgress:e,decompress:e,maxContentLength:e,maxBodyLength:e,beforeRedirect:e,transport:e,httpAgent:e,httpsAgent:e,cancelToken:e,socketPath:e,responseEncoding:e,validateStatus:c,headers:(r,F)=>o(Bs(r),Bs(F),!0)};return p.forEach(Object.keys(Object.assign({},s,n)),function(F){const i=D[F]||o,B=i(s[F],n[F],F);p.isUndefined(B)&&i!==c||(a[F]=B)}),a}const vs="1.5.0",ls={};["object","boolean","number","function","string","symbol"].forEach((s,n)=>{ls[s]=function(t){return typeof t===s||"a"+(n<1?"n ":" ")+s}});const Es={};ls.transitional=function(n,a,t){function o(l,e){return"[Axios v"+vs+"] Transitional option '"+l+"'"+e+(t?". "+t:"")}return(l,e,c)=>{if(n===!1)throw new f(o(e," has been removed"+(a?" in "+a:"")),f.ERR_DEPRECATED);return a&&!Es[e]&&(Es[e]=!0,console.warn(o(e," has been deprecated since v"+a+" and will be removed in the near future"))),n?n(l,e,c):!0}};function oa(s,n,a){if(typeof s!="object")throw new f("options must be an object",f.ERR_BAD_OPTION_VALUE);const t=Object.keys(s);let o=t.length;for(;o-- >0;){const l=t[o],e=n[l];if(e){const c=s[l],D=c===void 0||e(c,l,s);if(D!==!0)throw new f("option "+l+" must be "+D,f.ERR_BAD_OPTION_VALUE);continue}if(a!==!0)throw new f("Unknown option "+l,f.ERR_BAD_OPTION)}}const Z={assertOptions:oa,validators:ls},g=Z.validators;class M{constructor(n){this.defaults=n,this.interceptors={request:new us,response:new us}}request(n,a){typeof n=="string"?(a=a||{},a.url=n):a=n||{},a=O(this.defaults,a);const{transitional:t,paramsSerializer:o,headers:l}=a;t!==void 0&&Z.assertOptions(t,{silentJSONParsing:g.transitional(g.boolean),forcedJSONParsing:g.transitional(g.boolean),clarifyTimeoutError:g.transitional(g.boolean)},!1),o!=null&&(p.isFunction(o)?a.paramsSerializer={serialize:o}:Z.assertOptions(o,{encode:g.function,serialize:g.function},!0)),a.method=(a.method||this.defaults.method||"get").toLowerCase();let e=l&&p.merge(l.common,l[a.method]);l&&p.forEach(["delete","get","head","post","put","patch","common"],y=>{delete l[y]}),a.headers=w.concat(e,l);const c=[];let D=!0;this.interceptors.request.forEach(function(u){typeof u.runWhen=="function"&&u.runWhen(a)===!1||(D=D&&u.synchronous,c.unshift(u.fulfilled,u.rejected))});const r=[];this.interceptors.response.forEach(function(u){r.push(u.fulfilled,u.rejected)});let F,i=0,B;if(!D){const y=[As.bind(this),void 0];for(y.unshift.apply(y,c),y.push.apply(y,r),B=y.length,F=Promise.resolve(a);i<B;)F=F.then(y[i++],y[i++]);return F}B=c.length;let d=a;for(i=0;i<B;){const y=c[i++],u=c[i++];try{d=y(d)}catch(b){u.call(this,b);break}}try{F=As.call(this,d)}catch(y){return Promise.reject(y)}for(i=0,B=r.length;i<B;)F=F.then(r[i++],r[i++]);return F}getUri(n){n=O(this.defaults,n);const a=Us(n.baseURL,n.url);return Ps(a,n.params,n.paramsSerializer)}}p.forEach(["delete","get","head","options"],function(n){M.prototype[n]=function(a,t){return this.request(O(t||{},{method:n,url:a,data:(t||{}).data}))}});p.forEach(["post","put","patch"],function(n){function a(t){return function(l,e,c){return this.request(O(c||{},{method:n,headers:t?{"Content-Type":"multipart/form-data"}:{},url:l,data:e}))}}M.prototype[n]=a(),M.prototype[n+"Form"]=a(!0)});const I=M;class es{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let a;this.promise=new Promise(function(l){a=l});const t=this;this.promise.then(o=>{if(!t._listeners)return;let l=t._listeners.length;for(;l-- >0;)t._listeners[l](o);t._listeners=null}),this.promise.then=o=>{let l;const e=new Promise(c=>{t.subscribe(c),l=c}).then(o);return e.cancel=function(){t.unsubscribe(l)},e},n(function(l,e,c){t.reason||(t.reason=new P(l,e,c),a(t.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const a=this._listeners.indexOf(n);a!==-1&&this._listeners.splice(a,1)}static source(){let n;return{token:new es(function(o){n=o}),cancel:n}}}const la=es;function ea(s){return function(a){return s.apply(null,a)}}function pa(s){return p.isObject(s)&&s.isAxiosError===!0}const ss={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ss).forEach(([s,n])=>{ss[n]=s});const ra=ss;function Is(s){const n=new I(s),a=ms(I.prototype.request,n);return p.extend(a,I.prototype,n,{allOwnKeys:!0}),p.extend(a,n,null,{allOwnKeys:!0}),a.create=function(o){return Is(O(s,o))},a}const A=Is(os);A.Axios=I;A.CanceledError=P;A.CancelToken=la;A.isCancel=ks;A.VERSION=vs;A.toFormData=$;A.AxiosError=f;A.Cancel=A.CanceledError;A.all=function(n){return Promise.all(n)};A.spread=ea;A.isAxiosError=pa;A.mergeConfig=O;A.AxiosHeaders=w;A.formToJSON=s=>js(p.isHTMLForm(s)?new FormData(s):s);A.getAdapter=Ls.getAdapter;A.HttpStatusCode=ra;A.default=A;const ca=A;const Fa={data(){return{updateKey:0,allData:[]}},computed:{},mounted(){this.getAllData()},methods:{async getAllData(){const s=await ca.get("https://qiniuyun.study.weilh.vip/jsons/echarts/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD.json");this.allData=s.data,console.log(s.data),this.createChart(),this.createChart1()},init(){this.createChart(),this.createChart1()},refresh(){this.createChart(),this.createChart1()},createChart(){const s=this.$refs.demoRef,n=ps(s);rs("中国",this.allData);const a={visualMap:{text:["高","低"],realtime:!1,calculable:!0,inRange:{color:["lightskyblue","yellow","orangered"]}},series:[{type:"map",map:"中国",label:{show:!0},roam:!0}]};n.setOption(a)},createChart1(){var s=["red","blue","gray"],n=["#55ff00","#ffff00","#5500ff"];const a=[];console.log(this.allData,"allData"),this.allData.features.forEach(e=>{console.log(e,"e");var c=cs(s);a.push({name:e.properties.name,itemStyle:{areaColor:c,color:cs(n)}})});const t=this.$refs.demo1Ref,o=ps(t);rs("中国",this.allData);const l={visualMap:{text:["高","低"],realtime:!1,calculable:!0,inRange:{color:["lightskyblue","yellow","orangered"]}},tooltip:{show:!0,trigger:"item",alwaysShowContent:!1,backgroundColor:"#0C121C",borderColor:"rgba(0, 0, 0, 0.16);",hideDelay:100,triggerOn:"mousemove",enterable:!0,textStyle:{color:"#DADADA",fontSize:"12",width:20,height:30,overflow:"break"},formatter(e){return console.log(e,"params"),"数量：11111"},showDelay:100},geo:{map:"中国",roam:!0,zoom:1.2,regions:a,itemStyle:{normal:{borderColor:"rgba(0, 0, 0, 0.2)"},emphasis:{areaColor:"#F3B329",shadowOffsetX:0,shadowOffsetY:0,shadowBlur:20,borderWidth:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}};o.setOption(l)}}},ya=s=>(Js("data-v-9ad2c48f"),s=s(),$s(),s),Da=ya(()=>S("h4",null,"标题",-1));function ia(s,n,a,t,o,l){return j(),k(zs,null,[Da,(j(),k("div",{id:"main",ref:"demoRef",style:{width:"100%",height:"500px"},key:o.updateKey})),(j(),k("div",{id:"main1",ref:"demo1Ref",style:{width:"100%",height:"500px"},key:o.updateKey})),S("button",{class:"button",onClick:n[0]||(n[0]=e=>l.refresh())},"刷新"),S("button",{class:"button",onClick:n[1]||(n[1]=e=>l.init())},"初始化")],64)}const ua=Hs(Fa,[["render",ia],["__scopeId","data-v-9ad2c48f"]]),fa=S("h1",{id:"地图",tabindex:"-1"},[hs("地图 "),S("a",{class:"header-anchor",href:"#地图","aria-label":'Permalink to "地图"'},"​")],-1),da=S("h2",{id:"效果展示",tabindex:"-1"},[hs("效果展示 "),S("a",{class:"header-anchor",href:"#效果展示","aria-label":'Permalink to "效果展示"'},"​")],-1),Aa=Ks("",12),ba=JSON.parse('{"title":"地图","description":"","frontmatter":{},"headers":[],"relativePath":"web/echarts/demos/地图.md","lastUpdated":1692847407000}'),Ba={name:"web/echarts/demos/地图.md"},wa=Object.assign(Ba,{setup(s){return(n,a)=>(j(),k("div",null,[fa,da,Vs(ua),Aa]))}});export{ba as __pageData,wa as default};
