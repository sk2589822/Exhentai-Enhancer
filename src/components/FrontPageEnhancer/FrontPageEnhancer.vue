<!-- eslint-disable vue/valid-template-root -->
<template />

<script setup lang="ts">
import useWheelStep from '@/composables/useWheelStep'

useWheelStep({
  containerSelector: '.itg.gld',
  itemsSelector: '.gl1t',
})
</script>
