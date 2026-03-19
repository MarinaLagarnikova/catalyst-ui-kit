<script setup lang="ts">
import { computed, watch } from 'vue'
import { Dialog as HeadlessDialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { modalStyles } from './styles'
import type { ModalProps } from './types'
import { clsx } from '@/shared/lib'

const props = withDefaults(defineProps<ModalProps>(), {
  size: 'md',
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()

const isOpen = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
    if (!value) {
      emit('close')
    }
  },
})

const sizeClasses = computed(() => {
  const sizeClasses: Record<NonNullable<typeof props.size>, string> = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    full: 'max-w-full',
  }
  return modalStyles.panel.join(' ') + ' ' + sizeClasses[props.size]
})

const dialogClasses = computed(() => {
  return clsx(modalStyles.dialog, sizeClasses.value)
})

const backdropClasses = computed(() => {
  return clsx(modalStyles.backdrop)
})

const handleClose = () => {
  isOpen.value = false
}
</script>

<template>
  <HeadlessDialog :open="isOpen" @close="handleClose" class="fixed inset-0 z-50 flex items-center justify-center">
    <DialogBackdrop :class="backdropClasses" />

    <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <DialogPanel :class="dialogClasses">
        <div v-if="title" :class="modalStyles.header">
          <DialogTitle :class="modalStyles.title">{{ title }}</DialogTitle>
          <button
            type="button"
            :class="modalStyles.closeButton"
            @click="handleClose"
            aria-label="Close"
          >
            <XMarkIcon :class="modalStyles.closeIcon" aria-hidden="true" />
          </button>
        </div>

        <div :class="modalStyles.content">
          <slot />
        </div>
      </DialogPanel>
    </div>
  </HeadlessDialog>
</template>
