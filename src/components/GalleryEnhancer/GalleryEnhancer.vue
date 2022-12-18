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
import useWheelStep from '@/composables/useWheelStep'
import usePreloadDownloadLinks from '@/composables/GalleryEnhancer/usePreloadDownloadLinks'
import usePosition from '@/composables/GalleryEnhancer/usePositions'
import { scrollPerRowSwitch, betterDownloadPopupSwitch } from '@/utils/monkeySwitches'
import { fetchAllImages } from '@/utils/fetchImages'

import PopupTorrent from './PopupTorrent.vue'
import PopupArchive from './PopupArchive.vue'

fetchAllImages({ delayInMs: 1000 })

const {
  preloadDownloadLinks,
  archiveInnerHtml,
  torrentInnerHtml,
} = usePreloadDownloadLinks()

if (betterDownloadPopupSwitch.enabled) {
  preloadDownloadLinks()
}

if (scrollPerRowSwitch.enabled) {
  useWheelStep({
    containerSelector: '#gdt',
    itemsSelector: '.gdtl',
  })
}

const {
  popupRight,
  archiveTop,
  torrentTop,
} = usePosition()
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

