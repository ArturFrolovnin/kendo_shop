<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { computed, ref } from "vue";
const MINIMUM_NUMBER_IMAGES = 3;

const props = defineProps({
  showModel: Boolean,
  dataCard: Object,
});

const galleryConfig = {
  itemsToShow: 1,
  wrapAround: true,
  mouseDrag: true,
  touchDrag: true,
};

const currentSlide = ref(0);
const slideTo = (nextSlide) => (currentSlide.value = nextSlide);

const numberImages = computed(() => {
  if (
    props.dataCard?.detailedImages?.length &&
    props.dataCard?.detailedImages?.length >= MINIMUM_NUMBER_IMAGES
  ) {
    return props.dataCard.detailedImages.length;
  }
  return MINIMUM_NUMBER_IMAGES;
});

const thumbnailsConfig = {
  itemsToShow: numberImages.value,
  wrapAround: true,
  gap: 10,
};

const emit = defineEmits(["close"]);
function closeModal() {
  emit("close"), false;
}

const isOpenDetailedDescription = ref(false);
function openDetailedDescription() {
  isOpenDetailedDescription.value = !isOpenDetailedDescription.value;
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
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_926_4387)">
                  <path
                    d="M31 19.25C31.5523 19.25 32 18.8023 32 18.25L32 16.75C32 16.1977 31.5523 15.75 31 15.75L18 15.75L23.4179 10.3321C23.8084 9.94158 23.8084 9.30842 23.4179 8.91789L22.3471 7.84711C21.9566 7.45658 21.3234 7.45658 20.9329 7.84711L11.9871 16.7929C11.5966 17.1834 11.5966 17.8166 11.9871 18.2071L20.9329 27.1529C21.3234 27.5434 21.9566 27.5434 22.3471 27.1529L23.4179 26.0821C23.8084 25.6916 23.8084 25.0584 23.4179 24.6679L18 19.25L31 19.25ZM4 17.5C4 19.7981 4.45265 22.0738 5.33211 24.197C6.21156 26.3202 7.50061 28.2493 9.12563 29.8744C12.4075 33.1563 16.8587 35 21.5 35C26.1413 35 30.5925 33.1563 33.8744 29.8744C37.1563 26.5925 39 22.1413 39 17.5C39 15.2019 38.5474 12.9262 37.6679 10.803C36.7884 8.67984 35.4994 6.75066 33.8744 5.12563C32.2493 3.50061 30.3202 2.21156 28.197 1.33211C26.0738 0.452648 23.7981 -6.64495e-07 21.5 -7.64949e-07C16.8587 -9.67826e-07 12.4075 1.84375 9.12563 5.12563C5.84375 8.40752 4 12.8587 4 17.5ZM7.5 17.5C7.5 13.787 8.975 10.226 11.6005 7.6005C14.226 4.97499 17.787 3.5 21.5 3.5C25.213 3.5 28.774 4.97499 31.3995 7.6005C34.025 10.226 35.5 13.787 35.5 17.5C35.5 21.213 34.025 24.774 31.3995 27.3995C28.774 30.025 25.213 31.5 21.5 31.5C17.787 31.5 14.226 30.025 11.6005 27.3995C8.975 24.774 7.5 21.213 7.5 17.5Z"
                    fill="url(#paint0_linear_926_4387)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_926_4387"
                    x="0"
                    y="0"
                    width="43"
                    height="43"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_926_4387"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_926_4387"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_926_4387"
                    x1="52.5"
                    y1="6.5"
                    x2="8.05001"
                    y2="-8.76484"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0606876" stop-color="#40443F" />
                    <stop offset="0.346884" stop-color="#959595" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
            <div class="title-modal-card">
              <h1>{{ dataCard?.name }}</h1>
              <p>{{ dataCard?.typeSinai }}</p>
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
            <p class="short-description">{{ dataCard.description }}</p>
            <div class="expand-detailed-description">
              <Transition name="slide-down">
                <di v-if="isOpenDetailedDescription">
                  <div
                    class="container-detailed-description"
                    v-for="description of dataCard.detailedDescription"
                    :key="index"
                  >
                    <p class="product-features">
                      {{ description.specifications }}
                    </p>
                  </div>
                </di>
              </Transition>
              <button class="button" @click.stop="openDetailedDescription()">
                <p>Подробнее</p>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.53078 9.96875L5.44141 1.03125"
                    stroke="black"
                    stroke-width="0.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.52937 9.96865L3.79688 8.61084"
                    stroke="black"
                    stroke-width="0.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.53125 9.96885L7.23625 8.57666"
                    stroke="black"
                    stroke-width="0.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
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
  overflow-y: auto;
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
  padding-top: 8px;
  background: none;
  border: none;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.heder-modal-card button svg {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title-modal-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(244, 250, 243, 0.808);
  padding-right: 50px;
}
.title-modal-card h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(244, 250, 243, 0.808);
}
.title-modal-card p {
  text-align: center;
  font-size: 18px;
}
@media (max-width: 450px) {
  .title-modal-card p {
    font-size: 4vw;
  }
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

.description-modal-card {
  background: rgb(118, 133, 108);
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.description-modal-card .short-description {
  color: #f4faf3;
  font-weight: 100;
}
.expand-detailed-description button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-bottom: solid 1px black;
  cursor: pointer;
}
.expand-detailed-description button p {
  font-size: 15px;
}
.expand-detailed-description button svg {
  width: 15px;
  height: 15px;
}

.product-features {
  color: #f4faf3;
  font-weight: 100;
  padding-bottom: 10px;
}
.container-detailed-description:first-child {
  padding-top: 10px;
}
.container-detailed-description:last-child {
  padding-bottom: 10px;
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
  left: -20px !important;
}
.carousel__next {
  right: -20px !important;
}
.carousel__prev .carousel__icon,
.carousel__next .carousel__icon {
  fill: #c7c7c7;
}

:root {
  --vc-nav-width: 50px;
}
</style>
