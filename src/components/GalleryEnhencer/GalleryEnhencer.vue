<template>
  <PopupArchive
    v-if="archiveInnerHtml"
    :inner-h-t-m-l="archiveInnerHtml"
  />
  <PopupTorrent
    v-if="torrentInnerHtml"
    :inner-h-t-m-l="torrentInnerHtml"
  />
</template>

<script setup lang="ts">
import { fetchAllImages, setImagesContainerWheelEvent } from './utils/images'
import PopupTorrent from './components/PopupTorrent.vue'
import PopupArchive from './components/PopupArchive.vue'
import usePreloadDownloadLinks from './composables/usePreloadDownloadLinks'
import usePosition from './composables/usePositions'

const {
  preloadDownloadLinks,
  archiveInnerHtml,
  torrentInnerHtml,
} = usePreloadDownloadLinks()

const {
  rightWithPx,
  archiveTopWithPx,
  torrentTopWithPx,
} = usePosition()

preloadDownloadLinks()

fetchAllImages({ delayInMs: 1000 })

setImagesContainerWheelEvent()
</script>

<style lang="scss">
div#gmid {
  width: 931px;
}

div#gd5 {
  width: 158px;
}

.popup {
  position: absolute;
  right: v-bind(rightWithPx);

  &--archive {
    top: v-bind(archiveTopWithPx);
  }

  &--torrent {
    top: v-bind(torrentTopWithPx);
  }
}
</style>

