import type { Meta, StoryObj } from '@storybook/vue3'
import Divider from './Divider.vue'

const meta: Meta<typeof Divider> = {
  title: 'UI/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    soft: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Divider>

export const Default: Story = {
  args: {
    soft: false,
  },
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args }
    },
    template: `
      <div>
        <p class="text-sm text-zinc-600 dark:text-zinc-400">
          Content above the divider
        </p>
        <Divider v-bind="args" />
        <p class="text-sm text-zinc-600 dark:text-zinc-400">
          Content below the divider
        </p>
      </div>
    `,
  }),
}

export const Soft: Story = {
  args: {
    soft: true,
  },
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args }
    },
    template: `
      <div>
        <p class="text-sm text-zinc-600 dark:text-zinc-400">
          Content above the soft divider
        </p>
        <Divider v-bind="args" />
        <p class="text-sm text-zinc-600 dark:text-zinc-400">
          Content below the soft divider
        </p>
      </div>
    `,
  }),
}

export const WithText: Story = {
  render: () => ({
    components: { Divider },
    template: `
      <div class="space-y-4">
        <p class="text-sm text-zinc-600 dark:text-zinc-400">
          Section 1 content
        </p>
        <Divider />
        <div class="relative flex items-center py-2">
          <Divider />
          <span class="absolute left-1/2 -translate-x-1/2 bg-white px-4 text-sm text-zinc-900 dark:bg-zinc-950 dark:text-white">
            OR
          </span>
        </div>
        <p class="text-sm text-zinc-600 dark:text-zinc-400">
          Section 2 content
        </p>
      </div>
    `,
  }),
}

export const MultipleDividers: Story = {
  render: () => ({
    components: { Divider },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold text-zinc-900 dark:text-white">Section 1</h3>
          <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <Divider />
        <div>
          <h3 class="text-lg font-semibold text-zinc-900 dark:text-white">Section 2</h3>
          <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Divider soft />
        <div>
          <h3 class="text-lg font-semibold text-zinc-900 dark:text-white">Section 3</h3>
          <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
        <Divider />
        <div>
          <h3 class="text-lg font-semibold text-zinc-900 dark:text-white">Section 4</h3>
          <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Duis aute irure dolor in reprehenderit in voluptate velit.
          </p>
        </div>
      </div>
    `,
  }),
}

export const InCard: Story = {
  render: () => ({
    components: { Divider },
    template: `
      <div class="rounded-lg border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white">Card Title</h3>
        <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Some content in the card
        </p>
        <Divider class="my-4" />
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white">Another Section</h3>
        <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          More content below the divider
        </p>
      </div>
    `,
  }),
}

export const CompleteShowcase: Story = {
  render: () => ({
    components: { Divider },
    template: `
      <div class="space-y-8">
        <!-- Default Divider -->
        <div>
          <h3 class="text-sm font-semibold mb-3">Default Divider</h3>
          <div class="rounded-lg border border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Content above</p>
            <Divider class="my-3" />
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Content below</p>
          </div>
        </div>

        <!-- Soft Divider -->
        <div>
          <h3 class="text-sm font-semibold mb-3">Soft Divider</h3>
          <div class="rounded-lg border border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Content above</p>
            <Divider soft class="my-3" />
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Content below</p>
          </div>
        </div>

        <!-- With Text -->
        <div>
          <h3 class="text-sm font-semibold mb-3">With Text Label</h3>
          <div class="rounded-lg border border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
            <p class="text-sm text-zinc-600 dark:text-zinc-400 mb-3">Section 1</p>
            <div class="relative flex items-center py-2">
              <Divider />
              <span class="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-xs font-medium text-zinc-900 dark:bg-zinc-900 dark:text-white">
                OR
              </span>
            </div>
            <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-3">Section 2</p>
          </div>
        </div>

        <!-- Multiple Sections -->
        <div>
          <h3 class="text-sm font-semibold mb-3">Multiple Sections</h3>
          <div class="rounded-lg border border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
            <div class="space-y-4">
              <div>
                <h4 class="text-sm font-medium text-zinc-900 dark:text-white">Step 1</h4>
                <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">First step description</p>
              </div>
              <Divider />
              <div>
                <h4 class="text-sm font-medium text-zinc-900 dark:text-white">Step 2</h4>
                <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Second step description</p>
              </div>
              <Divider />
              <div>
                <h4 class="text-sm font-medium text-zinc-900 dark:text-white">Step 3</h4>
                <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Third step description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}
