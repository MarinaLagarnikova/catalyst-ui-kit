<script setup lang="ts">
import { computed } from 'vue'
import type { ActivityListProps } from './types'
import { clsx } from '@/shared/lib'

const props = defineProps<ActivityListProps>()

const listClasses = computed(() => {
  return clsx(
    props.class,
    'divide-y divide-zinc-100 dark:divide-white/10',
  )
})
</script>

<template>
  <ul role="list" :class="listClasses">
    <li v-for="(item, index) in items" :key="item.commit" class="py-4">
      <div class="flex items-center gap-x-3">
        <img
          :src="item.user.imageUrl"
          :alt="item.user.name"
          class="size-6 flex-none rounded-full bg-zinc-800"
        />
        <h3 class="flex-auto truncate text-sm/6 font-semibold text-zinc-900 dark:text-white">
          {{ item.user.name }}
        </h3>
        <!-- Slot for custom content (e.g., checkbox) instead of time -->
        <slot name="actions" :item="item" :index="index">
          <time :datetime="item.dateTime" class="flex-none text-xs text-zinc-500 dark:text-zinc-400">
            {{ item.date }}
          </time>
        </slot>
      </div>
      <p class="mt-3 truncate text-sm text-zinc-500 dark:text-zinc-400">
        <span class="flex-1 truncate">{{ item.projectName }}</span> <span class="text-zinc-700 dark:text-zinc-300">{{ item.branch || item.commit }}</span>
      </p>
    </li>
  </ul>
</template>
