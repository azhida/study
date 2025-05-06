// 部署到 cloudflare page
import path from "path";
import { UserConfig } from "vitepress"

export const config: UserConfig = {
  base: '/other/',
  // outDir: '../../cf-pages/other',
  outDir: path.resolve(__dirname, '../../../cf-pages/other'),
}

export {
  config as cfConfig
}