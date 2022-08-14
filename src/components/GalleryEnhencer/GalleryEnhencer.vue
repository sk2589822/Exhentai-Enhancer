<template>
  <div />
</template>

<script setup lang="ts">
import {
  preloadDownloadLinks,
  setHentaiAtHomeEvent,
  setArchiveEvent,
  setClickOutsideEvent,
} from './utils/downloadLinks'
import fetchAllImages from './utils/images'

preloadDownloadLinks()
  .then(() => {
    setHentaiAtHomeEvent()
    setArchiveEvent()
    setClickOutsideEvent()
  })

fetchAllImages()
</script>

