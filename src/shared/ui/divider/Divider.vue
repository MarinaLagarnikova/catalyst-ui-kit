<script setup lang="ts">
import type { DividerProps } from './types'
import { clsx } from '@/shared/lib'

const props = withDefaults(defineProps<DividerProps>(), {
  soft: false,
})
</script>

<template>
  <hr
    role="presentation"
    :class="clsx(
      props.class,
      'w-full border-t',
      props.soft
        ? 'border-zinc-950/5 dark:border-white/5'
        : 'border-zinc-950/10 dark:border-white/10'
    )"
  />
</template>
