import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio-vite/",
  plugins: [vue()],
});

// GH PAGES
// git subtree push --prefix dist origin gh-pages
