import { ref } from 'vue'
import { unsafeWindow } from 'vite-plugin-monkey/dist/client'
import { useBrowserLocation } from '@vueuse/core'

import { getElement, getElements } from '@/utils/commons'
import { useMultiPageViewerElements } from '@/composables/MultiPageViewer/useMultiPageViewerElements'

const { paneImagesDiv } = useMultiPageViewerElements()

const location = useBrowserLocation()
const currentPage = ref(Number(location.value.hash?.replace('#page', '')) || 1)

export function usePages() {
  const pageCount = unsafeWindow.pagecount

  /**
   * 於圖片資訊欄新增目前頁數/總共頁數
   */
  function appendPageIndex() {
    const imageContainers = getElements('.mimg') as NodeListOf<HTMLElement>
    const pageCount = imageContainers.length

    const mutationObserver = new MutationObserver(([mutation]) => {
      const target = mutation.target as HTMLElement
      const index = target.id.split('image_')[1]
      const captionElement = getElement('.mbar > *:nth-child(3)', target)
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
    const currentImage = getCurrentImage()
    if (!currentImage) {
      return null
    }

    const { top: imageTop, height: imageHeight } = currentImage.getBoundingClientRect()
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

  function setPreloadImagesEvent() {
    paneImagesDiv.onscroll = () => {
      unsafeWindow.preload_scroll_images()
    }
  }

  function getCurrentImage() {
    return getElement(`img[id^=imgsrc_${currentPage.value}]`) as HTMLElement
  }

  function syncCurrentImageOnScroll() {
    const imageContainers = getElements('.mimg') as NodeListOf<HTMLElement>

    let firstIntersectingIndex = 1

    const observer = new IntersectionObserver(entries => {
      firstIntersectingIndex = Number(entries[0].target.id.replace('image_', ''))
    })
    imageContainers.forEach(container => {
      observer.observe(container)
    })

    paneImagesDiv.addEventListener('scroll', () => {
      const visibleImageContainers = []
      for (let index = Math.max(firstIntersectingIndex - 1, 1); index < imageContainers.length; index++) {
        const percentage = getVisiblePercentageInViewport(imageContainers[index - 1])
        if (percentage > 0) {
          visibleImageContainers.push({
            index,
            percentage,
            element: imageContainers[index],
          })
        }
      }

      if (visibleImageContainers.length === 0) {
        return
      } else if (visibleImageContainers.length === 1) {
        currentPage.value = visibleImageContainers[0].index
      } else {
        visibleImageContainers.sort((elem1, elem2) => elem2.percentage - elem1.percentage)
        const [largest, secondLargest] = visibleImageContainers
        if (largest.percentage / secondLargest.percentage >= 2) {
          currentPage.value = largest.index
        }
      }
    })
  }

  function getVisiblePercentageInViewport(element: HTMLElement) {
    const viewportHeight = window.innerHeight
    const { top, bottom } = element.getBoundingClientRect()
    if (top > viewportHeight || bottom < 0) {
      return 0
    }

    const visibleBottom = Math.min(viewportHeight, bottom)
    const visibleTop = Math.max(top, 0)

    return (visibleBottom - visibleTop) / viewportHeight
  }

  return {
    appendPageIndex,
    pageCount,
    currentPage,
    getCurrentImage,
    goToNextPage,
    goToPrevPage,
    goToPageByOffset,
    goToPage,
    goToCurrentPage,
    scrollToImageTop,
    scrollToRelativePosition,
    getRelativeToViewport,
    scrollToProperPosition,
    changePageOnWheel,
    syncCurrentImageOnScroll,
    setPreloadImagesEvent,
  }
}
