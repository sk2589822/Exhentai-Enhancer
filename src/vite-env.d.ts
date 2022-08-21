/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@/scripts/GalleryEnhencer' {
  function init(): void

  export default init
}

declare module '@/scripts/MultipageViewerEnhencer' {
  function init(): void;

  export default init
}

// ExHentai built-in variables & functions
interface Window {
  pagecount: number; // page Count
  currentpage: number; // current page
  preload_scroll_images: () => void; // preload images & set currentpage
}
