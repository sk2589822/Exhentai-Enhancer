import {
  GM_getValue as gmGetValue,
  GM_setValue as gmSetValue,
  GM_addValueChangeListener as gmAddValueChangeListener,
} from 'vite-plugin-monkey/dist/client'

import { getElements } from '@/utils/commons'
import { showHiddenGalleriesSwitch } from '@/utils/gm-variables'

export const HIDDEN_GALLERIES_KEY = 'hidden-galleries-titles'

export class HiddenGalleries {
  private hiddenTitles = new Set<string>(gmGetValue(HIDDEN_GALLERIES_KEY, []))

  getGalleryTitle(gallery: HTMLElement): string | null {
    try {
      const title = gallery.querySelector('.gl4t.glname')?.textContent?.trim()
      if (!title) {
        return null
      }
      return title
    } catch {
      return null
    }
  }

  isGalleryHidden(title: string): boolean {
    return this.hiddenTitles.has(title)
  }

  setGalleryHidden(title: string, hidden: boolean): void {
    if (hidden) {
      this.hiddenTitles.add(title)
    } else {
      this.hiddenTitles.delete(title)
    }
    gmSetValue(HIDDEN_GALLERIES_KEY, [...this.hiddenTitles])
  }

  removeHiddenGalleries(): void {
    if (showHiddenGalleriesSwitch.value) {
      return
    }

    const galleries = getElements('.gl1t')
    if (!galleries) {
      return
    }

    for (const gallery of [...galleries]) {
      const title = this.getGalleryTitle(gallery)
      if (title !== null && this.hiddenTitles.has(title)) {
        gallery.remove()
      }
    }
  }

  watch(callback: () => void): void {
    gmAddValueChangeListener(HIDDEN_GALLERIES_KEY, (_, __, nextValue) => {
      this.hiddenTitles = new Set<string>(nextValue as string[])
      callback()
    })
  }
}
