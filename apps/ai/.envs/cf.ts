// 部署到 cloudflare page

import { UserConfig } from "vitepress"

export const config:UserConfig = {
  base: '/ai/',
  outDir: '../../cf-pages/ai',
}

export {
  config as cfConfig
}