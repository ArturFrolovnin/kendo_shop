<template>
  <div class="container-delivery-information">
    <div class="title-section">
      <h2>ДОСТАВКА</h2>
    </div>
    <div class="info-block-delivery">
      <h3>Куда можем доставить.</h3>
      <h3>Доставка только по России.</h3>
      <p>
        По Санкт-Петербургу и в Москву доставляем яндекс.доставкой до пункта
        выдачи. В остальные регионы по договорённости.
      </p>
      <h3>Стоимость доставки</h3>
      <p>
        Доставка по Санкт-Петербургу и Москве до 3 кг. - бесплатно. Доставка в
        другие регионы рассчитывается отдельно.
      </p>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.container-delivery-information {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
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

.info-block-delivery {
  margin: 10px 20px;
  padding: 20px;
  border-radius: 20px;
  background: var(--background-title-section);
  color: rgb(29, 34, 39);
}

.info-block-delivery p {
  padding-bottom: 20px;
  font-size: 22px;
  font-weight: 500;
  font-family: inherit;
}
.info-block-delivery h3 {
  font-size: 22px;

  padding-bottom: 20px;
  font-weight: 700;
  font-family: inherit;
  text-align: center;
}
</style>
