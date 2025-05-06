# H5 获取公众号 code

## 文档

公众号测试号：https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login

公众号网页授权：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html

## 代码

### /login.html

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
		$.ajax({
			url: 'http://127.0.0.1:9090/login?code=' + uriObj.code,
			type: 'post',
			success(res){
				console.log(res,'res')

			}
		})
	}
})

function login(){
  var appid = '';
  var redirect_uri = 'http://localhost.test/login.html';
  var scope = 'snsapi_userinfo'; // snsapi_userinfo  | snsapi_base
  window.location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+appid+'&redirect_uri='+redirect_uri+'&response_type=code&scope='+scope+'&state=STATE#wechat_redirect'
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