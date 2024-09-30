import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  base: "/kendo_shop/",
  plugins: [vue(), basicSsl()],
  build: {
    outDir: "./docs",
  },
  base: "./",
});

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// });
