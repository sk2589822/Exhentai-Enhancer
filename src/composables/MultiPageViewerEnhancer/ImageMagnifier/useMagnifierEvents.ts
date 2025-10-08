import { ref } from 'vue'

import { getElement } from '@/utils/commons'
import { MagnifierConfig, MagnifierState } from '@/components/MultiPageViewerEnhancer/ImageMagnifier.vue'

import { useMultiPageViewerElements } from '../useMultiPageViewerElements'

import { useMagnifierGesture } from './useMagnifierGesture'
import { useMagnifierImageLoader } from './useMagnifierImageLoader'

export function useMagnifierEvents(
  state: MagnifierState,
  config: MagnifierConfig,
) {
  const { paneImagesDiv } = useMultiPageViewerElements()

  const gesture = useMagnifierGesture(config)
  const imageLoader = useMagnifierImageLoader(state)
  const navigation = useMagnifierNavigation(state, config)

  // 模式相關狀態
  const isWaitingForToggleEnd = ref(false)

  // ========== 啟動/關閉邏輯 ==========

  function handlePress(e: MouseEvent) {
    e.preventDefault() // 立即阻止默認行為，防止文本選取
    e.stopPropagation()

    gesture.updateButtonState(e)
    imageLoader.findImageAtPosition()

    // 原圖放大鏡 (主鍵 + 次鍵)
    if (gesture.isPrimaryButton.value && gesture.isSecondaryButton.value && state.currentImage) {
      gesture.startLongPressTimer(() => {
        if (gesture.isPrimaryButton.value && gesture.isSecondaryButton.value) {
          activateMagnifier(e)
          imageLoader.loadOriginal(state.currentImage!)
          state.isOriginalMode = true
        }
      })
    }
    // 普通放大鏡 (僅主鍵)
    else if (gesture.isPrimaryButton.value && !gesture.isSecondaryButton.value) {
      gesture.startLongPressTimer(() => {
        if (gesture.isPrimaryButton.value) {
          activateMagnifier(e)
          state.isOriginalMode = false
        }
      })
    }
  }

  function handleRelease(e: MouseEvent) {
    gesture.updateButtonState(e)
    gesture.clearTimer()

    if (!state.isActive) {
      return
    }

    // Toggle 模式處理
    if (config.toggleMode) {
      if (gesture.isPrimaryButtonEvent(e)) {
        if (!isWaitingForToggleEnd.value) {
          isWaitingForToggleEnd.value = true
          return
        }
        deactivateMagnifier()
        isWaitingForToggleEnd.value = false
      }
    } else {
      // Hold 模式處理
      if (state.isOriginalMode) {
        if (!gesture.isPrimaryButton.value && !gesture.isSecondaryButton.value) {
          setTimeout(() => {
            deactivateMagnifier()
          }, 0)
        }
      } else if (!gesture.isPrimaryButton.value) {
        deactivateMagnifier()
      }
    }
  }

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

    imageLoader.findImageAtPosition()

    if (state.currentImage) {
      navigation.updatePosition(e)
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
    document.body.classList.remove('hide-cursor')
    getElement('#magnifier-style')?.remove()
  }

  // ========== 事件處理器 ==========

  function handleWheel(e: WheelEvent) {
    if (!state.isActive) {
      return
    }
    e.preventDefault()
    e.stopPropagation()
    navigation.updateScale(-Math.sign(e.deltaY) * config.scale.step)
  }

  // ========== 事件綁定 ==========

  function handleMouseDown(e: MouseEvent) {
    if (!(e.target as HTMLElement).closest('.mbar')) {
      handlePress(e)
    }
  }

  function preventDefaultHandler(e: Event) {
    if (state.isActive && !(e.target as HTMLElement).closest('.mbar')) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  function bindEvents() {
    paneImagesDiv.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleRelease)
    window.addEventListener('mousemove', navigation.updatePosition)

    const preventDefaultEvents = ['mousedown', 'click', 'contextmenu']
    preventDefaultEvents.forEach(eventName => {
      paneImagesDiv.addEventListener(eventName, preventDefaultHandler, { capture: true })
    })
  }

  function unbindEvents() {
    paneImagesDiv.removeEventListener('mousedown', handleMouseDown)
    window.removeEventListener('mouseup', handleRelease)
    window.removeEventListener('mousemove', navigation.updatePosition)

    const preventDefaultEvents = ['mousedown', 'click', 'contextmenu']
    preventDefaultEvents.forEach(eventName => {
      paneImagesDiv.removeEventListener(eventName, preventDefaultHandler, { capture: true })
    })
  }

  return {
    bindEvents,
    unbindEvents,
    handleWheel,
  }
}

// ========== 導航邏輯 ==========

function useMagnifierNavigation(state: MagnifierState, config: MagnifierConfig) {
  function updatePosition(e: MouseEvent) {
    if (!state.isActive) {
      return
    }

    const movementX = e.pageX - state.lastPosition.x
    const movementY = e.pageY - state.lastPosition.y

    state.position = {
      x: state.position.x + (movementX * config.sensitivity.x),
      y: state.position.y + (movementY * config.sensitivity.y),
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

  function updateScale(delta: number) {
    if (!state.isActive) {
      return
    }
    state.scale = Math.min(
      Math.max(state.scale + delta, config.scale.min),
      config.scale.max,
    )
  }

  return {
    updatePosition,
    updateScale,
  }
}
