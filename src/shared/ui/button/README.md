# ButtonControl Component

A fully-featured, accessible button component built with Vue 3, TypeScript, and Tailwind CSS, following FSD architecture principles.

## Features

- ✅ **Multiple variants**: Solid, outline, and plain styles
- ✅ **Size options**: Small, medium, large, and icon-only
- ✅ **Color system**: 20+ color variants including light/dark mode support
- ✅ **Loading states**: Built-in loading spinner animation
- ✅ **Accessibility**: ARIA attributes, keyboard support, focus management
- ✅ **Disabled states**: Proper visual and functional handling
- ✅ **TypeScript support**: Full type safety with IntelliSense
- ✅ **Responsive design**: Mobile-first approach with responsive breakpoints

## Installation & Usage

```vue
<script setup>
import { ButtonControl } from '@/shared/ui'

const handleClick = () => {
  console.log('Button clicked!')
}

const isLoading = ref(false)

const submit = async () => {
  isLoading.value = true
  // async operation
  isLoading.value = false
}
</script>

<template>
  <ButtonControl @click="handleClick">
    Click me
  </ButtonControl>

  <ButtonControl color="green" :loading="isLoading" @click="submit">
    Submit
  </ButtonControl>

  <ButtonControl size="icon" aria-label="Delete">
    ×
  </ButtonControl>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|-------|----------|-------------|
| `color` | `ButtonColor` | `'dark/zinc'` | Button color variant |
| `size` | `'sm' \| 'md' \| 'lg' \| 'icon'` | `'md'` | Button size |
| `outline` | `boolean` | `false` | Outline variant |
| `plain` | `boolean` | `false` | Plain variant |
| `disabled` | `boolean` | `false` | Disabled state |
| `loading` | `boolean` | `false` | Loading state with spinner |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `class` | `string` | `undefined` | Additional CSS classes |
| `aria-label` | `string` | `undefined` | Accessibility label |

## Events

| Event | Payload | Description |
|--------|----------|-------------|
| `click` | `MouseEvent` | Button click event |

## Color Variants

Available colors:
- `'dark/zinc'`, `'light'`, `'dark/white'`, `'dark'`, `'white'`
- `'zinc'`, `'indigo'`, `'cyan'`
- `'red'`, `'orange'`, `'amber'`, `'yellow'`, `'lime'`, `'green'`, `'emerald'`, `'teal'`, `'sky'`, `'blue'`, `'violet'`, `'purple'`, `'fuchsia'`, `'pink'`, `'rose'`

## Size Examples

```vue
<ButtonControl size="sm">Small Button</ButtonControl>
<ButtonControl size="md">Medium Button</ButtonControl>
<ButtonControl size="lg">Large Button</ButtonControl>
<ButtonControl size="icon" aria-label="Settings">⚙️</ButtonControl>
```

## Accessibility

The component includes:
- `aria-disabled` attribute when disabled
- `aria-busy` attribute when loading
- `aria-label` for icon-only buttons
- Keyboard support (Enter and Space keys)
- Focus management with visible outline
- Proper focus order

## Running Storybook

To view the component stories:

```bash
# Using Docker (recommended)
docker-compose pull && docker-compose up -d --build

# Then run Storybook
npm run storybook
```

Storybook will be available at `http://localhost:6006/`

## Architecture

The component follows FSD (Feature-Sliced Design) principles:

- **Layer**: `shared/ui/button`
- **Structure**:
  - `ButtonControl.vue` - Main component
  - `useButton.ts` - Composition API logic
  - `styles.ts` - Tailwind CSS utilities
  - `types.ts` - TypeScript interfaces
  - `index.ts` - Public API exports
  - `*.stories.ts` - Storybook documentation

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT
