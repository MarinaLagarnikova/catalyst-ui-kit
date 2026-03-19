export const radioStyles = {
  base: [
    // Base
    'relative isolate flex size-5 shrink-0 cursor-pointer rounded-full bg-white dark:bg-zinc-900/50',
    // Focus ring
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
    // Disabled
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  input: [
    // Hide default radio input
    'appearance-none absolute inset-0 m-0 block w-full h-full cursor-pointer opacity-0',
    // Ensure input is clickable even when visually hidden
    'peer pointer-events-none',
  ],
  indicator: [
    // Custom circle indicator
    'relative flex size-3 items-center justify-center rounded-full border-2 border-zinc-950/10 dark:border-zinc-400/20 bg-white dark:bg-zinc-900',
    // States
    'checked:bg-[var(--radio-bg)] checked:border-[var(--radio-border)]',
    // Show on check
    'peer-checked:block',
    // Focus indicator on parent focus
    'peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-focus-visible:ring-offset-0',
  ],
  checkmark: [
    // Inner dot
    'hidden peer-checked:block pointer-events-none',
    // Size
    'w-2.5 h-2.5 rounded-full',
    // Color
    'bg-white',
  ],
  colors: {
    'dark/zinc': [
      '[--radio-bg:var(--color-zinc-900)] [--radio-border:transparent]',
      'dark:[--radio-bg:var(--color-zinc-700)] dark:[--radio-border:rgba(255,255,255,0.2)]',
    ],
    'dark/white': [
      '[--radio-bg:var(--color-zinc-900)] [--radio-border:transparent]',
      'dark:[--radio-bg:white] dark:[--radio-border:rgba(9,9,9,0.2)]',
    ],
    dark: [
      '[--radio-bg:var(--color-zinc-900)] [--radio-border:transparent]',
    ],
    zinc: [
      '[--radio-bg:var(--color-zinc-600)] [--radio-border:transparent]',
    ],
    white: [
      '[--radio-bg:var(--color-white)] [--radio-border:var(--color-zinc-200)]',
    ],
    red: [
      '[--radio-bg:var(--color-red-600)] [--radio-border:transparent]',
    ],
    orange: [
      '[--radio-bg:var(--color-orange-600)] [--radio-border:transparent]',
    ],
    amber: [
      '[--radio-bg:var(--color-amber-600)] [--radio-border:transparent]',
    ],
    yellow: [
      '[--radio-bg:var(--color-yellow-600)] [--radio-border:transparent]',
    ],
    lime: [
      '[--radio-bg:var(--color-lime-600)] [--radio-border:transparent]',
    ],
    green: [
      '[--radio-bg:var(--color-green-600)] [--radio-border:transparent]',
    ],
    emerald: [
      '[--radio-bg:var(--color-emerald-600)] [--radio-border:transparent]',
    ],
    teal: [
      '[--radio-bg:var(--color-teal-600)] [--radio-border:transparent]',
    ],
    cyan: [
      '[--radio-bg:var(--color-cyan-600)] [--radio-border:transparent]',
    ],
    sky: [
      '[--radio-bg:var(--color-sky-600)] [--radio-border:transparent]',
    ],
    blue: [
      '[--radio-bg:var(--color-blue-600)] [--radio-border:transparent]',
    ],
    indigo: [
      '[--radio-bg:var(--color-indigo-600)] [--radio-border:transparent]',
    ],
    violet: [
      '[--radio-bg:var(--color-violet-600)] [--radio-border:transparent]',
    ],
    purple: [
      '[--radio-bg:var(--color-purple-600)] [--radio-border:transparent]',
    ],
    fuchsia: [
      '[--radio-bg:var(--color-fuchsia-600)] [--radio-border:transparent]',
    ],
    pink: [
      '[--radio-bg:var(--color-pink-600)] [--radio-border:transparent]',
    ],
    rose: [
      '[--radio-bg:var(--color-rose-600)] [--radio-border:transparent]',
    ],
  },
} as const
