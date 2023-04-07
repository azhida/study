# guzzlehttp/guzzle
## 介绍
Guzzle 库是一套强大的 PHP HTTP 请求套件；是一个PHP的HTTP客户端，用来轻而易举地发送请求，并集成到我们的WEB服务上；Guzzle提供了简单的接口，构建查询语句、POST请求、分流上传下载大文件、使用HTTP cookies、上传JSON数据等等。

## composer 地址
[https://packagist.org/packages/guzzlehttp/guzzle](https://packagist.org/packages/guzzlehttp/guzzle)

## 报错

- `cURL error 60: SSL certificate problem: unable to get local issuer certificate`

其原因是由于本地的CURL的SSL证书太旧了，导致不识别此证书。

解决方法：

- 下载新的 [证书](https://curl.se/ca/cacert.pem)
- 记住证书存放位置（你也可以指定保存位置存放）
- 在 php.ini 文件中填上证书的路径
  - 去掉 curl.cainfo 的注释
  - curl.cainfo='证书的完整路径'
- 重启 php (如有必要的话)
