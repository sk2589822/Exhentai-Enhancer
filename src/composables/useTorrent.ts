import { Ref } from 'vue'
import { GM_setClipboard } from 'vite-plugin-monkey/dist/client'

import { getElement } from '@/utils/commons'

export function useTorrent() {
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

  return {
    downloadTorrent,
    extractMagnetLink,
    addMagnetCopyButtons,
  }
}
