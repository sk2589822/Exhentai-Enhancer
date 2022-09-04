<template>
  <div class="image-resizer">
    <button
      v-for="(height, index) in heightList"
      :key="height"
      class="image-resizer__button"
      :class="{ 'image-resizer__button--active': height === currentHeight }"
      @click="onResizerClick(index)"
      v-text="height"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import usePages from '../composables/usePages'
import useElements from '../composables/useElements'

const { goToCurrentPage } = usePages()
const { paneImagesDiv } = useElements()
const {
  heightList,
  currentHeight,
  onResizerClick,
  setResizeShortcuts,
} = useImageResizer()

setResizeShortcuts()

function useImageResizer() {
  const heightList = [100, 125, 150, 175, 200]
  const currentIndex = ref<number | null>(null)
  const currentHeight = computed<number | null>(() => {
    if (typeof currentIndex.value !== 'number') {
      return null
    }

    return heightList[currentIndex.value]
  })

  function onResizerClick(index: number) {
    if (index === currentIndex.value) {
      clearImageHeight()
    } else {
      setImageHeight(index)
    }

    goToCurrentPage()
  }

  function setImageHeight(index: number) {
    currentIndex.value = index
    paneImagesDiv.style.setProperty('--image-height', `${currentHeight.value}vh`)
  }

  function clearImageHeight() {
    currentIndex.value = null
    paneImagesDiv.style.removeProperty('--image-height')
  }

  function increaseImageHeight() {
    const index = currentIndex.value === null
      ? 0
      : Math.min(currentIndex.value + 1, heightList.length - 1)

    setImageHeight(index)
  }

  function decreaseImageHeight() {
    const index = currentIndex.value === null
      ? heightList.length - 1
      : Math.max(currentIndex.value - 1, 0)

    setImageHeight(index)
  }

  function setResizeShortcuts() {
    window.addEventListener('keydown', event => {
      const isCtrlPressed = event.ctrlKey
      if (isCtrlPressed) {
        const regex = /Numpad(?<index>[1-5])/
        const matchResult = event.code.match(regex)
        if (!matchResult) {
          return
        }

        const index = Number(matchResult.groups?.index)
        setImageHeight(index - 1)
        goToCurrentPage()
        return
      }

      switch (event.code) {
        case 'NumpadAdd':
          increaseImageHeight()
          break

        case 'NumpadSubtract':
          decreaseImageHeight()
          break

        case 'Numpad0':
          setImageHeight(0)
          break

        case 'NumpadDecimal': {
          setImageHeight(Math.floor(heightList.length / 2))
          break
        }

        case 'NumpadEnter':
          clearImageHeight()
          break
      }

      goToCurrentPage()
    })
  }

  return {
    heightList,
    currentHeight,
    onResizerClick,
    setResizeShortcuts,
  }
}

</script>

<style lang="scss">
/* stylelint-disable-next-line selector-id-pattern */
div#pane_images {
  .mi0 {
    width: max-content !important;
    min-width: unset;
    max-height: calc(var(--image-height) + 24px) !important;
  }

  img[id^="imgsrc_"] {
    width: auto !important;
    max-height: var(--image-height);
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
