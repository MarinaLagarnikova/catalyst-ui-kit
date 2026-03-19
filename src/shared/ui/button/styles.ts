export const buttonStyles = {
  base: [
    // Base
    'relative isolate inline-flex items-baseline justify-center gap-x-2 rounded-lg border text-base/6 font-semibold',
    // Sizing (14px-1px = 13px for mobile, 12px-1px = 11px for desktop)
    'px-[13px] py-[9px] sm:px-[11px] sm:py-[5px] sm:text-sm/6',
    // Focus
    'focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-blue-500',
    // Disabled
    'disabled:opacity-50',
    // Icon
    '*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-[var(--btn-icon)] sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:hover:[--btn-icon:ButtonText]',
  ],
  solid: [
    // Optical border, implemented as button background
    'border-transparent bg-[var(--btn-border)]',
    // Dark mode
    'dark:bg-[var(--btn-bg)]',
    // Button background, implemented as foreground layer (7px radius = 0.5rem - 1px)
    'before:absolute before:inset-0 before:-z-10 before:rounded-[7px] before:bg-[var(--btn-bg)]',
    // Drop shadow
    'before:shadow-sm',
    // Dark mode
    'dark:before:hidden',
    // Dark mode border
    'dark:border-white/5',
    // Shim/overlay
    'after:absolute after:inset-0 after:-z-10 after:rounded-[7px]',
    // Inner highlight shadow (Tailwind v4 syntax for opacity)
    'after:shadow-[inset_0_1px_rgba(255,255,255,0.15)]',
    // White overlay on hover (using CSS pseudo-classes instead of data-attributes)
    'active:after:bg-[var(--btn-hover-overlay)] hover:after:bg-[var(--btn-hover-overlay)]',
    // Dark mode
    'dark:after:-inset-px dark:after:rounded-lg',
    // Disabled
    'disabled:before:shadow-none disabled:after:shadow-none',
  ],
  outline: [
    // Base
    'border-zinc-950/10 text-zinc-950 active:bg-[rgba(9,9,9,0.025)] hover:bg-[rgba(9,9,9,0.025)]',
    // Dark mode
    'dark:border-white/15 dark:text-white dark:[--btn-bg:transparent] dark:active:bg-white/5 dark:hover:bg-white/5',
    // Icon
    '[--btn-icon:var(--color-zinc-500)] active:[--btn-icon:var(--color-zinc-700)] hover:[--btn-icon:var(--color-zinc-700)] dark:active:[--btn-icon:var(--color-zinc-400)] dark:hover:[--btn-icon:var(--color-zinc-400)]',
  ],
  plain: [
    // Base
    'border-transparent text-zinc-950 active:bg-zinc-950/5 hover:bg-zinc-950/5',
    // Dark mode
    'dark:text-white dark:active:bg-white/10 dark:hover:bg-white/10',
    // Icon
    '[--btn-icon:var(--color-zinc-500)] active:[--btn-icon:var(--color-zinc-700)] hover:[--btn-icon:var(--color-zinc-700)] dark:[--btn-icon:var(--color-zinc-500)] dark:active:[--btn-icon:var(--color-zinc-400)] dark:hover:[--btn-icon:var(--color-zinc-400)]',
  ],
  colors: {
    'dark/zinc': [
      'text-white [--btn-bg:var(--color-zinc-900)] [--btn-border:rgba(9,9,9,0.9)] [--btn-hover-overlay:rgba(255,255,255,0.1)]',
      'dark:text-white dark:[--btn-bg:var(--color-zinc-600)] dark:[--btn-hover-overlay:rgba(255,255,255,0.05)]',
      '[--btn-icon:var(--color-zinc-400)] active:[--btn-icon:var(--color-zinc-300)] hover:[--btn-icon:var(--color-zinc-300)]',
    ],
    light: [
      'text-zinc-950 [--btn-bg:white] [--btn-border:rgba(9,9,9,0.1)] [--btn-hover-overlay:rgba(9,9,9,0.025)] active:[--btn-border:rgba(9,9,9,0.15)] hover:[--btn-border:rgba(9,9,9,0.15)]',
      'dark:text-white dark:[--btn-hover-overlay:rgba(255,255,255,0.05)] dark:[--btn-bg:var(--color-zinc-800)]',
      '[--btn-icon:var(--color-zinc-500)] active:[--btn-icon:var(--color-zinc-700)] hover:[--btn-icon:var(--color-zinc-700)] dark:[--btn-icon:var(--color-zinc-500)] dark:active:[--btn-icon:var(--color-zinc-400)] dark:hover:[--btn-icon:var(--color-zinc-400)]',
    ],
    'dark/white': [
      'text-white [--btn-bg:var(--color-zinc-900)] [--btn-border:rgba(9,9,9,0.9)] [--btn-hover-overlay:rgba(255,255,255,0.1)]',
      'dark:text-zinc-950 dark:[--btn-bg:white] dark:[--btn-hover-overlay:rgba(9,9,9,0.05)]',
      '[--btn-icon:var(--color-zinc-400)] active:[--btn-icon:var(--color-zinc-300)] hover:[--btn-icon:var(--color-zinc-300)] dark:[--btn-icon:var(--color-zinc-500)] dark:active:[--btn-icon:var(--color-zinc-400)] dark:hover:[--btn-icon:var(--color-zinc-400)]',
    ],
    indigo: [
      'text-white [--btn-hover-overlay:rgba(255,255,255,0.1)] [--btn-bg:var(--color-indigo-500)] [--btn-border:rgba(79,70,229,0.9)]',
      '[--btn-icon:var(--color-indigo-300)] active:[--btn-icon:var(--color-indigo-200)] hover:[--btn-icon:var(--color-indigo-200)]',
    ],
    cyan: [
      'text-cyan-950 [--btn-bg:var(--color-cyan-300)] [--btn-border:rgba(34,211,238,0.8)] [--btn-hover-overlay:rgba(255,255,255,0.25)]',
      '[--btn-icon:var(--color-cyan-500)]',
    ],
    red: [
      'text-white [--btn-hover-overlay:rgba(255,255,255,0.1)] [--btn-bg:var(--color-red-600)] [--btn-border:rgba(153,27,27,0.9)]',
      '[--btn-icon:var(--color-red-300)] active:[--btn-icon:var(--color-red-200)] hover:[--btn-icon:var(--color-red-200)]',
    ],
    green: [
      'text-white [--btn-hover-overlay:rgba(255,255,255,0.1)] [--btn-bg:var(--color-green-600)] [--btn-border:rgba(21,128,61,0.9)]',
      '[--btn-icon:rgba(255,255,255,0.6)] active:[--btn-icon:rgba(255,255,255,0.8)] hover:[--btn-icon:rgba(255,255,255,0.8)]',
    ],
  },
} as const
