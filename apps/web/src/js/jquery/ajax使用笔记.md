# ajax  使用笔记

## 实例

```js
$.ajax({
	type: "post",
	url: "path",
	cache: false,
	async: false,
	dataType: ($.browser.msie) ? "text" : "xml",
	success: function(xmlobj) {}
});
```

- `async` : 是否异步请求，true 异步，false 同步