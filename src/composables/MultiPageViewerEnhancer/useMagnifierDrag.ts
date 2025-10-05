import { MagnifierState, MagnifierConfig } from '@/components/MultiPageViewerEnhancer/Magnifier.vue'
import { useMultiPageViewerElements } from './useMultiPageViewerElements'

/**
 * 虛擬拖拽：在放大鏡啟動後，按住右鍵拖動圖片內容
 * 與正常移動的區別：正常移動是移動視點，拖拽是移動圖片
 */
export function useMagnifierDrag(
  state: MagnifierState
) {
  const { paneImagesDiv } = useMultiPageViewerElements()

  function start(e: MouseEvent) {
    state.isVirtualDragging = true
    state.lastPosition = { x: e.pageX, y: e.pageY }
    document.body.style.cursor = 'grabbing'
  }

  function update(e: MouseEvent) {
    if (!state.isVirtualDragging || !state.currentImage) return

    const movementX = e.pageX - state.lastPosition.x
    const movementY = e.pageY - state.lastPosition.y

    // 更新虛擬偏移量
    state.virtualOffset = {
      x: state.virtualOffset.x + movementX,
      y: state.virtualOffset.y + movementY
    }

    state.lastPosition = { x: e.pageX, y: e.pageY }
  }

  function stop() {
    state.isVirtualDragging = false
    document.body.style.cursor = 'default'
  }

  function reset() {
    state.virtualOffset = { x: 0, y: 0 }
    state.isVirtualDragging = false
  }

  /**
   * 計算虛擬偏移的邊界限制
   * 確保拖拽時圖片不會超出合理範圍
   */
  function calculateLimits() {
    if (!state.currentImage) {
      return { minX: 0, maxX: 0, minY: 0, maxY: 0 }
    }

    const imgRect = state.currentImage.getBoundingClientRect()
    const currentScale = getImageSizeScale()

    // 計算圖片的完整尺寸（考慮 ImageResizer 的縮放）
    const fullImageWidth = state.currentImage.naturalWidth * currentScale
    const fullImageHeight = state.currentImage.naturalHeight * currentScale

    // 計算被隱藏的部分（圖片超出視窗的部分）
    const hiddenWidth = Math.max(0, fullImageWidth - imgRect.width)
    const hiddenHeight = Math.max(0, fullImageHeight - imgRect.height)

    // 拖拽範圍：從 -hidden 到 0
    // 負值表示向上/向左拖動，顯示底部/右側內容
    return {
      minX: -hiddenWidth,
      maxX: 0,
      minY: -hiddenHeight,
      maxY: 0
    }
  }

  function getImageSizeScale() {
    const imageSizeStyle = getComputedStyle(paneImagesDiv).getPropertyValue('--image-size')
    return imageSizeStyle ? parseInt(imageSizeStyle) / 100 : 1
  }

  return {
    start,
    update,
    stop,
    reset
  }
}