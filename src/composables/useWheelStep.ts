import { getElement, getElements } from '@/utils/commons'

/**
 * 在 container 上滾滾輪時，直接定位到上/下一個 row
 */
export function useWheelStep({
  containerSelector,
  itemsSelector,
}: {
  containerSelector: string
  itemsSelector: string
}) {
  const container = getElement(containerSelector) as HTMLElement

  let firstItemOfRows: HTMLElement[] = getFirstItemOfRows(itemsSelector, container)
  const mutationObserver = new MutationObserver(() => {
    firstItemOfRows = getFirstItemOfRows(itemsSelector, container)
  })

  mutationObserver.observe(container, {
    childList: true,
    characterData: true,
  })

  setContainerWheelEvent()

  function setContainerWheelEvent() {
    if (!container) {
      return
    }

    container.addEventListener('mousewheel', ((event: WheelEvent) => {
      if (!firstItemOfRows) {
        return
      }

      const firstVisibleItemIndex = firstItemOfRows
        .findIndex(item => Math.floor(item.getBoundingClientRect().bottom) > 0)

      const firstVisibleItem = firstItemOfRows[firstVisibleItemIndex]
      const boundingTop = Math.floor(firstVisibleItem.getBoundingClientRect().top)

      let nextIndex = firstVisibleItemIndex

      // Note: Windows 系統縮放大小若為 125%/150%/175%，boundingTop 有可能為 -1
      if (Math.sign(event.deltaY) === 1 && boundingTop <= 0) {
        nextIndex++
      } else if (Math.sign(event.deltaY) === -1 && boundingTop >= -1) {
        nextIndex--
      }

      if (nextIndex >= 0 && nextIndex < firstItemOfRows.length) {
        event.preventDefault()
        event.stopPropagation()
        firstItemOfRows[nextIndex].scrollIntoView()
      }
    }) as EventListener)
  }
}

function getFirstItemOfRows(selector: string, parent: HTMLElement): HTMLElement[] {
  const item = getElement(selector, parent) as HTMLDivElement
  const itemsPerRow = Math.floor(parent.clientWidth / item.clientWidth)

  const firstItemOfRows = getElements(`${selector}:nth-child(${itemsPerRow}n + 1)`, parent)
  if (!firstItemOfRows) {
    return []
  }

  return [...firstItemOfRows]
}
