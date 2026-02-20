import {
  GM_getValue as gmGetValue,
  GM_setValue as gmSetValue,
  GM_addValueChangeListener as gmAddValueChangeListener,
} from 'vite-plugin-monkey/dist/client'

import { getElement } from '@/utils/commons'
import { highlightSwitch } from '@/utils/GMVariables'

const DOWNLOADED_GALLERIES_KEY = 'downloaded-galleries-ids'

export function highlightDownloadedGalleries() {
  const downloadedGalleriesIDs: number[] = gmGetValue(DOWNLOADED_GALLERIES_KEY, [])
  downloadedGalleriesIDs.forEach(highlightGallery)

  gmAddValueChangeListener(DOWNLOADED_GALLERIES_KEY, (_key, _oldValue, newValue) => {
    (newValue as number[]).forEach(highlightGallery)
  })
}


export function setAsDownloaded(galleryID: number) {
  if (!highlightSwitch.value) {
    return
  }

  highlightGallery(galleryID)

  const downloadedGalleriesIDs: number[] = gmGetValue(DOWNLOADED_GALLERIES_KEY)
  downloadedGalleriesIDs.push(galleryID)
  gmSetValue(DOWNLOADED_GALLERIES_KEY, [...new Set(downloadedGalleriesIDs)])
}

export function highlightGallery(galleryID: number) {
  const galleryDiv = getElement(`div[gid="${galleryID}"]`)

  if (galleryDiv) {
    galleryDiv.style.backgroundColor = 'black'
  }
}
