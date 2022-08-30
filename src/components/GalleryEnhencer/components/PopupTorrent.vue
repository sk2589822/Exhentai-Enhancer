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

import { getElement } from '@/utils/commons'

import useElement from '../composables/useElements'

defineProps({
  innerHTML: {
    type: String,
    required: true,
  },
})

const { torrentLinkAnchor } = useElement()
const { isShow } = useDownloadTorrent()

function useDownloadTorrent() {
  const isShow = ref(false)
  const popup = ref<HTMLElement>()

  onMounted(() => {
    torrentLinkAnchor.removeAttribute('onclick')
    torrentLinkAnchor.innerText += ' ✔️'

    if (torrentLinkAnchor.innerText === 'Torrent Download (1) ✔️') {
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

  return {
    isShow,
  }
}
</script>

<style lang="scss" scoped>
@import "../style/popup";
</style>
