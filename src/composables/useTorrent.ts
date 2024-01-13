import { Ref } from 'vue'

import { getElement } from '@/utils/commons'

export function useTorrent() {
  function downloadTorrent(popup: Ref<HTMLElement | undefined>) {
    getElement('a', popup.value)?.click()
  }

  return {
    downloadTorrent,
  }
}
