# ExHentai Enhancer

## How to use
1. Install [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) to your browser.
2. Install [ExHentai Enhancer](https://github.com/sk2589822/Exhentai-Enhancer/raw/master/dist/exhentai-enhancer.user.js).

## Gallery Enhancer
works when:
1. url match `https://e(x)hentai.org/g/*/*`
2. settings -> Front Page Settings -> check `Thumbnail`

### features

1. Load all images sequentially if the there are more than one page.  
   \*Could disable by unticking `Enable auto redirect to Multi-Page Viewer` in tampermonkey menu

2. Show pop-up in same page instead of window popup when click `Archive Download` or `Torrent Download`.  
   \*Could disable by unticking `Enable better download popup` in tampermonkey menu

3. Download torrent directly if there is only 1 torrent.  
   \*Could disable by unticking `Enable better download popup` in tampermonkey menu

4. Go to next/prev row if mouse wheel on images container.  
   \*Could disable by unticking `Enable scroll per row` in tampermonkey menu

## Multi-Page Viewer Enhancer
works on: 
1. url match `https://e(x)hentai.org/mpv/*/*`
2. settings -> Multi-Page Viewer -> Always use the Multi-Page Viewer? -> Yup  
   \*Could disable all featuingres by untick `Enable Multi-Page Viewer enhancer` in tampermonkey menu

### features

1. Append current index & page count to image info.

2. Show thumbs when mouse close to/hover thumbs(remember to open thumbs in settings).

3. Add page elevator.

4. Add images resizer (Currently 100%, 125%, 150%, 175%, 200% of browser height).

5. Auto redirect to Multi-Page Viewer if in Single-Page Viewer(url match `https://exhentai.org/s/*/*`)  
   \*(Could disabled from youingr tampermonkey menu - Enable auto redirect to Multi-Page Viewer)*
   

## Front Page Enhancer
works on: 
1. url match   
   `https://e(x)hentai.org/?*` or  
   `https://e(x)hentai.org/(watched|popular)?*` or  
   `https://e(x)hentai.org/tag/*`

2. settings -> Front Page Settings -> check `Thumbnail`

### features

1. Load galleries next page when scroll to bottom of page.  
   \*Could disable by unticking `Enable infinite scroll in Front page` in tampermonkey menu

2. Go to next/prev row if mouse wheel on images container.   
   \*Could disable by unticking `Enable scroll per row` in tampermonkey menu
## Shortcuts

| Key / Mouse | Feature |
| --- | --- |
| `left click` | go to next page. |
| `numpad 3`  | go to next page. |
| `numpad 6`  | go to next page. | 
| `space` | go to next page. |
| `mouse wheel up` (when hovering enhancer) | go to next page. |
| `right click` | go to previous page. |
| `numpad 1` | go to previous page. |
| `numpad 4`  | go to previous page. |
| `backspace` | go to previous page. |
| `mouse wheel down` (when hovering enhancer) | go to previous page. |
| `ctrl` + `→` | go to next 10 page. |
| `ctrl` + `←` | go to previous 10 page. |
| `ctrl` + `1`~`5` | set current size of image resizer to 100%/125%/150%/175%/200%. |
| `numpad +` | increase current size of image resizer (set to 100% if not set yet). |
| `numpad -` | decrease current size of image resizer (set to 200% if not set yet). |
| `numpad 0` | set current size of image resizer to smallest size (currently 100%). |
| `numpad .` | set current size of image resizer to middle size (currently 150%). |
| `numpad enter` | clear current size of image resizer (to original size). |
| `numpad 8` | scroll to top of current image. |
| `numpad 5` | scroll to middle of current image. |
| `numpad 2` | scroll to bottom of current image. |
| `Key F` | Toggle full screen. |
| `Key R` | Reload current image. |

## Demo:
  ### Gallery Enhancer

  Archive download success  
  ![](https://imgur.com/a8hzlNN.gif)

  Archive download failed  
  ![](https://imgur.com/hBmh7A7.gif)

  If there is only 1 torrent, download directly  
  ![](https://imgur.com/kdu3MyP.gif)

  If there are multiple torrents, show popup  
  ![](https://imgur.com/bXd1YJH.gif)

  Scroll step by row on images container  
  ![](https://imgur.com/WdDGu8J.gif)


  ### Multi-Page Viewer Enhancer

  Page elevator  
  ![](https://imgur.com/pmwTRuJ.gif)

  Image resizer  
  ![](https://imgur.com/Jv2hMgJ.gif)

  Keyboard shortcuts for image resizer  
  ![](https://imgur.com/8IRzMkH.gif)

  Keyboard shortcuts for scroll to top/middle/bottom of current image  
  ![](https://imgur.com/552vKHC.gif)

  Show thumbs when hover  
  ![](https://imgur.com/RoVA7iX.gif)
  
  Go to next/previous 10 page by `ctrl + →` `ctrl + ←`  
  ![](https://imgur.com/5viyiJ8.gif)

## Development

### Debug
1. `pnpm dev`
2. install the script that pop-up on your browser.

### Build & Install your own script
1. `pnpm build`
2. drag `dist/exhentai-enhancer.user.js` to your browser to install the script.
