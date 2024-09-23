<template>
  <div class="app-appilication">
    <AppLayout />
  </div>
</template>

<script setup>
import AppLayout from "/src/layout/AppLayout.vue";
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body,
#app,
.app-appilication {
  width: 100%;
  height: 100%;
}
</style>
