// 部署到 cloudflare page
import path from "path";
import { UserConfig } from "vitepress"

export const config: UserConfig = {
  base: '/database/',
  // outDir: '../../cf-pages/database',
  outDir: path.resolve(__dirname, '../../../cf-pages/database'),
}

export {
  config as cfConfig
}