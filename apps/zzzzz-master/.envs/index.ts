import { UserConfig } from "vitepress";
import { ghConfig } from "./gh";
import { cfConfig } from "./cf";

export function getEnvConfig(mode = 'gh') {

  console.log(mode,'mode');
  

  let config: UserConfig = { base: '/', outDir: '.vitepress/dist' }
  
  if (!mode || mode == 'gh') {
    config = ghConfig
  }
  else if (mode == 'cf') {
    config = cfConfig
  }

  return config

}