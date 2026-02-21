<!-- eslint-disable vue/valid-template-root -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useElementBounding } from '@vueuse/core'
import { VueFinalModal } from 'vue-final-modal'

import { setWheelStep } from '@/utils/wheel-step'
import { usePopups } from '@/composables/usePopups'
import { getDoc, getElement, getElements } from '@/utils/commons'
import { scrollByRowSwitch, infiniteScrollSwitch, archiveButtonSwitch, quickArchiveDownloadMethod, ArchiveDownloadMethod } from '@/utils/gm-variables'
import { getArchiveLink } from '@/utils/e-hentai-api'
import { useArchive } from '@/composables/useArchive'
import { highlightDownloadedGalleries, watchDownloadedGalleries } from '@/utils/highlight-galleries'

if (scrollByRowSwitch.value) {
  setWheelStep({
    containerSelector: '.itg.gld',
    itemsSelector: '.gl1t',
  })
}

if (infiniteScrollSwitch.value) {
  useInfiniteScroll({
    onFetched: () => {
      appendArchiveButtons()
      highlightDownloadedGalleries()
    },
  })
}

function useInfiniteScroll({
  onFetched = () => { /* empty */ },
} = {}) {
  const galleryContainer = getElement('.itg.gld')
  const bottomPagination = getElements('.searchnav')?.[1]
  let nextPageUrl = getElement('#dnext')?.getAttribute('href')
  let isFetching = false

  const intersectionObserver = new IntersectionObserver(async ([bottomPagination]) => {
    if (!bottomPagination.isIntersecting || isFetching) {
      return
    }

    if (!nextPageUrl) {
      return
    }

    isFetching = true
    galleryContainer?.classList.add('is-fetching')

    const doc = await getDoc(nextPageUrl)
    const galleriesOfNextPage = getElements('.itg.gld > .gl1t', doc)

    if (!galleriesOfNextPage) {
      return
    }

    galleryContainer?.append(...galleriesOfNextPage)
    isFetching = false
    galleryContainer?.classList.remove('is-fetching')

    nextPageUrl = getElement('#dnext', doc)?.getAttribute('href')

    history.pushState(undefined, doc.title, nextPageUrl)
    onFetched()
  })

  if (bottomPagination) {
    intersectionObserver.observe(bottomPagination)
  }
}

const { archiveInnerHtml, fetchArchive } = usePopups()

const archivePopup = ref<HTMLElement>()
const activeButton = ref<HTMLElement>()

async function appendArchiveButtons() {
  const galleries = getElements('.gl1t')

  galleries?.forEach(gallery => {
    if (getElement('.archive-button', gallery)) {
      return
    }

    const button = document.createElement('span')
    button.classList.add('archive-button')
    button.textContent = 'A'
    button.title = 'Show Archive'
    button.onclick = async () => {
      isArchivePopupShow.value = !isArchivePopupShow.value
      archiveInnerHtml.value = 'Fetching...'
      activeButton.value = button

      const link = getElement('a', gallery) as HTMLAnchorElement
      const archiveLink = await getArchiveLink(link.href)
      archiveInnerHtml.value = await fetchArchive(archiveLink)

      // 等 DOM 更新
      setTimeout(() => {
        setArchiveEvent()
      }, 0)
    }

    const downloadDiv = getElement('.gldown', gallery)
    downloadDiv?.appendChild(button)
  })
}

const borderRect = useElementBounding(getElement('.itg.gld') as HTMLElement)
const popupRect = useElementBounding(archivePopup)
const targetRect = useElementBounding(activeButton)

const archivePopupPosition = computed(() => {
  const top = Math.min(targetRect.bottom.value + 5, borderRect.bottom.value - popupRect.height.value)

  let left = (targetRect.left.value - popupRect.width.value / 2)
  const right = left + popupRect.width.value

  if (left < borderRect.left.value) {
    left = borderRect.left.value
  } else if (right > borderRect.right.value) {
    left = (borderRect.right.value - popupRect.width.value)
  }

  return {
    top: `${top}px`,
    left: `${left}px`,
    // 防止 popup right 超出邊界時，瀏覽器自動 shrink popup
    marginRight: '-9999px',
  }
})

if (archiveButtonSwitch.value) {
  appendArchiveButtons()
}

const modalOptions = ref({
  teleportTo: '.enhancer-container',
  displayDirective: 'show',
  hideOverlay: true,
  contentTransition: 'vfm-fade',
  lockScroll: false,
} as const)

const isArchivePopupShow = ref(false)

const { setHentaiAtHomeEvent, setDirectDownloadEvent, setCancelArchiveEvent, quickDownload } = useArchive()
const isQuickDownload = computed(() => quickArchiveDownloadMethod.value !== ArchiveDownloadMethod.Manual)

function setArchiveEvent() {
  setHentaiAtHomeEvent()
  setDirectDownloadEvent()
  setCancelArchiveEvent()

  if (isQuickDownload.value) {
    const succeed = quickDownload(archivePopup)
    if (!succeed) {
      isArchivePopupShow.value = true
    }
  }
}

highlightDownloadedGalleries()
watchDownloadedGalleries()
</script>

<template>
  <VueFinalModal
    v-model="isArchivePopupShow"
    v-bind="modalOptions"
  >
    <div
      ref="archivePopup"
      class="popup popup--archive"
      :style="archivePopupPosition"
      v-html="archiveInnerHtml"
    />
  </VueFinalModal>
</template>

<style lang="scss">
@use "@/styles/animations/spin.scss";

.itg.gld.is-fetching::after {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 864px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  content: "⌛";
  animation: spin ease-in-out 1s infinite;
}

.gldown {
  display: flex;
}

.archive-button {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  top: -6px;
  margin-left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background-color: #5fa9cf;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 5px;
  cursor: pointer;
}
</style>
