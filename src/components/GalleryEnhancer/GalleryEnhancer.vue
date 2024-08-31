<template>
  <VueFinalModal
    v-model="isArchivePopupShow"
    v-bind="modalOptions"
  >
    <div
      ref="archivePopup"
      class="popup popup--archive"
      :style="archivePosition"
      v-html="archiveInnerHtml"
    />
  </VueFinalModal>

  <VueFinalModal
    v-model="isTorrentPopupShow"
    v-bind="modalOptions"
  >
    <div
      ref="torrentPopup"
      class="popup popup--torrent"
      :style="torrentPosition"
      v-html="torrentInnerHtml"
    />
  </VueFinalModal>

  <VueFinalModal
    v-model="isFavoritePopupShow"
    v-bind="modalOptions"
  >
    <div
      ref="favoritePopup"
      class="popup"
      :style="favoritePosition"
      v-html="favoriteInnerHtml"
    />
  </VueFinalModal>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { VueFinalModal } from 'vue-final-modal'
import { unsafeWindow } from 'vite-plugin-monkey/dist/client'

import { useGalleryElements } from '@/composables/GalleryEnhancer/useGalleryElements'
import { usePositions } from '@/composables/GalleryEnhancer/usePositions'
import { useWheelStep } from '@/composables/useWheelStep'
import { useArchive } from '@/composables/useArchive'
import { useFetchPopups } from '@/composables/useFetchPopups'
import { scrollByRowSwitch, betterPopupSwitch, loadAllGalleryImagesSwitch, quickDownloadMethod } from '@/utils/GMVariables'
import { fetchAllImages } from '@/utils/fetchImages'
import { DownloadMethod } from '@/constants/monkey'
import { useFavorite } from '@/composables/useFavorite'
import { useTorrent } from '@/composables/useTorrent'
import { useHighlight } from '@/composables/FrontPageEnhancer/useHighlight'
import { getElements } from '@/utils/commons'

if (loadAllGalleryImagesSwitch.value) {
  fetchAllImages({ delayInMs: 1000 })
}

if (scrollByRowSwitch.value) {
  useWheelStep({
    containerSelector: '#gdt',
    itemsSelector: '.gdtl',
  })
}

const modalOptions = ref({
  teleportTo: '.enhancer-container',
  displayDirective: 'show',
  hideOverlay: true,
  contentTransition: 'vfm-fade',
  lockScroll: false,
} as const)

const { archiveLinkAnchor, torrentLinkAnchor, favoritesLinkAnchor } = useGalleryElements()

const archivePopup = ref<HTMLElement>()
const torrentPopup = ref<HTMLElement>()
const favoritePopup = ref<HTMLElement>()

const { getInnerHTMLs, preloadLinks } = useFetchPopups()

const {
  archiveInnerHtml,
  torrentInnerHtml,
  favoriteInnerHtml,
} = getInnerHTMLs()

const isArchivePopupShow = ref(false)
const isTorrentPopupShow = ref(false)
const isFavoritePopupShow = ref(false)

const {
  archive: archivePosition,
  torrent: torrentPosition,
  favorite: favoritePosition,
} = usePositions()

const { setHentaiAtHomeEvent, setDirectDownloadEvent, setCancelArchiveEvent, quickDownload } = useArchive()
const { downloadTorrent } = useTorrent()
const { setRequestEvents } = useFavorite(favoriteInnerHtml)

if (betterPopupSwitch.value) {
  await preloadLinks()

  // 等 vfm teleport 完成才抓得到 DOM
  setTimeout(() => {
    setArchiveClickEvent()
    setTorrentClickEvent()
    setFavoriteClickEvent()
  }, 0)
}

const isQuickDownload = computed(() => quickDownloadMethod.value !== DownloadMethod.Manual)

function setArchiveClickEvent() {
  setHentaiAtHomeEvent()
  setDirectDownloadEvent()
  setCancelArchiveEvent()

  archiveLinkAnchor.addEventListener('click', event => {
    event.preventDefault()
    event.stopPropagation()

    if (isQuickDownload.value) {
      const succeed = quickDownload(archivePopup)
      if (!succeed) {
        isArchivePopupShow.value = true
      }
    } else {
      isArchivePopupShow.value = !isArchivePopupShow.value
    }
  })
  setReady(archiveLinkAnchor)
}

const { setAsDownloaded } = useHighlight()

function setTorrentClickEvent() {
  setRequestEvents(archiveLinkAnchor, favoritePopup, isFavoritePopupShow)
  const isOnlyOneTorrent = torrentLinkAnchor.innerText === 'Torrent Download (1)'

  const torrentDownloadLinks = getElements('a', torrentPopup.value)
  if (torrentDownloadLinks?.length) {
    torrentDownloadLinks?.forEach(link => {
      link.addEventListener('click', () => {
        setAsDownloaded(unsafeWindow.gid)
      })
    })
  }

  torrentLinkAnchor.addEventListener('click', event => {
    event.preventDefault()
    event.stopPropagation()

    if (isOnlyOneTorrent) {
      downloadTorrent(torrentPopup)
    } else {
      isTorrentPopupShow.value = !isTorrentPopupShow.value
    }
  })

  setReady(torrentLinkAnchor)
}

function setFavoriteClickEvent() {
  favoritesLinkAnchor.addEventListener('click', event => {
    event.preventDefault()
    event.stopPropagation()
    isFavoritePopupShow.value = !isFavoritePopupShow.value
  })
  setReady(favoritesLinkAnchor)
}

function setReady(element: HTMLElement) {
  element.removeAttribute('onclick')
  element.classList.add('is-ready')
}

onMounted(() => {
  unsafeWindow.pop_ren = Function('popUp(popbase + "rename", window.innerWidth * 2 / 3, window.innerHeight * 2 / 3);') as () => false
})

</script>

<style lang="scss">
@use "@/styles/animations/spin.scss";
@use "@/styles/popup.scss";

div#gd5 {
  float: unset;
  width: auto;
}

.is-ready::after {
  content: " ✔️";
}

.is-fetching {
  font-size: 0;
  pointer-events: none;
  text-decoration: none;

  &::after {
    content: "⌛";
    display: inline-block;
    font-size: 8px;
    line-height: 8px;
    animation: spin ease-in-out 1s infinite;
  }
}

input[name="dltype"] + .is-fetching {
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 50%;
    font-size: 12px;
    line-height: 27px;
  }

  input {
    color: transparent;
  }
}

.is-finished {
  font-size: 0;
  pointer-events: none;
  text-decoration: none;

  &::after {
    content: "✔️";
    display: inline-block;
    font-size: 8px;
    line-height: 8px;
  }
}
</style>

