<template>
  <div class="container-section-new-products">
    <div class="title-section">
      <h2>Новинки</h2>
    </div>
    <div class="wrapper-container-slider">
      <div class="container-slider">
        <Carousel v-bind="settings" class="carousel-slider">
          <Slide v-for="slide in list" :key="slide">
            <div class="slide-item">
              <img :src="slide" alt="" />
            </div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import list from "/src/data/slider/ImgForSlider.json";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { reactive } from "vue";

const settings = reactive({
  itemsToShow: 1,
  snapAlign: "center",
  wrapAround: true,
  autoplay: 4000,
  transition: 1000,
});
</script>

<style scoped>
.container-section-new-products {
  width: 100%;
  height: 100%;
}
.title-section {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-title-section);
  color: var(--dark-text-color);
  font-weight: 400;
}
.title-section h2 {
  font-weight: 400;
  font-size: 44px;
}
.wrapper-container-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
}
.container-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(29, 34, 39);
  border: solid 2px rgba(133, 186, 136, 0.85);
  border-radius: 15px;
  width: 400px;
  height: 300px;
}
.carousel-slider {
  --vc-nav-color: #71ab74 !important;
  --vc-pgn-active-color: #5e8660 !important;
  --vc-pgn-background-color: #d9d9d9 !important;
  --vc-nav-width: 40px;
  --vc-nav-height: 40px;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.slide-item {
  display: flex;
  width: 240px;
  height: 240px;
}
.slide-item img {
  width: 100%;
  height: 100%;
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
