import { useToast } from 'vue-toastification'

import { getElement, getElements, getDoc } from '@/utils/commons'
import { Logger } from '@/utils/logger'

const toast = useToast()

export default function() {
  /**
   * 重新實作 Hentai@Home 的下載事件
   *
   * 原本會開一個新的頁面，裡面有 submit form 的 function
   * 因為改用 preload 就沒辦法呼叫該 function，所以這邊要補實作
   */
  function setHentaiAtHomeEvent() {
    const logger = new Logger('Hentai At Home Event')

    const hentaiAtHomeLinks = getElements('.popup--archive table td a')
    if (!hentaiAtHomeLinks?.length) {
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

      link.addEventListener('click', async event => {
        event.preventDefault()

        const originalText = replaceLinkByLoadingIcon(link)

        const doc = await sendDownloadRequest(link, postUrl)
        const response = getElement('#db', doc)
        logger.log(response)

        const parsedResponse = parseResponse(response, logger)
        if (parsedResponse) {
          if (/download has been queued/.test(parsedResponse)) {
            toast.success(parsedResponse)
            replaceLinkByCheckIcon(link)
          } else {
            toast.error(parsedResponse)
            resetLink(link, originalText)
          }
        }
      })
    }
  }

  function replaceLinkByLoadingIcon(element: HTMLElement) {
    const originalText = element.innerText
    // HACK: 不加 setTimeout popup 會消失
    setTimeout(() => {
      element.innerText = '⌛'
    }, 0)
    element.style.pointerEvents = 'none'
    element.style.textDecoration = 'none'

    return originalText
  }

  function replaceLinkByCheckIcon(element: HTMLElement) {
    // HACK: 不加 setTimeout popup 會消失
    setTimeout(() => {
      element.innerText = '✔️'
    }, 0)
  }

  function resetLink(element: HTMLElement, originalText: string) {
    element.innerText = originalText
    element.style.pointerEvents = 'auto'
    element.style.textDecoration = 'underline'
  }

  async function sendDownloadRequest(link: HTMLElement, postUrl: string) {
    const ORIGINAL_SIZE = 'org'
    const resolution = link?.getAttribute('onclick')?.split('\'')?.[1] || ORIGINAL_SIZE

    const formData = new FormData()
    formData.append('hathdl_xres', resolution)
    const doc = await getDoc(postUrl, {
      method: 'POST',
      body: formData,
    })

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

  /**
   * 點擊 Archive 的下載按鈕時，將原本的下載視窗彈出
   *
   * 會做成彈窗是因為 Archive 的連結最後會連到不同 domain 的 url，會被 same origin 擋。
   */
  function setDirectDownloadEvent() {
    const logger = new Logger('Archive Event')

    const downloadButtons = getElements('form input[name="dlcheck"]')
    if (!downloadButtons) {
      logger.error('archive download buttons not found.')
      return
    }

    for (const button of downloadButtons) {
      button.addEventListener('click', event => {
        event.preventDefault()
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

  return {
    setHentaiAtHomeEvent,
    setDirectDownloadEvent,
  }
}
