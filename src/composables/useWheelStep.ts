import { getElement, getElements } from '@/utils/commons'

/**
 * 在 container 上滾滾輪時，直接定位到上/下一個 row
 */
export default function({
  containerSelector,
  itemsSelector,
}: {
  containerSelector: string
  itemsSelector: string
}) {
  let firstItemOfRows: HTMLElement[] | null = null

  setContainerWheelEvent()

  function setContainerWheelEvent() {
    const container = getElement(containerSelector)
    if (!container) {
      return
    }

    firstItemOfRows = getFirstItemOfRows()

    container.addEventListener('mousewheel', ((event: WheelEvent) => {
      if (!firstItemOfRows) {
        return
      }
      const firstVisibleItemIndex = firstItemOfRows
        .findIndex(item => item.getBoundingClientRect().bottom >= 0)

      const firstVisibleItem = firstItemOfRows[firstVisibleItemIndex]
      const boundingTop = firstVisibleItem.getBoundingClientRect().top

      let nextIndex = firstVisibleItemIndex
      if (Math.sign(event.deltaY) === 1 && boundingTop <= 0) {
        nextIndex++
      } else if (Math.sign(event.deltaY) === -1 && boundingTop >= 0) {
        nextIndex--
      }

      if (nextIndex >= 0 && nextIndex < firstItemOfRows.length) {
        event.preventDefault()
        event.stopPropagation()
        firstItemOfRows[nextIndex].scrollIntoView()
      }
    }) as EventListener)
  }

  function getFirstItemOfRows(): HTMLElement[] {
    // 沒有幫 RWD 做最佳化 (我用不到)
    const container = getElement(containerSelector) as HTMLDivElement
    const item = getElement(itemsSelector) as HTMLDivElement
    const itemsPerRow = Math.floor(container.clientWidth / item.clientWidth)

    const firstItemOfRows = getElements(`${itemsSelector}:nth-child(${itemsPerRow}n + 1)`)
    if (!firstItemOfRows) {
      return []
    }

    return [...firstItemOfRows]
  }

  return
}

