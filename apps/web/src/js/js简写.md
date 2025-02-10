# JS 简写

## 三元运算符简化条件判断

```js
// 传统写法
let result;
if (someCondition) {
    result = 'yes';
} else {
    result = 'no';
}

// 简写方式
const result = someCondition ? 'yes' : 'no';
```

## 空值合并运算符

```js
// 传统写法
const name = user.name !== null && user.name !== undefined ? user.name : 'default';

// 简写方式
const name = user.name ?? 'default';
```

## 可选链操作符

```js
// 传统写法
const street = user && user.address && user.address.street;

// 简写方式
const street = user?.address?.street;
```

## 数组去重

```js
// 传统写法
function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// 简写方式
const unique = arr => [...new Set(arr)];
```



## 快速取整

```js
// 传统写法
const floor = Math.floor(4.9);

// 简写方式
const floor = ~~4.9;
```


## 合并对象

```js
// 传统写法
const merged = Object.assign({}, obj1, obj2);

// 简写方式
const merged = {...obj1, ...obj2};
```



## 短路求值

```js
// 传统写法
if (condition) {
    doSomething();
}

// 简写方式
condition && doSomething();
```

## 默认参数值

```js
// 传统写法
function greet(name) {
    name = name || 'Guest';
    console.log(`Hello ${name}`);
}

// 简写方式
const greet = (name = 'Guest') => console.log(`Hello ${name}`);
```

## 解构赋值

```js
// 传统写法
const first = arr[0]
const second = arr[1]

// 简写方式
const [first, second] = arr;
```

## 字符串转数字

```js
// 传统写法
const num = parseInt('123');

// 简写方式
const num = +'123';
```

## 多重条件判断

```js
// 传统写法
if (value === 1 || value === 2 || value === 3) {
  // ...

}

// 简写方式
if([1,2,3].includes(value)){
  // ...
}
```

## 快速幂运算

```js
// 传统写法
Math.pow(2,3);

// 简写方式
2 ** 3;
```

## 对象属性简写

```js
// 传统写法
const obj = {x:x, y:y};

// 简写方式
const obj = {x,y};
```

## 数组映射

```js
// 传统写法
const numbers=[1，2，3];
const doubled=numbers.map(function(num){
  return num*2;
}):

// 简写方式
const doubled=numbers.map(num=>num*2);
```

## 交换变量值

```js
// 传统写法
let temp = a;
a = b;
b = temp;

// 简写方式
[a,b]=[b,a];
```

## 动态对象属性

```js
// 传统写法
const obj = {};
obj[dynamic + 'name'] = value;

// 简写方式
const obj = {
    [`${dynamic}name`]: value
};
```


