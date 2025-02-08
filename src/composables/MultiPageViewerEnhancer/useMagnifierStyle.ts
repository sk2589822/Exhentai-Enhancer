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
    const imgRect = img.getBoundingClientRect()

    // 獲取 imageresizer 的倍率
    const imageSizeStyle = getComputedStyle(paneImagesDiv).getPropertyValue('--image-size')
    const imageSizeScale = imageSizeStyle ? parseInt(imageSizeStyle) / 100 : 1

    // 計算 100% 時的圖片尺寸（以視窗高度為基準，爲了應對超過視窗高度的圖片）
    const normalizedRect = {
      width: window.innerHeight * (imgRect.width / imgRect.height),
      height: window.innerHeight,
      top: 0,
      bottom: window.innerHeight,
      left: (window.innerWidth - (window.innerHeight * (imgRect.width / imgRect.height))) / 2,
      right: (window.innerWidth + (window.innerHeight * (imgRect.width / imgRect.height))) / 2
    }

    /*
    放大鏡圖片的出現位置：
    - x 軸：以圖片中心點為基準
    - y 軸：以視窗高度為基準，固定在視窗中央
    */
    const imageCenterPoint = {
      x: imgRect.left + imgRect.width / 2,
      y: window.innerHeight / 2
    }

    /*
    映射邊緣留白區域（用戶體驗）：
    - mappingArea.horizontal: 單位爲vw
    - mappingArea.vertical: 單位爲vh
    */
    const mappingArea = {
      top: normalizedRect.top + (imgRect.height * config.mappingArea.vertical / 100),
      bottom: normalizedRect.bottom - (imgRect.height * config.mappingArea.vertical / 100),
      left: imgRect.left + (imgRect.width * config.mappingArea.horizontal / 100),
      right: imgRect.right - (imgRect.width * config.mappingArea.horizontal / 100)
    }

    /*
    計算滑鼠相對於映射區域的位置（百分比）
    注意：position 是 useMagnifierEvents 的 updatePosition 的包含sensitivity的結果
    */
    const mouseRelativeToMapping = {
      x: (position.x - mappingArea.left) / (mappingArea.right - mappingArea.left),
      y: (position.y - mappingArea.top) / (mappingArea.bottom - mappingArea.top)
    }

    // 計算最終縮放比例（結合 imageresizer 和 magnifier 的縮放）
    const finalScale = imageSizeScale * scale

    // 計算最終位移
    const finalTranslate = {
      x: imageCenterPoint.x - (normalizedRect.width * mouseRelativeToMapping.x) * finalScale + (position.x - imageCenterPoint.x),
      y: imageCenterPoint.y - (normalizedRect.height * mouseRelativeToMapping.y) * finalScale + (position.y - imageCenterPoint.y)
    }

    return {
      position: 'absolute',
      inset: 0,
      width: `${normalizedRect.width * finalScale}px`,
      height: `${normalizedRect.height * finalScale}px`,
      transform: `translate(${finalTranslate.x}px, ${finalTranslate.y}px)`,
      backgroundImage: `url(${img.src})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat'
    }
  }

  return {
    contentStyle
  }
} 