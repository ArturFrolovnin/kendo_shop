<template>
  <div class="container-product-catalog">
    <div class="container-title-section">
      <div class="selected-section-catalog" @click="openCatalogFilter()">
        <h2>каталог</h2>

        <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M27 14.8049L20.75 20.9024L14.5 27L2 14.8049M2 2.00015L14.5 14.1953L20.75 8.09771L27 2.00015"
            stroke="#1D2227"
            stroke-width="3.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <transition name="drop-down-list">
        <div v-if="isOpenFilter" class="container-selection-section">
          <div
            v-for="section of DirectorySections"
            class="wrapper-selection-section"
          >
            <button class="selection-section">
              <P> {{ section.name }}</P>
              <img :src="section.img" alt="img" />
            </button>
          </div>
        </div>
      </transition>
    </div>
    <div class="container-catalog">
      <div v-for="card of CatalogCards" :key="card" class="conatainer-card">
        <div class="card-image">
          <img :src="card.image" alt="" />
        </div>
        <div class="card-name">
          {{ card.name }}
        </div>
        <div class="card-description">
          {{ card.description }}
        </div>
        <div class="card-price">
          {{ card.price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import CatalogCards from "/src/data/cards/CatalogCards.json";
import DirectorySections from "/src/data/cards/DirectorySections.json";

const dataCards = reactive([]);
const currentSection = reactive({});

const isOpenFilter = ref(false);
function openCatalogFilter() {
  isOpenFilter.value = !isOpenFilter.value;
}
</script>

<style scoped>
.container-product-catalog {
  width: 100%;
  height: 100%;
}
.container-title-section {
  position: relative;
  width: 100%;
  height: 80px;
  background: var(--background-title-section);
  color: var(--dark-text-color);
  font-weight: 400;
}

.selected-section-catalog {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;
}
.selected-section-catalog h2 {
  font-weight: 400;
  font-size: 44px;
}
.selected-section-catalog svg {
  width: 25px;
  height: 25px;
}

.container-selection-section {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 0;
  background: linear-gradient(
    rgb(162, 181, 149, 0.6),
    rgba(192, 218, 174, 0.85),
    rgba(132, 147, 120, 1)
  );
}
.wrapper-selection-section {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.selection-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
}

.selection-section P {
  position: absolute;
  background: rgb(29, 34, 39);
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
}

.drop-down-list-enter-active {
  transition: all 0.3s ease-out;
}

.drop-down-list-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.drop-down-list-enter-from,
.drop-down-list-leave-to {
  transform: translateY(-50px);
  scale: 0.2;
  opacity: 0;
}
.container-catalog {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  padding: 10px 10px;
}

.conatainer-card {
  background: rgba(133, 186, 136, 0.85);
  height: 278px;
  border-radius: 10px;
  padding: 7px;
  color: rgb(29, 34, 39);
}

.card-image {
  width: 100%;
  height: 185px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1d2227;
  border-radius: 10px 10px 5px 5px;
}
.card-image img{
width: 100%;
height: 100%;
object-fit: contain;
}

.card-name,
.card-price {
  font-weight: 600;
  font-size: 18px;
  font-family: inherit;
  padding: 5px 0px 0px 5px;
}
.card-description {
  font-size: 14px;
  font-weight: 400;
  font-family: inherit;
  padding-left: 5px;
}
</style>
