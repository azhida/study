// 部署到 github page

import { UserConfig } from "vitepress"

export const config:UserConfig = {
  base: '/study/dev-tool/',
  outDir: '../../gh-pages/dev-tool',
}

export {
  config as ghConfig
}