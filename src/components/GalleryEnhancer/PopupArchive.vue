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

import useElement from '@/composables/GalleryEnhancer/useElements'
import useDownloadEvent from '@/composables/GalleryEnhancer/useDownloadEvents'
import { quickDownloadMethod } from '@/utils/GMVariables'
import { DownloadMethod } from '@/constants/monkey'
import { getElement, getElements } from '@/utils/commons'

defineProps({
  innerHTML: {
    type: String,
    required: true,
  },
})

const popup = ref<HTMLElement>()

const { archiveLinkAnchor } = useElement()
const { setHentaiAtHomeEvent, setDirectDownloadEvent } = useDownloadEvent()
const { isShow } = useDownloadArchive()

function useDownloadArchive() {
  const isShow = ref(false)

  onMounted(() => {
    archiveLinkAnchor.removeAttribute('onclick')
    archiveLinkAnchor.classList.add('is-ready')

    setHentaiAtHomeEvent()
    setDirectDownloadEvent()

    if (quickDownloadMethod.value === DownloadMethod.Manual) {
      setToggleEvent()
    } else {
      setQuickDownloadEvent()
    }
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

  // TODO: 直接 send request 而非操作 DOM
  function setQuickDownloadEvent() {
    archiveLinkAnchor.addEventListener('click', event => {
      event.preventDefault()
      event.stopPropagation()

      if (!popup.value) {
        return
      }

      switch (quickDownloadMethod.value) {
        case DownloadMethod.HaH_Original:
          (getElements('td > p > a', popup.value)?.[5] as HTMLElement).click()
          break
        case DownloadMethod.HaH_2400:
          (getElements('td > p > a', popup.value)?.[4] as HTMLElement).click()
          break
        case DownloadMethod.Direct_Origin:
          (getElement('input[value="Download Original Archive"]', popup.value) as HTMLElement).click()
          break
        case DownloadMethod.Direct_Resample:
          (getElement('input[value="Download Resample Archive"]', popup.value) as HTMLElement).click()
          break
      }
    })
  }

  return {
    isShow,
  }
}

</script>

<style lang="scss" src="@/styles/popup.scss" scoped />
