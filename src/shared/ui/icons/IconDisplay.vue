<script setup lang="ts">
import { computed } from 'vue'

interface IconDisplayProps {
  name: string
  icon: any
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<IconDisplayProps>(), {
  size: 'md',
})

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'size-4',
    md: 'size-5',
    lg: 'size-6',
    xl: 'size-8',
  }
  return sizes[props.size]
})
</script>

<template>
  <div class="flex flex-col items-center gap-2 p-4 rounded-lg border border-zinc-200 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
    <component :is="icon" :class="sizeClasses" class="text-zinc-700 dark:text-zinc-300" />
    <span class="text-xs text-zinc-600 dark:text-zinc-400 font-mono">{{ name }}</span>
  </div>
</template>
