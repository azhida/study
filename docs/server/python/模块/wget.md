# wget

利用Wget从网页链接获取数据是其一个非常重要的应用点，大家只需要输入数据的url地址，就可以将数据进行下载。Wget支持HTTP，HTTPS和FTP协议，大家可以利用Wget快速的下载数据到本地。

## 安装

```
pip install wget
```

## 使用

```py
import wget

url = 'https://5b0988e595225.cdn.sohucs.com/images/20180612/1d9c4052984f432daea9a27b23afa8c3.png'
save_path = 'D:/Code/1.png'
wget.download(url, save_path)
```