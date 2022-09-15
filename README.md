# ExHentai Enhencer

## How to use
1. Install [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) to your browser.
2. Install [ExHentai Enhencer](https://github.com/sk2589822/Exhentai-Enhencer/raw/master/dist/exhentai-enhencer.user.js).

## Gallery Enhencer
Available for
1. url match ```https://exhentai.org/g/*/*```
2. settings -> Front Page Settings -> check `Thumbnail`

### features

* Load all images sequentially if the number of images is more than 200.
* Show pop-up in same page instead of window popup when click `Archive Download` or `Torrent Download`.
* Download torrent directly if there is only 1 torrent.
* Go to next/prev row if mouse wheel on images container.


  #### Demo:
  Archive download success
  ![](https://imgur.com/a8hzlNN.gif)

  Archive download failed
  ![](https://imgur.com/hBmh7A7.gif)

  If there is only 1 torrent, download directly
  ![](https://imgur.com/kdu3MyP.gif)

  If there are multiple torrents, show popup
  ![](https://imgur.com/bXd1YJH.gif)

  scroll step by row on images container
  ![](https://imgur.com/nBqGhBh.gif)
  

## Multi-Page Viewer Enhencer
available for 
1. url match ```https://exhentai.org/mpv/*/*```
2. settings -> Multi-Page Viewer -> Always use the Multi-Page Viewer? -> Yup

### features

* Append current index & page count to image info.
* Show thumbs when mouse close to/hover thumbs(remember to open thumbs in settings).
* Add page elevator.
* Add images resizer (Currently 100%, 125%, 150%, 175%, 200% of browser height). 
* Add Shortcuts:
  * `left click` `numpad 3` `numpad 6` `space`: go to next page.
  * `right click` `numpad 1` `numpad 4` `backspace`: go to previous page.
  * `mouse wheel up` (when hovering enhencer): go to next page.
  * `mouse wheel down` (when hovering enhencer): go to previous page.
  * `ctrl + →`: go to next 10 page.
  * `ctrl + ←`: go to previous 10 page.
  * `ctrl + 1~5`: set current size of images resizer to 100%/125%/150%/175%/200%.
  * `numpad +`: increase current size of images resizer (100% if not set yet).
  * `numpad -`: decrease current size of images resizer (100% if not set yet).
  * `numpad 0`: set current size of images resizer to smallest size (currently 100%).
  * `numpad .`: set current size of images resizer to middle size (currently 150%).
  * `numpad enter`: clear current size of images resizer (to original size).
  * `numpad 8`: scroll to top of current image.
  * `numpad 5`: scroll to middle of current image.
  * `numpad 2`: scroll to bottom of current image.

  #### Demo:
  page elevator
  ![](https://imgur.com/pmwTRuJ.gif)

  image resizer
  ![](https://imgur.com/Jv2hMgJ.gif)

  keyboard shortcuts for image resizer
  ![](https://imgur.com/8IRzMkH.gif)

  keyboard shortcuts for scroll to top/middle/bottom of current image
  ![](https://imgur.com/552vKHC.gif)

  show thumbs when hover
  ![](https://imgur.com/RoVA7iX.gif)
  
  go to next/previous 10 page by `ctrl + →` `ctrl + ←`
  ![](https://imgur.com/5viyiJ8.gif)

## Development

### Debug
1. ```pnpm dev```
2. install the script that pop-up on your browser.

### Build & Install your own script
1. ```pnpm build```
2. drag `dist/exhentai-enhencer.user.js` to your browser to install the script.
