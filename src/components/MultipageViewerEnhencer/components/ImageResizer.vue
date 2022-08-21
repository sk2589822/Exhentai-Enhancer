<template>
  <div class="image-resizer">
    <button
      v-for="height in heightList"
      :key="height"
      class="image-resizer__button"
      :class="{ 'image-resizer__button--active': height === currentHeight }"
      @click="setImageHeight(height)"
      v-text="height"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import usePages from '../composables/usePages'
import useElements from '../composables/useElements'

const heightList = [100, 125, 150, 175, 200]
const currentHeight = ref<number | null>(null)
const resizedHeight = computed(() => `${currentHeight.value}vh`)

const { goToPage, currentPage } = usePages()

const { paneImagesDiv } = useElements()
function setImageHeight(height: number) {
  if (height === currentHeight.value) {
    currentHeight.value = null
    // paneImagesDiv.value.classList.remove(containerActiveClass)
    paneImagesDiv.value.style.removeProperty('--image-height')
  } else {
    currentHeight.value = height
    // paneImagesDiv.value.classList.add(containerActiveClass)
    paneImagesDiv.value.style.setProperty('--image-height', resizedHeight.value)
  }

  goToPage(currentPage.value)
}

</script>

<style lang="scss">
/* stylelint-disable-next-line selector-id-pattern */
div#pane_images {
  .mi0 {
    width: max-content !important;
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
