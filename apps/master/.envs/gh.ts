// 部署到 github page

import { UserConfig } from "vitepress"

export const config:UserConfig = {
  base: '/study/',
  outDir: '../../gh-pages/',
}

export {
  config as ghConfig
}