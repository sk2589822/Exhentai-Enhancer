import { ref } from 'vue'
import { useResizeObserver } from '@vueuse/core'

import useElement from './useElements'

export default function() {
  const { archiveLinkAnchor, torrentLinkAnchor, infoDiv } = useElement()

  const rightWithPx = ref('0')
  useResizeObserver(document.documentElement, () => {
    if (!infoDiv.value) {
      return
    }
    rightWithPx.value = `${(document.documentElement.clientWidth - infoDiv.value.clientWidth) / 2}px`
  })

  const archiveTopWithPx = ref('0')
  ;(() => {
    const { top, height } = archiveLinkAnchor.value.getBoundingClientRect()
    archiveTopWithPx.value = `${top + height + 5}px`
  })()

  const torrentTopWithPx = ref('0')
  ;(() => {
    const { top, height } = torrentLinkAnchor.value.getBoundingClientRect()
    torrentTopWithPx.value = `${top + height + 5}px`
  })()

  return {
    rightWithPx,
    archiveTopWithPx,
    torrentTopWithPx,
  }
}