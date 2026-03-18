export const buttonStyles = {
  base: [
    // Base
    'relative isolate inline-flex items-baseline justify-center gap-x-2 rounded-lg border text-base/6 font-semibold',
    // Sizing
    'px-[calc(theme(spacing.3.5)-1px)] py-[calc(theme(spacing.2.5)-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing.1.5)-1px)] sm:text-sm/6',
    // Focus
    'focus:not-data-focus:outline-hidden data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500',
    // Disabled
    'data-disabled:opacity-50',
    // Icon
    '*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-[var(--btn-icon)] sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-hover:[--btn-icon:ButtonText]',
  ],
  solid: [
    // Optical border, implemented as button background
    'border-transparent bg-[var(--btn-border)]',
    // Dark mode
    'dark:bg-[var(--btn-bg)]',
    // Button background, implemented as foreground layer
    'before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:bg-[var(--btn-bg)]',
    // Drop shadow
    'before:shadow-sm',
    // Dark mode
    'dark:before:hidden',
    // Dark mode border
    'dark:border-white/5',
    // Shim/overlay
    'after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)]',
    // Inner highlight shadow
    'after:shadow-[inset_0_1px_theme(--color-white/15%)]',
    // White overlay on hover
    'data-active:after:bg-[var(--btn-hover-overlay)] data-hover:after:bg-[var(--btn-hover-overlay)]',
    // Dark mode
    'dark:after:-inset-px dark:after:rounded-lg',
    // Disabled
    'data-disabled:before:shadow-none data-disabled:after:shadow-none',
  ],
  outline: [
    // Base
    'border-zinc-950/10 text-zinc-950 data-active:bg-zinc-950/2.5 data-hover:bg-zinc-950/2.5',
    // Dark mode
    'dark:border-white/15 dark:text-white dark:[--btn-bg:transparent] dark:data-active:bg-white/5 dark:data-hover:bg-white/5',
    // Icon
    '[--btn-icon:var(--color-zinc-500)] data-active:[--btn-icon:var(--color-zinc-700)] data-hover:[--btn-icon:var(--color-zinc-700)] dark:data-active:[--btn-icon:var(--color-zinc-400)] dark:data-hover:[--btn-icon:var(--color-zinc-400)]',
  ],
  plain: [
    // Base
    'border-transparent text-zinc-950 data-active:bg-zinc-950/5 data-hover:bg-zinc-950/5',
    // Dark mode
    'dark:text-white dark:data-active:bg-white/10 dark:data-hover:bg-white/10',
    // Icon
    '[--btn-icon:var(--color-zinc-500)] data-active:[--btn-icon:var(--color-zinc-700)] data-hover:[--btn-icon:var(--color-zinc-700)] dark:[--btn-icon:var(--color-zinc-500)] dark:data-active:[--btn-icon:var(--color-zinc-400)] dark:data-hover:[--btn-icon:var(--color-zinc-400)]',
  ],
  colors: {
    'dark/zinc': [
      'text-white [--btn-bg:var(--color-zinc-900)] [--btn-border:var(--color-zinc-950)]/90 [--btn-hover-overlay:var(--color-white)]/10',
      'dark:text-white dark:[--btn-bg:var(--color-zinc-600)] dark:[--btn-hover-overlay:var(--color-white)]/5',
      '[--btn-icon:var(--color-zinc-400)] data-active:[--btn-icon:var(--color-zinc-300)] data-hover:[--btn-icon:var(--color-zinc-300)]',
    ],
    light: [
      'text-zinc-950 [--btn-bg:white] [--btn-border:var(--color-zinc-950)]/10 [--btn-hover-overlay:var(--color-zinc-950)]/2.5 data-active:[--btn-border:var(--color-zinc-950)]/15 data-hover:[--btn-border:var(--color-zinc-950)]/15',
      'dark:text-white dark:[--btn-hover-overlay:var(--color-white)]/5 dark:[--btn-bg:var(--color-zinc-800)]',
      '[--btn-icon:var(--color-zinc-500)] data-active:[--btn-icon:var(--color-zinc-700)] data-hover:[--btn-icon:var(--color-zinc-700)] dark:[--btn-icon:var(--color-zinc-500)] dark:data-active:[--btn-icon:var(--color-zinc-400)] dark:data-hover:[--btn-icon:var(--color-zinc-400)]',
    ],
    'dark/white': [
      'text-white [--btn-bg:var(--color-zinc-900)] [--btn-border:var(--color-zinc-950)]/90 [--btn-hover-overlay:var(--color-white)]/10',
      'dark:text-zinc-950 dark:[--btn-bg:white] dark:[--btn-hover-overlay:var(--color-zinc-950)]/5',
      '[--btn-icon:var(--color-zinc-400)] data-active:[--btn-icon:var(--color-zinc-300)] data-hover:[--btn-icon:var(--color-zinc-300)] dark:[--btn-icon:var(--color-zinc-500)] dark:data-hover:[--btn-icon:var(--color-zinc-300)] dark:data-hover:[--btn-icon:var(--color-zinc-400)]',
    ],
    indigo: [
      'text-white [--btn-bg:var(--color-indigo-500)] [--btn-border:var(--color-indigo-600)]/90 [--btn-hover-overlay:var(--color-white)]/10',
      '[--btn-icon:var(--color-indigo-300)] data-active:[--btn-icon:var(--color-indigo-200)] data-hover:[--btn-icon:var(--color-indigo-200)]',
    ],
    cyan: [
      'text-cyan-950 [--btn-bg:var(--color-cyan-300)] [--btn-border:var(--color-cyan-400)]/80 [--btn-hover-overlay:var(--color-white)]/25',
      '[--btn-icon:var(--color-cyan-500)]',
    ],
    red: [
      'text-white [--btn-bg:var(--color-red-600)] [--btn-border:var(--color-red-700)]/90 [--btn-hover-overlay:var(--color-white)]/10',
      '[--btn-icon:var(--color-red-300)] data-active:[--btn-icon:var(--color-red-200)] data-hover:[--btn-icon:var(--color-red-200)]',
    ],
    green: [
      'text-white [--btn-bg:var(--color-green-600)] [--btn-border:var(--color-green-700)]/90 [--btn-hover-overlay:var(--color-white)]/10',
      '[--btn-icon:var(--color-white)]/60 data-active:[--btn-icon:var(--color-white)]/80 data-hover:[--btn-icon:var(--color-white)]/80]',
    ],
  },
} as const
