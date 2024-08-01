<template>
  <lunchbox :app="lunchboxApp" />
</template>

<script setup>
import { createApp, lunchbox  } from 'lunchboxjs'
import LunchboxApp from './LunchboxApp.vue'

const lunchboxApp = createApp(LunchboxApp)
// you can add plugins, etc here - for example:
// lunchboxApp.use(myPlugin)
// lunchboxApp.component(myComponent)
// lunchboxApp.provide(myProvide)
</script>