import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import BankSelector from './BankSelector.vue'

export default {
  title: 'Widgets/BankSelector',
  component: BankSelector,
  tags: ['autodocs'],
} satisfies Meta

export const Default: StoryObj = {
  render: () => ({
    components: { BankSelector },
    setup() {
      // Первый банк выбран по умолчанию, остальные нет
      const selected = ref<string[]>(['1'])

      function handleSubmit() {
        alert(`Отправка в ${selected.value.length} банков`)
      }

      function handleCancel() {
        selected.value = ['1'] // Всегда оставляем первый банк
      }

      return {
        selected,
        banks: [
          { id: '1', name: 'Сбер', code: '044525225', logo: 'https://logo.clearbit.com/sber.ru' },
          { id: '2', name: 'Тинькофф', code: '044525974', logo: 'https://logo.clearbit.com/tinkoff.ru' },
          { id: '3', name: 'Альфа-Банк', code: '044525593', logo: 'https://logo.clearbit.com/alfabank.ru' },
        ],
        handleSubmit,
        handleCancel
      }
    },
    template: `
      <div class="p-8 flex justify-center bg-zinc-100 dark:bg-zinc-950 min-h-screen">
        <BankSelector
          :banks="banks"
          v-model="selected"
          @submit="handleSubmit"
          @cancel="handleCancel"
        />
      </div>
    `,
  }),
}
