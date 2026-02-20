import { getElement } from '@/utils/commons'

export function getPaneOuterDiv() {
  return getElement('#pane_outer') as HTMLElement
}

export function getPaneImagesDiv() {
  return getElement('#pane_images') as HTMLElement
}

export function getPaneThumbsDiv() {
  return getElement('#pane_thumbs') as HTMLElement
}
