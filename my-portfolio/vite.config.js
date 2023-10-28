import { defineConfig } from "vite";
import { minifyHtml } from "vite-plugin-html";
import { terser } from "rollup-plugin-terser";

export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [terser()],
      output: {
        manualChunks: undefined,
      },
    },

    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  css: {
    postcss: {
      config: require("./src/postcss.config"),
    },
  },

  plugins: [minifyHtml()],
});
