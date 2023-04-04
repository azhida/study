# Docker 镜像发布

## 创建 Docker 仓库

- 登录: https://hub.docker.com/
- 先注册申请一个自己的账号
- 创建自己的Docker仓库【如：docker-test】


## 登录 DockerHub 仓库

> 注意：在本地 CMD 窗口执行

```
# docker login -u 【用户名】 -p 【密码】
# 注意：该命令会在本地获取全部权限，存在安全隐患，推荐做法是使用 权限有限的 token 进行登录操作
docker login -u user_name -p password
```

## 生成标准镜像名

> 注意，我们发布镜像的名称有严格的规范，如果不符合这个规范，镜像就有可能发布失败。  
> 镜像的名称必须是“用户名/仓库名”的格式。

如果当前没有该格式的镜像，那么我们可以使用docker tag命令生成一个Docker镜像。docker tag命令格式如下：
```
# 查看镜像列表
docker image ls
# docker tag 【原镜像名】 【新的镜像名】
docker tag old_image_name azhida/php7.4-swoole
```

## 推送镜像到 DockerHun 仓库
```
# docker push 【镜像名】
docker push azhida/php7.4-swoole:latest
```
> 注意：一定用先登录，否则报错 `denied: requested access to the resource is denied`


## 创建 DockerHub 的访问 token
文档：https://docs.docker.com/docker-hub/access-tokens/

- 访问操作地址： https://hub.docker.com/settings/security
- 创建 token：点击按钮 `New Access Token`

