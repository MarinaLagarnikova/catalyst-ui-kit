import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import BankSelector2 from './BankSelector2.vue'

export default {
  title: 'Widgets/BankSelector2',
  component: BankSelector2,
  tags: ['autodocs'],
} satisfies Meta

export const Default: StoryObj = {
  render: () => ({
    components: { BankSelector2 },
    setup() {
      // Все банки выбраны по умолчанию
      const selected = ref<string[]>(['1', '2', '3'])

      function handleSubmit() {
        alert(`Отправка в ${selected.value.length} банков`)
      }

      function handleCancel() {
        selected.value = ['1'] // Всегда оставляем первый банк
      }

      return {
        selected,
        banks: [
          {
            id: '1',
            name: 'Сбер',
            code: '044525225',
            logo: 'https://logo.clearbit.com/sber.ru',
            description: 'Кредит на любые цели 94 810 ₽/мес',
          },
          {
            id: '2',
            name: 'Тинькофф',
            code: '044525974',
            logo: 'https://logo.clearbit.com/tinkoff.ru',
            description: 'Кредит наличными 89 500 ₽/мес',
            programs: [
              { id: 'p1', name: 'Кредит на любые цели 94 810 ₽/мес' },
              { id: 'p2', name: 'Кредит наличкими 89 500 ₽/мес' },
              { id: 'p3', name: 'Ипотечный кредит 120 000 ₽/мес' },
            ],
            selectedProgram: 'p1',
          },
          {
            id: '3',
            name: 'Альфа-Банк',
            code: '044525593',
            logo: 'https://logo.clearbit.com/alfabank.ru',
            description: 'Кредит без справок 95 200 ₽/мес',
            programs: [
              { id: 'p4', name: 'Кредит без справок 95 200 ₽/мес' },
              { id: 'p5', name: 'Кредит под залог 85 000 ₽/мес' },
              { id: 'p6', name: 'Рефинансирование 88 300 ₽/мес' },
            ],
            selectedProgram: 'p4',
          },
        ],
        handleSubmit,
        handleCancel
      }
    },
    template: `
      <div class="p-8 flex justify-center items-start bg-zinc-100 dark:bg-zinc-950 h-auto">
        <BankSelector2
          :banks="banks"
          v-model="selected"
          @submit="handleSubmit"
          @cancel="handleCancel"
        />
      </div>
    `,
  }),
}
