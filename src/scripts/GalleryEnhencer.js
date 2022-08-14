import { getElement, getElements, getDoc, delay } from '@/utils/commons'

const init = () => {
  'use strict'

  let firstImagesOfRows = null

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    main()
  } else {
    document.addEventListener('DOMContentLoaded', main)
  }

  function main() {
    injectCss()

    fetchAllImages()

    firstImagesOfRows = getFirstImagesOfRows()
    setImagesContainerWheelEvent()
  }

  /**
   * 若 gallery 的頁數超過1頁，在第1頁時，會依序載入後面的頁面 (間隔3秒)
   */
  async function fetchAllImages() {
    const log = logTemplate.bind(this, 'Fetch All Images')

    log('Start')
    const pageUrls = getPageUrls()

    if (pageUrls.length === 0) {
      log('Only one page, do nothing')
      return
    }

    if (!isFirstPage()) {
      log('Not first page, do nothing')
      return
    }

    for (const url of pageUrls) {
      try {
        await delay(3000)

        log(`fetching ${url}`)
        const doc = await getDoc(url)
        const imageElements = getImageElements(doc)
        appendImages(imageElements)
        firstImagesOfRows = getFirstImagesOfRows()
      } catch (e) {
        log(`fetch ${url} failed`, e)
      }
    }

    log('Done')

    function isFirstPage() {
      return getElement('.ptds').innerText === '1'
    }

    function getImageElements(doc) {
      return getElements('.gdtl', doc)
    }

    function getPageUrls() {
      const indexes = [...getElements('.ptb td:not(.ptds)')]
      indexes.pop()
      indexes.shift()

      return indexes.map(elem => elem.children[0].href)
    }

    function appendImages(elems) {
      getElement('#gdt > .c')
        .before(...elems)
    }
  }

  /**
   * 在 images container 上滾滾輪時，直接定位到上/下一個 row
   */
  function setImagesContainerWheelEvent() {
    const imagesContainer = getElement('#gdt')

    imagesContainer.addEventListener('mousewheel', e => {
      const firstVisibleImageIndex = firstImagesOfRows
        .findIndex(image => image.getBoundingClientRect().bottom >= 0)

      const firstVisibleImage = firstImagesOfRows[firstVisibleImageIndex]
      const boundingTop = firstVisibleImage.getBoundingClientRect().top

      let nextIndex = firstVisibleImageIndex
      if (Math.sign(e.deltaY) === 1 && boundingTop <= 0) {
        nextIndex++
      } else if (Math.sign(e.deltaY) === -1 && boundingTop >= 0) {
        nextIndex--
      }

      if (nextIndex >= 0 && nextIndex < firstImagesOfRows.length) {
        e.preventDefault()
        e.stopPropagation()
        firstImagesOfRows[nextIndex].scrollIntoView()
      }
    })
  }

  function getFirstImagesOfRows() {
    // 沒有幫 RWD 做最佳化 (我用不到)
    const imagesPerRow = Math.floor(getElement('#gdt').clientWidth / getElement('.gdtl').clientWidth)
    return [...getElements(`.gdtl:nth-child(${imagesPerRow}n + 1)`)]
  }



  function logTemplate(featrue, message, error) {
    const icon = [`%c ${featrue} `, 'background: #777; border-radius: 5px']
    if (error) {
      console.error(...icon, message, error)
    } else {
      console.log(...icon, message)
    }
  }

  function injectCss() {
    const style = document.createElement('style')
    style.textContent = `
      div#gmid {
        width: 931px;
      }

      div#gd5 {
        width: 158px;
      }

      .popup {
        position: absolute;
        top: -99999px;
        right: 0;
        padding: 20px;
        border-radius: 20px;
        border: white solid 3px;
        background-color: #34353b;
        text-align: center;
        opacity: 0;
        transition: opacity 0.3s;
      }

      .popup--show {
        top: initial;
        opacity: 1;
      }

      .popup a {
        text-decoration: underline;
      }

      .toast-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 100;
      }

      .toast {
        padding: 10px;
        background-color: gray;
        font-size: 16px;
        z-index: 100;
        opacity: 0;
        animation: show-toast 5s linear;
      }

      .toast h1 {
        margin: 0;
      }

      @keyframes show-toast {
        0% {
          top: 12px;
          opacity: 0;
        }

        10% {
          top: 10px;
          opacity: 1;
        }

        80% {
          opacity: 1;
        }

        100% {
          opacity: 0;
        }
      }
    `

    getElement('head').append(style)
  }
}

export default init
