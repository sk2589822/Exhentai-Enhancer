import { getElement } from '@/utils/commons'

export default function() {
  const paneImagesDiv = getElement('#pane_images') as HTMLElement
  const paneThumbsDiv = getElement('#pane_thumbs') as HTMLElement

  return {
    paneImagesDiv,
    paneThumbsDiv,
  }
}
