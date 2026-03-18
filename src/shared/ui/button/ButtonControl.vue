<script setup lang="ts">
import { computed } from 'vue'
import TouchTarget from './TouchTarget.vue'
import { buttonStyles } from './styles'
import type { ButtonColor, ButtonControlProps } from './types'
import { clsx } from '@/shared/lib'

const props = withDefaults(defineProps<ButtonControlProps>(), {
  color: 'dark/zinc',
  outline: false,
  plain: false,
  disabled: false,
  type: 'button',
})

const emit = defineEmits<{
  click: []
}>()

const handleClick = () => {
  if (!props.disabled) {
    emit('click')
  }
}

const computedClasses = computed(() => {
  return clsx(
    props.class,
    buttonStyles.base,
    props.outline
      ? buttonStyles.outline
      : props.plain
        ? buttonStyles.plain
        : [...buttonStyles.solid, ...(buttonStyles.colors[props.color as ButtonColor] || buttonStyles.colors['dark/zinc'])],
    props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
  )
})
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="computedClasses"
    @click="handleClick"
  >
    <TouchTarget>
      <slot />
    </TouchTarget>
  </button>
</template>
