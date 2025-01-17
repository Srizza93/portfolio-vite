import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';

export default defineConfig(async () => {
  const { viteStaticCopy } = await import('vite-plugin-static-copy');

  return {
    base: '/portfolio-vite/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [
      vue(),
      viteStaticCopy({
        targets: [
          {
            src: 'dist/index.html',
            dest: '.',
            rename: '404.html',
          },
        ],
      }),
    ],
  };
});
