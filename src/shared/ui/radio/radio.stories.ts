import type { Meta, StoryObj } from '@storybook/vue3'
import Radio from './Radio.vue'
import RadioField from './RadioField.vue'
import RadioGroup from './RadioGroup.vue'

type Story = StoryObj<typeof Radio>

const meta: Meta<typeof Radio> = {
  title: 'UI/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'dark/zinc',
        'dark/white',
        'dark',
        'zinc',
        'white',
        'red',
        'orange',
        'amber',
        'yellow',
        'lime',
        'green',
        'emerald',
        'teal',
        'cyan',
        'sky',
        'blue',
        'indigo',
        'violet',
        'purple',
        'fuchsia',
        'pink',
        'rose',
      ],
    },
    disabled: { control: 'boolean' },
    defaultValue: { control: 'text' },
    value: { control: 'text' },
    name: { control: 'text' },
  },
}

export default meta

export const Uncontrolled: Story = {
  render: () => ({
    components: { Radio },
    template: '<Radio defaultValue="option1" />',
  }),
}

export const Controlled: Story = {
  render: () => ({
    components: { Radio },
    template: '<Radio value="option1" />',
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Radio, RadioField },
    template: `
      <RadioField>
        <template #radio>
          <Radio name="framework" defaultValue="react" />
        </template>
        <template #label>
          React
        </template>
      </RadioField>
    `,
  }),
}

export const Colors: Story = {
  render: () => ({
    components: { RadioGroup, RadioField, Radio },
    template: `
      <RadioGroup>
        <RadioField>
          <template #radio>
            <Radio name="color" value="dark/zinc" defaultValue />
          </template>
          <template #label>
            Dark/zinc
          </template>
        </RadioField>
        <RadioField>
          <template #radio>
            <Radio name="color" value="indigo" />
          </template>
          <template #label>
            Indigo
          </template>
        </RadioField>
        <RadioField>
          <template #radio>
            <Radio name="color" value="cyan" />
          </template>
          <template #label>
            Cyan
          </template>
        </RadioField>
        <RadioField>
          <template #radio>
            <Radio name="color" value="red" />
          </template>
          <template #label>
            Red
          </template>
        </RadioField>
        <RadioField>
          <template #radio>
            <Radio name="color" value="green" />
          </template>
          <template #label>
            Green
          </template>
        </RadioField>
      </RadioGroup>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { RadioGroup, RadioField, Radio },
    template: `
      <RadioGroup>
        <RadioField>
          <template #radio>
            <Radio name="option" value="1" defaultValue />
          </template>
          <template #label>
            Option 1
          </template>
        </RadioField>
        <RadioField>
          <template #radio>
            <Radio name="option" value="2" disabled />
          </template>
          <template #label>
            Option 2 (disabled)
          </template>
        </RadioField>
      </RadioGroup>
    `,
  }),
}

export const Group: Story = {
  render: () => ({
    components: { RadioGroup, RadioField, Radio },
    template: `
      <RadioGroup>
        <RadioField>
          <template #radio>
            <Radio name="framework" value="react" defaultValue />
          </template>
          <template #label>
            React
          </template>
        </RadioField>
        <RadioField>
          <template #radio>
            <Radio name="framework" value="vue" />
          </template>
          <template #label>
            Vue
          </template>
        </RadioField>
        <RadioField>
          <template #radio>
            <Radio name="framework" value="angular" />
          </template>
          <template #label>
            Angular
          </template>
        </RadioField>
      </RadioGroup>
    `,
  }),
}

export const WithAriaLabel: Story = {
  render: () => ({
    components: { Radio, RadioField },
    template: `
      <RadioField>
        <template #radio>
          <Radio aria-label="Framework" name="framework" defaultValue="react" />
        </template>
        <template #label>
          React
        </template>
      </RadioField>
    `,
  }),
}
