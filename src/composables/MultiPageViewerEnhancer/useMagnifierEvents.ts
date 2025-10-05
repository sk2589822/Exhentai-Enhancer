import { ref } from 'vue'
import { GM_xmlhttpRequest } from 'vite-plugin-monkey/dist/client'

import { getElement } from '@/utils/commons'
import { MagnifierConfig, MagnifierState } from '@/components/MultiPageViewerEnhancer/ImageMagnifier.vue'

import { useMultiPageViewerElements } from './useMultiPageViewerElements'
import { useMagnifierDrag } from './useMagnifierDrag'

export function useMagnifierEvents(
  state: MagnifierState,
  config: MagnifierConfig,
) {
  const { paneImagesDiv } = useMultiPageViewerElements()
  const drag = useMagnifierDrag(state)

  const pressTimer = ref<number>()
  const isWaitingForToggleEnd = ref(false)
  const isLeftPressed = ref(false)
  const isRightPressed = ref(false)

  // ========== PaneImagesDiv 事件（啟動放大鏡） ==========

  function handlePress(e: MouseEvent) {
    updateMouseButtonState(e)
    updateCurrentImage()

    if (isLeftPressed.value && isRightPressed.value && state.currentImage) {
      handleDualButtonPress(e)
    } else if (isLeftPressed.value && !isRightPressed.value) {
      handleSingleButtonPress(e)
    }
  }

  function handleRelease(e: MouseEvent) {
    updateMouseButtonState(e)
    clearPressTimer()

    if (!state.isActive) {
      return
    }

    // Toggle 模式邏輯
    if (e.button === 0) {
      if (!isWaitingForToggleEnd.value) {
        isWaitingForToggleEnd.value = true
        return
      }
      deactivateMagnifier()
      isWaitingForToggleEnd.value = false
    }
  }

  function updateMouseButtonState(e: MouseEvent) {
    if (e.button === 0) {
      isLeftPressed.value = e.type === 'mousedown'
    } else if (e.button === 2) {
      isRightPressed.value = e.type === 'mousedown'
    }
  }

  function handleDualButtonPress(e: MouseEvent) {
    pressTimer.value = window.setTimeout(() => {
      if (isLeftPressed.value && isRightPressed.value) {
        activateMagnifier(e)
        loadOriginalImage(state.currentImage!)
        state.isOriginalMode = true
      }
    }, config.longPressThreshold)
  }

  function handleSingleButtonPress(e: MouseEvent) {
    pressTimer.value = window.setTimeout(() => {
      if (isLeftPressed.value) {
        activateMagnifier(e)
        state.isOriginalMode = false
      }
    }, config.longPressThreshold)
  }

  function clearPressTimer() {
    if (pressTimer.value) {
      clearTimeout(pressTimer.value)
      pressTimer.value = undefined
    }
  }

  // ========== Overlay 事件（虛擬拖拽 + 正常移動） ==========

  function handleOverlayMouseDown(e: MouseEvent) {
    if (e.button === 2) { // 右鍵
      e.preventDefault()
      e.stopPropagation()
      drag.start(e)
    }
  }

  function handleOverlayMouseUp(e: MouseEvent) {
    if (e.button === 2) {
      e.preventDefault()
      e.stopPropagation()
      drag.stop()
    }
  }

  function handleOverlayMouseMove(e: MouseEvent) {
    if (state.isVirtualDragging) {
      drag.update(e)
    } else {
      updateNormalPosition(e)
    }
  }

  /**
   * 根據縮放倍數計算移動速度因子
   * 倍數越大，速度越慢，但不會慢到無法操作
   */
  function getSpeedFactor(): number {
    const scale = state.scale
    return 1 / Math.log2(scale + 1)
  }

  // ========== 位置和縮放 ==========

  function updateNormalPosition(e: MouseEvent) {
    if (!state.isActive) {
      return
    }

    const movementX = e.pageX - state.lastPosition.x
    const movementY = e.pageY - state.lastPosition.y

    const speedFactor = getSpeedFactor()

    state.position = {
      x: state.position.x + (movementX * config.sensitivity.x * speedFactor),
      y: state.position.y + (movementY * config.sensitivity.y * speedFactor),
    }

    // 限制移動範圍
    state.position = {
      x: Math.max(0, Math.min(window.innerWidth, state.position.x)),
      y: Math.max(0, Math.min(window.innerHeight, state.position.y)),
    }

    state.lastPosition = {
      x: e.pageX,
      y: e.pageY,
    }
  }

  function handleWheel(e: WheelEvent) {
    if (!state.isActive) {
      return
    }

    e.preventDefault()
    e.stopPropagation()

    updateScale(-Math.sign(e.deltaY) * config.scale.step)
  }

  function updateScale(delta: number) {
    if (!state.isActive) {
      return
    }
    state.scale = Math.min(
      Math.max(state.scale + delta, config.scale.min),
      config.scale.max,
    )
  }

  // ========== 啟動/關閉 ==========

  function activateMagnifier(e: MouseEvent) {
    state.isActive = true
    state.position = {
      x: e.pageX,
      y: e.pageY,
    }
    state.lastPosition = {
      x: e.pageX,
      y: e.pageY,
    }
    state.scale = config.scale.default

    updateCurrentImage()

    if (state.currentImage) {
      updateNormalPosition(e)
      paneImagesDiv.dataset.magnifierActive = 'true'
      document.body.classList.add('hide-cursor')

      const style = document.createElement('style')
      style.id = 'magnifier-style'
      style.textContent = `
        #pane_thumbs {
          display: none !important;
          pointer-events: none !important;
          visibility: hidden !important;
        }
      `
      document.head.appendChild(style)
    }
  }

  function deactivateMagnifier() {
    delete paneImagesDiv.dataset.magnifierActive
    state.isActive = false
    state.currentImage = null
    state.isOriginalMode = false
    state.isLoadingOriginal = false
    drag.reset() // 重置拖拽狀態
    document.body.classList.remove('hide-cursor')
    getElement('#magnifier-style')?.remove()
  }

  // ========== 圖片加載 ==========

  async function loadOriginalImage(img: HTMLImageElement) {
    const mbar = img.closest('.mimg') as HTMLElement
    const originalLink = mbar && getElement<HTMLAnchorElement>('a[href*="/fullimg/"]', mbar)

    if (originalLink) {
      const originalUrl = originalLink.href
      const newImage = new Image()

      state.isLoadingOriginal = true
      state.loadingProgress = 0

      try {
        await new Promise((resolve, reject) => {
          GM_xmlhttpRequest({
            method: 'GET',
            url: originalUrl,
            responseType: 'blob',
            onprogress: event => {
              state.loadingProgress = (event.loaded / event.total) * 100
            },
            onload: response => {
              const blob = response.response
              const objectUrl = URL.createObjectURL(blob)
              newImage.onload = resolve
              newImage.onerror = reject
              newImage.src = objectUrl
            },
            onerror: reject,
          })
        })

        img.src = newImage.src
        state.isLoadingOriginal = false
        return true
      } catch (error) {
        console.error('原圖加載失敗:', error)
        state.isLoadingOriginal = false
        return false
      }
    }
    return false
  }

  function updateCurrentImage() {
    const mouseY = state.position.y
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

  // ========== 事件綁定 ==========

  function bindEvents() {
    paneImagesDiv.addEventListener('mousedown', (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.mbar')) {
        handlePress(e)
      }
    })

    window.addEventListener('mouseup', handleRelease)

    const preventDefaultEvents = ['mousedown', 'click', 'contextmenu']
    preventDefaultEvents.forEach(eventName => {
      paneImagesDiv.addEventListener(eventName, (e: Event) => {
        if (state.isActive && !(e.target as HTMLElement).closest('.mbar')) {
          e.preventDefault()
          e.stopPropagation()
        }
      }, { capture: true })
    })
  }

  function unbindEvents() {
    paneImagesDiv.removeEventListener('mousedown', handlePress)
    window.removeEventListener('mouseup', handleRelease)

    const preventDefaultEvents = ['mousedown', 'click', 'contextmenu']
    preventDefaultEvents.forEach(eventName => {
      paneImagesDiv.removeEventListener(eventName, (e: Event) => {
        if (state.isActive) {
          e.preventDefault()
          e.stopPropagation()
        }
      }, { capture: true })
    })
  }

  return {
    bindEvents,
    unbindEvents,
    handleWheel,
    handleOverlayMouseDown,
    handleOverlayMouseUp,
    handleOverlayMouseMove,
  }
}
