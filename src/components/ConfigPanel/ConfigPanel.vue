<template>
  <Teleport to="body">
    <Transition>
      <div
        v-show="isShow"
        class="popup"
      >
        <div class="config-panel">
          <section class="config-panel__section">
            <h2 class="config-panel__section-name">
              Gallery Enhancer
            </h2>

            <hr>

            <div class="config">
              <ToggleSwitch v-model="scrollByRowSwitch.value" />
              <h3 class="config__name">
                Scroll by Row
              </h3>
              <span class="config__notice">
                *sync with "Front Page Enhancer - Scroll by Row"
              </span>
            </div>

            <div class="config">
              <ToggleSwitch v-model="betterDownloadPopupSwitch.value" />
              <h3 class="config__name">
                Better Download Popup
              </h3>

              <select v-model="quickDownloadMethod.value">
                <option>
                  {{ DownloadMethod.Manual }}
                </option>
                <option>
                  {{ DownloadMethod.HaH_Original }}
                </option>
                <option>
                  {{ DownloadMethod.HaH_2400 }}
                </option>
                <option>
                  {{ DownloadMethod.Direct_Origin }}
                </option>
                <option>
                  {{ DownloadMethod.Direct_Resample }}
                </option>
              </select>
            </div>

            <div class="config">
              <ToggleSwitch v-model="loadAllGalleryImagesSwitch.value" />
              <h3 class="config__name">
                Load All Gallery Images
              </h3>
            </div>
          </section>

          <section class="config-panel__section">
            <h2 class="config-panel__section-name">
              Multi-Page Viewer Enhancer
            </h2>

            <hr>

            <div class="config">
              <ToggleSwitch v-model="multipageViewerEnhancerSwitch.value" />
              <h3 class="config__name">
                Multi-Page Viewer Enhancer
              </h3>
            </div>

            <div class="config">
              <ToggleSwitch v-model="autoRedirectSwitch.value" />
              <h3 class="config__name">
                Auto Redirect to Multi-Page Viewer
              </h3>
            </div>
          </section>

          <section class="config-panel__section">
            <h2 class="config-panel__section-name">
              Front Page Enhancer
            </h2>

            <hr>

            <div class="config">
              <ToggleSwitch v-model="infiniteScrollSwitch.value" />
              <h3 class="config__name">
                Infinite Scroll
              </h3>
            </div>

            <div class="config">
              <ToggleSwitch v-model="scrollByRowSwitch.value" />
              <h3 class="config__name">
                Scroll by Row
              </h3>
              <span class="config__notice">
                *sync with "Gallery Enhancer - Scroll by Row"
              </span>
            </div>
          </section>

          <span
            class="config-panel__close-button"
            @click="isShow = false"
          >
            <CrossButton />
          </span>

          <div class="actions">
            <button
              class="actions__button"
              @click="reload"
            >
              Apply and Reload
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { GM } from 'vite-plugin-monkey/dist/client'

import CrossButton from '@/components/Icon/CrossButton.vue'
import { DownloadMethod } from '@/constants/monkey'
import {
  infiniteScrollSwitch,
  scrollByRowSwitch,
  betterDownloadPopupSwitch,
  quickDownloadMethod,
  loadAllGalleryImagesSwitch,
  multipageViewerEnhancerSwitch,
  autoRedirectSwitch,
} from '@/utils/GMVariables'

import ToggleSwitch from './ToggleSwitch.vue'

const isShow = ref(false)
onMounted(() => {
  GM.registerMenuCommand('Open config panel', () => isShow.value = !isShow.value)
})

function reload() {
  location.reload()
}

</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(#000, 50%);
  z-index: 99999;
}

.config-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin: 32px;
  padding: 32px;
  width: 50%;
  height: auto;
  background-color: #34353b;
  border-radius: 4px;

  &__section {
    background-color: #4f535b;
    border-radius: 4px;
  }

  &__section-name {
    margin: 16px 32px;
    font-size: 20px;
    text-align: left;
    line-height: 100%;
  }

  &__close-button {
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 8px;
    cursor: pointer;

    :deep(svg) {
      width: 16px;
      height: 16px;
    }
  }
}

.config {
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 8px 16px;
  column-gap: 8px;

  &__name {
    font-size: 16px;
  }

  &__notice {
    font-size: 12px;
  }
}

.actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &__button {
    padding: 8px 16px;
    color: #fff;
    background-color: #4f535b;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
