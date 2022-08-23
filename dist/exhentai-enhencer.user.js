// ==UserScript==
// @name       exhentai-enhencer
// @namespace  https://github.com/sk2589822/Exhentai-Enhencer
// @version    1.1.3
// @icon       https://vitejs.dev/logo.svg
// @match      https://exhentai.org/g/*/*/
// @match      https://exhentai.org/mpv/*/*/
// @require    https://cdn.jsdelivr.net/npm/vue@3.2.37/dist/vue.global.prod.js
// @grant      unsafeWindow
// ==/UserScript==

// use vite-plugin-monkey@2.1.1 at 2022-08-23T13:38:18.129Z

;(({ css = "" }) => {
  const style = document.createElement("style");
  style.innerText = css;
  style.dataset.source = "vite-plugin-monkey";
  document.head.appendChild(style);
})({
  "css": "/* sass-plugin-1:/Users/maronato/Developer/vue-toastification/src/scss/index.scss */\n.Vue-Toastification__container {\n  z-index: 9999;\n  position: fixed;\n  padding: 4px;\n  width: 600px;\n  box-sizing: border-box;\n  display: flex;\n  min-height: 100%;\n  color: #fff;\n  flex-direction: column;\n  pointer-events: none;\n}\n@media only screen and (min-width : 600px) {\n  .Vue-Toastification__container.top-left,\n  .Vue-Toastification__container.top-right,\n  .Vue-Toastification__container.top-center {\n    top: 1em;\n  }\n  .Vue-Toastification__container.bottom-left,\n  .Vue-Toastification__container.bottom-right,\n  .Vue-Toastification__container.bottom-center {\n    bottom: 1em;\n    flex-direction: column-reverse;\n  }\n  .Vue-Toastification__container.top-left,\n  .Vue-Toastification__container.bottom-left {\n    left: 1em;\n  }\n  .Vue-Toastification__container.top-left .Vue-Toastification__toast,\n  .Vue-Toastification__container.bottom-left .Vue-Toastification__toast {\n    margin-right: auto;\n  }\n  @supports not (-moz-appearance: none) {\n    .Vue-Toastification__container.top-left .Vue-Toastification__toast--rtl,\n    .Vue-Toastification__container.bottom-left .Vue-Toastification__toast--rtl {\n      margin-right: unset;\n      margin-left: auto;\n    }\n  }\n  .Vue-Toastification__container.top-right,\n  .Vue-Toastification__container.bottom-right {\n    right: 1em;\n  }\n  .Vue-Toastification__container.top-right .Vue-Toastification__toast,\n  .Vue-Toastification__container.bottom-right .Vue-Toastification__toast {\n    margin-left: auto;\n  }\n  @supports not (-moz-appearance: none) {\n    .Vue-Toastification__container.top-right .Vue-Toastification__toast--rtl,\n    .Vue-Toastification__container.bottom-right .Vue-Toastification__toast--rtl {\n      margin-left: unset;\n      margin-right: auto;\n    }\n  }\n  .Vue-Toastification__container.top-center,\n  .Vue-Toastification__container.bottom-center {\n    left: 50%;\n    margin-left: -300px;\n  }\n  .Vue-Toastification__container.top-center .Vue-Toastification__toast,\n  .Vue-Toastification__container.bottom-center .Vue-Toastification__toast {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n@media only screen and (max-width : 600px) {\n  .Vue-Toastification__container {\n    width: 100vw;\n    padding: 0;\n    left: 0;\n    margin: 0;\n  }\n  .Vue-Toastification__container .Vue-Toastification__toast {\n    width: 100%;\n  }\n  .Vue-Toastification__container.top-left,\n  .Vue-Toastification__container.top-right,\n  .Vue-Toastification__container.top-center {\n    top: 0;\n  }\n  .Vue-Toastification__container.bottom-left,\n  .Vue-Toastification__container.bottom-right,\n  .Vue-Toastification__container.bottom-center {\n    bottom: 0;\n    flex-direction: column-reverse;\n  }\n}\n.Vue-Toastification__toast {\n  display: inline-flex;\n  position: relative;\n  max-height: 800px;\n  min-height: 64px;\n  box-sizing: border-box;\n  margin-bottom: 1rem;\n  padding: 22px 24px;\n  border-radius: 8px;\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);\n  justify-content: space-between;\n  font-family:\n    \"Lato\",\n    Helvetica,\n    \"Roboto\",\n    Arial,\n    sans-serif;\n  max-width: 600px;\n  min-width: 326px;\n  pointer-events: auto;\n  overflow: hidden;\n  transform: translateZ(0);\n  direction: ltr;\n}\n.Vue-Toastification__toast--rtl {\n  direction: rtl;\n}\n.Vue-Toastification__toast--default {\n  background-color: #1976d2;\n  color: #fff;\n}\n.Vue-Toastification__toast--info {\n  background-color: #2196f3;\n  color: #fff;\n}\n.Vue-Toastification__toast--success {\n  background-color: #4caf50;\n  color: #fff;\n}\n.Vue-Toastification__toast--error {\n  background-color: #ff5252;\n  color: #fff;\n}\n.Vue-Toastification__toast--warning {\n  background-color: #ffc107;\n  color: #fff;\n}\n@media only screen and (max-width : 600px) {\n  .Vue-Toastification__toast {\n    border-radius: 0px;\n    margin-bottom: 0.5rem;\n  }\n}\n.Vue-Toastification__toast-body {\n  flex: 1;\n  line-height: 24px;\n  font-size: 16px;\n  word-break: break-word;\n  white-space: pre-wrap;\n}\n.Vue-Toastification__toast-component-body {\n  flex: 1;\n}\n.Vue-Toastification__toast.disable-transition {\n  animation: none !important;\n}\n.Vue-Toastification__close-button {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 24px;\n  background: transparent;\n  outline: none;\n  border: none;\n  padding: 0;\n  padding-left: 10px;\n  cursor: pointer;\n  transition: 0.3s ease;\n  align-items: center;\n  color: #fff;\n  opacity: 0.3;\n  transition: visibility 0s, opacity 0.2s linear;\n}\n.Vue-Toastification__close-button:hover,\n.Vue-Toastification__close-button:focus {\n  opacity: 1;\n}\n.Vue-Toastification__toast:not(:hover) .Vue-Toastification__close-button.show-on-hover {\n  opacity: 0;\n}\n.Vue-Toastification__toast--rtl .Vue-Toastification__close-button {\n  padding-left: unset;\n  padding-right: 10px;\n}\n@keyframes scale-x-frames {\n  0% {\n    transform: scaleX(1);\n  }\n  100% {\n    transform: scaleX(0);\n  }\n}\n.Vue-Toastification__progress-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  z-index: 10000;\n  background-color: rgba(255, 255, 255, 0.7);\n  transform-origin: left;\n  animation: scale-x-frames linear 1 forwards;\n}\n.Vue-Toastification__toast--rtl .Vue-Toastification__progress-bar {\n  right: 0;\n  left: unset;\n  transform-origin: right;\n}\n.Vue-Toastification__icon {\n  margin: auto 18px auto 0px;\n  background: transparent;\n  outline: none;\n  border: none;\n  padding: 0;\n  transition: 0.3s ease;\n  align-items: center;\n  width: 20px;\n  height: 100%;\n}\n.Vue-Toastification__toast--rtl .Vue-Toastification__icon {\n  margin: auto 0px auto 18px;\n}\n@keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0);\n  }\n  75% {\n    transform: translate3d(10px, 0, 0);\n  }\n  90% {\n    transform: translate3d(-5px, 0, 0);\n  }\n  to {\n    transform: none;\n  }\n}\n@keyframes bounceOutRight {\n  40% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0);\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(1000px, 0, 0);\n  }\n}\n@keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0);\n  }\n  75% {\n    transform: translate3d(-10px, 0, 0);\n  }\n  90% {\n    transform: translate3d(5px, 0, 0);\n  }\n  to {\n    transform: none;\n  }\n}\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0);\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n@keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n  75% {\n    transform: translate3d(0, 10px, 0);\n  }\n  90% {\n    transform: translate3d(0, -5px, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes bounceOutUp {\n  20% {\n    transform: translate3d(0, -10px, 0);\n  }\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0);\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n@keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0);\n  }\n  75% {\n    transform: translate3d(0, -10px, 0);\n  }\n  90% {\n    transform: translate3d(0, 5px, 0);\n  }\n  to {\n    transform: none;\n  }\n}\n@keyframes bounceOutDown {\n  20% {\n    transform: translate3d(0, 10px, 0);\n  }\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n.Vue-Toastification__bounce-enter-active.top-left,\n.Vue-Toastification__bounce-enter-active.bottom-left {\n  animation-name: bounceInLeft;\n}\n.Vue-Toastification__bounce-enter-active.top-right,\n.Vue-Toastification__bounce-enter-active.bottom-right {\n  animation-name: bounceInRight;\n}\n.Vue-Toastification__bounce-enter-active.top-center {\n  animation-name: bounceInDown;\n}\n.Vue-Toastification__bounce-enter-active.bottom-center {\n  animation-name: bounceInUp;\n}\n.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-left,\n.Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-left {\n  animation-name: bounceOutLeft;\n}\n.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-right,\n.Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-right {\n  animation-name: bounceOutRight;\n}\n.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-center {\n  animation-name: bounceOutUp;\n}\n.Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-center {\n  animation-name: bounceOutDown;\n}\n.Vue-Toastification__bounce-leave-active,\n.Vue-Toastification__bounce-enter-active {\n  animation-duration: 750ms;\n  animation-fill-mode: both;\n}\n.Vue-Toastification__bounce-move {\n  transition-timing-function: ease-in-out;\n  transition-property: all;\n  transition-duration: 400ms;\n}\n@keyframes fadeOutTop {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n}\n@keyframes fadeOutLeft {\n  0% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(-50px);\n    opacity: 0;\n  }\n}\n@keyframes fadeOutBottom {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(50px);\n    opacity: 0;\n  }\n}\n@keyframes fadeOutRight {\n  0% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(50px);\n    opacity: 0;\n  }\n}\n@keyframes fadeInLeft {\n  0% {\n    transform: translateX(-50px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes fadeInRight {\n  0% {\n    transform: translateX(50px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes fadeInTop {\n  0% {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes fadeInBottom {\n  0% {\n    transform: translateY(50px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.Vue-Toastification__fade-enter-active.top-left,\n.Vue-Toastification__fade-enter-active.bottom-left {\n  animation-name: fadeInLeft;\n}\n.Vue-Toastification__fade-enter-active.top-right,\n.Vue-Toastification__fade-enter-active.bottom-right {\n  animation-name: fadeInRight;\n}\n.Vue-Toastification__fade-enter-active.top-center {\n  animation-name: fadeInTop;\n}\n.Vue-Toastification__fade-enter-active.bottom-center {\n  animation-name: fadeInBottom;\n}\n.Vue-Toastification__fade-leave-active:not(.disable-transition).top-left,\n.Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-left {\n  animation-name: fadeOutLeft;\n}\n.Vue-Toastification__fade-leave-active:not(.disable-transition).top-right,\n.Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-right {\n  animation-name: fadeOutRight;\n}\n.Vue-Toastification__fade-leave-active:not(.disable-transition).top-center {\n  animation-name: fadeOutTop;\n}\n.Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-center {\n  animation-name: fadeOutBottom;\n}\n.Vue-Toastification__fade-leave-active,\n.Vue-Toastification__fade-enter-active {\n  animation-duration: 750ms;\n  animation-fill-mode: both;\n}\n.Vue-Toastification__fade-move {\n  transition-timing-function: ease-in-out;\n  transition-property: all;\n  transition-duration: 400ms;\n}\n@keyframes slideInBlurredLeft {\n  0% {\n    transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);\n    transform-origin: 100% 50%;\n    filter: blur(40px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 50%;\n    filter: blur(0);\n    opacity: 1;\n  }\n}\n@keyframes slideInBlurredTop {\n  0% {\n    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);\n    transform-origin: 50% 0%;\n    filter: blur(240px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 50%;\n    filter: blur(0);\n    opacity: 1;\n  }\n}\n@keyframes slideInBlurredRight {\n  0% {\n    transform: translateX(1000px) scaleX(2.5) scaleY(0.2);\n    transform-origin: 0% 50%;\n    filter: blur(40px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 50%;\n    filter: blur(0);\n    opacity: 1;\n  }\n}\n@keyframes slideInBlurredBottom {\n  0% {\n    transform: translateY(1000px) scaleY(2.5) scaleX(0.2);\n    transform-origin: 50% 100%;\n    filter: blur(240px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 50%;\n    filter: blur(0);\n    opacity: 1;\n  }\n}\n@keyframes slideOutBlurredTop {\n  0% {\n    transform: translateY(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 0%;\n    filter: blur(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-1000px) scaleY(2) scaleX(0.2);\n    transform-origin: 50% 0%;\n    filter: blur(240px);\n    opacity: 0;\n  }\n}\n@keyframes slideOutBlurredBottom {\n  0% {\n    transform: translateY(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 50%;\n    filter: blur(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(1000px) scaleY(2) scaleX(0.2);\n    transform-origin: 50% 100%;\n    filter: blur(240px);\n    opacity: 0;\n  }\n}\n@keyframes slideOutBlurredLeft {\n  0% {\n    transform: translateX(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 50%;\n    filter: blur(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(-1000px) scaleX(2) scaleY(0.2);\n    transform-origin: 100% 50%;\n    filter: blur(40px);\n    opacity: 0;\n  }\n}\n@keyframes slideOutBlurredRight {\n  0% {\n    transform: translateX(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 50%;\n    filter: blur(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(1000px) scaleX(2) scaleY(0.2);\n    transform-origin: 0% 50%;\n    filter: blur(40px);\n    opacity: 0;\n  }\n}\n.Vue-Toastification__slideBlurred-enter-active.top-left,\n.Vue-Toastification__slideBlurred-enter-active.bottom-left {\n  animation-name: slideInBlurredLeft;\n}\n.Vue-Toastification__slideBlurred-enter-active.top-right,\n.Vue-Toastification__slideBlurred-enter-active.bottom-right {\n  animation-name: slideInBlurredRight;\n}\n.Vue-Toastification__slideBlurred-enter-active.top-center {\n  animation-name: slideInBlurredTop;\n}\n.Vue-Toastification__slideBlurred-enter-active.bottom-center {\n  animation-name: slideInBlurredBottom;\n}\n.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-left,\n.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-left {\n  animation-name: slideOutBlurredLeft;\n}\n.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-right,\n.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-right {\n  animation-name: slideOutBlurredRight;\n}\n.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-center {\n  animation-name: slideOutBlurredTop;\n}\n.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-center {\n  animation-name: slideOutBlurredBottom;\n}\n.Vue-Toastification__slideBlurred-leave-active,\n.Vue-Toastification__slideBlurred-enter-active {\n  animation-duration: 750ms;\n  animation-fill-mode: both;\n}\n.Vue-Toastification__slideBlurred-move {\n  transition-timing-function: ease-in-out;\n  transition-property: all;\n  transition-duration: 400ms;\n}\n.popup[data-v-a145078a] {\n  padding: 20px;\n  text-align: center;\n  background-color: #34353b;\n  border: white solid 3px;\n  border-radius: 20px;\n  z-index: 100;\n  transition: opacity 0.3s;\n}\n.popup a[data-v-a145078a] {\n  text-decoration: underline;\n}\n.fade-enter-active[data-v-a145078a],\n.fade-leave-active[data-v-a145078a] {\n  transition: opacity 0.3s ease;\n}\n.fade-enter-from[data-v-a145078a],\n.fade-leave-to[data-v-a145078a] {\n  opacity: 0;\n}.popup[data-v-3f4d0042] {\n  padding: 20px;\n  text-align: center;\n  background-color: #34353b;\n  border: white solid 3px;\n  border-radius: 20px;\n  z-index: 100;\n  transition: opacity 0.3s;\n}\n.popup a[data-v-3f4d0042] {\n  text-decoration: underline;\n}\n.fade-enter-active[data-v-3f4d0042],\n.fade-leave-active[data-v-3f4d0042] {\n  transition: opacity 0.3s ease;\n}\n.fade-enter-from[data-v-3f4d0042],\n.fade-leave-to[data-v-3f4d0042] {\n  opacity: 0;\n}div#gmid {\n  width: 931px;\n}\ndiv#gd5 {\n  width: 158px;\n}\n.popup {\n  position: absolute;\n  right: var(--5caaa6c8);\n}\n.popup--archive {\n  top: var(--4e4089ba);\n}\n.popup--torrent {\n  top: var(--bec10ad6);\n}.page-elevator[data-v-00c1efa6] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 40px;\n  opacity: 1;\n}\n.page-elevator__input[data-v-00c1efa6] {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 30px;\n  text-align: center;\n  border: #777 solid 1px;\n  box-sizing: border-box;\n}\n.page-elevator__slash[data-v-00c1efa6] {\n  line-height: 100%;\n}/* stylelint-disable-next-line selector-id-pattern */\ndiv#pane_images .mi0 {\n  width: max-content !important;\n  max-height: calc(var(--image-height) + 24px) !important;\n}\ndiv#pane_images img[id^=imgsrc_] {\n  width: auto !important;\n  max-height: var(--image-height);\n}.image-resizer[data-v-838c2007] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 40px;\n}\n.image-resizer__button[data-v-838c2007] {\n  padding: 0;\n  width: 100%;\n  height: 30px;\n  text-align: center;\n  background-color: transparent;\n  border: #777 solid 1px;\n  border-radius: 5px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.image-resizer__button[data-v-838c2007]:hover {\n  background-color: rgba(255, 165, 0, 0.2);\n}\n.image-resizer__button--active[data-v-838c2007], .image-resizer__button--active[data-v-838c2007]:hover {\n  background-color: #ffa500;\n}/* stylelint-disable selector-id-pattern */\n/**\n * Override\n */\nhtml,\nbody,\ndiv#pane_outer,\ndiv#pane_images {\n  padding: 0;\n  width: 100% !important;\n  height: 100% !important;\n}\ndiv#bar3 {\n  display: none;\n}\n.hide-cursor,\n.hide-cursor * {\n  cursor: none;\n}\n.original-functions {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: block;\n  width: 35px;\n  height: 270px;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.original-functions:hover {\n  opacity: 1;\n}\n.original-functions > img {\n  cursor: pointer;\n}\n.mi0 > a {\n  user-select: none;\n}\n.mi0 > a > img {\n  pointer-events: none;\n}\ndiv#pane_thumbs {\n  display: block;\n  opacity: 0;\n  z-index: 1;\n  transition: opacity 0.3s;\n}\n\n/**\n * Components\n */\n.enhencer-features {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  padding-right: 5px;\n  z-index: 100;\n  flex-direction: row-reverse;\n  gap: 16px;\n  box-sizing: border-box;\n}\n.enhencer-features__feature {\n  padding: 10px 5px;\n  background: rgba(119, 119, 119, 0.4666666667);\n  border-radius: 10px;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  box-sizing: border-box;\n}\n.enhencer-features__feature:hover {\n  opacity: 1;\n}"
});

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function(vue) {
  var _a2, _b;
  "use strict";
  var __defProp$1 = Object.defineProperty;
  var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
  var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
  var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$1 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    if (__getOwnPropSymbols$1)
      for (var prop of __getOwnPropSymbols$1(b)) {
        if (__propIsEnum$1.call(b, prop))
          __defNormalProp$1(a, prop, b[prop]);
      }
    return a;
  };
  var isFunction = (value) => typeof value === "function";
  var isString$1 = (value) => typeof value === "string";
  var isNonEmptyString = (value) => isString$1(value) && value.trim().length > 0;
  var isNumber = (value) => typeof value === "number";
  var isUndefined = (value) => typeof value === "undefined";
  var isObject = (value) => typeof value === "object" && value !== null;
  var isJSX = (obj) => hasProp(obj, "tag") && isNonEmptyString(obj.tag);
  var isTouchEvent = (event) => window.TouchEvent && event instanceof TouchEvent;
  var isToastComponent = (obj) => hasProp(obj, "component") && isToastContent(obj.component);
  var isVueComponent = (c) => isFunction(c) || isObject(c);
  var isToastContent = (obj) => !isUndefined(obj) && (isString$1(obj) || isVueComponent(obj) || isToastComponent(obj));
  var isDOMRect = (obj) => isObject(obj) && ["height", "width", "right", "left", "top", "bottom"].every((p) => isNumber(obj[p]));
  var hasProp = (obj, propKey) => (isObject(obj) || isFunction(obj)) && propKey in obj;
  var getId = ((i) => () => i++)(0);
  function getX(event) {
    return isTouchEvent(event) ? event.targetTouches[0].clientX : event.clientX;
  }
  function getY(event) {
    return isTouchEvent(event) ? event.targetTouches[0].clientY : event.clientY;
  }
  var removeElement = (el) => {
    if (!isUndefined(el.remove)) {
      el.remove();
    } else if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  };
  var getVueComponentFromObj = (obj) => {
    if (isToastComponent(obj)) {
      return getVueComponentFromObj(obj.component);
    }
    if (isJSX(obj)) {
      return vue.defineComponent({
        render() {
          return obj;
        }
      });
    }
    return typeof obj === "string" ? obj : vue.toRaw(vue.unref(obj));
  };
  var normalizeToastComponent = (obj) => {
    if (typeof obj === "string") {
      return obj;
    }
    const props = hasProp(obj, "props") && isObject(obj.props) ? obj.props : {};
    const listeners = hasProp(obj, "listeners") && isObject(obj.listeners) ? obj.listeners : {};
    return { component: getVueComponentFromObj(obj), props, listeners };
  };
  var isBrowser = () => typeof window !== "undefined";
  var EventBus = class {
    constructor() {
      this.allHandlers = {};
    }
    getHandlers(eventType) {
      return this.allHandlers[eventType] || [];
    }
    on(eventType, handler) {
      const handlers = this.getHandlers(eventType);
      handlers.push(handler);
      this.allHandlers[eventType] = handlers;
    }
    off(eventType, handler) {
      const handlers = this.getHandlers(eventType);
      handlers.splice(handlers.indexOf(handler) >>> 0, 1);
    }
    emit(eventType, event) {
      const handlers = this.getHandlers(eventType);
      handlers.forEach((handler) => handler(event));
    }
  };
  var isEventBusInterface = (e) => ["on", "off", "emit"].every((f) => hasProp(e, f) && isFunction(e[f]));
  var TYPE;
  (function(TYPE2) {
    TYPE2["SUCCESS"] = "success";
    TYPE2["ERROR"] = "error";
    TYPE2["WARNING"] = "warning";
    TYPE2["INFO"] = "info";
    TYPE2["DEFAULT"] = "default";
  })(TYPE || (TYPE = {}));
  var POSITION;
  (function(POSITION2) {
    POSITION2["TOP_LEFT"] = "top-left";
    POSITION2["TOP_CENTER"] = "top-center";
    POSITION2["TOP_RIGHT"] = "top-right";
    POSITION2["BOTTOM_LEFT"] = "bottom-left";
    POSITION2["BOTTOM_CENTER"] = "bottom-center";
    POSITION2["BOTTOM_RIGHT"] = "bottom-right";
  })(POSITION || (POSITION = {}));
  var EVENTS;
  (function(EVENTS2) {
    EVENTS2["ADD"] = "add";
    EVENTS2["DISMISS"] = "dismiss";
    EVENTS2["UPDATE"] = "update";
    EVENTS2["CLEAR"] = "clear";
    EVENTS2["UPDATE_DEFAULTS"] = "update_defaults";
  })(EVENTS || (EVENTS = {}));
  var VT_NAMESPACE = "Vue-Toastification";
  var COMMON = {
    type: {
      type: String,
      default: TYPE.DEFAULT
    },
    classNames: {
      type: [String, Array],
      default: () => []
    },
    trueBoolean: {
      type: Boolean,
      default: true
    }
  };
  var ICON = {
    type: COMMON.type,
    customIcon: {
      type: [String, Boolean, Object, Function],
      default: true
    }
  };
  var CLOSE_BUTTON = {
    component: {
      type: [String, Object, Function, Boolean],
      default: "button"
    },
    classNames: COMMON.classNames,
    showOnHover: {
      type: Boolean,
      default: false
    },
    ariaLabel: {
      type: String,
      default: "close"
    }
  };
  var PROGRESS_BAR = {
    timeout: {
      type: [Number, Boolean],
      default: 5e3
    },
    hideProgressBar: {
      type: Boolean,
      default: false
    },
    isRunning: {
      type: Boolean,
      default: false
    }
  };
  var TRANSITION = {
    transition: {
      type: [Object, String],
      default: `${VT_NAMESPACE}__bounce`
    }
  };
  var CORE_TOAST = {
    position: {
      type: String,
      default: POSITION.TOP_RIGHT
    },
    draggable: COMMON.trueBoolean,
    draggablePercent: {
      type: Number,
      default: 0.6
    },
    pauseOnFocusLoss: COMMON.trueBoolean,
    pauseOnHover: COMMON.trueBoolean,
    closeOnClick: COMMON.trueBoolean,
    timeout: PROGRESS_BAR.timeout,
    hideProgressBar: PROGRESS_BAR.hideProgressBar,
    toastClassName: COMMON.classNames,
    bodyClassName: COMMON.classNames,
    icon: ICON.customIcon,
    closeButton: CLOSE_BUTTON.component,
    closeButtonClassName: CLOSE_BUTTON.classNames,
    showCloseButtonOnHover: CLOSE_BUTTON.showOnHover,
    accessibility: {
      type: Object,
      default: () => ({
        toastRole: "alert",
        closeButtonLabel: "close"
      })
    },
    rtl: {
      type: Boolean,
      default: false
    },
    eventBus: {
      type: Object,
      required: false,
      default: () => new EventBus()
    }
  };
  var TOAST = {
    id: {
      type: [String, Number],
      required: true,
      default: 0
    },
    type: COMMON.type,
    content: {
      type: [String, Object, Function],
      required: true,
      default: ""
    },
    onClick: {
      type: Function,
      default: void 0
    },
    onClose: {
      type: Function,
      default: void 0
    }
  };
  var CONTAINER = {
    container: {
      type: [
        Object,
        Function
      ],
      default: () => document.body
    },
    newestOnTop: COMMON.trueBoolean,
    maxToasts: {
      type: Number,
      default: 20
    },
    transition: TRANSITION.transition,
    toastDefaults: Object,
    filterBeforeCreate: {
      type: Function,
      default: (toast2) => toast2
    },
    filterToasts: {
      type: Function,
      default: (toasts) => toasts
    },
    containerClassName: COMMON.classNames,
    onMounted: Function,
    shareAppContext: [Boolean, Object]
  };
  var propValidators_default = {
    CORE_TOAST,
    TOAST,
    CONTAINER,
    PROGRESS_BAR,
    ICON,
    TRANSITION,
    CLOSE_BUTTON
  };
  var VtProgressBar_default = vue.defineComponent({
    name: "VtProgressBar",
    props: propValidators_default.PROGRESS_BAR,
    data() {
      return {
        hasClass: true
      };
    },
    computed: {
      style() {
        return {
          animationDuration: `${this.timeout}ms`,
          animationPlayState: this.isRunning ? "running" : "paused",
          opacity: this.hideProgressBar ? 0 : 1
        };
      },
      cpClass() {
        return this.hasClass ? `${VT_NAMESPACE}__progress-bar` : "";
      }
    },
    watch: {
      timeout() {
        this.hasClass = false;
        this.$nextTick(() => this.hasClass = true);
      }
    },
    mounted() {
      this.$el.addEventListener("animationend", this.animationEnded);
    },
    beforeUnmount() {
      this.$el.removeEventListener("animationend", this.animationEnded);
    },
    methods: {
      animationEnded() {
        this.$emit("close-toast");
      }
    }
  });
  function render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("div", {
      style: vue.normalizeStyle(_ctx.style),
      class: vue.normalizeClass(_ctx.cpClass)
    }, null, 6);
  }
  VtProgressBar_default.render = render;
  var VtProgressBar_default2 = VtProgressBar_default;
  var VtCloseButton_default = vue.defineComponent({
    name: "VtCloseButton",
    props: propValidators_default.CLOSE_BUTTON,
    computed: {
      buttonComponent() {
        if (this.component !== false) {
          return getVueComponentFromObj(this.component);
        }
        return "button";
      },
      classes() {
        const classes = [`${VT_NAMESPACE}__close-button`];
        if (this.showOnHover) {
          classes.push("show-on-hover");
        }
        return classes.concat(this.classNames);
      }
    }
  });
  var _hoisted_1$5 = /* @__PURE__ */ vue.createTextVNode(" \xD7 ");
  function render2(_ctx, _cache) {
    return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.buttonComponent), vue.mergeProps({
      "aria-label": _ctx.ariaLabel,
      class: _ctx.classes
    }, _ctx.$attrs), {
      default: vue.withCtx(() => [
        _hoisted_1$5
      ]),
      _: 1
    }, 16, ["aria-label", "class"]);
  }
  VtCloseButton_default.render = render2;
  var VtCloseButton_default2 = VtCloseButton_default;
  var VtSuccessIcon_default = {};
  var _hoisted_12 = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "check-circle",
    class: "svg-inline--fa fa-check-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  };
  var _hoisted_2$3 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
  }, null, -1);
  var _hoisted_3$1 = [
    _hoisted_2$3
  ];
  function render3(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_12, _hoisted_3$1);
  }
  VtSuccessIcon_default.render = render3;
  var VtSuccessIcon_default2 = VtSuccessIcon_default;
  var VtInfoIcon_default = {};
  var _hoisted_13 = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "info-circle",
    class: "svg-inline--fa fa-info-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  };
  var _hoisted_22 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
  }, null, -1);
  var _hoisted_32 = [
    _hoisted_22
  ];
  function render4(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_13, _hoisted_32);
  }
  VtInfoIcon_default.render = render4;
  var VtInfoIcon_default2 = VtInfoIcon_default;
  var VtWarningIcon_default = {};
  var _hoisted_14 = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "exclamation-circle",
    class: "svg-inline--fa fa-exclamation-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  };
  var _hoisted_23 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
  }, null, -1);
  var _hoisted_33 = [
    _hoisted_23
  ];
  function render5(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_14, _hoisted_33);
  }
  VtWarningIcon_default.render = render5;
  var VtWarningIcon_default2 = VtWarningIcon_default;
  var VtErrorIcon_default = {};
  var _hoisted_15 = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "exclamation-triangle",
    class: "svg-inline--fa fa-exclamation-triangle fa-w-18",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  };
  var _hoisted_24 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
  }, null, -1);
  var _hoisted_34 = [
    _hoisted_24
  ];
  function render6(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_15, _hoisted_34);
  }
  VtErrorIcon_default.render = render6;
  var VtErrorIcon_default2 = VtErrorIcon_default;
  var VtIcon_default = vue.defineComponent({
    name: "VtIcon",
    props: propValidators_default.ICON,
    computed: {
      customIconChildren() {
        return hasProp(this.customIcon, "iconChildren") ? this.trimValue(this.customIcon.iconChildren) : "";
      },
      customIconClass() {
        if (isString$1(this.customIcon)) {
          return this.trimValue(this.customIcon);
        } else if (hasProp(this.customIcon, "iconClass")) {
          return this.trimValue(this.customIcon.iconClass);
        }
        return "";
      },
      customIconTag() {
        if (hasProp(this.customIcon, "iconTag")) {
          return this.trimValue(this.customIcon.iconTag, "i");
        }
        return "i";
      },
      hasCustomIcon() {
        return this.customIconClass.length > 0;
      },
      component() {
        if (this.hasCustomIcon) {
          return this.customIconTag;
        }
        if (isToastContent(this.customIcon)) {
          return getVueComponentFromObj(this.customIcon);
        }
        return this.iconTypeComponent;
      },
      iconTypeComponent() {
        const types = {
          [TYPE.DEFAULT]: VtInfoIcon_default2,
          [TYPE.INFO]: VtInfoIcon_default2,
          [TYPE.SUCCESS]: VtSuccessIcon_default2,
          [TYPE.ERROR]: VtErrorIcon_default2,
          [TYPE.WARNING]: VtWarningIcon_default2
        };
        return types[this.type];
      },
      iconClasses() {
        const classes = [`${VT_NAMESPACE}__icon`];
        if (this.hasCustomIcon) {
          return classes.concat(this.customIconClass);
        }
        return classes;
      }
    },
    methods: {
      trimValue(value, empty = "") {
        return isNonEmptyString(value) ? value.trim() : empty;
      }
    }
  });
  function render7(_ctx, _cache) {
    return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.component), {
      class: vue.normalizeClass(_ctx.iconClasses)
    }, {
      default: vue.withCtx(() => [
        vue.createTextVNode(vue.toDisplayString(_ctx.customIconChildren), 1)
      ]),
      _: 1
    }, 8, ["class"]);
  }
  VtIcon_default.render = render7;
  var VtIcon_default2 = VtIcon_default;
  var VtToast_default = vue.defineComponent({
    name: "VtToast",
    components: { ProgressBar: VtProgressBar_default2, CloseButton: VtCloseButton_default2, Icon: VtIcon_default2 },
    inheritAttrs: false,
    props: Object.assign({}, propValidators_default.CORE_TOAST, propValidators_default.TOAST),
    data() {
      const data = {
        isRunning: true,
        disableTransitions: false,
        beingDragged: false,
        dragStart: 0,
        dragPos: { x: 0, y: 0 },
        dragRect: {}
      };
      return data;
    },
    computed: {
      classes() {
        const classes = [
          `${VT_NAMESPACE}__toast`,
          `${VT_NAMESPACE}__toast--${this.type}`,
          `${this.position}`
        ].concat(this.toastClassName);
        if (this.disableTransitions) {
          classes.push("disable-transition");
        }
        if (this.rtl) {
          classes.push(`${VT_NAMESPACE}__toast--rtl`);
        }
        return classes;
      },
      bodyClasses() {
        const classes = [
          `${VT_NAMESPACE}__toast-${isString$1(this.content) ? "body" : "component-body"}`
        ].concat(this.bodyClassName);
        return classes;
      },
      draggableStyle() {
        if (this.dragStart === this.dragPos.x) {
          return {};
        } else if (this.beingDragged) {
          return {
            transform: `translateX(${this.dragDelta}px)`,
            opacity: 1 - Math.abs(this.dragDelta / this.removalDistance)
          };
        } else {
          return {
            transition: "transform 0.2s, opacity 0.2s",
            transform: "translateX(0)",
            opacity: 1
          };
        }
      },
      dragDelta() {
        return this.beingDragged ? this.dragPos.x - this.dragStart : 0;
      },
      removalDistance() {
        if (isDOMRect(this.dragRect)) {
          return (this.dragRect.right - this.dragRect.left) * this.draggablePercent;
        }
        return 0;
      }
    },
    mounted() {
      if (this.draggable) {
        this.draggableSetup();
      }
      if (this.pauseOnFocusLoss) {
        this.focusSetup();
      }
    },
    beforeUnmount() {
      if (this.draggable) {
        this.draggableCleanup();
      }
      if (this.pauseOnFocusLoss) {
        this.focusCleanup();
      }
    },
    methods: {
      hasProp,
      getVueComponentFromObj,
      closeToast() {
        this.eventBus.emit(EVENTS.DISMISS, this.id);
      },
      clickHandler() {
        if (this.onClick) {
          this.onClick(this.closeToast);
        }
        if (this.closeOnClick) {
          if (!this.beingDragged || this.dragStart === this.dragPos.x) {
            this.closeToast();
          }
        }
      },
      timeoutHandler() {
        this.closeToast();
      },
      hoverPause() {
        if (this.pauseOnHover) {
          this.isRunning = false;
        }
      },
      hoverPlay() {
        if (this.pauseOnHover) {
          this.isRunning = true;
        }
      },
      focusPause() {
        this.isRunning = false;
      },
      focusPlay() {
        this.isRunning = true;
      },
      focusSetup() {
        addEventListener("blur", this.focusPause);
        addEventListener("focus", this.focusPlay);
      },
      focusCleanup() {
        removeEventListener("blur", this.focusPause);
        removeEventListener("focus", this.focusPlay);
      },
      draggableSetup() {
        const element = this.$el;
        element.addEventListener("touchstart", this.onDragStart, {
          passive: true
        });
        element.addEventListener("mousedown", this.onDragStart);
        addEventListener("touchmove", this.onDragMove, { passive: false });
        addEventListener("mousemove", this.onDragMove);
        addEventListener("touchend", this.onDragEnd);
        addEventListener("mouseup", this.onDragEnd);
      },
      draggableCleanup() {
        const element = this.$el;
        element.removeEventListener("touchstart", this.onDragStart);
        element.removeEventListener("mousedown", this.onDragStart);
        removeEventListener("touchmove", this.onDragMove);
        removeEventListener("mousemove", this.onDragMove);
        removeEventListener("touchend", this.onDragEnd);
        removeEventListener("mouseup", this.onDragEnd);
      },
      onDragStart(event) {
        this.beingDragged = true;
        this.dragPos = { x: getX(event), y: getY(event) };
        this.dragStart = getX(event);
        this.dragRect = this.$el.getBoundingClientRect();
      },
      onDragMove(event) {
        if (this.beingDragged) {
          event.preventDefault();
          if (this.isRunning) {
            this.isRunning = false;
          }
          this.dragPos = { x: getX(event), y: getY(event) };
        }
      },
      onDragEnd() {
        if (this.beingDragged) {
          if (Math.abs(this.dragDelta) >= this.removalDistance) {
            this.disableTransitions = true;
            this.$nextTick(() => this.closeToast());
          } else {
            setTimeout(() => {
              this.beingDragged = false;
              if (isDOMRect(this.dragRect) && this.pauseOnHover && this.dragRect.bottom >= this.dragPos.y && this.dragPos.y >= this.dragRect.top && this.dragRect.left <= this.dragPos.x && this.dragPos.x <= this.dragRect.right) {
                this.isRunning = false;
              } else {
                this.isRunning = true;
              }
            });
          }
        }
      }
    }
  });
  var _hoisted_16 = ["role"];
  function render8(_ctx, _cache) {
    const _component_Icon = vue.resolveComponent("Icon");
    const _component_CloseButton = vue.resolveComponent("CloseButton");
    const _component_ProgressBar = vue.resolveComponent("ProgressBar");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(_ctx.classes),
      style: vue.normalizeStyle(_ctx.draggableStyle),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
      onMouseenter: _cache[1] || (_cache[1] = (...args) => _ctx.hoverPause && _ctx.hoverPause(...args)),
      onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.hoverPlay && _ctx.hoverPlay(...args))
    }, [
      _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_Icon, {
        key: 0,
        "custom-icon": _ctx.icon,
        type: _ctx.type
      }, null, 8, ["custom-icon", "type"])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", {
        role: _ctx.accessibility.toastRole || "alert",
        class: vue.normalizeClass(_ctx.bodyClasses)
      }, [
        typeof _ctx.content === "string" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createTextVNode(vue.toDisplayString(_ctx.content), 1)
        ], 2112)) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.getVueComponentFromObj(_ctx.content)), vue.mergeProps({
          key: 1,
          "toast-id": _ctx.id
        }, _ctx.hasProp(_ctx.content, "props") ? _ctx.content.props : {}, vue.toHandlers(_ctx.hasProp(_ctx.content, "listeners") ? _ctx.content.listeners : {}), { onCloseToast: _ctx.closeToast }), null, 16, ["toast-id", "onCloseToast"]))
      ], 10, _hoisted_16),
      !!_ctx.closeButton ? (vue.openBlock(), vue.createBlock(_component_CloseButton, {
        key: 1,
        component: _ctx.closeButton,
        "class-names": _ctx.closeButtonClassName,
        "show-on-hover": _ctx.showCloseButtonOnHover,
        "aria-label": _ctx.accessibility.closeButtonLabel,
        onClick: vue.withModifiers(_ctx.closeToast, ["stop"])
      }, null, 8, ["component", "class-names", "show-on-hover", "aria-label", "onClick"])) : vue.createCommentVNode("v-if", true),
      _ctx.timeout ? (vue.openBlock(), vue.createBlock(_component_ProgressBar, {
        key: 2,
        "is-running": _ctx.isRunning,
        "hide-progress-bar": _ctx.hideProgressBar,
        timeout: _ctx.timeout,
        onCloseToast: _ctx.timeoutHandler
      }, null, 8, ["is-running", "hide-progress-bar", "timeout", "onCloseToast"])) : vue.createCommentVNode("v-if", true)
    ], 38);
  }
  VtToast_default.render = render8;
  var VtToast_default2 = VtToast_default;
  var VtTransition_default = vue.defineComponent({
    name: "VtTransition",
    props: propValidators_default.TRANSITION,
    emits: ["leave"],
    methods: {
      hasProp,
      leave(el) {
        if (el instanceof HTMLElement) {
          el.style.left = el.offsetLeft + "px";
          el.style.top = el.offsetTop + "px";
          el.style.width = getComputedStyle(el).width;
          el.style.position = "absolute";
        }
      }
    }
  });
  function render9(_ctx, _cache) {
    return vue.openBlock(), vue.createBlock(vue.TransitionGroup, {
      tag: "div",
      "enter-active-class": _ctx.transition.enter ? _ctx.transition.enter : `${_ctx.transition}-enter-active`,
      "move-class": _ctx.transition.move ? _ctx.transition.move : `${_ctx.transition}-move`,
      "leave-active-class": _ctx.transition.leave ? _ctx.transition.leave : `${_ctx.transition}-leave-active`,
      onLeave: _ctx.leave
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "move-class", "leave-active-class", "onLeave"]);
  }
  VtTransition_default.render = render9;
  var VtTransition_default2 = VtTransition_default;
  var VtToastContainer_default = vue.defineComponent({
    name: "VueToastification",
    devtools: {
      hide: true
    },
    components: { Toast: VtToast_default2, VtTransition: VtTransition_default2 },
    props: Object.assign({}, propValidators_default.CORE_TOAST, propValidators_default.CONTAINER, propValidators_default.TRANSITION),
    data() {
      const data = {
        count: 0,
        positions: Object.values(POSITION),
        toasts: {},
        defaults: {}
      };
      return data;
    },
    computed: {
      toastArray() {
        return Object.values(this.toasts);
      },
      filteredToasts() {
        return this.defaults.filterToasts(this.toastArray);
      }
    },
    beforeMount() {
      const events = this.eventBus;
      events.on(EVENTS.ADD, this.addToast);
      events.on(EVENTS.CLEAR, this.clearToasts);
      events.on(EVENTS.DISMISS, this.dismissToast);
      events.on(EVENTS.UPDATE, this.updateToast);
      events.on(EVENTS.UPDATE_DEFAULTS, this.updateDefaults);
      this.defaults = this.$props;
    },
    mounted() {
      this.setup(this.container);
    },
    methods: {
      async setup(container) {
        if (isFunction(container)) {
          container = await container();
        }
        removeElement(this.$el);
        container.appendChild(this.$el);
      },
      setToast(props) {
        if (!isUndefined(props.id)) {
          this.toasts[props.id] = props;
        }
      },
      addToast(params) {
        params.content = normalizeToastComponent(params.content);
        const props = Object.assign({}, this.defaults, params.type && this.defaults.toastDefaults && this.defaults.toastDefaults[params.type], params);
        const toast2 = this.defaults.filterBeforeCreate(props, this.toastArray);
        toast2 && this.setToast(toast2);
      },
      dismissToast(id) {
        const toast2 = this.toasts[id];
        if (!isUndefined(toast2) && !isUndefined(toast2.onClose)) {
          toast2.onClose();
        }
        delete this.toasts[id];
      },
      clearToasts() {
        Object.keys(this.toasts).forEach((id) => {
          this.dismissToast(id);
        });
      },
      getPositionToasts(position) {
        const toasts = this.filteredToasts.filter((toast2) => toast2.position === position).slice(0, this.defaults.maxToasts);
        return this.defaults.newestOnTop ? toasts.reverse() : toasts;
      },
      updateDefaults(update) {
        if (!isUndefined(update.container)) {
          this.setup(update.container);
        }
        this.defaults = Object.assign({}, this.defaults, update);
      },
      updateToast({
        id,
        options,
        create
      }) {
        if (this.toasts[id]) {
          if (options.timeout && options.timeout === this.toasts[id].timeout) {
            options.timeout++;
          }
          this.setToast(Object.assign({}, this.toasts[id], options));
        } else if (create) {
          this.addToast(Object.assign({}, { id }, options));
        }
      },
      getClasses(position) {
        const classes = [`${VT_NAMESPACE}__container`, position];
        return classes.concat(this.defaults.containerClassName);
      }
    }
  });
  function render10(_ctx, _cache) {
    const _component_Toast = vue.resolveComponent("Toast");
    const _component_VtTransition = vue.resolveComponent("VtTransition");
    return vue.openBlock(), vue.createElementBlock("div", null, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.positions, (pos) => {
        return vue.openBlock(), vue.createElementBlock("div", { key: pos }, [
          vue.createVNode(_component_VtTransition, {
            transition: _ctx.defaults.transition,
            class: vue.normalizeClass(_ctx.getClasses(pos))
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.getPositionToasts(pos), (toast2) => {
                return vue.openBlock(), vue.createBlock(_component_Toast, vue.mergeProps({
                  key: toast2.id
                }, toast2), null, 16);
              }), 128))
            ]),
            _: 2
          }, 1032, ["transition", "class"])
        ]);
      }), 128))
    ]);
  }
  VtToastContainer_default.render = render10;
  var VtToastContainer_default2 = VtToastContainer_default;
  var buildInterface = (globalOptions = {}, mountContainer = true) => {
    const events = globalOptions.eventBus = globalOptions.eventBus || new EventBus();
    if (mountContainer) {
      vue.nextTick(() => {
        const app2 = vue.createApp(VtToastContainer_default2, __spreadValues$1({}, globalOptions));
        const component = app2.mount(document.createElement("div"));
        const onMounted = globalOptions.onMounted;
        if (!isUndefined(onMounted)) {
          onMounted(component, app2);
        }
        if (globalOptions.shareAppContext) {
          const baseApp = globalOptions.shareAppContext;
          if (baseApp === true) {
            console.warn(`[${VT_NAMESPACE}] App to share context with was not provided.`);
          } else {
            app2._context.components = baseApp._context.components;
            app2._context.directives = baseApp._context.directives;
            app2._context.mixins = baseApp._context.mixins;
            app2._context.provides = baseApp._context.provides;
            app2.config.globalProperties = baseApp.config.globalProperties;
          }
        }
      });
    }
    const toast2 = (content, options) => {
      const props = Object.assign({}, { id: getId(), type: TYPE.DEFAULT }, options, {
        content
      });
      events.emit(EVENTS.ADD, props);
      return props.id;
    };
    toast2.clear = () => events.emit(EVENTS.CLEAR, void 0);
    toast2.updateDefaults = (update) => {
      events.emit(EVENTS.UPDATE_DEFAULTS, update);
    };
    toast2.dismiss = (id) => {
      events.emit(EVENTS.DISMISS, id);
    };
    function updateToast(id, { content, options }, create = false) {
      const opt = Object.assign({}, options, { content });
      events.emit(EVENTS.UPDATE, {
        id,
        options: opt,
        create
      });
    }
    toast2.update = updateToast;
    toast2.success = (content, options) => toast2(content, Object.assign({}, options, { type: TYPE.SUCCESS }));
    toast2.info = (content, options) => toast2(content, Object.assign({}, options, { type: TYPE.INFO }));
    toast2.error = (content, options) => toast2(content, Object.assign({}, options, { type: TYPE.ERROR }));
    toast2.warning = (content, options) => toast2(content, Object.assign({}, options, { type: TYPE.WARNING }));
    return toast2;
  };
  var createMockToastInterface = () => {
    const toast2 = () => console.warn(`[${VT_NAMESPACE}] This plugin does not support SSR!`);
    return new Proxy(toast2, {
      get() {
        return toast2;
      }
    });
  };
  function createToastInterface(optionsOrEventBus) {
    if (!isBrowser()) {
      return createMockToastInterface();
    }
    if (isEventBusInterface(optionsOrEventBus)) {
      return buildInterface({ eventBus: optionsOrEventBus }, false);
    }
    return buildInterface(optionsOrEventBus, true);
  }
  var toastInjectionKey = Symbol("VueToastification");
  var globalEventBus = new EventBus();
  var VueToastificationPlugin = (App, options) => {
    if ((options == null ? void 0 : options.shareAppContext) === true) {
      options.shareAppContext = App;
    }
    const inter = createToastInterface(__spreadValues$1({
      eventBus: globalEventBus
    }, options));
    App.provide(toastInjectionKey, inter);
  };
  var useToast = (eventBus) => {
    if (eventBus) {
      return createToastInterface(eventBus);
    }
    const toast2 = vue.getCurrentInstance() ? vue.inject(toastInjectionKey, void 0) : void 0;
    return toast2 ? toast2 : createToastInterface(globalEventBus);
  };
  var src_default = VueToastificationPlugin;
  const index = "";
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
  var __getOwnPropSymbols$f = Object.getOwnPropertySymbols;
  var __hasOwnProp$f = Object.prototype.hasOwnProperty;
  var __propIsEnum$f = Object.prototype.propertyIsEnumerable;
  var __objRest$2 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$f.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$f)
      for (var prop of __getOwnPropSymbols$f(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$f.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function useResizeObserver(target, callback, options = {}) {
    const _a3 = options, { window: window2 = defaultWindow } = _a3, observerOptions = __objRest$2(_a3, ["window"]);
    let observer;
    const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
    const cleanup = () => {
      if (observer) {
        observer.disconnect();
        observer = void 0;
      }
    };
    const stopWatch = vue.watch(() => unrefElement(target), (el) => {
      cleanup();
      if (isSupported.value && window2 && el) {
        observer = new ResizeObserver(callback);
        observer.observe(el, observerOptions);
      }
    }, { immediate: true, flush: "post" });
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
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function getElement(selector, root = document) {
    return root.querySelector(selector);
  }
  function getElements(selector, root = document) {
    return root.querySelectorAll(selector);
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
  function useElement() {
    const infoDiv = vue.ref(getElement(".gm"));
    const archiveLinkAnchor2 = vue.ref(getElement("#gd5 > p:nth-child(2) a"));
    const torrentLinkAnchor2 = vue.ref(getElement("#gd5 > p:nth-child(3) a"));
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
      const { torrentLinkAnchor: torrentLinkAnchor2 } = useElement();
      const isShow = vue.ref(false);
      const popup = vue.ref();
      vue.onMounted(() => {
        torrentLinkAnchor2.value.removeAttribute("onclick");
        torrentLinkAnchor2.value.innerText += " \u2714\uFE0F";
        if (torrentLinkAnchor2.value.innerText === "Torrent Download (1) \u2714\uFE0F") {
          setDownloadEvent();
        } else {
          setToggleEvent();
        }
      });
      function setDownloadEvent() {
        torrentLinkAnchor2.value.addEventListener("click", (event) => {
          var _a3;
          event.preventDefault();
          (_a3 = getElement("a", popup.value)) == null ? void 0 : _a3.click();
        });
      }
      function setToggleEvent() {
        torrentLinkAnchor2.value.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          isShow.value = !isShow.value;
        });
        onClickOutside(popup, (event) => {
          if (event.target === torrentLinkAnchor2.value) {
            return;
          }
          isShow.value = false;
        });
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
              [vue.vShow, isShow.value]
            ])
          ]),
          _: 1
        });
      };
    }
  });
  const PopupTorrent_vue_vue_type_style_index_0_scoped_a145078a_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const PopupTorrent = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-a145078a"]]);
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
  const toast = useToast();
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
        link.addEventListener("click", async () => {
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
      const { archiveLinkAnchor: archiveLinkAnchor2 } = useElement();
      const { setHentaiAtHomeEvent, setDirectDownloadEvent } = useDownloadEvent();
      const isShow = vue.ref(false);
      const popup = vue.ref(null);
      vue.onMounted(() => {
        archiveLinkAnchor2.value.removeAttribute("onclick");
        archiveLinkAnchor2.value.innerText += " \u2714\uFE0F";
        setToggleEvent();
        setHentaiAtHomeEvent();
        setDirectDownloadEvent();
      });
      function setToggleEvent() {
        archiveLinkAnchor2.value.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          isShow.value = !isShow.value;
        });
        onClickOutside(popup, (event) => {
          if (event.target === archiveLinkAnchor2.value) {
            return;
          }
          isShow.value = false;
        });
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
              [vue.vShow, isShow.value]
            ])
          ]),
          _: 1
        });
      };
    }
  });
  const PopupArchive_vue_vue_type_style_index_0_scoped_3f4d0042_lang = "";
  const PopupArchive = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-3f4d0042"]]);
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
      const link = getLink(torrentLinkAnchor.value);
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
      const link = getLink(archiveLinkAnchor.value);
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
    const rightWithPx = vue.ref("0");
    useResizeObserver(document.documentElement, () => {
      if (!infoDiv.value) {
        return;
      }
      rightWithPx.value = `${(document.documentElement.clientWidth - infoDiv.value.clientWidth) / 2}px`;
    });
    const archiveTopWithPx = vue.ref("0");
    (() => {
      const { top, height } = archiveLinkAnchor2.value.getBoundingClientRect();
      archiveTopWithPx.value = `${top + height + 5}px`;
    })();
    const torrentTopWithPx = vue.ref("0");
    (() => {
      const { top, height } = torrentLinkAnchor2.value.getBoundingClientRect();
      torrentTopWithPx.value = `${top + height + 5}px`;
    })();
    return {
      rightWithPx,
      archiveTopWithPx,
      torrentTopWithPx
    };
  }
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "GalleryEnhencer",
    setup(__props) {
      vue.useCssVars((_ctx) => ({
        "5caaa6c8": vue.unref(rightWithPx),
        "4e4089ba": vue.unref(archiveTopWithPx),
        "bec10ad6": vue.unref(torrentTopWithPx)
      }));
      const {
        preloadDownloadLinks,
        archiveInnerHtml: archiveInnerHtml2,
        torrentInnerHtml: torrentInnerHtml2
      } = usePreloadDownloadLinks();
      preloadDownloadLinks();
      const {
        rightWithPx,
        archiveTopWithPx,
        torrentTopWithPx
      } = usePosition();
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
    const paneImagesDiv2 = vue.ref(getElement("#pane_images"));
    const paneThumbsDiv2 = vue.ref(getElement("#pane_thumbs"));
    return {
      paneImagesDiv: paneImagesDiv2,
      paneThumbsDiv: paneThumbsDiv2
    };
  }
  const { paneImagesDiv: paneImagesDiv$1 } = useElements();
  const currentPage = vue.ref(unsafeWindow.currentpage);
  const currentImage$1 = vue.computed(() => getElement(`#imgsrc_${currentPage.value}`));
  function usePages() {
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
    const pageCount = unsafeWindow.pagecount;
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
    function setCurrentPageUpdateEvent() {
      paneImagesDiv$1.value.onscroll = () => {
        unsafeWindow.preload_scroll_images();
        currentPage.value = unsafeWindow.currentpage;
      };
    }
    return {
      appendPageIndex,
      pageCount,
      currentPage,
      currentImage: currentImage$1,
      goToNextPage: goToNextPage2,
      goToPrevPage: goToPrevPage2,
      goToPageByOffset: goToPageByOffset2,
      goToPage,
      setCurrentPageUpdateEvent
    };
  }
  const {
    currentImage,
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
          const top = currentImage.value.offsetTop;
          const height = currentImage.value.offsetHeight;
          switch (event.code) {
            case "Numpad8":
              scrollElement(paneImagesDiv.value, { absolute: top });
              break;
            case "Numpad5":
              scrollElement(paneImagesDiv.value, { absolute: top + (height - window.innerHeight) / 2 });
              break;
            case "Numpad2":
              scrollElement(paneImagesDiv.value, { absolute: top + height - window.innerHeight });
              break;
            case "ArrowUp":
              scrollElement(paneImagesDiv.value, { offset: -50 });
              break;
            case "ArrowDown":
              scrollElement(paneImagesDiv.value, { offset: 50 });
              break;
            case "ArrowLeft":
            case "Numpad1":
              goToPrevPage();
              break;
            case "ArrowRight":
            case "Numpad3":
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
        paneImagesDiv.value.addEventListener(event, (e) => {
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
        const shouldShowThumbs = e.clientX < paneThumbsDiv.value.offsetWidth + threshold;
        paneThumbsDiv.value.style.opacity = shouldShowThumbs ? "1" : "0";
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
  const _hoisted_2$2 = ["value"];
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
          }, null, 40, _hoisted_2$2),
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
  const _hoisted_2$1 = ["onClick", "textContent"];
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "ImageResizer",
    setup(__props) {
      const heightList = [100, 125, 150, 175, 200];
      const currentIndex = vue.ref(null);
      const currentHeight = vue.computed(() => {
        if (typeof currentIndex.value === "number") {
          return heightList[currentIndex.value];
        }
        return null;
      });
      const { goToPage, currentPage: currentPage2 } = usePages();
      const { paneImagesDiv: paneImagesDiv2 } = useElements();
      setResizeShortcuts();
      function resizeImage(index2) {
        if (index2 === currentIndex.value) {
          clearImageHeight();
        } else {
          setImageHeight(index2);
        }
        goToPage(currentPage2.value);
      }
      function clearImageHeight() {
        currentIndex.value = null;
        paneImagesDiv2.value.style.removeProperty("--image-height");
      }
      function setImageHeight(index2) {
        currentIndex.value = index2;
        paneImagesDiv2.value.style.setProperty("--image-height", `${currentHeight.value}vh`);
      }
      function setResizeShortcuts() {
        window.addEventListener("keydown", (event) => {
          var _a3;
          const isCtrlPressed = event.ctrlKey;
          if (isCtrlPressed) {
            const regex = /Numpad(?<index>[1-5])/;
            const matchResult = event.code.match(regex);
            if (!matchResult) {
              return;
            }
            const index2 = Number((_a3 = matchResult.groups) == null ? void 0 : _a3.index);
            setImageHeight(index2 - 1);
            goToPage(currentPage2.value);
          } else {
            switch (event.code) {
              case "NumpadAdd":
                increaseHeight();
                goToPage(currentPage2.value);
                break;
              case "NumpadSubtract":
                decreaseHeight();
                goToPage(currentPage2.value);
                break;
              case "Numpad0":
                setImageHeight(0);
                goToPage(currentPage2.value);
                break;
              case "NumpadDecimal":
                setImageHeight(Math.floor(heightList.length / 2));
                goToPage(currentPage2.value);
                break;
              case "NumpadEnter":
                clearImageHeight();
                goToPage(currentPage2.value);
                break;
            }
          }
        });
      }
      function increaseHeight() {
        if (currentIndex.value === null) {
          currentIndex.value = 0;
        } else {
          currentIndex.value = Math.min(currentIndex.value + 1, heightList.length - 1);
        }
        setImageHeight(currentIndex.value);
      }
      function decreaseHeight() {
        if (currentIndex.value === null) {
          currentIndex.value = 0;
        } else {
          currentIndex.value = Math.max(currentIndex.value - 1, 0);
        }
        setImageHeight(currentIndex.value);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
          (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(heightList, (height, index2) => {
            return vue.createElementVNode("button", {
              key: height,
              class: vue.normalizeClass(["image-resizer__button", { "image-resizer__button--active": height === vue.unref(currentHeight) }]),
              onClick: ($event) => resizeImage(index2),
              textContent: vue.toDisplayString(height)
            }, null, 10, _hoisted_2$1);
          }), 64))
        ]);
      };
    }
  });
  const ImageResizer_vue_vue_type_style_index_0_lang = "";
  const ImageResizer_vue_vue_type_style_index_1_scoped_838c2007_lang = "";
  const ImageResizer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-838c2007"]]);
  const _hoisted_1 = ["onWheel"];
  const _hoisted_2 = ["innerHTML"];
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "MultiPageViewerEnhencer",
    setup(__props) {
      const {
        appendPageIndex,
        goToPrevPage: goToPrevPage2,
        goToNextPage: goToNextPage2,
        setCurrentPageUpdateEvent
      } = usePages();
      appendPageIndex();
      setCurrentPageUpdateEvent();
      function changePage(event) {
        if (event.deltaY < 0) {
          goToPrevPage2();
        } else {
          goToNextPage2();
        }
      }
      const {
        setKeyBoardEvent,
        setChangePageClickEvent,
        setShowCursorEvent,
        setHideCursorEvent,
        setShowThumbsEvent
      } = useEvents();
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
          onWheel: vue.withModifiers(changePage, ["stop"])
        }, [
          vue.createVNode(PageElevator, { class: "enhencer-features__feature" }),
          vue.createVNode(ImageResizer, { class: "enhencer-features__feature" }),
          vue.createElementVNode("div", {
            class: "original-functions",
            innerHTML: exhentaiButtons.value
          }, null, 8, _hoisted_2)
        ], 40, _hoisted_1);
      };
    }
  });
  const MultiPageViewerEnhencer_vue_vue_type_style_index_0_lang = "";
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      const enhencer = vue.computed(() => {
        const { href } = window.location;
        const isGallery = /https:\/\/exhentai\.org\/g\/\w+\/\w+\//.test(href);
        const isMultipageViewer = /https:\/\/exhentai\.org\/mpv\/\w+\/\w+\//.test(href);
        if (isGallery) {
          return _sfc_main$4;
        }
        if (isMultipageViewer) {
          return _sfc_main$1;
        }
        return null;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(enhencer)));
      };
    }
  });
  const app = vue.createApp(_sfc_main);
  app.use(src_default, {
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
})(Vue);
 
