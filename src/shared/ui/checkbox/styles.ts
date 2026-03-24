import type { CheckboxColor } from './types'
import { clsx } from '@/shared/lib'

export function checkboxStyles({
  color = 'dark/zinc',
  checked = false,
  indeterminate = false,
  disabled = false,
}: {
  color?: CheckboxColor
  checked?: boolean
  indeterminate?: boolean
  disabled?: boolean
}) {
  return clsx(
    // Base styles
    'flex size-4 items-center justify-center rounded border transition-colors',
    // Background colors based on state
    checked || indeterminate
      ? [colorStyles[color], 'border-transparent']
      : 'bg-white dark:bg-zinc-950 border-zinc-300 dark:border-zinc-700',
    // Hover state (only when not checked and not disabled)
    !checked && !indeterminate && !disabled && 'hover:border-zinc-400 dark:hover:border-zinc-600',
    // Disabled state
    disabled && 'opacity-50 cursor-not-allowed',
  )
}

const colorStyles: Record<CheckboxColor, string> = {
  'dark/zinc': 'bg-zinc-600 dark:bg-zinc-500',
  'dark/white': 'bg-white dark:bg-white',
  'light/zinc': 'bg-zinc-600 dark:bg-zinc-400',
  'white': 'bg-white',
  'zinc': 'bg-zinc-600 dark:bg-zinc-500',
  'red': 'bg-red-600 dark:bg-red-500',
  'orange': 'bg-orange-600 dark:bg-orange-500',
  'amber': 'bg-amber-600 dark:bg-amber-500',
  'yellow': 'bg-yellow-600 dark:bg-yellow-500',
  'lime': 'bg-lime-600 dark:bg-lime-500',
  'green': 'bg-green-600 dark:bg-green-500',
  'emerald': 'bg-emerald-600 dark:bg-emerald-500',
  'teal': 'bg-teal-600 dark:bg-teal-500',
  'cyan': 'bg-cyan-600 dark:bg-cyan-500',
  'sky': 'bg-sky-600 dark:bg-sky-500',
  'blue': 'bg-blue-600 dark:bg-blue-500',
  'indigo': 'bg-indigo-600 dark:bg-indigo-500',
  'violet': 'bg-violet-600 dark:bg-violet-500',
  'purple': 'bg-purple-600 dark:bg-purple-500',
  'fuchsia': 'bg-fuchsia-600 dark:bg-fuchsia-500',
  'pink': 'bg-pink-600 dark:bg-pink-500',
  'rose': 'bg-rose-600 dark:bg-rose-500',
}

export function checkmarkStyles() {
  return clsx(
    'size-3.5 stroke-[2.5]',
    'stroke-white',
  )
}
