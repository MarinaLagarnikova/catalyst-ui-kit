import type { Meta, StoryObj } from '@storybook/vue3'
import Checkbox from './Checkbox.vue'
import CheckboxField from './CheckboxField.vue'
import CheckboxGroup from './CheckboxGroup.vue'

type Story = StoryObj<typeof Checkbox>

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
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
    defaultChecked: { control: 'boolean' },
    checked: { control: 'boolean' },
    name: { control: 'text' },
    value: { control: 'text' },
    indeterminate: { control: 'boolean' },
  },
}

export default meta

export const Uncontrolled: Story = {
  render: () => ({
    components: { Checkbox },
    template: '<Checkbox defaultChecked />',
  }),
}

export const Controlled: Story = {
  render: () => ({
    components: { Checkbox },
    template: '<Checkbox checked />',
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Checkbox, CheckboxField },
    template: `
      <CheckboxField>
        <template #checkbox>
          <Checkbox name="notifications" />
        </template>
        <template #label>
          Enable notifications
        </template>
      </CheckboxField>
    `,
  }),
}

export const WithLabelUnchecked: Story = {
  render: () => ({
    components: { Checkbox, CheckboxField },
    template: `
      <CheckboxField>
        <template #checkbox>
          <Checkbox name="notifications" defaultChecked={false} />
        </template>
        <template #label>
          Enable notifications
        </template>
      </CheckboxField>
    `,
  }),
}

export const Colors: Story = {
  render: () => ({
    components: { CheckboxGroup, CheckboxField, Checkbox },
    template: `
      <CheckboxGroup>
        <CheckboxField>
          <template #checkbox>
            <Checkbox color="dark/zinc" defaultChecked />
          </template>
          <template #label>
            Dark/zinc
          </template>
        </CheckboxField>
        <CheckboxField>
          <template #checkbox>
            <Checkbox color="indigo" defaultChecked />
          </template>
          <template #label>
            Indigo
          </template>
        </CheckboxField>
        <CheckboxField>
          <template #checkbox>
            <Checkbox color="cyan" defaultChecked />
          </template>
          <template #label>
            Cyan
          </template>
        </CheckboxField>
        <CheckboxField>
          <template #checkbox>
            <Checkbox color="red" defaultChecked />
          </template>
          <template #label>
            Red
          </template>
        </CheckboxField>
        <CheckboxField>
          <template #checkbox>
            <Checkbox color="green" defaultChecked />
          </template>
          <template #label>
            Green
          </template>
        </CheckboxField>
      </CheckboxGroup>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { CheckboxGroup, CheckboxField, Checkbox },
    template: `
      <CheckboxGroup>
        <CheckboxField>
          <template #checkbox>
            <Checkbox name="opt1" defaultChecked />
          </template>
          <template #label>
            Option 1
          </template>
        </CheckboxField>
        <CheckboxField>
          <template #checkbox>
            <Checkbox name="opt2" disabled />
          </template>
          <template #label>
            Option 2 (disabled)
          </template>
        </CheckboxField>
      </CheckboxGroup>
    `,
  }),
}

export const Indeterminate: Story = {
  render: () => ({
    components: { CheckboxGroup, CheckboxField, Checkbox },
    template: `
      <CheckboxGroup>
        <CheckboxField>
          <template #checkbox>
            <Checkbox :checked="selectedCount > 0" :indeterminate="selectedCount !== totalCount && selectedCount > 0" />
          </template>
          <template #label>
            Select all
          </template>
        </CheckboxField>
        <CheckboxField>
          <template #checkbox>
            <Checkbox name="item1" defaultChecked />
          </template>
          <template #label>
            Item 1
          </template>
        </CheckboxField>
        <CheckboxField>
          <template #checkbox>
            <Checkbox name="item2" />
          </template>
          <template #label>
            Item 2
          </template>
        </CheckboxField>
      </CheckboxGroup>
    `,
  }),
}

export const Group: Story = {
  render: () => ({
    components: { CheckboxGroup, CheckboxField, Checkbox },
    template: `
      <CheckboxGroup>
        <CheckboxField>
          <template #checkbox>
            <Checkbox name="discoverability" value="show_on_events_page" defaultChecked />
          </template>
          <template #label>
            Show on events page
          </template>
        </CheckboxField>
        <CheckboxField>
          <template #checkbox>
            <Checkbox name="discoverability" value="allow_embedding" />
          </template>
          <template #label>
            Allow embedding
          </template>
        </CheckboxField>
      </CheckboxGroup>
    `,
  }),
}

export const WithAriaLabel: Story = {
  render: () => ({
    components: { Checkbox, CheckboxField },
    template: `
      <CheckboxField>
        <template #checkbox>
          <Checkbox aria-label="Allow embedding" name="allow_embedding" />
        </template>
      </CheckboxField>
    `,
  }),
}
