<template>
  <transition name="fade">
    <div
      v-show="isShow"
      ref="popup"
      class="popup popup--archive"
      v-html="innerHTML"
    />
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

import useElement from '../composables/useElements'
import useDownloadEvent from '../composables/useDownloadEvents'

defineProps({
  innerHTML: {
    type: String,
    required: true,
  },
})

const { archiveLinkAnchor } = useElement()
const { setHentaiAtHomeEvent, setDirectDownloadEvent } = useDownloadEvent()
const { isShow } = useDownloadArchive()

function useDownloadArchive() {
  const isShow = ref(false)
  const popup = ref(null)

  onMounted(() => {
    archiveLinkAnchor.removeAttribute('onclick')
    archiveLinkAnchor.innerText += ' ✔️'

    setToggleEvent()
    setHentaiAtHomeEvent()
    setDirectDownloadEvent()
  })

  function setToggleEvent() {
    archiveLinkAnchor.addEventListener('click', event => {
      event.preventDefault()
      event.stopPropagation()
      isShow.value = !isShow.value
    })

    onClickOutside(popup, event => {
      if (event.target === archiveLinkAnchor) {
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
