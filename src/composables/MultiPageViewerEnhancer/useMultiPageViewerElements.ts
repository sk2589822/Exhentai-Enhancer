import { getElement } from '@/utils/commons'

export function useMultiPageViewerElements() {
  const paneImagesDiv = getElement('#pane_images') as HTMLElement
  const paneThumbsDiv = getElement('#pane_thumbs') as HTMLElement

  return {
    paneImagesDiv,
    paneThumbsDiv,
  }
}
