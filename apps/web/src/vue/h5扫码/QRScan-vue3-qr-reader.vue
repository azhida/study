<template>
    <qr-stream class="qr-stream-box" @decode="onDecode" @init="onInit" style="width: 100vw; height: 100vh;position: fixed;top: 0;left: 0;">
        <div class="frame"></div>
        <van-icon class="close" name="clear" color="#f7f8fa" size="8vw" @click="onClickClose" />
    </qr-stream>
</template>

<script setup lang="ts">
/**
 * @function success
 * @function error
 * @function close
 */
import { QrStream, QrCapture, QrDropzone } from 'vue3-qr-reader';

const emit = defineEmits(['success', 'error', 'close'])

async function onInit(promise) {
    try {
        await promise
      } catch (error) {
        let errMsg = '无法获取设备信息';
        if (error.name === 'NotAllowedError') {
            errMsg = 'ERROR: 您需要授予相机访问权限'
        } else if (error.name === 'NotFoundError') {
          errMsg = 'ERROR: 这个设备上没有摄像头'
        } else if (error.name === 'NotSupportedError') {
          errMsg = 'ERROR: 所需的安全上下文(HTTPS、本地主机)'
        } else if (error.name === 'NotReadableError') {
          errMsg = 'ERROR: 相机被占用'
        } else if (error.name === 'OverconstrainedError') {
          errMsg = 'ERROR: 安装摄像头不合适'
        } else if (error.name === 'StreamApiNotSupportedError') {
          errMsg = 'ERROR: 此浏览器不支持流API'
        }

        emit('error', errMsg)
        emit('close', false)
      }
}

function onDecode(data) {
    emit('success', data)
}

function onClickClose() {
    emit('close', false)
}
</script>

<style lang="scss" scoped>
.qr-stream-box{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

    .frame{
        color: red;
    }

    .close {
        position: absolute;
        top: 20px; 
        right: 20px;
    }
}
</style>


