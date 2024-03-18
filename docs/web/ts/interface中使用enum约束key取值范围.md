# interface 中使用 enum 约束 key 的取值范围

- demo.ts

```ts
// 表单配置
export interface FormConfig {
  openMode: FormOpenModes
  formItems: Array<FormItem>
  rules?: FormRules;
  title?: string
  /** 一个item的占宽最大24，默认24 */
  gutterSpan?: number;
  /** 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释 */
  size?: any;
}

// 这样可以让 FormConfig.openMode 拿到 FormOpenMode 的范围提示
export type FormOpenModes = keyof typeof FormOpenMode;

// 表单打开模式
export enum FormOpenMode {
  default = 'default',
  drawer = 'drawer',
  dialog = 'dialog',
}
```

