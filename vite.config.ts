import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import monkey, { cdn } from 'vite-plugin-monkey'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'https://github.com/sk2589822/Exhentai-Enhencer',
        match: [
          'https://exhentai.org/g/*/*',
          'https://exhentai.org/mpv/*/*',
          'https://exhentai.org/s/*/*',
        ],
      },
      build: {
        metaFileName: true,
        externalGlobals: {
          'vue': cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
          'vue-toastification': [
            'VueToastification',
            (version, name) => `https://unpkg.com/pkg-cdn/dist/${name}/v${version}.iife.js`,
          ],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
