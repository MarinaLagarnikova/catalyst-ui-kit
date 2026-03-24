import type { Meta, StoryObj } from '@storybook/vue3'
import IconDisplay from './IconDisplay.vue'

// Import Heroicons
import * as OutlineIcons from '@heroicons/vue/24/outline'
import * as SolidIcons from '@heroicons/vue/24/solid'

const meta: Meta<typeof IconDisplay> = {
  title: 'UI/Icons/Heroicons',
  component: IconDisplay,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof IconDisplay>

// Common outline icons
const commonOutlineIcons = [
  { name: 'CheckIcon', icon: OutlineIcons.CheckIcon },
  { name: 'XMarkIcon', icon: OutlineIcons.XMarkIcon },
  { name: 'PlusIcon', icon: OutlineIcons.PlusIcon },
  { name: 'MinusIcon', icon: OutlineIcons.MinusIcon },
  { name: 'PencilIcon', icon: OutlineIcons.PencilIcon },
  { name: 'TrashIcon', icon: OutlineIcons.TrashIcon },
  { name: 'ChevronDownIcon', icon: OutlineIcons.ChevronDownIcon },
  { name: 'ChevronUpIcon', icon: OutlineIcons.ChevronUpIcon },
  { name: 'ChevronLeftIcon', icon: OutlineIcons.ChevronLeftIcon },
  { name: 'ChevronRightIcon', icon: OutlineIcons.ChevronRightIcon },
  { name: 'HomeIcon', icon: OutlineIcons.HomeIcon },
  { name: 'UserIcon', icon: OutlineIcons.UserIcon },
  { name: 'CogIcon', icon: OutlineIcons.CogIcon },
  { name: 'BellIcon', icon: OutlineIcons.BellIcon },
  { name: 'SearchIcon', icon: OutlineIcons.SearchIcon },
  { name: 'EnvelopeIcon', icon: OutlineIcons.EnvelopeIcon },
  { name: 'PhoneIcon', icon: OutlineIcons.PhoneIcon },
  { name: 'CalendarIcon', icon: OutlineIcons.CalendarIcon },
  { name: 'ClockIcon', icon: OutlineIcons.ClockIcon },
  { name: 'MapPinIcon', icon: OutlineIcons.MapPinIcon },
]

// Common solid icons
const commonSolidIcons = [
  { name: 'CheckIcon', icon: SolidIcons.CheckIcon },
  { name: 'XMarkIcon', icon: SolidIcons.XMarkIcon },
  { name: 'PlusIcon', icon: SolidIcons.PlusIcon },
  { name: 'MinusIcon', icon: SolidIcons.MinusIcon },
  { name: 'PencilIcon', icon: SolidIcons.PencilIcon },
  { name: 'TrashIcon', icon: SolidIcons.TrashIcon },
  { name: 'ChevronDownIcon', icon: SolidIcons.ChevronDownIcon },
  { name: 'ChevronUpIcon', icon: SolidIcons.ChevronUpIcon },
  { name: 'ChevronLeftIcon', icon: SolidIcons.ChevronLeftIcon },
  { name: 'ChevronRightIcon', icon: SolidIcons.ChevronRightIcon },
  { name: 'HomeIcon', icon: SolidIcons.HomeIcon },
  { name: 'UserIcon', icon: SolidIcons.UserIcon },
  { name: 'CogIcon', icon: SolidIcons.CogIcon },
  { name: 'BellIcon', icon: SolidIcons.BellIcon },
  { name: 'SearchIcon', icon: SolidIcons.SearchIcon },
  { name: 'EnvelopeIcon', icon: SolidIcons.EnvelopeIcon },
  { name: 'PhoneIcon', icon: SolidIcons.PhoneIcon },
  { name: 'CalendarIcon', icon: SolidIcons.CalendarIcon },
  { name: 'ClockIcon', icon: SolidIcons.ClockIcon },
  { name: 'MapPinIcon', icon: SolidIcons.MapPinIcon },
]

// All outline icons (alphabetically)
const allOutlineIcons = Object.keys(OutlineIcons)
  .filter(key => key !== 'default')
  .sort()
  .map(key => ({
    name: key,
    icon: (OutlineIcons as any)[key],
  }))

// All solid icons (alphabetically)
const allSolidIcons = Object.keys(SolidIcons)
  .filter(key => key !== 'default')
  .sort()
  .map(key => ({
    name: key,
    icon: (SolidIcons as any)[key],
  }))

export const CommonOutline: Story = {
  render: () => ({
    components: { IconDisplay },
    setup() {
      return { icons: commonOutlineIcons }
    },
    template: `
      <div class="p-8">
        <h1 class="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Common Outline Icons</h1>
        <p class="text-zinc-600 dark:text-zinc-400 mb-8">Most frequently used outline icons from Heroicons</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <IconDisplay
            v-for="iconData in icons"
            :key="iconData.name"
            :name="iconData.name"
            :icon="iconData.icon"
          />
        </div>
      </div>
    `,
  }),
}

export const CommonSolid: Story = {
  render: () => ({
    components: { IconDisplay },
    setup() {
      return { icons: commonSolidIcons }
    },
    template: `
      <div class="p-8">
        <h1 class="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Common Solid Icons</h1>
        <p class="text-zinc-600 dark:text-zinc-400 mb-8">Most frequently used solid icons from Heroicons</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <IconDisplay
            v-for="iconData in icons"
            :key="iconData.name"
            :name="iconData.name"
            :icon="iconData.icon"
          />
        </div>
      </div>
    `,
  }),
}

export const AllOutlineIcons: Story = {
  render: () => ({
    components: { IconDisplay },
    setup() {
      return { icons: allOutlineIcons }
    },
    template: `
      <div class="p-8">
        <h1 class="text-3xl font-bold text-zinc-900 dark:text-white mb-2">All Outline Icons</h1>
        <p class="text-zinc-600 dark:text-zinc-400 mb-8">All {{ icons.length }} outline icons from Heroicons</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          <IconDisplay
            v-for="iconData in icons"
            :key="iconData.name"
            :name="iconData.name"
            :icon="iconData.icon"
            size="sm"
          />
        </div>
      </div>
    `,
  }),
}

export const AllSolidIcons: Story = {
  render: () => ({
    components: { IconDisplay },
    setup() {
      return { icons: allSolidIcons }
    },
    template: `
      <div class="p-8">
        <h1 class="text-3xl font-bold text-zinc-900 dark:text-white mb-2">All Solid Icons</h1>
        <p class="text-zinc-600 dark:text-zinc-400 mb-8">All {{ icons.length }} solid icons from Heroicons</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          <IconDisplay
            v-for="iconData in icons"
            :key="iconData.name"
            :name="iconData.name"
            :icon="iconData.icon"
            size="sm"
          />
        </div>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { IconDisplay },
    setup() {
      return { icon: OutlineIcons.StarIcon }
    },
    template: `
      <div class="p-8">
        <h1 class="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Icon Sizes</h1>
        <p class="text-zinc-600 dark:text-zinc-400 mb-8">Different icon sizes available</p>
        <div class="flex flex-wrap gap-8">
          <div class="flex flex-col items-center gap-2">
            <IconDisplay name="Small" :icon="icon" size="sm" />
            <span class="text-sm text-zinc-600 dark:text-zinc-400">size-4 (16px)</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <IconDisplay name="Medium" :icon="icon" size="md" />
            <span class="text-sm text-zinc-600 dark:text-zinc-400">size-5 (20px)</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <IconDisplay name="Large" :icon="icon" size="lg" />
            <span class="text-sm text-zinc-600 dark:text-zinc-400">size-6 (24px)</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <IconDisplay name="Extra Large" :icon="icon" size="xl" />
            <span class="text-sm text-zinc-600 dark:text-zinc-400">size-8 (32px)</span>
          </div>
        </div>
      </div>
    `,
  }),
}

export const UsageExamples: Story = {
  render: () => ({
    components: { IconDisplay },
    setup() {
      return {
        CheckIcon: OutlineIcons.CheckIcon,
        XMarkIcon: OutlineIcons.XMarkIcon,
        ChevronDownIcon: OutlineIcons.ChevronDownIcon,
        BellIcon: OutlineIcons.BellIcon,
        UserIcon: OutlineIcons.UserIcon,
        CogIcon: OutlineIcons.CogIcon,
      }
    },
    template: `
      <div class="p-8">
        <h1 class="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Usage Examples</h1>
        <p class="text-zinc-600 dark:text-zinc-400 mb-8">Common usage patterns for Heroicons</p>

        <div class="space-y-8">
          <!-- In Buttons -->
          <div>
            <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">In Buttons</h2>
            <div class="flex flex-wrap gap-4">
              <button class="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-white dark:bg-white dark:text-zinc-900">
                <CheckIcon class="size-5" />
                <span>Confirm</span>
              </button>
              <button class="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-zinc-700 dark:border-white/10 dark:text-zinc-300">
                <XMarkIcon class="size-5" />
                <span>Cancel</span>
              </button>
              <button class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                <ChevronDownIcon class="size-5" />
                <span>Dropdown</span>
              </button>
            </div>
          </div>

          <!-- Standalone -->
          <div>
            <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">Standalone Icons</h2>
            <div class="flex gap-6">
              <button class="rounded-full p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-white/10">
                <BellIcon class="size-6" />
              </button>
              <button class="rounded-full p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-white/10">
                <UserIcon class="size-6" />
              </button>
              <button class="rounded-full p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-white/10">
                <CogIcon class="size-6" />
              </button>
            </div>
          </div>

          <!-- With Badges -->
          <div>
            <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">With Badges</h2>
            <div class="flex gap-6">
              <div class="relative">
                <BellIcon class="size-6 text-zinc-600 dark:text-zinc-400" />
                <span class="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  3
                </span>
              </div>
              <div class="relative">
                <UserIcon class="size-6 text-zinc-600 dark:text-zinc-400" />
                <span class="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">
                  ✓
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}
