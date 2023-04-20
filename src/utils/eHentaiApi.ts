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

function getGalleryIDandToken() {
  const groups = unsafeWindow.location.pathname.match(/(mpv|g)\/(?<id>\d+)\/(?<token>\w+)/)?.groups
  if (!groups) {
    return {
      id: null,
      token: null,
    }
  }

  const { id, token } = groups
  return {
    id: Number(id),
    token,
  }
}

function fetchGalleryData() {
  const apiURL = 'https://api.e-hentai.org/api.php'

  const { id, token } = getGalleryIDandToken()
  if (!id || !token) {
    return null
  }

  return fetch(apiURL,
    {
      method: 'POST',
      body: getGalleryMetadataBody(id, token),
    },
  )
    .then(response => response.json())
}

export async function changeTitleToJapanese() {
  const galleryData = await fetchGalleryData()
  if (galleryData) {
    document.title = galleryData.gmetadata[0].title_jpn
  }
}
