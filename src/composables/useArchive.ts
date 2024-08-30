import { useToast } from 'vue-toastification'
import { Ref } from 'vue'

import { useFetchPopups } from '@/composables/useFetchPopups'
import { getElement, getElements, getDoc } from '@/utils/commons'
import { Logger } from '@/utils/logger'
import { DownloadMethod } from '@/constants/monkey'
import { quickDownloadMethod } from '@/utils/GMVariables'

import { useHighlight } from './FrontPageEnhancer/useHighlight'

const toast = useToast()

export function useArchive() {
  const { setAsDownloaded } = useHighlight()

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
      const ORIGINAL_SIZE = 'org'
      const resolution = link.getAttribute('onclick')?.split('\'')?.[1] || ORIGINAL_SIZE
      link.removeAttribute('onclick')

      link.addEventListener('click', async event => {
        event.preventDefault()

        link.classList.add('is-fetching')

        const doc = await sendDownloadRequest(postUrl, resolution)
        const response = getElement('#db', doc)
        logger.log(response)

        const parsedResponse = parseResponse(response, logger)
        if (parsedResponse) {
          link.classList.remove('is-fetching')

          if (/download has been queued/.test(parsedResponse)) {
            toast.success(parsedResponse)
            link.classList.add('is-finished')
          } else {
            toast.error(parsedResponse)
          }
        }

        const gid = Number(new URL(postUrl).searchParams.get('gid'))
        setAsDownloaded(gid)
      })
    }
  }

  async function sendDownloadRequest(postUrl: string, resolution: string) {
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
        button.parentElement.classList.add('is-fetching')
        await sendDownloadRequest(url, resolution)
        button.parentElement.classList.remove('is-fetching')

        const gid = Number(new URL(url).searchParams.get('gid'))
        setAsDownloaded(gid)
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
      // TODO: open in new tab?
      window.location.href = downloadLink
    }
  }

  const { getInnerHTMLs } = useFetchPopups()
  const { archiveInnerHtml } = getInnerHTMLs()

  function setCancelArchiveEvent() {
    const logger = new Logger('Archive Event')

    const invalidateForm = getElement<HTMLElement>('#invalidate_form')
    if (!invalidateForm) {
      logger.log('no unlocked archive to invalidate.')
      return
    }
    const cancelButton = invalidateForm?.nextElementSibling?.children?.[2]

    if (!cancelButton || cancelButton.innerHTML !== 'cancel') {
      logger.log('no unlocked archive to invalidate.')
      return
    }

    cancelButton.removeAttribute('onclick')
    cancelButton.addEventListener('click', event => {
      event.preventDefault()

      cancelButton.innerHTML = 'canceling...'

      const url = invalidateForm.getAttribute('action') as string

      fetch(url, {
        method: 'POST',
        body: 'invalidate_sessions=1',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
      })
        .then(res => res.text())
        .then(text => {
          const html = new DOMParser().parseFromString(text, 'text/html')
          archiveInnerHtml.value = getElement('#db', html)?.innerHTML as string
          setTimeout(() => {
            setDirectDownloadEvent()
          }, 0)
        })
    })
  }

  // TODO: 直接 send request 而非操作 DOM
  function quickDownload(popup: Ref<HTMLElement | undefined>) {
    function getHaHDownloadLinkElement(downloadMethod: DownloadMethod.HaH_Original | DownloadMethod.HaH_2400) {
      const indexMap = {
        [DownloadMethod.HaH_Original]: 6,
        [DownloadMethod.HaH_2400]: 5,
      }
      const index = indexMap[downloadMethod]

      return getElement(`td:nth-child(${index}) > p > a`, popup.value)
    }

    switch (quickDownloadMethod.value) {
      case DownloadMethod.HaH_Original:
      case DownloadMethod.HaH_2400: {
        const downloadLinkElement = getHaHDownloadLinkElement(quickDownloadMethod.value)

        if (downloadLinkElement) {
          downloadLinkElement.click()
        } else {
          toast.warning(`Failed ${quickDownloadMethod.value}. The link might not exists.\n Open popup`)
          return false
        }

        break
      }

      case DownloadMethod.Direct_Origin:
        (getElement('input[value="Download Original Archive"]', popup.value) as HTMLElement).click()
        break

      case DownloadMethod.Direct_Resample:
        (getElement('input[value="Download Resample Archive"]', popup.value) as HTMLElement).click()
        break
    }

    return true
  }

  return {
    setHentaiAtHomeEvent,
    setDirectDownloadEvent,
    setCancelArchiveEvent,
    quickDownload,
  }
}
