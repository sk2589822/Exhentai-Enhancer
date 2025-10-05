import { MagnifierState } from '@/components/MultiPageViewerEnhancer/ImageMagnifier.vue'

/**
 * 虛擬拖拽：在放大鏡啟動後，按住右鍵拖動圖片內容
 * 與正常移動的區別：正常移動是移動視點，拖拽是移動圖片
 */
export function useMagnifierDrag(
  state: MagnifierState,
) {
  function start(e: MouseEvent) {
    state.isVirtualDragging = true
    state.lastPosition = {
      x: e.pageX,
      y: e.pageY,
    }
    document.body.style.cursor = 'grabbing'
  }

  function update(e: MouseEvent) {
    if (!state.isVirtualDragging || !state.currentImage) {
      return
    }

    const movementX = e.pageX - state.lastPosition.x
    const movementY = e.pageY - state.lastPosition.y

    state.virtualOffset = {
      x: state.virtualOffset.x + movementX,
      y: state.virtualOffset.y + movementY,
    }

    state.lastPosition = {
      x: e.pageX,
      y: e.pageY,
    }
  }

  function stop() {
    state.isVirtualDragging = false
    document.body.style.cursor = 'default'
  }

  function reset() {
    state.virtualOffset = {
      x: 0,
      y: 0,
    }
    state.isVirtualDragging = false
  }

  return {
    start,
    update,
    stop,
    reset,
  }
}
