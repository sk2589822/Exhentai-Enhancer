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

  function setDirectDownloadEvent() {
    const logger = new Logger('Archive Event')

    const downloadButtons = getElements<HTMLButtonElement>('form input[name="dlcheck"]')
    if (!downloadButtons) {
      logger.error('archive download buttons not found.')
      return
    }

    for (const button of downloadButtons) {
      button.addEventListener('click', async event => {
        event.preventDefault()
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

        const resolution = button.getAttribute('value')
        const originalText = button.value
        button.value = '⌛'
        await sendDownloadRequest(url, resolution)
        button.value = originalText
      })
    }

    async function sendDownloadRequest(url: string, resolution: string | null) {
      const resolutionParams = resolution === 'Download Original Archive'
        ? 'dlcheck=Download Original Archive&dltype=org'
        : 'dlcheck=Download Resample Archive&dltype=res'

      const response = await fetch(url, {
        method: 'POST',
        body: resolutionParams,
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
      })

      const html = await response.text()
      if (!html.includes('Locating archive server and preparing file for download...')) {
        toast.error('something went wrong. Open your console to see the response')
        console.warn('Download failed, response HTML:', html)
        return
      }

      const matches = html.match(/document\.location = "(.*)"/)
      if (!matches || matches?.length !== 2) {
        toast.error('something went wrong. Open your console to see the response')
        console.warn('Download failed, response HTML:', html)
        return
      }

      const downloadLink = `${matches[1]}?start=1`
      window.location.href = downloadLink
    }
  }

  return {
    setHentaiAtHomeEvent,
    setDirectDownloadEvent,
  }
}
