import type { HTMLAttributes } from 'vue'

export interface SelectProps extends /* @vue-ignore */ HTMLAttributes {
  multiple?: boolean
  disabled?: boolean
  invalid?: boolean
  name?: string
  id?: string
  required?: boolean
  modelValue?: string | string[] | null
}
