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
import { scrollPerRowSwitch, betterDownloadPopupSwitch, loadAllGalleryImagesSwitch } from '@/utils/monkeySwitches'
import { fetchAllImages } from '@/utils/fetchImages'

import PopupTorrent from './PopupTorrent.vue'
import PopupArchive from './PopupArchive.vue'

if (loadAllGalleryImagesSwitch.enabled) {
  fetchAllImages({ delayInMs: 1000 })
}

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
@use "@/styles/animations/spin.scss";

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

.is-ready::after {
  content: "✔️";
}

.is-fetching {
  font-size: 0;
  pointer-events: none;
  text-decoration: none;

  &::after {
    content: "⌛";
    display: inline-block;
    font-size: 8px;
    line-height: 8px;
    animation: spin ease-in-out 1s infinite;
  }
}

input[name="dltype"] + .is-fetching {
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 50%;
    font-size: 12px;
    line-height: 27px;
  }

  input {
    color: transparent;
  }
}

</style>

