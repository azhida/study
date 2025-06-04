# fly-barrage: Vue React 高级弹幕功能插件库


- Gitee：https://gitee.com/fei_fei27/fly-barrage
- 官方文档：https://fly-barrage.netlify.app/

Fly Barrage 是一个功能完善的弹幕库，支持多种弹幕类型，包括滚动弹幕、顶部弹幕、底部弹幕和高级弹幕。它不局限于特定的前端框架，可以与原生 HTML、Vue、React 等多种框架一起使用，提供了灵活的集成方式。Fly Barrage 旨在为开发者提供一个简单易用且功能强大的弹幕解决方案。

## 使用

```sh
pnpm install fly-barrage
```

- 公共配置

```ts
export type BaseBarrageOptions = {
// 弹幕的唯一标识
id: string;
// 弹幕的出现时间（毫秒为单位）
  time: number;
// 弹幕的内容（eg：文本内容[图片id]文本内容[图片id]文本内容）
  text: string;
// 弹幕的字体大小
  fontSize: number;
// 弹幕的行高
  lineHeight: number;
// 弹幕颜色
  color: string;
// 用于标识是不是重要的弹幕，重要弹幕会渲染出边框，并且一定会被渲染出来
// （如果弹幕免遮挡配置并且没有位置放入的话，重要弹幕会随机一个轨道进行渲染）
  prior?: boolean;
// 自定义 render 相关配置
  customRender?: CustomRender;
// 额外，附加的信息
  addition?: {
    [key: string]: any
  }
}
```

## 参考

[Fly Barrage：Vue React 高级弹幕功能插件库](https://mp.weixin.qq.com/s/E6kipCji6oU91Sk3cIf_VQ)