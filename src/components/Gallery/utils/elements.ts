import { getElement } from '@/utils/commons'

export function getInfoDiv() {
  return getElement('.gm') as HTMLElement
}

export function getArchiveLinkAnchor() {
  return getElement('#gd5 > p:nth-child(2) a') as HTMLElement
}

export function getTorrentLinkAnchor() {
  return getElement('#gd5 > p:nth-child(3) a') as HTMLElement
}

export function getFavoritesLinkAnchor() {
  return getElement('#favoritelink') as HTMLElement
}

export function getFavoritesLinkDiv() {
  return getElement('#gdf') as HTMLElement
}
