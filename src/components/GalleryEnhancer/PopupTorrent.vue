<template>
  <transition name="fade">
    <div
      v-show="isShow"
      ref="popup"
      class="popup popup--torrent"
      v-html="innerHTML"
    />
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

import useElements from '@/composables/GalleryEnhancer/useElements'
import { getElement } from '@/utils/commons'

defineProps({
  innerHTML: {
    type: String,
    required: true,
  },
})

const popup = ref<HTMLElement>()

const { torrentLinkAnchor } = useElements()

const isShow = ref(false)

onMounted(() => {
  torrentLinkAnchor.removeAttribute('onclick')
  torrentLinkAnchor.classList.add('is-ready')

  if (torrentLinkAnchor.innerText === 'Torrent Download (1)') {
    setDownloadEvent()
  } else {
    setToggleEvent()
  }
})

function setDownloadEvent() {
  torrentLinkAnchor.addEventListener('click', event => {
    event.preventDefault()
    getElement('a', popup.value)?.click()
  })
}

function setToggleEvent() {
  torrentLinkAnchor.addEventListener('click', event => {
    event.preventDefault()
    event.stopPropagation()

    isShow.value = !isShow.value
  })

  onClickOutside(popup, event => {
    if (event.target === torrentLinkAnchor) {
      return
    }
    isShow.value = false
  })
}
</script>

<style lang="scss" src="@/styles/popup.scss" scoped />
