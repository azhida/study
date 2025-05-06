// 部署到 github page

import { UserConfig } from "vitepress"

export const config:UserConfig = {
  base: '/study/other/',
  outDir: '../../gh-pages/other',
}

export {
  config as ghConfig
}