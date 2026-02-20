import { ref } from 'vue'

import { getElement } from '@/utils/commons'
import { getPaneImagesDiv } from '@/components/MultiPageViewer/utils/elements'

import { useMagnifierGesture } from './useMagnifierGesture'
import { useMagnifierImageLoader } from './useMagnifierImageLoader'
import type { MagnifierState, MagnifierConfig } from '@/types/magnifier'

export function useMagnifierEvents(
  state: MagnifierState,
  config: MagnifierConfig,
) {
  const paneImagesDiv = getPaneImagesDiv()


  const gesture = useMagnifierGesture(config)
  const imageLoader = useMagnifierImageLoader(state)
  const navigation = useMagnifierNavigation(state, config)

  // 模式相關狀態
  const isWaitingForToggleEnd = ref(false)

  // ========== 啟動/關閉邏輯 ==========
  function handlePress(e: MouseEvent) {
    e.preventDefault()
    e.stopPropagation()

    gesture.updateButtonState(e)

    if (!gesture.isPrimaryButton.value) {
      return
    }

    gesture.startLongPressTimer(() => {
      imageLoader.findImageAtPosition(e.pageY)

      if (!state.currentImage) {
        return
      }

      state.isOriginalMode = gesture.isPrimaryButton.value && gesture.isSecondaryButton.value

      if (state.isOriginalMode) {
        imageLoader.loadOriginal(state.currentImage)
      }

      activateMagnifier(e)
    })
  }

  function handleRelease(e: MouseEvent) {
    gesture.updateButtonState(e)
    gesture.clearTimer()

    if (!state.isActive) {
      return
    }

    if (config.toggleMode) {
      handleToggleModeRelease(e)
    } else {
      handleHoldModeRelease()
    }
  }

  function handleToggleModeRelease(e: MouseEvent) {
    if (!gesture.isPrimaryButtonEvent(e)) {
      return
    }

    if (isWaitingForToggleEnd.value) {
      // 第二次放開: 關閉放大鏡
      deactivateMagnifier()
      isWaitingForToggleEnd.value = false
    } else {
      // 第一次放開: 標記等待第二次點擊
      isWaitingForToggleEnd.value = true
    }
  }

  function handleHoldModeRelease() {
    if (state.isOriginalMode) {
      // 原圖模式
      if (!gesture.isPrimaryButton.value && !gesture.isSecondaryButton.value) {
        deactivateMagnifier()
      }
    } else {
      // 普通模式
      if (!gesture.isPrimaryButton.value) {
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

    // currentImage 已在 handlePress 中設定
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
    imageLoader.cleanup()
    delete paneImagesDiv.dataset.magnifierActive
    state.currentImage = null
    state.isOriginalMode = false
    state.isLoadingOriginal = false
    document.body.classList.remove('hide-cursor')
    getElement('#magnifier-style')?.remove()
    // 延遲設置 isActive 以確保同一事件循環中的所有事件（如 contextmenu）
    // 都能被 preventDefaultHandler 正確攔截
    setTimeout(() => {
      state.isActive = false
    }, 0)
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
    imageLoader.cleanup()

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
