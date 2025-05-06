# Docker Compose 部署 Vue3 包

## vue3 打包

```sh
pnpm build
# 输出 ./docker/dist
```

## ./docker/docker-compose.yaml

```yaml
version: '3'

services:

  nginx:
    container_name: "vue3-demo-nginx"
    image: "nginx:alpine"
    ports:
      - "8080:80"
    volumes:
      - ./nginx/conf.d:/etc/nginx/conf.d
      - ./nginx/log:/var/log/nginx
      - ./dist:/var/www/html
    environment:
      TZ: "Asia/Shanghai"
    networks:
      - vue3-demo-network
    restart: unless-stopped

networks:
  vue3-demo-network: # 网络名称
    external: false # 外部网络：true 不存在则报错，false 不存在则创建 vue3-demo-network    
```

## ./docker/nginx/conf.d/default.conf

```conf
server {
  listen       80;
  server_name  localhost;

  ; 如果是二级目录 /a/
  ; location /a {
  ;   index index.html;
  ;   try_files $uri $uri/ /a/index.html;
  ; }

  location / {
    root   /var/www/html;
    index  index.html index.htm;
    try_files $uri $uri/ /index.html;
  }
}
```