<script setup lang="ts">
import { showThumbsWhenHover } from './utils/thumbs'

showThumbsWhenHover()
</script>

<style lang="scss">
/* stylelint-disable-next-line selector-id-pattern */
div#pane_thumbs {
  display: block;
  opacity: 0;
  z-index: 1;
  transition: opacity 0.3s;
}
</style>
