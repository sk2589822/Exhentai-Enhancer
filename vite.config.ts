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
          '': 'improve UX of Gallery Page, Multi-Page Viewer and Front Page',
          'en': 'improve UX of Gallery Page, Multi-Page Viewer and Front Page',
          'zh-TW': '改善 Gallery Page、Multi-Page Viewer 和 Front Page 的使用者體驗',
          'zh-CN': '改善 Gallery Page、Multi-Page Viewer 和 Front Page 的使用者體驗',
        },
        supportURL: 'https://github.com/sk2589822/Exhentai-Enhancer/issues',
        author: 'sk2589822',
        license: 'MIT',
      },
      build: {
        metaFileName: true,
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
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
