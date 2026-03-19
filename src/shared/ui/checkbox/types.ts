export type CheckboxColor =
  | 'dark/zinc'
  | 'dark/white'
  | 'dark'
  | 'zinc'
  | 'white'
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
  disabled?: boolean
  name?: string
  value?: string | number | readonly string[]
  defaultChecked?: boolean
  checked?: boolean
  onChange?: (checked: boolean) => void
  class?: string
  type?: 'button' | 'submit' | 'reset'
  indeterminate?: boolean
}

export interface CheckboxFieldProps {
  disabled?: boolean
  class?: string
}
