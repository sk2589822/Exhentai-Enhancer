import { ref } from 'vue'

import useElement from './useElements'

export default function() {
  const { archiveLinkAnchor, torrentLinkAnchor, infoDiv } = useElement()

  const popupRight = ref(getPopupRight())
  const archiveTop = ref(getArchiveTop())
  const torrentTop = ref(getTorrentTop())

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
