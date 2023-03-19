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
import { useToast } from 'vue-toastification'

import useElements from '@/composables/GalleryEnhancer/useElements'
import useDownloadEvent from '@/composables/GalleryEnhancer/useDownloadEvents'
import { quickDownloadMethod } from '@/utils/GMVariables'
import { DownloadMethod } from '@/constants/monkey'
import { getElement } from '@/utils/commons'

defineProps({
  innerHTML: {
    type: String,
    required: true,
  },
})

const popup = ref<HTMLElement>()

const toast = useToast()
const { archiveLinkAnchor } = useElements()
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

    onClickOutside(popup, event => {
      if (event.target === archiveLinkAnchor) {
        return
      }

      isShow.value = false
    })
  })

  function setToggleEvent() {
    archiveLinkAnchor.addEventListener('click', event => {
      event.preventDefault()
      event.stopPropagation()
      isShow.value = !isShow.value
    })
  }

  // TODO: 直接 send request 而非操作 DOM
  function setQuickDownloadEvent() {
    archiveLinkAnchor.addEventListener('click', event => {
      event.preventDefault()
      event.stopPropagation()

      if (!popup.value || isShow.value) {
        isShow.value = false
        return
      }

      switch (quickDownloadMethod.value) {
        case DownloadMethod.HaH_Original:
        case DownloadMethod.HaH_2400: {
          const downloadLinkElement = getHaHDownloadLinkElement(quickDownloadMethod.value)

          if (downloadLinkElement) {
            downloadLinkElement.click()
          } else {
            toast.warning(`Failed ${quickDownloadMethod.value}. The link might not exists.\n Open popup`)
            isShow.value = true
          }

          break
        }
        case DownloadMethod.Direct_Origin:
          (getElement('input[value="Download Original Archive"]', popup.value) as HTMLElement).click()
          break
        case DownloadMethod.Direct_Resample:
          (getElement('input[value="Download Resample Archive"]', popup.value) as HTMLElement).click()
          break
      }
    })
  }

  function getHaHDownloadLinkElement(downloadMethod: DownloadMethod.HaH_Original | DownloadMethod.HaH_2400) {
    const indexMap = {
      [DownloadMethod.HaH_Original]: 6,
      [DownloadMethod.HaH_2400]: 5,
    }
    const index = indexMap[downloadMethod]

    return getElement(`td:nth-child(${index}) > p > a`, popup.value)
  }

  return {
    isShow,
  }
}

</script>

<style lang="scss" src="@/styles/popup.scss" scoped />
