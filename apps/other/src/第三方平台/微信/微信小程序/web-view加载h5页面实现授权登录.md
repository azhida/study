# web-view加载h5页面实现授权登录

## web-view 文档

https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html#%E5%8A%9F%E8%83%BD%E6%8F%8F%E8%BF%B0

## 场景描述

在微信小程序中，使用 组件 `web-view` 嵌入 h5 页面。

## 目的描述

- 在 h5 页面中获取 小程序临时登录凭证 cdoe；
- 在 h5 页面通过 小程序code 请求后端登录接口，拿到token

## 遇到的问题

- 微信小程序组件 `web-view` 不能与 h5 页面进行实时通信；
- h5 网页向小程序 postMessage 时，会在以下特定时机触发并收到消息：小程序后退、组件销毁、分享、复制链接（2.31.1）。e.detail = { data }，data是多次 postMessage 的参数组成的数组。

## 实现思路

```
<web-view src="http://127.0.0.1:8080/index.html?openid=123456" bindmessage="onPostMessage" />
```

1. 小程序向 h5 页面传递数据，通过 url 携带参数；
2. h5 页面向小程序传递数据，通过 `bindmessage="onPostMessage"` ，后面有详细代码；
3. 小程序定义全局变量 code ，目的是 当用户在 h5 页面点击登录按钮时，跳转小程序页面，相当于重新加载了小程序当前页面，此时会触发 小程序的方法 `postMessage()`
4. 小程序定义全局变量 codeChange ，以变量的形式 存储 方法；
5. 小程序定义全局方法 triggerCodeChange ，
6. 小程序 `web-view` 组件页面，`onLoad()` 生命周期中注册监听函数： `getApp().globalData.codeChange = this.onCodeChange.bind(this)` ;
7. h5 页面点击登录按钮，执行 `wx.miniProgram.postMessage()` 函数，同时需要 跳转小程序当前页，以触发小程序 `postMessage()` ;
8. 小程序 `web-view` 组件页面执行函数 `postMessage()` ，行进小程序授权，拿到 code 并全局储存，然后 触发监听函数 `triggerCodeChange()` , 
9. 小程序监听函数 `triggerCodeChange()` 会执行之前注册的函数 `onCodeChange()` , 函数内 将 code 更新到 `web-view` 的 url 链接，从而达到刷新的目的；
10. 此时在 h5 页面，通过 jQuery 就可以拿到路由参数 code 了，至于其他操作，则根据自己的需求去开发了。


::: tip
注意：
如果理解困难，可以用两组页面来做，方便理解

```
// /pages/login/login
// 登录页
<web-view src="http://127.0.0.1:8080/login.html?code=123456" bindmessage="onPostMessage" />
```

```
// /pages/index/index
// 首页
<web-view src="http://127.0.0.1:8080/index.html?code=123456" bindmessage="onPostMessage" />
```

:::

监听全局变量变化，参考：
[微信小程序页面监听全局变量变化](https://blog.csdn.net/kilig_CSM/article/details/130111032)


## 小程序页面

### /app.ts

```ts
// app.ts
App<IAppOption|any>({
  globalData: {
    code:'',
    codeChange: () => {},
  },
  // 触发监听器函数的方法
  triggerCodeChange: function () {
    this.globalData.codeChange()
  }
})
```


### /pages/test/test.ts


```ts
// pages/test/test.ts
Page({
  data: {
    url: 'http://127.0.0.1:8080/index.html'
  },
  onLoad() {
    // 注册监听器函数
    getApp().globalData.codeChange = this.onCodeChange.bind(this)
  },
  onCodeChange: function() {
    // 全局变量 code 的值发生改变时，调用该函数
    this.setData({
      url: this.data.url + '?code=' + getApp().globalData.code
    })
  },
  onPostMessage(e:any){
    // h5 页面传递回来的数据
    console.log(e, 'e - onPostMessage');
    
    wx.login({
      success: (res) => {
        if (res.code) {
          // 拿到 code 后，重载 h5 ，携带 code 在 h5 请求后端登录接口

          // 全局储存 code
          getApp().globalData.code = res.code
          // 触发监听函数
          getApp().triggerOpenidChange()
        }
      }
    })
  }
})
```

### /pages/test/test.wxml

```html
<web-view src="{{ url }}" bindmessage="onPostMessage" />
```

::: tip 注意

`bindmessage=onPostMessage()` 触发机制：

网页向小程序 postMessage 时，会在以下特定时机触发并收到消息：小程序后退、组件销毁、分享、复制链接（2.31.1）。e.detail = { data }，data是多次 postMessage 的参数组成的数组。

:::


## h5 页面

微信 jssdk 地址：

https://res.wx.qq.com/open/js/jweixin-1.3.1.js

### /index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="./js/jquery-3.6.4.min.js"></script>
  <script src="https://res.wx.qq.com/open/js/jweixin-1.3.1.js"></script>
</head>

<body>
  
  <button class="logon" onclick="login()">登录</button>
  
</body>
<script>
$(function(){
	var uriObj = getSearch();
	if (uriObj.code) {
		alert(uriObj.code)
		// todo 拿到了 code 后，用 ajax 向后端请求登录接口
		// ...
	}
})

function login(){
  console.log('login');
  wx.miniProgram.postMessage({
    data: 'abcd', // 传递小程序需要的值
  })
	// 利用页面跳转 触发 小程序的方法 bindmessage=onPostMessage()
  wx.miniProgram.reLaunch({
    url: '/pages/test/test'
  })
}

// 拿 url 参数，并组成 json 对象
function getSearch() {
  var s = {};
  var ls = location.search;
  if (ls) ls = ls.slice(1);
  ls.split('&').forEach(p => {
    var [k, v] = p.split('=');
    s[k] = v ? decodeURIComponent(v) : '';
  });
  return s;
}

</script>

</html>
```