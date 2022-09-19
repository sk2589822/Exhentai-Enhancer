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
  popupRight,
  archiveTop,
  torrentTop,
} = usePosition()

preloadDownloadLinks()

fetchAllImages({ delayInMs: 1000 })

setImagesContainerWheelEvent()
</script>

<style lang="scss">
/* stylelint-disable function-name-case */
div#gmid {
  width: 931px;
}

div#gd5 {
  width: 158px;
}

.popup {
  position: absolute;
  right: calc(v-bind(popupRight) * 1px);

  &--archive {
    top: calc(v-bind(archiveTop) * 1px);
  }

  &--torrent {
    top: calc(v-bind(torrentTop) * 1px);
  }
}
</style>

