import { getElement } from '@/utils/commons'
import { MagnifierConfig, MagnifierState } from '@/components/MultiPageViewerEnhancer/ImageMagnifier.vue'

import { useMultiPageViewerElements } from '../useMultiPageViewerElements'

import { useMagnifierPan } from './useMagnifierPan'
import { useMagnifierGesture } from './useMagnifierGesture'
import { useMagnifierImageLoader } from './useMagnifierImageLoader'

export function useMagnifierEvents(
  state: MagnifierState,
  config: MagnifierConfig,
) {
  const { paneImagesDiv } = useMultiPageViewerElements()
  const pan = useMagnifierPan(state)
  const gesture = useMagnifierGesture(config)
  const imageLoader = useMagnifierImageLoader(state)
  const navigation = useMagnifierNavigation(state, config)

  // ========== 啟動/關閉邏輯 ==========

  function handlePress(e: MouseEvent) {
    gesture.updateButtonState(e)
    imageLoader.findImageAtPosition()

    // 原圖放大鏡
    if (gesture.isLeftPressed.value && gesture.isRightPressed.value && state.currentImage) {
      gesture.startLongPressTimer(() => {
        if (gesture.isLeftPressed.value && gesture.isRightPressed.value) {
          activateMagnifier(e)
          imageLoader.loadOriginal(state.currentImage!)
          state.isOriginalMode = true
        }
      })
    // 放大鏡
    } else if (gesture.isLeftPressed.value && !gesture.isRightPressed.value) {
      gesture.startLongPressTimer(() => {
        if (gesture.isLeftPressed.value) {
          activateMagnifier(e)
          state.isOriginalMode = false
        }
      })
    }
  }

  function handleRelease(e: MouseEvent) {
    gesture.updateButtonState(e)
    gesture.clearTimer()

    if (!state.isActive || e.button !== 0) {
      return
    }

    // Toggle 模式: 需要點擊兩次才關閉
    gesture.incrementClickCount()
    if (gesture.clickCount.value >= 2) {
      deactivateMagnifier()
      gesture.resetClickCount()
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

    gesture.resetClickCount()
  }

  function deactivateMagnifier() {
    delete paneImagesDiv.dataset.magnifierActive
    state.isActive = false
    state.currentImage = null
    state.isOriginalMode = false
    state.isLoadingOriginal = false
    pan.reset()
    document.body.classList.remove('hide-cursor')
    getElement('#magnifier-style')?.remove()
  }

  // ========== Overlay 事件處理 ==========

  function handleOverlayMouseDown(e: MouseEvent) {
    if (e.button === 2) {
      e.preventDefault()
      e.stopPropagation()
      pan.start(e)
    }
  }

  function handleOverlayMouseUp(e: MouseEvent) {
    if (e.button === 2) {
      e.preventDefault()
      e.stopPropagation()
      pan.stop()
    }
  }

  function handleOverlayMouseMove(e: MouseEvent) {
    if (state.isPanning) {
      pan.update(e)
    } else {
      navigation.updatePosition(e)
    }
  }

  function handleWheel(e: WheelEvent) {
    if (!state.isActive) {
      return
    }
    e.preventDefault()
    e.stopPropagation()
    navigation.updateScale(-Math.sign(e.deltaY) * config.scale.step)
  }

  // ========== 事件綁定 ==========

  function bindEvents() {
    paneImagesDiv.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleRelease)

    const preventDefaultEvents = ['mousedown', 'click', 'contextmenu']
    preventDefaultEvents.forEach(eventName => {
      paneImagesDiv.addEventListener(eventName, preventDefaultHandler, { capture: true })
    })
  }

  function unbindEvents() {
    paneImagesDiv.removeEventListener('mousedown', handleMouseDown)
    window.removeEventListener('mouseup', handleRelease)

    const preventDefaultEvents = ['mousedown', 'click', 'contextmenu']
    preventDefaultEvents.forEach(eventName => {
      paneImagesDiv.removeEventListener(eventName, preventDefaultHandler, { capture: true })
    })
  }

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

  return {
    bindEvents,
    unbindEvents,
    handleWheel,
    handleOverlayMouseDown,
    handleOverlayMouseUp,
    handleOverlayMouseMove,
  }
}

function useMagnifierNavigation(state: MagnifierState, config: MagnifierConfig) {
  function getSpeedFactor(): number {
    const scale = state.scale
    const decay = 1.5
    return 1 / Math.pow(scale, decay)
  }

  function updatePosition(e: MouseEvent) {
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
