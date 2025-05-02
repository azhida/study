// 部署到 github page

import { UserConfig } from "vitepress"

export const config:UserConfig = {
  base: '/study/server/',
  outDir: '../../gh-pages/server',
}

export {
  config as ghConfig
}