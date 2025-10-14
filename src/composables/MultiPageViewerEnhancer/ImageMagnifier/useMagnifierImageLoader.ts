import { GM_xmlhttpRequest } from 'vite-plugin-monkey/dist/client'
import { ref } from 'vue'

import { getElement } from '@/utils/commons'
import { MagnifierState } from '@/components/MultiPageViewerEnhancer/ImageMagnifier.vue'

import { useMultiPageViewerElements } from '../useMultiPageViewerElements'

export function useMagnifierImageLoader(state: MagnifierState) {
  const { paneImagesDiv } = useMultiPageViewerElements()

  const currentRequest = ref<ReturnType<typeof GM_xmlhttpRequest> | null>(null)
  const currentObjectUrl = ref<string | null>(null)

  function cleanup() {
    if (currentRequest.value) {
      currentRequest.value.abort()
      currentRequest.value = null
    }

    if (currentObjectUrl.value) {
      URL.revokeObjectURL(currentObjectUrl.value)
      currentObjectUrl.value = null
    }
  }

  async function loadOriginal(img: HTMLImageElement) {
    const mbar = img.closest('.mimg') as HTMLElement
    const originalLink = mbar && getElement<HTMLAnchorElement>('a[href*="/fullimg/"]', mbar)

    if (originalLink) {
      const originalUrl = originalLink.href
      const newImage = new Image()

      state.isLoadingOriginal = true
      state.loadingProgress = 0

      try {
        await new Promise<void>((resolve, reject) => {
          currentRequest.value = GM_xmlhttpRequest({
            method: 'GET',
            url: originalUrl,
            responseType: 'blob',
            onprogress: event => {
              state.loadingProgress = (event.loaded / event.total) * 100
            },
            onload: response => {
              const blob = response.response
              const objectUrl = URL.createObjectURL(blob)

              currentObjectUrl.value = objectUrl

              newImage.onload = () => {
                resolve()
              }
              newImage.onerror = () => {
                URL.revokeObjectURL(objectUrl)
                reject()
              }
              newImage.src = objectUrl
            },
            onerror: reject,
          })
        })

        img.src = newImage.src
        state.isLoadingOriginal = false
        currentRequest.value = null
        return true
      } catch (error) {
        console.error('原圖載入失敗:', error)
        state.isLoadingOriginal = false
        currentRequest.value = null
        return false
      }
    }
    return false
  }

  function findImageAtPosition(posY: number) {
    const mouseY = posY
    const images = paneImagesDiv.querySelectorAll<HTMLImageElement>('.mimg > a > img')

    if (!images.length) {
      return
    }

    if ((mouseY <= 0 || mouseY >= window.innerHeight) && state.currentImage) {
      return
    }

    for (const img of images) {
      const rect = img.getBoundingClientRect()
      if (mouseY >= rect.top + window.scrollY &&
        mouseY <= rect.bottom + window.scrollY) {
        state.currentImage = img
        return
      }
    }

    state.currentImage = null
  }

  return {
    loadOriginal,
    findImageAtPosition,
    cleanup,
  }
}
