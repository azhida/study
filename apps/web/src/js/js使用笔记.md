# js 使用笔记

## 获取 dom 节点

```js
var dom = document.getElementById('element'); // 获取 dom节点
```

## 获取 dom 实时 style

```js
var dom = document.getElementById('element'); // 获取 dom节点
window.getComputedStyle(dom).width;  // 获取 dom 实时宽度
window.getComputedStyle(dom).height;  // 获取 dom 实时高度
```

## 获取 dom 位置

```js
var dom = document.getElementById('element'); // 获取 dom节点
dom.getBoundingClientRect() // 获取 dom 位置
```

## 判断变量类型

### 是否字符串

```js
var str = {a:1};
if (typeof str == 'string') {
	console.log('字符串')
} else {
	console.log('非字符串')
}
```

### 是否对象

```js
var str = {a:1};
if (typeof str == 'object') {
	console.log('对象')
} else {
	console.log('非对象')
}
```

## json 转 string

```js
var obj = {a:11,b:22};
var str = JSON.stringify(obj);
console.log(str);
// {"a":11,"b":22}
```

## string 转 json

```js
var str = '{"a":11,"b":22}';
var obj = JSON.parse(str);
console.log(obj);
// {"a":11,"b":22}
```

## 数组操作

### 添加元素

- push() : 尾部添加
- unshift() : 头部添加
- splice() : 指定位置添加【该函数有更多的用法自行百度】

```js
var arr = ['a'];
arr.push('b');
console.log(arr); // ["a", "b"]
arr.unshift('c');
console.log(arr); // ["c", "a", "b"]
arr.splice(2, 0, 'd');
console.log(arr); // ["c", "a", "d", "b"]
```

### 删除元素

- shift() : 删除数组第一个元素
- delete : 删除指定元素
- splice() : 指定位置添加【该函数有更多的用法自行百度】

```js
var arr = ['a', 'b'];
var res = arr.shift(); // a
console.log(arr); // ["b"]
delete arr[0];
console.log(arr); // []
arr.splice(0,1); // 从 第下标为 1 的元素开始取
```
