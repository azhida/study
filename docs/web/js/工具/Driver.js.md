# Driver.js 新手用户引导页制作工具

- 官网

https://kamranahmed.info/driver.js/

## 下载

https://github.com/kamranahmedse/driver.js

https://gitee.com/wghzhida/driver.js


## 安装

```sh
yarn add driver.js
npm install driver.js
```
或
```html
<script src="https://unpkg.com/driver.js/dist/driver.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/driver.js/dist/driver.min.css">
```

## 使用

::: danger 注意
尽量在 页面渲染完成后 再使用，否则可能 位置不准确或者其他样式异常！
:::

```js
const driver = new Driver();
driver.highlight('#create-post');
```

```ts
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const driverObj = driver({})
driver.highlight('#el');

// 第 0 步
driverObj.drive(0);
```

## 相关配置参数及接口

### 初始化参数

```js
const driver = new Driver({
  // className来包装驱动程序。js弹出窗口
  // className to wrap driver.js popover
  className: 'scoped-class', 
  // 更改亮显元素时设置动画
  // Animate while changing highlighted element
  animate: true,  
  // 背景不透明度（0表示仅弹出窗口，没有覆盖）
  // Background opacity (0 means only popovers and without overlay)
  opacity: 0.75,  
  // 元件与边缘周围的距离
  // Distance of element from around the edges
  padding: 10,    
  // 单击覆盖是否应关闭
  // Whether clicking on overlay should close or not
  allowClose: true, 
  // 如果移动到覆盖上的下一步，请单击
  // Should it move to next step on overlay click
  overlayClickNext: false, 
  // 最后一个按钮上的文本
  // Text on the final button
  doneBtnText: 'Done', 
  // 此步骤关闭按钮上的文本
  // Text on the close button for this step
  closeBtnText: 'Close', 
  // 此步骤的下一个按钮文本
  // Next button text for this step
  nextBtnText: 'Next', 
  // 此步骤的上一个按钮文本
  // Previous button text for this step
  prevBtnText: 'Previous', 
  // 不在页脚中显示控制按钮
  // Do not show control buttons in footer
  showButtons: false, 
  // 允许通过键盘进行控制（退出以关闭，箭头键移动）
  // Allow controlling through keyboard (escape to close, arrow keys to move)
  keyboardControl: true, 
  // 如果可能，我们使用“scrollIntoView（）”，如果需要，请将其选项传递给此处
  // We use `scrollIntoView()` when possible, pass here the options for it if you want any
  scrollIntoViewOptions: {}, 
  // 当元素将被突出显示时调用
  // Called when element is about to be highlighted
  onHighlightStarted: (Element) {}, 
  // 当元素完全突出显示时调用
  // Called when element is fully highlighted
  onHighlighted: (Element) {},
  // 取消选择元素时调用
  // Called when element has been deselected
  onDeselected: (Element) {}, 
  // 在即将清除覆盖时调用
  // Called when overlay is about to be cleared
  onReset: (Element) {},    
  // 在任何步骤上移动到下一步骤时调用    
  // Called when moving to next step on any step
  onNext: (Element) => {},      
  // 在任何步骤上移动到下一步骤时调用
  // Called when moving to next step on any step
  onPrevious: (Element) => {},  
});

```

### 步骤参数

```js
// 以下是可在每个步骤中传递的一组选项
const stepDefinition = {
  // 要突出显示的查询选择器字符串或节点
  // Query selector string or Node to be highlighted
  element: '#some-item',        
  // 如果为空或未给出，则不会弹出窗口
  // There will be no popover if empty or not given
  popover: {                    
   // className to wrap this specific step popover in addition to the general className in Driver options
    className: 'popover-class', 
    // 弹出窗口上的标题
    // Title on the popover
    title: 'Title',    
    // 主要描述内容         
    // Body of the popover
    description: 'Description', 
    // 不在页脚中显示控制按钮
    // Do not show control buttons in footer
    showButtons: false,   
    // 此步骤关闭按钮上的文本      
    // Text on the close button for this step
    closeBtnText: 'Close',      
    // 此步骤的下一个按钮文本
    // Next button text for this step
    nextBtnText: 'Next',    
    // 此步骤的上一个按钮文本    
    // Previous button text for this step
    prevBtnText: 'Previous',    
  }
};

```

### 可支持的方法

```js
const driver = new Driver(driverOptions);

// 检查驱动程序是否激活
// Checks if the driver is active or not
const isActivated = driver.isActivated; 
// 移至步骤列表中的下一步
// Moves to next step in the steps list
driver.moveNext();     
// 移至步骤列表中的上一步
// Moves to previous step in the steps list
driver.movePrevious(); 
// 开始执行定义的步骤
// Starts driving through the defined steps
driver.start(stepNumber = 0);  
// 使用查询选择器或步骤定义突出显示元素
// highlights the element using query selector or the step definition
driver.highlight(string|stepDefinition); 
// 重置覆盖并清除屏幕
// Resets the overlay and clears the screen
driver.reset(); 
// 检查是否有任何突出显示的元素
// Checks if there is any highlighted element
driver.hasHighlightedElement(); 
// 检查是否有下一步要移动
// Checks if there is next step to move to
driver.hasNextStep(); 
// 检查是否有上一步要移动到
// Checks if there is previous step to move to
driver.hasPreviousStep(); 

// 防止当前移动。如果需要，可在“onNext”或“onPrevious”中使用
// Prevents the current move. Useful in `onNext` or `onPrevious` if you want to
// 执行一些异步任务并手动转到下一步
// perform some asynchronous task and manually move to next step
driver.preventMove();

// 获取屏幕上当前突出显示的元素
// Gets the currently highlighted element on screen
const activeElement = driver.getHighlightedElement();
const lastActiveElement = driver.getLastHighlightedElement();
// 获取活动元素的屏幕坐标
// Gets screen co-ordinates of the active element
activeElement.getCalculatedPosition(); 
// 隐藏弹出窗口
// Hide the popover
activeElement.hidePopover();  
// 显示弹出窗口
// Show the popover
activeElement.showPopover();  
// 获取此元素后面的DOM元素
// Gets the DOM Element behind this element
activeElement.getNode();  

```

## 参考


[Driver.js - 开源无依赖的 web 新手交互引导工具库，功能强大、高度可定制](https://zhuanlan.zhihu.com/p/544404499)

[vue项目通过driver.js实现操作步骤指引](https://blog.csdn.net/m0_50082421/article/details/127316904)

[【driver.js】基础使用](https://blog.csdn.net/u011159821/article/details/128364818)

