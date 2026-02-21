import {
  GM_getValue as gmGetValue,
  GM_setValue as gmSetValue,
  GM_addValueChangeListener as gmAddValueChangeListener,
} from 'vite-plugin-monkey/dist/client'

import { getElements } from '@/utils/commons'
import { highlightSwitch } from '@/utils/gm-variables'

const DOWNLOADED_GALLERIES_KEY = 'downloaded-galleries-ids'

export function watchDownloadedGalleries() {
  gmAddValueChangeListener(DOWNLOADED_GALLERIES_KEY, () => {
    highlightDownloadedGalleries()
  })
}

export function highlightDownloadedGalleries() {
  const downloadedGalleriesIDs = new Set<number>(gmGetValue(DOWNLOADED_GALLERIES_KEY, []))

  const galleries = getElements('.gl1t')
  if (!galleries) {
    return
  }

  [...galleries]
    .map(gallery => {
      try {
        // E.g. https://exhentai.org/g/3795778/20c70bf61d/
        // will be splitted into ['https:', '', 'exhentai.org', 'g', '3795778', '20c70bf61d', '']
        const id = Number(gallery.querySelector('a')?.href.split('/')[4])
        if (downloadedGalleriesIDs.has(id)) {
          return gallery
        }
      } catch {
        return null
      }
      return null
    })
    .filter(gallery => !!gallery)
    .forEach(gallery => {
      gallery.style.backgroundColor = 'black'
    })
}

export function setAsDownloaded(galleryID: number) {
  if (!highlightSwitch.value) {
    return
  }

  const downloadedGalleriesIDs: number[] = gmGetValue(DOWNLOADED_GALLERIES_KEY) || []
  downloadedGalleriesIDs.push(galleryID)
  gmSetValue(DOWNLOADED_GALLERIES_KEY, [...new Set(downloadedGalleriesIDs)])
}
