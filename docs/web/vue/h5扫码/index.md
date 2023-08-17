# H5 扫码 


::: danger 注意 
H5 调手机摄像头需要在 https 环境下使用，否则将不保证可以正常工作！
:::

## html5-qrcode

- 官网

https://scanapp.org/html5-qrcode-docs/

## vue-qrcode-reader

- 官网

https://vue-qrcode-reader.netlify.app/

## vue3-qr-reader

- 官网

https://vue-qrcode-reader.netlify.app/

- 示例代码

::: details 封装 /QRScan.vue

<<< @/web/vue/h5扫码/QRScan-vue3-qr-reader.vue

:::

调用
```vue
<QRScan v-if="show" @success="onSuccess" @error="onError" @close="show = false" ></QRScan>
```

如果扫码页面 css 样式不生效，则将 css 样式 写到 内联样式中