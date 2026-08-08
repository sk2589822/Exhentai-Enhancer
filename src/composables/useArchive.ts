import { useToast } from 'vue-toastification'
import type { Ref } from 'vue'

import { usePopups } from '@/composables/usePopups'
import { getElement, getElements, getDoc } from '@/utils/commons'
import { Logger } from '@/utils/logger'
import { ArchiveDownloadMethod, quickArchiveDownloadMethod } from '@/utils/gm-variables'
import { setAsDownloaded } from '@/utils/highlight-galleries'

/**
 * archiver 的下載類型，對應 download form 內 hidden input `dltype` 的值
 */
export type ArchiveDownloadType = 'org' | 'res'

const DOWNLOAD_LABELS: Record<ArchiveDownloadType, string> = {
  org: 'Download Original Archive',
  res: 'Download Resample Archive',
}

const DOWNLOAD_ACCEPTED_TEXT = 'Locating archive server and preparing file for download...'

/**
 * archiver 只在存在未失效的 archive session 時才會輸出 #invalidate_form
 */
function getInvalidateForm(root: Document | HTMLElement = document) {
  return getElement('#invalidate_form', root)
}

/**
 * 目前是否存在未失效的 archive session（也就是「已經付費解鎖過、還沒 cancel」）
 */
export function hasArchiveSession(root: Document | HTMLElement = document) {
  return !!getInvalidateForm(root)
}

/**
 * archiver 原生的 cancel 連結
 *
 * 不用位置選取，因為它前面的文案
 * （`You unlocked an <strong>...</strong> download of this archive on <strong>...</strong>`）
 * 隨時可能改，多一個或少一個 element 就會選錯
 */
function getCancelButton(root: Document | HTMLElement = document) {
  return getElement('a[onclick*="cancel_sessions"]', root)
}

/**
 * 把 quick download 的設定值轉成 archiver 的 dltype
 *
 * @returns 非「直接下載」的設定值回傳 null
 */
export function getArchiveDownloadType(method: ArchiveDownloadMethod): ArchiveDownloadType | null {
  switch (method) {
    case ArchiveDownloadMethod.Direct_Origin:
      return 'org'

    case ArchiveDownloadMethod.Direct_Resample:
      return 'res'

    default:
      return null
  }
}

/**
 * 取消目前的 archive session
 *
 * @returns 取消後的 archiver 頁面，找不到 #invalidate_form 時回傳 null
 */
async function cancelArchiveSession() {
  const url = getInvalidateForm()?.getAttribute('action')
  if (!url) {
    return null
  }

  return getDoc(url, {
    method: 'POST',
    body: 'invalidate_sessions=1',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  })
}

type DirectDownloadResult =
  | { success: true, downloadUrl: string }
  | { success: false, html: string }

/**
 * 送出直接下載的請求並取得檔案位置，不碰任何 DOM
 */
async function requestDirectDownload(url: string, dltype: ArchiveDownloadType): Promise<DirectDownloadResult> {
  const response = await fetch(url, {
    method: 'POST',
    body: new URLSearchParams({ dlcheck: DOWNLOAD_LABELS[dltype], dltype }).toString(),
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  })

  const html = await response.text()
  if (!html.includes(DOWNLOAD_ACCEPTED_TEXT)) {
    return { success: false, html }
  }

  const matches = html.match(/document\.location = "(.*)"/)
  if (matches?.length !== 2) {
    return { success: false, html }
  }

  return { success: true, downloadUrl: `${matches[1]}?start=1` }
}

function getGalleryID(url: string) {
  return Number(new URL(url).searchParams.get('gid'))
}

export function useArchive() {
  const toast = useToast()

  const { archiveInnerHtml } = usePopups()

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

        setAsDownloaded(getGalleryID(postUrl))
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

  /**
   * 送出下載請求並導向檔案，失敗時回報並保留在原頁面
   */
  async function startDirectDownload(url: string, dltype: ArchiveDownloadType) {
    const result = await requestDirectDownload(url, dltype)

    if (!result.success) {
      toast.error('something went wrong. Open your console to see the response')
      console.warn('Download failed, response HTML:', result.html)
      return false
    }

    // TODO: open in new tab?
    window.location.href = result.downloadUrl
    return true
  }

  function setDirectDownloadEvent() {
    const logger = new Logger('Archive Event')

    const downloadButtons = getElements<HTMLInputElement>('form input[name="dlcheck"]')
    if (!downloadButtons) {
      logger.error('archive download buttons not found.')
      return
    }

    for (const button of downloadButtons) {
      button.addEventListener('click', async event => {
        event.preventDefault()

        const form = button.closest('form')
        if (!form) {
          logger.error('form not found.')
          return
        }

        const url = form.getAttribute('action')
        if (!url) {
          logger.error('url not found.')
          return
        }

        const dltype = getElement<HTMLInputElement>('input[name="dltype"]', form)?.value as ArchiveDownloadType | undefined
        if (!dltype) {
          logger.error('dltype not found.')
          return
        }

        const wrapper = button.parentElement
        wrapper?.classList.add('is-fetching')
        await startDirectDownload(url, dltype)
        wrapper?.classList.remove('is-fetching')

        setAsDownloaded(getGalleryID(url))
      })
    }
  }

  /**
   * 用取消後的 archiver 頁面換掉 popup 內容，並重新綁定新 DOM 上的事件
   */
  function refreshArchivePopup(doc: Document) {
    archiveInnerHtml.value = getElement('#db', doc)?.innerHTML ?? ''

    // 等 v-html 重新 render 完才抓得到新的 DOM
    setTimeout(() => {
      setHentaiAtHomeEvent()
      setDirectDownloadEvent()
    }, 0)
  }

  function setCancelArchiveEvent() {
    const logger = new Logger('Archive Event')

    const cancelButton = getCancelButton()
    if (!cancelButton) {
      logger.log('no unlocked archive to invalidate.')
      return
    }

    cancelButton.removeAttribute('onclick')
    cancelButton.addEventListener('click', async event => {
      event.preventDefault()

      cancelButton.innerHTML = 'canceling...'

      const doc = await cancelArchiveSession()
      if (!doc) {
        logger.error('failed to cancel the archive session.')
        cancelButton.innerHTML = 'cancel'
        return
      }

      refreshArchivePopup(doc)
    })
  }

  // TODO: 直接 send request 而非操作 DOM
  function quickDownload(popup: Ref<HTMLElement | undefined>) {
    function getHaHDownloadLinkElement(downloadMethod: ArchiveDownloadMethod.HaH_Original | ArchiveDownloadMethod.HaH_2400) {
      const indexMap = {
        [ArchiveDownloadMethod.HaH_Original]: 6,
        [ArchiveDownloadMethod.HaH_2400]: 5,
      }
      const index = indexMap[downloadMethod]

      return getElement(`td:nth-child(${index}) > p > a`, popup.value)
    }

    switch (quickArchiveDownloadMethod.value) {
      case ArchiveDownloadMethod.HaH_Original:
      case ArchiveDownloadMethod.HaH_2400: {
        const downloadLinkElement = getHaHDownloadLinkElement(quickArchiveDownloadMethod.value)

        if (downloadLinkElement) {
          downloadLinkElement.click()
        } else {
          toast.warning(`Failed ${quickArchiveDownloadMethod.value}. The link might not exists.\n Open popup`)
          return false
        }

        break
      }

      case ArchiveDownloadMethod.Direct_Origin:
        (getElement('input[value="Download Original Archive"]', popup.value) as HTMLElement).click()
        break

      case ArchiveDownloadMethod.Direct_Resample:
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
