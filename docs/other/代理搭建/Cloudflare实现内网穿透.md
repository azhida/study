# Cloudflare 实现内网穿透

- 官网

https://dash.cloudflare.com

## 注册登录

自行解决

## 将域名添加到 Cloudflare

我这里是阿里云上买的域名

- Cloudflare ：添加站点，填上域名（根域名），点击继续
- Cloudflare ：选计划，选免费的（Free）
- Cloudflare ：后面会看到两个 Cloudflare 名称服务器
- Cloudflare ：继续下一步，保存
- 阿里云：域名列表，选管理
- 阿里云：选 DNS 管理/DNS修改，把上面看到的两个 Cloudflare 名称服务器 填上，确定
- Cloudflare ：大概10分钟后可以看到添加的域名生效了

## Cloudflare Zero Trust 添加隧道

> 注意：要从域名页面退出来，回到首页

- 点击进入 `Zero Trust`
- 点击进入 `Networks`
- 点击进入 `Tunnels`
- 点击 `Create a tunnel` 创建一条隧道，选择连接器 connector `Cloudflared` ，点击保存

## 配置隧道

在 `Networks/Tunnels` 下选择一条隧道操作

### 安装客户端

在 `Networks/Tunnels/Overview` 下载 Cloudflare 连接器客户端，页面操作引导很清楚了。

### 配置映射

在 `Networks/Tunnels/Public Hostname` 配置映射。

- 点击 `Add a public hostname`
- `Subdomain`：第一行配置的是公网访问的域名
- `Service`：第二行配置的是本地内网的服务地址，要确保本地服务正常运行

## 参考

[最好用的Nas穿透—超详细Zero Trust Tunnel配置教程](https://t.cj.sina.com.cn/articles/view/1823348853/6cae1875020016401)