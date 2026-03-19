<script setup lang="ts">
import { provide, computed } from 'vue'
import { Field as HeadlessField } from '@headlessui/vue'
import { Label as HeadlessLabel } from '@headlessui/vue'
import type { RadioFieldProps } from './types'
import { clsx } from '@/shared/lib'
import Radio from './Radio.vue'

const props = withDefaults(defineProps<RadioFieldProps>(), {
  disabled: false,
})

const emit = defineEmits<{
  change?: []
}>()

const fieldClasses = computed(() => {
  return clsx(
    props.class,
    props.disabled && 'opacity-50 pointer-events-none',
  )
})

const labelClasses = computed(() => {
  return clsx(
    'cursor-pointer text-sm/6 font-medium text-zinc-950 dark:text-white select-none',
  )
})
</script>

<template>
  <HeadlessField :disabled="disabled" :class="fieldClasses">
    <slot name="radio" />
    <slot name="label">
      <HeadlessLabel :class="labelClasses">
        <slot />
      </HeadlessLabel>
    </slot>
  </HeadlessField>
</template>
