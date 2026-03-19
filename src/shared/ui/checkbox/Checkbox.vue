<script setup lang="ts">
import { computed } from 'vue'
import { Checkbox as HeadlessCheckbox } from '@headlessui/vue'
import { checkboxStyles } from './styles'
import type { CheckboxProps } from './types'
import { clsx } from '@/shared/lib'

const props = withDefaults(defineProps<CheckboxProps>(), {
  color: 'dark/zinc',
  disabled: false,
  defaultChecked: false,
  type: 'checkbox',
  indeterminate: false,
})

const emit = defineEmits<{
  'update:checked': [checked: boolean]
  change: [checked: boolean]
}>()

const internalChecked = computed({
  get() {
    return props.checked ?? props.defaultChecked
  },
  set(value) {
    emit('update:checked', value)
    emit('change', value)
  },
})

const computedClasses = computed(() => {
  return clsx(
    props.class,
    checkboxStyles.base,
    checkboxStyles.input,
    props.disabled && checkboxStyles.base.filter(c => c.includes('disabled')).join(' '),
  )
})

const indicatorClasses = computed(() => {
  return clsx(
    checkboxStyles.indicator,
    props.color && checkboxStyles.colors[props.color as keyof typeof checkboxStyles.colors],
  )
})

const checkmarkClasses = computed(() => {
  return clsx(checkboxStyles.checkmark)
})
</script>

<template>
  <HeadlessCheckbox
    v-model="internalChecked"
    :disabled="disabled"
    :name="name"
    :value="value"
    :indeterminate="indeterminate"
    :class="computedClasses"
  >
    <span :class="indicatorClasses">
      <svg
        v-if="internalChecked"
        :class="checkmarkClasses"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M12.016 2.371a1.49 1.49 0 0 0 1.066-.075 1.695l-2.294 3.86a1.49 1.49 0 0 0 1.066.061.356 1.695l.513 1.052a1.49 1.49 0 0 0 1.066.265 3.453 1.754 2.453 1.754 1.49 0 0 2.122-.685 3.019-2.273 1.712a1.49 1.49 0 0 0 1.066-.952 2.293-.584 3.305-.88 2.738a1.49 1.49 0 0 0 1.066 1.262 3.266 2.453 2.453 1.49 0 0 1.066z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  </HeadlessCheckbox>
</template>
