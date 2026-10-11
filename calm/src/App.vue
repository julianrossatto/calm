
<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import './assets/styles/global.css'
</script>

<template>
  <AppHeader />

  <RouterView />

  <AppFooter />
</template>
