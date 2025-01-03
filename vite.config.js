import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  base: '/portfolio-vite/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [vue()],
});

// GH PAGES
// git add dist -f
// git commit -m "adding dist"
// git subtree push --prefix dist origin gh-pages
