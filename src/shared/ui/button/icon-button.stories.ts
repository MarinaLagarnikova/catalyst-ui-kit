import type { Meta, StoryObj } from '@storybook/vue3'
import IconButton from './IconButton.vue'
import { PlusIcon, XMarkIcon, CheckIcon, PencilIcon } from '@heroicons/vue/24/solid'

const meta: Meta<typeof IconButton> = {
  title: 'UI/IconButton',
  component: IconButton,
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
    outline: {
      control: 'boolean',
    },
    plain: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof IconButton>

export const PlusButton: Story = {
  args: {
    color: 'dark/zinc',
  },
  render: (args) => ({
    components: { IconButton, PlusIcon },
    setup() {
      return { args }
    },
    template: `
      <IconButton v-bind="args" aria-label="Add item">
        <PlusIcon data-slot="icon" />
      </IconButton>
    `,
  }),
}

export const CloseButton: Story = {
  args: {
    color: 'dark/zinc',
  },
  render: (args) => ({
    components: { IconButton, XMarkIcon },
    setup() {
      return { args }
    },
    template: `
      <IconButton v-bind="args" aria-label="Close">
        <XMarkIcon data-slot="icon" />
      </IconButton>
    `,
  }),
}

export const CheckButton: Story = {
  args: {
    color: 'green',
  },
  render: (args) => ({
    components: { IconButton, CheckIcon },
    setup() {
      return { args }
    },
    template: `
      <IconButton v-bind="args" aria-label="Confirm">
        <CheckIcon data-slot="icon" />
      </IconButton>
    `,
  }),
}

export const EditButton: Story = {
  args: {
    color: 'indigo',
  },
  render: (args) => ({
    components: { IconButton, PencilIcon },
    setup() {
      return { args }
    },
    template: `
      <IconButton v-bind="args" aria-label="Edit">
        <PencilIcon data-slot="icon" />
      </IconButton>
    `,
  }),
}

export const OutlineExample: Story = {
  args: {
    outline: true,
  },
  render: (args) => ({
    components: { IconButton, PlusIcon },
    setup() {
      return { args }
    },
    template: `
      <IconButton v-bind="args" aria-label="Add">
        <PlusIcon data-slot="icon" />
      </IconButton>
    `,
  }),
}

export const PlainExample: Story = {
  args: {
    plain: true,
  },
  render: (args) => ({
    components: { IconButton, XMarkIcon },
    setup() {
      return { args }
    },
    template: `
      <IconButton v-bind="args" aria-label="Close">
        <XMarkIcon data-slot="icon" />
      </IconButton>
    `,
  }),
}

export const AllColors: Story = {
  render: () => ({
    components: { IconButton, PlusIcon },
    template: `
      <div class="flex gap-4 flex-wrap">
        <IconButton color="dark/zinc" aria-label="Add dark/zinc">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="light" aria-label="Add light">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="dark/white" aria-label="Add dark/white">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="dark" aria-label="Add dark">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="white" aria-label="Add white">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="zinc" aria-label="Add zinc">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="indigo" aria-label="Add indigo">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="cyan" aria-label="Add cyan">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="red" aria-label="Add red">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="orange" aria-label="Add orange">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="amber" aria-label="Add amber">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="yellow" aria-label="Add yellow">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="lime" aria-label="Add lime">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="green" aria-label="Add green">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="emerald" aria-label="Add emerald">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="teal" aria-label="Add teal">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="sky" aria-label="Add sky">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="blue" aria-label="Add blue">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="violet" aria-label="Add violet">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="purple" aria-label="Add purple">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="fuchsia" aria-label="Add fuchsia">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="pink" aria-label="Add pink">
          <PlusIcon data-slot="icon" />
        </IconButton>
        <IconButton color="rose" aria-label="Add rose">
          <PlusIcon data-slot="icon" />
        </IconButton>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { IconButton, PlusIcon },
    setup() {
      return { args }
    },
    template: `
      <IconButton v-bind="args" aria-label="Disabled add">
        <PlusIcon data-slot="icon" />
      </IconButton>
    `,
  }),
}
