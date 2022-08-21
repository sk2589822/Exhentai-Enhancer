import usePages from './usePages'

const {
  goToPageByOffset,
  goToNextPage,
  goToPrevPage,
} = usePages()

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

  return {
    overrideKeyBoardEvent,
  }
}
