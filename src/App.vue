<template>
  <component :is="enhancer" />
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

import { getElement } from '@/utils/commons'
import FrontPageEnhancer from '@/components/FrontPageEnhancer/FrontPageEnhancer.vue'
import GalleryEnhancer from '@/components/GalleryEnhancer/GalleryEnhancer.vue'
import MultipageViewerEnhancer from '@/components/MultiPageViewerEnhancer/MultiPageViewerEnhancer.vue'
import { autoRedirectSwitch, multipageViewerEnhancerSwitch } from '@/utils/monkeySwitches'

const { href } = window.location

const { enhancer } = useEnhancer()
const { redirectIfSinglePageViewer } = useRedirect()

if (autoRedirectSwitch.enabled) {
  redirectIfSinglePageViewer()
}

function useEnhancer() {
  const enhancer = computed(() => {
    if (
      /https:\/\/e[-x]hentai\.org\/(\?.+)?$/.test(href) ||
      /https:\/\/e[-x]hentai\.org\/tag\/\w+/.test(href)
    ) {
      return FrontPageEnhancer
    }

    if (/https:\/\/e[-x]hentai\.org\/g\/\w+\/\w+/.test(href)) {
      return GalleryEnhancer
    }

    if (multipageViewerEnhancerSwitch.enabled && /https:\/\/e[-x]hentai\.org\/mpv\/\w+\/\w+/.test(href)) {
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
