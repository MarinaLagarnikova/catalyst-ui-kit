export type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'

export interface ModalProps {
  modelValue: boolean
  title?: string
  size?: ModalSize
  close?: () => void
  class?: string
}
