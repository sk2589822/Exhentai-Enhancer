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
    <Magnifier />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import {
  unsafeWindow,
  GM_addStyle as gmAddStyle,
} from 'vite-plugin-monkey/dist/client'

import { usePages } from '@/composables/MultiPageViewerEnhancer/usePages'
import { useEvents } from '@/composables/MultiPageViewerEnhancer/useEvents'
import { useWheelStep } from '@/composables/useWheelStep'
import { getElement } from '@/utils/commons'
import { preventImageRemovalSwitch } from '@/utils/GMVariables'

import PageElevator from './PageElevator.vue'
import ImageResizer from './ImageResizer.vue'
import Magnifier from './Magnifier.vue'

const {
  currentPage,
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
  containerSelector: '#pane_thumbs',
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

onMounted(() => {
  overrideGlobalCSS()

  watch(() => preventImageRemovalSwitch.value, value => {
    if (!value) {
      return
    }

    unsafeWindow.preload_generic = Function('a', 'b', 'c', `
      var d = a.scrollTop;
      a = d + a.offsetHeight;
      for (var e = "image" == b, f = 1; f <= pagecount; f++) {
          var g = document.getElementById(b + "_" + f)
            , h = g.offsetTop
            , k = h + g.offsetHeight;
          if ("hidden" == g.style.visibility && k >= d && h <= a + c)
              e ? load_image(f) : load_thumb(f),
              g.style.visibility = "visible";
      }
    `) as (a: unknown, b: unknown, c: unknown) => void
  }, { immediate: true })

  watch(currentPage, index => {
    getElement(`#thumb_${index}`)
      ?.scrollIntoView({
        block: 'center',
      })
  })
})

function overrideGlobalCSS() {
  gmAddStyle(`
html,
body {
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

#pane_images {
  inset: 0 !important;
  margin: auto;
}

#pane_thumbs {
  display: block;
  opacity: 0;
  z-index: 1;
  transition: opacity 0.3s;
}
  `)
}
</script>

<style lang="scss">
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
