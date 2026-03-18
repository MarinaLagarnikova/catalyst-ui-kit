import type { Meta, StoryObj } from '@storybook/vue3'
import { ButtonControl } from './index'

const meta: Meta<typeof ButtonControl> = {
  title: 'UI/Button',
  component: ButtonControl,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['dark/zinc', 'light', 'dark/white', 'dark', 'white', 'zinc', 'indigo', 'cyan', 'red', 'green'],
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
type Story = StoryObj<typeof ButtonControl>

export const Primary: Story = {
  args: {
    color: 'dark/zinc',
  },
}

export const Light: Story = {
  args: {
    color: 'light',
  },
}

export const Indigo: Story = {
  args: {
    color: 'indigo',
  },
}

export const Cyan: Story = {
  args: {
    color: 'cyan',
  },
}

export const Red: Story = {
  args: {
    color: 'red',
  },
}

export const Green: Story = {
  args: {
    color: 'green',
  },
}

export const Outline: Story = {
  args: {
    outline: true,
  },
}

export const Plain: Story = {
  args: {
    plain: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const AllColors: Story = {
  args: {},
  render: () => ({
    components: { ButtonControl },
    setup() {
      return { args }
    },
    template: `
      <div class="flex flex-wrap gap-2">
        <ButtonControl color="dark/zinc">Dark/Zinc</ButtonControl>
        <ButtonControl color="light">Light</ButtonControl>
        <ButtonControl color="dark/white">Dark/White</ButtonControl>
        <ButtonControl color="indigo">Indigo</ButtonControl>
        <ButtonControl color="cyan">Cyan</ButtonControl>
        <ButtonControl color="red">Red</ButtonControl>
        <ButtonControl color="green">Green</ButtonControl>
      </div>
    `,
  }),
}

export const AllVariants: Story = {
  args: {},
  render: () => ({
    components: { ButtonControl },
    setup() {
      return { args }
    },
    template: `
      <div class="flex flex-wrap gap-2">
        <ButtonControl>Solid</ButtonControl>
        <ButtonControl outline>Outline</ButtonControl>
        <ButtonControl plain>Plain</ButtonControl>
      </div>
    `,
  }),
}
