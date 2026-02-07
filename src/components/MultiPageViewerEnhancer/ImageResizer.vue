<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useStorage } from '@vueuse/core'

import { usePages } from '@/composables/MultiPageViewerEnhancer/usePages'
import { useMultiPageViewerElements } from '@/composables/MultiPageViewerEnhancer/useMultiPageViewerElements'

const {
  goToCurrentPage,
  getRelativeToViewport,
  scrollToProperPosition,
} = usePages()
const { paneImagesDiv } = useMultiPageViewerElements()
const {
  sizeList,
  currentIndex,
  setImageSize,
  onResizerClick,
  setResizeShortcuts,
} = useImageResizer()

setResizeShortcuts()

setTimeout(() => {
  setImageSize(currentIndex.value)
  goToCurrentPage()
}, 0)

function useImageResizer() {
  const sizeList = [100, 125, 150, 175, 200]

  const storedIndex = useStorage('image-resizer-index', 0)
  const currentIndex = ref(storedIndex.value)

  watch(currentIndex, (index: number) => {
    storedIndex.value = index
  })

  const currentSize = computed<number | undefined>(() => {
    if (currentIndex.value < 0) {
      return undefined
    }

    return sizeList[currentIndex.value]
  })

  function onResizerClick(index: number) {
    const relativeToViewport = getRelativeToViewport()

    if (index === currentIndex.value) {
      clearImageSize()
    } else {
      setImageSize(index)
    }

    if (relativeToViewport) {
      scrollToProperPosition(relativeToViewport)
    }
  }

  function setImageSize(index: number) {
    currentIndex.value = index
    paneImagesDiv.style.setProperty('--image-size', `${currentSize.value}vh`)
  }

  function clearImageSize() {
    currentIndex.value = -1
    paneImagesDiv.style.removeProperty('--image-size')
  }

  function increaseImageSize() {
    const index = Math.min(currentIndex.value + 1, sizeList.length - 1)
    setImageSize(index)
  }

  function decreaseImageSize() {
    const index = currentIndex.value === -1
      ? sizeList.length - 1
      : Math.max(currentIndex.value - 1, 0)
    setImageSize(index)
  }

  function setResizeShortcuts() {
    window.addEventListener('keydown', event => {
      const relativeToViewport = getRelativeToViewport()
      const isCtrlPressed = event.ctrlKey
      if (isCtrlPressed) {
        const regex = /Numpad(?<index>[1-5])/
        const matchResult = event.code.match(regex)
        if (!matchResult) {
          return
        }

        const index = Number(matchResult.groups?.index)
        setImageSize(index - 1)
      } else {
        switch (event.code) {
          case 'NumpadAdd':
            increaseImageSize()
            break

          case 'NumpadSubtract':
            decreaseImageSize()
            break

          case 'Numpad0':
            if (currentIndex.value === 0) {
              clearImageSize()
            } else {
              setImageSize(0)
            }

            break

          case 'NumpadDecimal': {
            const index = Math.floor(sizeList.length / 2)
            if (currentIndex.value === index) {
              clearImageSize()
            } else {
              setImageSize(index)
            }

            break
          }

          case 'NumpadEnter':
            clearImageSize()
            break

          default:
            return
        }
      }

      if (relativeToViewport) {
        scrollToProperPosition(relativeToViewport, currentSize.value)
      }
    })
  }

  return {
    sizeList,
    currentIndex,
    currentSize,
    setImageSize,
    onResizerClick,
    setResizeShortcuts,
  }
}

</script>

<template>
  <div class="image-resizer">
    <button
      v-for="(size, index) in sizeList"
      :key="size"
      class="image-resizer__button"
      :class="{ 'image-resizer__button--active': index === currentIndex }"
      @click="onResizerClick(index)"
      v-text="size"
    />
  </div>
</template>

<style lang="scss">
/* stylelint-disable-next-line selector-id-pattern */
#pane_images {
  .mimg {
    width: min-content !important;
    min-width: unset;
    max-height: calc(var(--image-size) + 24px) !important;

    > a {
      user-select: none;

      > img {
        width: auto !important;
        max-height: var(--image-size);
        pointer-events: none;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.image-resizer {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 40px;

  &__button {
    padding: 0;
    width: 100%;
    height: 30px;
    text-align: center;
    background-color: transparent;
    border: #777 solid 1px;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
      background-color: #ffa50033;
    }

    &--active,
    &--active:hover {
      background-color: #ffa500;
    }
  }
}
</style>
