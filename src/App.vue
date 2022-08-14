<template>
  <div>
    <GalleryEnhencer />
  </div>
</template>

<script setup lang="ts">
import GalleryEnhencer from '@/components/GalleryEnhencer/GalleryEnhencer.vue'

import initGalleryEnhencer from '@/scripts/GalleryEnhencer'
import initMultipageViewerEnhencer from '@/scripts/MultipageViewerEnhencer'
import { onMounted } from 'vue'

onMounted(() => {
  const isGallery = /https:\/\/exhentai\.org\/g\/\w+\/\w+\//.test(window.location.href)
  const isMultipageViewer = /https:\/\/exhentai\.org\/mpv\/\w+\/\w+\//.test(window.location.href)

  if (isGallery) {
    initGalleryEnhencer()
  } else if (isMultipageViewer) {
    initMultipageViewerEnhencer()
  }
})
</script>
