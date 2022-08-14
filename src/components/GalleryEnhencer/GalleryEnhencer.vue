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

.toast-container {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  z-index: 100;
  flex-direction: column;
  gap: 10px;
}

.toast {
  padding: 10px;
  font-size: 16px;
  background-color: gray;
  opacity: 0;
  z-index: 100;
  animation: show-toast 5s linear;
}

.toast h1 {
  margin: 0;
}

@keyframes show-toast {
  0% {
    top: 12px;
    opacity: 0;
  }

  10% {
    top: 10px;
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>

