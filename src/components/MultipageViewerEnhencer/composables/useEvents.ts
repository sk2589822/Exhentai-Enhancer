import usePages from './usePages'
import useElements from './useElements'

const {
  goToPageByOffset,
  goToNextPage,
  goToPrevPage,
} = usePages()

const {
  paneImagesDiv,
} = useElements()

export default function() {
  function overrideKeyBoardEvent() {
    document.onkeydown = e => {
      const isCtrlPressed = e.ctrlKey

      if (isCtrlPressed) {
        switch (e.code) {
          case 'ArrowLeft':
            goToPageByOffset(-10)
            break

          case 'ArrowRight':
            goToPageByOffset(10)
            break
        }
        return
      }

      switch (e.code) {
        case 'ArrowUp':
          window.scroll_relative('pane_images', 50)
          break

        case 'ArrowDown':
          window.scroll_relative('pane_images', -50)
          break

        case 'ArrowLeft':
          goToPrevPage()
          break

        case 'ArrowRight':
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
          setShowCursorEvent()
        })
    }
  }

  function setShowCursorEvent() {
    document.body
      .addEventListener('mousemove', function listener(event) {
        if (!checkMouseDelta(event)) {
          return
        }

        showCursor()
        document.body.removeEventListener('mousemove', listener)
      })
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
  return {
    overrideKeyBoardEvent,
    setChangePageClickEvent,
  }
}
