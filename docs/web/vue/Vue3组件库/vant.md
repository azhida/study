# vant 

有赞团队开源移动 UI 组件库，全面支持 Vue 3。

- 官网

https://vant-ui.github.io/vant/#/zh-CN/home

https://vant-contrib.gitee.io/vant/#/zh-CN

## 注意

### Vant4 样式不显示问题

原因：组件按需引入自动引入时，并未自动引入以下组件

```js
import 'vant/es/toast/style';
import 'vant/es/notify/style' 
import 'vant/es/dialog/style'
import { showSuccessToast,showNotify,showConfirmDialog  } from 'vant';
```