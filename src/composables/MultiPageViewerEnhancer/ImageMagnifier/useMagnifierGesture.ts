import { ref } from 'vue'
import { MagnifierConfig } from '@/components/MultiPageViewerEnhancer/ImageMagnifier.vue'

export function useMagnifierGesture(config: MagnifierConfig) {
  const isLeftPressed = ref(false)
  const isRightPressed = ref(false)
  const pressTimer = ref<number>()
  const clickCount = ref(0)

  // 拖拽檢測相關
  const DRAG_THRESHOLD = 5  // 移動超過 5px 視為拖拽
  const dragStartPos = ref({ x: 0, y: 0 })
  const isDragging = ref(false)

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

  // 拖拽檢測方法
  function startDragDetection(e: MouseEvent) {
    dragStartPos.value = { x: e.pageX, y: e.pageY }
    isDragging.value = false
  }

  function updateDragState(e: MouseEvent) {
    if (isDragging.value) return  // 已經確定是拖拽了

    const dx = e.pageX - dragStartPos.value.x
    const dy = e.pageY - dragStartPos.value.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance > DRAG_THRESHOLD) {
      isDragging.value = true
    }
  }

  function isClick(): boolean {
    return !isDragging.value
  }

  function resetDragState() {
    isDragging.value = false
  }

  return {
    isLeftPressed,
    isRightPressed,
    clickCount,
    isDragging,
    updateButtonState,
    startLongPressTimer,
    clearTimer,
    incrementClickCount,
    resetClickCount,
    startDragDetection,
    updateDragState,
    isClick,
    resetDragState,
  }
}
