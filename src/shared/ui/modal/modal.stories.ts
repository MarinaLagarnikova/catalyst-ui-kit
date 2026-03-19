import type { Meta, StoryObj } from '@storybook/vue3'
import Modal from './Modal.vue'
import Button from '../button/index.ts'

type Story = StoryObj<typeof Modal>

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
    title: { control: 'text' },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
    },
    close: { action: 'close' },
  },
}

export default meta

export const Default: Story = {
  args: {
    modelValue: true,
    title: 'Modal title',
    size: 'md',
  },
  render: (args) => ({
    components: { Modal },
    setup() {
      return { args }
    },
    template: `
      <Modal v-model="args.modelValue" title="args.title" :size="args.size" @close="args.close">
        <p>This is a simple modal dialog.</p>
        <p>Click the backdrop or close button to close it.</p>
      </Modal>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Modal },
    setup() {
      const size = ref<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'>('md')
      const isOpen = ref(true)

      return { size, isOpen }
    },
    template: `
      <div style="height: 500px; display: flex; flex-direction: column; gap: 1rem;">
        <Modal v-model="isOpen" title="Size: {{ size }}" :size="size">
          <p>Modal content goes here.</p>
        </Modal>
      </div>
    `,
  }),
}

export const BankSelection: Story = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      const isOpen = ref(true)
      const selectedBank = ref('')
      const banks = ref([
        { id: 'sber', name: 'Сбер' },
        { id: 'tinkoff', name: 'Тинькофф' },
        { id: 'vtb', name: 'ВТБ' },
        { id: 'alfa', name: 'Альфа' },
        { id: 'raiffeisen', name: 'Райффайзен' },
      ])

      const handleBankSelect = (bankId: string) => {
        selectedBank.value = bankId
      }

      return { isOpen, selectedBank, banks, handleBankSelect }
    },
    template: `
      <Button @click="isOpen = true">Select Bank</Button>

      <Modal v-model="isOpen" title="Выберите банк" size="lg">
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <div
            v-for="bank in banks"
            :key="bank.id"
            @click="handleBankSelect(bank.id)"
            style="
              padding: 1rem;
              border: 1px solid #e5e7eb;
              border-radius: 0.5rem;
              cursor: pointer;
              display: flex;
              align-items: center;
              gap: 1rem;
            "
            :style="selectedBank === bank.id ? 'border-color: #3b82f6; background-color: #eff6ff;' : ''"
          >
            <div
              style="
                width: 3rem;
                height: 3rem;
                background-color: #f3f4f6;
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 600;
                color: white;
              "
            >
              {{ bank.name.charAt(0) }}
            </div>
            <div style="flex: 1;">
              <div style="font-weight: 500; color: #111827;">{{ bank.name }}</div>
              <div style="font-size: 0.875rem; color: #6b7280;">{{ bank.id.toUpperCase() }}</div>
            </div>
          </div>
        </div>
      </Modal>
    `,
  }),
}

export const WithoutTitle: Story = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      const isOpen = ref(true)

      return { isOpen }
    },
    template: `
      <Modal v-model="isOpen">
        <p>This modal has no title.</p>
        <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
          <Button @click="isOpen = false">Cancel</Button>
          <Button color="indigo" @click="isOpen = false">Confirm</Button>
        </div>
      </Modal>
    `,
  }),
}
