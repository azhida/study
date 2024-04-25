# 搭建 DockerHub 加速镜像

## 解析一个二级域名

`docker-hub.demo.cn` 是我们要制作的github镜像的访问地址。

- 进入域名 `demo.cn` 下操作
- 点击 `DNS/Records`
- 点击 `Add record` , 填上对应参数
  - Type：A
  - Name： docker-hub
  - IPv4 address：随便填一个有效的 ip 地址即可，因为不会真的解析到这个地址(可以直接在百度输入 ip 拿到当前 ip)
- 点击 `Save`

## 创建一个 Worker

- 点击 `Workers & Pages/Overview`
- 点击 `Create an application`
- 点击 `Workers/Create Worker`
- 在创建 Worker 页面填写 Name 为 `docker-hub` ，然后点击 `Deploy`
- 进入 Worker 信息页面，点击 `Edit Code` 编写代码
- 代码如下

worker.js
```js
const TELEGRAPH_URL = 'hub.docker.com';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  url.host = TELEGRAPH_URL.replace(/^https?:\/\//, '');

  const modifiedRequest = new Request(url.toString(), {
    headers: request.headers,
    method: request.method,
    body: request.body,
    redirect: 'follow'
  });

  const response = await fetch(modifiedRequest);
  const modifiedResponse = new Response(response.body, response);

  // 添加允许跨域访问的响应头
  modifiedResponse.headers.set('Access-Control-Allow-Origin', '*');

  return modifiedResponse;
}
```

- 点击 右上角按钮 `Deploy` ，保存并发布
- 回到 Worker 信息页面
- 点击 `Setting/Triggers`
- 点击 `Add route`，填上如下信息
  - Route：`*.demo.cn/*`
  - Zone：`demo.cn`
  - 点击 `Add route` 确认保存

## 访问镜像地址

[DockerHub 镜像地址](https://docker-hub.demo.cn)

到此，访问应该成功了！

## 注意

- 镜像不支持登录注册。

## 参考

[用Cloudflare搭建Github加速镜像](https://zhuanlan.zhihu.com/p/687822231)