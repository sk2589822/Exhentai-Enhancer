import { ref } from 'vue'

import { getElement } from '@/utils/commons'

export default function() {
  const infoDiv = ref<HTMLDivElement>(getElement('.gm') as HTMLDivElement)
  const archiveLinkAnchor = ref<HTMLAnchorElement>(getElement('#gd5 > p:nth-child(2) a') as HTMLAnchorElement)
  const torrentLinkAnchor = ref<HTMLAnchorElement>(getElement('#gd5 > p:nth-child(3) a') as HTMLAnchorElement)

  return {
    infoDiv,
    archiveLinkAnchor,
    torrentLinkAnchor,
  }
}
