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
    const containerRect = paneImagesDiv.getBoundingClientRect()

    // 計算圖片中心點
    const imageCenterPoint = {
      x: imgRect.left + imgRect.width / 2,
      y: imgRect.top + imgRect.height / 2
    }

    // 計算映射區域
    const mappingArea = {
      top: imgRect.top + (window.innerHeight * config.mappingArea.vertical / 100),
      bottom: imgRect.bottom - (window.innerHeight * config.mappingArea.vertical / 100),
      left: imgRect.left + (window.innerWidth * config.mappingArea.horizontal / 100),
      right: imgRect.right - (window.innerWidth * config.mappingArea.horizontal / 100)
    }

    // 計算滑鼠相對於映射區域的位置（百分比）
    const mouseRelativeToMapping = {
      x: (position.x - mappingArea.left) / (mappingArea.right - mappingArea.left),
      y: (position.y - mappingArea.top) / (mappingArea.bottom - mappingArea.top)
    }

    // 計算容器中心點
    const containerCenter = {
      x: imageCenterPoint.x,
      y: containerRect.height / 2
    }

    // 計算最終位移
    const finalTranslate = {
      x: containerCenter.x - (imgRect.width * scale * mouseRelativeToMapping.x) + (position.x - imageCenterPoint.x),
      y: containerCenter.y - (imgRect.height * scale * mouseRelativeToMapping.y) + (position.y - imageCenterPoint.y)
    }

    return {
      position: 'absolute',
      inset: 0,
      width: `${imgRect.width * scale}px`,
      height: `${imgRect.height * scale}px`,
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