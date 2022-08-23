<template>
  <component :is="enhencer" />
</template>

<script setup lang="ts">
import { computed } from 'vue'

import GalleryEnhencer from '@/components/GalleryEnhencer/GalleryEnhencer.vue'
import MultipageViewerEnhencer from '@/components/MultiPageViewerEnhencer/MultiPageViewerEnhencer.vue'

const enhencer = computed(() => {
  const { href } = window.location
  const isGallery = /https:\/\/exhentai\.org\/g\/\w+\/\w+/.test(href)
  const isMultiPageViewer = /https:\/\/exhentai\.org\/mpv\/\w+\/\w+/.test(href)

  if (isGallery) {
    return GalleryEnhencer
  }

  if (isMultiPageViewer) {
    return MultipageViewerEnhencer
  }

  return null
})
</script>
