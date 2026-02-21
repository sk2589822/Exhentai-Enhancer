import { ref, computed } from 'vue'

import type { MagnifierConfig } from '@/components/MultiPageViewer/types/magnifier'

export function useMagnifierGesture(config: MagnifierConfig) {
  const isLeftPressed = ref(false)
  const isRightPressed = ref(false)
  const pressTimer = ref<number>()

  const isPrimaryButton = computed(() => config.activationButton === 'left'
    ? isLeftPressed.value
    : isRightPressed.value,
  )

  const isSecondaryButton = computed(() => config.activationButton === 'left'
    ? isRightPressed.value
    : isLeftPressed.value,
  )

  function updateButtonState(e: MouseEvent) {
    if (e.button === 0) {
      isLeftPressed.value = e.type === 'mousedown'
    } else if (e.button === 2) {
      isRightPressed.value = e.type === 'mousedown'
    }
  }

  function isPrimaryButtonEvent(e: MouseEvent): boolean {
    return (
      (config.activationButton === 'left' && e.button === 0)
      || (config.activationButton === 'right' && e.button === 2)
    )
  }

  function isSecondaryButtonEvent(e: MouseEvent): boolean {
    return (
      (config.activationButton === 'left' && e.button === 2)
      || (config.activationButton === 'right' && e.button === 0)
    )
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

  return {
    isLeftPressed,
    isRightPressed,
    isPrimaryButton,
    isSecondaryButton,

    updateButtonState,
    isPrimaryButtonEvent,
    isSecondaryButtonEvent,
    startLongPressTimer,
    clearTimer,
  }
}
