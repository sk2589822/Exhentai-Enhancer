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
import PopupTorrent from './components/PopupTorrent.vue'
import PopupArchive from './components/PopupArchive.vue'
import { fetchAllImages, setImagesContainerWheelEvent } from './utils/images'
import usePreloadDownloadLinks from './composables/usePreloadDownloadLinks'
import usePosition from './composables/usePositions'

const {
  preloadDownloadLinks,
  archiveInnerHtml,
  torrentInnerHtml,
} = usePreloadDownloadLinks()

preloadDownloadLinks()

const {
  rightWithPx,
  archiveTopWithPx,
  torrentTopWithPx,
} = usePosition()


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
  /* stylelint-disable-next-line value-keyword-case */
  right: v-bind(rightWithPx);

  &--archive {
    /* stylelint-disable-next-line value-keyword-case */
    top: v-bind(archiveTopWithPx);
  }

  &--torrent {
    /* stylelint-disable-next-line value-keyword-case */
    top: v-bind(torrentTopWithPx);
  }
}
</style>

