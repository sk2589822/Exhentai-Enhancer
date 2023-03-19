import { ref } from 'vue'

import { getElement, getDoc } from '@/utils/commons'
import { Logger, LoggerScopeDecorator } from '@/utils/logger'

import useElement from './useElements'

const torrentInnerHtml = ref<string>('')
const archiveInnerHtml = ref<string>('')
const favoritesInnerHtml = ref<string>('')

const {
  archiveLinkAnchor,
  torrentLinkAnchor,
} = useElement()

/**
* 預先載入 Torrent, Archive 和 Favorites 視窗
* 同時把原先的 window.open() popup 改為在同一個頁面內的 popup
*/
export default function() {
  async function preloadLinks() {
    [
      archiveInnerHtml.value,
      torrentInnerHtml.value,
      favoritesInnerHtml.value,
    ] = await Promise.all([
      preloadArchiveLink(),
      preloadTorrentLink(),
      preloadFavoritesLink(),
    ])
  }

  async function preloadTorrentLink() {
    const logger = new LoggerScopeDecorator(new Logger('Preload Links'), 'Torrent')
    logger.log('Start')

    const link = getDownloadLink(torrentLinkAnchor as HTMLElement)
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
    const logger = new LoggerScopeDecorator(new Logger('Preload Links'), 'Archive')
    logger.log('Start')

    const link = getDownloadLink(archiveLinkAnchor)
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

  async function preloadFavoritesLink() {
    const logger = new LoggerScopeDecorator(new Logger('Preload Links'), 'Favorites')
    logger.log('Start')

    const link = getFavoritesLink()
    if (!link) {
      logger.error('link not found.')
      return ''
    }

    const doc = await getDoc(link)
    const popupContent = getPopupContent(doc, '.stuffbox')
    if (!popupContent) {
      logger.error('popup content not found.')
      return ''
    }

    logger.log('End')

    return popupContent.innerHTML
  }

  function getDownloadLink(linkElement: HTMLElement) {
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
    preloadLinks,
    torrentInnerHtml,
    archiveInnerHtml,
    favoritesInnerHtml,
  }
}

export function getFavoritesLink() {
  return `${location.origin}/gallerypopups.php?gid=${getGID()}&t=${getGalleryVersion()}&act=addfav`
}

export function getGID() {
  return location.pathname.split('/')[2]
}

export function getGalleryVersion() {
  return location.pathname.split('/')[3]
}
