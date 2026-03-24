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

export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

export interface ButtonControlProps {
  color?: ButtonColor
  size?: ButtonSize
  outline?: boolean
  plain?: boolean
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
  class?: string
  'aria-label'?: string
  onClick?: () => void
}

export interface IconButtonProps {
  color?: ButtonColor
  outline?: boolean
  plain?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  class?: string
  'aria-label'?: string
  onClick?: () => void
}
