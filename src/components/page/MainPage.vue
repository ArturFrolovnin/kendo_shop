<template>
  <div class="container-image-page">
    <div class="heder-page">
      <TitlePage />
      <Navbar />
      <InformationBlock />
      <SliderForProducts />
    </div>
  </div>
</template>
<script setup>
import TitlePage from "/src/components/elements/titlePage/TitlePage.vue";
import Navbar from "/src/components/elements/navbar/NavBar.vue";
import InformationBlock from "/src/components/elements/info/InformationBlock.vue";
import SliderForProducts from "/src/components/elements/slider/SliderForProducts.vue";
</script>
<style scoped>
.container-image-page,
.heder-page {
  width: 100%;
  height: 100%;

}
</style>
