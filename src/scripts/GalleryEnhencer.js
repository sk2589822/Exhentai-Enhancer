
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

    preloadLinks()

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
   * 預先載入 Torrent 和 Archive 視窗
   *
   * 同時把原先的 window.open() popup 改為在同一個頁面內的 popup
   */
  async function preloadLinks() {
    await Promise.all([
      preloadTorrentLink(),
      preloadArchiveLink(),
    ])

    setHentaiAtHomeEvent()
    setArchiveEvent()
    setClickOutsideEvent()

    async function preloadTorrentLink() {
      const log = logTemplate.bind(this, 'Preload Torrent Link')
      log('Start')

      const linkElement = getElement('#gd5 > p:nth-child(3) a')
      const link = getLink(linkElement)
      const doc = await getDoc(link)
      const popupContent = getPopupContent(doc, '#torrentinfo > div:first-child')
      linkElement.after(popupContent)
      linkElement.innerText += ' ✔️'

      if (linkElement.innerText === 'Torrent Download (1) ✔️') {
        setDownloadEvent(linkElement, popupContent)
      } else {
        setToggleEvent(linkElement, popupContent)
      }

      log('End')

      return doc
    }

    async function preloadArchiveLink() {
      const log = logTemplate.bind(this, 'Preload Archive Link')
      log('Start')

      const linkElement = getElement('#gd5 > p:nth-child(2) a')
      const link = getLink(linkElement)
      const doc = await getDoc(link)
      const popupContent = getPopupContent(doc, '#db')
      linkElement.after(popupContent)
      linkElement.innerText += ' ✔️'

      setToggleEvent(linkElement, popupContent)

      log('End')

      return doc
    }

    function getLink(linkElement) {
      return linkElement
        .getAttribute('onclick')
        .match(/(https:\/\/\S+)',\d+,\d+/)[1]
    }

    function getPopupContent(doc, selector) {
      const content = getElement(selector, doc)
      content.removeAttribute('style')
      content.classList.add('popup')
      return content
    }
    function setDownloadEvent(linkElement, popup) {
      linkElement.removeAttribute('onclick')
      linkElement.addEventListener('click', e => {
        e.preventDefault()
        getElement('a', popup).click()
      })
    }

    function setToggleEvent(linkElement, popup) {
      linkElement.removeAttribute('onclick')
      linkElement.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()

        const showClass = 'popup--show'
        if (popup.classList.contains(showClass)) {
          popup.classList.remove(showClass)
        } else {
          popup.classList.add(showClass)
        }
      })
    }

    /**
     * 重新實作 Hentai@Home 的下載事件
     *
     * 原本會開一個新的頁面，裡面有 submit form 的 function
     * 因為改用 preload 就沒辦法呼叫該 function，所以這邊要補實作
     */
    function setHentaiAtHomeEvent() {
      const log = logTemplate.bind(this, 'Hentai At Home Event')
      const toastContainer = appendToastContainerToBody()

      const hentaiAtHomeLinks = getElements('#db table td a')

      for (const link of hentaiAtHomeLinks) {
        const postUrl = getElement('#hathdl_form').getAttribute('action')
        const resolution = link.getAttribute('onclick').split('\'')[1]
        link.removeAttribute('onclick')

        link.addEventListener('click', async () => {
          // HACK: 不加 setTimeout popup 會自己消失
          setTimeout(() => {
            link.parentElement.innerHTML = '✔️'
          }, 0)

          const formData = new FormData()
          formData.append('hathdl_xres', resolution)
          const doc = await getDoc(postUrl, {
            method: 'POST',
            body: formData,
          })

          const response = getElement('#db', doc)
          log(response)
          const toast = createToastElement(response)
          toastContainer.append(toast)
        })
      }

      function appendToastContainerToBody() {
        const container = document.createElement('div')
        container.classList.add('toast-container')

        document.body.append(container)

        return container
      }

      function createToastElement(response) {
        const toast = document.createElement('div')
        toast.innerHTML = response.innerHTML

        toast.classList.add('toast')
        toast.addEventListener('animationend', function() {
          this.remove()
        })

        return toast
      }
    }

    /**
     * 點擊 Archive 的下載按鈕時，將原本的下載視窗彈出
     *
     * 會做成彈窗是因為 Archive 的連結最後會連到不同 domain 的 url，會被 same orgin 擋。
     */
    function setArchiveEvent() {
      const archiveDownloadButtons = getElements('form input[name="dlcheck"]')
      for (const button of archiveDownloadButtons) {
        button.addEventListener('click', e => {
          e.preventDefault()
          const buttonValue = button.getAttribute('value')
          const form = button.parentElement.parentElement
          const url = form.getAttribute('action')

          const popupWindow = openWindow(url)
          popupWindow.addEventListener('load', () => {
            getElement(`input[value="${buttonValue}"]`, popupWindow.document)
              .click()
          })
        })
      }

      function openWindow(url) {
        const width = 600
        const height = 300
        const left = (screen.width - 600) / 2
        const top = (screen.height - 300) / 2
        const target = `_archive+${String(Math.random()).split('.')[1]}`

        return window.open(url, target, `width=${width},height=${height},top=${top},left=${left}`)
      }
    }
  }

  function setClickOutsideEvent() {
    document.addEventListener('click', e => {
      const popup = getElement('.popup--show')
      if (!popup) {
        return
      }

      if (popup.contains(e.target)) {
        return
      }

      popup.classList.remove('popup--show')
    })
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

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  function getElement(selector, doc = document) {
    return doc.querySelector(selector)
  }

  function getElements(selector, doc = document) {
    return doc.querySelectorAll(selector)
  }

  async function getDoc(url, options) {
    const response = await fetch(url, options)
    const html = await response.text()
    return new DOMParser().parseFromString(html, 'text/html')
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
