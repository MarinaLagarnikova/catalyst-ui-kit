import type { Meta, StoryObj } from '@storybook/vue3'
import Select from './Select.vue'

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
    multiple: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    disabled: false,
    invalid: false,
    multiple: false,
  },
  render: (args) => ({
    components: { Select },
    setup() {
      return { args }
    },
    template: `
      <Select v-bind="args">
        <option value="">Select an option...</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { Select },
    setup() {
      return { args }
    },
    template: `
      <Select v-bind="args">
        <option value="">Select an option...</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
    `,
  }),
}

export const Invalid: Story = {
  args: {
    invalid: true,
  },
  render: (args) => ({
    components: { Select },
    setup() {
      return { args }
    },
    template: `
      <Select v-bind="args">
        <option value="">Select an option...</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
    `,
  }),
}

export const Multiple: Story = {
  args: {
    multiple: true,
  },
  render: (args) => ({
    components: { Select },
    setup() {
      return { args }
    },
    template: `
      <Select v-bind="args" class="h-32">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
      </Select>
    `,
  }),
}

export const WithOptGroups: Story = {
  render: () => ({
    components: { Select },
    template: `
      <Select>
        <option value="">Select a fruit...</option>
        <optgroup label="Citrus">
          <option value="orange">Orange</option>
          <option value="lemon">Lemon</option>
          <option value="lime">Lime</option>
        </optgroup>
        <optgroup label="Berries">
          <option value="strawberry">Strawberry</option>
          <option value="blueberry">Blueberry</option>
          <option value="raspberry">Raspberry</option>
        </optgroup>
      </Select>
    `,
  }),
}

export const WithLabels: Story = {
  render: () => ({
    components: { Select },
    template: `
      <div class="space-y-4">
        <div>
          <label for="select1" class="block text-sm font-medium text-zinc-950 dark:text-white mb-1">
            Favorite Color
          </label>
          <Select id="select1" name="color">
            <option value="">Select a color...</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </Select>
        </div>

        <div>
          <label for="select2" class="block text-sm font-medium text-zinc-950 dark:text-white mb-1">
            Country
          </label>
          <Select id="select2" name="country">
            <option value="">Select a country...</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
          </Select>
        </div>
      </div>
    `,
  }),
}

export const Controlled: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const selectedValue = ref('')
      return { selectedValue }
    },
    template: `
      <div class="space-y-4">
        <Select v-model="selectedValue">
          <option value="">Select an option...</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </Select>
        <p class="text-sm text-zinc-600 dark:text-zinc-400">
          Selected value: {{ selectedValue || 'None' }}
        </p>
      </div>
    `,
  }),
}

export const MultipleControlled: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const selectedValues = ref<string[]>([])
      return { selectedValues }
    },
    template: `
      <div class="space-y-4">
        <Select v-model="selectedValues" multiple class="h-32">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
        </Select>
        <p class="text-sm text-zinc-600 dark:text-zinc-400">
          Selected values: {{ selectedValues.length ? selectedValues.join(', ') : 'None' }}
        </p>
      </div>
    `,
  }),
}

export const CompleteShowcase: Story = {
  render: () => ({
    components: { Select },
    template: `
      <div class="space-y-6">
        <!-- Default Select -->
        <div>
          <h3 class="text-sm font-semibold mb-3">Default Select</h3>
          <Select>
            <option value="">Select an option...</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Select>
        </div>

        <!-- Disabled Select -->
        <div>
          <h3 class="text-sm font-semibold mb-3">Disabled Select</h3>
          <Select disabled>
            <option value="">Select an option...</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Select>
        </div>

        <!-- Invalid Select -->
        <div>
          <h3 class="text-sm font-semibold mb-3">Invalid Select</h3>
          <Select invalid>
            <option value="">Select an option...</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Select>
        </div>

        <!-- Multiple Select -->
        <div>
          <h3 class="text-sm font-semibold mb-3">Multiple Select</h3>
          <Select multiple class="h-32">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
            <option value="5">Option 5</option>
          </Select>
        </div>

        <!-- With OptGroups -->
        <div>
          <h3 class="text-sm font-semibold mb-3">With Option Groups</h3>
          <Select>
            <option value="">Select a fruit...</option>
            <optgroup label="Citrus">
              <option value="orange">Orange</option>
              <option value="lemon">Lemon</option>
              <option value="lime">Lime</option>
            </optgroup>
            <optgroup label="Berries">
              <option value="strawberry">Strawberry</option>
              <option value="blueberry">Blueberry</option>
              <option value="raspberry">Raspberry</option>
            </optgroup>
          </Select>
        </div>

        <!-- With Labels -->
        <div>
          <h3 class="text-sm font-semibold mb-3">With Labels</h3>
          <div class="space-y-4">
            <div>
              <label for="color" class="block text-sm font-medium text-zinc-950 dark:text-white mb-1">
                Favorite Color
              </label>
              <Select id="color" name="color">
                <option value="">Select a color...</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </Select>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}
