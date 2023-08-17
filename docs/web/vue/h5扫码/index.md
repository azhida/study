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

::: details 示例代码
/QRScan.vue

<<< @/web/vue/h5扫码/QRScan-vue3-qr-reader.vue

```vue
<QRScan v-if="show" @success="onSuccess" @close="show = false" ></QRScan>
```
:::

