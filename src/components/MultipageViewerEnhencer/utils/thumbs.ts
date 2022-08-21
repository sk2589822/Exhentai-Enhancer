
import { getElement } from '@/utils/commons'
import { Logger } from '@/utils/logger'

const logger = new Logger('Thumbs')

/**
 * 滑鼠移到左方時顯示縮圖清單
 */
function showThumbsWhenHover() {
  const paneThumbs = getElement('#pane_thumbs')
  if (!paneThumbs) {
    logger.error('paneThumbs not found.')
    return
  }

  document.addEventListener('mousemove', e => {
    const shouldShowThumbs = e.clientX < paneThumbs.offsetWidth + 15
    paneThumbs.style.opacity = shouldShowThumbs
      ? '1'
      : '0'
  })
}

export {
  showThumbsWhenHover,
}
