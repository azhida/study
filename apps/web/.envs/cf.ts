// 部署到 cloudflare page
import path from "path";
import { UserConfig } from "vitepress"

export const config:UserConfig = {
  base: '/web/',
  // outDir: '../../../cf-pages/',
  outDir: path.resolve(__dirname, '../../../cf-pages/web'),
}

export {
  config as cfConfig
}