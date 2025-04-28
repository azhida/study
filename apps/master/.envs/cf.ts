// 部署到 cloudflare page

import { UserConfig } from "vitepress"

export const config:UserConfig = {
  base: '/',
  outDir: './dist',
}

export {
  config as cfConfig
}