<script setup lang="ts">
import { computed, ref } from 'vue'
import { buttonStyles } from './styles'
import type { ButtonColor, ButtonControlProps } from './types'
import { useButton } from './useButton'
import { clsx } from '@/shared/lib'

const props = withDefaults(defineProps<ButtonControlProps>(), {
  color: 'dark/zinc',
  size: 'md',
  outline: false,
  plain: false,
  disabled: false,
  loading: false,
  type: 'button',
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const { handleClick, handleKeydown, isDisabled, buttonType, ariaAttributes } = useButton(props, emit)

const isHovered = ref(false)
const isActive = ref(false)

const onMouseEnter = () => { isHovered.value = true }
const onMouseLeave = () => {
  isHovered.value = false
  isActive.value = false
}
const onMouseDown = () => { isActive.value = true }
const onMouseUp = () => { isActive.value = false }

const computedClasses = computed(() => {
  return clsx(
    props.class,
    buttonStyles.base,
    buttonStyles.sizes[props.size],
    props.outline
      ? buttonStyles.outline
      : props.plain
        ? buttonStyles.plain
        : [...buttonStyles.solid, ...(buttonStyles.colors[props.color as ButtonColor] || buttonStyles.colors['dark/zinc'])],
    isDisabled.value ? 'data-disabled' : '',
    isHovered.value ? 'data-hover' : '',
    isActive.value ? 'data-active' : '',
    isDisabled.value ? '' : (props.loading ? 'cursor-wait' : 'cursor-pointer'),
  )
})
</script>

<template>
  <button
    :type="buttonType"
    :disabled="isDisabled"
    :class="computedClasses"
    :data-disabled="isDisabled || undefined"
    :data-hover="isHovered || undefined"
    :data-active="isActive || undefined"
    v-bind="ariaAttributes"
    @click="handleClick"
    @keydown="handleKeydown"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <span v-if="loading" class="inline-flex items-center">
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>
    <slot />
  </button>
</template>
