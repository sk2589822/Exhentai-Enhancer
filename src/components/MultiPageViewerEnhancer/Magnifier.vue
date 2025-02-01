<template>
    <div v-show="isShow">
        <div 
            class="magnifier-overlay" 
            @wheel="handleWheel"
            @mousedown.prevent.stop
            @click.prevent.stop
            @contextmenu.prevent.stop
        />
        <div class="magnifier" :style="magnifierStyle">
            <div class="magnifier-background" />
            <div class="magnifier-image" :style="contentStyle">
                <div class="magnifier-center-point" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, computed, onMounted, onUnmounted } from 'vue'
import { useMagnifierEvents } from '@/composables/MultiPageViewerEnhancer/useMagnifierEvents'
import { useMagnifierStyle } from '@/composables/MultiPageViewerEnhancer/useMagnifierStyle'


export type MagnifierConfig = typeof magnifierConfig
export type MagnifierState = typeof state

const magnifierConfig = {
    toggleMode: true,
    longPressThreshold: 200,
    scale: {
        default: 1.5 as number,
        step: 0.1 as number,
        min: 1.1 as number,
        max: 10 as number
    },
    mappingArea: {
        horizontal: 0,
        vertical: 5
    },
    sensitivity: {
        x: 1,
        y: 3
    }
} as const

const state = reactive({
    isActive: false,
    position: { x: 0, y: 0 },
    lastPosition: { x: 0, y: 0 },
    scale: magnifierConfig.scale.default,
    currentImage: null as HTMLImageElement | null,
    isOriginalMode: false,
    isLoadingOriginal: false,
    loadingProgress: 0
})

const magnifierStyle = computed(() => ({
    position: 'fixed' as const,
    inset: 0,
    margin: 'auto',
    pointerEvents: 'none' as const,
    zIndex: 1000
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
        cursor: none;
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

