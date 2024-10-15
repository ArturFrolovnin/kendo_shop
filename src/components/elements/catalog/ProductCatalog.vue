<template>
  <div class="container-product-catalog">
    <div class="container-title-section">
      <div
        class="selected-section-catalog"
        :class="{ 'open-filter': isOpenFilter }"
        @click="openCatalogFilter()"
      >
        <div class="wrapper-title">
          <h2>каталог</h2>

          <svg
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27 14.8049L20.75 20.9024L14.5 27L2 14.8049M2 2.00015L14.5 14.1953L20.75 8.09771L27 2.00015"
              stroke="#1D2227"
              stroke-width="3.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <transition name="drop-down-list">
        <div v-if="isOpenFilter" class="container-selection-section">
          <div
            v-for="section of DirectorySections"
            class="wrapper-selection-section"
          >
            <button
              class="selection-section button"
              :class="{ 'active-section': currentSection === section.type }"
              @click="selectSection(section.type)"
            >
              <P> {{ section.name }}</P>
              <img :src="section.img" alt="img" />
            </button>
          </div>
        </div>
      </transition>
    </div>
    <div class="container-catalog">
      <div v-for="card of catalog" :key="card" class="conatainer-card">
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
import { ref, computed } from "vue";
import CatalogCards from "/src/data/cards/CatalogCards.json";
import DirectorySections from "/src/data/cards/DirectorySections.json";

const currentSection = ref(null);
function selectSection(type) {
  currentSection.value = currentSection.value === type ? null : type;
}

const catalog = computed(() => {
  if (!currentSection.value) return CatalogCards;
  return CatalogCards.filter((card) => card.type === currentSection.value);
});

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
  height: 80px;
  width: 100%;
}

.selected-section-catalog {
  position: absolute;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: var(--background-title-section);
  padding-top: 10px;
  transition: all 0.3s;
}
.open-filter {
  height: 160px;
}
.selected-section-catalog h2 {
  font-weight: 400;
  font-size: 44px;
}
.selected-section-catalog svg {
  width: 25px;
  height: 25px;
  font-weight: 400;
  color: var(--dark-text-color);
}
.wrapper-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.container-selection-section {
  position: absolute;
  top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  opacity: 0.6;
}
.active-section {
  opacity: 1;
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
  transition: all 0.1s ease-out;
}
.drop-down-list-enter-from,
.drop-down-list-leave-to {
  opacity: 0;
  scale: 0.1;
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
.card-image img {
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
