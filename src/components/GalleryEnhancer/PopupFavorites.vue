<template>
  <transition name="fade">
    <div
      v-show="isShow"
      ref="popup"
      class="popup"
      v-html="innerHTML"
    />
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { unsafeWindow } from 'vite-plugin-monkey/dist/client'

import useElements from '@/composables/GalleryEnhancer/useElements'
import { getFavoritesLink } from '@/composables/GalleryEnhancer/usePreloadPopups'
import { getElement } from '@/utils/commons'

defineProps({
  innerHTML: {
    type: String,
    required: true,
  },
})

const popup = ref<HTMLElement>()

const { favoritesLinkAnchor, favoritesLinkDiv } = useElements()

const isShow = ref(false)

onMounted(() => {
  favoritesLinkDiv.removeAttribute('onclick')
  favoritesLinkAnchor.classList.add('is-ready')

  setToggleEvent()
  setRequestEvents()

  onClickOutside(popup, event => {
    if (event.target === favoritesLinkAnchor) {
      return
    }

    isShow.value = false
  })
})

function setToggleEvent() {
  favoritesLinkAnchor.addEventListener('click', event => {
    event.preventDefault()
    event.stopPropagation()
    isShow.value = !isShow.value
  })
}

function setRequestEvents() {
  // set submit event
  const submitButton = popup.value?.querySelector('input[type=submit]')
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
  unsafeWindow.clicked_fav = () => null
}

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

  await fetch(getFavoritesLink(), {
    method: 'POST',
    body: formData,
  })
}

</script>

<style lang="scss" src="@/styles/popup.scss" scoped />
