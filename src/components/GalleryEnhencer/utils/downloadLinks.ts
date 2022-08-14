import { useToast } from 'vue-toastification'

import { getElement, getElements, getDoc } from '@/utils/commons'
import { Logger, LoggerScopeDecorator } from '@/utils/logger'

const baseLogger = new Logger('Preload Download Links')
const toast = useToast()

/**
* 預先載入 Torrent 和 Archive 視窗
* 同時把原先的 window.open() popup 改為在同一個頁面內的 popup
*/
async function preloadDownloadLinks() {
  await Promise.all([
    preloadTorrentLink(),
    preloadArchiveLink(),
  ])

  async function preloadTorrentLink() {
    const logger = new LoggerScopeDecorator(baseLogger, 'Torrent')
    logger.log('Start')

    const linkElement = getElement('#gd5 > p:nth-child(3) a')
    if (!linkElement) {
      logger.error('link element not found')
      return
    }

    const link = getLink(linkElement)
    if (!link) {
      logger.error('link not found.')
      return
    }

    const doc = await getDoc(link)
    const popupContent = getPopupContent(doc, '#torrentinfo > div:first-child')
    if (!popupContent) {
      logger.error('popup content not found.')
      return
    }

    linkElement.after(popupContent)
    linkElement.innerText += ' ✔️'

    if (linkElement.innerText === 'Torrent Download (1) ✔️') {
      setDownloadEvent(linkElement, popupContent)
    } else {
      setToggleEvent(linkElement, popupContent)
    }

    logger.log('End')

    return doc
  }

  async function preloadArchiveLink() {
    const logger = new Logger('Archive')
    logger.log('Start')

    const linkElement = getElement('#gd5 > p:nth-child(2) a')
    if (!linkElement) {
      logger.error('link element not found.')
      return
    }

    const link = getLink(linkElement)
    if (!link) {
      logger.error('link not found.')
      return
    }

    const doc = await getDoc(link)
    const popupContent = getPopupContent(doc, '#db')
    if (!popupContent) {
      logger.error('popup content not found.')
      return
    }

    linkElement.after(popupContent)
    linkElement.innerText += ' ✔️'

    setToggleEvent(linkElement, popupContent)

    logger.log('End')

    return doc
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

  function setDownloadEvent(linkElement: HTMLElement, popup: HTMLElement) {
    linkElement.removeAttribute('onclick')
    linkElement.addEventListener('click', e => {
      e.preventDefault()
      getElement('a', popup)?.click()
    })
  }

  function setToggleEvent(linkElement: HTMLElement, popup: HTMLElement) {
    linkElement.removeAttribute('onclick')
    linkElement.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()

      const showClass = 'popup--show'
      if (popup.classList.contains(showClass)) {
        popup.classList.remove(showClass)
      } else {
        popup.classList.add(showClass)
      }
    })
  }
}

/**
 * 重新實作 Hentai@Home 的下載事件
 *
 * 原本會開一個新的頁面，裡面有 submit form 的 function
 * 因為改用 preload 就沒辦法呼叫該 function，所以這邊要補實作
 */
function setHentaiAtHomeEvent() {
  const logger = new Logger('Hentai At Home Event')

  const hentaiAtHomeLinks = getElements('#db table td a')
  if (!hentaiAtHomeLinks) {
    logger.error('hentai@Home Links not found.')
    return
  }

  const postUrl = getElement('#hathdl_form')?.getAttribute('action')
  if (!postUrl) {
    logger.error('postUrl not found.')
    return
  }

  for (const link of hentaiAtHomeLinks) {
    link.removeAttribute('onclick')

    link.addEventListener('click', async () => {
      const doc = await sendDownloadRequest(link, postUrl)
      const response = getElement('#db', doc)
      logger.log(response)

      const parsedResponse = parseResponse(response, logger)
      if (parsedResponse) {
        showToast(parsedResponse)
      }
    })
  }
}

async function sendDownloadRequest(link: HTMLElement, postUrl: string) {
  const ORIGINAL_SIZE = 'org'
  const resolution = link?.getAttribute('onclick')?.split('\'')?.[1] || ORIGINAL_SIZE

  const parentElement = link.parentElement
  // HACK: 不加 setTimeout popup 會消失
  setTimeout(() => {
    if (parentElement) {
      parentElement.innerHTML = '⌛'
    }
  }, 0)

  const formData = new FormData()
  formData.append('hathdl_xres', resolution)
  const doc = await getDoc(postUrl, {
    method: 'POST',
    body: formData,
  })

  setTimeout(() => {
    if (parentElement) {
      parentElement.innerHTML = '✔️'
    }
  }, 0)

  return doc
}

function parseResponse(response: HTMLElement | null, logger: Logger) {
  if (!response) {
    logger.error('Failed to get response.')
    return null
  }

  if (!response.innerHTML) {
    logger.error('Failed to get response innerHTML.')
    return null
  }

  const result = response.innerHTML.match(/(?<=<p>)(.*?)(?=<\/p>)/g)

  if (!result) {
    logger.error('Failed to parse response.')
    return null
  }

  return result.join('\n').replace(/<strong>#\d+<\/strong>/, '')
}

function showToast(parsedResponse: string) {
  if (/download has been queued/.test(parsedResponse)) {
    toast.success(parsedResponse)
  } else {
    toast.error(parsedResponse)
  }
}

/**
 * 點擊 Archive 的下載按鈕時，將原本的下載視窗彈出
 *
 * 會做成彈窗是因為 Archive 的連結最後會連到不同 domain 的 url，會被 same origin 擋。
 */
function setArchiveEvent() {
  const logger = new LoggerScopeDecorator(baseLogger, 'Archive Event')

  const archiveDownloadButtons = getElements('form input[name="dlcheck"]')
  if (!archiveDownloadButtons) {
    logger.error('archive download buttons not found.')
    return
  }

  for (const button of archiveDownloadButtons) {
    button.addEventListener('click', e => {
      e.preventDefault()
      const buttonValue = button.getAttribute('value')
      const form = button?.parentElement?.parentElement
      if (!form) {
        logger.error('form not found.')
        return
      }

      const url = form.getAttribute('action')
      if (!url) {
        logger.error('url not found.')
        return
      }

      const popupWindow = openWindow(url) as Window
      popupWindow.addEventListener('load', () => {
        getElement(`input[value="${buttonValue}"]`, popupWindow.document)
          ?.click()
      })
    })
  }

  function openWindow(url: string) {
    const width = 600
    const height = 300
    const left = (screen.width - 600) / 2
    const top = (screen.height - 300) / 2
    const target = `_archive+${String(Math.random()).split('.')[1]}`

    return window.open(url, target, `width=${width},height=${height},top=${top},left=${left}`)
  }
}

function setClickOutsideEvent() {
  const logger = new LoggerScopeDecorator(baseLogger, 'Click Outside')
  document.addEventListener('click', e => {
    const popup = getElement('.popup--show')
    if (!popup) {
      logger.log('popup not found.')
      return
    }

    const target = e.target as Node

    if (popup.contains(target)) {
      return
    }

    popup.classList.remove('popup--show')
  })
}

export {
  preloadDownloadLinks,
  setHentaiAtHomeEvent,
  setArchiveEvent,
  setClickOutsideEvent,
}
