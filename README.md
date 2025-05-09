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
  ![download success](https://github.com/user-attachments/assets/d99066ca-b659-45b9-85b9-034653ccc473)

  Archive download failed  
  ![download failed](https://github.com/user-attachments/assets/7ca83749-74c1-43d6-8ce0-f984c0019cec)

  If there is only 1 torrent, download directly  
  ![1 torrent](https://github.com/user-attachments/assets/a55e96bc-0978-4bc3-b6b4-02d36278c489)

  If there are multiple torrents, show popup  
  ![multiple torrents](https://github.com/user-attachments/assets/367a9b28-789c-4e8e-9eca-c97ea85f3f02)

  Scroll step by row on images container  
  ![scroll by step](https://github.com/user-attachments/assets/3beef0f2-5c5d-4cac-afad-4bfbe3ee9b1c)


  ### Multi-Page Viewer Enhancer

  Page elevator  
  ![elevator](https://github.com/user-attachments/assets/017d1434-de50-411e-9af9-0b995a594d56)

  Image resizer  
  ![resizer](https://github.com/user-attachments/assets/30681d5c-1ac9-4586-8bcd-a8a45680c6e3)

  Keyboard shortcuts for image resizer  
  ![keyboard shortcut - resizer](https://github.com/user-attachments/assets/68264d53-3845-45c7-a6b5-a07426407066)

  Keyboard shortcuts for scroll to top/middle/bottom of current image  
  ![keyboard shortcut - position](https://github.com/user-attachments/assets/65426b45-cbdf-49e6-a8f2-fc3bc754bd21)

  Show thumbs when hover  
  ![show thumbs when hover](https://github.com/user-attachments/assets/1141773f-8945-4da9-bab2-a904fdf0dd27)

  Rotate image  
  ![keyboard shortcut - rotate](https://github.com/user-attachments/assets/08f0032d-cc14-40a4-b3bd-4acbae49d64f)

  Go to next/previous 10 page by `ctrl + →` `ctrl + ←`  
  ![keyboard shortcut - next_prev 10 page](https://github.com/user-attachments/assets/359ab1e2-d3e5-4c22-9db0-9406bf49ecd1)


## Development

### Debug
1. `pnpm dev`
2. install the script that pop-up on your browser.

### Build & Install your own script
1. `pnpm build`
2. drag `dist/exhentai-enhancer.user.js` to your browser to install the script.
