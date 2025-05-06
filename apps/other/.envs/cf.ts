// 部署到 cloudflare page

import { UserConfig } from "vitepress"

export const config:UserConfig = {
  base: '/other/',
  outDir: '../../cf-pages/other',
}

export {
  config as cfConfig
}