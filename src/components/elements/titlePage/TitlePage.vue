<template>
  <div class="container-title-page">
    <div class="holder-title-page">
      <div class="logo-page">
        <img src="/public/assets/image/frogTitle.webp" alt="frog" />
      </div>
      <div class="title-page"><h1>СИНАЙНАЯ</h1></div>
      <div class="logo-page reverse">
        <img src="/public/assets/image/frogTitle.webp" alt="frog" />
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style scoped>
.container-title-page {
  background-image: var(--background-page-title);
  width: 100%;
  height: 100px;
}
.holder-title-page {
  background: linear-gradient(
    rgba(118, 133, 108, 0.767),
    rgba(158, 183, 141, 0.788),
    rgba(94, 103, 87, 0.788)
  );
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-page {
  display: flex;
  align-items: end;
  height: 100%;
  padding: 0px 10px;
}
.logo-page.reverse img {
  transform: scale(-1, 1);
}
.logo-page img {
  object-fit: cover;
  height: 52px;
  width: 50px;
}
.title-page h1 {
  font-size: 2.8rem;
  color: rgb(244, 250, 243);
  font-weight: 500;
  font-family: inherit;
  font-family: "Red Hat Display", sans-serif;
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
}
@media (max-width: 420px) {
  .title-page h1 {
    font-size: 9vw;
  }
}
</style>
