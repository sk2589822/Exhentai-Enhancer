import { unsafeWindow } from 'vite-plugin-monkey/dist/client'

function getGalleryMetadataBody(id: number, token: string) {
  return JSON.stringify({
    'method': 'gdata',
    'gidlist': [
      [id, token],
    ],
    'namespace': 1,
  })
}

function getGalleryIDandToken(pathname: string) {
  const groups = pathname.match(/(mpv|g)\/(?<id>\d+)\/(?<token>\w+)/)?.groups
  if (!groups) {
    return {
      id: null,
      token: null,
    }
  }

  return {
    id: Number(groups.id),
    token: groups.token,
  }
}

async function fetchGalleryData({ id, token }: { id: number, token: string }) {
  const apiURL = 'https://exhentai.org/api.php'

  return fetch(apiURL,
    {
      method: 'POST',
      body: getGalleryMetadataBody(id, token),
    },
  )
    .then(response => response.json())
}

export async function changeTitleToJapanese() {
  const { id, token } = getGalleryIDandToken(unsafeWindow.location.pathname)
  if (!id || !token) {
    return
  }

  const galleryData = await fetchGalleryData({
    id,
    token,
  })
  if (galleryData) {
    const japaneseTitle = galleryData.gmetadata[0].title_jpn
    if (japaneseTitle) {
      document.title = japaneseTitle
    }
  }
}

export async function getArchiveLink(url: string) {
  const { id, token } = getGalleryIDandToken(url)
  if (!id || !token) {
    return
  }

  const galleryData = await fetchGalleryData({
    id,
    token,
  })

  return `${unsafeWindow.location.origin}/archiver.php?gid=${id}&token=${token}&or=${galleryData.gmetadata[0].archiver_key}`
}
