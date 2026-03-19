export const modalStyles = {
  backdrop: [
    // Backdrop overlay
    'fixed inset-0 z-50 bg-zinc-950/75 backdrop-blur-sm transition-opacity duration-300',
    // Fade in/out animation
    'data-[state=open]:bg-zinc-950/50 data-[state=closed]:bg-zinc-950/0',
  ],
  container: [
    // Container for centering
    'fixed inset-0 z-50 flex items-center justify-center p-4',
  ],
  panel: [
    // Main panel
    'relative w-full transform transition-all duration-300',
    // Sizes
    'sm:max-w-sm',    // 384px
    'md:max-w-md',    // 448px
    'lg:max-w-lg',    // 512px
    'xl:max-w-xl',    // 576px
    '2xl:max-w-2xl',  // 672px
    'full:max-w-full', // 100%
  ],
  dialog: [
    // Dialog wrapper
    'flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 text-left shadow-xl transition-all duration-300',
    // Open/close states
    'data-[state=open]:opacity-100 data-[state=open]:scale-100',
    'data-[state=closed]:opacity-0 data-[state=closed]:scale-95',
  ],
  header: [
    // Header section
    'flex items-center justify-between border-b border-zinc-200 dark:border-zinc-700 px-6 py-4',
  ],
  title: [
    // Title
    'text-lg font-semibold text-zinc-950 dark:text-white',
  ],
  content: [
    // Content section
    'px-6 py-6',
  ],
  closeButton: [
    // Close button in header
    'flex size-8 items-center justify-center rounded-full border border-transparent bg-transparent text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-colors',
  ],
  closeIcon: [
    // Close icon
    'size-4',
  ],
} as const
