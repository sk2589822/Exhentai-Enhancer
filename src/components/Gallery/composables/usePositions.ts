import { useElementBounding } from '@vueuse/core'
import { computed } from 'vue'

import {
  getArchiveLinkAnchor,
  getFavoritesLinkAnchor,
  getInfoDiv,
  getTorrentLinkAnchor,
} from '@/components/Gallery/utils/elements'

export function usePositions() {
  const archiveLinkRect = useElementBounding(getArchiveLinkAnchor())
  const torrentLinkRect = useElementBounding(getTorrentLinkAnchor())
  const favoriteLinkRect = useElementBounding(getFavoritesLinkAnchor())

  function getDownloadPopupRight(): number {
    return (document.documentElement.clientWidth - getInfoDiv().clientWidth) / 2
  }

  return {
    archive: computed(() => ({
      top: `${archiveLinkRect.bottom.value + 5}px`,
      right: `${getDownloadPopupRight()}px`,
    })),
    torrent: computed(() => ({
      top: `${torrentLinkRect.bottom.value + 5}px`,
      right: `${getDownloadPopupRight()}px`,
    })),
    favorite: computed(() => ({
      top: `${favoriteLinkRect.bottom.value + 5}px`,
      right: `${favoriteLinkRect.left.value}px`,
    })),
  }
}
