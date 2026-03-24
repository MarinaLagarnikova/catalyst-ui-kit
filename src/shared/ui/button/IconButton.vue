<script setup lang="ts">
import { computed, ref } from 'vue'
import { buttonStyles } from './styles'
import type { ButtonColor, IconButtonProps } from './types'
import { useButton } from './useButton'
import { clsx } from '@/shared/lib'

const props = withDefaults(defineProps<IconButtonProps>(), {
  color: 'dark/zinc',
  outline: false,
  plain: false,
  disabled: false,
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
    buttonStyles.sizes.icon,
    props.outline
      ? buttonStyles.outline
      : props.plain
        ? buttonStyles.plain
        : [...buttonStyles.solid, ...(buttonStyles.colors[props.color as ButtonColor] || buttonStyles.colors['dark/zinc'])],
    isDisabled.value ? 'data-disabled' : '',
    isHovered.value ? 'data-hover' : '',
    isActive.value ? 'data-active' : '',
    'cursor-pointer',
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
    <slot data-slot="icon" />
  </button>
</template>
