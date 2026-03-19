export type RadioColor =
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

export interface RadioProps {
  color?: RadioColor
  disabled?: boolean
  name?: string
  value?: string | number
  defaultValue?: string | number
  value?: string | number
  onChange?: (value: string | number) => void
  class?: string
}

export interface RadioFieldProps {
  disabled?: boolean
  class?: string
}
