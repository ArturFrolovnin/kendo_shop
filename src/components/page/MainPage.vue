<template>
  <div class="container-main-page">
    <TitlePage />
    <Navbar />
    <InformationBlock />
    <SliderForProducts />
    <ProductCatalog />
    <DeliveryInformation />
    <ContactSection />
  </div>
</template>
<script setup>
import TitlePage from "/src/components/elements/titlePage/TitlePage.vue";
import Navbar from "/src/components/elements/navbar/NavBar.vue";
import InformationBlock from "/src/components/elements/info/InformationBlock.vue";
import SliderForProducts from "/src/components/elements/slider/SliderForProducts.vue";
import ProductCatalog from "/src/components/elements/catalog/ProductCatalog.vue";
import DeliveryInformation from "/src/components/elements/delivery/DeliveryInformation.vue";
import ContactSection from "/src/components/elements/contacts/ContactSection.vue";
</script>
<style scoped>
.container-main-page {
  width: 100%;
  height: 100%;
  background-image: var(--background-main-page);
  background-size: cover;
  background-repeat: repeat-y;
}
</style>
