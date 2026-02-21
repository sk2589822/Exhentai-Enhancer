import type { Ref } from 'vue'
import { nextTick } from 'vue'
import { GM_setClipboard } from 'vite-plugin-monkey/dist/client'

import { getElement, getDoc } from '@/utils/commons'
import { Logger } from '@/utils/logger'

export function useTorrent(torrentInnerHtml: Ref<string>) {
  function downloadTorrent(popup: Ref<HTMLElement | undefined>) {
    getElement('a', popup.value)?.click()
  }

  /**
   * 從種子下載連結中提取 hash 並生成磁力連結
   * @param href 種子下載連結
   * @returns 磁力連結或 null
   */
  function extractMagnetLink(href: string): string | null {
    const match = href.match(/([0-9a-f]{40})/i)
    if (!match) {
      return null
    }

    const hash = match[1]
    return `magnet:?xt=urn:btih:${hash}`
  }

  /**
   * 在種子列表中新增複製磁力連結按鈕
   * @param popup torrent popup 的 ref
   */
  function addMagnetCopyButtons(popup: Ref<HTMLElement | undefined>) {
    if (!popup.value) {
      return
    }

    const tables = popup.value.querySelectorAll('form table')

    tables.forEach(table => {
      if (table.querySelector('[data-magnet-button]')) {
        return
      }

      const link = table.querySelector('a')
      if (!link?.href) {
        return
      }

      const magnet = extractMagnetLink(link.href)
      if (!magnet) {
        return
      }

      const insertionPoint = table.querySelector('input[type="submit"], button[type="submit"]')
      if (!insertionPoint) {
        return
      }

      const button = document.createElement('input')
      button.type = 'button'
      button.value = 'Copy Magnet'
      button.dataset.magnetButton = 'true'
      button.style.marginBottom = '4px'

      button.onclick = async () => {
        GM_setClipboard(magnet, 'text')
        button.value = '✅ Copied'
        button.disabled = true

        setTimeout(() => {
          button.disabled = false
          button.value = 'Copy Magnet'
        }, 1000)
      }

      insertionPoint.parentNode?.insertBefore(button, insertionPoint)
    })
  }

  /**
   * 攔截 torrent popup 內所有頁面的 form submit，改用 fetch 在 modal 內導航
   */
  function setTorrentPopupEvents(
    popup: Ref<HTMLElement | undefined>,
    onContentChanged: () => void,
  ) {
    if (!popup.value) return

    const logger = new Logger('Torrent Popup Events')
    let cachedHtml = ''

    bindListFormEvents()

    async function fetchAndUpdate(url: string, params: URLSearchParams) {
      const doc = await getDoc(url, { method: 'POST', body: params })
      const html = processInfoResponse(doc)
      if (!html) {
        logger.error('content not found in response.')
        return false
      }
      torrentInnerHtml.value = html
      return true
    }

    function buildParams(form: HTMLFormElement, submitter?: HTMLElement | null) {
      const params = new URLSearchParams()
      new FormData(form).forEach((value, key) => {
        params.append(key, value as string)
      })
      if (submitter instanceof HTMLInputElement || submitter instanceof HTMLButtonElement) {
        params.append(submitter.name, submitter.value)
      }
      return params
    }

    function processInfoResponse(doc: Document): string | null {
      const content = getElement('#torrentinfo', doc)
        || getElement('.stuffbox', doc)

      if (!content) return null

      content.removeAttribute('style')

      const styles = doc.querySelectorAll('head style')
      let styleHtml = ''
      styles.forEach(style => {
        styleHtml += style.outerHTML
      })

      return styleHtml + content.innerHTML
    }

    function bindListFormEvents() {
      if (!popup.value) return

      const forms = popup.value.querySelectorAll('form')
      forms.forEach(form => {
        // 上傳表單跨域，不攔截，改在新分頁開啟
        if (form.enctype === 'multipart/form-data') {
          form.target = '_blank'
          return
        }

        form.addEventListener('submit', async event => {
          event.preventDefault()
          const submitter = (event as SubmitEvent).submitter
          if (!submitter) return

          const url = form.getAttribute('action')
          if (!url) {
            logger.error('form action not found.')
            return
          }

          cachedHtml = torrentInnerHtml.value

          try {
            const success = await fetchAndUpdate(url, buildParams(form, submitter))
            if (success) {
              await nextTick()
              bindInfoPageEvents()
            } else {
              cachedHtml = ''
            }
          } catch (error) {
            if (error instanceof Error) {
              logger.error('failed to fetch torrent info.', error)
            }
            cachedHtml = ''
          }
        })
      })
    }

    function bindInfoPageEvents() {
      if (!popup.value) return

      // 通用處理所有 form submit（Back to Index、Modify、Cancel 等）
      const forms = popup.value.querySelectorAll<HTMLFormElement>('form:not(#expungeform)')
      forms.forEach(form => {
        form.addEventListener('submit', async event => {
          event.preventDefault()
          const submitter = (event as SubmitEvent).submitter

          // Back to Index → 還原種子列表
          if (submitter instanceof HTMLInputElement && submitter.name === 'list') {
            const html = cachedHtml
            cachedHtml = ''
            torrentInnerHtml.value = html
            await nextTick()
            onContentChanged()
            bindListFormEvents()
            return
          }

          // 其他 submit（Modify、Cancel 等）→ fetch 並顯示回應
          const url = form.getAttribute('action')
          if (!url) return

          const success = await fetchAndUpdate(url, buildParams(form, submitter))
          if (success) {
            await nextTick()
            bindInfoPageEvents()
          }
        })
      })

      // Delete / Expunge（原站用 onclick + form.submit() 繞過 submit event）
      const expungeLink = popup.value.querySelector<HTMLElement>('[onclick*="expungeform"]')
      if (expungeLink) {
        const isDelete = expungeLink.textContent?.includes('Delete')
        const message = isDelete
          ? 'Are you sure you wish to delete this torrent? This action cannot be undone.'
          : 'Are you sure you wish to expunge this torrent? This action cannot be undone.'

        expungeLink.removeAttribute('onclick')
        expungeLink.addEventListener('click', async event => {
          event.preventDefault()
          if (!confirm(message)) return

          const form = popup.value?.querySelector<HTMLFormElement>('#expungeform')
          const url = form?.getAttribute('action')
          if (!form || !url) return

          const success = await fetchAndUpdate(url, buildParams(form))
          if (success) {
            await nextTick()
            bindInfoPageEvents()
          }
        })
      }
    }
  }

  return {
    downloadTorrent,
    extractMagnetLink,
    addMagnetCopyButtons,
    setTorrentPopupEvents,
  }
}
