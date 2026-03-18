export type ButtonColor =
  | 'dark/zinc'
  | 'light'
  | 'dark/white'
  | 'dark'
  | 'white'
  | 'zinc'
  | 'indigo'
  | 'cyan'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'sky'
  | 'blue'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'

export interface ButtonControlProps {
  color?: ButtonColor
  outline?: boolean
  plain?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  class?: string
  onClick?: () => void
}
