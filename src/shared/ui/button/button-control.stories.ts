import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonControl from './ButtonControl.vue'

const meta: Meta<typeof ButtonControl> = {
  title: 'UI/Button',
  component: ButtonControl,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'dark/zinc',
        'light',
        'dark/white',
        'dark',
        'white',
        'zinc',
        'indigo',
        'cyan',
        'red',
        'orange',
        'amber',
        'yellow',
        'lime',
        'green',
        'emerald',
        'teal',
        'sky',
        'blue',
        'violet',
        'purple',
        'fuchsia',
        'pink',
        'rose',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
    },
    outline: {
      control: 'boolean',
    },
    plain: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof ButtonControl>

export const Primary: Story = {
  args: {
    color: 'dark/zinc',
  },
  render: () => ({
    components: { ButtonControl },
    template: '<ButtonControl color="dark/zinc">Primary Button</ButtonControl>',
  }),
}

export const Light: Story = {
  args: {
    color: 'light',
  },
  render: () => ({
    components: { ButtonControl },
    template: '<ButtonControl color="light">Light Button</ButtonControl>',
  }),
}

export const Indigo: Story = {
  args: {
    color: 'indigo',
  },
  render: () => ({
    components: { ButtonControl },
    template: '<ButtonControl color="indigo">Indigo Button</ButtonControl>',
  }),
}

export const Cyan: Story = {
  args: {
    color: 'cyan',
  },
  render: () => ({
    components: { ButtonControl },
    template: '<ButtonControl color="cyan">Cyan Button</ButtonControl>',
  }),
}

export const Red: Story = {
  args: {
    color: 'red',
  },
  render: () => ({
    components: { ButtonControl },
    template: '<ButtonControl color="red">Red Button</ButtonControl>',
  }),
}

export const Green: Story = {
  args: {
    color: 'green',
  },
  render: () => ({
    components: { ButtonControl },
    template: '<ButtonControl color="green">Green Button</ButtonControl>',
  }),
}

export const Outline: Story = {
  args: {
    outline: true,
  },
  render: () => ({
    components: { ButtonControl },
    template: '<ButtonControl outline>Outline Button</ButtonControl>',
  }),
}

export const Plain: Story = {
  args: {
    plain: true,
  },
  render: () => ({
    components: { ButtonControl },
    template: '<ButtonControl plain>Plain Button</ButtonControl>',
  }),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: () => ({
    components: { ButtonControl },
    template: '<ButtonControl disabled>Disabled Button</ButtonControl>',
  }),
}

export const AllColors: Story = {
  render: () => ({
    components: { ButtonControl },
    template: `
      <div class="flex flex-wrap gap-2">
        <ButtonControl color="dark/zinc">Dark/Zinc</ButtonControl>
        <ButtonControl color="light">Light</ButtonControl>
        <ButtonControl color="dark/white">Dark/White</ButtonControl>
        <ButtonControl color="dark">Dark</ButtonControl>
        <ButtonControl color="white">White</ButtonControl>
        <ButtonControl color="zinc">Zinc</ButtonControl>
        <ButtonControl color="indigo">Indigo</ButtonControl>
        <ButtonControl color="cyan">Cyan</ButtonControl>
        <ButtonControl color="red">Red</ButtonControl>
        <ButtonControl color="orange">Orange</ButtonControl>
        <ButtonControl color="amber">Amber</ButtonControl>
        <ButtonControl color="yellow">Yellow</ButtonControl>
        <ButtonControl color="lime">Lime</ButtonControl>
        <ButtonControl color="green">Green</ButtonControl>
        <ButtonControl color="emerald">Emerald</ButtonControl>
        <ButtonControl color="teal">Teal</ButtonControl>
        <ButtonControl color="sky">Sky</ButtonControl>
        <ButtonControl color="blue">Blue</ButtonControl>
        <ButtonControl color="violet">Violet</ButtonControl>
        <ButtonControl color="purple">Purple</ButtonControl>
        <ButtonControl color="fuchsia">Fuchsia</ButtonControl>
        <ButtonControl color="pink">Pink</ButtonControl>
        <ButtonControl color="rose">Rose</ButtonControl>
      </div>
    `,
  }),
}

