import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

export default defineConfig({
  base: "/portfolio-vite/",
  alias: {
    "vue-i18n": "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js",
  },
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, "./src/locales/**"),
    }),
  ],
});

// GH PAGES
// git add dist -f
// git commit -m "adding dist"
// git subtree push --prefix dist origin gh-pages
