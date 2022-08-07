/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
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

