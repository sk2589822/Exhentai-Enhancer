// ==UserScript==
// @name       exhentai-enhencer
// @namespace  https://github.com/sk2589822/Exhentai-Enhencer
// @version    1.2.8
// @icon       https://vitejs.dev/logo.svg
// @match      https://exhentai.org/g/*/*
// @match      https://exhentai.org/mpv/*/*
// @match      https://exhentai.org/s/*/*
// @require    https://cdn.jsdelivr.net/npm/vue@3.2.38/dist/vue.global.prod.js
// @require    https://unpkg.com/pkg-cdn/dist/vue-toastification/v2.0.0-rc.5.iife.js
// @grant      unsafeWindow
// ==/UserScript==

// use vite-plugin-monkey@2.3.0 at 2022-09-17T13:27:33.827Z

;(({ css = "" }) => {
  const style = document.createElement("style");
  style.innerText = css;
  style.dataset.source = "vite-plugin-monkey";
  document.head.appendChild(style);
})({
  "css": ".Vue-Toastification__container{z-index:9999;position:fixed;padding:4px;width:600px;box-sizing:border-box;display:flex;min-height:100%;color:#fff;flex-direction:column;pointer-events:none}@media only screen and (min-width : 600px){.Vue-Toastification__container.top-left,.Vue-Toastification__container.top-right,.Vue-Toastification__container.top-center{top:1em}.Vue-Toastification__container.bottom-left,.Vue-Toastification__container.bottom-right,.Vue-Toastification__container.bottom-center{bottom:1em;flex-direction:column-reverse}.Vue-Toastification__container.top-left,.Vue-Toastification__container.bottom-left{left:1em}.Vue-Toastification__container.top-left .Vue-Toastification__toast,.Vue-Toastification__container.bottom-left .Vue-Toastification__toast{margin-right:auto}@supports not (-moz-appearance: none){.Vue-Toastification__container.top-left .Vue-Toastification__toast--rtl,.Vue-Toastification__container.bottom-left .Vue-Toastification__toast--rtl{margin-right:unset;margin-left:auto}}.Vue-Toastification__container.top-right,.Vue-Toastification__container.bottom-right{right:1em}.Vue-Toastification__container.top-right .Vue-Toastification__toast,.Vue-Toastification__container.bottom-right .Vue-Toastification__toast{margin-left:auto}@supports not (-moz-appearance: none){.Vue-Toastification__container.top-right .Vue-Toastification__toast--rtl,.Vue-Toastification__container.bottom-right .Vue-Toastification__toast--rtl{margin-left:unset;margin-right:auto}}.Vue-Toastification__container.top-center,.Vue-Toastification__container.bottom-center{left:50%;margin-left:-300px}.Vue-Toastification__container.top-center .Vue-Toastification__toast,.Vue-Toastification__container.bottom-center .Vue-Toastification__toast{margin-left:auto;margin-right:auto}}@media only screen and (max-width : 600px){.Vue-Toastification__container{width:100vw;padding:0;left:0;margin:0}.Vue-Toastification__container .Vue-Toastification__toast{width:100%}.Vue-Toastification__container.top-left,.Vue-Toastification__container.top-right,.Vue-Toastification__container.top-center{top:0}.Vue-Toastification__container.bottom-left,.Vue-Toastification__container.bottom-right,.Vue-Toastification__container.bottom-center{bottom:0;flex-direction:column-reverse}}.Vue-Toastification__toast{display:inline-flex;position:relative;max-height:800px;min-height:64px;box-sizing:border-box;margin-bottom:1rem;padding:22px 24px;border-radius:8px;box-shadow:0 1px 10px #0000001a,0 2px 15px #0000000d;justify-content:space-between;font-family:Lato,Helvetica,Roboto,Arial,sans-serif;max-width:600px;min-width:326px;pointer-events:auto;overflow:hidden;transform:translateZ(0);direction:ltr}.Vue-Toastification__toast--rtl{direction:rtl}.Vue-Toastification__toast--default{background-color:#1976d2;color:#fff}.Vue-Toastification__toast--info{background-color:#2196f3;color:#fff}.Vue-Toastification__toast--success{background-color:#4caf50;color:#fff}.Vue-Toastification__toast--error{background-color:#ff5252;color:#fff}.Vue-Toastification__toast--warning{background-color:#ffc107;color:#fff}@media only screen and (max-width : 600px){.Vue-Toastification__toast{border-radius:0;margin-bottom:.5rem}}.Vue-Toastification__toast-body{flex:1;line-height:24px;font-size:16px;word-break:break-word;white-space:pre-wrap}.Vue-Toastification__toast-component-body{flex:1}.Vue-Toastification__toast.disable-transition{animation:none!important}.Vue-Toastification__close-button{font-weight:700;font-size:24px;line-height:24px;background:transparent;outline:none;border:none;padding:0 0 0 10px;cursor:pointer;transition:.3s ease;align-items:center;color:#fff;opacity:.3;transition:visibility 0s,opacity .2s linear}.Vue-Toastification__close-button:hover,.Vue-Toastification__close-button:focus{opacity:1}.Vue-Toastification__toast:not(:hover) .Vue-Toastification__close-button.show-on-hover{opacity:0}.Vue-Toastification__toast--rtl .Vue-Toastification__close-button{padding-left:unset;padding-right:10px}@keyframes scale-x-frames{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Vue-Toastification__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:5px;z-index:10000;background-color:#ffffffb3;transform-origin:left;animation:scale-x-frames linear 1 forwards}.Vue-Toastification__toast--rtl .Vue-Toastification__progress-bar{right:0;left:unset;transform-origin:right}.Vue-Toastification__icon{margin:auto 18px auto 0;background:transparent;outline:none;border:none;padding:0;transition:.3s ease;align-items:center;width:20px;height:100%}.Vue-Toastification__toast--rtl .Vue-Toastification__icon{margin:auto 0 auto 18px}@keyframes bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes bounceOutRight{40%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(1000px,0,0)}}@keyframes bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Vue-Toastification__bounce-enter-active.top-left,.Vue-Toastification__bounce-enter-active.bottom-left{animation-name:bounceInLeft}.Vue-Toastification__bounce-enter-active.top-right,.Vue-Toastification__bounce-enter-active.bottom-right{animation-name:bounceInRight}.Vue-Toastification__bounce-enter-active.top-center{animation-name:bounceInDown}.Vue-Toastification__bounce-enter-active.bottom-center{animation-name:bounceInUp}.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-left,.Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-left{animation-name:bounceOutLeft}.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-right,.Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-right{animation-name:bounceOutRight}.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-center{animation-name:bounceOutUp}.Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-center{animation-name:bounceOutDown}.Vue-Toastification__bounce-leave-active,.Vue-Toastification__bounce-enter-active{animation-duration:.75s;animation-fill-mode:both}.Vue-Toastification__bounce-move{transition-timing-function:ease-in-out;transition-property:all;transition-duration:.4s}@keyframes fadeOutTop{0%{transform:translateY(0);opacity:1}to{transform:translateY(-50px);opacity:0}}@keyframes fadeOutLeft{0%{transform:translate(0);opacity:1}to{transform:translate(-50px);opacity:0}}@keyframes fadeOutBottom{0%{transform:translateY(0);opacity:1}to{transform:translateY(50px);opacity:0}}@keyframes fadeOutRight{0%{transform:translate(0);opacity:1}to{transform:translate(50px);opacity:0}}@keyframes fadeInLeft{0%{transform:translate(-50px);opacity:0}to{transform:translate(0);opacity:1}}@keyframes fadeInRight{0%{transform:translate(50px);opacity:0}to{transform:translate(0);opacity:1}}@keyframes fadeInTop{0%{transform:translateY(-50px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes fadeInBottom{0%{transform:translateY(50px);opacity:0}to{transform:translateY(0);opacity:1}}.Vue-Toastification__fade-enter-active.top-left,.Vue-Toastification__fade-enter-active.bottom-left{animation-name:fadeInLeft}.Vue-Toastification__fade-enter-active.top-right,.Vue-Toastification__fade-enter-active.bottom-right{animation-name:fadeInRight}.Vue-Toastification__fade-enter-active.top-center{animation-name:fadeInTop}.Vue-Toastification__fade-enter-active.bottom-center{animation-name:fadeInBottom}.Vue-Toastification__fade-leave-active:not(.disable-transition).top-left,.Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-left{animation-name:fadeOutLeft}.Vue-Toastification__fade-leave-active:not(.disable-transition).top-right,.Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-right{animation-name:fadeOutRight}.Vue-Toastification__fade-leave-active:not(.disable-transition).top-center{animation-name:fadeOutTop}.Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-center{animation-name:fadeOutBottom}.Vue-Toastification__fade-leave-active,.Vue-Toastification__fade-enter-active{animation-duration:.75s;animation-fill-mode:both}.Vue-Toastification__fade-move{transition-timing-function:ease-in-out;transition-property:all;transition-duration:.4s}@keyframes slideInBlurredLeft{0%{transform:translate(-1000px) scaleX(2.5) scaleY(.2);transform-origin:100% 50%;filter:blur(40px);opacity:0}to{transform:translate(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}}@keyframes slideInBlurredTop{0%{transform:translateY(-1000px) scaleY(2.5) scaleX(.2);transform-origin:50% 0%;filter:blur(240px);opacity:0}to{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}}@keyframes slideInBlurredRight{0%{transform:translate(1000px) scaleX(2.5) scaleY(.2);transform-origin:0% 50%;filter:blur(40px);opacity:0}to{transform:translate(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}}@keyframes slideInBlurredBottom{0%{transform:translateY(1000px) scaleY(2.5) scaleX(.2);transform-origin:50% 100%;filter:blur(240px);opacity:0}to{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}}@keyframes slideOutBlurredTop{0%{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 0%;filter:blur(0);opacity:1}to{transform:translateY(-1000px) scaleY(2) scaleX(.2);transform-origin:50% 0%;filter:blur(240px);opacity:0}}@keyframes slideOutBlurredBottom{0%{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}to{transform:translateY(1000px) scaleY(2) scaleX(.2);transform-origin:50% 100%;filter:blur(240px);opacity:0}}@keyframes slideOutBlurredLeft{0%{transform:translate(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}to{transform:translate(-1000px) scaleX(2) scaleY(.2);transform-origin:100% 50%;filter:blur(40px);opacity:0}}@keyframes slideOutBlurredRight{0%{transform:translate(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}to{transform:translate(1000px) scaleX(2) scaleY(.2);transform-origin:0% 50%;filter:blur(40px);opacity:0}}.Vue-Toastification__slideBlurred-enter-active.top-left,.Vue-Toastification__slideBlurred-enter-active.bottom-left{animation-name:slideInBlurredLeft}.Vue-Toastification__slideBlurred-enter-active.top-right,.Vue-Toastification__slideBlurred-enter-active.bottom-right{animation-name:slideInBlurredRight}.Vue-Toastification__slideBlurred-enter-active.top-center{animation-name:slideInBlurredTop}.Vue-Toastification__slideBlurred-enter-active.bottom-center{animation-name:slideInBlurredBottom}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-left,.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-left{animation-name:slideOutBlurredLeft}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-right,.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-right{animation-name:slideOutBlurredRight}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-center{animation-name:slideOutBlurredTop}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-center{animation-name:slideOutBlurredBottom}.Vue-Toastification__slideBlurred-leave-active,.Vue-Toastification__slideBlurred-enter-active{animation-duration:.75s;animation-fill-mode:both}.Vue-Toastification__slideBlurred-move{transition-timing-function:ease-in-out;transition-property:all;transition-duration:.4s}.popup[data-v-6c152cdc]{padding:20px;text-align:center;background-color:#34353b;border:white solid 3px;border-radius:20px;z-index:100;transition:opacity .3s}.popup a[data-v-6c152cdc]{text-decoration:underline}.fade-enter-active[data-v-6c152cdc],.fade-leave-active[data-v-6c152cdc]{transition:opacity .3s ease}.fade-enter-from[data-v-6c152cdc],.fade-leave-to[data-v-6c152cdc]{opacity:0}.popup[data-v-acdd4fb1]{padding:20px;text-align:center;background-color:#34353b;border:white solid 3px;border-radius:20px;z-index:100;transition:opacity .3s}.popup a[data-v-acdd4fb1]{text-decoration:underline}.fade-enter-active[data-v-acdd4fb1],.fade-leave-active[data-v-acdd4fb1]{transition:opacity .3s ease}.fade-enter-from[data-v-acdd4fb1],.fade-leave-to[data-v-acdd4fb1]{opacity:0}div#gmid{width:931px}div#gd5{width:158px}.popup{position:absolute;right:calc(var(--1e352146) * 1px)}.popup--archive{top:calc(var(--5d4c1bc0) * 1px)}.popup--torrent{top:calc(var(--3c364e9c) * 1px)}.page-elevator[data-v-00c1efa6]{display:flex;flex-direction:column;gap:10px;width:40px;opacity:1}.page-elevator__input[data-v-00c1efa6]{display:flex;margin:0;padding:0;width:100%;height:30px;text-align:center;border:#777 solid 1px;box-sizing:border-box}.page-elevator__slash[data-v-00c1efa6]{line-height:100%}div#pane_images .mi0{width:max-content!important;min-width:unset;max-height:calc(var(--image-height) + 24px)!important}div#pane_images img[id^=imgsrc_]{width:auto!important;max-height:var(--image-height)}.image-resizer[data-v-60648873]{display:flex;flex-direction:column;gap:16px;width:40px}.image-resizer__button[data-v-60648873]{padding:0;width:100%;height:30px;text-align:center;background-color:transparent;border:#777 solid 1px;border-radius:5px;box-sizing:border-box;cursor:pointer}.image-resizer__button[data-v-60648873]:hover{background-color:#ffa50033}.image-resizer__button--active[data-v-60648873],.image-resizer__button--active[data-v-60648873]:hover{background-color:orange}html,body,div#pane_outer,div#pane_images{padding:0;width:100%!important;height:100%!important}div#bar3{display:none}.hide-cursor,.hide-cursor *{cursor:none}.original-functions{position:absolute;top:0;right:0;display:block;width:35px;height:270px;opacity:0;transition:opacity .3s ease}.original-functions:hover{opacity:1}.original-functions>img{cursor:pointer}.mi0>a{user-select:none}.mi0>a>img{pointer-events:none}div.mi1{display:flex}div.mi1 img{display:block;margin:0}div.mi2{display:flex;flex-direction:row;float:initial;margin-top:initial}div.mi3{display:flex;flex-direction:row;float:initial;margin-top:initial;order:3}div.mi4{position:initial}div#pane_thumbs{display:block;opacity:0;z-index:1;transition:opacity .3s}.enhencer-features{position:absolute;top:0;bottom:0;right:0;display:flex;align-items:center;padding-right:5px;z-index:100;flex-direction:row-reverse;gap:16px;box-sizing:border-box}.enhencer-features__feature{padding:10px 5px;background:rgba(119,119,119,.4666666667);border-radius:10px;opacity:0;transition:opacity .3s ease;box-sizing:border-box}.enhencer-features__feature:hover{opacity:1}"
});

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function(vue, Toast) {
  var _a2, _b;
  "use strict";
  const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
  const Toast__default = /* @__PURE__ */ _interopDefaultLegacy(Toast);
  const index = "";
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function getElement(selector, root2 = document) {
    return root2.querySelector(selector);
  }
  function getElements(selector, root2 = document) {
    return root2.querySelectorAll(selector);
  }
  async function getDoc(url, options) {
    const response = await fetch(url, options);
    const html = await response.text();
    return new DOMParser().parseFromString(html, "text/html");
  }
  function scrollElement(element, { offset, absolute }) {
    if (offset) {
      element.scrollTop += offset;
      return;
    }
    if (absolute) {
      element.scrollTop = absolute;
    }
  }
  class Logger {
    constructor(feature, scope) {
      __publicField(this, "_feature");
      __publicField(this, "_featureStyle");
      __publicField(this, "_scope");
      __publicField(this, "_scopeStyle");
      this._feature = feature;
      this._scope = scope;
      this._featureStyle = "background: #777; border-radius: 5px;";
      this._scopeStyle = "background: #555; border-radius: 5px;";
    }
    set scope(scope) {
      this._scope = scope;
    }
    get prefix() {
      let prefix = `%c ${this._feature} `;
      if (this._scope) {
        prefix += `%c ${this._scope} `;
      }
      return prefix;
    }
    get style() {
      const style = [this._featureStyle];
      if (this._scope) {
        style.push(this._scopeStyle);
      }
      return style;
    }
    log(message) {
      console.log(
        this.prefix,
        ...this.style,
        message
      );
    }
    error(message, error) {
      console.error(
        this.prefix,
        ...this.style,
        message,
        error
      );
    }
  }
  class LoggerScopeDecorator {
    constructor(baseLogger2, scope) {
      __publicField(this, "_logger");
      this._logger = baseLogger2;
      this._logger.scope = scope;
    }
    log(message) {
      this._logger.log(message);
    }
    error(message, error) {
      this._logger.error(message, error);
    }
  }
  const baseLogger$1 = new Logger("Images");
  let firstImagesOfRows = null;
  async function fetchAllImages({ delayInMs = 3e3 }) {
    const logger = new LoggerScopeDecorator(baseLogger$1, "Fetch All");
    if (!isFirstPage()) {
      logger.log("Not first page, do nothing");
      return;
    }
    logger.log("Start");
    const pageUrls = getPageUrls();
    if (!pageUrls) {
      return;
    }
    if (pageUrls.length === 0) {
      logger.log("Only one page, do nothing");
      return;
    }
    for (const url of pageUrls) {
      try {
        await delay(delayInMs);
        logger.log(`fetching ${url}`);
        const doc = await getDoc(url);
        const imageElements = getImageElements(doc);
        if (!imageElements) {
          return;
        }
        appendImages(imageElements);
        firstImagesOfRows = getFirstImagesOfRows();
      } catch (error) {
        if (error instanceof Error) {
          logger.error(`fetch ${url} failed`, error);
        }
      }
    }
    logger.log("Done");
    function isFirstPage() {
      var _a3;
      return ((_a3 = getElement(".ptds")) == null ? void 0 : _a3.innerText) === "1";
    }
    function getImageElements(doc) {
      return getElements(".gdtl", doc);
    }
    function getPageUrls() {
      const lastPageElement = getElement(".ptt td:nth-last-child(2)");
      if (!lastPageElement) {
        logger.error("Get last page element failed");
        return;
      }
      const pageCount = Number(lastPageElement.innerText);
      if (pageCount === 1) {
        return [];
      }
      const { href } = window.location;
      return Array(pageCount - 1).fill("").map((_, index2) => `${href}?p=${index2 + 1}`);
    }
    function appendImages(elements) {
      var _a3;
      (_a3 = getElement("#gdt > .c")) == null ? void 0 : _a3.before(...elements);
    }
  }
  function setImagesContainerWheelEvent() {
    const logger = new LoggerScopeDecorator(baseLogger$1, "Wheel Event");
    const imagesContainer = getElement("#gdt");
    if (!imagesContainer) {
      logger.error("Images container not found");
      return;
    }
    firstImagesOfRows = getFirstImagesOfRows();
    imagesContainer.addEventListener("mousewheel", (event) => {
      if (!firstImagesOfRows) {
        logger.error("firstImagesOfRows is Empty");
        return;
      }
      const firstVisibleImageIndex = firstImagesOfRows.findIndex((image) => image.getBoundingClientRect().bottom >= 0);
      const firstVisibleImage = firstImagesOfRows[firstVisibleImageIndex];
      const boundingTop = firstVisibleImage.getBoundingClientRect().top;
      let nextIndex = firstVisibleImageIndex;
      if (Math.sign(event.deltaY) === 1 && boundingTop <= 0) {
        nextIndex++;
      } else if (Math.sign(event.deltaY) === -1 && boundingTop >= 0) {
        nextIndex--;
      }
      if (nextIndex >= 0 && nextIndex < firstImagesOfRows.length) {
        event.preventDefault();
        event.stopPropagation();
        firstImagesOfRows[nextIndex].scrollIntoView();
      }
    });
  }
  function getFirstImagesOfRows() {
    const imagesContainer = getElement("#gdt");
    const image = getElement(".gdtl");
    const imagesPerRow = Math.floor(imagesContainer.clientWidth / image.clientWidth);
    const firstImagesOfRows2 = getElements(`.gdtl:nth-child(${imagesPerRow}n + 1)`);
    if (!firstImagesOfRows2) {
      return [];
    }
    return [...firstImagesOfRows2];
  }
  var _a;
  const isClient = typeof window !== "undefined";
  const isString = (val) => typeof val === "string";
  const noop = () => {
  };
  isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
  function resolveUnref(r) {
    return typeof r === "function" ? r() : vue.unref(r);
  }
  function identity(arg) {
    return arg;
  }
  function tryOnScopeDispose(fn) {
    if (vue.getCurrentScope()) {
      vue.onScopeDispose(fn);
      return true;
    }
    return false;
  }
  function tryOnMounted(fn, sync = true) {
    if (vue.getCurrentInstance())
      vue.onMounted(fn);
    else if (sync)
      fn();
    else
      vue.nextTick(fn);
  }
  function unrefElement(elRef) {
    var _a3;
    const plain = resolveUnref(elRef);
    return (_a3 = plain == null ? void 0 : plain.$el) != null ? _a3 : plain;
  }
  const defaultWindow = isClient ? window : void 0;
  isClient ? window.document : void 0;
  isClient ? window.navigator : void 0;
  isClient ? window.location : void 0;
  function useEventListener(...args) {
    let target;
    let event;
    let listener;
    let options;
    if (isString(args[0])) {
      [event, listener, options] = args;
      target = defaultWindow;
    } else {
      [target, event, listener, options] = args;
    }
    if (!target)
      return noop;
    let cleanup = noop;
    const stopWatch = vue.watch(() => unrefElement(target), (el) => {
      cleanup();
      if (!el)
        return;
      el.addEventListener(event, listener, options);
      cleanup = () => {
        el.removeEventListener(event, listener, options);
        cleanup = noop;
      };
    }, { immediate: true, flush: "post" });
    const stop = () => {
      stopWatch();
      cleanup();
    };
    tryOnScopeDispose(stop);
    return stop;
  }
  function onClickOutside(target, handler, options = {}) {
    const { window: window2 = defaultWindow, ignore, capture = true, detectIframe = false } = options;
    if (!window2)
      return;
    const shouldListen = vue.ref(true);
    let fallback;
    const listener = (event) => {
      window2.clearTimeout(fallback);
      const el = unrefElement(target);
      const composedPath = event.composedPath();
      if (!el || el === event.target || composedPath.includes(el) || !shouldListen.value)
        return;
      if (ignore && ignore.length > 0) {
        if (ignore.some((target2) => {
          const el2 = unrefElement(target2);
          return el2 && (event.target === el2 || composedPath.includes(el2));
        }))
          return;
      }
      handler(event);
    };
    const cleanup = [
      useEventListener(window2, "click", listener, { passive: true, capture }),
      useEventListener(window2, "pointerdown", (e) => {
        const el = unrefElement(target);
        shouldListen.value = !!el && !e.composedPath().includes(el);
      }, { passive: true }),
      useEventListener(window2, "pointerup", (e) => {
        if (e.button === 0) {
          const path = e.composedPath();
          e.composedPath = () => path;
          fallback = window2.setTimeout(() => listener(e), 50);
        }
      }, { passive: true }),
      detectIframe && useEventListener(window2, "blur", (event) => {
        var _a3;
        const el = unrefElement(target);
        if (((_a3 = document.activeElement) == null ? void 0 : _a3.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(document.activeElement)))
          handler(event);
      })
    ].filter(Boolean);
    const stop = () => cleanup.forEach((fn) => fn());
    return stop;
  }
  function useSupported(callback, sync = false) {
    const isSupported = vue.ref();
    const update = () => isSupported.value = Boolean(callback());
    update();
    tryOnMounted(update, sync);
    return isSupported;
  }
  const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  const globalKey = "__vueuse_ssr_handlers__";
  _global[globalKey] = _global[globalKey] || {};
  _global[globalKey];
  var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
  var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
  var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
  var __objRest$1 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$7.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$7)
      for (var prop of __getOwnPropSymbols$7(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$7.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function useMutationObserver(target, callback, options = {}) {
    const _a3 = options, { window: window2 = defaultWindow } = _a3, mutationOptions = __objRest$1(_a3, ["window"]);
    let observer;
    const isSupported = useSupported(() => window2 && "MutationObserver" in window2);
    const cleanup = () => {
      if (observer) {
        observer.disconnect();
        observer = void 0;
      }
    };
    const stopWatch = vue.watch(() => unrefElement(target), (el) => {
      cleanup();
      if (isSupported.value && window2 && el) {
        observer = new MutationObserver(callback);
        observer.observe(el, mutationOptions);
      }
    }, { immediate: true });
    const stop = () => {
      cleanup();
      stopWatch();
    };
    tryOnScopeDispose(stop);
    return {
      isSupported,
      stop
    };
  }
  var SwipeDirection;
  (function(SwipeDirection2) {
    SwipeDirection2["UP"] = "UP";
    SwipeDirection2["RIGHT"] = "RIGHT";
    SwipeDirection2["DOWN"] = "DOWN";
    SwipeDirection2["LEFT"] = "LEFT";
    SwipeDirection2["NONE"] = "NONE";
  })(SwipeDirection || (SwipeDirection = {}));
  var __defProp2 = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp2(a, prop, b[prop]);
      }
    return a;
  };
  const _TransitionPresets = {
    easeInSine: [0.12, 0, 0.39, 0],
    easeOutSine: [0.61, 1, 0.88, 1],
    easeInOutSine: [0.37, 0, 0.63, 1],
    easeInQuad: [0.11, 0, 0.5, 0],
    easeOutQuad: [0.5, 1, 0.89, 1],
    easeInOutQuad: [0.45, 0, 0.55, 1],
    easeInCubic: [0.32, 0, 0.67, 0],
    easeOutCubic: [0.33, 1, 0.68, 1],
    easeInOutCubic: [0.65, 0, 0.35, 1],
    easeInQuart: [0.5, 0, 0.75, 0],
    easeOutQuart: [0.25, 1, 0.5, 1],
    easeInOutQuart: [0.76, 0, 0.24, 1],
    easeInQuint: [0.64, 0, 0.78, 0],
    easeOutQuint: [0.22, 1, 0.36, 1],
    easeInOutQuint: [0.83, 0, 0.17, 1],
    easeInExpo: [0.7, 0, 0.84, 0],
    easeOutExpo: [0.16, 1, 0.3, 1],
    easeInOutExpo: [0.87, 0, 0.13, 1],
    easeInCirc: [0.55, 0, 1, 0.45],
    easeOutCirc: [0, 0.55, 0.45, 1],
    easeInOutCirc: [0.85, 0, 0.15, 1],
    easeInBack: [0.36, 0, 0.66, -0.56],
    easeOutBack: [0.34, 1.56, 0.64, 1],
    easeInOutBack: [0.68, -0.6, 0.32, 1.6]
  };
  __spreadValues({
    linear: identity
  }, _TransitionPresets);
  function useElement() {
    const infoDiv = getElement(".gm");
    const archiveLinkAnchor2 = getElement("#gd5 > p:nth-child(2) a");
    const torrentLinkAnchor2 = getElement("#gd5 > p:nth-child(3) a");
    return {
      infoDiv,
      archiveLinkAnchor: archiveLinkAnchor2,
      torrentLinkAnchor: torrentLinkAnchor2
    };
  }
  const _hoisted_1$4 = ["innerHTML"];
  const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
    __name: "PopupTorrent",
    props: {
      innerHTML: {
        type: String,
        required: true
      }
    },
    setup(__props) {
      const popup = vue.ref();
      const { torrentLinkAnchor: torrentLinkAnchor2 } = useElement();
      const { isShow } = useDownloadTorrent();
      function useDownloadTorrent() {
        const isShow2 = vue.ref(false);
        vue.onMounted(() => {
          torrentLinkAnchor2.removeAttribute("onclick");
          torrentLinkAnchor2.innerText += " \u2714\uFE0F";
          if (torrentLinkAnchor2.innerText === "Torrent Download (1) \u2714\uFE0F") {
            setDownloadEvent();
          } else {
            setToggleEvent();
          }
        });
        function setDownloadEvent() {
          torrentLinkAnchor2.addEventListener("click", (event) => {
            var _a3;
            event.preventDefault();
            (_a3 = getElement("a", popup.value)) == null ? void 0 : _a3.click();
          });
        }
        function setToggleEvent() {
          torrentLinkAnchor2.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            isShow2.value = !isShow2.value;
          });
          onClickOutside(popup, (event) => {
            if (event.target === torrentLinkAnchor2) {
              return;
            }
            isShow2.value = false;
          });
        }
        return {
          isShow: isShow2
        };
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.Transition, { name: "fade" }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", {
              ref_key: "popup",
              ref: popup,
              class: "popup popup--torrent",
              innerHTML: __props.innerHTML
            }, null, 8, _hoisted_1$4), [
              [vue.vShow, vue.unref(isShow)]
            ])
          ]),
          _: 1
        });
      };
    }
  });
  const PopupTorrent_vue_vue_type_style_index_0_scoped_6c152cdc_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const PopupTorrent = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-6c152cdc"]]);
  const toast = Toast.useToast();
  function useDownloadEvent() {
    function setHentaiAtHomeEvent() {
      var _a3;
      const logger = new Logger("Hentai At Home Event");
      const hentaiAtHomeLinks = getElements(".popup--archive table td a");
      if (!(hentaiAtHomeLinks == null ? void 0 : hentaiAtHomeLinks.length)) {
        logger.error("hentai@Home Links not found.");
        return;
      }
      const postUrl = (_a3 = getElement("#hathdl_form")) == null ? void 0 : _a3.getAttribute("action");
      if (!postUrl) {
        logger.error("postUrl not found.");
        return;
      }
      for (const link of hentaiAtHomeLinks) {
        link.removeAttribute("onclick");
        link.addEventListener("click", async (event) => {
          event.preventDefault();
          const originalText = replaceLinkByLoadingIcon(link);
          const doc = await sendDownloadRequest(link, postUrl);
          const response = getElement("#db", doc);
          logger.log(response);
          const parsedResponse = parseResponse(response, logger);
          if (parsedResponse) {
            if (/download has been queued/.test(parsedResponse)) {
              toast.success(parsedResponse);
              replaceLinkByCheckIcon(link);
            } else {
              toast.error(parsedResponse);
              resetLink(link, originalText);
            }
          }
        });
      }
    }
    function replaceLinkByLoadingIcon(element) {
      const originalText = element.innerText;
      setTimeout(() => {
        element.innerText = "\u231B";
      }, 0);
      element.style.pointerEvents = "none";
      element.style.textDecoration = "none";
      return originalText;
    }
    function replaceLinkByCheckIcon(element) {
      setTimeout(() => {
        element.innerText = "\u2714\uFE0F";
      }, 0);
    }
    function resetLink(element, originalText) {
      element.innerText = originalText;
      element.style.pointerEvents = "auto";
      element.style.textDecoration = "underline";
    }
    async function sendDownloadRequest(link, postUrl) {
      var _a3, _b2;
      const ORIGINAL_SIZE = "org";
      const resolution = ((_b2 = (_a3 = link == null ? void 0 : link.getAttribute("onclick")) == null ? void 0 : _a3.split("'")) == null ? void 0 : _b2[1]) || ORIGINAL_SIZE;
      const formData = new FormData();
      formData.append("hathdl_xres", resolution);
      const doc = await getDoc(postUrl, {
        method: "POST",
        body: formData
      });
      return doc;
    }
    function parseResponse(response, logger) {
      if (!response) {
        logger.error("Failed to get response.");
        return null;
      }
      if (!response.innerHTML) {
        logger.error("Failed to get response innerHTML.");
        return null;
      }
      const result = response.innerHTML.match(new RegExp("(?<=<p>)(.*?)(?=<\\/p>)", "g"));
      if (!result) {
        logger.error("Failed to parse response.");
        return null;
      }
      return result.join("\n").replace(/<strong>#\d+<\/strong>/, "");
    }
    function setDirectDownloadEvent() {
      const logger = new Logger("Archive Event");
      const downloadButtons = getElements('form input[name="dlcheck"]');
      if (!downloadButtons) {
        logger.error("archive download buttons not found.");
        return;
      }
      for (const button of downloadButtons) {
        button.addEventListener("click", (event) => {
          var _a3;
          event.preventDefault();
          const buttonValue = button.getAttribute("value");
          const form = (_a3 = button == null ? void 0 : button.parentElement) == null ? void 0 : _a3.parentElement;
          if (!form) {
            logger.error("form not found.");
            return;
          }
          const url = form.getAttribute("action");
          if (!url) {
            logger.error("url not found.");
            return;
          }
          const popupWindow = openWindow(url);
          popupWindow.addEventListener("load", () => {
            var _a4;
            (_a4 = getElement(`input[value="${buttonValue}"]`, popupWindow.document)) == null ? void 0 : _a4.click();
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
    return {
      setHentaiAtHomeEvent,
      setDirectDownloadEvent
    };
  }
  const _hoisted_1$3 = ["innerHTML"];
  const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
    __name: "PopupArchive",
    props: {
      innerHTML: {
        type: String,
        required: true
      }
    },
    setup(__props) {
      const popup = vue.ref();
      const { archiveLinkAnchor: archiveLinkAnchor2 } = useElement();
      const { setHentaiAtHomeEvent, setDirectDownloadEvent } = useDownloadEvent();
      const { isShow } = useDownloadArchive();
      function useDownloadArchive() {
        const isShow2 = vue.ref(false);
        vue.onMounted(() => {
          archiveLinkAnchor2.removeAttribute("onclick");
          archiveLinkAnchor2.innerText += " \u2714\uFE0F";
          setToggleEvent();
          setHentaiAtHomeEvent();
          setDirectDownloadEvent();
        });
        function setToggleEvent() {
          archiveLinkAnchor2.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            isShow2.value = !isShow2.value;
          });
          onClickOutside(popup, (event) => {
            if (event.target === archiveLinkAnchor2) {
              return;
            }
            isShow2.value = false;
          });
        }
        return {
          isShow: isShow2
        };
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.Transition, { name: "fade" }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", {
              ref_key: "popup",
              ref: popup,
              class: "popup popup--archive",
              innerHTML: __props.innerHTML
            }, null, 8, _hoisted_1$3), [
              [vue.vShow, vue.unref(isShow)]
            ])
          ]),
          _: 1
        });
      };
    }
  });
  const PopupArchive_vue_vue_type_style_index_0_scoped_acdd4fb1_lang = "";
  const PopupArchive = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-acdd4fb1"]]);
  const baseLogger = new Logger("Preload Download Links");
  const torrentInnerHtml = vue.ref("");
  const archiveInnerHtml = vue.ref("");
  const { archiveLinkAnchor, torrentLinkAnchor } = useElement();
  function usePreloadDownloadLinks() {
    async function preloadDownloadLinks() {
      [archiveInnerHtml.value, torrentInnerHtml.value] = await Promise.all([
        preloadArchiveLink(),
        preloadTorrentLink()
      ]);
    }
    async function preloadTorrentLink() {
      const logger = new LoggerScopeDecorator(baseLogger, "Torrent");
      logger.log("Start");
      const link = getLink(torrentLinkAnchor);
      if (!link) {
        logger.error("link not found.");
        return "";
      }
      const doc = await getDoc(link);
      const popupContent = getPopupContent(doc, "#torrentinfo > div:first-child");
      if (!popupContent) {
        logger.error("popup content not found.");
        return "";
      }
      logger.log("End");
      return popupContent.innerHTML;
    }
    async function preloadArchiveLink() {
      const logger = new Logger("Archive");
      logger.log("Start");
      const link = getLink(archiveLinkAnchor);
      if (!link) {
        logger.error("link not found.");
        return "";
      }
      const doc = await getDoc(link);
      const popupContent = getPopupContent(doc, "#db");
      if (!popupContent) {
        logger.error("popup content not found.");
        return "";
      }
      logger.log("End");
      return popupContent.innerHTML;
    }
    function getLink(linkElement) {
      var _a3;
      const onClick = linkElement.getAttribute("onclick");
      if (!onClick) {
        return null;
      }
      return (_a3 = onClick.match(/(https:\/\/\S+)',\d+,\d+/)) == null ? void 0 : _a3[1];
    }
    function getPopupContent(doc, selector) {
      const content = getElement(selector, doc);
      if (!content) {
        return null;
      }
      content.removeAttribute("style");
      content.classList.add("popup");
      return content;
    }
    return {
      preloadDownloadLinks,
      torrentInnerHtml,
      archiveInnerHtml
    };
  }
  function usePosition() {
    const { archiveLinkAnchor: archiveLinkAnchor2, torrentLinkAnchor: torrentLinkAnchor2, infoDiv } = useElement();
    const popupRight = vue.ref(0);
    const archiveTop = vue.ref(0);
    const torrentTop = vue.ref(0);
    useMutationObserver(infoDiv, () => {
      if (!infoDiv) {
        return;
      }
      popupRight.value = getPopupRight();
      archiveTop.value = getArchiveTop();
      torrentTop.value = getTorrentTop();
    }, {
      childList: true,
      subtree: true
    });
    function getPopupRight() {
      return (document.documentElement.clientWidth - infoDiv.clientWidth) / 2;
    }
    function getArchiveTop() {
      const { top, height } = archiveLinkAnchor2.getBoundingClientRect();
      return top + height + window.scrollY + 5;
    }
    function getTorrentTop() {
      const { top, height } = torrentLinkAnchor2.getBoundingClientRect();
      return top + height + window.scrollY + 5;
    }
    return {
      popupRight,
      archiveTop,
      torrentTop
    };
  }
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "GalleryEnhencer",
    setup(__props) {
      vue.useCssVars((_ctx) => ({
        "1e352146": vue.unref(popupRight),
        "5d4c1bc0": vue.unref(archiveTop),
        "3c364e9c": vue.unref(torrentTop)
      }));
      const {
        preloadDownloadLinks,
        archiveInnerHtml: archiveInnerHtml2,
        torrentInnerHtml: torrentInnerHtml2
      } = usePreloadDownloadLinks();
      const {
        popupRight,
        archiveTop,
        torrentTop
      } = usePosition();
      preloadDownloadLinks();
      fetchAllImages({ delayInMs: 1e3 });
      setImagesContainerWheelEvent();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.unref(archiveInnerHtml2) ? (vue.openBlock(), vue.createBlock(PopupArchive, {
            key: 0,
            "inner-h-t-m-l": vue.unref(archiveInnerHtml2)
          }, null, 8, ["inner-h-t-m-l"])) : vue.createCommentVNode("", true),
          vue.unref(torrentInnerHtml2) ? (vue.openBlock(), vue.createBlock(PopupTorrent, {
            key: 1,
            "inner-h-t-m-l": vue.unref(torrentInnerHtml2)
          }, null, 8, ["inner-h-t-m-l"])) : vue.createCommentVNode("", true)
        ], 64);
      };
    }
  });
  const GalleryEnhencer_vue_vue_type_style_index_0_lang = "";
  var monkeyWindow = (_a2 = Reflect.get(document, "__monkeyWindow")) != null ? _a2 : window;
  monkeyWindow.GM;
  monkeyWindow.unsafeWindow = (_b = monkeyWindow.unsafeWindow) != null ? _b : window;
  var unsafeWindow = monkeyWindow.unsafeWindow;
  monkeyWindow.GM_info;
  monkeyWindow.GM_cookie;
  function useElements() {
    const paneImagesDiv2 = getElement("#pane_images");
    const paneThumbsDiv2 = getElement("#pane_thumbs");
    return {
      paneImagesDiv: paneImagesDiv2,
      paneThumbsDiv: paneThumbsDiv2
    };
  }
  const { paneImagesDiv: paneImagesDiv$1 } = useElements();
  const currentPage = vue.ref(unsafeWindow.currentpage);
  function usePages() {
    const pageCount = unsafeWindow.pagecount;
    function appendPageIndex() {
      const imageContainers = getElements(".mi0");
      const pageCount2 = imageContainers.length;
      const mutationObserver = new MutationObserver(([mutation]) => {
        const target = mutation.target;
        const index2 = target.id.split("image_")[1];
        const captionElement = getElement(".mi4", target);
        const captionText = captionElement == null ? void 0 : captionElement.innerText;
        if (!captionText || (captionText == null ? void 0 : captionText.includes(" \uFF0F "))) {
          return;
        }
        captionElement.innerText = `${captionText}\u3000-\u3000${index2} \uFF0F ${pageCount2}`;
      });
      const config = { attributes: true };
      imageContainers.forEach((container) => {
        mutationObserver.observe(container, config);
      });
    }
    function goToNextPage2() {
      goToPageByOffset2(1);
    }
    function goToPrevPage2() {
      goToPageByOffset2(-1);
    }
    function goToPageByOffset2(offset) {
      let index2 = currentPage.value + offset;
      index2 = Math.min(index2, pageCount);
      index2 = Math.max(index2, 1);
      goToPage(index2);
    }
    function goToPage(index2) {
      unsafeWindow.currentpage = index2;
      currentPage.value = index2;
      const target = getElement(`#image_${index2}`);
      target.scrollIntoView();
    }
    function scrollToImageTop() {
      getCurrentImage2().scrollIntoView();
    }
    function scrollToRelativePosition(relativeToViewport) {
      const currentImage = getCurrentImage2();
      const { height: imageHeight } = currentImage.getBoundingClientRect();
      const top = currentImage.offsetTop + relativeToViewport * imageHeight - window.innerHeight / 2 - 1;
      paneImagesDiv$1.scrollTo({ top });
    }
    function changePageOnClick(event) {
      if (event.deltaY < 0) {
        goToPrevPage2();
      } else {
        goToNextPage2();
      }
    }
    function setCurrentPageUpdateEvent() {
      paneImagesDiv$1.onscroll = () => {
        unsafeWindow.preload_scroll_images();
        currentPage.value = unsafeWindow.currentpage;
      };
    }
    function getCurrentImage2() {
      return getElement(`img[id^=imgsrc_${currentPage.value}]`);
    }
    return {
      appendPageIndex,
      pageCount,
      currentPage,
      getCurrentImage: getCurrentImage2,
      goToNextPage: goToNextPage2,
      goToPrevPage: goToPrevPage2,
      goToPageByOffset: goToPageByOffset2,
      goToPage,
      scrollToImageTop,
      scrollToRelativePosition,
      changePageOnClick,
      setCurrentPageUpdateEvent
    };
  }
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  const freeGlobal$1 = freeGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal$1 || freeSelf || Function("return this")();
  const root$1 = root;
  var Symbol$1 = root$1.Symbol;
  const Symbol$2 = Symbol$1;
  var objectProto$1 = Object.prototype;
  var hasOwnProperty = objectProto$1.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$1.toString;
  var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }
  var objectProto = Object.prototype;
  var nativeObjectToString = objectProto.toString;
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }
  var reWhitespace = /\s/;
  function trimmedEndIndex(string) {
    var index2 = string.length;
    while (index2-- && reWhitespace.test(string.charAt(index2))) {
    }
    return index2;
  }
  var reTrimStart = /^\s+/;
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
  }
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var now = function() {
    return root$1.Date.now();
  };
  const now$1 = now;
  var FUNC_ERROR_TEXT = "Expected a function";
  var nativeMax = Math.max, nativeMin = Math.min;
  function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now$1();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now$1());
    }
    function debounced() {
      var time = now$1(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  const {
    getCurrentImage,
    goToPageByOffset,
    goToNextPage,
    goToPrevPage
  } = usePages();
  const {
    paneImagesDiv,
    paneThumbsDiv
  } = useElements();
  function useEvents() {
    function setKeyBoardEvent() {
      document.onkeydown = null;
      window.addEventListener("keydown", (event) => {
        const isCtrlPressed = event.ctrlKey;
        if (isCtrlPressed) {
          switch (event.code) {
            case "ArrowLeft":
              goToPageByOffset(-10);
              break;
            case "ArrowRight":
              goToPageByOffset(10);
              break;
          }
        } else {
          const currentImage = getCurrentImage();
          switch (event.code) {
            case "Numpad8":
              if (currentImage) {
                scrollElement(paneImagesDiv, {
                  absolute: currentImage.offsetTop
                });
              }
              break;
            case "Numpad5":
              if (currentImage) {
                scrollElement(paneImagesDiv, {
                  absolute: currentImage.offsetTop + (currentImage.offsetHeight - window.innerHeight) / 2
                });
              }
              break;
            case "Numpad2":
              if (currentImage) {
                scrollElement(paneImagesDiv, {
                  absolute: currentImage.offsetTop + currentImage.offsetHeight - window.innerHeight
                });
              }
              break;
            case "ArrowUp":
              scrollElement(paneImagesDiv, { offset: -50 });
              break;
            case "ArrowDown":
              scrollElement(paneImagesDiv, { offset: 50 });
              break;
            case "ArrowLeft":
            case "Numpad1":
            case "Numpad4":
              goToPrevPage();
              break;
            case "Backspace":
              event.preventDefault();
              goToPrevPage();
              break;
            case "ArrowRight":
            case "Numpad3":
            case "Numpad6":
            case "Space":
              goToNextPage();
              break;
            case "PageUp":
              goToPageByOffset(-10);
              break;
            case "PageDown":
              goToPageByOffset(10);
              break;
          }
        }
      });
    }
    function setChangePageClickEvent() {
      const config = {
        click: goToNextPage,
        contextmenu: goToPrevPage
      };
      for (const [event, action] of Object.entries(config)) {
        paneImagesDiv.addEventListener(event, (e) => {
          const target = e.target;
          if (target.closest(".mi1")) {
            return;
          }
          e.preventDefault();
          e.stopPropagation();
          action();
          hideCursor(e);
        });
      }
    }
    function setShowCursorEvent() {
      document.body.addEventListener("mousemove", (event) => {
        if (!checkMouseDelta(event)) {
          return;
        }
        showCursor();
      });
    }
    function setHideCursorEvent() {
      document.body.addEventListener("mousewheel", (event) => {
        hideCursor(event);
      }, true);
      const debouncedHideCursor = debounce(hideCursor, 1e3);
      document.body.addEventListener("mousemove", (event) => {
        debouncedHideCursor(event);
      }, true);
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
    function setShowThumbsEvent() {
      document.addEventListener("mousemove", (e) => {
        const threshold = 15;
        const shouldShowThumbs = e.clientX < paneThumbsDiv.offsetWidth + threshold;
        paneThumbsDiv.style.opacity = shouldShowThumbs ? "1" : "0";
      });
    }
    return {
      setKeyBoardEvent,
      setChangePageClickEvent,
      setShowCursorEvent,
      setHideCursorEvent,
      setShowThumbsEvent
    };
  }
  const _withScopeId = (n) => (vue.pushScopeId("data-v-00c1efa6"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$2 = { class: "page-elevator" };
  const _hoisted_2$1 = ["value"];
  const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "page-elevator__slash" }, "\uFF0F", -1));
  const _hoisted_4 = ["textContent"];
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "PageElevator",
    setup(__props) {
      const {
        pageCount,
        currentPage: currentPage2,
        goToPage
      } = usePages();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
          vue.createElementVNode("input", {
            type: "text",
            class: "page-elevator__input",
            value: vue.unref(currentPage2),
            onKeydown: [
              _cache[0] || (_cache[0] = vue.withModifiers(() => {
              }, ["stop"])),
              _cache[1] || (_cache[1] = vue.withKeys(($event) => vue.unref(goToPage)(Number($event.target.value)), ["enter"]))
            ]
          }, null, 40, _hoisted_2$1),
          _hoisted_3,
          vue.createElementVNode("span", {
            textContent: vue.toDisplayString(vue.unref(pageCount))
          }, null, 8, _hoisted_4)
        ]);
      };
    }
  });
  const PageElevator_vue_vue_type_style_index_0_scoped_00c1efa6_lang = "";
  const PageElevator = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-00c1efa6"]]);
  const _hoisted_1$1 = { class: "image-resizer" };
  const _hoisted_2 = ["onClick", "textContent"];
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "ImageResizer",
    setup(__props) {
      const { scrollToRelativePosition, scrollToImageTop, getCurrentImage: getCurrentImage2 } = usePages();
      const { paneImagesDiv: paneImagesDiv2 } = useElements();
      const {
        heightList,
        currentHeight,
        onResizerClick,
        setResizeShortcuts
      } = useImageResizer();
      setResizeShortcuts();
      function useImageResizer() {
        const heightList2 = [100, 125, 150, 175, 200];
        const currentIndex = vue.ref(null);
        const currentHeight2 = vue.computed(() => {
          if (typeof currentIndex.value !== "number") {
            return null;
          }
          return heightList2[currentIndex.value];
        });
        function onResizerClick2(index2) {
          const relativeToViewport = getRelativeToViewport();
          if (index2 === currentIndex.value) {
            clearImageHeight();
          } else {
            setImageHeight(index2);
          }
          scroll(relativeToViewport);
        }
        function setImageHeight(index2) {
          currentIndex.value = index2;
          paneImagesDiv2.style.setProperty("--image-height", `${currentHeight2.value}vh`);
        }
        function clearImageHeight() {
          currentIndex.value = null;
          paneImagesDiv2.style.removeProperty("--image-height");
        }
        function increaseImageHeight() {
          const index2 = currentIndex.value === null ? 0 : Math.min(currentIndex.value + 1, heightList2.length - 1);
          setImageHeight(index2);
        }
        function decreaseImageHeight() {
          const index2 = currentIndex.value === null ? heightList2.length - 1 : Math.max(currentIndex.value - 1, 0);
          setImageHeight(index2);
        }
        function getRelativeToViewport() {
          const currentImage = getCurrentImage2();
          const { top: imageTop, height: imageHeight } = currentImage.getBoundingClientRect();
          return 1 - (imageHeight - 1 + imageTop - window.innerHeight / 2) / imageHeight;
        }
        function scroll(relativeToViewport) {
          const currentImage = getCurrentImage2();
          if (currentHeight2.value === 100) {
            scrollToImageTop();
          } else {
            scrollToRelativePosition(relativeToViewport);
          }
          if (currentImage.getBoundingClientRect().top > 1) {
            scrollToImageTop();
          }
        }
        function setResizeShortcuts2() {
          window.addEventListener("keydown", (event) => {
            var _a3;
            const relativeToViewport = getRelativeToViewport();
            const isCtrlPressed = event.ctrlKey;
            if (isCtrlPressed) {
              const regex = /Numpad(?<index>[1-5])/;
              const matchResult = event.code.match(regex);
              if (!matchResult) {
                return;
              }
              const index2 = Number((_a3 = matchResult.groups) == null ? void 0 : _a3.index);
              setImageHeight(index2 - 1);
            } else {
              switch (event.code) {
                case "NumpadAdd":
                  increaseImageHeight();
                  break;
                case "NumpadSubtract":
                  decreaseImageHeight();
                  break;
                case "Numpad0":
                  if (currentIndex.value === 0) {
                    clearImageHeight();
                  } else {
                    setImageHeight(0);
                  }
                  break;
                case "NumpadDecimal": {
                  const index2 = Math.floor(heightList2.length / 2);
                  if (currentIndex.value === index2) {
                    clearImageHeight();
                  } else {
                    setImageHeight(index2);
                  }
                  break;
                }
                case "NumpadEnter":
                  clearImageHeight();
                  break;
                default:
                  return;
              }
            }
            scroll(relativeToViewport);
          });
        }
        return {
          heightList: heightList2,
          currentHeight: currentHeight2,
          onResizerClick: onResizerClick2,
          setResizeShortcuts: setResizeShortcuts2
        };
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(heightList), (height, index2) => {
            return vue.openBlock(), vue.createElementBlock("button", {
              key: height,
              class: vue.normalizeClass(["image-resizer__button", { "image-resizer__button--active": height === vue.unref(currentHeight) }]),
              onClick: ($event) => vue.unref(onResizerClick)(index2),
              textContent: vue.toDisplayString(height)
            }, null, 10, _hoisted_2);
          }), 128))
        ]);
      };
    }
  });
  const ImageResizer_vue_vue_type_style_index_0_lang = "";
  const ImageResizer_vue_vue_type_style_index_1_scoped_60648873_lang = "";
  const ImageResizer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-60648873"]]);
  const _hoisted_1 = ["innerHTML"];
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "MultiPageViewerEnhencer",
    setup(__props) {
      const {
        appendPageIndex,
        changePageOnClick,
        setCurrentPageUpdateEvent
      } = usePages();
      const {
        setKeyBoardEvent,
        setChangePageClickEvent,
        setShowCursorEvent,
        setHideCursorEvent,
        setShowThumbsEvent
      } = useEvents();
      appendPageIndex();
      setCurrentPageUpdateEvent();
      setKeyBoardEvent();
      setChangePageClickEvent();
      setShowCursorEvent();
      setHideCursorEvent();
      setShowThumbsEvent();
      const exhentaiButtons = vue.ref("");
      vue.onMounted(() => {
        var _a3;
        exhentaiButtons.value = (_a3 = getElement("#bar3")) == null ? void 0 : _a3.innerHTML;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: "enhencer-features",
          onWheel: _cache[0] || (_cache[0] = vue.withModifiers(
            (...args) => vue.unref(changePageOnClick) && vue.unref(changePageOnClick)(...args),
            ["stop"]
          ))
        }, [
          vue.createVNode(PageElevator, { class: "enhencer-features__feature" }),
          vue.createVNode(ImageResizer, { class: "enhencer-features__feature" }),
          vue.createElementVNode("div", {
            class: "original-functions",
            innerHTML: exhentaiButtons.value
          }, null, 8, _hoisted_1)
        ], 32);
      };
    }
  });
  const MultiPageViewerEnhencer_vue_vue_type_style_index_0_lang = "";
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      const { href } = window.location;
      const { enhencer } = useEnhencer();
      const { redirectIfSinglePageViewer } = useRedirect();
      redirectIfSinglePageViewer();
      function useEnhencer() {
        const enhencer2 = vue.computed(() => {
          const isGallery = /https:\/\/exhentai\.org\/g\/\w+\/\w+/.test(href);
          if (isGallery) {
            return _sfc_main$4;
          }
          const isMultiPageViewer = /https:\/\/exhentai\.org\/mpv\/\w+\/\w+/.test(href);
          if (isMultiPageViewer) {
            return _sfc_main$1;
          }
          return null;
        });
        return {
          enhencer: enhencer2
        };
      }
      function useRedirect() {
        function redirectIfSinglePageViewer2() {
          const isSinglePageViewer = /https:\/\/exhentai\.org\/s\/\w+\/\w+/.test(href);
          if (isSinglePageViewer) {
            vue.onMounted(() => {
              const page = location.pathname.split("-")[1];
              const url = getElement(".sb > a").href.replace("/g/", "/mpv/");
              location.href = `${url}#page${page}`;
            });
          }
        }
        return {
          redirectIfSinglePageViewer: redirectIfSinglePageViewer2
        };
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(enhencer)));
      };
    }
  });
  const app = vue.createApp(_sfc_main);
  app.use(Toast__default.default, {
    transition: "Vue-Toastification__fade",
    maxToasts: 2,
    newestOnTop: true,
    pauseOnFocusLoss: true,
    hideProgressBar: true,
    closeButton: false
  });
  app.mount(
    (() => {
      const app2 = document.createElement("div");
      app2.classList.add("enhencer-container");
      document.body.append(app2);
      return app2;
    })()
  );
})(Vue, VueToastification);
