<script setup lang="ts">
defineProps({
  innerHtml: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    v-html="innerHtml"
  />
</template>

<style lang="scss" src="@/styles/popup.scss" scoped />
