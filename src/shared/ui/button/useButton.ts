import { computed } from 'vue'
import type { ButtonControlProps } from './types'

export function useButton(props: ButtonControlProps, emit: any) {
  const handleClick = (event: MouseEvent) => {
    if (!props.disabled && !props.loading && props.onClick) {
      props.onClick()
    }
    emit('click', event)
  }

  const handleKeydown = (event: KeyboardEvent) => {
    if (!props.disabled && !props.loading) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        handleClick(event as unknown as MouseEvent)
      }
    }
  }

  const isDisabled = computed(() => props.disabled || props.loading)

  const buttonType = computed(() => props.type || 'button')

  const ariaAttributes = computed(() => ({
    'aria-disabled': isDisabled.value,
    'aria-busy': props.loading || false,
    'aria-label': props['aria-label'],
  }))

  return {
    handleClick,
    handleKeydown,
    isDisabled,
    buttonType,
    ariaAttributes,
  }
}
