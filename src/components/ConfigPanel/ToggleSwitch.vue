<template>
  <label class="switch">
    <input
      v-model="modelValueProxy"
      type="checkbox"
      class="switch__input"
    >
    <span class="switch__slider" />
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()

const modelValueProxy = computed({
  get: () => props.modelValue,
  set: (value: boolean) => {
    emit('update:modelValue', value)
  },
})
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;

  &__input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  &__slider {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #ccc;
    border-radius: 9999px;
    transition: 0.4s;
    cursor: pointer;

    &::before {
      position: absolute;
      top: 2px;
      left: 2px;
      height: calc(100% - 4px);
      aspect-ratio: 1/1;
      background-color: white;
      border-radius: 50%;
      transition: 0.4s;
      content: "";
    }
  }

  &__input:checked {
    + .switch__slider {
      background-color: #34353b;
    }

    + .switch__slider::before {
      transform: translateX(26px);
    }
  }
}
</style>
