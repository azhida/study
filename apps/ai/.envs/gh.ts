// 部署到 github page

import { UserConfig } from "vitepress"

export const config:UserConfig = {
  base: '/study/ai/',
  outDir: '../../gh-pages/ai',
}

export {
  config as ghConfig
}