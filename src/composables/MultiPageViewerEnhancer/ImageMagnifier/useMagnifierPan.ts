import { MagnifierState } from '@/components/MultiPageViewerEnhancer/ImageMagnifier.vue'

/**
 * 在放大鏡啟動後，按住右鍵拖動圖片內容
 * 與正常移動的區別：正常移動是移動視點，拖拽是移動圖片
 */
export function useMagnifierPan(
  state: MagnifierState,
) {
  function start(e: MouseEvent) {
    state.isPanning = true
    state.lastPosition = {
      x: e.pageX,
      y: e.pageY,
    }
  }

  function update(e: MouseEvent) {
    if (!state.isPanning || !state.currentImage) {
      return
    }

    const movementX = e.pageX - state.lastPosition.x
    const movementY = e.pageY - state.lastPosition.y

    state.panOffset = {
      x: state.panOffset.x + movementX,
      y: state.panOffset.y + movementY,
    }

    state.lastPosition = {
      x: e.pageX,
      y: e.pageY,
    }
  }

  function stop() {
    state.isPanning = false
  }

  function reset() {
    state.panOffset = {
      x: 0,
      y: 0,
    }
    state.isPanning = false
  }

  return {
    start,
    update,
    stop,
    reset,
  }
}
