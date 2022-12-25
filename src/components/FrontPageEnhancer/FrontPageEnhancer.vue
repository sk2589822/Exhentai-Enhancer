<!-- eslint-disable vue/valid-template-root -->
<template />

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, watch } from 'vue'

import useWheelStep from '@/composables/useWheelStep'
import { getDoc, getElement, getElements } from '@/utils/commons'
import { scrollPerRowSwitch, infiniteScrollSwitch } from '@/utils/monkeySwitches'

if (scrollPerRowSwitch.enabled) {
  useWheelStep({
    containerSelector: '.itg.gld',
    itemsSelector: '.gl1t',
  })
}

if (infiniteScrollSwitch.enabled) {
  useInfiniteScroll()
}

function useInfiniteScroll() {
  const { y } = useWindowScroll()
  const isAtBottomOfPage = computed(() => {
    return y.value === document.documentElement.scrollHeight - window.innerHeight
  })

  const galleryContainer = getElement('.itg.gld')
  let nextPageUrl = getElement('#dnext')?.getAttribute('href')

  let isFetching = false
  watch(y, async () => {
    if (isFetching) {
      return
    }

    if (isAtBottomOfPage.value) {
      if (!nextPageUrl) {
        return
      }

      isFetching = true
      galleryContainer?.classList.add('is-fetching')

      const doc = await getDoc(nextPageUrl)
      const galleriesOfNextPage = getElements('.itg.gld > .gl1t', doc)

      if (!galleriesOfNextPage) {
        return
      }
      galleryContainer?.append(...galleriesOfNextPage)
      isFetching = false
      galleryContainer?.classList.remove('is-fetching')

      nextPageUrl = getElement('#dnext', doc)?.getAttribute('href')
    }
  })
}
</script>

<style lang="scss">
@use "@/styles/animations/spin.scss";

.itg.gld.is-fetching::after {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 30px;
  height: 30px;
  line-height: 30px;
  content: "⌛";
  animation: spin ease-in-out 1s infinite;
}
</style>
