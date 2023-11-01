import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
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
      config: require("./src/postcss.config.cjs"),
    },
  },

  plugins: [react()],
});
