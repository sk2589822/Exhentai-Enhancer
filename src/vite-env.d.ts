/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-object-type
  const component: DefineComponent<{}, {}, any>
  export default component
}


// ExHentai built-in variables & functions
interface Window {
  gid: number
  pagecount: number // page Count
  preload_scroll_images: () => void // preload images & set currentpage
  action_reload: (page) => void // reload image
  preload_generic: (a, b, c) => void // HTML nodes operation
  pop_ren: () => false // open rename pop-up

  // Favorites
  clicked_fav: () => void // set it to () => {} in order to prevent undefined error
}

