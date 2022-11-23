import { ref } from 'vue'
import { unsafeWindow } from 'vite-plugin-monkey/dist/client'

import { getElement, getElements } from '@/utils/commons'

import useElements from './useElements'

const { paneImagesDiv } = useElements()

const currentPage = ref(unsafeWindow.currentpage)

export default function() {
  const pageCount = unsafeWindow.pagecount

  /**
   * 於圖片資訊欄新增目前頁數/總共頁數
   */
  function appendPageIndex() {
    const imageContainers = getElements('.mi0') as NodeListOf<HTMLElement>
    const pageCount = imageContainers.length

    const mutationObserver = new MutationObserver(([mutation]) => {
      const target = mutation.target as HTMLElement
      const index = target.id.split('image_')[1]
      const captionElement = getElement('.mi4', target)
      const captionText = captionElement?.innerText

      if (!captionText || captionText?.includes(' ／ ')) {
        return
      }

      // eslint-disable-next-line no-irregular-whitespace
      captionElement.innerText = `${captionText}　-　${index} ／ ${pageCount}`
    })

    const config = { attributes: true }
    imageContainers.forEach(container => {
      mutationObserver.observe(container, config)
    })
  }

  function goToNextPage() {
    goToPageByOffset(1)
  }

  function goToPrevPage() {
    goToPageByOffset(-1)
  }

  function goToCurrentPage() {
    goToPage(currentPage.value)
  }

  function goToPageByOffset(offset: number) {
    let index = currentPage.value + offset
    index = Math.min(index, pageCount)
    index = Math.max(index, 1)

    goToPage(index)
  }

  function goToPage(index: number) {
    unsafeWindow.currentpage = index

    currentPage.value = index
    const target = getElement(`#image_${index}`) as HTMLElement
    target.scrollIntoView()
  }

  function scrollToImageTop() {
    getCurrentImage().scrollIntoView()
  }

  function scrollToRelativePosition(relativeToViewport: number) {
    const currentImage = getCurrentImage()
    const { height: imageHeight } = currentImage.getBoundingClientRect()
    const top = currentImage.offsetTop + relativeToViewport * imageHeight - window.innerHeight / 2 - 1

    paneImagesDiv.scrollTo({ top })
  }

  function getRelativeToViewport() {
    const { top: imageTop, height: imageHeight } = getCurrentImage().getBoundingClientRect()
    // 1 - (image top 相對於 viewport top 的距離 - border + viewport top 到螢幕中間的距離) / 圖片高度 = viewport 相對圖片中心的百分比
    return 1 - ((imageHeight - 1 + imageTop - window.innerHeight / 2) / imageHeight)
  }

  function scrollToProperPosition(relativeToViewport: number, currentSize?: number) {
    const currentImage = getCurrentImage()

    if (currentSize === 100) {
      scrollToImageTop()
    } else {
      scrollToRelativePosition(relativeToViewport)
    }

    if (currentImage.getBoundingClientRect().top > 1) {
      scrollToImageTop()
    }
  }

  function changePageOnWheel(event: WheelEvent) {
    if (event.deltaY < 0) {
      goToPrevPage()
    } else {
      goToNextPage()
    }
  }

  /**
   * onscroll 時同時更新 currentpage 至 pageElevatorElem 的 value
   */
  function setCurrentPageUpdateEvent() {
    paneImagesDiv.onscroll = () => {
      unsafeWindow.preload_scroll_images()
      currentPage.value = unsafeWindow.currentpage
    }
  }

  function getCurrentImage() {
    return getElement(`img[id^=imgsrc_${currentPage.value}]`) as HTMLElement
  }

  return {
    appendPageIndex,
    pageCount,
    currentPage,
    getCurrentImage,
    goToNextPage,
    goToPrevPage,
    goToCurrentPage,
    goToPageByOffset,
    goToPage,
    scrollToImageTop,
    scrollToRelativePosition,
    getRelativeToViewport,
    scrollToProperPosition,
    changePageOnWheel,
    setCurrentPageUpdateEvent,
  }
}
