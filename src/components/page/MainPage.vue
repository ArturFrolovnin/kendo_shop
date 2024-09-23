<template>
  <div class="container-image-page">
    <div class="heder-page">
      <TitlePage />
      <Navbar />
    </div>
  </div>
</template>
<script setup>
import TitlePage from "/src/components/elements/titlePage/TitlePage.vue";
import Navbar from "/src/components/elements/navbar/NavBar.vue";
</script>
<style scoped>
.container-image-page {
  background-image: var(--background-main-page);
  width: 100%;
  height: 100%;
  background-size: cover;
}
</style>
