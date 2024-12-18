<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { computed, ref } from "vue";

const props = defineProps({
  showModel: Boolean,
  dataCard: Object,
});

const currentSlide = ref(0);

const slideTo = (nextSlide) => (currentSlide.value = nextSlide);

// const numberImages = computed(() => {
//   return props.dataCard.detailedImages.length ?? 1;
// });

// function testLog() {
//   console.log("numberImages", numberImages.value);
// }

const galleryConfig = {
  itemsToShow: 1,
  wrapAround: true,
  mouseDrag: true,
  touchDrag: true,
};

const thumbnailsConfig = {
  itemsToShow: props.dataCard.detailedImages.length,
  wrapAround: true,
  gap: 10,
};

const emit = defineEmits(["close"]);
function closeModal() {
  emit("close"), false;
}
</script>
<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="showModel" class="container-modal-card">
        <div class="wrapper-modal-card">
          <div class="heder-modal-card">
            <button class="button" @click="closeModal()">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27 19.25C27.5523 19.25 28 18.8023 28 18.25L28 16.75C28 16.1977 27.5523 15.75 27 15.75L14 15.75L19.4179 10.3321C19.8084 9.94158 19.8084 9.30842 19.4179 8.91789L18.3471 7.84711C17.9566 7.45658 17.3234 7.45658 16.9329 7.84711L7.98711 16.7929C7.59658 17.1834 7.59658 17.8166 7.98711 18.2071L16.9329 27.1529C17.3234 27.5434 17.9566 27.5434 18.3471 27.1529L19.4179 26.0821C19.8084 25.6916 19.8084 25.0584 19.4179 24.6679L14 19.25L27 19.25ZM7.64949e-07 17.5C6.64495e-07 19.7981 0.452649 22.0738 1.33211 24.197C2.21156 26.3202 3.50061 28.2493 5.12563 29.8744C8.40752 33.1563 12.8587 35 17.5 35C22.1413 35 26.5925 33.1563 29.8744 29.8744C33.1563 26.5925 35 22.1413 35 17.5C35 15.2019 34.5474 12.9262 33.6679 10.803C32.7884 8.67984 31.4994 6.75066 29.8744 5.12563C28.2493 3.50061 26.3202 2.21156 24.197 1.33211C22.0738 0.452648 19.7981 -6.64495e-07 17.5 -7.64949e-07C12.8587 -9.67826e-07 8.40752 1.84375 5.12563 5.12563C1.84375 8.40752 9.67826e-07 12.8587 7.64949e-07 17.5ZM3.5 17.5C3.5 13.787 4.975 10.226 7.60051 7.6005C10.226 4.97499 13.787 3.5 17.5 3.5C21.213 3.5 24.774 4.97499 27.3995 7.6005C30.025 10.226 31.5 13.787 31.5 17.5C31.5 21.213 30.025 24.774 27.3995 27.3995C24.774 30.025 21.213 31.5 17.5 31.5C13.787 31.5 10.226 30.025 7.6005 27.3995C4.975 24.774 3.5 21.213 3.5 17.5Z"
                  fill="url(#paint0_linear_345_4379)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_345_4379"
                    x1="36.1667"
                    y1="38.25"
                    x2="28.7964"
                    y2="-4.60243"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#30572E" />
                    <stop
                      offset="0.859375"
                      stop-color="#DAF8DE"
                      stop-opacity="0.5"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </button>
            <div class="title-modal-card">
              <h1>{{ dataCard?.name }}</h1>
              <h2>{{ dataCard?.description }}</h2>
            </div>
          </div>

          <div class="container-images-modal-card">
            <Carousel
              id="gallery"
              v-bind="galleryConfig"
              v-model="currentSlide"
              class="carousel-displayed-image"
            >
              <Slide
                v-for="image in props.dataCard.detailedImages"
                :key="image.id"
              >
                <div class="carousel__item">
                  <img
                    :src="image.image"
                    alt="Gallery Image"
                    class="gallery-image"
                  />
                </div>
              </Slide>
            </Carousel>
            <!-- :itemsToShow="props.dataCard.detailedImages.length" -->

            <Carousel
              id="thumbnails"
              v-bind="thumbnailsConfig"
              v-model="currentSlide"
              class="group-slider-images"
            >
              <Slide
                v-for="image in props.dataCard.detailedImages"
                :key="image.id"
              >
                <div class="carousel__items" @click="slideTo(image.id - 1)">
                  <img
                    :src="image.image"
                    alt="Thumbnail Image"
                    class="thumbnail-image"
                  />
                </div>
              </Slide>

              <template #addons class="navigation">
                <Navigation />
              </template>
            </Carousel>
          </div>

          <div class="description-modal-card">
            <p>{{ dataCard.detailedDescription }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.container-modal-card {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
  padding: 7px;
}
.wrapper-modal-card {
  background: var(--background-modal-window);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
}
.heder-modal-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 15px;
  background: rgba(118, 133, 108, 0.9);
  border-radius: 5px;
  padding-left: 10px;
}
.heder-modal-card button {
  background: none;
  border: none;
  width: 50px;
}
.heder-modal-card button svg {
  width: 35px;
  height: 35px;
}
.title-modal-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(244, 250, 243, 0.808);
}
.title-modal-card {
  width: 100%;
}

.container-images-modal-card {
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  justify-content: center;
  width: 100%;
  gap: 7px;
  padding-bottom: 15px;
  background: rgb(118, 133, 108);
  padding: 10px;
  border-radius: 5px;
}

.carousel-displayed-image {
  background: rgb(29, 34, 39);
  border-radius: 5px;
}

.carousel-displayed-image .carousel__item {
  background: rgb(29, 34, 39);
  width: 100%;
}
.carousel__item {
  width: 250px;
  height: 250px;
  border-radius: 5px;
}

.carousel-displayed-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 5px;
}

.group-slider-images {
  width: 100%;
}

.carousel__items {
  background: rgb(29, 34, 39);
  width: 50px;
  height: 50px;
  border-radius: 5px;
}

.carousel__items img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.container-additional-images {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.additional-images {
  width: 50px;
  height: 50px;
  background: rgb(29, 34, 39);
  border-radius: 5px;
}
.additional-images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.container-main-image {
  background: rgb(29, 34, 39);
  border-radius: 5px;
}
.container-main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.description-modal-card p {
  background: rgb(118, 133, 108);
  padding: 10px;
  border-radius: 5px;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
<style>
.carousel__prev {
  left: -10px !important;
}
.carousel__next {
  right: -10px !important;
}
</style>
