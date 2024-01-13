<template>
  <div
    v-html="innerHtml"
  />
</template>

<script setup lang="ts">
defineProps({
  innerHtml: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" src="@/styles/popup.scss" scoped />
