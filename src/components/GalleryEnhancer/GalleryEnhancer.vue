<template>
  <PopupArchive
    v-if="archiveInnerHtml"
    :style="archivePosition"
    :inner-h-t-m-l="archiveInnerHtml"
  />
  <PopupTorrent
    v-if="torrentInnerHtml"
    :style="torrentPosition"
    :inner-h-t-m-l="torrentInnerHtml"
  />
  <PopupFavorites
    v-if="favoritesInnerHtml"
    :style="favoritesPosition"
    :inner-h-t-m-l="favoritesInnerHtml"
  />
</template>

<script setup lang="ts">
import useWheelStep from '@/composables/useWheelStep'
import usePreloadLinks, { preloadLinks } from '@/composables/GalleryEnhancer/usePreloadPopups'
import usePosition from '@/composables/GalleryEnhancer/usePositions'
import { scrollByRowSwitch, betterPopupSwitch, loadAllGalleryImagesSwitch } from '@/utils/GMVariables'
import { fetchAllImages } from '@/utils/fetchImages'

import PopupTorrent from './PopupTorrent.vue'
import PopupArchive from './PopupArchive.vue'
import PopupFavorites from './PopupFavorites.vue'

if (loadAllGalleryImagesSwitch.value) {
  fetchAllImages({ delayInMs: 1000 })
}

const {
  archiveInnerHtml,
  torrentInnerHtml,
  favoritesInnerHtml,
} = usePreloadLinks()

if (betterPopupSwitch.value) {
  preloadLinks()
}

if (scrollByRowSwitch.value) {
  useWheelStep({
    containerSelector: '#gdt',
    itemsSelector: '.gdtl',
  })
}

const {
  archive: archivePosition,
  torrent: torrentPosition,
  favorites: favoritesPosition,
} = usePosition()
</script>

<style lang="scss">
@use "@/styles/animations/spin.scss";

div#gmid {
  width: auto;
}

div#gd5 {
  width: auto;
}

.popup {
  position: absolute;
}

.is-ready::after {
  content: " ✔️";
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

.is-finished {
  font-size: 0;
  pointer-events: none;
  text-decoration: none;

  &::after {
    content: "✔️";
    display: inline-block;
    font-size: 8px;
    line-height: 8px;
  }
}
</style>
