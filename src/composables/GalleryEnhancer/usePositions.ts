import useElement from './useElements'

export default function() {
  const { archiveLinkAnchor, torrentLinkAnchor, favoritesLinkAnchor, infoDiv } = useElement()

  function getDownloadPopupRight(): number {
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

  function getFavoritesPosition() {
    const { top, height, left } = favoritesLinkAnchor.getBoundingClientRect()

    return {
      top: `${top + height + window.scrollY + 5}px`,
      left: `${left}px`,
    }
  }

  return {
    archive: {
      top: `${getArchiveTop()}px`,
      right: `${getDownloadPopupRight()}px`,
    },
    torrent: {
      top: `${getTorrentTop()}px`,
      right: `${getDownloadPopupRight()}px`,
    },
    favorites: getFavoritesPosition(),
  }
}
