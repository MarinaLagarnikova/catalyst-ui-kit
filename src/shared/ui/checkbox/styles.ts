export const checkboxStyles = {
  base: [
    // Base
    'relative isolate flex size-5 shrink-0 cursor-pointer rounded-sm bg-white dark:bg-zinc-900/50',
    // Focus ring
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
    // Disabled
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  input: [
    // Hide default checkbox input
    'appearance-none absolute inset-0 m-0 block w-full h-full cursor-pointer opacity-0',
    // Ensure input is clickable even when visually hidden
    'pointer-events-none',
  ],
  indicator: [
    // Custom checkmark container
    'relative flex size-4.5 items-center justify-center rounded border border-zinc-950/10 dark:border-zinc-400/20 bg-white dark:bg-zinc-900',
    // States
    'checked:bg-[var(--check-bg)] checked:border-[var(--check-border)] group-disabled:opacity-50',
    // Focus indicator on parent focus
    'peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-focus-visible:ring-offset-2',
  ],
  checkmark: [
    // SVG checkmark icon
    'hidden checked:block pointer-events-none',
    // Color
    'text-white',
  ],
  colors: {
    'dark/zinc': [
      '[--check-bg:var(--color-zinc-900)] [--check-border:transparent]',
      'dark:[--check-bg:var(--color-zinc-700)] dark:[--check-border:rgba(255,255,255,0.2)]',
    ],
    'dark/white': [
      '[--check-bg:var(--color-zinc-900)] [--check-border:transparent]',
      'dark:[--check-bg:white] dark:[--check-border:rgba(9,9,9,0.2)]',
    ],
    dark: [
      '[--check-bg:var(--color-zinc-900)] [--check-border:transparent]',
    ],
    zinc: [
      '[--check-bg:var(--color-zinc-600)] [--check-border:transparent]',
    ],
    white: [
      '[--check-bg:var(--color-white)] [--check-border:var(--color-zinc-200)]',
    ],
    red: [
      '[--check-bg:var(--color-red-600)] [--check-border:transparent]',
    ],
    orange: [
      '[--check-bg:var(--color-orange-600)] [--check-border:transparent]',
    ],
    amber: [
      '[--check-bg:var(--color-amber-600)] [--check-border:transparent]',
    ],
    yellow: [
      '[--check-bg:var(--color-yellow-600)] [--check-border:transparent]',
    ],
    lime: [
      '[--check-bg:var(--color-lime-600)] [--check-border:transparent]',
    ],
    green: [
      '[--check-bg:var(--color-green-600)] [--check-border:transparent]',
    ],
    emerald: [
      '[--check-bg:var(--color-emerald-600)] [--check-border:transparent]',
    ],
    teal: [
      '[--check-bg:var(--color-teal-600)] [--check-border:transparent]',
    ],
    cyan: [
      '[--check-bg:var(--color-cyan-600)] [--check-border:transparent]',
    ],
    sky: [
      '[--check-bg:var(--color-sky-600)] [--check-border:transparent]',
    ],
    blue: [
      '[--check-bg:var(--color-blue-600)] [--check-border:transparent]',
    ],
    indigo: [
      '[--check-bg:var(--color-indigo-600)] [--check-border:transparent]',
    ],
    violet: [
      '[--check-bg:var(--color-violet-600)] [--check-border:transparent]',
    ],
    purple: [
      '[--check-bg:var(--color-purple-600)] [--check-border:transparent]',
    ],
    fuchsia: [
      '[--check-bg:var(--color-fuchsia-600)] [--check-border:transparent]',
    ],
    pink: [
      '[--check-bg:var(--color-pink-600)] [--check-border:transparent]',
    ],
    rose: [
      '[--check-bg:var(--color-rose-600)] [--check-border:transparent]',
    ],
  },
} as const
