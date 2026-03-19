import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonControl from './ButtonControl.vue'

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
        <ButtonControl color="indigo">Indigo</ButtonControl>
        <ButtonControl color="cyan">Cyan</ButtonControl>
        <ButtonControl color="red">Red</ButtonControl>
        <ButtonControl color="green">Green</ButtonControl>
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
