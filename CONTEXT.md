# Exhentai Enhancer

A userscript that improves the E-Hentai / ExHentai reading and downloading
experience. This document defines the vocabulary the codebase uses; it is a
glossary, not a specification.

## Language

### Gallery

**Gallery**:
One work on E-Hentai / ExHentai, addressed by a gallery id and token.
_Avoid_: Album, doujin, book

**Downloaded Gallery**:
A Gallery the user has recorded locally as already downloaded, so it can be
highlighted in listings. A permanent local record, unrelated to whether the
site still holds a download authorisation.
_Avoid_: Read gallery, seen gallery

### Downloading

**Archive**:
The downloadable zip of a Gallery, offered by the site's archiver.
_Avoid_: Zip, file, download

**Direct Download**:
Getting an Archive straight from the archiver, which hands back a file
location to navigate to.
_Avoid_: Normal download, instant download

**H@H Download**:
Getting an Archive by queueing it on a Hentai@Home client instead of
downloading it in the browser.
_Avoid_: Hath download, client download

**H@H Resolution**:
The size an H@H Download is rendered at. The site decides which ones exist
and which of those a given Gallery offers, so a resolution the user picked
may be unavailable on the Gallery in front of them.
_Avoid_: Quality, size, xres

**Archive Session**:
The download authorisation the archiver creates when a user pays to unlock an
Archive. While it is active the same Archive can be downloaded again without
paying; cancelling it means the next download is charged again. The site
rejects a session that has been used from too many different locations.
_Avoid_: Unlock, purchase, download session

**Archive Session Action**:
The user's choice of what clicking Archive Download should do when an Archive
Session is still active.

### Enhancers

**Enhancer**:
The component responsible for one kind of page — Gallery, Galleries,
Multi-Page Viewer. Exactly one is active per page.
_Avoid_: Handler, module, feature

**Better Popup**:
Replacing the site's `window.open()` windows for Archive, Torrent and
Favorites with preloaded popups rendered in the current page.
_Avoid_: Modal, inline popup

**Quick Download**:
Skipping the Archive popup entirely and starting a download straight from a
click on Archive Download, using a preconfigured method.
_Avoid_: Auto download, one-click download
