// 部署到 cloudflare page
import path from "path";
import { UserConfig } from "vitepress"

export const config:UserConfig = {
  base: '/dev-tool/',
  // outDir: '../../../cf-pages/',
  outDir: path.resolve(__dirname, '../../../cf-pages/dev-tool'),
}

export {
  config as cfConfig
}