<script setup lang="ts">
import { clsx } from '@/shared/lib'

interface CheckboxGroupProps {
  class?: string
  role?: string
  'aria-label'?: string
}

const props = defineProps<CheckboxGroupProps>()

const groupClasses = computed(() => {
  return clsx('space-y-2', props.class)
})
</script>

<template>
  <div :role="role" :aria-label="ariaLabel" :class="groupClasses">
    <slot />
  </div>
</template>
