import { ref } from 'vue'

import { getElement } from '@/utils/commons'

export default function() {
  const paneImagesDiv = ref<HTMLDivElement>(getElement('#pane_images') as HTMLDivElement)
  const paneThumbsDiv = ref<HTMLDivElement>(getElement('#pane_thumbs') as HTMLDivElement)

  return {
    paneImagesDiv,
    paneThumbsDiv,
  }
}
