<template>
  <div
    class="enhencer-features"
    @wheel.stop="changePage"
  >
    <PageElevator class="enhencer-features__feature" />
    <ImageResizer class="enhencer-features__feature" />
    <div
      class="original-functions"
      v-html="exhentaiButtons"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { getElement } from '@/utils/commons'

import usePages from './composables/usePages'
import useEvents from './composables/useEvents'
import PageElevator from './components/PageElevator.vue'
import ImageResizer from './components/ImageResizer.vue'

const {
  appendPageIndex,
  goToPrevPage,
  goToNextPage,
  setCurrentPageUpdateEvent,
} = usePages()

appendPageIndex()
setCurrentPageUpdateEvent()

function changePage(event: WheelEvent) {
  if (event.deltaY < 0) {
    goToPrevPage()
  } else {
    goToNextPage()
  }
}


const {
  setKeyBoardEvent,
  setChangePageClickEvent,
  setShowCursorEvent,
  setHideCursorEvent,
  setShowThumbsEvent,
} = useEvents()

setKeyBoardEvent()
setChangePageClickEvent()
setShowCursorEvent()
setHideCursorEvent()
setShowThumbsEvent()


const exhentaiButtons = ref<string>('')
onMounted(() => {
  exhentaiButtons.value = (getElement('#bar3') as HTMLElement)?.innerHTML
})
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

div#pane_thumbs {
  display: block;
  opacity: 0;
  z-index: 1;
  transition: opacity 0.3s;
}

/**
 * Components
 */
.enhencer-features {
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
