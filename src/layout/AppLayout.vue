<template>
  <div id="appLayoutID" class="app-layout">
    <MainPage />
    <ThemeProvider />
  </div>
</template>

<script setup>
import MainPage from "/src/components/page/MainPage.vue";
import ThemeProvider from "/src/theme/ThemeProvider.vue";
</script>

<style scoped>
.app-layout {
  width: 100%;
  height: 100%;
}
</style>
