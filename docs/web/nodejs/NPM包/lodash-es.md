# lodash-es

[官网](https://www.lodashjs.com/)

Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。

lodash-es模块使得我们能按需引入lodash对应的工具方法。

Lodash 通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单。 

Lodash 的模块化方法 非常适用于：
- 遍历 array、object 和 string
- 对值进行操作和检测
- 创建符合功能的函数

## 安装
```
npm i --save lodash lodash-es
```

## 使用

> 注意：如果下面碰到方法不能使用的情况，请检查安装lodash版本是否已经支持该版本了。

### 数组

#### concat - 数组拼接

```
// 可对concat设置别名lodashConcat
import { concat as lodashConcat } from 'lodash-es'

// 用lodash前：要注意两个都是数组类型才能拼接，返回新数组。concat用于简单的数组中是深拷贝，用于复杂的数组是浅拷贝
const arr1 = [1, 2, 3]
const arr2 = [5, 6, 7]
const resArr = arr1.concat(arr2)
console.log(resArr) // [1, 2, 3, 5, 6, 7]

// 用lodash后：可将array与任何数组 或 值连接在一起，返回新数组。
const resultArr = lodashConcat(arr1, arr2, 11)
console.log(resultArr) // [1, 2, 3, 5, 6, 7, 11]
```


#### findIndex - 数组搜索

```
import { findIndex as lodashFindIndex } from 'lodash-es'

// 用lodash前：用原生的数组方法findIndex，只有一种写法检索方式。
const users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false, name: 'winne' },
  { user: 'pebbles', active: true }
]
const resIndex = users.findIndex((item) => item.user === 'barney') // 0

// 用lodash后：可以传入多种检索方式。
const resultIndex1 = lodashFindIndex(users, (item) => item.user === 'barney') // 0
const resultIndex2 = lodashFindIndex(users, { user: 'fred', active: false }) // 1
const resultIndex3 = lodashFindIndex(users, ['active', false]) // 0

```

> 说明：与该方法使用类似的还有find方法。find方法返回检索的数组第一个匹配的元素项，否则返回undefined。

- intersection：返回一个包含所有传入数组交集元素的新数组。

```
import { intersection } from 'lodash-es'

const arr1 = [2, 1]
const arr2 = [4, 2]
const arr3 = [1, 2]
const arr4 = []
const newArr = intersection(arr1, arr2, arr3) // [2]
const newArr2 = intersection(arr1, arr2, arr4) // []

```

> 说明：还有一个高级的返回交集的方法 `intersectionBy` 他可以自定义每一项的比对来返回交集。

- union：返回一个新的联合（并集）数组。数组按顺序返回，返回数组的元素是唯一的。

```
import { union } from 'lodash-es'

const arr1 = [2, 3]
const arr2 = [1, 2]
const resArr = union(arr1, arr2) // [2, 3, 1]

```

> 说明：还有一个高级的返回并集的方法unionBy他可以自定义每一项的比对来返回并集。

- uniq：返回新的去重后的数组。

```
import { uniq } from 'lodash-es'

const arr1 = [2, 3, 2, 4, 5]
const resArr = uniq(arr1) // [2, 3, 4, 5]

```

> 说明：还有一个高级的返回去重后的方法uniqBy他可以自定义每一项的比对来返回去重后的数组。

- head：返回数组 array的第一个元素。

```
import { head, last } from 'lodash-es'

const arr = [1, 2, 3]
const headItem = head(arr) // 1

```

>

- last：返回array中的最后一个元素。

```
import { head, last } from 'lodash-es'

const arr = [1, 2, 3]
const lastItem = last(arr) // 3

```

### 集合

#### sample - 获得一个随机元素

```js
_.sample([1, 2, 3, 4]);
// => 2
```


### 对象

- get： `get(object, path, [defaultValue])` 根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。

```
import { get } from 'lodash-es'

const object = {
  a: [{ b: { c: 3 } }],
  info: { name: 'winne', age: '18' }
}
// 传入属性字符串路径方式
const res1 = get(object, 'a[0].b.c') // 3

// 传入属性数组方式
const res2 = get(object, ['a', '0', 'b', 'c']) // 3

// 最后一个参数为设置找不到时的默认值
const res3 = get(object, 'info.like', 'wa') // 'wa'

const res4 = get(object, 'a[0].b.c.d.f') // undefined

```

> 说明: 用get方法就算路径上获取不到也不会报错了，会返回undefined，此时按需设置一个默认值即可。  
> 不再需要像以前那样使用很多的判断来防止路径获取不到而报错的情况了。


- set: `set(object, path, value)` 设置 object对象中对应 path 属性路径上的值，如果path不存在，则创建。 缺少的索引属性会创建为数组，而缺少的属性会创建为对象。(这个方法会改变 object)

```
const obj = {
  a: [{ id: 1, name: 'winne', age: 18 }],
  b: 11,
  c: 33
}
set(obj, 'a[0].like', 'hi')
set(obj, 'a[0].say.my', 'hello')
set(obj, ['d', 'j'], 'come')
/** obj的值：
  {
    a: [{ id: 1, name: 'winne', like: 'hi', age: 18, say: { my: 'hello'} }],
    b: 11,
    c: 33,
    d: { j: 'come'}
  }
  */


```

>

 
- merge： `merge(object, [sources])` 它递归合并 sources 来源对象自身和继承的可枚举属性到 object 目标对象。如果目标值存在，被解析为undefined的sources 来源对象属性将被跳过。数组和普通对象会递归合并，其他对象和值会被直接分配覆盖。源对象从从左到右分配。后续的来源对象属性会覆盖之前分配的属性。

```
import { merge } from 'lodash-es'

const obj = {
  a: [{ id: 1, name: 'winne', age: 18 }],
  b: 11
}
const other = {
  a: [{ name: 'xf', age: 10 }],
  b: 1,
  c: 33
}
const regMerge = merge(obj, other)
/** regMerge的值：
 * {
    a: [{ id: 1, name: 'xf', age: 10 }],
    b: 1,
    c: 33
  }
  */

```

>

- 
- omit：把一个对象的指定属性剔除。

```
import { omit } from 'lodash-es'

const obj = {
  a: [{ id: 1, name: 'winne', age: 18 }],
  b: 11,
  c: 33
}
const reg = omit(obj, ['a[0].age', 'b', 'c']) // { a: [{ id: 1, name: 'winne' }] }

```

> 说明：用于处理传递参数给接口时去除少量多余的属性字段时非常有用。

- pick：从一个对象中挑选指定属性。

```
import { pick } from 'lodash-es'

const obj = {
  a: [{ id: 1, name: 'winne', age: 18 }],
  b: 11,
  c: 33
}
const reg = pick(obj, ['a[0].age', 'b']) // { a: [{ age: 18 }], b: 11 }

```

> 说明：用于处理传递参数给接口时挑选少量属性字段时非常有用。

### 字符串

- trim： `trim([string=''], [chars=whitespace])` 默认从string字符串中移除前面和后面的 空格 ，也可以配置移除首尾指定的字符。

```
import { trim } from 'lodash-es'

// 默认移除首尾空格
console.log(trim('  abc  ')) // abc
// 移除指定字符
console.log(trim('-_*abc_', '*_-')) // abc

```

> 说明: 当指定字符进行移除时，首尾只要是能匹配到的单个指定字符都会被移除（配置的指定字符不需要关注顺序）。


### 常用函数

- uniqueId： `uniqueId([prefix=''])` 生成唯一ID。 如果提供了 prefix ，会被添加到ID前缀上。

```
import { uniqueId } from 'lodash-es'

console.log(uniqueId()) // 1
console.log(uniqueId()) // 2
for (let i = 0; i < 100; i++) {
  console.log(uniqueId('winne')) // winne3  ~  winne102
}
console.log(uniqueId('xf')) // xf103

```

> 说明：无论是加前缀还是不加前缀，生成的ID都是唯一的。

- cloneDeep： `cloneDeep(value)` 返回深拷贝后的值。

```
import { cloneDeep } from 'lodash-es'

const obj = {
  a: 111,
  b: {
    arr: [1, { b: 55 }, 33]
  }
}
const copyObj = cloneDeep(obj) // copyObj为obj深拷贝后的值

```

>

- isEqual： `isEqual(value, other)` 执行深比较来确定两者的值是否相等。如果 两个值完全相同，那么返回 true，否则返回 false。

```
import { cloneDeep } from 'lodash-es'

const obj = {
  a: 111,
  b: {
    arr: [1, { b: 55 }, 33]
  }
}
const obj2 = {
  a: 111,
  b: {
    arr: [1, { b: 55 }, 33]
  }
}
const obj3 = {
  b: {
    arr: [1, { b: 55 }, 33]
  },
  a: 111
}
const obj4 = {
  a: 111,
  b: {
    arr: [1, { b: 55 }, 33]
  },
  c: ''
}

// 两个值完全相同
console.log(isEqual(obj, obj2)) // true
// 两个键值对的值完全相同，对象类型键名顺序不重要
console.log(isEqual(obj, obj3)) // true
// 两个对象键值对不完全相同
console.log(isEqual(obj, obj4)) // false

```

> 说明：这个方法支持比较 arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, 以及 typed arrays. Object 对象值比较自身的属性，不包括继承的和可枚举的属性。 不支持函数和DOM节点比较。



- isMatch： `isMatch(object, source)` 

执行一个深度比较，来确定 object 是否含有和 source 完全相等的属性值。  
如果object匹配，那么返回 true，否则返回 false。

```
import { isMatch } from 'lodash-es'

const obj = {
a: [{ id: 1, app: 2, pc: 3 }],
b: {
  arr: [1, { b: 55 }, 33]
},
c: 2,
d: 33
}
const source2 = {
a: [{ id: 1, app: 2, pc: 3 }],
b: {
  arr: [1, { b: 55 }, 33]
},
c: 2
}
const source3 = {
a: [{ app: 2, pc: 3 }],
b: {
  arr: [1, { b: 55 }, 33]
},
c: 2
}
const source4 = {
a: [{ id: 1, app: 2 }],
b: {
  arr: [1, { b: 55 }, 33]
},
c: 2,
d: 33
}
const source5 = {
a: [{ id: 1, app: 2, pc: 3 }],
b: {
  arr: [1, { b: 55 }, 33]
},
c: 2,
d: 33,
e: 66
}

// source2少了d属性，存在包含关系
console.log(isMatch(obj, source2)) // true
// source3少了d属性、a[0].id属性，存在包含关系
console.log(isMatch(obj, source3)) // true
// source4少了a[0].pc属性，存在包含关系
console.log(isMatch(obj, source4)) // true
// source5多了一个e属性，不存在包含关系
console.log(isMatch(obj, source5)) // false

```

> 说明：一般应用于数据比对，且要比对的两个对象存在包含关系即为数据未发生改变的情况。

- toString： `toString(value)` 转换 value 为字符串。 null 和 undefined 将返回空字符串。-0 将被转换为字符串"-0"。

```
import { toString } from 'lodash-es'

const a = 123
const b = null
const c = [4, 5, 6]
console.log(toString(a)) // '123'
console.log(toString(b)) // ''
console.log(toString(c)) // '4,5,6'

// 下面是内置的转字符串方法
console.log(a.toString()) // '123'
console.log(c.toString()) // '4,5,6'
console.log(b.toString()) // 报错

```

> 说明：从上面可以看出，使用lodash中的toString方法容错性比较强。

- throttle： `throttle(func, [wait=0], [options=])` 创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。 该函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。

```
import { throttle } from 'lodash-es'

const fn = throttle(() => {
  console.log('节流函数执行了')
}, 500)
window.addEventListener('resize', fn)

```

> 说明：一段时间只做一件事情，时间没到就不做。  
> 实际应用：表单的提交（解决多次频繁点击提交表单的bug）、监听浏览器窗口发生变化做某些事情。

- debounce： `debounce(func, [wait=0], [options=])` 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。 debounced（防抖动）函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。

```
import { debounce } from 'lodash-es'

const fn = debounce(() => {
  console.log('防抖函数执行了')
}, 500)
// 这个例子不太合适，仅供看效果
window.addEventListener('resize', fn)

```

> 说明：当持续触发事件，一定时间内没有再触发事件，事件处理函数就会执行一次。如果设定的定时器延迟到来之前 又触发了事件，那么就会重新开始计时。  
> 实际应用：输入搜索

- orderBy： `orderBy(collection, [iteratees=[_.identity]], [orders])` 

collection 为用来迭代的集合。允许指定 iteratee（迭代函数）结果如何排序。 如果没指定 orders（排序），所有值以升序排序。 否则，指定为"desc" 降序，或者指定为 “asc” 升序，排序对应值。返回排序后的新数组。

```
import { orderBy } from 'lodash-es'

const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 34 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 36 }
]

// 以 `user` 升序排序 再  `age` 以降序排序。
const u1 = orderBy(users, ['user', 'age'], ['asc', 'desc'])
console.log('🚀 ~ u1', u1)

// 以 `age` 以升序排序。
const u2 = orderBy(users, ['age'], ['asc'])
console.log('🚀 ~ u2', u2)

```

> 说明：一般用于对数组对象中的某个属性进行排序。

- includes： `includes(collection, value, [fromIndex=0])` 

collection 为要检索的集合。检查 value(值) 是否在 collection(集合) 中。如果 collection(集合)是一个字符串，那么检查 value（值，子字符串） 是否在字符串中， 否则使用SameValueZero 做等值比较。 如果指定 fromIndex 是负数，那么从 collection(集合) 的结尾开始检索。

如果找到 value 返回 true， 否则返回 false。

```
import { includes } from 'lodash-es'

// 数组中是否包含1
console.log(includes([1, 2, 3], 1)) // true
// 数组下标2开始，是否包含1
console.log(includes([1, 2, 3], 1, 2)) // false
// 数组下标1开始，是否包含1
console.log(includes([0, 1, 3], 1, 1)) // true
// 对象中是否包含属性的值为'fred'
console.log(includes({ user: 'fred', age: 40 }, 'fred')) // true
// 字符串中是否包含'eb'
console.log(includes('pebbles', 'eb')) // true

```

> 说明：可用于检索数组、对象、字符串。

- forEach： `forEach(collection, [iteratee=_.identity]`

collection 为一个用来迭代的集合。调用 iteratee 遍历 collection(集合) 中的每个元素， iteratee 调用3个参数： (value, index|key, collection)。 如果迭代函数（iteratee）显式的返回 false ，迭代会提前退出。

```
import { forEach } from 'lodash-es'

const arr = [1, 2, 3, 4, 5, 6]
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
}
forEach(arr, (value) => {
  console.log('🚀 ~ value', value)
  if (value > 2) {
    // 如果迭代函数显式的返回 false ，迭代会提前退出。
    return false
  }
})

forEach(obj, (value, key) => {
  console.log('🚀 ~ value, key', value, key)
  if (value > 2) {
    // 如果迭代函数显式的返回 false ，迭代会提前退出。
    return false
  }
})

```

> 说明：使用lodash库中的forEach方法则数组和对象均可遍历，并且使用显示返回false还能提前退出遍历。


