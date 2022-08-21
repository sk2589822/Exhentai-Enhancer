import usePages from './usePages'

const {
  goToPrevPage,
  goToNextPage,
} = usePages()

export default function() {
  /**
   * 只保留方向鍵的事件，且改寫左右鍵的方法
   */
  function overrideKeyBoardEvent() {
    document.onkeydown = e => {
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
      }
    }
  }

  return {
    overrideKeyBoardEvent,
  }
}
