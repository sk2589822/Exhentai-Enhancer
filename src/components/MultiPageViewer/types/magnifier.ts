import type { MouseButton } from '@/utils/gm-variables'

export interface MagnifierConfig {
  toggleMode: boolean
  activationButton: MouseButton
  longPressThreshold: number
  scale: {
    default: number
    step: number
    min: number
    max: number
  }
  mappingArea: {
    horizontal: number
    vertical: number
  }
  sensitivity: {
    x: number
    y: number
  }
}

export interface MagnifierState {
  isActive: boolean
  position: {
    x: number
    y: number
  }
  lastPosition: {
    x: number
    y: number
  }
  scale: number
  currentImage: HTMLImageElement | null
  isOriginalMode: boolean
  isLoadingOriginal: boolean
  loadingProgress: number
}
