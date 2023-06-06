# ExHentai Enhancer

## How to use
1. Install [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) to your browser.
2. Install [ExHentai Enhancer](https://github.com/sk2589822/Exhentai-Enhancer/raw/master/dist/exhentai-enhancer.user.js).

## Gallery Enhancer
works when:
1. url match `https://e(x)hentai.org/g/*/*`
2. settings -> Front Page Settings -> check `Thumbnail`

### Features

1. Load all images sequentially if the there are more than one page

2. Show pop-up in same page instead of window popup when click `Archive Download` or `Torrent Download`

3. Download torrent directly if there is only 1 torrent

4. Go to next/prev row if mouse wheel on images container

## Multi-Page Viewer Enhancer
works on: 
1. url match `https://e(x)hentai.org/mpv/*/*`
2. settings -> Multi-Page Viewer -> Always use the Multi-Page Viewer? -> Yup  

### Features

1. Append current index & page count to image info

2. Show thumbs when mouse close to/hover thumbs(remember to open thumbs in settings)

3. Page elevator

4. Images resizer (Currently 100%, 125%, 150%, 175%, 200% of browser height)

5. Rotate image

6. Prevent image removal *disabled by default
  > The original script of exhentai would remove the images which are too far from your current scroll.  
    So if you scroll back to the images that have been removed. It might be flashing because although your browser has cached the image but still have to re-render it.
   
7. Auto redirect to Multi-Page Viewer if in Single-Page Viewer(url match `https://exhentai.org/s/*/*`)  


## Front Page Enhancer
works on: 
1. url match   
   `https://e(x)hentai.org/?*` or  
   `https://e(x)hentai.org/(watched|popular)?*` or  
   `https://e(x)hentai.org/tag/*`

2. settings -> Front Page Settings -> check `Thumbnail`

### Features

1. Infinite Scroll

2. Go to next/prev row if mouse wheel on images container.


## Other Features
1. Change browser title to Japanese (effect on browser/tab title)

## Settings Panel
   You can open settings panel by clicking the Tampermonkey icon first, then select "Open settings panel".  
   ![](https://imgur.com/QyUSmq2.jpg)  
   Then you can disable any features you don't want, or change the action when click "Archive Download" here.  
   ![](https://imgur.com/DLWcMW7.jpg)

## Shortcuts

| Key / Mouse | Feature |
| --- | --- |
| `left click` | Go to next page. |
| `numpad 3`  | Go to next page. |
| `numpad 6`  | Go to next page. | 
| `space` | Go to next page. |
| `mouse wheel up` (when hovering enhancer) | Go to next page. |
| `right click` | Go to previous page. |
| `numpad 1` | Go to previous page. |
| `numpad 4`  | Go to previous page. |
| `backspace` | Go to previous page. |
| `mouse wheel down` (when hovering enhancer) | Go to previous page. |
| `ctrl` + `→` | Go to next 10 page. |
| `ctrl` + `←` | Go to previous 10 page. |
| `ctrl` + `1`~`5` | Set current size of image resizer to 100%/125%/150%/175%/200%. |
| `numpad +` | Increase current size of image resizer (set to 100% if not set yet). |
| `numpad -` | Decrease current size of image resizer (set to 200% if not set yet). |
| `numpad 0` | Set current size of image resizer to smallest size (currently 100%). |
| `numpad .` | Set current size of image resizer to middle size (currently 150%). |
| `numpad enter` | Clear current size of image resizer (to original size). |
| `numpad 8` | Scroll to top of current image. |
| `numpad 5` | Scroll to middle of current image. |
| `numpad 2` | Scroll to bottom of current image. |
| `numpad 7` | Rotate the image by -90 degree. |
| `numpad 9` | Rotate the image by 90 degree. |
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

  Rotate image  
  ![](https://imgur.com/LtZJwH4.gif)
  
  Go to next/previous 10 page by `ctrl + →` `ctrl + ←`  
  ![](https://imgur.com/5viyiJ8.gif)

## Development

### Debug
1. `pnpm dev`
2. install the script that pop-up on your browser.

### Build & Install your own script
1. `pnpm build`
2. drag `dist/exhentai-enhancer.user.js` to your browser to install the script.
