<template>
  <div class="container-info-block">
    <div class="info-block">
      <p>Добро пожаловать в Синайную - интернет-магазин для кендок.</p>
      <p>У нас вы сможете найти свой особенный синай и другие полезные вещи:</p>
      <ul>
        <li>форму для занятий кендо;</li>
        <li>тенегуи;</li>
        <li>чехлы для синаев;</li>
        <li>сумки для богу.</li>
      </ul>

      <div class="container-button">
        <img src="/public/assets/image/frogDarkGreen.webp" alt="" />
        <button class="button">подробнее</button>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style scoped>
.container-info-block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.info-block {
  position: relative;
  padding: 20px;
  border-radius: 20px;
  background: linear-gradient(
    rgb(233, 255, 219),
    rgba(215, 235, 202),
    rgba(213, 236, 199)
  );
  color: rgb(29, 34, 39);
}

.info-block p {
  padding-bottom: 20px;
  font-size: 22px;
  font-weight: 500;
  font-family: inherit;
}

.info-block ul {
  padding-left: 20px;
}
.info-block li {
  font-size: 22px;
}
.container-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
}
.info-block button {
  background: #ace1af;
  border-radius: 15px;
  padding: 5px 10px;
  outline: solid 2px #66a16a;
  border: none;
  font-size: 18px;
}
</style>
