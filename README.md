# ExHentai Enhancer

## Installation
1. Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) in your browser.
2. Install [ExHentai Enhancer](https://github.com/sk2589822/Exhentai-Enhancer/raw/master/dist/exhentai-enhancer.user.js).

## Gallery Enhancer
**Applies to:**
1. URLs matching `https://e(x)hentai.org/g/*/*`

### Features
1. Load all images sequentially if there is more than one page.
2. Show an in-page pop-up instead of opening a new browser window when clicking `Archive Download` or `Torrent Download`.
3. Download the torrent directly if only one is available.
4. Scroll to the next/previous row using the mouse wheel over the image container.

## Multi-Page Viewer Enhancer
**Applies to:**
1. URLs matching `https://e(x)hentai.org/mpv/*/*`
2. **Requires:** Settings > Multi-Page Viewer > Always use the Multi-Page Viewer? > **Yup**

### Features
1. Append the current index & page count to the image info.
2. Show the thumbnail strip when hovering near it (requires thumbnails to be enabled in settings).
3. Page elevator (quick navigation).
4. Image resizer (100%, 125%, 150%, 175%, or 200% of browser height).
5. Rotate image.
6. Prevent image removal *(disabled by default)*.
  > ExHentai's built-in script removes images that are far from your current scroll position.
  > Scrolling back to a removed image may cause it to flash, since the browser must re-render it even if it's cached.
7. Auto-redirect to the Multi-Page Viewer when in the Single-Page Viewer (URLs matching `https://exhentai.org/s/*/*`).
8. Magnifier (triggered by long-pressing the left mouse button by default).


## Galleries Enhancer
**Applies to:**
1. Pages like the Front Page, Watched, Popular, etc.
2. **Requires:** Settings > Front Page Settings > Check `Thumbnail`

### Features
1. Infinite scroll.
2. Scroll to the next/previous row using the mouse wheel over the image container.
3. Highlight downloaded galleries (black on ExHentai, light yellow on E-Hentai).
4. Insert an archiver button on each gallery for quick archive access.
5. Hide gallery (click the 🚫 button to hide; click again to unhide).


## Other Features
1. Change the browser tab title to Japanese.

## Settings Panel
Open the settings panel by clicking the Tampermonkey icon and selecting **"Open settings panel"**.  
![open settings panel](https://github.com/user-attachments/assets/03437e4e-9530-4021-b369-8c8b22fe1b4d)

From here, you can disable any features you don't want or change the default action when clicking "Archive Download".  
![settings panel](https://github.com/user-attachments/assets/7248275f-58ed-4e34-9eee-003f3b18d47e)

## Shortcuts

| Key / Mouse | Feature |
| --- | --- |
| `Left Click` | Go to the next page. |
| `Numpad 3` | Go to the next page. |
| `Numpad 6` | Go to the next page. |
| `Space` | Go to the next page. |
| `Mouse Wheel Up` (hovering over enhancer) | Go to the next page. |
| `Right Click` | Go to the previous page. |
| `Numpad 1` | Go to the previous page. |
| `Numpad 4` | Go to the previous page. |
| `Backspace` | Go to the previous page. |
| `Mouse Wheel Down` (hovering over enhancer) | Go to the previous page. |
| `Ctrl` + `→` | Jump forward 10 pages. |
| `Ctrl` + `←` | Jump back 10 pages. |
| `Ctrl` + `1`~`5` | Resize image to 100% / 125% / 150% / 175% / 200%. |
| `Numpad +` | Increase image size (defaults to 100% if not set). |
| `Numpad -` | Decrease image size (defaults to 200% if not set). |
| `Numpad 0` | Set image to the smallest size (currently 100%). |
| `Numpad .` | Set image to the middle size (currently 150%). |
| `Numpad Enter` | Reset image to original size. |
| `Numpad 8` | Scroll to the top of the current image. |
| `Numpad 5` | Scroll to the middle of the current image. |
| `Numpad 2` | Scroll to the bottom of the current image. |
| `Numpad 7` | Rotate the image 90° counter-clockwise. |
| `Numpad 9` | Rotate the image 90° clockwise. |
| `F` | Toggle full screen. |
| `R` | Reload the current image. |

## Demo

### Gallery Enhancer

Archive download success  
![download success](https://github.com/user-attachments/assets/d99066ca-b659-45b9-85b9-034653ccc473)

Archive download failed  
![download failed](https://github.com/user-attachments/assets/7ca83749-74c1-43d6-8ce0-f984c0019cec)

If there is only one torrent, download directly  
![1 torrent](https://github.com/user-attachments/assets/a55e96bc-0978-4bc3-b6b4-02d36278c489)

If there are multiple torrents, show popup  
![multiple torrents](https://github.com/user-attachments/assets/367a9b28-789c-4e8e-9eca-c97ea85f3f02)

Magnet copy button  
![Magnet copy button](https://github.com/user-attachments/assets/b450d686-0b83-4d64-ab09-e6b351e0769a)

Scroll by row on image container  
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

Show thumbs when hovering  
![show thumbs when hover](https://github.com/user-attachments/assets/1141773f-8945-4da9-bab2-a904fdf0dd27)

Rotate image  
![keyboard shortcut - rotate](https://github.com/user-attachments/assets/08f0032d-cc14-40a4-b3bd-4acbae49d64f)

Jump forward/back 10 pages with `Ctrl + →` / `Ctrl + ←`  
![keyboard shortcut - next_prev 10 page](https://github.com/user-attachments/assets/359ab1e2-d3e5-4c22-9db0-9406bf49ecd1)


## Development

### Debug
1. Run `pnpm dev`.
2. Install the script when prompted by your browser.

### Build & Install Your Own Script
1. Run `pnpm build`.
2. Drag and drop `dist/exhentai-enhancer.user.js` into your browser to install it.
