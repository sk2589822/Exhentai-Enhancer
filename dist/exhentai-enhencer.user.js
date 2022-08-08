// ==UserScript==
// @name       exhentai-enhencer
// @namespace  https://github.com/sk2589822/Exhentai-Enhencer
// @version    0.1.1
// @icon       https://vitejs.dev/logo.svg
// @match      https://exhentai.org/g/*/*/
// @match      https://exhentai.org/mpv/*/*/
// @require    https://cdn.jsdelivr.net/npm/vue@3.2.37/dist/vue.global.prod.js
// ==/UserScript==

// use vite-plugin-monkey@1.1.4 at 2022-08-08T12:28:39.699Z

(function(vue) {
  "use strict";
  const init$1 = () => {
    let firstImagesOfRows = null;
    if (document.readyState === "complete" || document.readyState === "interactive") {
      main();
    } else {
      document.addEventListener("DOMContentLoaded", main);
    }
    function main() {
      injectCss();
      preloadLinks();
      fetchAllImages();
      firstImagesOfRows = getFirstImagesOfRows();
      setImagesContainerWheelEvent();
    }
    async function fetchAllImages() {
      const log = logTemplate.bind(this, "Fetch All Images");
      log("Start");
      const pageUrls = getPageUrls();
      if (pageUrls.length === 0) {
        log("Only one page, do nothing");
        return;
      }
      if (!isFirstPage()) {
        log("Not first page, do nothing");
        return;
      }
      for (const url of pageUrls) {
        try {
          await delay(3e3);
          log(`fetching ${url}`);
          const doc = await getDoc(url);
          const imageElements = getImageElements(doc);
          appendImages(imageElements);
          firstImagesOfRows = getFirstImagesOfRows();
        } catch (e) {
          log(`fetch ${url} failed`, e);
        }
      }
      log("Done");
      function isFirstPage() {
        return getElement(".ptds").innerText === "1";
      }
      function getImageElements(doc) {
        return getElements(".gdtl", doc);
      }
      function getPageUrls() {
        const indexes = [...getElements(".ptb td:not(.ptds)")];
        indexes.pop();
        indexes.shift();
        return indexes.map((elem) => elem.children[0].href);
      }
      function appendImages(elems) {
        getElement("#gdt > .c").before(...elems);
      }
    }
    async function preloadLinks() {
      await Promise.all([
        preloadTorrentLink(),
        preloadArchiveLink()
      ]);
      setHentaiAtHomeEvent();
      setArchiveEvent();
      setClickOutsideEvent();
      async function preloadTorrentLink() {
        const log = logTemplate.bind(this, "Preload Torrent Link");
        log("Start");
        const linkElement = getElement("#gd5 > p:nth-child(3) a");
        const link = getLink(linkElement);
        const doc = await getDoc(link);
        const popupContent = getPopupContent(doc, "#torrentinfo > div:first-child");
        linkElement.after(popupContent);
        linkElement.innerText += " \u2714\uFE0F";
        if (linkElement.innerText === "Torrent Download (1) \u2714\uFE0F") {
          setDownloadEvent(linkElement, popupContent);
        } else {
          setToggleEvent(linkElement, popupContent);
        }
        log("End");
        return doc;
      }
      async function preloadArchiveLink() {
        const log = logTemplate.bind(this, "Preload Archive Link");
        log("Start");
        const linkElement = getElement("#gd5 > p:nth-child(2) a");
        const link = getLink(linkElement);
        const doc = await getDoc(link);
        const popupContent = getPopupContent(doc, "#db");
        linkElement.after(popupContent);
        linkElement.innerText += " \u2714\uFE0F";
        setToggleEvent(linkElement, popupContent);
        log("End");
        return doc;
      }
      function getLink(linkElement) {
        return linkElement.getAttribute("onclick").match(/(https:\/\/\S+)',\d+,\d+/)[1];
      }
      function getPopupContent(doc, selector) {
        const content = getElement(selector, doc);
        content.removeAttribute("style");
        content.classList.add("popup");
        return content;
      }
      function setDownloadEvent(linkElement, popup) {
        linkElement.removeAttribute("onclick");
        linkElement.addEventListener("click", (e) => {
          e.preventDefault();
          getElement("a", popup).click();
        });
      }
      function setToggleEvent(linkElement, popup) {
        linkElement.removeAttribute("onclick");
        linkElement.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const showClass = "popup--show";
          if (popup.classList.contains(showClass)) {
            popup.classList.remove(showClass);
          } else {
            popup.classList.add(showClass);
          }
        });
      }
      function setHentaiAtHomeEvent() {
        const log = logTemplate.bind(this, "Hentai At Home Event");
        const toastContainer = appendToastContainerToBody();
        const hentaiAtHomeLinks = getElements("#db table td a");
        for (const link of hentaiAtHomeLinks) {
          const postUrl = getElement("#hathdl_form").getAttribute("action");
          const resolution = link.getAttribute("onclick").split("'")[1];
          link.removeAttribute("onclick");
          link.addEventListener("click", async () => {
            setTimeout(() => {
              link.parentElement.innerHTML = "\u2714\uFE0F";
            }, 0);
            const formData = new FormData();
            formData.append("hathdl_xres", resolution);
            const doc = await getDoc(postUrl, {
              method: "POST",
              body: formData
            });
            const response = getElement("#db", doc);
            log(response);
            const toast = createToastElement(response);
            toastContainer.append(toast);
          });
        }
        function appendToastContainerToBody() {
          const container = document.createElement("div");
          container.classList.add("toast-container");
          document.body.append(container);
          return container;
        }
        function createToastElement(response) {
          const toast = document.createElement("div");
          toast.innerHTML = response.innerHTML;
          toast.classList.add("toast");
          toast.addEventListener("animationend", function() {
            this.remove();
          });
          return toast;
        }
      }
      function setArchiveEvent() {
        const archiveDownloadButtons = getElements('form input[name="dlcheck"]');
        for (const button of archiveDownloadButtons) {
          button.addEventListener("click", (e) => {
            e.preventDefault();
            const buttonValue = button.getAttribute("value");
            const form = button.parentElement.parentElement;
            const url = form.getAttribute("action");
            const popupWindow = openWindow(url);
            popupWindow.addEventListener("load", () => {
              getElement(`input[value="${buttonValue}"]`, popupWindow.document).click();
            });
          });
        }
        function openWindow(url) {
          const width = 600;
          const height = 300;
          const left = (screen.width - 600) / 2;
          const top = (screen.height - 300) / 2;
          const target = `_archive+${String(Math.random()).split(".")[1]}`;
          return window.open(url, target, `width=${width},height=${height},top=${top},left=${left}`);
        }
      }
    }
    function setClickOutsideEvent() {
      document.addEventListener("click", (e) => {
        const popup = getElement(".popup--show");
        if (!popup) {
          return;
        }
        if (popup.contains(e.target)) {
          return;
        }
        popup.classList.remove("popup--show");
      });
    }
    function setImagesContainerWheelEvent() {
      const imagesContainer = getElement("#gdt");
      imagesContainer.addEventListener("mousewheel", (e) => {
        const firstVisibleImageIndex = firstImagesOfRows.findIndex((image) => image.getBoundingClientRect().bottom >= 0);
        const firstVisibleImage = firstImagesOfRows[firstVisibleImageIndex];
        const boundingTop = firstVisibleImage.getBoundingClientRect().top;
        let nextIndex = firstVisibleImageIndex;
        if (Math.sign(e.deltaY) === 1 && boundingTop <= 0) {
          nextIndex++;
        } else if (Math.sign(e.deltaY) === -1 && boundingTop >= 0) {
          nextIndex--;
        }
        if (nextIndex >= 0 && nextIndex < firstImagesOfRows.length) {
          e.preventDefault();
          e.stopPropagation();
          firstImagesOfRows[nextIndex].scrollIntoView();
        }
      });
    }
    function getFirstImagesOfRows() {
      const imagesPerRow = Math.floor(getElement("#gdt").clientWidth / getElement(".gdtl").clientWidth);
      return [...getElements(`.gdtl:nth-child(${imagesPerRow}n + 1)`)];
    }
    function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    function getElement(selector, doc = document) {
      return doc.querySelector(selector);
    }
    function getElements(selector, doc = document) {
      return doc.querySelectorAll(selector);
    }
    async function getDoc(url, options) {
      const response = await fetch(url, options);
      const html = await response.text();
      return new DOMParser().parseFromString(html, "text/html");
    }
    function logTemplate(featrue, message, error) {
      const icon = [`%c ${featrue} `, "background: #777; border-radius: 5px"];
      if (error) {
        console.error(...icon, message, error);
      } else {
        console.log(...icon, message);
      }
    }
    function injectCss() {
      const style = document.createElement("style");
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
    `;
      getElement("head").append(style);
    }
  };
  const init = () => {
    if (document.readyState === "complete" || document.readyState === "interactive") {
      main();
    } else {
      document.addEventListener("DOMContentLoaded", main);
    }
    function main() {
      appendPageIndex();
      showThumbsWhenHover();
      const featuresContainer = appendFeaturesContainer();
      const [pageElevatorElem, pageElevatorContainer] = createPageElevator();
      featuresContainer.append(pageElevatorContainer);
      overrideKeyBoardEvent();
      updateCurrentPageWhenScrolling(pageElevatorElem);
      setChangePageEvent(featuresContainer);
      featuresContainer.append(createImageHeightResizer());
      injectCss();
    }
    function appendPageIndex() {
      const imageContainers = getElements(".mi0");
      const length = imageContainers.length;
      const mutationObserver = new MutationObserver(([mutation]) => {
        const target = mutation.target;
        const index = target.id.split("image_")[1];
        const caption = getElement(".mi4", target);
        const text = caption == null ? void 0 : caption.innerText;
        if (!text || (text == null ? void 0 : text.includes(" \uFF0F "))) {
          return;
        }
        caption.innerText = `${text}\u3000-\u3000${index} \uFF0F ${length}`;
      });
      const config = { attributes: true };
      imageContainers.forEach((container) => {
        mutationObserver.observe(container, config);
      });
    }
    function showThumbsWhenHover() {
      const paneThumbs = getElement("#pane_thumbs");
      document.addEventListener("mousemove", (e) => {
        if (e.clientX < paneThumbs.offsetWidth + 15) {
          paneThumbs.style.opacity = 1;
        } else {
          paneThumbs.style.opacity = 0;
        }
      });
    }
    function appendFeaturesContainer() {
      const featuresContainer = document.createElement("div");
      featuresContainer.classList.add("enhencer-features");
      getElement("#pane_outer").append(featuresContainer);
      return featuresContainer;
    }
    function createPageElevator() {
      const container = document.createElement("div");
      container.classList.add("enhencer-features__enhencer-feature", "page-elevator");
      const pageElevatorElem = document.createElement("input");
      pageElevatorElem.classList.add("page-elevator__input");
      pageElevatorElem.value = currentpage;
      pageElevatorElem.addEventListener("keydown", (e) => {
        e.stopPropagation();
        if (e.code === "Enter" || e.code === "NumpadEnter") {
          const page = Number(e.target.value);
          goToPage(page);
        }
      });
      container.append(pageElevatorElem);
      const slash = document.createElement("span");
      slash.classList.add("page-elevator__slash");
      slash.innerText = "\uFF0F";
      container.append(slash);
      const totalPage = document.createElement("span");
      totalPage.innerText = pagecount;
      container.append(totalPage);
      return [pageElevatorElem, container];
    }
    function setShowCursorEvent() {
      document.body.addEventListener("mousemove", function listener(e) {
        if (!checkMouseDelta(e)) {
          return;
        }
        showCursor();
        document.body.removeEventListener("mousemove", listener);
      });
    }
    const prevMousePoint = {
      x: 0,
      y: 0
    };
    function checkMouseDelta({ clientX, clientY }) {
      const threshold = 50;
      return Math.abs(clientX - prevMousePoint.x) >= threshold || Math.abs(clientY - prevMousePoint.y) >= threshold;
    }
    function showCursor() {
      document.body.classList.remove("hide-cursor");
    }
    function hideCursor({ clientX, clientY }) {
      prevMousePoint.x = clientX;
      prevMousePoint.y = clientY;
      document.body.classList.add("hide-cursor");
    }
    function setChangePageEvent(featuresContainer) {
      setClickEvent();
      setMouseWheelEvent();
      function setClickEvent() {
        const config = [
          {
            event: "click",
            action: goToNextPage
          },
          {
            event: "contextmenu",
            action: goToPrevPage
          }
        ];
        const paneImages = getElement("#pane_images");
        config.forEach(({ event, action }) => {
          paneImages.addEventListener(event, (e) => {
            if (e.target.closest(".mi1")) {
              return;
            }
            e.preventDefault();
            e.stopPropagation();
            action();
            hideCursor(e);
            setShowCursorEvent();
          });
        });
      }
      function setMouseWheelEvent() {
        document.body.addEventListener(
          "mousewheel",
          (e) => {
            hideCursor(e);
            setShowCursorEvent();
            if (e.x >= featuresContainer.offsetLeft) {
              changePage(e);
            }
          },
          true
        );
        function changePage(e) {
          e.stopPropagation();
          if (Math.sign(e.deltaY) === -1) {
            goToPrevPage();
          } else {
            goToNextPage();
          }
        }
      }
    }
    function goToNextPage() {
      if (currentpage === pagecount) {
        return;
      }
      goToPage(++currentpage);
    }
    function goToPrevPage() {
      if (currentpage === 1) {
        return;
      }
      goToPage(--currentpage);
    }
    function goToPage(index) {
      currentpage = index;
      document.getElementById(`image_${index}`).scrollIntoView();
    }
    function updateCurrentPageWhenScrolling(pageElevatorElem) {
      pane_images.onscroll = () => {
        preload_scroll_images();
        pageElevatorElem.value = currentpage;
      };
    }
    function overrideKeyBoardEvent() {
      document.onkeydown = (e) => {
        switch (e.code) {
          case "ArrowUp":
            scroll_relative("pane_images", 50);
            break;
          case "ArrowDown":
            scroll_relative("pane_images", -50);
            break;
          case "ArrowLeft":
            goToPrevPage();
            break;
          case "ArrowRight":
            goToNextPage();
            break;
        }
      };
    }
    let currentImageHeight = null;
    function createImageHeightResizer() {
      const heightList = [100, 125, 150, 175, 200];
      const container = document.createElement("div");
      container.classList.add("enhencer-features__enhencer-feature", "image-resizer");
      for (const height of heightList) {
        const fitButton = document.createElement("button");
        fitButton.classList.add("image-resizer__button", `image-resizer__button--${height}`);
        fitButton.innerText = height;
        const imagesContainer = getElement("#pane_images");
        fitButton.addEventListener("click", () => {
          const containerActiveClass = "resize";
          const buttonActiveClass = "image-resizer__button--active";
          removeClassFromElements(".image-resizer__button", buttonActiveClass);
          if (height === currentImageHeight) {
            currentImageHeight = null;
            imagesContainer.classList.remove(containerActiveClass);
            imagesContainer.style.removeProperty("--image-height");
          } else {
            addClassToElement(`.image-resizer__button--${height}`, buttonActiveClass);
            imagesContainer.classList.add(containerActiveClass);
            imagesContainer.style.setProperty("--image-height", `${height}vh`);
            currentImageHeight = height;
          }
          goToPage(currentpage);
        });
        container.append(fitButton);
      }
      return container;
    }
    function addClassToElement(selector, className) {
      var _a, _b;
      (_b = (_a = getElement(selector)) == null ? void 0 : _a.classList) == null ? void 0 : _b.add(className);
    }
    function removeClassFromElements(selector, className) {
      getElements(selector).forEach((elem) => {
        elem.classList.remove(className);
      });
    }
    function getElement(selector, doc = document) {
      return doc.querySelector(selector);
    }
    function getElements(selector, doc = document) {
      return doc.querySelectorAll(selector);
    }
    function injectCss() {
      const style = document.createElement("style");
      style.textContent = `
      html {
        width: 100% !important;
        height: 100% !important;
      }

      body {
        padding: 0;
        width: 100% !important;
        height: 100% !important;
      }

      div#bar3 {
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      div#bar3:hover {
        opacity: 1;
      }

      div#pane_outer {
        height: 100% !important;
        width: 100% !important;
      }

      div#pane_images {
        height: 100% !important;
        width: 100% !important;
      }

      .hide-cursor,
      .hide-cursor * {
        cursor: none;
      }

      .mi0 {
        pointer-events: none;
      }

      div#pane_images.resize .mi0 {
        width: max-content !important;
        max-height: calc(var(--image-height) + 24px) !important;
      }

      div#pane_images.resize img[id^=imgsrc_] {
        width: auto !important;
        max-height: var(--image-height);
      }

      div#pane_thumbs {
        display: block;
        opacity: 0;
        z-index: 1;
        transition: opacity .3s;
      }

      .enhencer-features {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        gap: 16px;
        position: absolute;
        top: 50%;
        right: 0;
        padding-right: 5px;
        transform: translate(0, -50%);
        box-sizing: border-box;
        z-index: 100;
      }

      .enhencer-features > * {
        box-sizing: border-box;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .enhencer-features:hover > * {
        opacity: 1;
      }

      .enhencer-features__enhencer-feature {
        background: #77777777;
        padding: 10px 5px;
        border-radius: 10px;
      }

      .page-elevator {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 40px;
        opacity: 1;
      }

      .page-elevator__input {
        width: 100%;
        display: flex;
        padding: 0;
        height: 30px;
        margin: 0;
        box-sizing: border-box;
        border: #777 solid 1px;
        text-align: center;
      }

      .page-elevator__slash {
        line-height: 100%;
      }

      .image-resizer {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 40px;
      }

      .image-resizer__button {
        padding: 0;
        width: 100%;
        height: 30px;
        border: #777 solid 1px;
        border-radius: 5px;
        background-color: transparent;
        box-sizing: border-box;
        text-align: center;
        cursor: pointer;
      }

      .image-resizer__button:hover {
        background-color: #ffa50033;
      }

      .image-resizer__button--active,
      .image-resizer__button--active:hover {
        background-color: #ffa500;
      }
    `;
      getElement("head").append(style);
    }
  };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      vue.onMounted(() => {
        const isGallery = /https:\/\/exhentai\.org\/g\/\w+\/\w+\//.test(window.location.href);
        const isMultipageViewer = /https:\/\/exhentai\.org\/mpv\/\w+\/\w+\//.test(window.location.href);
        if (isGallery) {
          init$1();
        } else if (isMultipageViewer) {
          init();
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div");
      };
    }
  });
  vue.createApp(_sfc_main).mount(
    (() => {
      const app = document.createElement("div");
      app.style.display = "none";
      document.body.append(app);
      return app;
    })()
  );
})(Vue);
 
