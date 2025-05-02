// 部署到 github page

import { UserConfig } from "vitepress"

export const config:UserConfig = {
  base: '/study/web/',
  outDir: '../../gh-pages/web',
}

export {
  config as ghConfig
}