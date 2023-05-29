# web-view加载h5页面实现授权登录

## web-view 文档

https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html#%E5%8A%9F%E8%83%BD%E6%8F%8F%E8%BF%B0

## 小程序页面


### pages/test/test.wxml

```html
<web-view src="http://127.0.0.1:8080/index.html?userid=1234" bindmessage="onPostMessage" />
```

::: tip 注意

`bindmessage=onPostMessage()` 触发机制：

网页向小程序 postMessage 时，会在以下特定时机触发并收到消息：小程序后退、组件销毁、分享、复制链接（2.31.1）。e.detail = { data }，data是多次 postMessage 的参数组成的数组。

:::


### pages/test/test.ts

微信 jssdk 地址：

https://res.wx.qq.com/open/js/jweixin-1.3.1.js

```ts
// pages/test/test.ts
Page({
  onPostMessage(e:any){
    console.log('eeee')
    console.log(e)

    wx.login({
      success(res){
        console.log(res, '9999')

        if (res.code) {
          var wxspAppid = '';
          var wxspSecret = '';
          wx.request({
            //这里填你自己的appid 和 wxspSecret 
              url: "https://api.weixin.qq.com/sns/jscode2session?appid=" + wxspAppid+"&secret=" + wxspSecret + "&js_code=" + res.code + "&grant_type=authorization_code" ,
              method: "POST",
              success(res){
								// res 已经包含 openid 了
								
                //获取成功要执行的动作
								
                console.log(res, '授权')
              },
              fail(data){
                //失败要执行的动作 
              }
            })
        }
      }
    })
  }
})
```



## h5 页面


```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="./js/jquery-3.6.4.min.js"></script>
  <script src="./js/jweixin-1.3.1.js"></script>
</head>

<body>
  
  <button class="logon" onclick="login()">登录</button>
  
</body>
<script>
function login(){
  console.log('login');
	
	// 利用页面跳转 触发 小程序的方法 bindmessage=onPostMessage()
  wx.miniProgram.reLaunch({
    url: '/pages/test/test'
  })
}
</script>

</html>
```