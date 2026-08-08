import { useToast } from 'vue-toastification'
import type { Ref } from 'vue'

import { usePopups } from '@/composables/usePopups'
import { getElement, getElements, getDoc } from '@/utils/commons'
import { Logger } from '@/utils/logger'
import { ArchiveDownloadMethod, quickArchiveDownloadMethod } from '@/utils/gm-variables'
import { setAsDownloaded } from '@/utils/highlight-galleries'
import { getArchiveLinkAnchor } from '@/components/Gallery/utils/elements'

/**
 * archiver 的下載類型，對應 download form 內 hidden input `dltype` 的值
 */
export type ArchiveDownloadType = 'org' | 'res'

const DOWNLOAD_LABELS: Record<ArchiveDownloadType, string> = {
  org: 'Download Original Archive',
  res: 'Download Resample Archive',
}

const DOWNLOAD_ACCEPTED_TEXT = 'Locating archive server and preparing file for download...'

const HAH_ORIGINAL_RESOLUTION = 'org'

/**
 * quick download 的設定值對應的 H@H 解析度，值就是 archiver 的 `hathdl_xres`
 *
 * 這份清單只決定「設定面板上提供哪些選項」。某一本 gallery 實際提供哪些解析度，
 * 要看 archiver 頁面上有沒有對應的連結 —— 不提供的那格會變灰而且連 `<a>` 都沒有
 */
const HAH_RESOLUTIONS: Partial<Record<ArchiveDownloadMethod, string>> = {
  [ArchiveDownloadMethod.HaH_Original]: HAH_ORIGINAL_RESOLUTION,
  [ArchiveDownloadMethod.HaH_800]: '800',
  [ArchiveDownloadMethod.HaH_1280]: '1280',
  [ArchiveDownloadMethod.HaH_1920]: '1920',
  [ArchiveDownloadMethod.HaH_2560]: '2560',
}

/**
 * 綁定事件時會把解析度記到這個屬性上
 *
 * 因為綁定的同時就把 `onclick` 移除了，之後想知道某個連結是哪個解析度只能靠它
 */
const HAH_RESOLUTION_ATTRIBUTE = 'data-hathdl-xres'

/**
 * 顯示給使用者看的解析度名稱，與 archiver 表格上的欄位標題一致
 */
function getResolutionLabel(resolution: string) {
  return resolution === HAH_ORIGINAL_RESOLUTION ? 'Original' : `${resolution}x`
}

const INLINE_CANCEL_CLASS = 'enhancer-archive-cancel'

/**
 * 原生頁面上不會有「You unlocked ...」那句話當上下文，所以不沿用站方的 `cancel`
 */
const INLINE_CANCEL_LABEL = 'Invalidate Archive'
const INLINE_CANCEL_PENDING_LABEL = 'Invalidating...'

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
 * 從 archiver 頁面找出指定下載類型的 form action
 */
function getDirectDownloadUrl(root: Document | HTMLElement, dltype: ArchiveDownloadType) {
  return getElement(`form input[name="dltype"][value="${dltype}"]`, root)
    ?.closest('form')
    ?.getAttribute('action') ?? null
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
      const resolution = link.getAttribute('onclick')?.split('\'')?.[1] || HAH_ORIGINAL_RESOLUTION
      link.removeAttribute('onclick')
      link.setAttribute(HAH_RESOLUTION_ATTRIBUTE, resolution)

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

    // session 已失效，原生頁面上那顆 cancel 就沒有意義了
    if (!hasArchiveSession(doc)) {
      getElement(`.${INLINE_CANCEL_CLASS}`)?.remove()
    }

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

  /**
   * 先取消現有的 archive session，再重新下載
   *
   * 下載用的 form action 直接從取消後的回應解析，所以不需要等 popup 重新 render
   */
  async function cancelThenDownload(dltype: ArchiveDownloadType) {
    const logger = new Logger('Archive Event')

    const doc = await cancelArchiveSession()
    if (!doc) {
      logger.error('failed to cancel the archive session.')
      return false
    }

    refreshArchivePopup(doc)

    const url = getDirectDownloadUrl(doc, dltype)
    if (!url) {
      logger.error('download form not found after cancelling the archive session.')
      return false
    }

    return startDirectDownload(url, dltype)
  }

  /**
   * 在原生頁面的 Archive Download 下方插入一個 cancel 連結
   *
   * 刻意插在 Archive Download 那個 <p> 內部而不是新增一個 <p>，
   * 因為 #gd5 的連結是用 nth-child 選取的（見 Gallery/utils/elements.ts），
   * 多一個 <p> 會讓 Torrent Download 的 selector 失效
   */
  function setInlineCancelButton() {
    const logger = new Logger('Archive Event')

    const row = getArchiveLinkAnchor()?.parentElement
    if (!row) {
      logger.error('archive download row not found.')
      return
    }

    const wrapper = document.createElement('span')
    wrapper.className = INLINE_CANCEL_CLASS

    const button = document.createElement('a')
    button.href = '#'
    button.textContent = INLINE_CANCEL_LABEL
    wrapper.appendChild(button)
    row.appendChild(wrapper)

    button.addEventListener('click', async event => {
      event.preventDefault()
      event.stopPropagation()

      button.textContent = INLINE_CANCEL_PENDING_LABEL

      const doc = await cancelArchiveSession()
      if (!doc) {
        logger.error('failed to cancel the archive session.')
        button.textContent = INLINE_CANCEL_LABEL
        return
      }

      // refreshArchivePopup 會在 session 失效後移除 wrapper
      refreshArchivePopup(doc)
    })
  }

  /**
   * 點擊 popup 內對應解析度的 H@H 連結
   *
   * 不用位置選取。站方改過解析度階梯，而且不提供的解析度那格沒有 `<a>`，
   * 所以「第幾格」和「哪個解析度」之間沒有固定關係
   */
  function startHentaiAtHomeDownload(popup: Ref<HTMLElement | undefined>, resolution: string) {
    const logger = new Logger('Archive Event')

    const link = getElement(`[${HAH_RESOLUTION_ATTRIBUTE}="${resolution}"]`, popup.value)
    if (link) {
      link.click()
      return true
    }

    // 找得到其他解析度，就表示事件綁好了、只是這本 gallery 不提供這一階
    if (getElements(`[${HAH_RESOLUTION_ATTRIBUTE}]`, popup.value)?.length) {
      toast.warning(`This gallery doesn't offer H@H ${getResolutionLabel(resolution)}.\n Open popup`)
      return false
    }

    logger.error('hentai@Home links not found.')
    toast.error('Failed to find the H@H links.\n Open popup')
    return false
  }

  // TODO: 直接 send request 而非操作 DOM
  function quickDownload(popup: Ref<HTMLElement | undefined>) {
    const logger = new Logger('Archive Event')

    const resolution = HAH_RESOLUTIONS[quickArchiveDownloadMethod.value]
    if (resolution) {
      return startHentaiAtHomeDownload(popup, resolution)
    }

    const dltype = getArchiveDownloadType(quickArchiveDownloadMethod.value)
    if (!dltype) {
      return true
    }

    const downloadButton = getElement(`input[value="${DOWNLOAD_LABELS[dltype]}"]`, popup.value)
    if (!downloadButton) {
      logger.error(`download button for "${dltype}" not found.`)
      return false
    }

    downloadButton.click()
    return true
  }

  return {
    setHentaiAtHomeEvent,
    setDirectDownloadEvent,
    setCancelArchiveEvent,
    cancelThenDownload,
    setInlineCancelButton,
    quickDownload,
  }
}
