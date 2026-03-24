export type CheckboxColor =
  | 'dark/zinc'
  | 'dark/white'
  | 'light/zinc'
  | 'white'
  | 'zinc'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'

export interface CheckboxProps {
  color?: CheckboxColor
  modelValue?: boolean
  disabled?: boolean
  indeterminate?: boolean
  label?: string
  class?: string
}
