<template>
  <div class="page-elevator">
    <input
      type="text"
      class="page-elevator__input"
      :value="currentPage"
      @keydown.stop
      @keydown.enter="goToPage(Number(($event.target as HTMLInputElement).value))"
    >
    <span class="page-elevator__slash">／</span>
    <span v-text="pageCount" />
  </div>
</template>

<script setup lang="ts">
import usePages from '../composables/usePages'

const {
  pageCount,
  currentPage,
  goToPage,
} = usePages()

</script>

<style lang="scss" scoped>
.page-elevator {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 40px;
  opacity: 1;

  &__input {
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 30px;
    text-align: center;
    border: #777 solid 1px;
    box-sizing: border-box;
  }

  &__slash {
    line-height: 100%;
  }
}
</style>
