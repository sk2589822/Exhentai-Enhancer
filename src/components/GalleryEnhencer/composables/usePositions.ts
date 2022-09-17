import { ref } from 'vue'
import { useMutationObserver } from '@vueuse/core'

import useElement from './useElements'

export default function() {
  const { archiveLinkAnchor, torrentLinkAnchor, infoDiv } = useElement()

  const popupRight = ref(0)
  const archiveTop = ref(0)
  const torrentTop = ref(0)

  useMutationObserver(infoDiv, () => {
    if (!infoDiv) {
      return
    }

    popupRight.value = getPopupRight()
    archiveTop.value = getArchiveTop()
    torrentTop.value = getTorrentTop()
  }, {
    childList: true,
    subtree: true,
  })

  function getPopupRight(): number {
    return (document.documentElement.clientWidth - infoDiv.clientWidth) / 2
  }

  function getArchiveTop(): number {
    const { top, height } = archiveLinkAnchor.getBoundingClientRect()
    return top + height + window.scrollY + 5
  }

  function getTorrentTop(): number {
    const { top, height } = torrentLinkAnchor.getBoundingClientRect()
    return top + height + window.scrollY + 5
  }

  return {
    popupRight,
    archiveTop,
    torrentTop,
  }
}
