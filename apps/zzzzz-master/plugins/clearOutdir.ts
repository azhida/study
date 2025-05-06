import dirTree from 'directory-tree';
import { getNavsObj } from '@study/components/nav';
import { rimraf, rimrafSync, native, nativeSync } from 'rimraf'

// 清除输出目录，保留 指定目录
export const clearOutdirPlugin = (outdir) => {
  let config

  return {
    name: 'clear-outdir',

    configResolved(resolvedConfig) {
      // 存储最终解析的配置
      config = resolvedConfig
    },

    buildEnd() {

      // 读目录
      // TODO：待优化，只需读一层即可
      const { children } = dirTree(outdir, {
        normalizePath: true,
      });
      // console.log(children, 'children');

      // 拿导航栏数据
      const navsObj = getNavsObj();
      console.log(navsObj, 'navsObj');

      children.map(e => {
        if (e?.children?.length > 0 && navsObj?.[e.name]) {
          // 保留
          console.log(e, '保留');
        } else {
          // 删除
          console.log(e, '删除');

          // rimrafSync(e.path);
        }
      })
    },
  }
}