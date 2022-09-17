<template>
  <component :is="enhencer" />
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

import { getElement } from '@/utils/commons'
import GalleryEnhencer from '@/components/GalleryEnhencer/GalleryEnhencer.vue'
import MultipageViewerEnhencer from '@/components/MultiPageViewerEnhencer/MultiPageViewerEnhencer.vue'

const { href } = window.location

const { enhencer } = useEnhencer()
const { redirectIfSinglePageViewer } = useRedirect()

redirectIfSinglePageViewer()

function useEnhencer() {
  const enhencer = computed(() => {
    const isGallery = /https:\/\/e[-x]hentai\.org\/g\/\w+\/\w+/.test(href)
    if (isGallery) {
      return GalleryEnhencer
    }

    const isMultiPageViewer = /https:\/\/e[-x]hentai\.org\/mpv\/\w+\/\w+/.test(href)
    if (isMultiPageViewer) {
      return MultipageViewerEnhencer
    }

    return null
  })

  return {
    enhencer,
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
