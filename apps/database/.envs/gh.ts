// 部署到 github page

import { UserConfig } from "vitepress"

export const config:UserConfig = {
  base: '/study/database/',
  outDir: '../../gh-pages/database',
}

export {
  config as ghConfig
}