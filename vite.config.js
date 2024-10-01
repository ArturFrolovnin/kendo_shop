import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  plugins: [vue(), basicSsl()],
  base: "/kendo_shop/",
});

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// });
