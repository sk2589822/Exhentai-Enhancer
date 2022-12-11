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
        namespace: 'https://github.com/sk2589822/Exhentai-Enhancer',
        match: [
          'https://exhentai.org/*',
          'https://e-hentai.org/*',
        ],
        name: {
          '': 'Exhentai Enhancer',
          'en': 'Exhentai Enhancer',
          'zh-TW': 'Exhentai Enhancer',
          'zh-CN': 'Exhentai Enhancer',
        },
        description: {
          '': 'improve UX of Gallery Page & Multi-Page Viewer',
          'en': 'improve UX of Gallery Page & Multi-Page Viewer',
          'zh-TW': '改善 Gallery Page 和 Multi-Page Viewer 的使用者體驗',
          'zh-CN': '改善 Gallery Page 和 Multi-Page Viewer 的使用者體驗',
        },
        license: 'MIT',
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
