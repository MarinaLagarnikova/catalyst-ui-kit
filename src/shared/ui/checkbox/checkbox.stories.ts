import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Checkbox from './Checkbox.vue'

const meta: Meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'dark/zinc',
        'dark/white',
        'light/zinc',
        'white',
        'zinc',
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
    modelValue: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  args: {
    color: 'dark/zinc',
    modelValue: false,
    disabled: false,
    label: 'Accept terms and conditions',
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false)
      return { args, checked }
    },
    template: `
      <div class="flex items-center gap-3">
        <Checkbox v-bind="args" v-model="checked" />
      </div>
    `,
  }),
}

export const Checked: Story = {
  args: {
    color: 'dark/zinc',
    modelValue: true,
    label: 'Checked by default',
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(true)
      return { args, checked }
    },
    template: `
      <div class="flex items-center gap-3">
        <Checkbox v-bind="args" v-model="checked" />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    color: 'dark/zinc',
    modelValue: false,
    disabled: true,
    label: 'Disabled option',
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false)
      return { args, checked }
    },
    template: `
      <div class="flex items-center gap-3">
        <Checkbox v-bind="args" v-model="checked" />
      </div>
    `,
  }),
}

export const Colors: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const colors = [
        'dark/zinc',
        'dark/white',
        'light/zinc',
        'white',
        'zinc',
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
      ]
      const checkedStates: any = {}
      for (const c of colors) {
        checkedStates[c] = ref(false)
      }
      return { colors, checkedStates }
    },
    template: `
      <div class="space-y-4">
        <div v-for="color in colors" :key="color" class="flex items-center gap-3">
          <Checkbox :color="color" v-model="checkedStates[color]" :label="color" />
          <span class="text-xs text-zinc-500 dark:text-zinc-400">
            ({{ checkedStates[color] ? 'checked' : 'unchecked' }})
          </span>
        </div>
      </div>
    `,
  }),
}

export const CheckboxGroup: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const items = [
        { id: 1, label: 'Enable notifications', checked: ref(true) },
        { id: 2, label: 'Auto-update', checked: ref(true) },
        { id: 3, label: 'Show in menu', checked: ref(false) },
        { id: 4, label: 'Allow analytics', checked: ref(false) },
      ]
      return { items }
    },
    template: `
      <div class="space-y-3">
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white">Settings</h3>
        <div class="space-y-3">
          <Checkbox
            v-for="item in items"
            :key="item.id"
            v-model="item.checked"
            :label="item.label"
            color="dark/zinc"
          />
        </div>
      </div>
    `,
  }),
}

export const InForm: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const acceptedTerms = ref(false)
      const newsletter = ref(true)
      const privacy = ref(false)
      return { acceptedTerms, newsletter, privacy }
    },
    template: `
      <div class="rounded-lg border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-zinc-900 max-w-md">
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Create Account</h3>
        <form class="space-y-4">
          <Checkbox v-model="acceptedTerms" color="blue" class="mb-3">
            <template #default="{ checked }">
              <span class="text-sm text-zinc-700 dark:text-zinc-300 select-none leading-tight">
                I accept the <a href="#" class="text-blue-600 hover:text-blue-700">Terms of Service</a> and <a href="#" class="text-blue-600 hover:text-blue-700">Privacy Policy</a>
              </span>
            </template>
          </Checkbox>
          <Checkbox v-model="newsletter" color="blue" label="Subscribe to our newsletter" class="mb-3" />
          <Checkbox v-model="privacy" color="blue" label="Allow profile discovery" />
          <button
            type="submit"
            :disabled="!acceptedTerms"
            class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
          >
            Create Account
          </button>
        </form>
      </div>
    `,
  }),
}

export const AllColorsGrid: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const colors = [
        { name: 'dark/zinc', color: 'dark/zinc' },
        { name: 'dark/white', color: 'dark/white' },
        { name: 'light/zinc', color: 'light/zinc' },
        { name: 'white', color: 'white' },
        { name: 'zinc', color: 'zinc' },
        { name: 'red', color: 'red' },
        { name: 'orange', color: 'orange' },
        { name: 'amber', color: 'amber' },
        { name: 'yellow', color: 'yellow' },
        { name: 'lime', color: 'lime' },
        { name: 'green', color: 'green' },
        { name: 'emerald', color: 'emerald' },
        { name: 'teal', color: 'teal' },
        { name: 'cyan', color: 'cyan' },
        { name: 'sky', color: 'sky' },
        { name: 'blue', color: 'blue' },
        { name: 'indigo', color: 'indigo' },
        { name: 'violet', color: 'violet' },
        { name: 'purple', color: 'purple' },
        { name: 'fuchsia', color: 'fuchsia' },
        { name: 'pink', color: 'pink' },
        { name: 'rose', color: 'rose' },
      ]
      const checkedStates: any = {}
      for (const item of colors) {
        checkedStates[item.name] = ref(false)
      }
      return { colors, checkedStates }
    },
    template: `
      <div class="p-8">
        <h3 class="text-xl font-semibold text-zinc-900 dark:text-white mb-6">All Checkbox Colors</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div v-for="item in colors" :key="item.name" class="space-y-2">
            <Checkbox :color="item.color" v-model="checkedStates[item.name]" :label="item.name" />
          </div>
        </div>
      </div>
    `,
  }),
}

export const WithDescription: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const allowEmbedding = ref(false)
      const allowComments = ref(true)
      const enableNotifications = ref(false)
      return { allowEmbedding, allowComments, enableNotifications }
    },
    template: `
      <div class="space-y-6 max-w-md">
        <h3 class="text-lg font-semibold text-[--color-zinc-950]">Privacy Settings</h3>

        <div class="space-y-4">
          <div>
            <Checkbox v-model="allowEmbedding" color="dark/zinc" label="Allow embedding" />
            <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400 ml-7">
              Allow others to embed your event details on their own site.
            </p>
          </div>

          <div>
            <Checkbox v-model="allowComments" color="dark/zinc" label="Allow comments" />
            <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400 ml-7">
              Let others leave comments on your profile.
            </p>
          </div>

          <div>
            <Checkbox v-model="enableNotifications" color="dark/zinc" label="Enable notifications" />
            <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400 ml-7">
              Receive email notifications about updates and mentions.
            </p>
          </div>
        </div>
      </div>
    `,
  }),
}

export const WithCustomLayout: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Example of checkboxes integrated into a custom layout with labels, demonstrating how checkboxes can be used in form settings and configuration panels.',
      },
    },
  },
  render: () => ({
    components: { Checkbox },
    setup() {
      const allowEmbedding = ref(false)
      const allowComments = ref(true)
      const enableNotifications = ref(false)
      return { allowEmbedding, allowComments, enableNotifications }
    },
    template: `
      <div class="space-y-6 max-w-md">
        <h3 class="text-lg font-semibold text-[--color-zinc-950]">Privacy Settings</h3>

        <div class="space-y-4">
          <div>
            <div class="flex items-center justify-between gap-4">
              <span class="text-base/6 text-zinc-900 dark:text-white font-medium">Allow embedding</span>
              <Checkbox v-model="allowEmbedding" color="dark/zinc" />
            </div>
            <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Allow others to embed your event details on their own site.
            </p>
          </div>

          <div>
            <div class="flex items-center justify-between gap-4">
              <span class="text-base/6 text-zinc-900 dark:text-white font-medium">Allow comments</span>
              <Checkbox v-model="allowComments" color="dark/zinc" />
            </div>
            <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Let others leave comments on your profile.
            </p>
          </div>

          <div>
            <div class="flex items-center justify-between gap-4">
              <span class="text-base/6 text-zinc-900 dark:text-white font-medium">Enable notifications</span>
              <Checkbox v-model="enableNotifications" color="dark/zinc" />
            </div>
            <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Receive email notifications about updates and mentions.
            </p>
          </div>
        </div>
      </div>
    `,
  }),
}
