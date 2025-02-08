import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import { useMultiPageViewerElements } from './useMultiPageViewerElements'
import { MagnifierConfig, MagnifierState } from '@/components/MultiPageViewerEnhancer/Magnifier.vue'

export function useMagnifierStyle(
  state: MagnifierState,
  config: MagnifierConfig
) {
  const { paneImagesDiv } = useMultiPageViewerElements()

  const contentStyle = computed<CSSProperties>(() => {
    if (!state.currentImage) return {}

    const style = calculateTransformStyle(
      state.currentImage,
      state.position,
      state.scale
    )

    if (state.isLoadingOriginal) {
      return {
        ...style,
        maskImage: `linear-gradient(to bottom, black ${state.loadingProgress}%, transparent ${state.loadingProgress}%)`,
        WebkitMaskImage: `linear-gradient(to bottom, black ${state.loadingProgress}%, transparent ${state.loadingProgress}%)`
      }
    }

    return style
  })

  function calculateTransformStyle(
    img: HTMLImageElement,
    position: { x: number; y: number },
    scale: number
  ): CSSProperties {
    // 獲取當前圖片在視窗中的實際尺寸和位置
    const currentImageBounds = img.getBoundingClientRect()

    // 獲取圖片當前的縮放比例（來自 CSS 變量）
    const currentImageScale = getImageSizeScale()

    // 計算圖片在 100% 大小時的理想尺寸（基於視窗高度）
    const idealImageBounds = getNormalizedRect(currentImageBounds)

    // 確定放大鏡的中心點（x: 圖片中心，y: 視窗中心）
    const magnifierCenter = getCenterPoint(currentImageBounds)

    // 計算有效的互動區域（考慮邊緣留白）
    const interactiveArea = getMappingArea(currentImageBounds, idealImageBounds)

    // 計算滑鼠在互動區域內的相對位置（0-1 之間）
    const mouseRelativePos = getRelativePosition(position, interactiveArea)
    
    // 計算最終縮放比例（結合 imageresizer 和 magnifier 的縮放）
    const finalScale = currentImageScale * scale

    // 計算最終位移
    const finalTranslate = {
      x: magnifierCenter.x - (idealImageBounds.width * mouseRelativePos.x) * finalScale + (position.x - magnifierCenter.x),
      y: magnifierCenter.y - (idealImageBounds.height * mouseRelativePos.y) * finalScale + (position.y - magnifierCenter.y)
    }

    console.table({
      '當前圖片': currentImageBounds,
      '理想圖片尺寸': idealImageBounds,
      '放大鏡中心點': magnifierCenter,
      '互動區域': interactiveArea,
      '滑鼠相對位置': mouseRelativePos,
      '最終位移': finalTranslate
    })

    return {
      position: 'absolute',
      inset: 0,
      width: `${idealImageBounds.width * finalScale}px`,
      height: `${idealImageBounds.height * finalScale}px`,
      transform: `translate(${finalTranslate.x}px, ${finalTranslate.y}px)`,
      backgroundImage: `url(${img.src})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat'
    }
  }

  // 獲取 imageresizer 的倍率
  function getImageSizeScale() {
    const imageSizeStyle = getComputedStyle(paneImagesDiv).getPropertyValue('--image-size')
    return imageSizeStyle ? parseInt(imageSizeStyle) / 100 : 1
  }

  // 計算 100% 時的圖片尺寸（以視窗高度為基準，爲了應對超過視窗高度的圖片）
  function getNormalizedRect(imgRect: DOMRect) {
    const width = window.innerHeight * (imgRect.width / imgRect.height)
    return {
      width,
      height: window.innerHeight,
      top: 0,
      bottom: window.innerHeight,
      left: (window.innerWidth - width) / 2,
      right: (window.innerWidth + width) / 2
    }
  }

  /*
  放大鏡圖片的出現位置：
  - x 軸：以圖片中心點為基準
  - y 軸：以視窗高度為基準，固定在視窗中央
  */
  function getCenterPoint(imgRect: DOMRect) {
    return {
      x: imgRect.left + imgRect.width / 2,
      y: window.innerHeight / 2
    }
  }
  /*
  映射邊緣留白區域（用戶體驗）：
  - mappingArea.horizontal: 單位爲vw
  - mappingArea.vertical: 單位爲vh
  */
  function getMappingArea(imgRect: DOMRect, normalizedRect: any) {
    return {
      top: normalizedRect.top + (imgRect.height * config.mappingArea.vertical / 100),
      bottom: normalizedRect.bottom - (imgRect.height * config.mappingArea.vertical / 100),
      left: imgRect.left + (imgRect.width * config.mappingArea.horizontal / 100),
      right: imgRect.right - (imgRect.width * config.mappingArea.horizontal / 100)
    }
  }

  /*
  計算滑鼠相對於映射區域的位置（百分比）
  注意：position 是 useMagnifierEvents 的 updatePosition 的包含sensitivity的結果
  */
  function getRelativePosition(position: { x: number; y: number }, mappingArea: any) {
    return {
      x: (position.x - mappingArea.left) / (mappingArea.right - mappingArea.left),
      y: (position.y - mappingArea.top) / (mappingArea.bottom - mappingArea.top)
    }
  }

  return {
    contentStyle
  }
} 