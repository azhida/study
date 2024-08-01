<template>
    <div class="main">
        <button @click="show = true" style="border: 1px solid red;">点击扫一扫</button>
    </div>
    
    <QRScan v-if="show" @success="onSuccess" @close="show = false" ></QRScan>
</template>

<script setup>
import QRScan from './QRScan-vue3-qr-reader.vue'

const show = false;
</script>
