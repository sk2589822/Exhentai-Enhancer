<!-- eslint-disable vue/valid-template-root -->
<template />

<script setup lang="ts">
import useWheelStep from '@/composables/useWheelStep'
import { scrollPerRowSwitch } from '@/utils/monkeySwitches'

if (scrollPerRowSwitch.enabled) {
  useWheelStep({
    containerSelector: '#gdt',
    itemsSelector: '.gdtl',
  })
}

</script>
