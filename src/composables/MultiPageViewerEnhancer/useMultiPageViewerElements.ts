import { getElement } from '@/utils/commons'

export function useMultiPageViewerElements() {
  const paneOuterDiv = getElement('#pane_outer') as HTMLElement
  const paneImagesDiv = getElement('#pane_images') as HTMLElement
  const paneThumbsDiv = getElement('#pane_thumbs') as HTMLElement

  return {
    paneOuterDiv,
    paneImagesDiv,
    paneThumbsDiv,
  }
}
