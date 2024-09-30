<template></template>
<script setup></script>

<style>
* {
  font-family: "Red Hat Display", sans-serif;
}
:root {
  --background-main-page: url("/public/assets/background/backgroundPage.png");
  --background-page-title: url("/public/assets/background/backgroundPageTitle.png");
  --background-title-section: linear-gradient(
    rgb(162, 181, 149),
    rgba(192, 218, 174, 0.82),
    rgba(132, 147, 120, 0.72)
  );
  --dark-text-color: rgb(29, 34, 39);
 
}

.button {
  cursor: pointer;
  user-select: none;
  transition-duration: 0.25s;
  transition-timing-function: ease-out;
  filter: brightness(1);
  opacity: 1;
}
</style>
