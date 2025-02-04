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
      // 排除 build 那些不想被打包的套件或框架
      external: ["vue"],
      output: {
        extend: true,
        // 在 UMD 模式下，这是全域變數的名字
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
