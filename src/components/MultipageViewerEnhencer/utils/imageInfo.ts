
import { getElement, getElements } from '@/utils/commons'

/**
 * 於圖片資訊欄新增目前頁數/總共頁數
 */
function appendPageIndex() {
  const imageContainers = getElements('.mi0') as NodeListOf<HTMLElement>
  const pageCount = imageContainers.length

  const mutationObserver = new MutationObserver(([mutation]) => {
    const target = mutation.target as HTMLElement
    const index = target.id.split('image_')[1]
    const captionElement = getElement('.mi4', target)
    const captionText = captionElement?.innerText

    if (!captionText || captionText?.includes(' ／ ')) {
      return
    }

    // eslint-disable-next-line no-irregular-whitespace
    captionElement.innerText = `${captionText}　-　${index} ／ ${pageCount}`
  })

  const config = { attributes: true }
  imageContainers.forEach(container => {
    mutationObserver.observe(container, config)
  })
}

export {
  appendPageIndex,
}
