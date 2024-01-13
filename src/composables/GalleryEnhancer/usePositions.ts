import { useElementBounding } from '@vueuse/core'
import { computed } from 'vue'

import { useGalleryElements } from '@/composables/GalleryEnhancer/useGalleryElements'

export function usePositions() {
  const { archiveLinkAnchor, torrentLinkAnchor, favoritesLinkAnchor, infoDiv } = useGalleryElements()

  const archiveLinkRect = useElementBounding(archiveLinkAnchor)
  const torrentLinkRect = useElementBounding(torrentLinkAnchor)
  const favoriteLinkRect = useElementBounding(favoritesLinkAnchor)

  function getDownloadPopupRight(): number {
    return (document.documentElement.clientWidth - infoDiv.clientWidth) / 2
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
