# Cloudflare 

## Workers 使用笔记

### 创建 Workers

```sh
pnpm create cloudflare@latest

pnpm create cloudflare@latest demo-api -- --template cloudflare/workers-sdk/templates/worker-d1-api
```

## D1 数据库

免费额度：https://developers.cloudflare.com/d1/platform/pricing/

免费计划：
- 读：500万/天
- 写：10万 / 天
- 存储空间：5 GB (total)


注意：可以使用 rest api 操作数据库。