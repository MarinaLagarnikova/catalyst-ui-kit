<script setup lang="ts">
import { computed } from 'vue'
import { Radio as HeadlessRadio } from '@headlessui/vue'
import { radioStyles } from './styles'
import type { RadioProps } from './types'
import { clsx } from '@/shared/lib'

const props = withDefaults(defineProps<RadioProps>(), {
  color: 'dark/zinc',
  disabled: false,
  defaultValue: undefined,
  type: 'button',
})

const emit = defineEmits<{
  'update:value': [value: string | number]
  change: [value: string | number]
}>()

const internalValue = computed({
  get() {
    return props.value ?? props.defaultValue
  },
  set(value) {
    emit('update:value', value)
    emit('change', value)
  },
})

const computedClasses = computed(() => {
  return clsx(
    props.class,
    radioStyles.base,
    radioStyles.input,
    props.disabled && radioStyles.base.filter(c => c.includes('disabled')).join(' '),
  )
})

const indicatorClasses = computed(() => {
  return clsx(
    radioStyles.indicator,
    props.color && radioStyles.colors[props.color as keyof typeof radioStyles.colors],
  )
})

const checkmarkClasses = computed(() => {
  return clsx(radioStyles.checkmark)
})
</script>

<template>
  <HeadlessRadio
    v-model="internalValue"
    :disabled="disabled"
    :name="name"
    :value="value"
    :class="computedClasses"
  >
    <span :class="indicatorClasses">
      <span :class="checkmarkClasses" aria-hidden="true" />
    </span>
  </HeadlessRadio>
</template>
