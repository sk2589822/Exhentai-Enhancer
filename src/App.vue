<template>
  <Suspense>
    <component :is="enhancer" />
  </Suspense>
  <SettingsPanel />
</template>

<script setup lang="ts">
import { computed, onMounted, defineAsyncComponent } from 'vue'
import { unsafeWindow } from 'vite-plugin-monkey/dist/client'

import { getElement } from '@/utils/commons'
import SettingsPanel from '@/components/SettingsPanel/SettingsPanel.vue'
import { autoRedirectSwitch, multipageViewerEnhancerSwitch, showJapaneseTitle } from '@/utils/GMVariables'

import { changeTitleToJapanese } from './utils/eHentaiApi'

const { href } = window.location

const { enhancer } = useEnhancer()
const { redirectIfSinglePageViewer } = useRedirect()

if (autoRedirectSwitch.value) {
  redirectIfSinglePageViewer()
}

if (showJapaneseTitle.value) {
  changeTitleToJapanese()
}

setCSS()

function useEnhancer() {
  const enhancer = computed(() => {
    if (
      /https:\/\/e[-x]hentai\.org\/(watched|popular)?(\?.+)?$/.test(href) ||
      /https:\/\/e[-x]hentai\.org\/(tag)\/\w+/.test(href)
    ) {
      return defineAsyncComponent(() => import('@/components/FrontPageEnhancer/FrontPageEnhancer.vue'))
    }

    if (/https:\/\/e[-x]hentai\.org\/g\/\w+\/\w+/.test(href)) {
      return defineAsyncComponent(() => import('@/components/GalleryEnhancer/GalleryEnhancer.vue'))
    }

    if (multipageViewerEnhancerSwitch.value && /https:\/\/e[-x]hentai\.org\/mpv\/\w+\/\w+/.test(href)) {
      return defineAsyncComponent(() => import('@/components/MultiPageViewerEnhancer/MultiPageViewerEnhancer.vue'))
    }

    return null
  })

  return {
    enhancer,
  }
}

function useRedirect() {
  function redirectIfSinglePageViewer() {
    const isSinglePageViewer = /https:\/\/e[-x]hentai\.org\/s\/\w+\/\w+/.test(href)
    if (isSinglePageViewer) {
      onMounted(() => {
        const page = location.pathname.split('-')[1]
        const url = (getElement('.sb > a') as HTMLAnchorElement).href.replace('/g/', '/mpv/')
        location.href = `${url}#page${page}`
      })
    }
  }

  return {
    redirectIfSinglePageViewer,
  }
}

function setCSS() {
  document.documentElement.style.setProperty(
    '--bg-color',
    unsafeWindow.location.origin === 'https://exhentai.org'
      ? '#34353b'
      : '#E3E0D1',
  )
}
</script>