export const AllVariants: Story = {
  render: () => ({
    components: { ButtonControl },
    template: `
      <div class="flex flex-wrap gap-2">
        <ButtonControl>Solid</ButtonControl>
        <ButtonControl outline>Outline</ButtonControl>
        <ButtonControl plain>Plain</ButtonControl>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { ButtonControl },
    template: `
      <div class="flex items-center gap-2">
        <ButtonControl size="sm">Small</ButtonControl>
        <ButtonControl size="md">Medium</ButtonControl>
        <ButtonControl size="lg">Large</ButtonControl>
        <ButtonControl size="icon" aria-label="Settings">⚙️</ButtonControl>
      </div>
    `,
  }),
}

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: () => ({
    components: { ButtonControl },
    template: '<ButtonControl loading>Loading Button</ButtonControl>',
  }),
}

export const Accessibility: Story = {
  render: () => ({
    components: { ButtonControl },
    template: `
      <div class="flex flex-wrap gap-2">
        <ButtonControl aria-label="Delete item">Delete</ButtonControl>
        <ButtonControl disabled aria-label="Disabled action">Disabled</ButtonControl>
        <ButtonControl loading aria-label="Loading data">Loading</ButtonControl>
      </div>
    `,
  }),
}

export const CompleteShowcase: Story = {
  render: () => ({
    components: { ButtonControl },
    template: `
      <div class="space-y-4">
        <div>
          <h3 class="text-sm font-semibold mb-2">All Colors (23 colors)</h3>
          <div class="flex flex-wrap gap-2">
            <ButtonControl color="dark/zinc">Dark/Zinc</ButtonControl>
            <ButtonControl color="light">Light</ButtonControl>
            <ButtonControl color="dark/white">Dark/White</ButtonControl>
            <ButtonControl color="dark">Dark</ButtonControl>
            <ButtonControl color="white">White</ButtonControl>
            <ButtonControl color="zinc">Zinc</ButtonControl>
            <ButtonControl color="indigo">Indigo</ButtonControl>
            <ButtonControl color="cyan">Cyan</ButtonControl>
            <ButtonControl color="red">Red</ButtonControl>
            <ButtonControl color="orange">Orange</ButtonControl>
            <ButtonControl color="amber">Amber</ButtonControl>
            <ButtonControl color="yellow">Yellow</ButtonControl>
            <ButtonControl color="lime">Lime</ButtonControl>
            <ButtonControl color="green">Green</ButtonControl>
            <ButtonControl color="emerald">Emerald</ButtonControl>
            <ButtonControl color="teal">Teal</ButtonControl>
            <ButtonControl color="sky">Sky</ButtonControl>
            <ButtonControl color="blue">Blue</ButtonControl>
            <ButtonControl color="violet">Violet</ButtonControl>
            <ButtonControl color="purple">Purple</ButtonControl>
            <ButtonControl color="fuchsia">Fuchsia</ButtonControl>
            <ButtonControl color="pink">Pink</ButtonControl>
            <ButtonControl color="rose">Rose</ButtonControl>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold mb-2">Sizes</h3>
          <div class="flex items-center gap-2">
            <ButtonControl size="sm">Small</ButtonControl>
            <ButtonControl size="md">Medium</ButtonControl>
            <ButtonControl size="lg">Large</ButtonControl>
            <ButtonControl size="icon" aria-label="Settings">⚙️</ButtonControl>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold mb-2">Variants</h3>
          <div class="flex flex-wrap gap-2">
            <ButtonControl>Solid</ButtonControl>
            <ButtonControl outline>Outline</ButtonControl>
            <ButtonControl plain>Plain</ButtonControl>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold mb-2">States</h3>
          <div class="flex flex-wrap gap-2">
            <ButtonControl>Normal</ButtonControl>
            <ButtonControl disabled>Disabled</ButtonControl>
            <ButtonControl loading>Loading</ButtonControl>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold mb-2">Accessibility</h3>
          <div class="flex flex-wrap gap-2">
            <ButtonControl aria-label="Delete item">Delete</ButtonControl>
            <ButtonControl size="icon" aria-label="Close">✕</ButtonControl>
            <ButtonControl size="icon" aria-label="Menu">☰</ButtonControl>
          </div>
        </div>
      </div>
    `,
  }),
}
