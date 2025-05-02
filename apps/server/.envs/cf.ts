// 部署到 cloudflare page
import path from "path";
import { UserConfig } from "vitepress"

export const config:UserConfig = {
  base: '/server/',
  // outDir: '../../../cf-pages/',
  outDir: path.resolve(__dirname, '../../../cf-pages/server'),
}

export {
  config as cfConfig
}