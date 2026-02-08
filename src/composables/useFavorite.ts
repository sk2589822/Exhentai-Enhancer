import { unsafeWindow } from 'vite-plugin-monkey/dist/client'
import type { Ref } from 'vue'
import { nextTick } from 'vue'

import { getElement } from '@/utils/commons'
import { useFetchPopups } from '@/composables/useFetchPopups'

export function useFavorite(favoriteInnerHtml: Ref<string>) {
  const { fetchFavorites, getFavoritesLink } = useFetchPopups()

  function setRequestEvents(target: HTMLElement, popup: Ref<HTMLElement | undefined>, isPopupShow: Ref<boolean>) {
    // set submit event
    const submitButton = popup.value?.querySelector('[type=submit]')
    submitButton?.addEventListener('click', async event => {
      event.preventDefault()

      const favoriteCategory = getElement<HTMLInputElement>('[name=favcat]:checked')?.value as string
      await setFavorite(favoriteCategory)
    })

    // set double click event
    const categoryOptions = popup.value?.querySelectorAll('#galpop .nosel > div')
    if (categoryOptions?.length) {
      for (const option of categoryOptions) {
        option.addEventListener('dblclick', async event => {
          event.preventDefault()

          const category = option.querySelector<HTMLInputElement>('[name=favcat]')?.value as string
          await setFavorite(category)
        })
      }
    }

    // 原本是 Favorite 頁面的 function，改成 popup 後不宣告的話會因為抓不到這個 function 而報錯
    // eslint-disable-next-line camelcase
    unsafeWindow.clicked_fav = () => null

    async function setFavorite(category: string) {
      const formData = new FormData()
      const favoriteNote = (getElement<HTMLTextAreaElement>('[name=favnote]')?.value) as string
      const apply = category === 'favdel'
        ? 'Apply Changes'
        : 'Add to Favorites'

      formData.append('favcat', category)
      formData.append('favnote', favoriteNote)
      formData.append('apply', apply)
      formData.append('update', '1')

      const response = await fetch(getFavoritesLink(), {
        method: 'POST',
        body: formData,
      })

      const html = await response.text()

      // 原本 submit favorites 後，會回傳一段 js 修改 opener 的 HTML：「將 Add to Favorites 改成所選的 category」
      // 但這邊的 js 和 HTML 太醜了，不想改，直接抓回傳的 js 來執行
      const originalScript = html.match(/(if\(window\.opener\.document\.getElementById\("favoritelink"\)).*/)?.[0]
      const script = originalScript?.replaceAll('.opener', '') as string
      Function(script)()

      isPopupShow.value = false

      favoriteInnerHtml.value = await fetchFavorites()
      await nextTick()
      setRequestEvents(target, popup, isPopupShow)
    }
  }

  return {
    setRequestEvents,
  }
}
