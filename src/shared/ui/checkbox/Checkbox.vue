<script setup lang="ts">
import { computed } from 'vue'
import type { CheckboxProps } from './types'
import { checkboxStyles } from './styles'

defineOptions({
  name: 'Checkbox'
})

const props = withDefaults(defineProps<CheckboxProps>(), {
  color: 'dark/zinc',
  modelValue: false,
  disabled: false,
  indeterminate: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

// Generate unique ID for this checkbox instance
const checkboxId = computed(() => `checkbox-${Math.random().toString(36).substr(2, 9)}`)

const isChecked = computed(() => {
  return props.indeterminate || props.modelValue
})

const checkboxClasses = computed(() => {
  return checkboxStyles({
    color: props.color,
    checked: isChecked.value,
    indeterminate: props.indeterminate,
    disabled: props.disabled,
  })
})

function toggle() {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue)
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    toggle()
  }
}
</script>

<template>
  <label
    :for="checkboxId"
    :class="[
      'inline-flex items-center gap-2 cursor-pointer group',
      disabled ? 'cursor-not-allowed opacity-50' : '',
      props.class
    ]"
  >
    <input
      :id="checkboxId"
      type="checkbox"
      :disabled="disabled"
      :checked="isChecked"
      @change="toggle"
      @keydown="handleKeydown"
      class="sr-only"
    />
    <span :class="checkboxClasses" class="flex-shrink-0">
      <!-- Checkmark icon -->
      <svg
        v-if="isChecked && !indeterminate"
        class="size-3.5"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M3 8L6 11L11 3.5"
          class="stroke-white stroke-[2.5]"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <!-- Indeterminate icon -->
      <svg
        v-if="indeterminate"
        class="size-3.5"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M3 7H11"
          class="stroke-white stroke-[2.5]"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <span
      v-if="label"
      class="text-base/6 text-zinc-700 dark:text-zinc-300 select-none"
    >
      {{ label }}
    </span>
    <slot />
  </label>
</template>
