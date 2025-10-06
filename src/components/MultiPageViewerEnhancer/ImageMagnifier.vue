<template>
  <div v-show="isShow">
    <div
      class="magnifier-overlay"
      :class="{ 'is-panning': state.isPanning}"
      @wheel="handleWheel"
      @mousedown="handleOverlayMouseDown"
      @mouseup="handleOverlayMouseUp"
      @mousemove="handleOverlayMouseMove"
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
      >
        <div class="magnifier-center-point" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, onMounted, onUnmounted } from 'vue'

import { useMagnifierEvents } from '@/composables/MultiPageViewerEnhancer/ImageMagnifier/useMagnifierEvents'
import { useMagnifierStyle } from '@/composables/MultiPageViewerEnhancer/ImageMagnifier/useMagnifierStyle'
import { magnifierSwitch, magnifierDefaultScale, magnifierScaleStep } from '@/utils/GMVariables'

export type MagnifierConfig = typeof magnifierConfig
export type MagnifierState = typeof state

const magnifierConfig = {
  longPressThreshold: 200,
  scale: {
    default: magnifierDefaultScale.value,
    step: magnifierScaleStep.value,
    min: 1.1 as number,
    max: 10 as number,
  },
  mappingArea: {
    horizontal: 0,
    vertical: 5,
  },
  sensitivity: {
    x: 2,
    y: 3,
  },
} as const

const state = reactive({
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

  panOffset: {
    x: 0,
    y: 0,
  },
  isPanning: false,

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
  handleOverlayMouseDown,
  handleOverlayMouseUp,
  handleOverlayMouseMove,
} = useMagnifierEvents(state, magnifierConfig)

onMounted(() => {
  if (magnifierSwitch.value) {
    bindEvents()
  }
})

onUnmounted(() => {
  unbindEvents()
})

const isShow = computed(() => state.isActive)
</script>

<style lang="scss" scoped>
.magnifier-overlay {
    position: fixed;
    inset: 0;
    z-index: 999;
    background: transparent;
    cursor: none;

    &.is-panning {
        cursor: grabbing;
    }
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

    &-center-point {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }
}
</style>
