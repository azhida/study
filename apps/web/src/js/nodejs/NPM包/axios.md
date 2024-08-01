# axios

[axios](https://github.com/axios/axios) ： 是一个基于 Promise 的 HTTP 库，可以在浏览器和 node.js 中使用；可以用它在浏览器中发起 Ajax 请求。

## Axios 的 baseURL 配置方法

### 方法一：全局配置

```ts
// 在引入 Axios 后，设置全局的 baseURL
axios.defaults.baseURL = 'https://mockApi.test';
```
### 方法二：实例化配置

为每个 Axios 实例单独配置 `baseURL` 。这种方法适用于需要同时与多个服务器进行交互的应用程序。

```ts
// 创建一个 Axios 实例并设置 baseURL
const apiInstance = axios.create({
  baseURL: 'https://mockApi.test'
});

// 使用该实例发送请求
apiInstance.get('/users')
  .then(response => {
    // 处理响应数据
  })
  .catch(error => {
    // 处理错误
  });
```

### 方法三：临时配置

临时更改 `baseURL` ，而不影响全局或实例级别的配置。这可以通过在请求的配置中指定 `baseURL` 来实现

```ts
axios.get('/posts', {
  baseURL: 'https://tempApi.example.com'
})
  .then(response => {
    // 处理响应数据
  })
  .catch(error => {
    // 处理错误
  });
```

### 方法四：通过拦截器动态配置

根据特定条件动态地改变 `baseURL` ，你可以使用 Axios 的请求拦截器，在发送请求之前修改配置。

```ts
import axios from 'axios';

// 创建 Axios 实例
const api = axios.create();

// 添加请求拦截器
api.interceptors.request.use(config => {
  // 在这里根据条件设置 baseURL
  if (config.url.slice(0, 8) == '/mockApi') {
    config.baseURL = 'https://mockApi.test'
  } else {
    config.baseURL = 'https://api.test'
  }
  return config;
});

// 发起请求，实际请求的 URL 是根据请求拦截器中的 baseURL 动态决定的
api.get('/posts')
.then(response => {
  // 处理响应数据
  console.log(response.data);
})
.catch(error => {
  // 处理错误
  console.error(error);
});
```
