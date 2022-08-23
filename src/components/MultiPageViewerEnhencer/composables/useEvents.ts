import usePages from './usePages'
import useElements from './useElements'
import { scrollElement } from '@/utils/commons'

const {
  currentImage,
  goToPageByOffset,
  goToNextPage,
  goToPrevPage,
} = usePages()

const {
  paneImagesDiv,
  paneThumbsDiv,
} = useElements()

export default function() {
  function setKeyBoardEvent() {
    document.onkeydown = null

    window.addEventListener('keydown', event => {
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
        const top = (currentImage.value as HTMLElement).offsetTop
        const height = (currentImage.value as HTMLElement).offsetHeight
        switch (event.code) {
          case 'Numpad8': // 置頂
            scrollElement(paneImagesDiv.value, { absolute: top })
            break

          case 'Numpad5': // 置中
            scrollElement(paneImagesDiv.value, { absolute: top + ((height - window.innerHeight) / 2) })
            break

          case 'Numpad2': // 置底
            scrollElement(paneImagesDiv.value, { absolute: top + height - window.innerHeight })
            break

          case 'ArrowUp':
            scrollElement(paneImagesDiv.value, { offset: -50 })
            break

          case 'ArrowDown':
            scrollElement(paneImagesDiv.value, { offset: 50 })
            break

          case 'ArrowLeft':
          case 'Numpad1':
            goToPrevPage()
            break

          case 'ArrowRight':
          case 'Numpad3':
            goToNextPage()
            break

          case 'PageUp':
            goToPageByOffset(-10)
            break

          case 'PageDown':
            goToPageByOffset(10)
            break
        }
      }
    })
  }

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
      paneImagesDiv.value
        .addEventListener(event, e => {
          const target = e.target as HTMLElement

          // 點擊資訊列不動作
          if (target.closest('.mi1')) {
            return
          }

          e.preventDefault()
          e.stopPropagation()

          action()

          hideCursor(e as MouseEvent)
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
  //TODO: hide after stop

    document.body
      .addEventListener('mousewheel', event => {
        hideCursor(event as WheelEvent)
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
    document.addEventListener('mousemove', e => {
      const threshold = 15

      const shouldShowThumbs = e.clientX < paneThumbsDiv.value.offsetWidth + threshold
      paneThumbsDiv.value.style.opacity = shouldShowThumbs
        ? '1'
        : '0'
    })
  }

  return {
    setKeyBoardEvent,
    setChangePageClickEvent,
    setShowCursorEvent,
    setHideCursorEvent,
    setShowThumbsEvent,
  }
}
