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

const { archiveLinkAnchor } = useElement()

defineProps({
  innerHTML: {
    type: String,
    required: true,
  },
})

const { setHentaiAtHomeEvent, setDirectDownloadEvent } = useDownloadEvent()

const isShow = ref(false)
const popup = ref(null)

onMounted(() => {
  archiveLinkAnchor.value.removeAttribute('onclick')
  archiveLinkAnchor.value.innerText += ' ✔️'

  setToggleEvent()
  setHentaiAtHomeEvent()
  setDirectDownloadEvent()
})

function setToggleEvent() {
  archiveLinkAnchor.value.addEventListener('click', event => {
    event.preventDefault()
    event.stopPropagation()
    isShow.value = !isShow.value
  })

  onClickOutside(popup, event => {
    if (event.target === archiveLinkAnchor.value) {
      return
    }

    isShow.value = false
  })
}
</script>

<style lang="scss" scoped>
@import "../style/popup";
</style>
