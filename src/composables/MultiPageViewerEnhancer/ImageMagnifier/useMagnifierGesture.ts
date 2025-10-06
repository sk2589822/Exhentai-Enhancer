import { ref } from 'vue'

import { MagnifierConfig } from '@/components/MultiPageViewerEnhancer/ImageMagnifier.vue'

export function useMagnifierGesture(config: MagnifierConfig) {
  const isLeftPressed = ref(false)
  const isRightPressed = ref(false)
  const pressTimer = ref<number>()
  const clickCount = ref(0)

  function updateButtonState(e: MouseEvent) {
    if (e.button === 0) {
      isLeftPressed.value = e.type === 'mousedown'
    } else if (e.button === 2) {
      isRightPressed.value = e.type === 'mousedown'
    }
  }

  function startLongPressTimer(callback: () => void) {
    pressTimer.value = window.setTimeout(callback, config.longPressThreshold)
  }

  function clearTimer() {
    if (pressTimer.value) {
      clearTimeout(pressTimer.value)
      pressTimer.value = undefined
    }
  }

  function incrementClickCount() {
    clickCount.value++
  }

  function resetClickCount() {
    clickCount.value = 0
  }

  return {
    isLeftPressed,
    isRightPressed,
    clickCount,
    updateButtonState,
    startLongPressTimer,
    clearTimer,
    incrementClickCount,
    resetClickCount,
  }
}
