<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { unsafeWindow } from 'vite-plugin-monkey/dist/client'

import { getElement } from '@/utils/commons'
import GalleriesEnhancer from '@/components/Galleries/GalleriesEnhancer.vue'
import GalleryEnhancer from '@/components/Gallery/GalleryEnhancer.vue'
import MultipageViewerEnhancer from '@/components/MultiPageViewer/MultiPageViewerEnhancer.vue'
import SettingsPanel from '@/components/SettingsPanel/SettingsPanel.vue'
import { autoRedirectSwitch, multipageViewerEnhancerSwitch, showJapaneseTitle } from '@/utils/gm-variables'

import { changeTitleToJapanese } from './utils/e-hentai-api'

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
      /https:\/\/e[-x]hentai\.org\/(watched|popular)?(\?.+)?$/.test(href)
      || /https:\/\/e[-x]hentai\.org\/(tag)\/\w+/.test(href)
    ) {
      return GalleriesEnhancer
    }

    if (/https:\/\/e[-x]hentai\.org\/g\/\w+\/\w+/.test(href)) {
      return GalleryEnhancer
    }

    if (multipageViewerEnhancerSwitch.value && /https:\/\/e[-x]hentai\.org\/mpv\/\w+\/\w+/.test(href)) {
      return MultipageViewerEnhancer
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

<template>
  <Suspense>
    <component :is="enhancer" />
  </Suspense>
  <SettingsPanel />
</template>
