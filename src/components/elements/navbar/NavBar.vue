<template>
  <div class="container-navbar">
    <div class="conainer-buttons">
      <button>Каталог</button>
      <button>Новинки</button>
      <button>Доставка</button>
      <button>Контакты</button>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.container-navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  background: rgba(215, 235, 202, 0.5);
}
.conainer-buttons {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 0px 5px;
}
.conainer-buttons button {
  width: 100%;
  height: 40px;
  background: rgb(29, 34, 39);
  color: rgb(244, 250, 243);
  outline: solid 1px rgb(215, 235, 202);
  cursor: pointer;
  user-select: none;
  transition-duration: 0.25s;
  transition-timing-function: ease-out;
  filter: brightness(1);
  opacity: 1;
  font-size: 18px;
  font-weight: 400;
}
.conainer-buttons button:first-child {
  border-radius: 5px 0px 0px 5px;
}
.conainer-buttons button:last-child {
  border-radius: 0px 5px 5px 0px;
}
</style>
