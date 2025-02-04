import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "vue-metamask",
      formats: ["es", "cjs", "iife"],
      fileName: (format) => `vue-metamask.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        extend: true,
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
