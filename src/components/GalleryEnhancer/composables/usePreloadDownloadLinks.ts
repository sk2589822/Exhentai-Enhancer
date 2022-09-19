import { ref } from 'vue'

import { getElement, getDoc } from '@/utils/commons'
import { Logger, LoggerScopeDecorator } from '@/utils/logger'

import useElement from './useElements'

const baseLogger = new Logger('Preload Download Links')

const torrentInnerHtml = ref<string>('')
const archiveInnerHtml = ref<string>('')

const { archiveLinkAnchor, torrentLinkAnchor } = useElement()

/**
* 預先載入 Torrent 和 Archive 視窗
* 同時把原先的 window.open() popup 改為在同一個頁面內的 popup
*/
export default function() {
  async function preloadDownloadLinks() {
    [archiveInnerHtml.value, torrentInnerHtml.value] = await Promise.all([
      preloadArchiveLink(),
      preloadTorrentLink(),
    ])
  }

  async function preloadTorrentLink() {
    const logger = new LoggerScopeDecorator(baseLogger, 'Torrent')
    logger.log('Start')

    const link = getLink(torrentLinkAnchor as HTMLElement)
    if (!link) {
      logger.error('link not found.')
      return ''
    }

    const doc = await getDoc(link)
    const popupContent = getPopupContent(doc, '#torrentinfo > div:first-child')
    if (!popupContent) {
      logger.error('popup content not found.')
      return ''
    }

    logger.log('End')

    return popupContent.innerHTML
  }

  async function preloadArchiveLink() {
    const logger = new Logger('Archive')
    logger.log('Start')

    const link = getLink(archiveLinkAnchor)
    if (!link) {
      logger.error('link not found.')
      return ''
    }

    const doc = await getDoc(link)
    const popupContent = getPopupContent(doc, '#db')
    if (!popupContent) {
      logger.error('popup content not found.')
      return ''
    }

    logger.log('End')

    return popupContent.innerHTML
  }

  function getLink(linkElement: HTMLElement) {
    const onClick = linkElement.getAttribute('onclick')
    if (!onClick) {
      return null
    }

    return onClick.match(/(https:\/\/\S+)',\d+,\d+/)?.[1]
  }

  function getPopupContent(doc: Document, selector: string) {
    const content = getElement(selector, doc)
    if (!content) {
      return null
    }

    content.removeAttribute('style')
    content.classList.add('popup')
    return content
  }

  return {
    preloadDownloadLinks,
    torrentInnerHtml,
    archiveInnerHtml,
  }
}
