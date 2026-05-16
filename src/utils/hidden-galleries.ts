import {
  GM_getValue as gmGetValue,
  GM_setValue as gmSetValue,
  GM_addValueChangeListener as gmAddValueChangeListener,
} from 'vite-plugin-monkey/dist/client'

import { getElements } from '@/utils/commons'
import { showHiddenGalleriesSwitch } from '@/utils/gm-variables'

const HIDDEN_GALLERIES_KEY = 'hidden-galleries-titles'

let hiddenTitles = new Set<string>(gmGetValue(HIDDEN_GALLERIES_KEY, []))

export function getGalleryTitle(gallery: HTMLElement): string | null {
  const title = gallery.querySelector('.gl4t.glname')?.textContent?.trim()
  return title || null
}

export function isGalleryHidden(title: string): boolean {
  return hiddenTitles.has(title)
}

export function setGalleryHidden(title: string, hidden: boolean): void {
  if (hidden) {
    hiddenTitles.add(title)
  } else {
    hiddenTitles.delete(title)
  }
  gmSetValue(HIDDEN_GALLERIES_KEY, [...hiddenTitles])
}

export function removeHiddenGalleries(): void {
  if (showHiddenGalleriesSwitch.value) {
    return
  }

  const galleries = getElements('.gl1t')
  if (!galleries) {
    return
  }

  for (const gallery of [...galleries]) {
    const title = getGalleryTitle(gallery)
    if (title !== null && hiddenTitles.has(title)) {
      gallery.remove()
    }
  }
}

export function watchHiddenGalleries(callback: () => void): void {
  gmAddValueChangeListener(HIDDEN_GALLERIES_KEY, (_, __, nextValue) => {
    hiddenTitles = new Set<string>(nextValue as string[])
    callback()
  })
}
