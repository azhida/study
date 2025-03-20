# Cloudflare Worker 搭建 EdgeTtsApi 代理

## worker.js

```js
// 自定义api key ，用于防止滥用
const API_KEY = '';
const encoder = new TextEncoder();
let expiredAt = null;
let endpoint = null;
let clientId = "";


const TOKEN_REFRESH_BEFORE_EXPIRY = 3 * 60;  
let tokenInfo = {
    endpoint: null,
    token: null,
    expiredAt: null
};

addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    if (request.method === "OPTIONS") {
        return handleOptions(request);
    }
    
  
    const authHeader = request.headers.get("authorization") || request.headers.get("x-api-key");
    const apiKey = authHeader?.startsWith("Bearer ") 
        ? authHeader.slice(7) 
        : null;

    // 只在设置了 API_KEY 的情况下才验证              
    if (API_KEY && apiKey !== API_KEY) {
        return new Response(JSON.stringify({
            error: {
                message: "Invalid API key. Use 'Authorization: Bearer your-api-key' header",
                type: "invalid_request_error",
                param: null,
                code: "invalid_api_key"
            }
        }), {
            status: 401,
            headers: {
                "Content-Type": "application/json",
                ...makeCORSHeaders()
            }
        });
    }

    const requestUrl = new URL(request.url);
    const path = requestUrl.pathname;
    
    if (path === "/v1/audio/speech") {
        try {
            const requestBody = await request.json();
            const { 
                model = "tts-1",
                input,
                voice = "zh-CN-XiaoxiaoNeural",
                response_format = "mp3",
                speed = '1.0',
                volume='0',
                pitch = '0', // 添加 pitch 参数，默认值为 0
                style = "general"//添加style参数，默认值为general
            } = requestBody;

            let rate = parseInt(String( (parseFloat(speed)-1.0)*100) );
            let numVolume = parseInt( String(parseFloat(volume)*100) );
            let numPitch = parseInt(pitch); 
            const response = await getVoice(
                input, 
                voice, 
                rate>=0?`+${rate}%`:`${rate}%`,
                numPitch>=0?`+${numPitch}Hz`:`${numPitch}Hz`,
                numVolume>=0?`+${numVolume}%`:`${numVolume}%`,
                style,
                "audio-24khz-48kbitrate-mono-mp3"
            );

            return response;

        } catch (error) {
            console.error("Error:", error);
            return new Response(JSON.stringify({
                error: {
                    message: error.message,
                    type: "api_error",
                    param: null,
                    code: "edge_tts_error"
                }
            }), {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                    ...makeCORSHeaders()
                }
            });
        }
    }

    // 默认返回 404
    return new Response("Not Found", { status: 404 });
}

async function handleOptions(request) {
    return new Response(null, {
        status: 204,
        headers: {
            ...makeCORSHeaders(),
            "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
            "Access-Control-Allow-Headers": request.headers.get("Access-Control-Request-Headers") || "Authorization"
        }
    });
}

async function getVoice(text, voiceName = "zh-CN-XiaoxiaoNeural", rate = '+0%', pitch = '+0Hz', volume='+0%',style = "general", outputFormat = "audio-24khz-48kbitrate-mono-mp3") {
    try {
        const maxChunkSize = 2000;  
        const chunks = text.trim().split("\n");


        // 获取每个分段的音频
        //const audioChunks = await Promise.all(chunks.map(chunk => getAudioChunk(chunk, voiceName, rate, pitch, volume,style, outputFormat)));
        let audioChunks=[]
        while(chunks.length>0){
            try{
                let audio_chunk= await getAudioChunk(chunks.shift(), voiceName, rate, pitch, volume,style, outputFormat)
                audioChunks.push(audio_chunk)

            }catch(e){
                return new Response(JSON.stringify({
                    error: {
                        message: String(e),
                        type: "api_error",
                        param: `${voiceName}, ${rate}, ${pitch}, ${volume},${style}, ${outputFormat}`,
                        code: "edge_tts_error"
                    }
                }), {
                    status: 500,
                    headers: {
                        "Content-Type": "application/json",
                        ...makeCORSHeaders()
                    }
                });

            }
        }
       

        // 将音频片段拼接起来
        const concatenatedAudio = new Blob(audioChunks, { type: 'audio/mpeg' });
        const response = new Response(concatenatedAudio, {
            headers: {
                "Content-Type": "audio/mpeg",
                ...makeCORSHeaders()
            }
        });

        
        return response;

    } catch (error) {
        console.error("语音合成失败:", error);
        return new Response(JSON.stringify({
            error: {
                message: error,
                type: "api_error",
                param: null,
                code: "edge_tts_error "+voiceName
            }
        }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
                ...makeCORSHeaders()
            }
        });
    }
}



//获取单个音频数据
async function getAudioChunk(text, voiceName, rate, pitch,volume, style, outputFormat='audio-24khz-48kbitrate-mono-mp3') {
    const endpoint = await getEndpoint();
    const url = `https://${endpoint.r}.tts.speech.microsoft.com/cognitiveservices/v1`;
    let m=text.match(/\[(\d+)\]\s*?$/);
    let slien=0;
    if(m&&m.length==2){
      slien=parseInt(m[1]);
      text=text.replace(m[0],'')

    }
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": endpoint.t,
            "Content-Type": "application/ssml+xml",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0",
            "X-Microsoft-OutputFormat": outputFormat
        },
        body: getSsml(text, voiceName, rate,pitch,volume, style,slien)
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Edge TTS API error: ${response.status} ${errorText}`);
    }

    return response.blob();

}

function getSsml(text, voiceName, rate, pitch,volume,style,slien=0) {
   let slien_str='';
   if(slien>0){
    slien_str=`<break time="${slien}ms" />`
   }
    return `<speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" version="1.0" xml:lang="zh-CN"> 
                <voice name="${voiceName}"> 
                    <mstts:express-as style="${style}"  styledegree="2.0" role="default" > 
                        <prosody rate="${rate}" pitch="${pitch}" volume="${volume}">${text}</prosody> 
                    </mstts:express-as> 
                    ${slien_str}
                </voice> 
            </speak>`;

}

async function getEndpoint() {
    const now = Date.now() / 1000;
    
    if (tokenInfo.token && tokenInfo.expiredAt && now < tokenInfo.expiredAt - TOKEN_REFRESH_BEFORE_EXPIRY) {
        return tokenInfo.endpoint;
    }

    // 获取新token
    const endpointUrl = "https://dev.microsofttranslator.com/apps/endpoint?api-version=1.0";
    const clientId = crypto.randomUUID().replace(/-/g, "");
    
    try {
        const response = await fetch(endpointUrl, {
            method: "POST",
            headers: {
                "Accept-Language": "zh-Hans",
                "X-ClientVersion": "4.0.530a 5fe1dc6c",
                "X-UserId": "0f04d16a175c411e",
                "X-HomeGeographicRegion": "zh-Hans-CN",
                "X-ClientTraceId": clientId,
                "X-MT-Signature": await sign(endpointUrl),
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0",
                "Content-Type": "application/json; charset=utf-8",
                "Content-Length": "0",
                "Accept-Encoding": "gzip"
            }
        });

        if (!response.ok) {
            throw new Error(`获取endpoint失败: ${response.status}`);
        }

        const data = await response.json();
        const jwt = data.t.split(".")[1];
        const decodedJwt = JSON.parse(atob(jwt));
        
        tokenInfo = {
            endpoint: data,
            token: data.t,
            expiredAt: decodedJwt.exp
        };

        return data;

    } catch (error) {
        console.error("获取endpoint失败:", error);
        // 如果有缓存的token，即使过期也尝试使用
        if (tokenInfo.token) {
            console.log("使用过期的缓存token");
            return tokenInfo.endpoint;
        }
        throw error;
    }
}

function addCORSHeaders(response) {
    const newHeaders = new Headers(response.headers);
    for (const [key, value] of Object.entries(makeCORSHeaders())) {
        newHeaders.set(key, value);
    }
    return new Response(response.body, { ...response, headers: newHeaders });
}

function makeCORSHeaders() {
    return {
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, x-api-key",
        "Access-Control-Max-Age": "86400"  
    };
}

async function hmacSha256(key, data) {
    const cryptoKey = await crypto.subtle.importKey(
        "raw",
        key,
        { name: "HMAC", hash: { name: "SHA-256" } },
        false,
        ["sign"]
    );
    const signature = await crypto.subtle.sign("HMAC", cryptoKey, new TextEncoder().encode(data));
    return new Uint8Array(signature);
}

async function base64ToBytes(base64) {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}

async function bytesToBase64(bytes) {
    return btoa(String.fromCharCode.apply(null, bytes));
}

function uuid() {
    return crypto.randomUUID().replace(/-/g, "");
}

async function sign(urlStr) {
    const url = urlStr.split("://")[1];
    const encodedUrl = encodeURIComponent(url);
    const uuidStr = uuid();
    const formattedDate = dateFormat();
    const bytesToSign = `MSTranslatorAndroidApp${encodedUrl}${formattedDate}${uuidStr}`.toLowerCase();
    const decode = await base64ToBytes("oik6PdDdMnOXemTbwvMn9de/h9lFnfBaCWbGMMZqqoSaQaqUOqjVGm5NqsmjcBI1x+sS9ugjB55HEJWRiFXYFw==");
    const signData = await hmacSha256(decode, bytesToSign);
    const signBase64 = await bytesToBase64(signData);
    return `MSTranslatorAndroidApp::${signBase64}::${formattedDate}::${uuidStr}`;
}

function dateFormat() {
    const formattedDate = (new Date()).toUTCString().replace(/GMT/, "").trim() + " GMT";
    return formattedDate.toLowerCase();
}

// 添加请求超时控制
async function fetchWithTimeout(url, options, timeout = 30000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal
        });
        clearTimeout(id);
        return response;
    } catch (error) {
        clearTimeout(id);
        throw error;
    }
}

```


## 调用

```vue
<template>
  <div class="page-box">
    <div style="margin: 16px;">
      <audio style="width: 100%;margin-top: 20px;" ref="audioRef" :src="base64data" controls />
    </div>

    <van-field v-model.trim="text" label="文本" placeholder="请输入内容" label-align="top" type="textarea" autosize />

    <div style="margin: 16px;">
      <van-button round block type="primary" @click="onClick_cf_worker">
        提交(cf_worker)
      </van-button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';

const audioRef = ref()
const base64data = ref('')
const text = ref('')

function onClick_cf_worker() {
  axios.post('https://edge-tts-proxy.weilh.vip/v1/audio/speech', {
    "model": "tts-1",
    "input": "这是要合成语音的文字",
    "voice": "zh-CN-XiaoxiaoNeural",
    "response_format": "wav",
    "speed": 1.0
  }, {
    responseType: 'blob'
  }).then(({ data }) => {
    console.log(data, 'res');
    base64data.value = window.URL.createObjectURL(new Blob([data]))
    audioRef.value.paly()
  })
}
</script>

```