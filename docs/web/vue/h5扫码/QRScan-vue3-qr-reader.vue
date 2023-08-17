<template>
    <qr-stream class="qr-stream-box" @decode="onDecode" style="">
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


