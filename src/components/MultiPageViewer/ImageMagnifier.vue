<script setup lang="ts">
import { reactive, computed, onMounted, onUnmounted } from 'vue'

import { useMagnifierEvents } from '@/components/MultiPageViewer/composables/ImageMagnifier/useMagnifierEvents'
import { useMagnifierStyle } from '@/components/MultiPageViewer/composables/ImageMagnifier/useMagnifierStyle'
import {
  magnifierActivationButton,
  magnifierToggleMode,
  magnifierDefaultScale,
  magnifierScaleStep,
  magnifierLongPressThreshold,
  magnifierSensitivityX,
  magnifierSensitivityY,
} from '@/utils/GMVariables'
import type { MagnifierConfig, MagnifierState } from '@/types/magnifier'


const magnifierConfig: MagnifierConfig = {
  toggleMode: magnifierToggleMode.value,
  activationButton: magnifierActivationButton.value,
  longPressThreshold: magnifierLongPressThreshold.value,
  scale: {
    default: magnifierDefaultScale.value,
    step: magnifierScaleStep.value,
    min: 1.1,
    max: 10,
  },
  mappingArea: {
    horizontal: 0,
    vertical: 5,
  },
  sensitivity: {
    x: magnifierSensitivityX.value,
    y: magnifierSensitivityY.value,
  },
} as const

const state = reactive<MagnifierState>({
  isActive: false,
  position: {
    x: 0,
    y: 0,
  },
  lastPosition: {
    x: 0,
    y: 0,
  },
  scale: magnifierConfig.scale.default,
  currentImage: null as HTMLImageElement | null,

  isOriginalMode: false,
  isLoadingOriginal: false,
  loadingProgress: 0,
})

const magnifierStyle = computed(() => ({
  position: 'fixed' as const,
  inset: 0,
  margin: 'auto',
  pointerEvents: 'none' as const,
  zIndex: 1000,
}))

const { contentStyle } = useMagnifierStyle(state, magnifierConfig)
const {
  bindEvents,
  unbindEvents,
  handleWheel,
} = useMagnifierEvents(state, magnifierConfig)

onMounted(() => {
  bindEvents()
})

onUnmounted(() => {
  unbindEvents()
})

const isShow = computed(() => state.isActive)
</script>

<template>
  <div v-show="isShow">
    <div
      class="magnifier-overlay"
      @wheel="handleWheel"
      @mousedown.prevent.stop
      @click.prevent.stop
      @contextmenu.prevent.stop
    />
    <div
      class="magnifier"
      :style="magnifierStyle"
    >
      <div class="magnifier-background" />
      <div
        class="magnifier-image"
        :style="contentStyle"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.magnifier-overlay {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: transparent;
  cursor: none;
}

.magnifier {
  z-index: 1000;

  &-background {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &-image {
    position: absolute;
    cursor: none;
  }
}
</style>
