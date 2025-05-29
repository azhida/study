# vue3 动态设置网站 icon

```js
const changeFavicon = (iconPath) => {
  let link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = iconPath;
};
```