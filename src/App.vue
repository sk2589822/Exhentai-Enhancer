<template>
  <component :is="enhencer" />
</template>

<script setup lang="ts">
import GalleryEnhencer from '@/components/GalleryEnhencer/GalleryEnhencer.vue'
import MultipageViewerEnhencer from '@/components/MultipageViewerEnhencer/MultipageViewerEnhencer.vue'

import initMultipageViewerEnhencer from '@/scripts/MultipageViewerEnhencer'
import { computed, onMounted } from 'vue'

const isMultipageViewer = /https:\/\/exhentai\.org\/mpv\/\w+\/\w+\//.test(window.location.href)

onMounted(() => {
  if (isMultipageViewer) {
    initMultipageViewerEnhencer()
  }
})

const enhencer = computed(() => {
  const { href } = window.location
  const isGallery = /https:\/\/exhentai\.org\/g\/\w+\/\w+\//.test(href)

  if (isGallery) {
    return GalleryEnhencer
  }

  if (isMultipageViewer) {
    return MultipageViewerEnhencer
  }

  return null
})
</script>

<style lang="scss" scope>
// .enhencer-container {

// }
</style>
