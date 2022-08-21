# ExHentai Enhencer

## How to use
1. Install [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) to your browser.
2. Install [ExHentai Enhencer](https://github.com/sk2589822/Exhentai-Enhencer/raw/master/dist/exhentai-enhencer.user.js).

## Gallery Enhencer
Available if url match ```https://exhentai.org/g/*/*```

* Load all images sequentially if the number of images is more than 200.
* Show pop-up in same page instead of window popup when click `Archive Download` or `Torrent Download`.
* Download torrent directly if there is only 1 torrent.
* Go to next/prev row if mouse wheel on images container.

## Multipage Viewer Enhencer
Available if url match ```https://exhentai.org/mpv/*/*```

* Append current index & page count to image info.
* Show thumbs when mouse hover left side of window.
* Add page elevator to go to specific page directly.
* Allow to changing page with mouse click / wheel.
* Able to Resize images (by setting max-height of image. Currently 100%, 125%, 150%, 175%, 200% of browser height).
  * ctrl + 1~5: set image height to 100%/125%/150%/175%/200.
  * Numpad 0: clear the image height (to original size).
  * Numpad +: increase image height (100% if not set yet).
  * Numpad -: decrease image height (100% if not set yet).
* Add Shortcuts
  * left click: go to next page.
  * right click: go to previous page.
  * wheel up (on enhencer): go to next page.
  * wheel down (on enhencer): go to previous page.
  * ctrl +  →: go to next 10 page.
  * ctrl +  ←: go to previous 10 page.
  * Numpad 8: scroll to top of image
  * Numpad 5: scroll to middle of image
  * Numpad 2: scroll to bottom of image

## Development

### Debug
1. ```yarn dev```
2. install the script that pop-up on your browser.

### Build & Install your own script
1. ```yarn build```
2. drag `dist/exhentai-enhencer.user.js` to your browser to install the script.
