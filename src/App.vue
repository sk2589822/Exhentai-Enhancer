<template>
  <component :is="enhancer" />
  <SettingsPanel />
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

import { getElement } from '@/utils/commons'
import FrontPageEnhancer from '@/components/FrontPageEnhancer/FrontPageEnhancer.vue'
import GalleryEnhancer from '@/components/GalleryEnhancer/GalleryEnhancer.vue'
import MultipageViewerEnhancer from '@/components/MultiPageViewerEnhancer/MultiPageViewerEnhancer.vue'
import SettingsPanel from '@/components/SettingsPanel/SettingsPanel.vue'
import { autoRedirectSwitch, multipageViewerEnhancerSwitch } from '@/utils/GMVariables'

const { href } = window.location

const { enhancer } = useEnhancer()
const { redirectIfSinglePageViewer } = useRedirect()

if (autoRedirectSwitch.value) {
  redirectIfSinglePageViewer()
}

function useEnhancer() {
  const enhancer = computed(() => {
    if (
      /https:\/\/e[-x]hentai\.org\/(watched|popular)?(\?.+)?$/.test(href) ||
      /https:\/\/e[-x]hentai\.org\/(tag)\/\w+/.test(href)
    ) {
      return FrontPageEnhancer
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
    const isSinglePageViewer = /https:\/\/exhentai\.org\/s\/\w+\/\w+/.test(href)
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
</script>
