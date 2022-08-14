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

import useElement from '../composables/useElements'
import { getElement } from '@/utils/commons'

const { torrentLinkAnchor } = useElement()

defineProps({
  innerHTML: {
    type: String,
    required: true,
  },
})

const isShow = ref(false)
const popup = ref<HTMLElement>()

onMounted(() => {
  torrentLinkAnchor.value.removeAttribute('onclick')
  torrentLinkAnchor.value.innerText += ' ✔️'

  if (torrentLinkAnchor.value.innerText === 'Torrent Download (1) ✔️') {
    setDownloadEvent()
  } else {
    setToggleEvent()
  }
})

function setDownloadEvent() {
  torrentLinkAnchor.value.addEventListener('click', event => {
    event.preventDefault()
    getElement('a', popup.value)?.click()
  })
}

function setToggleEvent() {
  torrentLinkAnchor.value.addEventListener('click', event => {
    event.preventDefault()
    event.stopPropagation()

    isShow.value = !isShow.value
  })

  onClickOutside(popup, event => {
    if (event.target === torrentLinkAnchor.value) {
      return
    }
    isShow.value = false
  })
}
</script>

<style lang="scss" scoped>
@import "../style/popup";
</style>
