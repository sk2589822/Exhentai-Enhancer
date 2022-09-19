import { getElement, getElements, getDoc, delay } from '@/utils/commons'
import { Logger, LoggerScopeDecorator } from '@/utils/logger'

const baseLogger = new Logger('Images')

let firstImagesOfRows: HTMLElement[] | null = null

/**
 * 若 gallery 的頁數超過1頁，在第1頁時，會依序載入後面的頁面
 */
async function fetchAllImages({ delayInMs = 3000 }: { delayInMs: number }) {
  const logger = new LoggerScopeDecorator(baseLogger, 'Fetch All')
  if (!isFirstPage()) {
    logger.log('Not first page, do nothing')
    return
  }

  logger.log('Start')
  const pageUrls = getPageUrls()

  if (!pageUrls) {
    return
  }

  if (pageUrls.length === 0) {
    logger.log('Only one page, do nothing')
    return
  }

  for (const url of pageUrls) {
    try {
      await delay(delayInMs)

      logger.log(`fetching ${url}`)
      const doc = await getDoc(url)
      const imageElements = getImageElements(doc)
      if (!imageElements) {
        return
      }

      appendImages(imageElements)
      firstImagesOfRows = getFirstImagesOfRows()
    } catch (error) {
      if (error instanceof Error) {
        logger.error(`fetch ${url} failed`, error)
      }
    }
  }

  logger.log('Done')

  function isFirstPage() {
    return getElement('.ptds')?.innerText === '1'
  }

  function getImageElements(doc: Document) {
    return getElements('.gdtl', doc)
  }

  function getPageUrls() {
    const lastPageElement = getElement('.ptt td:nth-last-child(2)')
    if (!lastPageElement) {
      logger.error('Get last page element failed')
      return
    }

    const pageCount = Number(lastPageElement.innerText)
    if (pageCount === 1) {
      return []
    }

    const { href } = window.location
    return Array(pageCount - 1)
      .fill('')
      .map((_, index) => `${href}?p=${index + 1}`)
  }

  function appendImages(elements: NodeListOf<HTMLElement>) {
    getElement('#gdt > .c')
      ?.before(...elements)
  }
}

/**
 * 在 images container 上滾滾輪時，直接定位到上/下一個 row
 */
function setImagesContainerWheelEvent() {
  const logger = new LoggerScopeDecorator(baseLogger, 'Wheel Event')

  const imagesContainer = getElement('#gdt')
  if (!imagesContainer) {
    logger.error('Images container not found')
    return
  }

  firstImagesOfRows = getFirstImagesOfRows()

  imagesContainer.addEventListener('mousewheel', ((event: WheelEvent) => {
    if (!firstImagesOfRows) {
      logger.error('firstImagesOfRows is Empty')
      return
    }
    const firstVisibleImageIndex = firstImagesOfRows
      .findIndex(image => image.getBoundingClientRect().bottom >= 0)

    const firstVisibleImage = firstImagesOfRows[firstVisibleImageIndex]
    const boundingTop = firstVisibleImage.getBoundingClientRect().top

    let nextIndex = firstVisibleImageIndex
    if (Math.sign(event.deltaY) === 1 && boundingTop <= 0) {
      nextIndex++
    } else if (Math.sign(event.deltaY) === -1 && boundingTop >= 0) {
      nextIndex--
    }

    if (nextIndex >= 0 && nextIndex < firstImagesOfRows.length) {
      event.preventDefault()
      event.stopPropagation()
      firstImagesOfRows[nextIndex].scrollIntoView()
    }
  }) as EventListener)
}

function getFirstImagesOfRows(): HTMLElement[] {
  // 沒有幫 RWD 做最佳化 (我用不到)
  const imagesContainer = getElement('#gdt') as HTMLDivElement
  const image = getElement('.gdtl') as HTMLDivElement
  const imagesPerRow = Math.floor(imagesContainer.clientWidth / image.clientWidth)

  const firstImagesOfRows = getElements(`.gdtl:nth-child(${imagesPerRow}n + 1)`)
  if (!firstImagesOfRows) {
    return []
  }

  return [...firstImagesOfRows]
}

export {
  fetchAllImages,
  setImagesContainerWheelEvent,
}
