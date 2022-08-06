# ExHentai Enhencer

## Gallery Enhencer
Available if url match ```https://exhentai.org/g/*/*```

* Load all images sequentially if the number of images is more than 200.
* Show pop-up in same page instead of window popup when click `Archive Download` or `Torrent Download`.
* Download torrent directly if there is only 1 torrent.
* Go to next/prev row if mouse wheel on images container.

## Multipage Viewer Enhencer
Available if url match ```https://exhentai.org/mpv/*/*```

* Append current index & page count to image info.
* Show thumbs when mouse on hover left side of window.
* Add page elevator to go to specific page directly.
* Allow to changing page with mouse click / wheel.
* Add buttons to resize images (by setting max-height of image. Currently 100%, 125%, 150%, 175%, 200% of browser height).

## Usage
1. Install [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) to your browser.
2. Install [ExHentai Enhencer](https://github.com/sk2589822/Exhentai-Enhencer/raw/master/dist/exhentai-enhencer.user.js).

## Development

### Debug
1. ```yarn dev```
2. install the script that pop-up on your browser.

### Build & Install your own script
1. ```yarn build```
2. drag `dist/exhentai-enhencer.user.js` to your browser to install the script.
