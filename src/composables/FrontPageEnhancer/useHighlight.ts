import {
  GM_getValue as gmGetValue,
  GM_setValue as gmSetValue,
  GM_addValueChangeListener as gmAddValueChangeListener,
} from 'vite-plugin-monkey/dist/client'

import { getElement } from '@/utils/commons'

export function useHighlight() {
  const downloadedGalleriesIDs: number[] = gmGetValue('downloaded-galleries-ids', [])

  function setAsDownloaded(galleryID: number) {
    highlight(galleryID)

    downloadedGalleriesIDs.push(galleryID)
    gmSetValue('downloaded-galleries-ids', downloadedGalleriesIDs)
  }

  function highlight(galleryID: number) {
    const galleryDiv = getElement(`div[gid="${galleryID}"]`)

    if (galleryDiv) {
      galleryDiv.style.backgroundColor = 'black'
    }
  }

  function highlightAll() {
    downloadedGalleriesIDs.forEach(highlight)

    gmAddValueChangeListener('downloaded-galleries-ids', (_key, _oldValue, newValue) => {
      (newValue as number[]).forEach(highlight)
    })
  }

  return {
    highlightAll,
    setAsDownloaded,
  }
}
