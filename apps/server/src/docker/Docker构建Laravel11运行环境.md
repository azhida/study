# Docker 构建 Laravel11 运行环境

## 安装 laravel11

[文档](https://learnku.com/docs/laravel/11.x/installationmd/16647#creating-a-laravel-project)

```sh
composer create-project laravel/laravel example-app
```

## Dockerfile

<<< ./Dockerfile.laravel11

## 构建

```sh
docker build -t laravel_run_image:latest .
```