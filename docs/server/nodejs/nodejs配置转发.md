# nodejs配置转发

## 反向代理

在Node.js中，可以使用http-proxy模块来实现反向代理。

- 安装 `http-proxy`

```sh
pnpm install http-proxy
```

- `proxy-server.js`

```js
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

// 监听 9000 端口，代理转发 http://localhost:9001
require('http').createServer((req, res) => {
  proxy.web(req, res, { target: 'http://localhost:9001' });
}).listen(9000);
```

- 运行

```sh
node proxy-server.js
```

## 负载均衡

负载均衡是一种常见的服务端应用场景，它是一种将客户端请求分配到不同服务器上以平衡服务器负载的技术。Node.js中提供了多种方式来实现负载均衡，包括使用haproxy、Nginx等第三方工具，也可以自己编写代码来实现。

### Round-Robin负载均衡策略

Round-Robin负载均衡策略是一种简单的负载均衡策略，它将请求均衡地分配到不同的服务器上。在Node.js中，可以使用cluster模块结合Round-Robin负载均衡策略来实现负载均衡。

- `cluster-server.js`

```js
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`主进程 ${process.pid} 正在运行`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`工作进程 ${worker.process.pid} 已退出`);
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`工作进程 ${process.pid} 返回 Hello World！`);
  }).listen(8000);

  console.log(`工作进程 ${process.pid} 已启动`);
}
```

在上面的代码中，我们首先使用cluster模块检查当前进程是否为主进程。如果是主进程，我们就使用cluster.fork()方法创建多个工作进程。每个工作进程都会监听8000端口，并返回“Hello World！”字符串。如果有请求到达，主进程就会将其分配到不同的工作进程上。

- 运行

```sh
node cluster-server.js
```