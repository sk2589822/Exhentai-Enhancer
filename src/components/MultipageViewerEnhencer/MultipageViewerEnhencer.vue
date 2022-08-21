<template>
  <div class="enhencer-features">
    <PageElevator class="enhencer-features__feature" />
  </div>
</template>

<script setup lang="ts">
import { showThumbsWhenHover } from './utils/thumbs'
import usePages from './composables/usePages'
import useEvents from './composables/useEvents'
import PageElevator from './components/PageElevator.vue'

const { appendPageIndex } = usePages()
const { overrideKeyBoardEvent } = useEvents()

appendPageIndex()
overrideKeyBoardEvent()

showThumbsWhenHover()
</script>

<style lang="scss">
/* stylelint-disable selector-id-pattern */

/**
 * Override
 */
html,
body,
div#pane_outer,
div#pane_images {
  padding: 0;
  width: 100% !important;
  height: 100% !important;
}

div#bar3 {
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
}

.hide-cursor,
.hide-cursor * {
  cursor: none;
}

// FIXME: 沒辦法選
.mi0 {
  pointer-events: none;
}

div#pane_images.resize {
  .mi0 {
    width: max-content !important;
    max-height: calc(var(--image-height) + 24px) !important;
  }

  img[id^="imgsrc_"] {
    width: auto !important;
    max-height: var(--image-height);
  }
}

  div#pane_thumbs {
    display: block;
    opacity: 0;
    z-index: 1;
    transition: opacity 0.3s;
}

/**
 * Components
 */
.enhencer-features {
  position: absolute;
  top: 50%;
  right: 0;
  display: flex;
  align-items: center;
  padding-right: 5px;
  z-index: 100;
  flex-direction: row-reverse;
  gap: 16px;
  transform: translate(0, -50%);
  box-sizing: border-box;

  &__feature {
    padding: 10px 5px;
    background: #7777;
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
    box-sizing: border-box;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
