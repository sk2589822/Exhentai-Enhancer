import { getElement, getElements, getDoc, delay } from '@/utils/commons'
import { Logger } from '@/utils/logger'

/**
 * 若 gallery 的頁數超過1頁，在第1頁時，會依序載入後面的頁面 (間隔3秒)
 */
async function fetchAllImages() {
  const logger = new Logger('Fetch All Images')

  logger.log('Start')
  const pageUrls = getPageUrls()

  if (pageUrls.length === 0) {
    logger.log('Only one page, do nothing')
    return
  }

  if (!isFirstPage()) {
    logger.log('Not first page, do nothing')
    return
  }

  for (const url of pageUrls) {
    try {
      await delay(3000)

      logger.log(`fetching ${url}`)
      const doc = await getDoc(url)
      const imageElements = getImageElements(doc)
      if (!imageElements) {
        return
      }

      appendImages(imageElements)
      // TODO: 把這個邏輯抽出去
      // firstImagesOfRows = getFirstImagesOfRows()
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
    // TODO: 自己產連結而不是用抓的
    const links = getElements('.ptb td:not(.ptds)') as NodeListOf<HTMLElement>
    const indexes = [...links]
    indexes.pop()
    indexes.shift()

    return indexes.map(elem => {
      const childNode = elem.children[0] as HTMLAnchorElement
      return childNode.href
    })
  }

  function appendImages(elements: NodeListOf<HTMLElement>) {
    getElement('#gdt > .c')
      ?.before(...elements)
  }
}

export default fetchAllImages
