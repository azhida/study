// 部署到 cloudflare page
import path from "path";
import { UserConfig } from "vitepress"

export const config: UserConfig = {
  base: '/ai/',
  // outDir: '../../cf-pages/ai',
  outDir: path.resolve(__dirname, '../../../cf-pages/ai'),
}

export {
  config as cfConfig
}