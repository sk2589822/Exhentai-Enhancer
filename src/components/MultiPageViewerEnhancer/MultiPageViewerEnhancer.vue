<template>
  <div
    class="enhancer-features"
    @wheel.stop="changePageOnWheel"
  >
    <PageElevator class="enhancer-features__feature" />
    <ImageResizer class="enhancer-features__feature" />
    <div
      class="original-functions"
      v-html="exhentaiButtons"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import usePages from '@/composables/MultiPageViewerEnhancer/usePages'
import useEvents from '@/composables/MultiPageViewerEnhancer/useEvents'
import useWheelStep from '@/composables/useWheelStep'
import { getElement } from '@/utils/commons'

import PageElevator from './PageElevator.vue'
import ImageResizer from './ImageResizer.vue'

const {
  appendPageIndex,
  changePageOnWheel,
  setPreloadImagesEvent,
  syncCurrentImageOnScroll,
} = usePages()

const {
  setKeyBoardEvent,
  setClickEvent,
  setShowCursorEvent,
  setHideCursorEvent,
  setShowThumbsEvent,
} = useEvents()

appendPageIndex()
setPreloadImagesEvent()
syncCurrentImageOnScroll()

setKeyBoardEvent()
setClickEvent()
setShowCursorEvent()
setHideCursorEvent()
setShowThumbsEvent()

useWheelStep({
  containerSelector: '#pane_thumbs_inner',
  itemsSelector: '[id^=thumb_]',
})

const exhentaiButtons = ref<string>('')
onMounted(() => {
  exhentaiButtons.value = replaceOriginalFunctions()
})

function replaceOriginalFunctions() {
  const originalFunctions = getElement('#bar3') as HTMLElement
  const closeButton = originalFunctions.querySelector('img:first-child')
  if (!closeButton) {
    return ''
  }

  const link = document.createElement('a')
  link.href = window.location.origin + window.location.pathname.replace('mpv', 'g')

  closeButton.parentNode?.insertBefore(link, closeButton)
  link.append(closeButton)

  return originalFunctions.innerHTML
}
</script>

<style lang="scss">
/* stylelint-disable selector-id-pattern */

/**
 * Override
 */
html,
body,
div#pane_outer,
div#pane_images {
  padding: 0;
  width: 100% !important;
  height: 100% !important;
}

div#bar3 {
  display: none;
}

.hide-cursor,
.hide-cursor * {
  cursor: none;
}

.original-functions {
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 35px;
  height: 270px;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  > img {
    cursor: pointer;
  }
}

.mi0 > a {
  user-select: none;

  > img {
    pointer-events: none;
  }
}

div.mi1 {
  display: flex;

  img {
    display: block;
    margin: 0;
  }
}

div.mi2 {
  display: flex;
  flex-direction: row;
  float: initial;
  margin-top: initial;
}

div.mi3 {
  display: flex;
  flex-direction: row;
  float: initial;
  margin-top: initial;
  order: 3;
}

div.mi4 {
  position: initial;
}

div#pane_thumbs {
  display: block;
  opacity: 0;
  z-index: 1;
  transition: opacity 0.3s;
}

/**
 * Components
 */
.enhancer-features {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding-right: 5px;
  z-index: 100;
  flex-direction: row-reverse;
  gap: 16px;
  box-sizing: border-box;

  &__feature {
    padding: 10px 5px;
    background: #7777;
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
    box-sizing: border-box;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
