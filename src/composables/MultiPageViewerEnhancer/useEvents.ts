import { debounce } from 'lodash-es'
import { useFullscreen } from '@vueuse/core'
import { unsafeWindow } from 'vite-plugin-monkey/dist/client'

import { scrollElement } from '@/utils/commons'
import { usePages } from '@/composables/MultiPageViewerEnhancer/usePages'
import { useMultiPageViewerElements } from '@/composables/MultiPageViewerEnhancer/useMultiPageViewerElements'

const {
  pageCount,
  currentPage,
  getCurrentImage,
  goToPage,
  goToPageByOffset,
  goToNextPage,
  goToPrevPage,
  getRelativeToViewport,
  scrollToProperPosition,
} = usePages()

const {
  paneImagesDiv,
  paneThumbsDiv,
} = useMultiPageViewerElements()

setReflowTrigger()

// Ref: https://stackoverflow.com/a/66646270
// Not stable
function setReflowTrigger() {
  const observer = new ResizeObserver(entries => {
    for (const entry of entries) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          entry.target?.dispatchEvent(new CustomEvent('reflow'))
        })
      })
    }
  })

  observer.observe(document.body)
}

export function useEvents() {
  function setKeyBoardEvent() {
    document.onkeydown = null

    window.addEventListener('keydown', async event => {
      const isCtrlPressed = event.ctrlKey

      if (isCtrlPressed) {
        switch (event.code) {
          case 'ArrowLeft':
            goToPageByOffset(-10)
            break

          case 'ArrowRight':
            goToPageByOffset(10)
            break
        }
      } else {
        const currentImage = getCurrentImage()
        switch (event.code) {
          case 'Numpad8': // 置頂
            if (currentImage) {
              scrollElement(paneImagesDiv, {
                absolute: currentImage.offsetTop,
              })
            }
            break

          case 'Numpad5': // 置中
            if (currentImage) {
              scrollElement(paneImagesDiv, {
                absolute: currentImage.offsetTop + ((currentImage.offsetHeight - window.innerHeight) / 2),
              })
            }
            break

          case 'Numpad2': // 置底
            if (currentImage) {
              scrollElement(paneImagesDiv, {
                absolute: currentImage.offsetTop + currentImage.offsetHeight - window.innerHeight,
              })
            }
            break

          case 'ArrowUp':
            scrollElement(paneImagesDiv, { offset: -50 })
            break

          case 'ArrowDown':
            scrollElement(paneImagesDiv, { offset: 50 })
            break

          case 'ArrowLeft':
          case 'Numpad1':
          case 'Numpad4':
            goToPrevPage()
            break

          case 'Backspace':
            event.preventDefault()
            goToPrevPage()
            break

          case 'ArrowRight':
          case 'Numpad3':
          case 'Numpad6':
          case 'Space':
            goToNextPage()
            break

          case 'PageUp':
            goToPageByOffset(-10)
            break

          case 'PageDown':
            goToPageByOffset(10)
            break

          case 'Home':
            goToPage(1)
            break

          case 'End':
            goToPage(pageCount)
            break

          case 'KeyF':
          case 'Enter': {
            toggleFullScreen()
            break
          }

          case 'KeyR':
            unsafeWindow.action_reload(currentPage.value)
            break

          case 'Numpad7':
            rotate(-90)
            break

          case 'Numpad9':
            rotate(90)
            break
        }
      }
    })
  }

  function setClickEvent() {
    setChangePageClickEvent()
    setFullscreenToggleEvent()
    setThumbsClickEvent()

    /**
     * 點擊滑鼠左鍵 -> 下一頁
     * 點擊滑鼠右鍵 -> 上一頁
     */
    function setChangePageClickEvent() {
      const config = {
        click: goToNextPage,
        contextmenu: goToPrevPage,
      }

      for (const [event, action] of Object.entries(config)) {
        paneImagesDiv
          .addEventListener(event, event => {
            const target = event.target as HTMLElement

            // 點擊資訊列不動作
            if (target.closest('.mbar')) {
              return
            }

            event.preventDefault()
            event.stopPropagation()

            action()

            hideCursor(event as MouseEvent)
          })
      }
    }

    function setFullscreenToggleEvent() {
      document.body
        .addEventListener('mousedown', event => {
          // event.button === 1 => Middle button
          if (event.button !== 1) {
            return
          }

          const target = event.target as HTMLElement

          if (target.closest('.original-functions')) {
            return
          }

          document.body.addEventListener('mouseup', () => {
            toggleFullScreen()
          }, {
            once: true,
          })
        })
    }

    function setThumbsClickEvent() {
      paneThumbsDiv.addEventListener('click', event => {
        const index = Number(
          (event.target as HTMLElement)
            .closest('div')
            ?.id
            .replace('thumb_', ''),
        )

        currentPage.value = index
      })
    }
  }

  function setShowCursorEvent() {
    document.body
      .addEventListener('mousemove', event => {
        if (!checkMouseDelta(event)) {
          return
        }

        showCursor()
      })
  }

  function setHideCursorEvent() {
    document.body
      .addEventListener('mousewheel', event => {
        hideCursor(event as WheelEvent)
      }, true)

    const debouncedHideCursor = debounce(hideCursor, 1000)
    document.body
      .addEventListener('mousemove', event => {
        debouncedHideCursor(event)
      }, true)
  }

  const prevMousePoint = {
    x: 0,
    y: 0,
  }

  function checkMouseDelta({ clientX, clientY }: { clientX: number, clientY: number }) {
    const threshold = 50
    return (
      Math.abs(clientX - prevMousePoint.x) >= threshold ||
      Math.abs(clientY - prevMousePoint.y) >= threshold
    )
  }

  function showCursor() {
    document.body
      .classList
      .remove('hide-cursor')
  }

  function hideCursor({ clientX, clientY }: { clientX: number, clientY: number }) {
    prevMousePoint.x = clientX
    prevMousePoint.y = clientY

    document.body
      .classList
      .add('hide-cursor')
  }

  function setShowThumbsEvent() {
    document.addEventListener('mousemove', event => {
      const threshold = 15

      const shouldShowThumbs = event.clientX < paneThumbsDiv.offsetWidth + threshold
      paneThumbsDiv.style.opacity = shouldShowThumbs
        ? '1'
        : '0'
    })
  }

  const { toggle } = useFullscreen(document.body)

  async function toggleFullScreen() {
    const relativeToViewport = getRelativeToViewport()
    const page = currentPage.value
    document.body.addEventListener('reflow', () => {
      if (relativeToViewport) {
        setTimeout(() => {
          goToPage(page)
          setTimeout(() => {
            scrollToProperPosition(relativeToViewport)
          }, 0)
        }, 100)
      }
    }, {
      once: true,
    })

    await toggle()
  }

  function rotate(degree: number) {
    const currentImage = getCurrentImage()
    const currentDegree = Number(currentImage.style.rotate.replace('deg', ''))

    const newDegree = (currentDegree + degree) % 360
    currentImage.style.rotate = `${newDegree}deg`

    if (newDegree % 180 == 0) {
      currentImage.style.scale = 'initial'
    } else {
      const { width, height } = currentImage.getBoundingClientRect()
      currentImage.style.scale = (width / height).toString()
    }
  }

  return {
    setKeyBoardEvent,
    setClickEvent,
    setShowCursorEvent,
    setHideCursorEvent,
    setShowThumbsEvent,
  }
}
