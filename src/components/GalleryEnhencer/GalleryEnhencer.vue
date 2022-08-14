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
import { fetchAllImages, setImagesContainerWheelEvent } from './utils/images'

preloadDownloadLinks()
  .then(() => {
    setHentaiAtHomeEvent()
    setArchiveEvent()
    setClickOutsideEvent()
  })

fetchAllImages()
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
  top: -99999px;
  right: 0;
  padding: 20px;
  text-align: center;
  background-color: #34353b;
  border: white solid 3px;
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s;
}

.popup--show {
  top: initial;
  opacity: 1;
}

.popup a {
  text-decoration: underline;
}
</style>

