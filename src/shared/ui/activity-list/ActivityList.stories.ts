import type { Meta, StoryObj } from '@storybook/vue3'
import ActivityList from './ActivityList.vue'
import { ref } from 'vue'
import Checkbox from '@/shared/ui/checkbox/Checkbox.vue'

const meta: Meta<typeof ActivityList> = {
  title: 'UI/ActivityList',
  component: ActivityList,
  tags: ['autodocs'],
  argTypes: {
    class: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof ActivityList>

const mockItems = [
  {
    user: {
      name: 'Michael Foster',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'ios-app',
    commit: '2d89f0c8',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  {
    user: {
      name: 'Lindsay Walton',
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'mobile-api',
    commit: '249df660',
    branch: 'main',
    date: '3h',
    dateTime: '2023-01-23T09:00',
  },
  {
    user: {
      name: 'Courtney Henry',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'ios-app',
    commit: '11464223',
    branch: 'main',
    date: '12h',
    dateTime: '2023-01-23T00:00',
  },
  {
    user: {
      name: 'Courtney Henry',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'company-website',
    commit: 'dad28e95',
    branch: 'main',
    date: '2d',
    dateTime: '2023-01-21T13:00',
  },
  {
    user: {
      name: 'Michael Foster',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'relay-service',
    commit: '624bc94c',
    branch: 'main',
    date: '5d',
    dateTime: '2023-01-18T12:34',
  },
]

export const Default: Story = {
  args: {
    items: mockItems,
  },
  render: (args) => ({
    components: { ActivityList },
    setup() {
      return { args }
    },
    template: `
      <ActivityList v-bind="args" />
    `,
  }),
}

export const WithMaxHeight: Story = {
  args: {
    items: mockItems,
    class: 'max-h-96 overflow-y-auto',
  },
  render: (args) => ({
    components: { ActivityList },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full">
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Recent Activity</h3>
        <ActivityList v-bind="args" />
      </div>
    `,
  }),
}

export const InCard: Story = {
  args: {
    items: mockItems,
  },
  render: (args) => ({
    components: { ActivityList },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full rounded-lg border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Recent Activity</h3>
        <ActivityList v-bind="args" />
      </div>
    `,
  }),
}

export const Empty: Story = {
  args: {
    items: [],
  },
  render: (args) => ({
    components: { ActivityList },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full">
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Recent Activity</h3>
        <ActivityList v-bind="args" />
        <p class="text-sm text-zinc-500 dark:text-zinc-400 text-center py-8">No recent activity</p>
      </div>
    `,
  }),
}

export const CompleteShowcase: Story = {
  render: () => ({
    components: { ActivityList },
    setup() {
      return { items: mockItems }
    },
    template: `
      <div class="space-y-8 p-8">
        <!-- Default -->
        <div>
          <h3 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Default Activity List</h3>
          <div class="rounded-lg border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-900">
            <ActivityList :items="items" />
          </div>
        </div>

        <!-- With Scroll -->
        <div>
          <h3 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Scrollable (Max Height)</h3>
          <div class="rounded-lg border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-900">
            <ActivityList :items="items" class="max-h-80 overflow-y-auto" />
          </div>
        </div>

        <!-- With Header -->
        <div>
          <h3 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">With Header Card</h3>
          <div class="rounded-lg border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
            <div class="mb-6">
              <h4 class="text-lg font-semibold text-zinc-900 dark:text-white">Repository Activity</h4>
              <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Latest commits across all projects</p>
            </div>
            <ActivityList :items="items" />
          </div>
        </div>
      </div>
    `,
  }),
}

export const WithCustomActions: Story = {
  render: () => ({
    components: { ActivityList, Checkbox },
    setup() {
      const items = mockItems
      const selectedItems = ref<Record<string, boolean>>({})

      function toggleItem(commit: string) {
        selectedItems.value[commit] = !selectedItems.value[commit]
      }

      return { items, selectedItems, toggleItem }
    },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">With Checkboxes</h3>
          <div class="rounded-lg border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-900">
            <ActivityList :items="items">
              <template #actions="{ item }">
                <Checkbox
                  :model-value="selectedItems[item.commit]"
                  @update:model-value="toggleItem(item.commit)"
                  color="blue"
                />
              </template>
            </ActivityList>
          </div>
          <p class="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            Selected: {{ Object.keys(selectedItems).filter(k => selectedItems[k]).length }} / {{ items.length }}
          </p>
        </div>
      </div>
    `,
  }),
}
