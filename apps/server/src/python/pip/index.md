# pip

## 相关命令

```sh
# 查看当前配置：
pip config list

# 设置源
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

# 安装依赖，临时指定镜像源
pip install some-package -i https://pypi.tuna.tsinghua.edu.cn/simple
```

## 常用镜像源

```sh
# 清华大学开源软件镜像站：
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

# 阿里云开源镜像站：
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/

# 中国科技大学开源软件镜像站：
pip config set global.index-url https://pypi.mirrors.ustc.edu.cn/simple/

# 豆瓣开源镜像站：
pip config set global.index-url https://pypi.doubanio.com/simple/

# 华为云开源镜像站：
pip config set global.index-url https://repo.huaweicloud.com/repository/pypi/simple/
```