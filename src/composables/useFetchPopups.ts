import { ref } from 'vue'

import { getElement, getDoc } from '@/utils/commons'
import { Logger, LoggerScopeDecorator } from '@/utils/logger'
import { useGalleryElements } from '@/composables/GalleryEnhancer/useGalleryElements'

export const torrentInnerHtml = ref<string>('')
export const archiveInnerHtml = ref<string>('')
export const favoriteInnerHtml = ref<string>('')

/**
* 預先載入 Torrent, Archive 和 Favorites 視窗
* 同時把原先的 window.open() popup 改為在同一個頁面內的 popup
*/

export function useFetchPopups() {
  const {
    archiveLinkAnchor,
    torrentLinkAnchor,
  } = useGalleryElements()

  function getInnerHTMLs() {
    return {
      torrentInnerHtml,
      archiveInnerHtml,
      favoriteInnerHtml,
    }
  }

  async function preloadLinks() {
    [
      archiveInnerHtml.value,
      torrentInnerHtml.value,
      favoriteInnerHtml.value,
    ] = await Promise.all([
      fetchArchive(),
      fetchTorrents(),
      fetchFavorites(),
    ])
  }

  async function fetchTorrents() {
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

  async function fetchArchive(url?: string) {
    const logger = new LoggerScopeDecorator(new Logger('Preload Links'), 'Archive')
    logger.log('Start')

    const link = url || getDownloadLink(archiveLinkAnchor)
    console.log('🚀 ~ fetchArchive ~ link:', link)
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

  async function fetchFavorites() {
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

  function getFavoritesLink() {
    return `${location.origin}/gallerypopups.php?gid=${getGID()}&t=${getGalleryVersion()}&act=addfav`
  }

  function getGID() {
    return location.pathname.split('/')[2]
  }

  function getGalleryVersion() {
    return location.pathname.split('/')[3]
  }

  return {
    getInnerHTMLs,
    preloadLinks,
    fetchTorrents,
    fetchArchive,
    fetchFavorites,
    getDownloadLink,
    getPopupContent,
    getFavoritesLink,
    getGID,
    getGalleryVersion,
  }
}

