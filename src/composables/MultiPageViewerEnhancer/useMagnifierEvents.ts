import { ref } from 'vue'
import { GM_xmlhttpRequest } from 'vite-plugin-monkey/dist/client'
import { getElement } from '@/utils/commons'
import { useMultiPageViewerElements } from './useMultiPageViewerElements'
import { MagnifierConfig, MagnifierState } from '@/components/MultiPageViewerEnhancer/Magnifier.vue'

export function useMagnifierEvents(
  state: MagnifierState,
  config: MagnifierConfig
) {
  const { paneImagesDiv } = useMultiPageViewerElements()
  
  // 基礎狀態
  const pressTimer = ref<number>()
  const isMagnifierActivating = ref(false)
  const isMagnifierPending = ref(false)
  const isWaitingForToggleEnd = ref(false)
  const isLeftPressed = ref(false)
  const isRightPressed = ref(false)

  // 事件處理策略
  const eventStrategy = config.toggleMode ? createToggleModeStrategy() : createHoldModeStrategy()

  // 基礎事件處理
  function handlePress(e: MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    
    updateMouseButtonState(e)
    updateCurrentImage()
    
    eventStrategy.handlePress(e)
  }

  function handleRelease(e: MouseEvent) {
    updateMouseButtonState(e)
    eventStrategy.handleRelease(e)
  }

  function updateMouseButtonState(e: MouseEvent) {
    if (e.button === 0) {
      isLeftPressed.value = e.type === 'mousedown'
    } else if (e.button === 2) {
      isRightPressed.value = e.type === 'mousedown'
    }
  }

  // 模式策略
  function createHoldModeStrategy() {
    return {
      handlePress(e: MouseEvent) {
        if (isLeftPressed.value && isRightPressed.value && state.currentImage) {
          handleDualButtonPress(e)
        } else if (isLeftPressed.value && !isRightPressed.value) {
          handleSingleButtonPress(e)
        }
      },
      
      handleRelease(e: MouseEvent) {
        clearPressTimer()
        
        if (!state.isActive) return
        
        if (state.isOriginalMode) {
          if (!isLeftPressed.value && !isRightPressed.value) {
            setTimeout(() => {
              deactivateMagnifier()
            }, 0)
          }
        } else if (!isLeftPressed.value) {
          deactivateMagnifier()
        }
      }
    }
  }

  function createToggleModeStrategy() {
    return {
      handlePress(e: MouseEvent) {
        if (isLeftPressed.value && isRightPressed.value && state.currentImage) {
          handleDualButtonPress(e)
        } else if (isLeftPressed.value && !isRightPressed.value) {
          handleSingleButtonPress(e)
        }
      },
      
      handleRelease(e: MouseEvent) {
        clearPressTimer()
        
        if (!state.isActive) return
        
        if (e.button === 0) {
          if (!isWaitingForToggleEnd.value) {
            isWaitingForToggleEnd.value = true
            return
          }
          deactivateMagnifier()
          isWaitingForToggleEnd.value = false
        }
      }
    }
  }

  // 輔助函數
  function handleDualButtonPress(e: MouseEvent) {
    isMagnifierPending.value = true
    pressTimer.value = window.setTimeout(() => {
      if (isLeftPressed.value && isRightPressed.value) {
        isMagnifierActivating.value = true
        activateMagnifier(e)
        loadOriginalImage(state.currentImage!)
        state.isOriginalMode = true
      }
      isMagnifierPending.value = false
    }, config.longPressThreshold)
  }

  function handleSingleButtonPress(e: MouseEvent) {
    pressTimer.value = window.setTimeout(() => {
      if (isLeftPressed.value) {
        activateMagnifier(e)
        state.isOriginalMode = false
      }
    }, config.longPressThreshold)
  }

  function clearPressTimer() {
    if (pressTimer.value) {
      clearTimeout(pressTimer.value)
      pressTimer.value = undefined
    }
    isMagnifierPending.value = false
    isMagnifierActivating.value = false
  }

  function handleWheel(e: WheelEvent) {
    if (!state.isActive) return
    
    e.preventDefault()
    e.stopPropagation()
    
    updateScale(-Math.sign(e.deltaY) * config.scale.step)
  }

  function updatePosition(e: MouseEvent) {
    if (!state.isActive) return

    const movementX = e.pageX - state.lastPosition.x
    const movementY = e.pageY - state.lastPosition.y

    state.position = {
      x: state.position.x + (movementX * config.sensitivity.x),
      y: state.position.y + (movementY * config.sensitivity.y)
    }

    // 限制移動範圍
    state.position = {
      x: Math.max(0, Math.min(window.innerWidth, state.position.x)),
      y: Math.max(0, Math.min(window.innerHeight, state.position.y))
    }

    state.lastPosition = { x: e.pageX, y: e.pageY }
  }

  function updateScale(delta: number) {
    if (!state.isActive) return
    state.scale = Math.min(
      Math.max(
        state.scale + delta,
        config.scale.min
      ),
      config.scale.max
    )
  }

  function activateMagnifier(e: MouseEvent) {
    state.isActive = true
    state.position = {
      x: e.pageX,
      y: e.pageY
    }
    state.lastPosition = {
      x: e.pageX,
      y: e.pageY
    }
    state.scale = config.scale.default
    
    // 確保在啟動時就更新當前圖片
    updateCurrentImage()
    
    // 只有在有圖片的情況下才繼續
    if (state.currentImage) {
      updatePosition(e)
      paneImagesDiv.dataset.magnifierActive = 'true'
      document.body.classList.add('hide-cursor')
      

      const style = document.createElement('style')
      style.id = 'magnifier-style'
      style.textContent = `
        #pane_thumbs {
          display: none !important;
          pointer-events: none !important;
          visibility: hidden !important;
        }
      `
      document.head.appendChild(style)
    }
  }

  function deactivateMagnifier() {
    delete paneImagesDiv.dataset.magnifierActive
    state.isActive = false
    state.currentImage = null
    state.isOriginalMode = false
    state.isLoadingOriginal = false
    document.body.classList.remove('hide-cursor')
    getElement('#magnifier-style')?.remove()
  }

  async function loadOriginalImage(img: HTMLImageElement) {
    const mbar = img.closest('.mimg') as HTMLElement
    const originalLink = mbar && getElement<HTMLAnchorElement>('a[href*="/fullimg/"]', mbar)
    
    if (originalLink) {
      const originalUrl = originalLink.href
      const newImage = new Image()
      
      state.isLoadingOriginal = true
      state.loadingProgress = 0
      
      try {
        await new Promise((resolve, reject) => {
          GM_xmlhttpRequest({
            method: 'GET',
            url: originalUrl,
            responseType: 'blob',
            onprogress: (event) => {
              state.loadingProgress = (event.loaded / event.total) * 100
            },
            onload: (response) => {
              const blob = response.response
              const objectUrl = URL.createObjectURL(blob)
              newImage.onload = resolve
              newImage.onerror = reject
              newImage.src = objectUrl
            },
            onerror: reject
          })
        })
        
        img.src = newImage.src
        state.isLoadingOriginal = false
        return true
        
      } catch (error) {
        console.error('原圖加載失敗:', error)
        state.isLoadingOriginal = false
        return false
      }
    }
    return false
  }

  function updateCurrentImage() {
    const mouseY = state.position.y
    const images = paneImagesDiv.querySelectorAll<HTMLImageElement>('.mimg > a > img')
    
    if (!images.length) return
    
    if ((mouseY <= 0 || mouseY >= window.innerHeight) && state.currentImage) {
      return
    }
    
    for (const img of images) {
      const rect = img.getBoundingClientRect()
      if (mouseY >= rect.top + window.scrollY && 
          mouseY <= rect.bottom + window.scrollY) {
        state.currentImage = img
        return
      }
    }
    
    state.currentImage = null
  }

  function bindEvents() {
    paneImagesDiv.addEventListener('mousedown', (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.mbar')) {
        handlePress(e)
      }
    })
    
    window.addEventListener('mouseup', handleRelease)
    window.addEventListener('mousemove', updatePosition)
    
    const preventDefaultEvents = ['mousedown', 'click', 'contextmenu']
    preventDefaultEvents.forEach(eventName => {
      paneImagesDiv.addEventListener(eventName, (e: Event) => {
        if (state.isActive && !(e.target as HTMLElement).closest('.mbar')) {
          e.preventDefault()
          e.stopPropagation()
        }
      }, { capture: true })
    })
  }

  function unbindEvents() {
    paneImagesDiv.removeEventListener('mousedown', handlePress)
    window.removeEventListener('mouseup', handleRelease)
    window.removeEventListener('mousemove', updatePosition)


    const preventDefaultEvents = ['mousedown', 'click', 'contextmenu']
    preventDefaultEvents.forEach(eventName => {
      paneImagesDiv.removeEventListener(eventName, (e: Event) => {
        if (state.isActive) {
          e.preventDefault()
          e.stopPropagation()
        }
      }, { capture: true })
    })
  }

  return {
    bindEvents,
    unbindEvents,
    handleWheel,
    isMagnifierActivating,
    isMagnifierPending
  }
} 